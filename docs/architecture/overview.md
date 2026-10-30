# Architecture overview

The GROW Automation MVP is a single CAP Node.js application with a UI5 frontend, a CDS-backed domain model and backend services for workflow, evidence and integration simulation.

## Core design

- UI5 app: `app/grow`
- CAP services: `srv/`
- Data model: `db/`
- Deterministic fixtures: `fixtures/`
- Verification: `scripts/`

## Role split

- UI5 renders screens and orchestrates user actions.
- CAP services own validation, policy enforcement and state transitions.
- Adapters simulate SAP touchpoints such as Cloud ALM, CBC, S/4, Signavio and LeanIX.
- Repositories and evidence modules provide traceability and export support.

## Stage scope

This initial scaffold intentionally prepares only the repository organization and local structural checks. It does not claim feature completion or runtime readiness.
