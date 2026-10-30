# GROW Automation MVP

A professional-grade SAP CAP + SAP UI5 prototype for end-to-end enterprise transformation orchestration, built to demonstrate how policy-aware automation can support the full lifecycle of a digital transformation program — from project preparation and requirements intake to configuration, approvals, deployment, verification, and auditability.

This repository represents the current MVP implementation of the GROW automation concept: a deterministic, demo-safe workflow that models realistic transformation governance, service execution boundaries, controlled autonomy, and traceable evidence.

## Why this solution exists

Large transformation programs typically fail not because the workload is impossible, but because execution is fragmented across tools, teams, and governance layers. GROW Automation addresses that problem by creating a unified operating model for:

- business requirement intake and scoping
- organization design and governance alignment
- configuration generation and change validation
- approval checkpoints and stale-state protection
- deployment orchestration with reconciliation and exception handling
- quality validation and evidence-backed audit trails

The result is a demonstrable reference implementation that balances business control, process traceability, and technical clarity without depending on live SAP production systems.

## Solution overview

The project contains a single CAP Node.js service layer and a SAP UI5 frontend workspace that together model a complete transformation control plane:

- Frontend: `app/grow` with a route-driven SAP UI5 application
- Backend: `srv/` for workflow logic, policy enforcement, and mock execution behavior
- Domain model: `db/` with CDS contracts for projects, requirements, approvals, deployment packages, evidence, and audit entities
- Deterministic test data: `fixtures/` for synthetic, repeatable simulation
- Verification and governance docs: `docs/` and `scripts/`

## Key capabilities implemented

### 1. End-to-end transformation lifecycle

The application covers the operational flow of a transformation project, including:

- project preparation and setup
- integration readiness and connection diagnostics
- document intake and requirement capture
- process and scope review
- organization structure design
- configuration workspace and activity detail review
- approval management
- deployment packaging and run monitoring
- reconciliation and recovery management
- quality validation and evidence review

### 2. Deterministic simulation model

To keep the solution safe, portable, and demonstration-friendly, the repository uses synthetic fixtures and mock adapters instead of direct live integration dependencies. This includes:

- mock SAP adapters for integration endpoints
- deterministic project data and state transitions
- repeatable fixture catalogs and validation logic
- read-only and controlled execution patterns suitable for demos and design reviews

### 3. Policy-aware governance

The solution explicitly models approval readiness, access boundaries, and stale state handling, including:

- authorization checks by persona and project scope
- approval workflow validity and payload-hash protections
- stale approval invalidation behavior
- readiness blockers and evidence-linked actions
- secure export and audit boundaries

### 4. Controlled automation patterns

Rather than pretending autonomous execution is complete, the solution implements a bounded automation model:

- agent-driven recommendations with evidence citations
- explicit human checkpoints before critical changes
- known-unknown handling and reconciliation flows
- safe exception recovery and reviewable escalation paths
- realistic operational guardrails

### 5. Traceable evidence and auditability

Every critical part of the simulated transformation flow is designed to be explainable and traceable, with support for:

- change lineage and source association
- business requirement and proposal linkage
- approval event audit trails
- evidence search and export workflows
- redaction-aware policy presentation

## Architecture

### SAP CAP backend

The backend uses the SAP Cloud Application Programming Model to provide a modeled domain and service layer. The implementation includes:

- CDS domain contracts in `db/schema.cds`
- service logic in `srv/services/`
- workflow enforcement in `srv/workflow/`
- policy boundary checks in `srv/policy/`
- deterministic execution through `srv/execution/` and `srv/adapters/`
- bounded agent implementations in `srv/agents/`

### SAP UI5 frontend

The user experience is built as a route-driven UI5 application with a model-centric shell and reusable action patterns. The app includes concrete screen implementations for:

- demo entry and role selection
- project preparation and readiness
- integration and document workflows
- requirements and process exploration
- scope and organization management
- configuration and approval tracking
- deployment, reconciliation, exceptions, quality, and evidence views

### Repository organization

```text
.
├── app/
│   └── grow/                  # SAP UI5 frontend workspace
├── db/                       # CDS domain models and contracts
├── srv/                      # CAP backend, workflows, security, execution logic
├── fixtures/                 # Deterministic seed data and synthetic simulation inputs
├── docs/                     # Architecture, repository guidance, and status
├── scripts/                  # Verification and validation scripts
├── test/                     # Contract and behavior validation tests
├── package.json              # Root project configuration and scripts
├── ui5.yaml                  # UI5 build configuration
├── README.md                 # Project overview and usage guide
├── AGENTS.md                 # Repo-specific operating guidance
├── GROW_MVP_Codex_Prompt_Library.md
├── GROW_MVP_VSCode_Project_Structure_and_Codex_Bootstrap.md
└── package-lock.json
```

## Current implementation status

The project is currently in a mature prototype state with the following completed foundation:

- CAP + UI5 scaffold and runtime alignment
- domain model and contract checks
- deterministic fixture catalog and validation
- authorization and demo identity model
- approval workflow and stale-state protections
- mock adapters and execution dispatcher
- bounded agent runners for scoping, organization, configuration, and deployment
- route-driven UI shell and multiple concrete screen implementations across the transformation lifecycle

This is best described as a demo-grade MVP and design prototype rather than a production-grade SAP deployment automation platform.

## Getting started

### Prerequisites

- Node.js 22+
- npm 10+
- Git

### Install dependencies

```bash
npm install
```

### Verify project structure

```bash
npm run verify:structure
```

### Verify specification alignment

```bash
npm run verify:spec
```

### Build the project

```bash
npm run build
```

### Run the backend and frontend together

```bash
npm run dev
```

### Run the backend only

```bash
npm run dev:backend
```

### Run the UI5 app only

```bash
npm run dev:frontend
```

## Validation and quality checks

The repository includes contract and behavior validation for core lifecycle concerns, including:

- domain contracts
- deterministic fixtures
- workflow validation
- authorization checks
- execution engine behavior
- agent-runner contracts

You can run the validation suite with:

```bash
npm run test:contract
```

## Role of this repository in the broader vision

This repository is not intended to claim fully autonomous production SAP operations. Instead, it demonstrates a pragmatic, governance-focused operating model for transformation planning and execution, where:

- automated recommendations are grounded in evidence
- human review remains explicit at critical gates
- exceptions are surfaced, owned, and resolved transparently
- business process intent is preserved through the full lifecycle

That makes the solution suitable as both a platform concept and a demonstrator for executive and engineering stakeholder alignment.

## Project conventions

The repository follows a structured, evidence-first development pattern:

- business logic remains in `srv/`
- domain contracts remain in `db/`
- UI logic remains in `app/grow/webapp`
- deterministic test data remains in `fixtures/`
- runtime logs and generated output remain out of source control

## Summary

GROW Automation MVP is a proof-of-concept transformation control layer designed to show how enterprise process automation can be shaped around rules, evidence, approvals, and traceable human oversight. It is intentionally realistic, deterministic, and demo-safe while still showcasing the shape of a future operational platform.

This project demonstrates the architecture, navigation, workflow logic, and decision model required to move from a static transformation backlog to a governed, evidence-backed execution environment.
