---
name: postgres-migrations
description: Guides PostgreSQL and API/database changes with migration-ready SQL, TypeORM-compatible migrations, full create SQL, and data-aware update SQL. Use when changing API persistence, tables, columns, indexes, constraints, seeds, or database-backed DTO/entity behavior.
---

# Postgres Migrations

## Trigger

Use this skill for any API change that reads or writes database-backed data, or any schema/data change involving PostgreSQL.

## Required Artifacts

For each schema change, prepare:

- Migration file or migration-ready SQL.
- Full create SQL for new tables.
- Update SQL for existing databases.
- Data/backfill notes when existing rows are affected.
- Rollback notes when rollback is safe and meaningful.

## SQL Standard

Prefer additive, data-aware changes:

```sql
-- full create
CREATE TABLE clients (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- update existing database
ALTER TABLE clients ADD COLUMN IF NOT EXISTS name text;
UPDATE clients SET name = 'Unnamed' WHERE name IS NULL;
ALTER TABLE clients ALTER COLUMN name SET NOT NULL;
```

## Migration Checklist

- Name tables and columns consistently with existing code.
- Add indexes for foreign keys and common filters.
- Use constraints for invariants that must survive app bugs.
- Avoid destructive changes without explicit user approval.
- For required columns on non-empty tables: add nullable/default, backfill, then enforce `NOT NULL`.
- Keep SQL idempotent where practical with `IF EXISTS` / `IF NOT EXISTS`.
- Update entity, DTO, service, and API docs/tests in the same change.

## TypeORM Guidance

- Prefer explicit migrations over schema sync for real environments.
- Keep `up` and `down` clear; avoid generated noise when a hand-written migration is safer.
- Check the generated SQL before trusting it.
- Never rely on regex to transform SQL or migrations; use SQL parsers, AST tools, or explicit statements.

## Final Report

When database behavior changes, report:

- Tables/columns/indexes changed.
- Migration or SQL files created.
- Data migration/backfill behavior.
- Verification performed.
