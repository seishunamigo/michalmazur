create table if not exists public.traces (
  id bigint generated always as identity primary key,
  mark text not null,
  name text,
  message text,
  created_at timestamptz not null default now(),
  status text not null default 'pending' check (status in ('pending', 'approved', 'rejected')),
  moderation_token_hash text,
  moderation_token_expires_at timestamptz,
  owner_token_hash text
);

alter table public.traces add column if not exists status text;
alter table public.traces add column if not exists moderation_token_hash text;
alter table public.traces add column if not exists moderation_token_expires_at timestamptz;
alter table public.traces add column if not exists owner_token_hash text;

update public.traces
set status = 'approved'
where status is null;

alter table public.traces alter column status set default 'pending';
alter table public.traces alter column status set not null;
alter table public.traces drop constraint if exists traces_status_check;
alter table public.traces add constraint traces_status_check check (status in ('pending', 'approved', 'rejected'));

alter table public.traces enable row level security;

revoke insert on public.traces from anon;
grant select on public.traces to anon;

drop policy if exists "Anyone can read traces" on public.traces;
create policy "Anyone can read traces"
on public.traces
for select
to anon
using (status = 'approved');

create index if not exists traces_created_at_idx
on public.traces (created_at desc);

create index if not exists traces_status_created_at_idx
on public.traces (status, created_at desc);

create unique index if not exists traces_owner_token_hash_idx
on public.traces (owner_token_hash)
where owner_token_hash is not null;
