# GROW Automation MVP

<div align="center">
  <img src="https://img.shields.io/badge/SAP-CAP-0A6ED1?style=for-the-badge&logo=sap" alt="SAP CAP" />
  <img src="https://img.shields.io/badge/SAP-UI5-1867C0?style=for-the-badge&logo=sap" alt="SAP UI5" />
  <img src="https://img.shields.io/badge/Architecture-Transformation%20Control%20Plane-0D9488?style=for-the-badge" alt="Architecture" />
  <img src="https://img.shields.io/badge/Status-Production%20Demo-7C3AED?style=for-the-badge" alt="Status" />
</div>

<p align="center">
  <strong>Governed transformation execution from project setup to evidence-backed delivery.</strong>
</p>

GROW Automation is a SAP CAP + SAP UI5 transformation control plane designed to help leadership teams review program governance, approval readiness, scope quality, and operational confidence in a single boardroom-grade dashboard. The application models the end-to-end transformation lifecycle from project preparation and requirement intake to deployment verification, reconciliation, and evidence-backed validation.

This repository combines a deterministic CAP backend, a routed UI5 frontend, and synthetic program data so the solution is portable, demo-safe, and realistic without depending on live enterprise systems.

## Executive value

The solution addresses the common failure pattern in transformation programs: fragmented governance, unclear accountability, and weak evidence between planning and execution.

GROW helps teams manage:

- project preparation and readiness checks
- requirement intake and process scoping
- integration-quality visibility
- organization design and approval controls
- deployment packaging and execution monitoring
- reconciliation, exception handling, and evidence review

## Current implementation status

This repository is now a leadership-facing boardroom prototype with:

- a polished SAP UI5 shell and global navigation
- multiple executive and operational dashboard views
- phased transformation storytelling across Discover → Prepare → Integrate → Scope → Configure → Deploy → Validate
- route-driven navigation aligned to the program lifecycle
- realistic synthetic project and KPI data
- backend service exposure using CAP service metadata
- UI charts and richer controls for a more product-like presentation

## Architecture

### Frontend

The frontend lives under `app/grow` and uses SAP UI5 with a route-driven app shell and boardroom styling.

Key areas:

- `app/grow/webapp/Component.js`
- `app/grow/webapp/view/`
- `app/grow/webapp/controller/`
- `app/grow/webapp/model/`
- `app/grow/webapp/css/boardroom.css`

### Backend

The CAP backend is implemented in `srv/` and `db/` with a core model and mock service layer.

Key areas:

- `db/schema.cds` – domain model and lifecycle entities
- `srv/services/project-service.cds` – service exposure contract
- `srv/services/project-service.js` – mock service implementation
- `srv/auth/` – demo identity and access controls
- `srv/workflow/` – approval and stale-state logic
- `srv/execution/` and `srv/adapters/` – deterministic mock execution and integration behavior

## UI and UX highlights

The current interface includes:

- executive landing page with KPI tiles and status narrative
- value impact and risk/governance dashboards
- operating readiness and phase overview pages
- process and requirement workbenches
- document intake and scope review views
- richer microchart and control usage for leadership presentation

## Backend wiring and service health

The UI is designed to work with CAP service metadata while preserving a deterministic fallback via JSON models. The project currently exposes a valid `ProjectService` with the backed route metadata and mock data model, and the frontend structure is aligned to the service layer.

## Repository structure

```text
.
├── app/
│   └── grow/
├── db/
├── srv/
├── fixtures/
├── docs/
├── scripts/
├── test/
├── package.json
├── ui5.yaml
├── README.md
├── AGENTS.md
├── GROW_MVP_UI_Requirements_for_Codex.md
├── GROW_MVP_Comprehensive_UI_Requirements.docx
└── package-lock.json
```

## Local setup and running

### Prerequisites

- Node.js 22+
- npm 10+

### Install dependencies

```bash
npm install
```

### Start backend

```bash
cd /Users/venkataphaniprasadkonduri/Desktop/VK\ Docs/Public\ Cloud\ Automation/grow-automation-mvp
npx cds run --project . --port 4004
```

### Start frontend

```bash
cd /Users/venkataphaniprasadkonduri/Desktop/VK\ Docs/Public\ Cloud\ Automation/grow-automation-mvp/app/grow
npm run dev
```

### Build the project

```bash
cd /Users/venkataphaniprasadkonduri/Desktop/VK\ Docs/Public\ Cloud\ Automation/grow-automation-mvp
npm run build
```

### Verify repo structure

```bash
npm run verify:structure
```

## Notes

- This is a demo-safe, governance-aware transformation platform prototype.
- The project intentionally avoids hard dependency on live enterprise apps.
- It is designed for stakeholder demos, architecture walkthroughs, and executive reviews.

## GitHub

Repository:
https://github.com/PhaniPrasadKonduri/grow-automation-mvp
