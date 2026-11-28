import { handleStamp } from "./handler.mjs";

Deno.serve(request => handleStamp(request, Deno.env.get("PASSPORT_GITHUB_TOKEN")));
