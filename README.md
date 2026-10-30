# GROW Automation MVP

<div align="center">
  <img src="https://img.shields.io/badge/SAP-CAP-0A6ED1?style=for-the-badge&logo=sap" alt="SAP CAP" />
  <img src="https://img.shields.io/badge/SAP-UI5-1867C0?style=for-the-badge&logo=sap" alt="SAP UI5" />
  <img src="https://img.shields.io/badge/Architecture-Transformation%20Control%20Plane-0D9488?style=for-the-badge" alt="Architecture" />
  <img src="https://img.shields.io/badge/Status-MVP%20Prototype-7C3AED?style=for-the-badge" alt="Status" />
</div>

<p align="center">
  <strong>Governed transformation execution from project setup to evidence-backed delivery.</strong>
</p>

A professional-grade SAP CAP + SAP UI5 prototype for end-to-end enterprise transformation orchestration, designed to model how policy-aware automation supports a transformation lifecycle — from project preparation and requirements intake to configuration, approval governance, deployment, reconciliation, and auditability.

This repository captures the current MVP implementation of the GROW automation concept: a deterministic, demo-safe workflow that reflects realistic transformation governance, service execution boundaries, explicit human checkpoints, and traceable evidence.

## Why this solution matters

Large transformation programs usually fail not because the work is impossible, but because delivery is fragmented across systems, teams, and governance layers. GROW Automation brings those concerns together into a unified control model for:

- project preparation and readiness controls
- requirement intake and process scoping
- organization design and governance alignment
- configuration generation and validation
- approval checkpoints with stale-state protection
- deployment orchestration with readback and reconciliation
- quality validation and audit-ready evidence trails

## Executive overview

The solution is structured as a single CAP Node.js backend combined with a SAP UI5 application that models a realistic transformation control plane.

- Frontend: `app/grow` with a route-driven SAP UI5 application
- Backend: `srv/` for workflow logic, policy enforcement, and mock execution behavior
- Domain layer: `db/` with CDS contracts for projects, requirements, approvals, configuration, deployment, and evidence entities
- Deterministic test data: `fixtures/` for repeatable synthetic simulation
- Guidance and validation: `docs/` and `scripts/`

## Feature highlights

<div align="center">
  <img src="https://img.shields.io/badge/Feature-End-to-End%20Lifecycle-22C55E?style=flat-square" alt="Lifecycle" />
  <img src="https://img.shields.io/badge/Feature-Policy%20Governance-3B82F6?style=flat-square" alt="Governance" />
  <img src="https://img.shields.io/badge/Feature-Deterministic%20Simulation-8B5CF6?style=flat-square" alt="Simulation" />
  <img src="https://img.shields.io/badge/Feature-Audit%20Evidence-F59E0B?style=flat-square" alt="Evidence" />
  <img src="https://img.shields.io/badge/Feature-Controlled%20Automation-EC4899?style=flat-square" alt="Automation" />
</div>

### 1. End-to-end transformation lifecycle

The application covers the operational flow of a transformation project, including:

- project setup and readiness review
- integration diagnostics and contract visibility
- document intake and requirement capture
- process and scope review
- organization structure design
- configuration workspace and value validation
- approval management
- deployment packaging and run monitoring
- reconciliation and exception handling
- quality validation and evidence review

### 2. Policy-aware governance and control

The repository intentionally models access boundaries, approval readiness, stale-state protection, and exception handling:

- persona-based restrictions and entitlements
- branch-and-approval checks with payload-hash safeguards
- stale or invalid approval invalidation
- readiness blockers and evidence-linked actions
- export and audit separation with traceable policy boundaries

### 3. Deterministic simulation model

To keep the solution portable, safe, and demonstrable, the implementation avoids production dependencies and instead uses synthetic fixtures and mock adapters. This includes:

- mock SAP service adapters
- deterministic project data and state transitions
- repeatable fixture catalogs and validation logic
- safe demo workflows for stakeholder reviews

### 4. Controlled automation, not blind autonomy

The platform is designed around bounded automation patterns rather than full autonomous execution claims:

- agent-inspired recommendations with evidence linkages
- human approval gates before critical transitions
- explicit handling of unknowns and mismatches
- recovery worklists and escalation flows
- realistic operational guardrails

### 5. Traceable evidence and auditability

Critical parts of the workflow are designed to be explainable and reviewable, with support for:

- requirement-to-proposal traceability
- approval event history
- evidence search and bundle export
- lineage and source context review
- redaction-aware explanation of restricted items

