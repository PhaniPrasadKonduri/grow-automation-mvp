# Data and state

The repository separates canonical source, immutable fixtures and mutable local state.

## Canonical source

- `db/` contains CDS model definitions.
- `srv/` contains service and policy logic.
- `docs/` contains repository guidance and reviewed architecture decisions.

## Immutable fixtures

`fixtures/` holds deterministic, synthetic test data used for scenarios and validation. These fixtures are intentionally local and not tied to production credentials or environment state.

## Mutable runtime state

Local runtime data, logs and generated evidence are kept outside committed source under `.runtime/`, `artifacts/`, `coverage/` and `gen/`.

## Data lifecycle

The intended local prototype uses persisted local storage for restart continuity while remaining independent from BTP or HANA Cloud credentials.
