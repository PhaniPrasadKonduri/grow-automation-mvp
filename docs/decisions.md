# Architecture decisions

## Decision 1: single repo, single CAP app

A single repository is used to keep the GROW prototype manageable while preserving CAP and UI5 boundaries.

## Decision 2: local deterministic simulation

The prototype intentionally uses local, mocked SAP adapters and deterministic fixtures instead of requiring live SAP credentials or BTP access.

## Decision 3: strict scaffold stage boundaries

This repository intentionally does not claim feature completion, build readiness or security readiness until the later B00/B01/B02 and feature prompts are executed.

## Decision 4: B01 runtime and dependency contract

The repository uses a verified CAP/UI5 toolchain compatible with the current local environment:

- Node.js `>=22.0.0`
- npm `>=10.0.0`
- `@sap/cds-dk` `^10.2.0`
- `@ui5/cli` `^4.0.71`
- `eslint` `^9.38.0`

The baseline is recorded in `package.json`, `.nvmrc`, and `docs/runtime.md`.
