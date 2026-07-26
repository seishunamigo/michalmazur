# Trace moderation setup

Run `supabase-traces-setup.sql` in the Supabase SQL Editor before deploying this function.

Set these secrets in the Supabase project:

```text
RESEND_API_KEY=re_...
TRACE_MODERATOR_EMAIL=your-email@example.com
TRACE_SENDER_EMAIL=Identity portfolio <traces@your-verified-domain.example>
TRACE_APPROVAL_BASE_URL=https://nznypktoifwbrskklrmz.supabase.co/functions/v1/trace-moderation
```

The Edge Function already receives `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` from Supabase. Deploy it as `trace-moderation`. New traces remain `pending` until the one-time approval or rejection link in the email is used.
