const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "apikey, authorization, content-type, prefer",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
};

const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), {
  status,
  headers: { ...corsHeaders, "Content-Type": "application/json" },
});

const text = (body: string, status = 200) => new Response(body, {
  status,
  headers: { "Content-Type": "text/plain; charset=utf-8" },
});

const env = (name: string) => {
  const value = Deno.env.get(name);
  if (!value) throw new Error(`Missing environment variable: ${name}`);
  return value;
};

const supabaseUrl = () => env("SUPABASE_URL");
const serviceHeaders = () => ({
  apikey: env("SUPABASE_SERVICE_ROLE_KEY"),
  Authorization: `Bearer ${env("SUPABASE_SERVICE_ROLE_KEY")}`,
  "Content-Type": "application/json",
});

const escapeHtml = (value: unknown) => String(value ?? "").replace(/[&<>'"]/g, (character) => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  "'": "&#39;",
  '"': "&quot;",
}[character] || character));

const randomToken = () => {
  const bytes = crypto.getRandomValues(new Uint8Array(32));
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("");
};

const hashToken = async (token: string) => {
  const data = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(token));
  return Array.from(new Uint8Array(data), (byte) => byte.toString(16).padStart(2, "0")).join("");
};

const sendModerationEmail = async (trace: { id: number; mark: string; name: string; message: string }, token: string) => {
  const approvalBase = env("TRACE_APPROVAL_BASE_URL");
  const recipient = env("TRACE_MODERATOR_EMAIL");
  const sender = env("TRACE_SENDER_EMAIL");
  const approveUrl = `${approvalBase}?id=${encodeURIComponent(trace.id)}&token=${encodeURIComponent(token)}&action=approve`;
  const rejectUrl = `${approvalBase}?id=${encodeURIComponent(trace.id)}&token=${encodeURIComponent(token)}&action=reject`;
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${env("RESEND_API_KEY")}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: sender,
      to: [recipient],
      subject: "Nowy ślad czeka na zatwierdzenie",
      html: `<h2>Nowy ślad na stronie</h2><p><strong>Znak:</strong> ${escapeHtml(trace.mark)}</p><p><strong>Autor:</strong> ${escapeHtml(trace.name || "Anonim")}</p><p><strong>Treść:</strong><br>${escapeHtml(trace.message || "(bez treści)")}</p><p><a href="${escapeHtml(approveUrl)}">Zatwierdź komentarz</a></p><p><a href="${escapeHtml(rejectUrl)}">Odrzuć komentarz</a></p><p>Link wygasa po 7 dniach.</p>`,
    }),
  });
  if (!response.ok) throw new Error(`Resend failed: ${response.status}`);
};

const findOwnedTrace = async (ownerTokenHash: string, id?: string | null) => {
  if (id) {
    const byId = await fetch(`${supabaseUrl()}/rest/v1/traces?id=eq.${encodeURIComponent(id)}&owner_token_hash=eq.${encodeURIComponent(ownerTokenHash)}&select=id,status&limit=1`, { headers: serviceHeaders() });
    if (!byId.ok) throw new Error(`Could not find owned trace by id: ${byId.status}`);
    const [trace] = await byId.json();
    if (trace) return trace;
  }
  const byOwner = await fetch(`${supabaseUrl()}/rest/v1/traces?owner_token_hash=eq.${encodeURIComponent(ownerTokenHash)}&select=id,status&limit=1`, { headers: serviceHeaders() });
  if (!byOwner.ok) throw new Error(`Could not find owned trace: ${byOwner.status}`);
  const [trace] = await byOwner.json();
  return trace || null;
};

