# Passport stamp counter

The public function reads and updates `stamps.json` on the main branch of the private GitHub repository `seishunamigo/mazur-passport-counter`. Initialize the file with `[]`. Each entry is the SHA-256 digest of a random per-browser ID. The public response contains the count only.

Store a fine-grained GitHub token as the Supabase Edge Function secret `PASSPORT_GITHUB_TOKEN`. Select only the counter repository and grant Contents read and write. Deploy `passport-stamp` to the portfolio’s existing Supabase project with JWT verification disabled as configured in supabase/config.toml. This function does not use the Supabase database.

A GET on the function URL should return `{"count":0}` for a new counter. A failed read or write returns a service error. The client retries a submission with the same browser ID. The function checks the ID and uses the file revision to resolve concurrent writes. Clearing browser storage allows another stamp.

Run `node --test tools/passport-stamp.test.mjs` for the read/write and conflict tests.
