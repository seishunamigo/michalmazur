const endpoint = "https://api.github.com/repos/seishunamigo/mazur-passport-counter/contents/stamps.json";
const siteOrigins = new Set(["https://mazur.jp", "https://www.mazur.jp"]);
const uuid = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;

export async function handleStamp(request, token, github = fetch) {
  const origin = request.headers.get("Origin");
  const headers = {
    "Cache-Control": "no-store",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Vary": "Origin",
  };
  if (origin && !siteOrigins.has(origin)) return new Response(null, { status: 403, headers });
  if (origin) headers["Access-Control-Allow-Origin"] = origin;
  const reply = (body, status = 200) => Response.json(body, { headers, status });
  if (request.method === "OPTIONS") return new Response(null, { status: 204, headers });
  if (!["POST", "GET"].includes(request.method)) return reply({}, 405);
  if (!token) return reply({}, 503);

  let mark;
  if (request.method === "POST") {
    if (!origin || !/^application\/json\b/i.test(request.headers.get("content-type") || "")) return reply({}, 400);
    const body = await request.json().catch(() => null);
    if (typeof body?.visitor !== "string" || !uuid.test(body.visitor)) return reply({}, 400);
    const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(body.visitor));
    mark = Array.from(new Uint8Array(digest), byte => byte.toString(16).padStart(2, "0")).join("");
  }
  const apiHeaders = {
    Authorization: "Bearer " + token, Accept: "application/vnd.github+json",
    "User-Agent": "mazur-passport-counter", "Content-Type": "application/json",
  };
  try {
    // Contents API writes require the previous blob SHA. Retry collisions using the new file.
    for (let attempt = 0; attempt < 5; attempt++) {
      const current = await github(endpoint + "?ref=main", { headers: apiHeaders, cache: "no-store" });
      if (!current.ok) return reply({}, 503);
      const file = await current.json();
      const marks = JSON.parse(atob(file.content));
      if (!file.sha || !Array.isArray(marks) || !marks.every(x => typeof x === "string" && /^[0-9a-f]{64}$/.test(x))) return reply({}, 503);
      if (!mark || marks.includes(mark)) return reply({ count: marks.length });
      marks.push(mark);
      const saved = await github(endpoint, {
        method: "PUT", headers: apiHeaders, body: JSON.stringify({
          message: "Add a passport stamp", branch: "main", sha: file.sha,
          content: btoa(JSON.stringify(marks) + "\n"),
        }),
      });
      if (saved.ok) return reply({ count: marks.length });
      if (saved.status !== 409) return reply({}, 503);
    }
  } catch {
    // Never confirm a stamp after a network error. Retrying with the same UUID is safe.
  }
  return reply({}, 503);
}
