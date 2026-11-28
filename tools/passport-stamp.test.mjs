import test from "node:test";
import assert from "node:assert/strict";
import { handleStamp } from "../supabase/functions/passport-stamp/handler.mjs";

test("concurrent visitors and retried submissions keep one shared mark per visitor", async () => {
  let revision = 1;
  let marks = [];
  let collision = false;
  async function github(_url, options) {
    if (!options.method) return Response.json({ sha: String(revision), content: btoa(JSON.stringify(marks)) });
    const payload = JSON.parse(options.body);
    if (payload.sha !== String(revision)) {
      collision = true;
      return new Response(null, { status: 409 });
    }
    marks = JSON.parse(atob(payload.content));
    revision++;
    return Response.json({});
  }
  const origin = "https://mazur.jp";
  const submit = visitor => handleStamp(new Request(origin, {
    method: "POST", headers: { Origin: origin, "Content-Type": "application/json" },
    body: JSON.stringify({visitor}),
  }), "test", github);
  const [first, second] = [crypto.randomUUID(), crypto.randomUUID()];
  assert.equal((await submit(first)).status, 200);
  assert.equal((await (await submit(first)).json()).count, 1);
  // Simulate another successful writer between our read and the first attempted write.
  async function racingGithub(url, options) {
    if (options.method === "PUT" && !collision) {
      await submit(crypto.randomUUID());
    }
    return github(url, options);
  }
  const request = new Request(origin, {method:"POST", headers:{ Origin: origin, "Content-Type":"application/json" }, body: JSON.stringify({visitor:second})});
  assert.equal((await (await handleStamp(request, "test", racingGithub)).json()).count, 3);
  assert.ok(collision);
  assert.equal((await (await handleStamp(new Request(origin), "test", github)).json()).count, 3);
  assert.equal((await submit("invalid")).status, 400);
  assert.equal((await handleStamp(new Request(origin), "test", () => new Response(null, {status:403}))).status, 503);
});
