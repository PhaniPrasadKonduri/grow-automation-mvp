# GROW Automation MVP

This repository is the working scaffold for the GROW Automation MVP prototype, aligning with the SAP CAP + SAP UI5 architecture and the companion project guide.

## Current stage

- S00 scaffold prepared
- B00 not started
- Next prompt: B00 (materialize and validate source specification)

## Repository intent

The codebase is structured around a single CAP Node.js application with a UI5 app under `app/grow`, plus domain definitions in `db/`, backend services in `srv/`, deterministic fixtures in `fixtures/`, and engineering checks in `scripts/` and `docs/`.

## Required source inputs

The project relies on the repository-root prompt library file named:

- `GROW_MVP_Codex_Prompt_Library.md`

If that file is not present, the structure verification command will fail with a clear missing-source error until the prompt library is added.

## Common commands

```bash
npm run verify:structure
```

## Planned next steps

1. Add the actual prompt library file.
2. Run B00 to materialize and validate specification blocks.
3. Continue with B01 and B02 to establish runtime compatibility and the runnable local shell.
