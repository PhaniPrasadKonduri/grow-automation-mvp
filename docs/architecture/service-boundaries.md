# Service boundaries

## UI boundary

`app/grow` is the UI5 workspace and owns:

- screen registries and route metadata
- user interaction handlers and action dispatch
- local client-side validation and display formatting
- API calls to CAP services

## CAP backend boundary

`srv/` owns:

- domain services and service contracts
- authorization and eligibility checks
- workflow orchestration and target locking
- adapter invocation and evidence capture

## Domain model boundary

`db/` owns the CDS model and schema definitions needed for persisted local demo state and future HANA compatibility.

## Local simulation boundary

`fixtures/` and mock adapters in `srv/adapters/mock/` keep the workflow deterministic and environment-independent until real dependencies are added.
