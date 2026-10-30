# Repository map

This repository is organized as a single CAP Node.js project with a UI5 workspace under `app/grow` and supporting domain/backend code in `db/` and `srv/`.

## Top-level directories

- `app/` — UI5 frontend application workspace.
- `db/` — CDS domain and schema definitions.
- `srv/` — CAP services, policy logic, workflow, adapters, repositories and evidence modules.
- `fixtures/` — deterministic synthetic inputs and test scenarios.
- `docs/` — architecture, runtime guidance, decisions and status tracking.
- `scripts/` — local verification and repository checks.
- `test/` — backend, contract, workflow and e2e tests.
- `.vscode/` — local editor settings and tasks.

## Important notes

- The project shell is scaffolded; feature implementation is intentionally deferred until B00/B01/B02 and later prompts.
- Local runtime and generated data remain outside committed source under `.runtime/`, `artifacts/`, `coverage/` and `gen/`.
