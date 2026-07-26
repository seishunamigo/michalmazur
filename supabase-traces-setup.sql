create table if not exists public.traces (
  id bigint generated always as identity primary key,
  mark text not null,
  name text,
  message text,
  created_at timestamptz not null default now()
);

alter table public.traces enable row level security;

grant select, insert on public.traces to anon;

drop policy if exists "Anyone can read traces" on public.traces;
create policy "Anyone can read traces"
on public.traces
for select
to anon
using (true);

drop policy if exists "Anyone can add traces" on public.traces;
create policy "Anyone can add traces"
on public.traces
for insert
to anon
with check (
  char_length(mark) between 1 and 4
  and (name is null or char_length(name) <= 24)
  and (message is null or char_length(message) <= 140)
);

create index if not exists traces_created_at_idx
on public.traces (created_at desc);
