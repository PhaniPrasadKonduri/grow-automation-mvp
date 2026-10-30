# GROW Automation MVP repository guidance

This repository is the SAP CAP + SAP UI5 prototype for GROW Automation. Keep the architecture and evidence conventions aligned with the structure guide and the prompt library.

## Core principles

- Use one CAP Node.js repository with `app/grow` as the private UI5 workspace.
- Keep business logic in `srv/`, domain contracts in `db/`, and UI5 app code in `app/grow/webapp`.
- Treat `fixtures/` as deterministic, synthetic test data; keep local runtime state under `.runtime/`.
- Preserve explicit authorization, workflow, retry and evidence rules in the backend.
- Do not pretend a feature is complete without real checks, traceable evidence and matching source files.

## Repository boundaries

- Source ownership: `db/`, `srv/`, `app/grow/webapp`, `fixtures/`, `scripts/`, and the root config are committed source.
- Generated output: `artifacts/`, `coverage/`, `app/grow/dist/`, `gen/`, `.runtime/` and local logs are not source artifacts.
- Reference documents may live under `docs/reference/` only if approved for use.

## Stage gates

- S00 prepares the repository and validates the scaffold.
- B00 materializes and validates source specifications.
- B01 chooses supported versions and resolves dependencies.
- B02 creates the runnable CAP and UI5 shell.
- Later feature prompts add domain behavior, tests and contract checks.

## Evidence rules

- `docs/status.md` is the source-of-truth for current stage progress.
- Record actual commands run and actual outcomes; do not claim unverified work.
- Prefer local deterministic fixtures and mocked SAP integration adapters over production dependencies.

## Working conventions

- Use LF line endings and UTF-8.
- Keep configuration concise and explicit.
- Prefer an idempotent local dev workflow over global installs.
- Keep feature implementations in the task order defined by the prompt library; do not reorder prompt IDs arbitrarily.
