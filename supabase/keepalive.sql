-- Einmal im Supabase-Dashboard ausführen: SQL Editor → New query → einfügen → Run.
-- Legt eine winzige Funktion an, die nur die Uhrzeit zurückgibt. Sie liest und speichert keine Nutzerdaten.
-- Die GitHub-Action ".github/workflows/supabase-wach.yml" ruft sie täglich auf, damit Supabase das Projekt nicht pausiert.
create or replace function public.keepalive()
returns timestamptz
language sql
stable
security invoker
set search_path = ''
as $$ select now() $$;

revoke all on function public.keepalive() from public;
grant execute on function public.keepalive() to anon;