## Demo flow and application journey

The following flow reflects the current experience modeled in the UI:

```text
Demo Entry
  ↓
Project Preparation
  ↓
Requirements & Scope Review
  ↓
Organization Design
  ↓
Configuration Workspace
  ↓
Approval Management
  ↓
Deployment Package & Execution Monitor
  ↓
Reconciliation & Exception Recovery
  ↓
Quality Validation & Evidence Explorer
```

## Screens and focus areas

| Stage | Purpose | Representative experience |
| --- | --- | --- |
| P00–P04 | Entry and setup | Persona selection, project preparation, legal entity and readiness checks |
| P05–P10 | Integration and scoping | Connection health, documents, requirements, scope review, candidate detail |
| P11–P14 | Organization and configuration | Designer, assignments, values, evidence, risk review |
| P16–P21 | Governance and execution | Approval review, deployment package, run monitor, reconciliation, exception handling |
| P22–P23 | Quality and evidence | Qualification workspace, audit and evidence explorer |
| P24–P27 | Pilot handover and context | Run overview, value narrative, entitlements, architecture mapping |

## Visual highlights

The project includes a route-driven UI experience designed for product walkthroughs, stakeholder reviews, and demo scenarios. Representative areas include:

- configuration workspaces with validation status
- deployment execution monitoring with action states
- reconciliation screens for approved vs observed values
- exception queues with assigned recovery tasks
- evidence explorer for traceability and audit viewing

## Architecture

### SAP CAP backend

The backend uses the SAP Cloud Application Programming Model to provide a modeled domain and service layer. Key implementation areas include:

- CDS domain contracts in `db/schema.cds`
- service logic in `srv/services/`
- workflow controls in `srv/workflow/`
- policy enforcement in `srv/policy/`
- deterministic execution in `srv/execution/` and `srv/adapters/`
- bounded agent behaviors in `srv/agents/`

### SAP UI5 frontend

The experience is built as a route-driven UI5 application with a model-centric shell and reusable action patterns, including concrete implementations for the transformation lifecycle screens.

### Repository layout

```text
.
├── app/
│   └── grow/                  # SAP UI5 frontend workspace
├── db/                       # CDS domain models and contracts
├── srv/                      # CAP backend, policies, workflow, execution logic
├── fixtures/                 # Deterministic seed data and synthetic simulation inputs
├── docs/                     # Architecture, repository guidance, and status
├── scripts/                  # Verification and validation scripts
├── test/                     # Contract and behavior validation tests
├── package.json              # Root project configuration and scripts
├── ui5.yaml                  # UI5 build configuration
├── README.md                 # Project overview and usage guide
├── AGENTS.md                 # Repository operating guidance
├── GROW_MVP_Codex_Prompt_Library.md
├── GROW_MVP_VSCode_Project_Structure_and_Codex_Bootstrap.md
└── package-lock.json
```

## Current implementation status

The project is currently in a robust prototype state with the following completed foundation:

- CAP + UI5 scaffold and runtime alignment
- domain model and contract validation
- deterministic fixture catalog and validation logic
- authorization and demo identity model
- approval workflow and stale-state protections
- mock adapters and execution dispatcher
- bounded agent runners for scoping, organization, configuration, and deployment
- route-driven UI shell and concrete screen implementations across the lifecycle

This should be understood as a demo-grade MVP and design prototype rather than a production-grade SAP automation platform.

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

### Build the full project

```bash
npm run build
```

### Run the application locally

```bash
npm run dev
```

### Run backend only

```bash
npm run dev:backend
```

### Run frontend only

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

Run the validation suite with:

```bash
npm run test:contract
```

## Project role and intent

This repository is not designed to claim an autonomous production SAP operations system. Instead, it demonstrates a pragmatic, governance-focused operating model for transformation planning and execution where:

- automated recommendations are grounded in evidence
- human review remains explicit at critical gates
- exceptions are surfaced, owned, and resolved transparently
- business process intent is preserved throughout the lifecycle

That makes the repository suitable as both a technical concept and an executive demonstration artifact for enterprise transformation modernization.

## Summary

GROW Automation MVP is a controlled transformation execution model designed to show how enterprise automation can be shaped around rules, evidence, approvals, and human oversight. It is intentionally deterministic, demo-safe, and realistic while still showcasing the architecture and UX of a future enterprise operating model.

This project demonstrates the design patterns required to move from a fragmented transformation backlog to a governed, evidence-backed execution environment.