const submitTrace = async (request: Request) => {
  const body = await request.json();
  const mark = String(body.mark || "").trim().slice(0, 4);
  const name = String(body.name || "").trim().slice(0, 24);
  const message = String(body.message || "").trim().slice(0, 140);
  const ownerToken = String(body.ownerToken || "").trim();
  const allowedMarks = new Set(["間", "道", "灯", "波", "山", "星"]);
  if (!allowedMarks.has(mark) || !name && !message || ownerToken.length < 16) return json({ error: "Invalid trace" }, 400);
  if (body.website) return json({ ok: true });

  const ownerTokenHash = await hashToken(ownerToken);
  const existingTrace = await findOwnedTrace(ownerTokenHash, body.id ? String(body.id) : null);
  const moderationToken = randomToken();
  const moderationTokenHash = await hashToken(moderationToken);
  const tracePayload = {
    mark,
    name: name || null,
    message: message || null,
    status: "pending",
    moderation_token_hash: moderationTokenHash,
    moderation_token_expires_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    owner_token_hash: ownerTokenHash,
    created_at: new Date().toISOString(),
  };
  const traceResponse = existingTrace
    ? await fetch(`${supabaseUrl()}/rest/v1/traces?id=eq.${encodeURIComponent(existingTrace.id)}`, {
      method: "PATCH",
      headers: { ...serviceHeaders(), Prefer: "return=representation" },
      body: JSON.stringify(tracePayload),
    })
    : await fetch(`${supabaseUrl()}/rest/v1/traces`, {
      method: "POST",
      headers: { ...serviceHeaders(), Prefer: "return=representation" },
      body: JSON.stringify(tracePayload),
    });
  if (!traceResponse.ok) return json({ error: "Could not save trace" }, 502);
  const [trace] = await traceResponse.json();
  try {
    await sendModerationEmail({ id: trace.id, mark, name, message }, moderationToken);
  } catch {
    return json({ error: "Could not send moderation email" }, 502);
  }
  return json({ ok: true, pending: true, id: trace.id, updated: Boolean(existingTrace) });
};

const moderationParams = async (request: Request) => {
  const url = new URL(request.url);
  if (request.method === "POST" && !request.headers.get("content-type")?.includes("application/json")) {
    const form = await request.formData();
    return {
      id: String(form.get("id") || ""),
      token: String(form.get("token") || ""),
      action: String(form.get("action") || ""),
    };
  }
  return {
    id: url.searchParams.get("id") || "",
    token: url.searchParams.get("token") || "",
    action: url.searchParams.get("action") || "",
  };
};

const moderateTrace = async (request: Request) => {
  const { id, token, action } = await moderationParams(request);
  if (!id || !token || !["approve", "reject"].includes(action || "")) return text("Nieprawidlowy link moderacyjny.", 400);
  const tokenHash = await hashToken(token);
  const response = await fetch(`${supabaseUrl()}/rest/v1/traces?id=eq.${encodeURIComponent(id)}&moderation_token_hash=eq.${encodeURIComponent(tokenHash)}&select=id,status,moderation_token_expires_at`, { headers: serviceHeaders() });
  const [trace] = await response.json();
  if (!trace) return text("Link wygasl albo zostal juz wykorzystany.", 404);
  if (new Date(trace.moderation_token_expires_at).getTime() < Date.now()) return text("Link wygasl. Linki moderacyjne dzialaja przez 7 dni.", 410);
  const status = action === "approve" ? "approved" : "rejected";
  const updateResponse = await fetch(`${supabaseUrl()}/rest/v1/traces?id=eq.${encodeURIComponent(id)}`, {
    method: "PATCH",
    headers: { ...serviceHeaders(), Prefer: "return=minimal" },
    body: JSON.stringify({ status, moderation_token_hash: null, moderation_token_expires_at: null }),
  });
  if (!updateResponse.ok) return text("Nie udalo sie zapisac decyzji. Sprobuj ponownie.", 502);
  return text(status === "approved" ? "Komentarz zatwierdzony. Mozesz zamknac te karte." : "Komentarz odrzucony. Mozesz zamknac te karte.");
};

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  try {
    if (request.method === "POST" && request.headers.get("content-type")?.includes("application/json")) return await submitTrace(request);
    if (request.method === "POST") return await moderateTrace(request);
    if (request.method === "GET") return await moderateTrace(request);
    return json({ error: "Method not allowed" }, 405);
  } catch {
    return json({ error: "Unexpected server error" }, 500);
  }
});
