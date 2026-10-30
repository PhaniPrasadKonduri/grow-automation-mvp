# GROW Automation MVP Codex prompt library

**Version 1.0 · 30 October 2026 · Source: GROW Automation MVP Prototype Implementation Plan v1.0**

Build specification and reusable implementation prompts for a clickable SAP Fiori prototype. This is a prompt library, not executable application code and not a claim that running prompts guarantees completion.

## Contents

1. [How to run the library](#how-to-run-the-library)
2. [Durable project instructions](#durable-project-instructions)
3. [Execution order and dependencies](#execution-order-and-dependencies)
4. [Copy-ready implementation prompts](#copy-ready-implementation-prompts)
5. [Context recovery and review](#context-recovery-and-review)
6. [Embedded specification](#embedded-specification)
7. [Final acceptance](#final-acceptance)
8. [Sources and version notes](#sources-and-version-notes)

## How to run the library

1. Save this exact file as `GROW_MVP_Codex_Prompt_Library.md` at the intended repository root. A new empty repository is acceptable. If using an existing repository, preserve its applicable instructions and user changes.
2. Put `GROW_Automation_MVP_Prototype_Implementation_Plan.docx` and the existing backlog/BPD nearby when available. The embedded JSON contains all 28 screen contracts, 130 screen actions, 24 shared families, 138 R1 feature records and 202 proposed process requirements, so the core plan is portable. The Word document remains the visual reference. Local fixtures do not establish client approval or verified SAP applicability.
3. Open the repository in your coding environment and run **B00 first**. It creates the smaller `docs/spec/*.json` files from the marked appendices. Do not paste the entire library into every chat turn.
4. Run the foundation prompts, then the screen prompts in the listed order, then conversation, integration, UX and qualification prompts. Run one bounded prompt at a time. A large prompt may be split into smaller code changes while keeping its action IDs and acceptance contract.
5. Every prompt inherits `AGENTS.md` and the canonical `docs/spec` baseline. Supply the relevant prompt block and any missing context; let the agent inspect actual files. At a new session use R01.
6. Review changed files, commands run and actual evidence. Continue automatically through routine reversible implementation, but do not label a gate Accepted without its stated evidence and review.
7. At each week gate, update `docs/status.md` with completed IDs, failures, pending work and next dependency. A partial route stub is allowed only as tracked construction work; it never satisfies a screen or final release gate.

**Scope:** 28 screens; 130 named screen actions; 24 shared control families; all 138 R1 features represented; 202 proposed process references. Four bounded agents. One simulated nonproduction target. Actual SAP interfaces, identity, HANA Cloud deployment and model inference are later production decisions, not assumed live prototype capabilities.

**Prototype build sequence:** Week 1 foundation; Week 2 shell/intake/context; Week 3 scoping/assistant/approvals; Week 4 organization/configuration; Week 5 deployment/recovery/integration previews; Week 6 quality/responsiveness/presentation. Dependency order is more authoritative than week labels.

### Codex operating pattern

Use a Codex environment that can read and edit the repository and execute the local application/tests. Durable repository guidance belongs in `AGENTS.md`; keep the detailed task and evidence in versioned project files. Do not depend on chat memory for continuity. Model selection and account/tool access are environment-specific; no model or subscription tier is prescribed here.

For B00, supply this file explicitly. For later tasks, specify the prompt ID, relevant `docs/spec` files and the expected outcome. Codex should inspect, implement, run affected checks and report evidence. If it cannot run UI/browser checks, keep those checks Not run and provide reproducible manual steps. Do not infer success from code generation alone.

### Codex kickoff message

```text
Read GROW_MVP_Codex_Prompt_Library.md. Execute prompt B00 against the current repository. Preserve existing instructions and unrelated changes. Then report created source-of-truth files, count validation and the next prompt ID. Do not start B01 until B00 artifacts exist and validate.
```
### Evidence contract for every implementation task

The response must include: prompt ID; behavior implemented; files changed; action/feature IDs affected; exact checks and outcomes; UI inspection status; remaining blockers; and the next eligible prompt. Record implementation progress in `docs/status.md` and keep `docs/qa` evidence concise. Mark checks **Passed**, **Failed** or **Not run**. Do not convert “not run” to a pass, suppress denied requests, skip required tests silently or reduce the coverage denominator.

### Materialization contract

B00 should parse the JSON blocks between `BEGIN SPEC` / `END SPEC` markers. Create:

| Embedded block | Repository artifact |
| --- | --- |
| baseline | `docs/spec/baseline.json` |
| screens | `docs/spec/screens.json` |
| common-controls | `docs/spec/common-controls.json` |
| personas | `docs/spec/personas.json` |
| r1-features | `docs/spec/r1-features.json` |
| process-catalog | `docs/spec/process-catalog.json` |
| demo-catalogs | `docs/spec/demo-catalogs.json` |

Keep provenance and cardinality checks in `verify:spec`. Extract once rather than repeatedly asking the coding agent to reinterpret the Word document. A changed source baseline requires an explicit source diff and corresponding registry update.

## Durable project instructions

Store the following project guidance in `AGENTS.md` as part of B00. Merge with existing project instructions; do not overwrite unrelated rules. Paths here are project defaults and may be adapted in an existing repository with a recorded mapping.

```markdown
Build the GROW Automation MVP clickable prototype with SAP UI5, CAP Node.js and contract-aligned CDS models for eventual HANA Cloud persistence. Use genuine UI5 controls and supported Fiori patterns; do not substitute React, UI5 Web Components, generic HTML dashboards or a screenshot-only implementation.

The prototype is a deterministic simulation. Do not connect to live SAP tenants, send messages externally, change production resources or require model/API credentials. Label simulated integrations and exports. The four agents are Scoping, Organization, Configuration and Deployment. Full migration, master-data loading, cutover and autonomous Run agents remain future scope.

Preserve all 28 P00–P27 screen IDs, all 130 Pxx-Ayy actions, all 24 C01–C24 shared control families, all 138 R1 feature IDs and all 202 BR/TC process references. The seven-phase project view is Discover, Prepare, Explore, Realize Build, Realize Test, Deploy, Run. It splits SAP Activate Realize; do not claim an independently verified proprietary EY method.

Use standard Horizon light theme, SAP typography where available, semantic theme tokens, responsive tables and supported list/object floorplans. Avoid internal DOM manipulation. Provide keyboard equivalents for organization editing. Verify APIs against the chosen pinned UI5 and CAP versions rather than inventing control properties.

Use Northstar Manufacturing Demo with 10 synthetic entities, two each in India, Germany, United States, United Kingdom and Singapore. These are demo fixtures, not confirmed client countries. Do not invent statutory advice or SAP configuration API support. Unverified activity identifiers must use DEMO-*; an activity identifier is not an endpoint.

Every visible actionable affordance must work: navigation, selection, input, filtering, state change, disclosure or real file download. Hide unauthorized privileged actions; provide View permissions. Replace unavailable business actions with Review blockers or another useful permitted action. No empty handlers, fake success toasts, dead charts or final TODO screens. Temporary unfinished routes remain explicitly In progress and cannot pass a milestone.

Enforce identity, project and organization scope in the mock backend. A proposer cannot approve their own artifact. Approvals bind exact payload/version/target/policy/expiry. Changed source, target, values or material observations invalidate affected approvals. Browser role switching is a labeled demo-only identity operation, not production authentication.

Persist approval, package, action, evidence and conversation state. Require verified scope/organization prerequisites before dependent configuration. No dispatch without current approval and readiness checks. Unknown outcomes require observation before retry. Pause stops undispatched actions; do not pretend it cancels a remote in-flight commit. Success requires matching readback. Application restore never means target rollback.

Agents expose a bounded plan, tools, cited evidence, concise rationale, validation and handoff owner. Do not fabricate hidden reasoning. GROW Assistant is custom and Joule-inspired, not native Joule. It cannot approve itself, elevate roles or execute arbitrary code. Protect retrieved context and conversations by persona/project.

Inspect the actual repository and applicable instructions. Preserve unrelated user changes and existing architecture that meets these requirements. Implement the requested slice, run meaningful affected checks, inspect the UI when available and update docs/status.md and coverage registries truthfully. If a check cannot run, mark it Not run with the reason. Never fabricate passing evidence or reduce coverage denominators to hide gaps. Do not push, merge or externally deploy unless separately authorized.
```
## Execution order and dependencies

The `Requires` column is a build dependency, not a runtime authorization rule. Screen order is arranged around reusable setup, review, approval and execution surfaces. Runtime prerequisite checks remain mandatory even if a page was built earlier.

| Order | Prompt | Work item | Requires |
| --- | --- | --- | --- |
| 01 | [B00](#prompt-b00) | Establish repository instructions and source authority | None |
| 02 | [B01](#prompt-b01) | Inspect runtime and pin supported dependencies | B00 |
| 03 | [B02](#prompt-b02) | Create UI5 and CAP application skeleton | B01 |
| 04 | [B03](#prompt-b03) | Implement domain contracts and immutable versions | B02 |
| 05 | [B04](#prompt-b04) | Build complete reproducible fixture catalog | B03 |
| 06 | [B11](#prompt-b11) | Freeze typed demo catalogs and rule fixtures | B04 |
| 07 | [B05](#prompt-b05) | Enforce personas and project scope in backend | B11 |
| 08 | [B06](#prompt-b06) | Implement workflow approval and invalidation services | B05 |
| 09 | [B07](#prompt-b07) | Build deterministic integration and execution engine | B06 |
| 10 | [B08](#prompt-b08) | Implement bounded deterministic agents | B07 |
| 11 | [B09](#prompt-b09) | Create Fiori shell route registry and design primitives | B08 |
| 12 | [B12](#prompt-b12) | Implement real evidence and export services | B09 |
| 13 | [B10](#prompt-b10) | Implement all shared control families | B12 |
| 14 | [UI-P00](#prompt-ui-p00) | Demo entry and role context | B10 |
| 15 | [UI-P04](#prompt-ui-p04) | Prepare and project setup | UI-P00 |
| 16 | [UI-P05](#prompt-ui-p05) | Integration control center | UI-P04 |
| 17 | [UI-P06](#prompt-ui-p06) | TO BE document intake | UI-P05 |
| 18 | [UI-P07](#prompt-ui-p07) | Requirement and fit workbench | UI-P06 |
| 19 | [UI-P08](#prompt-ui-p08) | Process and architecture explorer | UI-P07 |
| 20 | [UI-P27](#prompt-ui-p27) | Process application and architecture context | UI-P08 |
| 21 | [UI-P15](#prompt-ui-p15) | Agent mission control | UI-P27 |
| 22 | [UI-P16](#prompt-ui-p16) | My approvals inbox | UI-P15 |
| 23 | [UI-P17](#prompt-ui-p17) | Approval decision and workflow | UI-P16 |
| 24 | [UI-P09](#prompt-ui-p09) | Scoping agent review | UI-P17 |
| 25 | [UI-P10](#prompt-ui-p10) | Scope candidate detail | UI-P09 |
| 26 | [UI-P11](#prompt-ui-p11) | Organization structure designer | UI-P10 |
| 27 | [UI-P12](#prompt-ui-p12) | Organization object detail | UI-P11 |
| 28 | [UI-P18](#prompt-ui-p18) | Deployment package and dry run | UI-P12 |
| 29 | [UI-P19](#prompt-ui-p19) | Deployment execution monitor | UI-P18 |
| 30 | [UI-P20](#prompt-ui-p20) | Readback and reconciliation | UI-P19 |
| 31 | [UI-P21](#prompt-ui-p21) | Exceptions and recovery worklist | UI-P20 |
| 32 | [UI-P13](#prompt-ui-p13) | Configuration activity worklist | UI-P21 |
| 33 | [UI-P14](#prompt-ui-p14) | Configuration proposal and value diff | UI-P13 |
| 34 | [UI-P22](#prompt-ui-p22) | Realize Test and qualification | UI-P14 |
| 35 | [UI-P23](#prompt-ui-p23) | Evidence and audit explorer | UI-P22 |
| 36 | [UI-P24](#prompt-ui-p24) | Run handover and pilot health | UI-P23 |
| 37 | [UI-P25](#prompt-ui-p25) | Benefits and outcome narrative | UI-P24 |
| 38 | [UI-P26](#prompt-ui-p26) | Access and governance administration | UI-P25 |
| 39 | [UI-P03](#prompt-ui-p03) | Discover and transformation context | UI-P26 |
| 40 | [UI-P02](#prompt-ui-p02) | Project and seven phase workspace | UI-P03 |
| 41 | [UI-P01](#prompt-ui-p01) | Executive value cockpit | UI-P02 |
| 42 | [A01](#prompt-a01) | Build GROW Assistant and twelve bounded intents | UI-P01 |
| 43 | [A02](#prompt-a02) | Qualify grounded explanations and agent evaluations | A01 |
| 44 | [I01](#prompt-i01) | Complete SAP Cloud ALM demonstration adapter | A02 |
| 45 | [I02](#prompt-i02) | Complete SAP CBC demonstration adapter | I01 |
| 46 | [I03](#prompt-i03) | Complete SAP S/4HANA Public Cloud demonstration adapter | I02 |
| 47 | [I04](#prompt-i04) | Complete SAP Signavio demonstration adapter | I03 |
| 48 | [I05](#prompt-i05) | Complete SAP LeanIX demonstration adapter | I04 |
| 49 | [I06](#prompt-i06) | Connect cross system business lineage | I05 |
| 50 | [U01](#prompt-u01) | Complete responsive Fiori adaptation | I06 |
| 51 | [U02](#prompt-u02) | Validate accessibility and keyboard operation | U01 |
| 52 | [U03](#prompt-u03) | Polish the boardroom presentation experience | U02 |
| 53 | [J01](#prompt-j01) | Prove Discovery to approved scope | U03 |
| 54 | [J02](#prompt-j02) | Prove Organization verification and configuration approval | J01 |
| 55 | [J03](#prompt-j03) | Prove Controlled deployment and recovery | J02 |
| 56 | [J04](#prompt-j04) | Prove Role scope and security boundaries | J03 |
| 57 | [J05](#prompt-j05) | Prove Integration grounding audit and handover | J04 |
| 58 | [Q01](#prompt-q01) | Audit every actionable affordance | J05 |
| 59 | [Q02](#prompt-q02) | Reconcile all 138 MVP features without overclaiming | Q01 |
| 60 | [Q03](#prompt-q03) | Prove persistence and execution invariants | Q02 |
| 61 | [Q06](#prompt-q06) | Validate browser startup connectivity and recovery | Q03 |
| 62 | [Q04](#prompt-q04) | Prepare presenter narrative and benefit calculations | Q06 |
| 63 | [Q07](#prompt-q07) | Conduct independent product and Fiori acceptance review | Q04 |
| 64 | [Q05](#prompt-q05) | Release candidate and team handover | Q07 |
| 65 | [R01](#prompt-r01) | Resume safely in a new coding session | Any completed checkpoint |
| 66 | [R02](#prompt-r02) | Repair a failed action or regression | Observed failure |
| 67 | [R03](#prompt-r03) | Review implementation against the source specification | A reviewable increment |
| 68 | [R04](#prompt-r04) | Prepare a bounded reviewable change request | One completed increment |

## Copy-ready implementation prompts

<a id="prompt-b00"></a>

### 01 B00 — Establish repository instructions and source authority

**Stage:** Foundation · **Requires:** None

**Expected change scope:** docs/spec/*; docs/status.md; docs/decisions.md; platform instruction file

```text
Act as the Codex implementation agent for this repository. Apply AGENTS.md and the materialized specification. Task B00.

Read this prompt library and the supplied prototype plan. Inspect existing repository files and applicable instructions without changing user work. Materialize the embedded specification appendices into docs/spec/baseline.json, screens.json, common-controls.json, personas.json, r1-features.json, process-catalog.json and demo-catalogs.json. Validate counts 28/130/24/138/202 and cross-references. Create docs/spec/README.md with source date 2026-10-30, precedence, simulation boundaries and seven-phase mapping. Store the project guardrails from the Durable project instructions section in the platform-specific instruction file, preserving existing instructions. Create docs/status.md and docs/decisions.md. Record source conflicts rather than silently changing counts. Implement these artifacts now; do not just propose them.

Acceptance checks:
All seven JSON files parse; IDs are unique; each feature screen reference exists; source baseline and instruction file are present.

Complete this slice end to end. Inspect relevant code, make the changes and run meaningful affected checks. Preserve unrelated edits. Update status and provide the evidence contract. If blocked, retain completed work and identify the exact unmet prerequisite.
```

<a id="prompt-b01"></a>

### 02 B01 — Inspect runtime and pin supported dependencies

**Stage:** Foundation · **Requires:** B00

**Expected change scope:** package.json; lockfile; docs/runtime.md; docs/decisions.md

```text
Act as the Codex implementation agent for this repository. Apply AGENTS.md and the materialized specification. Task B01.

Inspect package manager, Node runtime and repository conventions. Choose a supported compatible SAP UI5, CAP Node.js and test-tool set using official documentation and the actual environment. Record versions and the choice between Fiori elements and freestyle UI5 per screen. Use Fiori elements where it supports the floorplan and freestyle UI5 for organization/agent/custom interaction needs. Verify OData V4 compatibility. Create a reproducible lockfile and script contract for dev, lint, build, test:unit, test:contract, test:ui, test:coverage and verify:spec. Adapt names to an existing project if needed and document aliases. Do not silently install latest incompatible packages or require SAP credentials.

Acceptance checks:
Clean install and version compatibility are demonstrated, or a precise environment blocker is recorded; no false passing script placeholders.

Complete this slice end to end. Inspect relevant code, make the changes and run meaningful affected checks. Preserve unrelated edits. Update status and provide the evidence contract. If blocked, retain completed work and identify the exact unmet prerequisite.
```

<a id="prompt-b02"></a>

### 03 B02 — Create UI5 and CAP application skeleton

**Stage:** Foundation · **Requires:** B01

**Expected change scope:** app/grow/webapp/*; srv/*; db/schema.cds; README.md

```text
Act as the Codex implementation agent for this repository. Apply AGENTS.md and the materialized specification. Task B02.

Create a coherent app/grow/webapp, srv, db, fixtures, test and docs structure. Implement UI5 Component/manifest/router, i18n resources, theme configuration and a CAP mock service startup. Expose OData V4 metadata and explicit action endpoints. Implement sanitized errors and a health endpoint. Serve through a local same-origin route or documented development proxy; do not solve CORS by disabling browser security. Provide one real smoke view calling a mock backend record. Include scripts and a clean-start guide. Keep incomplete routes tracked, not declared finished.

Acceptance checks:
One documented command starts UI and service; OData metadata and smoke read work; restart behavior is documented.

Complete this slice end to end. Inspect relevant code, make the changes and run meaningful affected checks. Preserve unrelated edits. Update status and provide the evidence contract. If blocked, retain completed work and identify the exact unmet prerequisite.
```

<a id="prompt-b03"></a>

### 04 B03 — Implement domain contracts and immutable versions

**Stage:** Foundation · **Requires:** B02

**Expected change scope:** db/schema.cds; srv/domain/*; srv/services/*; test/contract/*

```text
Act as the Codex implementation agent for this repository. Apply AGENTS.md and the materialized specification. Task B03.

Implement Project, Landscape, Requirement, SourceDocument, CatalogItem, OrganizationNode, Assignment, Proposal, ConfigurationChange, Approval, DeploymentPackage, Action, Observation, Evidence, AuditEvent and Conversation contracts. Use stable IDs, client/project/organization/target boundaries, immutable artifact revisions and source lineage. Separate mutable draft content from submitted versions. Define typed configuration fields, dates, enums and consistent validation errors. Add indexes or repository query boundaries where relevant. Keep the persistence abstraction compatible with later HANA Cloud; do not claim that local mocks prove production HANA behavior.

Acceptance checks:
Contract tests reject invalid states, duplicate business keys, stale revisions and cross-project references; published schema is documented.

Complete this slice end to end. Inspect relevant code, make the changes and run meaningful affected checks. Preserve unrelated edits. Update status and provide the evidence contract. If blocked, retain completed work and identify the exact unmet prerequisite.
```

<a id="prompt-b04"></a>

### 05 B04 — Build complete reproducible fixture catalog

**Stage:** Foundation · **Requires:** B03

**Expected change scope:** fixtures/*; srv/repositories/*; test/fixtures/*; docs/fixtures.md

```text
Act as the Codex implementation agent for this repository. Apply AGENTS.md and the materialized specification. Task B04.

Use embedded process-catalog.json as the 202-process proposed BPD baseline; preserve every BR/TC ID. Add 10 fictional legal entities across the five named demo countries, coherent organization assignments, 16 illustrative scope candidates and 10 DEMO-* typed configuration activities across Finance/Procurement. Seed meaningful pending, returned, rejected, stale and approved records, integration faults, deployment observations and conversations. Add a second project and restricted organization fixture for access tests. Implement explicit snapshot/save/reset behavior with a user/workspace key and a seed version. Do not invent verified SAP scope IDs or accepted client requirements.

Acceptance checks:
Seed counts and referential integrity pass; reset restores the same graph and IDs; refresh preserves mutable state; seed data is labeled synthetic.

Complete this slice end to end. Inspect relevant code, make the changes and run meaningful affected checks. Preserve unrelated edits. Update status and provide the evidence contract. If blocked, retain completed work and identify the exact unmet prerequisite.
```

<a id="prompt-b11"></a>

### 06 B11 — Freeze typed demo catalogs and rule fixtures

**Stage:** Foundation · **Requires:** B04

**Expected change scope:** fixtures/catalogs/*; srv/validation/*; test/catalogs/*

```text
Act as the Codex implementation agent for this repository. Apply AGENTS.md and the materialized specification. Task B11.

Implement the demo-catalogs block in this library as the reproducible pilot definition. Create all 16 DEMO-SCOPE-* concepts, 10 organization object types and 10 DEMO-* configuration activity contracts. Their IDs are synthetic and must never be shown as verified SAP Best Practices or CBC IDs. Bind each activity to its proposed BR plus an explicit synthetic policy/source record for numeric values. Implement field type/allowed-value and cross-field validation; bind references to existing organization nodes. Keep blocked, attended and allowed mock pathways visible. Add invalid boundary fixtures for every field and prerequisite; do not manufacture a real SAP endpoint from an identifier.

Acceptance checks:
Catalog counts and references pass; each activity has typed positive/negative cases; values cite demo policy rather than claiming unstated client requirements.

Complete this slice end to end. Inspect relevant code, make the changes and run meaningful affected checks. Preserve unrelated edits. Update status and provide the evidence contract. If blocked, retain completed work and identify the exact unmet prerequisite.
```

<a id="prompt-b05"></a>

### 07 B05 — Enforce personas and project scope in backend

**Stage:** Foundation · **Requires:** B11

**Expected change scope:** srv/policy/*; srv/auth/*; fixtures/personas*; test/security/*

```text
Act as the Codex implementation agent for this repository. Apply AGENTS.md and the materialized specification. Task B05.

Implement the full Persona policy matrix in the embedded baseline. Include distinct authors and eligible approvers, separate release and deployment roles, audit-export entitlement and organization-scoped access. Implement a labeled demo identity provider behind a development-only mode boundary. Evaluate identity from trusted mock session context, never a caller-supplied role in a business payload. Apply checks to reads, associations, commands and exports; filter navigation as a convenience only. Denied direct links and forged requests must produce safe errors and an audit event. Revocation must affect subsequent protected operations.

Acceptance checks:
Consultant self-approval, sponsor dispatch, auditor export without grant, cross-project and cross-company deep-read/write tests are denied.

Complete this slice end to end. Inspect relevant code, make the changes and run meaningful affected checks. Preserve unrelated edits. Update status and provide the evidence contract. If blocked, retain completed work and identify the exact unmet prerequisite.
```

<a id="prompt-b06"></a>

### 08 B06 — Implement workflow approval and invalidation services

**Stage:** Foundation · **Requires:** B05

**Expected change scope:** srv/workflow/*; srv/approval/*; srv/notifications/*; test/workflow/*

```text
Act as the Codex implementation agent for this repository. Apply AGENTS.md and the materialized specification. Task B06.

Implement the exact proposal, approval, deployment and phase-gate state machines in the embedded baseline. Approval records bind artifact revision, payload hash, target, policy and expiry. Return/Reject require reasons. Changes to scope, organization, proposed values, target or material snapshots invalidate affected downstream approvals. Add durable pending approvals, assignments, notifications, optimistic concurrency and audit events. A UI navigation action never advances a gate. Provide server-side readiness queries returning actionable blockers with object links.

Acceptance checks:
Positive transitions work; stale, expired, revoked and self approvals fail; restart preserves pending approval; changed values cannot reuse a signature.

Complete this slice end to end. Inspect relevant code, make the changes and run meaningful affected checks. Preserve unrelated edits. Update status and provide the evidence contract. If blocked, retain completed work and identify the exact unmet prerequisite.
```

<a id="prompt-b07"></a>

### 09 B07 — Build deterministic integration and execution engine

**Stage:** Foundation · **Requires:** B06

**Expected change scope:** srv/adapters/*; srv/execution/*; fixtures/integrations/*; test/execution/*

```text
Act as the Codex implementation agent for this repository. Apply AGENTS.md and the materialized specification. Task B07.

Implement typed adapters with capability, validate, snapshot, dryRun, execute, status and reconcile. Use only deterministic local fixtures for Cloud ALM, CBC, S/4HANA Public Cloud, Signavio and LeanIX. Persist intent, stable action keys, target locks, correlation IDs, attempts and evidence. Distinguish API/upload/UI/attended/unsupported operation classification without claiming real support. Implement unknown, partial failure, proven-not-committed, attended and verified branches. Pause prevents new dispatch; retry ambiguous writes is blocked. Keep remote authority separate from approved intent. Emit redacted events for every privileged attempt.

Acceptance checks:
Crash/replay yields one logical action; conflicting target writes serialize; unknown goes to observation; verified state requires readback.

Complete this slice end to end. Inspect relevant code, make the changes and run meaningful affected checks. Preserve unrelated edits. Update status and provide the evidence contract. If blocked, retain completed work and identify the exact unmet prerequisite.
```

<a id="prompt-b08"></a>

### 10 B08 — Implement bounded deterministic agents

**Stage:** Foundation · **Requires:** B07

**Expected change scope:** srv/agents/*; fixtures/agents/*; test/agents/*

```text
Act as the Codex implementation agent for this repository. Apply AGENTS.md and the materialized specification. Task B08.

Implement Scoping, Organization, Configuration and Deployment agent runners. Expose typed inputs/outputs, source revision, goal, bounded plan, tool allowlist, concise rationale, budget and handoff owner. Use deterministic fixture decisions, not a live model. Scoping validates ID/title and dependency context; Organization proposes a validated graph; Configuration proposes typed values from cited requirements and verified structure; Deployment uses authorized package commands. Permit pause/cancel for undispatched work and safe analysis retry. Treat document instructions as untrusted data. No arbitrary script or endpoint execution.

Acceptance checks:
Agent run progresses through meaningful states; unsupported evidence causes abstention; source citations resolve; the agent cannot grant business approval.

Complete this slice end to end. Inspect relevant code, make the changes and run meaningful affected checks. Preserve unrelated edits. Update status and provide the evidence contract. If blocked, retain completed work and identify the exact unmet prerequisite.
```

<a id="prompt-b09"></a>

### 11 B09 — Create Fiori shell route registry and design primitives

**Stage:** Foundation · **Requires:** B08

**Expected change scope:** app/grow/webapp/Component.js; manifest.json; controls/*; model/*; i18n/*

```text
Act as the Codex implementation agent for this repository. Apply AGENTS.md and the materialized specification. Task B09.

Build genuine UI5 shell/navigation, route descriptors for all 28 screens, project/persona context, phase navigation and simulation status. Create reusable list/object/detail scaffolds, message handling, busy/empty/error states, confirmation dialogs and accessible navigation helpers. Use standard theme tokens and supported APIs. Establish global action registry and a stable UI5 ID naming convention. Unfinished routes can be tracked during construction but must not produce fake finished pages or pass a release gate. No generic HTML dashboard or direct internal-control DOM manipulation.

Acceptance checks:
Shell renders at target widths; route manifest contains exactly the 28 contracts; safe denied and unknown routes work; keyboard focus returns correctly.

Complete this slice end to end. Inspect relevant code, make the changes and run meaningful affected checks. Preserve unrelated edits. Update status and provide the evidence contract. If blocked, retain completed work and identify the exact unmet prerequisite.
```

<a id="prompt-b12"></a>

### 12 B12 — Implement real evidence and export services

**Stage:** Foundation · **Requires:** B09

**Expected change scope:** srv/evidence/*; srv/export/*; test/export/*

```text
Act as the Codex implementation agent for this repository. Apply AGENTS.md and the materialized specification. Task B12.

Implement a redacted audit/evidence ledger and actual CSV/JSON/text export service for reconciliation, evidence bundle and executive benefit summary. Exports must resolve accessible current fixture versions, include simulation status, source timestamps, hashes/manifest where useful and all relevant correlation/approval references. Check export entitlement separately from read permission. Encode and escape data safely, including spreadsheet-formula-leading CSV fields. Avoid leaking raw secrets or restricted values. A download is successful only when content exists and matches the requested scoped records.

Acceptance checks:
Real exports parse and reconcile; denied exports fail safely; source/version labels match; sensitive and formula-leading fields are handled safely.

Complete this slice end to end. Inspect relevant code, make the changes and run meaningful affected checks. Preserve unrelated edits. Update status and provide the evidence contract. If blocked, retain completed work and identify the exact unmet prerequisite.
```

<a id="prompt-b10"></a>

### 13 B10 — Implement all shared control families

**Stage:** Foundation · **Requires:** B12

**Expected change scope:** app/grow/webapp/shared/*; srv/actions/*; test/ui/common/*

```text
Act as the Codex implementation agent for this repository. Apply AGENTS.md and the materialized specification. Task B10.

Implement every C01–C24 family in docs/spec/common-controls.json. Include real search, project scope change, notifications, help, breadcrumbs, filters/variants, table sorting/personalization, checkboxes, value help, tabs/status drilldowns, dialog cancel, field-linked errors, assistant entry/history, demo scenario/fault controls, reset confirmation, metric drilldown and actual export downloads. Use real data effects and restore context; a success toast without the required effect is not implementation. Register each actionable instance with a stable action key and test contract.

Acceptance checks:
24 families have implemented handlers; cancel preserves data; no-results reset works; downloads contain content; role/project changes invalidate stale UI selections.

Complete this slice end to end. Inspect relevant code, make the changes and run meaningful affected checks. Preserve unrelated edits. Update status and provide the evidence contract. If blocked, retain completed work and identify the exact unmet prerequisite.
```

<a id="prompt-ui-p00"></a>

### 14 UI-P00 — Demo entry and role context

**Stage:** Screens · **Requires:** B10

**Expected change scope:** UI5 route/view/controller or supported extension for P00; relevant CAP actions; fixtures; test/ui/P00*; action registry

```text
Act as the Codex implementation agent for this repository. Apply AGENTS.md and the materialized specification. Task UI-P00.

Implement P00 at `/demo` with the Guided entry pattern. Authorized personas: All personas.
Purpose: A labeled demonstration entry establishes persona, project and scenario without pretending to authenticate to SAP.

Implement these exact action contracts; do not rename or omit their IDs:
- P00-A01 | Choose persona | Input: Select a seeded user | Required outcome: Load that user’s permitted navigation and project scope.
- P00-A02 | Choose scenario | Input: Select happy path or an exception | Required outcome: Load a separate fixture version and explain starting state.
- P00-A03 | Start guided tour | Input: Confirm demo context | Required outcome: Open P01 and show the first story prompt.
- P00-A04 | Reset scenario | Input: Confirm destructive demo reset | Required outcome: Clear only the selected demo workspace and restore its seed.

Use the established backend policies, workflow, fixture repository and shared UI controls. Include meaningful loading, empty, validation, denied and failure states. Preserve list selection, project context and return navigation. Register controls and tests. Demo reset and identity switching belong outside business approval flows. Do not turn the presenter selector into production RBAC.
The previous UI prompt is the build sequence predecessor, not an authorization shortcut. Link targets may be built earlier or later; do not mark the end-to-end gate complete until every referenced route exists.

Acceptance checks:
Every P00-A action passes its expected outcome and invalid/precondition case; direct route/refresh, permitted and denied personas, cancel and core responsive layout pass.

Complete this slice end to end. Inspect relevant code, make the changes and run meaningful affected checks. Preserve unrelated edits. Update status and provide the evidence contract. If blocked, retain completed work and identify the exact unmet prerequisite.
```

<a id="prompt-ui-p04"></a>

### 15 UI-P04 — Prepare and project setup

**Stage:** Screens · **Requires:** UI-P00

**Expected change scope:** UI5 route/view/controller or supported extension for P04; relevant CAP actions; fixtures; test/ui/P04*; action registry

```text
Act as the Codex implementation agent for this repository. Apply AGENTS.md and the materialized specification. Task UI-P04.

Implement P04 at `/projects/:id/prepare` with the Wizard and Object Page pattern. Authorized personas: Delivery Lead and Administrator.
Purpose: Establish ownership, legal entity inputs, countries, source baseline and target before proposing executable work.

Implement these exact action contracts; do not rename or omit their IDs:
- P04-A01 | Edit project | Input: Change permitted field | Required outcome: Validate mandatory values and save a draft version.
- P04-A02 | Legal entities | Input: Add or edit seeded entity | Required outcome: Open P12 with uniqueness and country validation.
- P04-A03 | Assign owners | Input: Choose eligible persona | Required outcome: Update responsibility and notify the assignee.
- P04-A04 | Readiness check | Input: Request validation | Required outcome: Show missing setup and route to P05 or P06 for resolution.

Use the established backend policies, workflow, fixture repository and shared UI controls. Include meaningful loading, empty, validation, denied and failure states. Preserve list selection, project context and return navigation. Register controls and tests. All links and rows must resolve to real permitted records and observable state, not placeholder messages.
The previous UI prompt is the build sequence predecessor, not an authorization shortcut. Link targets may be built earlier or later; do not mark the end-to-end gate complete until every referenced route exists.

Acceptance checks:
Every P04-A action passes its expected outcome and invalid/precondition case; direct route/refresh, permitted and denied personas, cancel and core responsive layout pass.

Complete this slice end to end. Inspect relevant code, make the changes and run meaningful affected checks. Preserve unrelated edits. Update status and provide the evidence contract. If blocked, retain completed work and identify the exact unmet prerequisite.
```

<a id="prompt-ui-p05"></a>

### 16 UI-P05 — Integration control center

**Stage:** Screens · **Requires:** UI-P04

**Expected change scope:** UI5 route/view/controller or supported extension for P05; relevant CAP actions; fixtures; test/ui/P05*; action registry

```text
Act as the Codex implementation agent for this repository. Apply AGENTS.md and the materialized specification. Task UI-P05.

Implement P05 at `/projects/:id/integrations` with the List Report and Object Page pattern. Authorized personas: Administrator and Integration Operator.
Purpose: Make the five SAP integration touchpoints tangible with correlation, capability and last-observed status.

Implement these exact action contracts; do not rename or omit their IDs:
- P05-A01 | Test connection | Input: Select a named system fixture | Required outcome: Show separate connectivity, authentication and permitted-operation results.
- P05-A02 | View contract | Input: Select an operation | Required outcome: Show API/upload/UI/attended classification and approved payload preview.
- P05-A03 | Refresh snapshot | Input: Request read-only refresh | Required outcome: Advance observed timestamp or show seeded stale/offline failure.
- P05-A04 | Inspect failed exchange | Input: Select a correlation ID | Required outcome: Open P21 with sanitized request, response and accountable recovery.
- P05-A05 | Open SAP reference | Input: Choose linked record | Required outcome: Open an in-app simulated target preview with external system identity and return route.

Use the established backend policies, workflow, fixture repository and shared UI controls. Include meaningful loading, empty, validation, denied and failure states. Preserve list selection, project context and return navigation. Register controls and tests. All links and rows must resolve to real permitted records and observable state, not placeholder messages.
The previous UI prompt is the build sequence predecessor, not an authorization shortcut. Link targets may be built earlier or later; do not mark the end-to-end gate complete until every referenced route exists.

Acceptance checks:
Every P05-A action passes its expected outcome and invalid/precondition case; direct route/refresh, permitted and denied personas, cancel and core responsive layout pass.

Complete this slice end to end. Inspect relevant code, make the changes and run meaningful affected checks. Preserve unrelated edits. Update status and provide the evidence contract. If blocked, retain completed work and identify the exact unmet prerequisite.
```

<a id="prompt-ui-p06"></a>

### 17 UI-P06 — TO BE document intake

**Stage:** Screens · **Requires:** UI-P05

**Expected change scope:** UI5 route/view/controller or supported extension for P06; relevant CAP actions; fixtures; test/ui/P06*; action registry

```text
Act as the Codex implementation agent for this repository. Apply AGENTS.md and the materialized specification. Task UI-P06.

Implement P06 at `/projects/:id/documents` with the Upload collection and Wizard pattern. Authorized personas: Business Analyst and Functional Consultant.
Purpose: Turn the existing BPD into versioned atomic requirements with visible extraction and source safety results.

Implement these exact action contracts; do not rename or omit their IDs:
- P06-A01 | Upload document | Input: Choose a safe local DOCX or provided fixture | Required outcome: Validate type and size; display extraction progress and resulting revision.
- P06-A02 | Use BPD fixture | Input: Select existing demonstration baseline | Required outcome: Create the same downstream records as upload; preserve BR and TC IDs.
- P06-A03 | Inspect source | Input: Select a paragraph reference | Required outcome: Open document preview at the cited passage.
- P06-A04 | Resolve upload issue | Input: Select duplicate or failed document | Required outcome: Offer new revision, remove draft or retry safe extraction.
- P06-A05 | Review requirements | Input: Extraction completes | Required outcome: Open P07 with unresolved and low-evidence items first.

Use the established backend policies, workflow, fixture repository and shared UI controls. Include meaningful loading, empty, validation, denied and failure states. Preserve list selection, project context and return navigation. Register controls and tests. Read an actual safe DOCX when provided, or use the explicit BPD fixture. Validate size/type, handle duplicate revisions and extraction errors. Do not pretend a different file was parsed. Implement a real supported parser or clearly use the fixture path.
The previous UI prompt is the build sequence predecessor, not an authorization shortcut. Link targets may be built earlier or later; do not mark the end-to-end gate complete until every referenced route exists.

Acceptance checks:
Every P06-A action passes its expected outcome and invalid/precondition case; direct route/refresh, permitted and denied personas, cancel and core responsive layout pass.

Complete this slice end to end. Inspect relevant code, make the changes and run meaningful affected checks. Preserve unrelated edits. Update status and provide the evidence contract. If blocked, retain completed work and identify the exact unmet prerequisite.
```

<a id="prompt-ui-p07"></a>

### 18 UI-P07 — Requirement and fit workbench

**Stage:** Screens · **Requires:** UI-P06

**Expected change scope:** UI5 route/view/controller or supported extension for P07; relevant CAP actions; fixtures; test/ui/P07*; action registry

```text
Act as the Codex implementation agent for this repository. Apply AGENTS.md and the materialized specification. Task UI-P07.

Implement P07 at `/projects/:id/requirements` with the List Report with Flexible Column Layout pattern. Authorized personas: Business Analyst and Functional Consultant.
Purpose: Keep the business requirement, proposed process fit, source and acceptance criterion together.

Implement these exact action contracts; do not rename or omit their IDs:
- P07-A01 | Filter or search | Input: Enter text or choose domain/country | Required outcome: Update rows and counts; provide reset and meaningful no-results state.
- P07-A02 | Edit requirement | Input: Change atomic text or classification | Required outcome: Create a new version and mark dependent proposals stale.
- P07-A03 | Inspect trace | Input: Select BR ID | Required outcome: Show source, scope, organization, configuration, TC and evidence links.
- P07-A04 | Request scope proposal | Input: Select eligible requirements | Required outcome: Create an agent run in P15 and route completed output to P09.
- P07-A05 | Resolve assumption | Input: Enter approved evidence | Required outcome: Validate source and update the unresolved decision register.

Use the established backend policies, workflow, fixture repository and shared UI controls. Include meaningful loading, empty, validation, denied and failure states. Preserve list selection, project context and return navigation. Register controls and tests. All links and rows must resolve to real permitted records and observable state, not placeholder messages.
The previous UI prompt is the build sequence predecessor, not an authorization shortcut. Link targets may be built earlier or later; do not mark the end-to-end gate complete until every referenced route exists.

Acceptance checks:
Every P07-A action passes its expected outcome and invalid/precondition case; direct route/refresh, permitted and denied personas, cancel and core responsive layout pass.

Complete this slice end to end. Inspect relevant code, make the changes and run meaningful affected checks. Preserve unrelated edits. Update status and provide the evidence contract. If blocked, retain completed work and identify the exact unmet prerequisite.
```

<a id="prompt-ui-p08"></a>

### 19 UI-P08 — Process and architecture explorer

**Stage:** Screens · **Requires:** UI-P07

**Expected change scope:** UI5 route/view/controller or supported extension for P08; relevant CAP actions; fixtures; test/ui/P08*; action registry

```text
Act as the Codex implementation agent for this repository. Apply AGENTS.md and the materialized specification. Task UI-P08.

Implement P08 at `/projects/:id/processes` with the Tree and detail view pattern. Authorized personas: Functional Consultant and Enterprise Architect.
Purpose: Browse the 202-process catalog and make Signavio process context discoverable without presenting it as automated business-process coverage.

Implement these exact action contracts; do not rename or omit their IDs:
- P08-A01 | Select domain or process | Input: Choose catalog node | Required outcome: Open process detail with BR/TC and scope candidates.
- P08-A02 | View process flow | Input: Select Signavio reference | Required outcome: Show a labeled illustrative flow and provenance; real licensed link is a separate action.
- P08-A03 | Inspect application relation | Input: Choose supporting system | Required outcome: Open P27 with the same process context.
- P08-A04 | Add to review | Input: Select process | Required outcome: Add requirements to the scope review basket and show updated count.

Use the established backend policies, workflow, fixture repository and shared UI controls. Include meaningful loading, empty, validation, denied and failure states. Preserve list selection, project context and return navigation. Register controls and tests. All links and rows must resolve to real permitted records and observable state, not placeholder messages.
The previous UI prompt is the build sequence predecessor, not an authorization shortcut. Link targets may be built earlier or later; do not mark the end-to-end gate complete until every referenced route exists.

Acceptance checks:
Every P08-A action passes its expected outcome and invalid/precondition case; direct route/refresh, permitted and denied personas, cancel and core responsive layout pass.

Complete this slice end to end. Inspect relevant code, make the changes and run meaningful affected checks. Preserve unrelated edits. Update status and provide the evidence contract. If blocked, retain completed work and identify the exact unmet prerequisite.
```

<a id="prompt-ui-p27"></a>

### 20 UI-P27 — Process application and architecture context

**Stage:** Screens · **Requires:** UI-P08

**Expected change scope:** UI5 route/view/controller or supported extension for P27; relevant CAP actions; fixtures; test/ui/P27*; action registry

```text
Act as the Codex implementation agent for this repository. Apply AGENTS.md and the materialized specification. Task UI-P27.

Implement P27 at `/projects/:id/architecture` with the Relationship list and Object Page pattern. Authorized personas: Enterprise Architect and Functional Consultant.
Purpose: Connect Signavio process context to LeanIX application and capability references and the implementation scope.

Implement these exact action contracts; do not rename or omit their IDs:
- P27-A01 | Select relation | Input: Choose process application or capability | Required outcome: Open provenance, lifecycle and owner details.
- P27-A02 | Open Signavio context | Input: Select process reference | Required outcome: Show labeled simulated process record and linked scope candidates.
- P27-A03 | Open LeanIX context | Input: Select fact-sheet reference | Required outcome: Show labeled simulated application record and supported process links.
- P27-A04 | Assess impact | Input: Choose scope change | Required outcome: Highlight affected architecture relations and require review.
- P27-A05 | Refresh mapped context | Input: Choose read-only synchronization | Required outcome: Show simulated synchronization, source ownership and conflict state.

Use the established backend policies, workflow, fixture repository and shared UI controls. Include meaningful loading, empty, validation, denied and failure states. Preserve list selection, project context and return navigation. Register controls and tests. Keep process IDs, LeanIX fact-sheet IDs and scope IDs separate. Explicitly label simulated external previews; no live native connector is implied.
The previous UI prompt is the build sequence predecessor, not an authorization shortcut. Link targets may be built earlier or later; do not mark the end-to-end gate complete until every referenced route exists.

Acceptance checks:
Every P27-A action passes its expected outcome and invalid/precondition case; direct route/refresh, permitted and denied personas, cancel and core responsive layout pass.

Complete this slice end to end. Inspect relevant code, make the changes and run meaningful affected checks. Preserve unrelated edits. Update status and provide the evidence contract. If blocked, retain completed work and identify the exact unmet prerequisite.
```

<a id="prompt-ui-p15"></a>

### 21 UI-P15 — Agent mission control

**Stage:** Screens · **Requires:** UI-P27

**Expected change scope:** UI5 route/view/controller or supported extension for P15; relevant CAP actions; fixtures; test/ui/P15*; action registry

```text
Act as the Codex implementation agent for this repository. Apply AGENTS.md and the materialized specification. Task UI-P15.

Implement P15 at `/projects/:id/agents/:runId` with the Object Page with Timeline pattern. Authorized personas: Consultant and Delivery Lead.
Purpose: Show bounded agents planning, retrieving sources, validating, waiting for review and handing off accountable work.

Implement these exact action contracts; do not rename or omit their IDs:
- P15-A01 | Inspect plan | Input: Choose visible step | Required outcome: Show intended tool, bounded input, expected output and prerequisite.
- P15-A02 | View sources | Input: Select evidence reference | Required outcome: Open source excerpt and freshness information.
- P15-A03 | Pause or cancel | Input: Choose pending demo run | Required outcome: Prevent undispatched steps and preserve completed evidence.
- P15-A04 | Review outcome | Input: Choose proposal result | Required outcome: Open P09 P11 or P13 with run linkage.
- P15-A05 | Retry safe analysis | Input: Choose failed read-only step | Required outcome: Create linked attempt; preserve prior failure and budget history.

Use the established backend policies, workflow, fixture repository and shared UI controls. Include meaningful loading, empty, validation, denied and failure states. Preserve list selection, project context and return navigation. Register controls and tests. All links and rows must resolve to real permitted records and observable state, not placeholder messages.
The previous UI prompt is the build sequence predecessor, not an authorization shortcut. Link targets may be built earlier or later; do not mark the end-to-end gate complete until every referenced route exists.

Acceptance checks:
Every P15-A action passes its expected outcome and invalid/precondition case; direct route/refresh, permitted and denied personas, cancel and core responsive layout pass.

Complete this slice end to end. Inspect relevant code, make the changes and run meaningful affected checks. Preserve unrelated edits. Update status and provide the evidence contract. If blocked, retain completed work and identify the exact unmet prerequisite.
```

<a id="prompt-ui-p16"></a>

### 22 UI-P16 — My approvals inbox

**Stage:** Screens · **Requires:** UI-P15

**Expected change scope:** UI5 route/view/controller or supported extension for P16; relevant CAP actions; fixtures; test/ui/P16*; action registry

```text
Act as the Codex implementation agent for this repository. Apply AGENTS.md and the materialized specification. Task UI-P16.

Implement P16 at `/projects/:id/approvals` with the List Report pattern. Authorized personas: Scope Organization Finance and Release Approvers.
Purpose: Route exact business decisions to eligible approvers and make overdue, returned and stale work visible.

Implement these exact action contracts; do not rename or omit their IDs:
- P16-A01 | Filter assignments | Input: Choose type status or due date | Required outcome: Show only permitted items with updated count.
- P16-A02 | Open approval | Input: Choose row | Required outcome: Open P17 with baseline, target, diff and eligibility.
- P16-A03 | Inspect eligibility | Input: Select own submitted item | Required outcome: Explain segregation of duties and identify eligible reviewer.
- P16-A04 | Open returned work | Input: Choose returned item | Required outcome: Route proposer to the affected proposal with reviewer comments.

Use the established backend policies, workflow, fixture repository and shared UI controls. Include meaningful loading, empty, validation, denied and failure states. Preserve list selection, project context and return navigation. Register controls and tests. All links and rows must resolve to real permitted records and observable state, not placeholder messages.
The previous UI prompt is the build sequence predecessor, not an authorization shortcut. Link targets may be built earlier or later; do not mark the end-to-end gate complete until every referenced route exists.

Acceptance checks:
Every P16-A action passes its expected outcome and invalid/precondition case; direct route/refresh, permitted and denied personas, cancel and core responsive layout pass.

Complete this slice end to end. Inspect relevant code, make the changes and run meaningful affected checks. Preserve unrelated edits. Update status and provide the evidence contract. If blocked, retain completed work and identify the exact unmet prerequisite.
```

<a id="prompt-ui-p17"></a>

### 23 UI-P17 — Approval decision and workflow

**Stage:** Screens · **Requires:** UI-P16

**Expected change scope:** UI5 route/view/controller or supported extension for P17; relevant CAP actions; fixtures; test/ui/P17*; action registry

```text
Act as the Codex implementation agent for this repository. Apply AGENTS.md and the materialized specification. Task UI-P17.

Implement P17 at `/projects/:id/approvals/:approvalId` with the Object Page with approval Timeline pattern. Authorized personas: Assigned eligible Approver.
Purpose: Require informed approval of the exact version, target and policy before any simulated write.

Implement these exact action contracts; do not rename or omit their IDs:
- P17-A01 | Approve | Input: Confirm eligible identity and immutable package | Required outcome: Record decision and unlock next gate only when all prerequisites pass.
- P17-A02 | Return for changes | Input: Enter mandatory reason | Required outcome: Create returned state and notify proposer.
- P17-A03 | Reject | Input: Enter reason and confirm | Required outcome: Record final rejection for this version; preserve lineage.
- P17-A04 | Inspect workflow | Input: Choose step or decision | Required outcome: Show assignment, timestamp, policy and next owner.
- P17-A05 | Review stale approval | Input: Open changed proposal | Required outcome: Show invalidation and route to a fresh approval request.

Use the established backend policies, workflow, fixture repository and shared UI controls. Include meaningful loading, empty, validation, denied and failure states. Preserve list selection, project context and return navigation. Register controls and tests. Only show Approve to an eligible assigned user. Always show enough evidence for the decision. Bind the decision to the exact version, target and expiry; return/reject require a reason.
The previous UI prompt is the build sequence predecessor, not an authorization shortcut. Link targets may be built earlier or later; do not mark the end-to-end gate complete until every referenced route exists.

Acceptance checks:
Every P17-A action passes its expected outcome and invalid/precondition case; direct route/refresh, permitted and denied personas, cancel and core responsive layout pass.

Complete this slice end to end. Inspect relevant code, make the changes and run meaningful affected checks. Preserve unrelated edits. Update status and provide the evidence contract. If blocked, retain completed work and identify the exact unmet prerequisite.
```

<a id="prompt-ui-p09"></a>

### 24 UI-P09 — Scoping agent review

**Stage:** Screens · **Requires:** UI-P17

**Expected change scope:** UI5 route/view/controller or supported extension for P09; relevant CAP actions; fixtures; test/ui/P09*; action registry

```text
Act as the Codex implementation agent for this repository. Apply AGENTS.md and the materialized specification. Task UI-P09.

Implement P09 at `/projects/:id/scope` with the List Report pattern. Authorized personas: Functional Consultant and Scope Approver.
Purpose: Review grounded scope candidates, exclusions, prerequisites and applicability before baselining.

Implement these exact action contracts; do not rename or omit their IDs:
- P09-A01 | Generate proposal | Input: Choose requirement set and catalog version | Required outcome: Create visible planned/running/completed agent states in P15.
- P09-A02 | Select candidate | Input: Open SAP identifier row | Required outcome: Navigate to P10 with evidence and prerequisites.
- P09-A03 | Accept or exclude | Input: Enter inclusion decision and reason | Required outcome: Persist reviewer choice; update dependency and coverage counts.
- P09-A04 | Compare versions | Input: Select two revisions | Required outcome: Show added/removed items and downstream impact.
- P09-A05 | Submit scope baseline | Input: Confirm reviewed candidates | Required outcome: Create scope approval in P16 or show unresolved blockers.

Use the established backend policies, workflow, fixture repository and shared UI controls. Include meaningful loading, empty, validation, denied and failure states. Preserve list selection, project context and return navigation. Register controls and tests. Use valid mock catalog labels; unverified entries must be visibly illustrative. Check prerequisites and exclusions independently of ranking scores.
The previous UI prompt is the build sequence predecessor, not an authorization shortcut. Link targets may be built earlier or later; do not mark the end-to-end gate complete until every referenced route exists.

Acceptance checks:
Every P09-A action passes its expected outcome and invalid/precondition case; direct route/refresh, permitted and denied personas, cancel and core responsive layout pass.

Complete this slice end to end. Inspect relevant code, make the changes and run meaningful affected checks. Preserve unrelated edits. Update status and provide the evidence contract. If blocked, retain completed work and identify the exact unmet prerequisite.
```

<a id="prompt-ui-p10"></a>

### 25 UI-P10 — Scope candidate detail

**Stage:** Screens · **Requires:** UI-P09

**Expected change scope:** UI5 route/view/controller or supported extension for P10; relevant CAP actions; fixtures; test/ui/P10*; action registry

```text
Act as the Codex implementation agent for this repository. Apply AGENTS.md and the materialized specification. Task UI-P10.

Implement P10 at `/projects/:id/scope/:scopeId` with the Object Page pattern. Authorized personas: Functional Consultant and Scope Approver.
Purpose: Explain why a scope item fits and where SAP availability or evidence still needs validation.

Implement these exact action contracts; do not rename or omit their IDs:
- P10-A01 | Inspect SAP identity | Input: Choose verified catalog reference | Required outcome: Display exact ID/title pair, release and verification state.
- P10-A02 | Explain recommendation | Input: Open assistant prompt | Required outcome: Answer using cited requirements and catalog excerpts.
- P10-A03 | Resolve prerequisite | Input: Select a prerequisite | Required outcome: Open the dependent scope object and preserve return context.
- P10-A04 | Apply reviewer decision | Input: Enter rationale | Required outcome: Save candidate decision and invalidate impacted approvals.
- P10-A05 | Prepare activation package | Input: Use approved baseline | Required outcome: Open P18 dry-run package or route to remaining approvals.

Use the established backend policies, workflow, fixture repository and shared UI controls. Include meaningful loading, empty, validation, denied and failure states. Preserve list selection, project context and return navigation. Register controls and tests. All links and rows must resolve to real permitted records and observable state, not placeholder messages.
The previous UI prompt is the build sequence predecessor, not an authorization shortcut. Link targets may be built earlier or later; do not mark the end-to-end gate complete until every referenced route exists.

Acceptance checks:
Every P10-A action passes its expected outcome and invalid/precondition case; direct route/refresh, permitted and denied personas, cancel and core responsive layout pass.

Complete this slice end to end. Inspect relevant code, make the changes and run meaningful affected checks. Preserve unrelated edits. Update status and provide the evidence contract. If blocked, retain completed work and identify the exact unmet prerequisite.
```

<a id="prompt-ui-p11"></a>

### 26 UI-P11 — Organization structure designer

**Stage:** Screens · **Requires:** UI-P10

**Expected change scope:** UI5 route/view/controller or supported extension for P11; relevant CAP actions; fixtures; test/ui/P11*; action registry

```text
Act as the Codex implementation agent for this repository. Apply AGENTS.md and the materialized specification. Task UI-P11.

Implement P11 at `/projects/:id/organization` with the Freestyle UI5 tree with detail panel pattern. Authorized personas: Functional Consultant and Organization Approver.
Purpose: Design 10 entities across five illustrative countries with accessible editing and explicit assignments.

Implement these exact action contracts; do not rename or omit their IDs:
- P11-A01 | Select node | Input: Choose company plant or organizational unit | Required outcome: Open P12 with required attributes and assignments.
- P11-A02 | Add node or assignment | Input: Choose allowed object type | Required outcome: Open typed form; reject duplicate codes and invalid parents.
- P11-A03 | Generate design | Input: Use approved scope version | Required outcome: Run organization agent and show proposed graph differences.
- P11-A04 | Validate structure | Input: Run deterministic rules | Required outcome: List missing attributes and assignment errors with focus links.
- P11-A05 | Submit structure | Input: Resolve mandatory issues | Required outcome: Create organization approval and downstream impact summary.

Use the established backend policies, workflow, fixture repository and shared UI controls. Include meaningful loading, empty, validation, denied and failure states. Preserve list selection, project context and return navigation. Register controls and tests. Use a keyboard-operable tree and forms as the baseline. A visual graph may supplement them but cannot be the only editing method. Check identifier uniqueness, parent type and assignment cardinality.
The previous UI prompt is the build sequence predecessor, not an authorization shortcut. Link targets may be built earlier or later; do not mark the end-to-end gate complete until every referenced route exists.

Acceptance checks:
Every P11-A action passes its expected outcome and invalid/precondition case; direct route/refresh, permitted and denied personas, cancel and core responsive layout pass.

Complete this slice end to end. Inspect relevant code, make the changes and run meaningful affected checks. Preserve unrelated edits. Update status and provide the evidence contract. If blocked, retain completed work and identify the exact unmet prerequisite.
```

<a id="prompt-ui-p12"></a>

### 27 UI-P12 — Organization object detail

**Stage:** Screens · **Requires:** UI-P11

**Expected change scope:** UI5 route/view/controller or supported extension for P12; relevant CAP actions; fixtures; test/ui/P12*; action registry

```text
Act as the Codex implementation agent for this repository. Apply AGENTS.md and the materialized specification. Task UI-P12.

Implement P12 at `/projects/:id/organization/:nodeId` with the Object Page pattern. Authorized personas: Functional Consultant and Organization Approver.
Purpose: Make legal attributes, identifiers and assignments editable through standard forms rather than graph-only interactions.

Implement these exact action contracts; do not rename or omit their IDs:
- P12-A01 | Edit attributes | Input: Change approved fields | Required outcome: Validate code/country/currency and save new graph revision.
- P12-A02 | Manage assignments | Input: Select allowed parent or related object | Required outcome: Validate cardinality and update tree and detail together.
- P12-A03 | Compare observed target | Input: Open snapshot | Required outcome: Show designed versus observed structure with timestamp.
- P12-A04 | Inspect impact | Input: Choose a changed field | Required outcome: List affected configuration proposals and approvals.
- P12-A05 | Return to designer | Input: Use breadcrumb | Required outcome: Restore selected node and prior filter.

Use the established backend policies, workflow, fixture repository and shared UI controls. Include meaningful loading, empty, validation, denied and failure states. Preserve list selection, project context and return navigation. Register controls and tests. All links and rows must resolve to real permitted records and observable state, not placeholder messages.
The previous UI prompt is the build sequence predecessor, not an authorization shortcut. Link targets may be built earlier or later; do not mark the end-to-end gate complete until every referenced route exists.

Acceptance checks:
Every P12-A action passes its expected outcome and invalid/precondition case; direct route/refresh, permitted and denied personas, cancel and core responsive layout pass.

Complete this slice end to end. Inspect relevant code, make the changes and run meaningful affected checks. Preserve unrelated edits. Update status and provide the evidence contract. If blocked, retain completed work and identify the exact unmet prerequisite.
```

<a id="prompt-ui-p18"></a>

### 28 UI-P18 — Deployment package and dry run

**Stage:** Screens · **Requires:** UI-P12

**Expected change scope:** UI5 route/view/controller or supported extension for P18; relevant CAP actions; fixtures; test/ui/P18*; action registry

```text
Act as the Codex implementation agent for this repository. Apply AGENTS.md and the materialized specification. Task UI-P18.

Implement P18 at `/projects/:id/packages/:packageId` with the Object Page with ordered action table pattern. Authorized personas: Release Manager and Deployment Operator.
Purpose: Separate preparation, release authorization and dispatch; respect scope and organization prerequisite deployment.

Implement these exact action contracts; do not rename or omit their IDs:
- P18-A01 | Build package | Input: Select approved baseline versions | Required outcome: Generate ordered manifest with target and stable action keys.
- P18-A02 | Dry run | Input: Run preflight | Required outcome: Display validation results and eligible or attended pathways without changing target.
- P18-A03 | Review blockers | Input: Select failed precondition | Required outcome: Open exact missing approval, stale snapshot or organization issue.
- P18-A04 | Request release authorization | Input: Submit immutable package | Required outcome: Create release approval in P16.
- P18-A05 | Execute simulation | Input: Use authorized current package | Required outcome: Start P19 only after policy, approval and target checks pass.

Use the established backend policies, workflow, fixture repository and shared UI controls. Include meaningful loading, empty, validation, denied and failure states. Preserve list selection, project context and return navigation. Register controls and tests. Scope and organization deployment are prerequisite package types. Configuration package dispatch must wait for verified target structures. Do not confuse application CI/CD with this agent.
The previous UI prompt is the build sequence predecessor, not an authorization shortcut. Link targets may be built earlier or later; do not mark the end-to-end gate complete until every referenced route exists.

Acceptance checks:
Every P18-A action passes its expected outcome and invalid/precondition case; direct route/refresh, permitted and denied personas, cancel and core responsive layout pass.

Complete this slice end to end. Inspect relevant code, make the changes and run meaningful affected checks. Preserve unrelated edits. Update status and provide the evidence contract. If blocked, retain completed work and identify the exact unmet prerequisite.
```

<a id="prompt-ui-p19"></a>

### 29 UI-P19 — Deployment execution monitor

**Stage:** Screens · **Requires:** UI-P18

**Expected change scope:** UI5 route/view/controller or supported extension for P19; relevant CAP actions; fixtures; test/ui/P19*; action registry

```text
Act as the Codex implementation agent for this repository. Apply AGENTS.md and the materialized specification. Task UI-P19.

Implement P19 at `/projects/:id/deployments/:runId` with the Object Page with Timeline and responsive action list pattern. Authorized personas: Deployment Operator and Release Manager.
Purpose: Make simulated external activity observable and recoverable rather than animating an unconditional success.

Implement these exact action contracts; do not rename or omit their IDs:
- P19-A01 | Inspect action | Input: Choose queued running or completed step | Required outcome: Show request classification, correlation, attempts and observed state.
- P19-A02 | Pause remaining actions | Input: Confirm pause | Required outcome: Stop new dispatch while an in-flight action resolves.
- P19-A03 | Reconcile unknown | Input: Select uncertain outcome | Required outcome: Open P20 with target observation; do not blindly retry.
- P19-A04 | Open attended step | Input: Choose human task | Required outcome: Show typed instructions, owner and evidence upload.
- P19-A05 | Open results | Input: Wait for verification | Required outcome: Open P20 or P21; completion requires observed evidence.

Use the established backend policies, workflow, fixture repository and shared UI controls. Include meaningful loading, empty, validation, denied and failure states. Preserve list selection, project context and return navigation. Register controls and tests. The default exception walkthrough must stop at Unknown, open reconciliation and never automatically resubmit a possible write. Completed actions remain completed when remaining work is paused.
The previous UI prompt is the build sequence predecessor, not an authorization shortcut. Link targets may be built earlier or later; do not mark the end-to-end gate complete until every referenced route exists.

Acceptance checks:
Every P19-A action passes its expected outcome and invalid/precondition case; direct route/refresh, permitted and denied personas, cancel and core responsive layout pass.

Complete this slice end to end. Inspect relevant code, make the changes and run meaningful affected checks. Preserve unrelated edits. Update status and provide the evidence contract. If blocked, retain completed work and identify the exact unmet prerequisite.
```

<a id="prompt-ui-p20"></a>

### 30 UI-P20 — Readback and reconciliation

**Stage:** Screens · **Requires:** UI-P19

**Expected change scope:** UI5 route/view/controller or supported extension for P20; relevant CAP actions; fixtures; test/ui/P20*; action registry

```text
Act as the Codex implementation agent for this repository. Apply AGENTS.md and the materialized specification. Task UI-P20.

Implement P20 at `/projects/:id/reconciliation/:packageId` with the Comparison table and Object Page pattern. Authorized personas: Deployment Operator and Functional Consultant.
Purpose: Distinguish approved intent, simulated target observations and verified completion.

Implement these exact action contracts; do not rename or omit their IDs:
- P20-A01 | Refresh observation | Input: Request read-only lookup | Required outcome: Resolve seeded match mismatch or unknown with a new timestamp.
- P20-A02 | Inspect difference | Input: Choose mismatched field | Required outcome: Show approved and observed values and affected requirements.
- P20-A03 | Create recovery task | Input: Assign accountable owner | Required outcome: Open P21 and link the original action.
- P20-A04 | Accept verified completion | Input: All required observations match | Required outcome: Close eligible actions and update project readiness.
- P20-A05 | Export reconciliation | Input: Choose accessible evidence format | Required outcome: Download actual fixture report with source and simulated status.

Use the established backend policies, workflow, fixture repository and shared UI controls. Include meaningful loading, empty, validation, denied and failure states. Preserve list selection, project context and return navigation. Register controls and tests. All links and rows must resolve to real permitted records and observable state, not placeholder messages.
The previous UI prompt is the build sequence predecessor, not an authorization shortcut. Link targets may be built earlier or later; do not mark the end-to-end gate complete until every referenced route exists.

Acceptance checks:
Every P20-A action passes its expected outcome and invalid/precondition case; direct route/refresh, permitted and denied personas, cancel and core responsive layout pass.

Complete this slice end to end. Inspect relevant code, make the changes and run meaningful affected checks. Preserve unrelated edits. Update status and provide the evidence contract. If blocked, retain completed work and identify the exact unmet prerequisite.
```

<a id="prompt-ui-p21"></a>

### 31 UI-P21 — Exceptions and recovery worklist

**Stage:** Screens · **Requires:** UI-P20

**Expected change scope:** UI5 route/view/controller or supported extension for P21; relevant CAP actions; fixtures; test/ui/P21*; action registry

```text
Act as the Codex implementation agent for this repository. Apply AGENTS.md and the materialized specification. Task UI-P21.

Implement P21 at `/projects/:id/exceptions` with the List Report and Object Page pattern. Authorized personas: Integration Operator and Deployment Operator.
Purpose: Turn failures into owned decisions with safe recovery and no hidden retry loops.

Implement these exact action contracts; do not rename or omit their IDs:
- P21-A01 | Inspect exception | Input: Select failed exchange or validation | Required outcome: Show category, sanitized evidence and affected gate.
- P21-A02 | Assign owner | Input: Choose eligible operator | Required outcome: Record assignment and notify.
- P21-A03 | Retry eligible operation | Input: Review safe-retry assessment | Required outcome: Run read-only or proven-uncommitted retry; ambiguous writes route to reconciliation.
- P21-A04 | Complete attended task | Input: Enter required evidence and result | Required outcome: Record reported completion then require readback before verified state.
- P21-A05 | Escalate | Input: Enter reason | Required outcome: Create in-app escalation and retain return context.

Use the established backend policies, workflow, fixture repository and shared UI controls. Include meaningful loading, empty, validation, denied and failure states. Preserve list selection, project context and return navigation. Register controls and tests. All links and rows must resolve to real permitted records and observable state, not placeholder messages.
The previous UI prompt is the build sequence predecessor, not an authorization shortcut. Link targets may be built earlier or later; do not mark the end-to-end gate complete until every referenced route exists.

Acceptance checks:
Every P21-A action passes its expected outcome and invalid/precondition case; direct route/refresh, permitted and denied personas, cancel and core responsive layout pass.

Complete this slice end to end. Inspect relevant code, make the changes and run meaningful affected checks. Preserve unrelated edits. Update status and provide the evidence contract. If blocked, retain completed work and identify the exact unmet prerequisite.
```

<a id="prompt-ui-p13"></a>

### 32 UI-P13 — Configuration activity worklist

**Stage:** Screens · **Requires:** UI-P21

**Expected change scope:** UI5 route/view/controller or supported extension for P13; relevant CAP actions; fixtures; test/ui/P13*; action registry

```text
Act as the Codex implementation agent for this repository. Apply AGENTS.md and the materialized specification. Task UI-P13.

Implement P13 at `/projects/:id/configuration` with the List Report pattern. Authorized personas: Configuration Consultant and Finance Approver.
Purpose: Resolve requirements to configuration activities and distinguish an activity identifier from its executable integration pathway.

Implement these exact action contracts; do not rename or omit their IDs:
- P13-A01 | Generate values | Input: Select pilot activity set | Required outcome: Run configuration agent with grounded requirements and verified structure.
- P13-A02 | Open activity | Input: Choose activity row | Required outcome: Open P14 with typed fields, current values and suggested values.
- P13-A03 | Filter pathway | Input: Choose API upload UI or attended | Required outcome: Update supported-operation rows and counts.
- P13-A04 | Validate set | Input: Run field and dependency checks | Required outcome: Show errors and unresolved local requirements.
- P13-A05 | Submit change set | Input: Select validated revisions | Required outcome: Create approval for the exact target, values and package hash.

Use the established backend policies, workflow, fixture repository and shared UI controls. Include meaningful loading, empty, validation, denied and failure states. Preserve list selection, project context and return navigation. Register controls and tests. All links and rows must resolve to real permitted records and observable state, not placeholder messages.
The previous UI prompt is the build sequence predecessor, not an authorization shortcut. Link targets may be built earlier or later; do not mark the end-to-end gate complete until every referenced route exists.

Acceptance checks:
Every P13-A action passes its expected outcome and invalid/precondition case; direct route/refresh, permitted and denied personas, cancel and core responsive layout pass.

Complete this slice end to end. Inspect relevant code, make the changes and run meaningful affected checks. Preserve unrelated edits. Update status and provide the evidence contract. If blocked, retain completed work and identify the exact unmet prerequisite.
```

<a id="prompt-ui-p14"></a>

### 33 UI-P14 — Configuration proposal and value diff

**Stage:** Screens · **Requires:** UI-P13

**Expected change scope:** UI5 route/view/controller or supported extension for P14; relevant CAP actions; fixtures; test/ui/P14*; action registry

```text
Act as the Codex implementation agent for this repository. Apply AGENTS.md and the materialized specification. Task UI-P14.

Implement P14 at `/projects/:id/configuration/:activityId` with the Object Page with editable table pattern. Authorized personas: Configuration Consultant and Finance Approver.
Purpose: Let reviewers compare observed, proposed and approved values and understand the source for each value.

Implement these exact action contracts; do not rename or omit their IDs:
- P14-A01 | Edit proposed value | Input: Enter typed value | Required outcome: Validate allowed values and cross-field rules; retain human edit attribution.
- P14-A02 | View evidence | Input: Select field citation | Required outcome: Open BR/source passage and organization dependency.
- P14-A03 | Explain risk | Input: Select risk status | Required outcome: Show finance-sensitive or irreversible conditions and required owner.
- P14-A04 | Refresh observed values | Input: Request snapshot | Required outcome: Update diff and invalidate approval when target state changed.
- P14-A05 | Submit or revise | Input: Save validated version | Required outcome: Route to P16 or return a field-linked blocker list.

Use the established backend policies, workflow, fixture repository and shared UI controls. Include meaningful loading, empty, validation, denied and failure states. Preserve list selection, project context and return navigation. Register controls and tests. Keep observed, proposed and approved values distinct. Show source per value and human edits. A refresh that introduces drift invalidates the material approval.
The previous UI prompt is the build sequence predecessor, not an authorization shortcut. Link targets may be built earlier or later; do not mark the end-to-end gate complete until every referenced route exists.

Acceptance checks:
Every P14-A action passes its expected outcome and invalid/precondition case; direct route/refresh, permitted and denied personas, cancel and core responsive layout pass.

Complete this slice end to end. Inspect relevant code, make the changes and run meaningful affected checks. Preserve unrelated edits. Update status and provide the evidence contract. If blocked, retain completed work and identify the exact unmet prerequisite.
```

<a id="prompt-ui-p22"></a>

### 34 UI-P22 — Realize Test and qualification

**Stage:** Screens · **Requires:** UI-P14

**Expected change scope:** UI5 route/view/controller or supported extension for P22; relevant CAP actions; fixtures; test/ui/P22*; action registry

```text
Act as the Codex implementation agent for this repository. Apply AGENTS.md and the materialized specification. Task UI-P22.

Implement P22 at `/projects/:id/quality` with the List Report and Object Page pattern. Authorized personas: QA Lead and Business Owner.
Purpose: Demonstrate product qualification and selected pilot scenarios without claiming the future full process-testing agent.

Implement these exact action contracts; do not rename or omit their IDs:
- P22-A01 | Run demo suite | Input: Select deterministic fixture tests | Required outcome: Show queued/running/passed/failed results linked to feature and TC.
- P22-A02 | Inspect failure | Input: Choose failed test | Required outcome: Open assertion, evidence and affected gate.
- P22-A03 | Record UAT result | Input: Enter permitted business outcome | Required outcome: Persist acceptance or defect with accountable owner.
- P22-A04 | Create ALM task | Input: Confirm mapped target | Required outcome: Simulate correlated task creation and show resulting external ID.
- P22-A05 | Request quality gate | Input: Use complete evidence set | Required outcome: Create approval or show missing tests and unresolved defects.

Use the established backend policies, workflow, fixture repository and shared UI controls. Include meaningful loading, empty, validation, denied and failure states. Preserve list selection, project context and return navigation. Register controls and tests. This page represents MVP product qualification and selected pilot scenarios; it is not the future full 202-process test automation agent.
The previous UI prompt is the build sequence predecessor, not an authorization shortcut. Link targets may be built earlier or later; do not mark the end-to-end gate complete until every referenced route exists.

Acceptance checks:
Every P22-A action passes its expected outcome and invalid/precondition case; direct route/refresh, permitted and denied personas, cancel and core responsive layout pass.

Complete this slice end to end. Inspect relevant code, make the changes and run meaningful affected checks. Preserve unrelated edits. Update status and provide the evidence contract. If blocked, retain completed work and identify the exact unmet prerequisite.
```

<a id="prompt-ui-p23"></a>

### 35 UI-P23 — Evidence and audit explorer

**Stage:** Screens · **Requires:** UI-P22

**Expected change scope:** UI5 route/view/controller or supported extension for P23; relevant CAP actions; fixtures; test/ui/P23*; action registry

```text
Act as the Codex implementation agent for this repository. Apply AGENTS.md and the materialized specification. Task UI-P23.

Implement P23 at `/projects/:id/evidence` with the List Report and Object Page pattern. Authorized personas: Auditor and authorized project roles.
Purpose: Make every decision and simulated privileged attempt traceable from source through outcome.

Implement these exact action contracts; do not rename or omit their IDs:
- P23-A01 | Search audit | Input: Filter actor time BR or package | Required outcome: Return authorized events and stable correlation references.
- P23-A02 | Open lineage | Input: Select artifact | Required outcome: Traverse requirement, proposal, approval, action and observation.
- P23-A03 | Inspect redaction | Input: Select restricted field | Required outcome: Explain policy without revealing hidden value.
- P23-A04 | Export bundle | Input: Confirm export entitlement | Required outcome: Download a real demo evidence file with manifest and simulation label.

Use the established backend policies, workflow, fixture repository and shared UI controls. Include meaningful loading, empty, validation, denied and failure states. Preserve list selection, project context and return navigation. Register controls and tests. All links and rows must resolve to real permitted records and observable state, not placeholder messages.
The previous UI prompt is the build sequence predecessor, not an authorization shortcut. Link targets may be built earlier or later; do not mark the end-to-end gate complete until every referenced route exists.

Acceptance checks:
Every P23-A action passes its expected outcome and invalid/precondition case; direct route/refresh, permitted and denied personas, cancel and core responsive layout pass.

Complete this slice end to end. Inspect relevant code, make the changes and run meaningful affected checks. Preserve unrelated edits. Update status and provide the evidence contract. If blocked, retain completed work and identify the exact unmet prerequisite.
```

<a id="prompt-ui-p24"></a>

### 36 UI-P24 — Run handover and pilot health

**Stage:** Screens · **Requires:** UI-P23

**Expected change scope:** UI5 route/view/controller or supported extension for P24; relevant CAP actions; fixtures; test/ui/P24*; action registry

```text
Act as the Codex implementation agent for this repository. Apply AGENTS.md and the materialized specification. Task UI-P24.

Implement P24 at `/projects/:id/run` with the Overview and Object Page pattern. Authorized personas: Support Operator and Delivery Lead.
Purpose: Close the MVP story with ownership, known limitations and pilot monitoring; full Run automation remains future scope.

Implement these exact action contracts; do not rename or omit their IDs:
- P24-A01 | Open runbook | Input: Select a known issue | Required outcome: Show recovery procedure and responsible owner.
- P24-A02 | Inspect pilot health | Input: Select health indicator | Required outcome: Open correlated demo alerts and last-observed state.
- P24-A03 | Accept handover | Input: Confirm complete evidence | Required outcome: Record authorized handover or list missing artifacts.
- P24-A04 | Record support task | Input: Enter incident description | Required outcome: Create owned demo task with project linkage.
- P24-A05 | Open future capability | Input: Select roadmap topic | Required outcome: Show an interactive future-scope explanation and return route.

Use the established backend policies, workflow, fixture repository and shared UI controls. Include meaningful loading, empty, validation, denied and failure states. Preserve list selection, project context and return navigation. Register controls and tests. All links and rows must resolve to real permitted records and observable state, not placeholder messages.
The previous UI prompt is the build sequence predecessor, not an authorization shortcut. Link targets may be built earlier or later; do not mark the end-to-end gate complete until every referenced route exists.

Acceptance checks:
Every P24-A action passes its expected outcome and invalid/precondition case; direct route/refresh, permitted and denied personas, cancel and core responsive layout pass.

Complete this slice end to end. Inspect relevant code, make the changes and run meaningful affected checks. Preserve unrelated edits. Update status and provide the evidence contract. If blocked, retain completed work and identify the exact unmet prerequisite.
```

<a id="prompt-ui-p25"></a>

### 37 UI-P25 — Benefits and outcome narrative

**Stage:** Screens · **Requires:** UI-P24

**Expected change scope:** UI5 route/view/controller or supported extension for P25; relevant CAP actions; fixtures; test/ui/P25*; action registry

```text
Act as the Codex implementation agent for this repository. Apply AGENTS.md and the materialized specification. Task UI-P25.

Implement P25 at `/projects/:id/value` with the Analytical overview pattern. Authorized personas: Sponsor and Delivery Lead.
Purpose: Explain how grounded proposals, reusable structures, approvals and verified execution reduce avoidable effort and risk.

Implement these exact action contracts; do not rename or omit their IDs:
- P25-A01 | Inspect metric | Input: Select coverage time or rework indicator | Required outcome: Show denominator, event trail and whether observed or illustrative.
- P25-A02 | Edit planning assumption | Input: Change baseline hours or unit cost | Required outcome: Recalculate scenario benefit and label it illustrative.
- P25-A03 | Compare journey | Input: Choose baseline versus assisted mode | Required outcome: Show step counts and human checkpoints with assumptions.
- P25-A04 | Export executive summary | Input: Choose permitted report | Required outcome: Download a real demo report including caveats and open risks.

Use the established backend policies, workflow, fixture repository and shared UI controls. Include meaningful loading, empty, validation, denied and failure states. Preserve list selection, project context and return navigation. Register controls and tests. Every metric shows denominator and source. Seeded savings are illustrative; never present a prototype calculation as an achieved client benefit.
The previous UI prompt is the build sequence predecessor, not an authorization shortcut. Link targets may be built earlier or later; do not mark the end-to-end gate complete until every referenced route exists.

Acceptance checks:
Every P25-A action passes its expected outcome and invalid/precondition case; direct route/refresh, permitted and denied personas, cancel and core responsive layout pass.

Complete this slice end to end. Inspect relevant code, make the changes and run meaningful affected checks. Preserve unrelated edits. Update status and provide the evidence contract. If blocked, retain completed work and identify the exact unmet prerequisite.
```

<a id="prompt-ui-p26"></a>

### 38 UI-P26 — Access and governance administration

**Stage:** Screens · **Requires:** UI-P25

**Expected change scope:** UI5 route/view/controller or supported extension for P26; relevant CAP actions; fixtures; test/ui/P26*; action registry

```text
Act as the Codex implementation agent for this repository. Apply AGENTS.md and the materialized specification. Task UI-P26.

Implement P26 at `/projects/:id/access` with the List Report and Object Page pattern. Authorized personas: Administrator and Security Reviewer.
Purpose: Demonstrate permission boundaries, access expiry and audit-export separation without allowing role escalation from chat.

Implement these exact action contracts; do not rename or omit their IDs:
- P26-A01 | Inspect persona grants | Input: Select seeded user | Required outcome: Show permitted actions and organization scope.
- P26-A02 | Change demo grant | Input: Choose allowed scope and expiry | Required outcome: Record audited demo access change and refresh navigation.
- P26-A03 | Revoke access | Input: Confirm user scope | Required outcome: Deny subsequent protected routes and show safe error.
- P26-A04 | Test denied route | Input: Choose predefined negative case | Required outcome: Show access denied and authorized return option.

Use the established backend policies, workflow, fixture repository and shared UI controls. Include meaningful loading, empty, validation, denied and failure states. Preserve list selection, project context and return navigation. Register controls and tests. All links and rows must resolve to real permitted records and observable state, not placeholder messages.
The previous UI prompt is the build sequence predecessor, not an authorization shortcut. Link targets may be built earlier or later; do not mark the end-to-end gate complete until every referenced route exists.

Acceptance checks:
Every P26-A action passes its expected outcome and invalid/precondition case; direct route/refresh, permitted and denied personas, cancel and core responsive layout pass.

Complete this slice end to end. Inspect relevant code, make the changes and run meaningful affected checks. Preserve unrelated edits. Update status and provide the evidence contract. If blocked, retain completed work and identify the exact unmet prerequisite.
```

<a id="prompt-ui-p03"></a>

### 39 UI-P03 — Discover and transformation context

**Stage:** Screens · **Requires:** UI-P26

**Expected change scope:** UI5 route/view/controller or supported extension for P03; relevant CAP actions; fixtures; test/ui/P03*; action registry

```text
Act as the Codex implementation agent for this repository. Apply AGENTS.md and the materialized specification. Task UI-P03.

Implement P03 at `/projects/:id/discover` with the Object Page pattern. Authorized personas: Sponsor Business Owner and Enterprise Architect.
Purpose: Connect industry goals and business processes to proposed scope and applications.

Implement these exact action contracts; do not rename or omit their IDs:
- P03-A01 | Business outcome | Input: Select an outcome | Required outcome: Open measurable benefit and linked process set.
- P03-A02 | Process landscape | Input: Select manufacturing domain | Required outcome: Open P08 filtered to that domain.
- P03-A03 | Architecture context | Input: Select application relation | Required outcome: Open P27 with LeanIX references and lifecycle context.
- P03-A04 | Confirm discovery brief | Input: Edit assumptions and save | Required outcome: Version the brief and show required decision owners.

Use the established backend policies, workflow, fixture repository and shared UI controls. Include meaningful loading, empty, validation, denied and failure states. Preserve list selection, project context and return navigation. Register controls and tests. All links and rows must resolve to real permitted records and observable state, not placeholder messages.
The previous UI prompt is the build sequence predecessor, not an authorization shortcut. Link targets may be built earlier or later; do not mark the end-to-end gate complete until every referenced route exists.

Acceptance checks:
Every P03-A action passes its expected outcome and invalid/precondition case; direct route/refresh, permitted and denied personas, cancel and core responsive layout pass.

Complete this slice end to end. Inspect relevant code, make the changes and run meaningful affected checks. Preserve unrelated edits. Update status and provide the evidence contract. If blocked, retain completed work and identify the exact unmet prerequisite.
```

<a id="prompt-ui-p02"></a>

### 40 UI-P02 — Project and seven phase workspace

**Stage:** Screens · **Requires:** UI-P03

**Expected change scope:** UI5 route/view/controller or supported extension for P02; relevant CAP actions; fixtures; test/ui/P02*; action registry

```text
Act as the Codex implementation agent for this repository. Apply AGENTS.md and the materialized specification. Task UI-P02.

Implement P02 at `/projects/:id` with the Object Page with phase navigation pattern. Authorized personas: Delivery Lead and permitted project members.
Purpose: Keep all seven phases reachable while distinguishing completed work, current work and simulated later-stage evidence.

Implement these exact action contracts; do not rename or omit their IDs:
- P02-A01 | Select phase | Input: Click any phase | Required outcome: Open its worklist or gate overview without granting execution authority.
- P02-A02 | Gate details | Input: Select a gate | Required outcome: Show required evidence, missing items, owner and linked tasks.
- P02-A03 | Change project | Input: Select authorized project | Required outcome: Reload context and clear selections belonging to the prior project.
- P02-A04 | Phase completion | Input: Request readiness review | Required outcome: Open approval preparation or list blockers; never bypass dependencies.

Use the established backend policies, workflow, fixture repository and shared UI controls. Include meaningful loading, empty, validation, denied and failure states. Preserve list selection, project context and return navigation. Register controls and tests. All links and rows must resolve to real permitted records and observable state, not placeholder messages.
The previous UI prompt is the build sequence predecessor, not an authorization shortcut. Link targets may be built earlier or later; do not mark the end-to-end gate complete until every referenced route exists.

Acceptance checks:
Every P02-A action passes its expected outcome and invalid/precondition case; direct route/refresh, permitted and denied personas, cancel and core responsive layout pass.

Complete this slice end to end. Inspect relevant code, make the changes and run meaningful affected checks. Preserve unrelated edits. Update status and provide the evidence contract. If blocked, retain completed work and identify the exact unmet prerequisite.
```

<a id="prompt-ui-p01"></a>

### 41 UI-P01 — Executive value cockpit

**Stage:** Screens · **Requires:** UI-P02

**Expected change scope:** UI5 route/view/controller or supported extension for P01; relevant CAP actions; fixtures; test/ui/P01*; action registry

```text
Act as the Codex implementation agent for this repository. Apply AGENTS.md and the materialized specification. Task UI-P01.

Implement P01 at `/home` with the Overview with actionable cards pattern. Authorized personas: Sponsor and Delivery Lead.
Purpose: Show the transformation story, unresolved decisions and verified progress before exposing operational detail.

Implement these exact action contracts; do not rename or omit their IDs:
- P01-A01 | Readiness KPI | Input: Select phase or country | Required outcome: Open P02 with the same filter; reveal numerator and denominator.
- P01-A02 | Value indicator | Input: Choose a benefit | Required outcome: Open P25 and show its assumptions and evidence.
- P01-A03 | Approval count | Input: Select pending work | Required outcome: Open P16 filtered to visible approvals.
- P01-A04 | Continue journey | Input: Use current phase and role | Required outcome: Route to the next eligible task; show blockers when none is ready.

Use the established backend policies, workflow, fixture repository and shared UI controls. Include meaningful loading, empty, validation, denied and failure states. Preserve list selection, project context and return navigation. Register controls and tests. All links and rows must resolve to real permitted records and observable state, not placeholder messages.
The previous UI prompt is the build sequence predecessor, not an authorization shortcut. Link targets may be built earlier or later; do not mark the end-to-end gate complete until every referenced route exists.

Acceptance checks:
Every P01-A action passes its expected outcome and invalid/precondition case; direct route/refresh, permitted and denied personas, cancel and core responsive layout pass.

Complete this slice end to end. Inspect relevant code, make the changes and run meaningful affected checks. Preserve unrelated edits. Update status and provide the evidence contract. If blocked, retain completed work and identify the exact unmet prerequisite.
```

<a id="prompt-a01"></a>

### 42 A01 — Build GROW Assistant and twelve bounded intents

**Stage:** Conversation · **Requires:** UI-P01

**Expected change scope:** app/grow/webapp/assistant/*; srv/assistant/*; fixtures/assistant/*; test/assistant/*

```text
Act as the Codex implementation agent for this repository. Apply AGENTS.md and the materialized specification. Task A01.

Implement the custom Joule-inspired assistant through the shell and full-screen phone route. Support at least: explain scope, explain configuration, show approvals, identify phase blockers, navigate requirement, inspect evidence, draft values, prepare package, check deployment status, explain unknown recovery, summarize benefits and request handover. Use deterministic grounded responses with accessible sources and actionable links. Add send, stop, retry, new thread, history, source expansion, prompts, feedback and close. Unsupported requests clarify. Requests to approve, change roles or bypass gates are denied and route to permitted review. Store conversations per user/project; a project switch changes context explicitly. Do not claim actual Joule embedding or require LLM credentials.

Acceptance checks:
All twelve intents and C17–C20 pass; interrupted response stops; inaccessible citations do not leak; navigation opens exact object; chat cannot approve or dispatch outside normal checks.

Complete this slice end to end. Inspect relevant code, make the changes and run meaningful affected checks. Preserve unrelated edits. Update status and provide the evidence contract. If blocked, retain completed work and identify the exact unmet prerequisite.
```

<a id="prompt-a02"></a>

### 43 A02 — Qualify grounded explanations and agent evaluations

**Stage:** Conversation · **Requires:** A01

**Expected change scope:** fixtures/evaluations/*; test/agents/evaluation*; P15 P22; docs/qa/agent-evaluations.md

```text
Act as the Codex implementation agent for this repository. Apply AGENTS.md and the materialized specification. Task A02.

Create a versioned deterministic gold set for scoping IDs, missing-country applicability, organization constraints, configuration values, denied actions, source freshness and prompt injection. Inspect expected source citations, abstentions, reviewer edits and model/prompt/fixture version fields. Validate every assistant action link resolves to an allowed current object. Show critical failures and corrections in P15/P22 rather than unconditional confidence percentages. Because this prototype uses deterministic responders, label evaluations as prototype behavior tests, not measured LLM accuracy.

Acceptance checks:
All critical policy/identifier/value cases pass; no invented source or unsupported confidence claim; failed cases remain inspectable and block qualification.

Complete this slice end to end. Inspect relevant code, make the changes and run meaningful affected checks. Preserve unrelated edits. Update status and provide the evidence contract. If blocked, retain completed work and identify the exact unmet prerequisite.
```

<a id="prompt-i01"></a>

### 44 I01 — Complete SAP Cloud ALM demonstration adapter

**Stage:** Integrations · **Requires:** A02

**Expected change scope:** srv/adapters/*; fixtures/integrations/*; P05 and related contextual views; test/integration/*

```text
Act as the Codex implementation agent for this repository. Apply AGENTS.md and the materialized specification. Task I01.

Complete the SAP Cloud ALM mock contract and its P05 contextual preview. External project/task/test/evidence references. GROW owns proposals and approvals. Simulate correlated task creation from quality/exception work, prevent duplicate external tasks, acknowledge status and seed rejection/offline cases. Do not invent a live requirement-write API. Include operation metadata, last success/observation, capability checks, request/response preview with redaction, failure assignment, correlation, return route and source-of-truth explanation. Respect current persona/project access in every response. Keep all traffic local.

Acceptance checks:
A normal and failed exchange are demonstrable; references match downstream objects; connectivity alone is not shown as business readiness; all controls work.

Complete this slice end to end. Inspect relevant code, make the changes and run meaningful affected checks. Preserve unrelated edits. Update status and provide the evidence contract. If blocked, retain completed work and identify the exact unmet prerequisite.
```

<a id="prompt-i02"></a>

### 45 I02 — Complete SAP CBC demonstration adapter

**Stage:** Integrations · **Requires:** I01

**Expected change scope:** srv/adapters/*; fixtures/integrations/*; P05 and related contextual views; test/integration/*

```text
Act as the Codex implementation agent for this repository. Apply AGENTS.md and the materialized specification. Task I02.

Complete the SAP CBC mock contract and its P05 contextual preview. Target scope, organization and configuration observations. Show ordered activation/structure/configuration package flow, operation capability classification, activity identity, correlation and readback. An activity ID is not an API. Use attended or unsupported classification for unqualified operations. Include operation metadata, last success/observation, capability checks, request/response preview with redaction, failure assignment, correlation, return route and source-of-truth explanation. Respect current persona/project access in every response. Keep all traffic local.

Acceptance checks:
A normal and failed exchange are demonstrable; references match downstream objects; connectivity alone is not shown as business readiness; all controls work.

Complete this slice end to end. Inspect relevant code, make the changes and run meaningful affected checks. Preserve unrelated edits. Update status and provide the evidence contract. If blocked, retain completed work and identify the exact unmet prerequisite.
```

<a id="prompt-i03"></a>

### 46 I03 — Complete SAP S/4HANA Public Cloud demonstration adapter

**Stage:** Integrations · **Requires:** I02

**Expected change scope:** srv/adapters/*; fixtures/integrations/*; P05 and related contextual views; test/integration/*

```text
Act as the Codex implementation agent for this repository. Apply AGENTS.md and the materialized specification. Task I03.

Complete the SAP S/4HANA Public Cloud mock contract and its P05 contextual preview. Read-only target observations of organization and configured values. Seed matching, stale, mismatched and unavailable responses. Keep approved intent separate from simulated target authority. Do not claim this prototype writes to a real system. Include operation metadata, last success/observation, capability checks, request/response preview with redaction, failure assignment, correlation, return route and source-of-truth explanation. Respect current persona/project access in every response. Keep all traffic local.

Acceptance checks:
A normal and failed exchange are demonstrable; references match downstream objects; connectivity alone is not shown as business readiness; all controls work.

Complete this slice end to end. Inspect relevant code, make the changes and run meaningful affected checks. Preserve unrelated edits. Update status and provide the evidence contract. If blocked, retain completed work and identify the exact unmet prerequisite.
```

<a id="prompt-i04"></a>

### 47 I04 — Complete SAP Signavio demonstration adapter

**Stage:** Integrations · **Requires:** I03

**Expected change scope:** srv/adapters/*; fixtures/integrations/*; P05 and related contextual views; test/integration/*

```text
Act as the Codex implementation agent for this repository. Apply AGENTS.md and the materialized specification. Task I04.

Complete the SAP Signavio mock contract and its P05 contextual preview. Process definition, source version and licensed reference metadata. Use an explicitly illustrative local flow and links to BR/TC and scope candidates. Do not reproduce licensed process diagrams or relabel a local drawing as an official SAP flow. Include operation metadata, last success/observation, capability checks, request/response preview with redaction, failure assignment, correlation, return route and source-of-truth explanation. Respect current persona/project access in every response. Keep all traffic local.

Acceptance checks:
A normal and failed exchange are demonstrable; references match downstream objects; connectivity alone is not shown as business readiness; all controls work.

Complete this slice end to end. Inspect relevant code, make the changes and run meaningful affected checks. Preserve unrelated edits. Update status and provide the evidence contract. If blocked, retain completed work and identify the exact unmet prerequisite.
```

<a id="prompt-i05"></a>

### 48 I05 — Complete SAP LeanIX demonstration adapter

**Stage:** Integrations · **Requires:** I04

**Expected change scope:** srv/adapters/*; fixtures/integrations/*; P05 and related contextual views; test/integration/*

```text
Act as the Codex implementation agent for this repository. Apply AGENTS.md and the materialized specification. Task I05.

Complete the SAP LeanIX mock contract and its P05 contextual preview. Application, capability, lifecycle, owner and process-support metadata. Link simulated fact-sheet records to Signavio process context. Preserve source ownership and surface mapping conflicts; do not pretend to activate the SAP-native LeanIX–Signavio connector. Include operation metadata, last success/observation, capability checks, request/response preview with redaction, failure assignment, correlation, return route and source-of-truth explanation. Respect current persona/project access in every response. Keep all traffic local.

Acceptance checks:
A normal and failed exchange are demonstrable; references match downstream objects; connectivity alone is not shown as business readiness; all controls work.

Complete this slice end to end. Inspect relevant code, make the changes and run meaningful affected checks. Preserve unrelated edits. Update status and provide the evidence contract. If blocked, retain completed work and identify the exact unmet prerequisite.
```

<a id="prompt-i06"></a>

### 49 I06 — Connect cross system business lineage

**Stage:** Integrations · **Requires:** I05

**Expected change scope:** srv/lineage/*; fixtures/lineage*; P05 P08 P23 P27; test/integration/lineage*

```text
Act as the Codex implementation agent for this repository. Apply AGENTS.md and the materialized specification. Task I06.

Wire one consistent trace: Signavio process → LeanIX supporting application → proposed BR requirement → reviewed scope → approved organization → CBC prerequisite package → S/4 observed structure → configuration proposal → Cloud ALM work reference → approved deployment → observation → evidence/handover. Use distinct ID namespaces, one project context and stable correlation. Exercise offline, stale and mapping-conflict branches without inventing automatic bidirectional synchronization. Keep links functional from both object detail and final evidence explorer.

Acceptance checks:
A user traverses the chain forward and backward with consistent IDs; denied objects are redacted; failed integration leaves an owned unresolved work item.

Complete this slice end to end. Inspect relevant code, make the changes and run meaningful affected checks. Preserve unrelated edits. Update status and provide the evidence contract. If blocked, retain completed work and identify the exact unmet prerequisite.
```

<a id="prompt-u01"></a>

### 50 U01 — Complete responsive Fiori adaptation

**Stage:** Experience · **Requires:** I06

**Expected change scope:** UI5 views/fragments/styles; test/ui/responsive*; docs/qa/responsive.md

```text
Act as the Codex implementation agent for this repository. Apply AGENTS.md and the materialized specification. Task U01.

Test and refine every screen at 360, 768, 1024 and 1440 CSS pixels. Use responsive tables/pop-ins, overflow toolbars, one-column phone detail, full-screen assistant and touch-safe dialogs. Keep identity/project/simulation context available. Ensure organization editing has a full form-based alternative; no nested horizontal page scrolling, inaccessible canvas-only graph or offscreen primary action. Preserve selected object and focus when layout changes.

Acceptance checks:
Capture each screen at target widths; inspect for clipping and overflow; run core tasks on phone/tablet/desktop; record defects by action ID.

Complete this slice end to end. Inspect relevant code, make the changes and run meaningful affected checks. Preserve unrelated edits. Update status and provide the evidence contract. If blocked, retain completed work and identify the exact unmet prerequisite.
```

<a id="prompt-u02"></a>

### 51 U02 — Validate accessibility and keyboard operation

**Stage:** Experience · **Requires:** U01

**Expected change scope:** UI5 accessibility fixes; test/ui/accessibility*; docs/qa/accessibility.md

```text
Act as the Codex implementation agent for this repository. Apply AGENTS.md and the materialized specification. Task U02.

Provide accessible names, form labels, message-to-field links, focus management, visible focus, semantic statuses and non-color-only errors. Validate dialog focus containment/return, keyboard tree navigation, tab order, assistant history navigation and downloadable report access. Check contrast using theme-supported values. Perform automated accessibility scans plus manual keyboard review of the important journeys. Record actual results and untested assistive-technology combinations.

Acceptance checks:
Keyboard-only J01–J03 is achievable; no critical automated findings; manual focus checks pass; unsupported screen-reader claims are not fabricated.

Complete this slice end to end. Inspect relevant code, make the changes and run meaningful affected checks. Preserve unrelated edits. Update status and provide the evidence contract. If blocked, retain completed work and identify the exact unmet prerequisite.
```

<a id="prompt-u03"></a>

### 52 U03 — Polish the boardroom presentation experience

**Stage:** Experience · **Requires:** U02

**Expected change scope:** UI5 styling/i18n/shared components; docs/qa/design-review.md

```text
Act as the Codex implementation agent for this repository. Apply AGENTS.md and the materialized specification. Task U03.

Compare the running screens with the plan’s visual compositions when supplied. Improve spacing, typography, semantic hierarchy, information density, status language and primary-action placement using Fiori tokens and native controls. Ensure meaningful rich controls, consistent terminology and concise agent explanations. Remove fake metrics, decorative charts, dead links and exposed implementation details from business tasks. Keep Demo controls separate. Do not convert the application into an all-black slide deck or use unapproved EY assets. Capture before/after views and inspect actual running output.

Acceptance checks:
Design checklist covers the five Fiori principles and all core views; no clipping; no literal placeholder strings; rich controls produce useful outcomes.

Complete this slice end to end. Inspect relevant code, make the changes and run meaningful affected checks. Preserve unrelated edits. Update status and provide the evidence contract. If blocked, retain completed work and identify the exact unmet prerequisite.
```

<a id="prompt-j01"></a>

### 53 J01 — Prove Discovery to approved scope

**Stage:** Qualification · **Requires:** U03

**Expected change scope:** test/e2e/*; fixtures/scenarios/*; docs/qa/journeys.md

```text
Act as the Codex implementation agent for this repository. Apply AGENTS.md and the materialized specification. Task J01.

Implement a deterministic automated end-to-end journey with explicit seed, actors, IDs, expected transitions and cleanup. Start as Delivery Lead, inspect P01/P03/P27, prepare project, use BPD fixture, refine requirements, run Scoping, inspect sources and prerequisite, submit scope, switch to eligible Scope Approver and approve. Inspect baseline and gate. Include invalid ID and missing-country alternatives. Assert data and evidence outcomes, not only visible text. Verify browser refresh preserves state at an approval wait. Keep test fixture grants independent from production policies and do not disable validation to make the script pass.

Acceptance checks:
Journey passes from clean seed, can be repeated without drift, and its exception branches fail safely; evidence links BR/TC, feature, action and package.

Complete this slice end to end. Inspect relevant code, make the changes and run meaningful affected checks. Preserve unrelated edits. Update status and provide the evidence contract. If blocked, retain completed work and identify the exact unmet prerequisite.
```

<a id="prompt-j02"></a>

### 54 J02 — Prove Organization verification and configuration approval

**Stage:** Qualification · **Requires:** J01

**Expected change scope:** test/e2e/*; fixtures/scenarios/*; docs/qa/journeys.md

```text
Act as the Codex implementation agent for this repository. Apply AGENTS.md and the materialized specification. Task J02.

Implement a deterministic automated end-to-end journey with explicit seed, actors, IDs, expected transitions and cleanup. Use approved scope, generate/edit organization, fix duplicate code, submit and approve as different actor, build/release/execute prerequisite package, reconcile observed structure, then generate configuration values. Finance Approver returns v1, Consultant revises v2, eligible approver approves. Introduce material drift to invalidate approval, then reapprove changed version. Assert data and evidence outcomes, not only visible text. Verify browser refresh preserves state at an approval wait. Keep test fixture grants independent from production policies and do not disable validation to make the script pass.

Acceptance checks:
Journey passes from clean seed, can be repeated without drift, and its exception branches fail safely; evidence links BR/TC, feature, action and package.

Complete this slice end to end. Inspect relevant code, make the changes and run meaningful affected checks. Preserve unrelated edits. Update status and provide the evidence contract. If blocked, retain completed work and identify the exact unmet prerequisite.
```

<a id="prompt-j03"></a>

### 55 J03 — Prove Controlled deployment and recovery

**Stage:** Qualification · **Requires:** J02

**Expected change scope:** test/e2e/*; fixtures/scenarios/*; docs/qa/journeys.md

```text
Act as the Codex implementation agent for this repository. Apply AGENTS.md and the materialized specification. Task J03.

Implement a deterministic automated end-to-end journey with explicit seed, actors, IDs, expected transitions and cleanup. Use a qualified approved configuration package; dry run, request release authorization and approve as Release Manager. Execute as Deployment Operator, inject timeout-after-possible-write, pause remaining actions, reconcile target and prevent blind retry. Include mismatch, proven-not-committed safe retry and attended task with required readback. Close only verified required actions. Assert data and evidence outcomes, not only visible text. Verify browser refresh preserves state at an approval wait. Keep test fixture grants independent from production policies and do not disable validation to make the script pass.

Acceptance checks:
Journey passes from clean seed, can be repeated without drift, and its exception branches fail safely; evidence links BR/TC, feature, action and package.

Complete this slice end to end. Inspect relevant code, make the changes and run meaningful affected checks. Preserve unrelated edits. Update status and provide the evidence contract. If blocked, retain completed work and identify the exact unmet prerequisite.
```

<a id="prompt-j04"></a>

### 56 J04 — Prove Role scope and security boundaries

**Stage:** Qualification · **Requires:** J03

**Expected change scope:** test/e2e/*; fixtures/scenarios/*; docs/qa/journeys.md

```text
Act as the Codex implementation agent for this repository. Apply AGENTS.md and the materialized specification. Task J04.

Implement a deterministic automated end-to-end journey with explicit seed, actors, IDs, expected transitions and cleanup. Test sponsor write denial, consultant self-approval denial, auditor export without grant, cross-project and cross-company object/deep reads/writes, stale/expired/revoked approvals, forged callback, duplicate command, revoked user and direct route access. Verify UI menus and backend both enforce boundaries. Assert data and evidence outcomes, not only visible text. Verify browser refresh preserves state at an approval wait. Keep test fixture grants independent from production policies and do not disable validation to make the script pass.

Acceptance checks:
Journey passes from clean seed, can be repeated without drift, and its exception branches fail safely; evidence links BR/TC, feature, action and package.

Complete this slice end to end. Inspect relevant code, make the changes and run meaningful affected checks. Preserve unrelated edits. Update status and provide the evidence contract. If blocked, retain completed work and identify the exact unmet prerequisite.
```

<a id="prompt-j05"></a>

### 57 J05 — Prove Integration grounding audit and handover

**Stage:** Qualification · **Requires:** J04

**Expected change scope:** test/e2e/*; fixtures/scenarios/*; docs/qa/journeys.md

```text
Act as the Codex implementation agent for this repository. Apply AGENTS.md and the materialized specification. Task J05.

Implement a deterministic automated end-to-end journey with explicit seed, actors, IDs, expected transitions and cleanup. Traverse all five system references, create correlated ALM task, simulate offline and stale observations, inspect source-linked assistant response and blocked prompt injection, run pilot qualification, export evidence and benefits with real content, accept handover and inspect Run summary. Include unknown assistant intent and denied citation. Assert data and evidence outcomes, not only visible text. Verify browser refresh preserves state at an approval wait. Keep test fixture grants independent from production policies and do not disable validation to make the script pass.

Acceptance checks:
Journey passes from clean seed, can be repeated without drift, and its exception branches fail safely; evidence links BR/TC, feature, action and package.

Complete this slice end to end. Inspect relevant code, make the changes and run meaningful affected checks. Preserve unrelated edits. Update status and provide the evidence contract. If blocked, retain completed work and identify the exact unmet prerequisite.
```

<a id="prompt-q01"></a>

### 58 Q01 — Audit every actionable affordance

**Stage:** Qualification · **Requires:** J05

**Expected change scope:** test/coverage/*; docs/qa/action-coverage.json; docs/qa/action-coverage.md

```text
Act as the Codex implementation agent for this repository. Apply AGENTS.md and the materialized specification. Task Q01.

Discover actual rendered controls across every route, persona and meaningful scenario state. Compare buttons, links, menu items, selectable rows, tabs, value-help triggers, chart targets and input submissions with the action registry. Cover all 130 screen actions and all 24 common families, but use every actionable instance as the true denominator. Fail on missing handlers, no-op events, fake downloads, unconditional toasts, empty views and terminal dead ends. Verify every blocked action opens a specific permitted resolution; do not mark unauthorized controls executable.

Acceptance checks:
100% discovered actionable instances registered and tested; 130/130 screen actions covered; 24/24 families covered; zero unexplained no-ops.

Complete this slice end to end. Inspect relevant code, make the changes and run meaningful affected checks. Preserve unrelated edits. Update status and provide the evidence contract. If blocked, retain completed work and identify the exact unmet prerequisite.
```

<a id="prompt-q02"></a>

### 59 Q02 — Reconcile all 138 MVP features without overclaiming

**Stage:** Qualification · **Requires:** Q01

**Expected change scope:** docs/qa/r1-coverage.json; docs/qa/r1-coverage.md; affected UI/tests

```text
Act as the Codex implementation agent for this repository. Apply AGENTS.md and the materialized specification. Task Q02.

Reconcile docs/spec/r1-features.json against implemented views, policy outcomes, evidence screens and tests. Include technical foundations such as queue intent, isolation, versioning and recovery. Classify each feature as Prototype interaction, Simulated evidence, Production-only not implemented, or Gap. A representation can satisfy the mock-up scope while production implementation remains pending; show this distinction. Link actual action/test/evidence IDs. Do not mark production HANA, live SAP integration, real authentication or real AI inference complete from mock screens. Repair missing prototype representations.

Acceptance checks:
138 distinct IDs reconciled; every prototype gap resolved or clearly release-blocking; production readiness is never inferred from seeded evidence.

Complete this slice end to end. Inspect relevant code, make the changes and run meaningful affected checks. Preserve unrelated edits. Update status and provide the evidence contract. If blocked, retain completed work and identify the exact unmet prerequisite.
```

<a id="prompt-q03"></a>

### 60 Q03 — Prove persistence and execution invariants

**Stage:** Qualification · **Requires:** Q02

**Expected change scope:** test/reliability/*; srv/repositories/*; srv/execution/*; docs/qa/recovery.md

```text
Act as the Codex implementation agent for this repository. Apply AGENTS.md and the materialized specification. Task Q03.

Exercise duplicate clicks/commands, version races, stale target snapshots, worker restart before and after dispatch, pending approval recovery, partial failure, target locking and two isolated workspaces. Preserve completed evidence and conversation scope. Verify unknown results cannot be retried until observed. Test reset confirmation and export consistency after refresh. Use fault hooks isolated to demo/test mode; do not introduce silent retries that weaken business rules.

Acceptance checks:
No lost approved intent, duplicate logical change, cross-project leak or fabricated verified state; restart/reset contract matches documentation.

Complete this slice end to end. Inspect relevant code, make the changes and run meaningful affected checks. Preserve unrelated edits. Update status and provide the evidence contract. If blocked, retain completed work and identify the exact unmet prerequisite.
```

<a id="prompt-q06"></a>

### 61 Q06 — Validate browser startup connectivity and recovery

**Stage:** Qualification · **Requires:** Q03

**Expected change scope:** test/browser/*; docs/run-guide.md; docs/qa/browser-matrix.md

```text
Act as the Codex implementation agent for this repository. Apply AGENTS.md and the materialized specification. Task Q06.

Run the supported browser matrix for the actual deployment environment and record versions. Verify deep links, refresh, browser back, CAP service restart, network disconnection, invalid destination fixture, expired demo session, large upload rejection, double submit and local storage/workspace recovery. Inspect desktop and mobile layouts after reconnection. Confirm startup scripts do not depend on a hidden absolute path, credentials or internet-only fixture fetch. Provide an offline/limited-network run path if the chosen UI5 asset strategy permits it; otherwise state the asset/network dependency clearly.

Acceptance checks:
Actual supported browser results and limitations recorded; no lost submitted approval or blank recovery route; clean startup is reproducible.

Complete this slice end to end. Inspect relevant code, make the changes and run meaningful affected checks. Preserve unrelated edits. Update status and provide the evidence contract. If blocked, retain completed work and identify the exact unmet prerequisite.
```

<a id="prompt-q04"></a>

### 62 Q04 — Prepare presenter narrative and benefit calculations

**Stage:** Qualification · **Requires:** Q06

**Expected change scope:** docs/demo-script.md; docs/executive-demo.md; P01 P25; test/metrics/*

```text
Act as the Codex implementation agent for this repository. Apply AGENTS.md and the materialized specification. Task Q04.

Create an 18-minute walkthrough and a five-minute executive version with exact personas, routes, seeded checkpoints, expected dialogue, benefits, exception cues and reset instructions. Show business requirement to verified result and handover. Explain observed event metrics separately from illustrative hours/cost assumptions. Compute traceability and verified-action percentages from actual fixture records. Make scenario assumptions editable and handle zero/unknown denominators transparently. Rehearse twice from clean seed and record actual findings.

Acceptance checks:
Both scripts complete within their target pacing; demonstrated metrics reconcile; no invented realized savings or live SAP claim.

Complete this slice end to end. Inspect relevant code, make the changes and run meaningful affected checks. Preserve unrelated edits. Update status and provide the evidence contract. If blocked, retain completed work and identify the exact unmet prerequisite.
```

<a id="prompt-q07"></a>

### 63 Q07 — Conduct independent product and Fiori acceptance review

**Stage:** Qualification · **Requires:** Q04

**Expected change scope:** docs/qa/guardrail-acceptance.md; docs/qa/usability.md; affected fixes

```text
Act as the Codex implementation agent for this repository. Apply AGENTS.md and the materialized specification. Task Q07.

Review the working application as Sponsor, Consultant, Approver, Operator and Auditor. Evaluate the five Fiori principles, all eleven user guardrails, correct seven-phase view, visible agent accountability, assistant boundaries, integration story and business benefits. Run representative tasks without relying on developer explanations. Record observed pass/fail by guardrail and linked action IDs; collect the proposed four-of-five usability acceptance evidence when reviewers are available. Mark unavailable human review Not run. Return defects to the implementation queue and resolve critical findings before the release candidate.

Acceptance checks:
Guardrail matrix has evidence, not opinions alone; critical findings fixed; named human review status is explicit and never fabricated.

Complete this slice end to end. Inspect relevant code, make the changes and run meaningful affected checks. Preserve unrelated edits. Update status and provide the evidence contract. If blocked, retain completed work and identify the exact unmet prerequisite.
```

<a id="prompt-q05"></a>

### 64 Q05 — Release candidate and team handover

**Stage:** Qualification · **Requires:** Q07

**Expected change scope:** README.md; docs/handover/*; docs/qa/*; release notes

```text
Act as the Codex implementation agent for this repository. Apply AGENTS.md and the materialized specification. Task Q05.

Run the documented clean install, build, meaningful unit/contract/policy tests, all five E2E journeys, action coverage, feature representation and responsive/accessibility checks. Resolve critical failures. Create repository README, local/hosted run guide, reset/fixture instructions, supported stack versions, known limitations, ownership and future production integration decisions. Prepare a local release candidate and a reviewable handover summary. Do not push, merge or publish externally without authorization. Clearly separate tests passed, failed and not run.

Acceptance checks:
GUX1–GUX6 evidence exists; no critical navigation, safety or interaction defect; tagged/reviewable candidate and complete handover artifacts are ready.

Complete this slice end to end. Inspect relevant code, make the changes and run meaningful affected checks. Preserve unrelated edits. Update status and provide the evidence contract. If blocked, retain completed work and identify the exact unmet prerequisite.
```

<a id="prompt-r01"></a>

### 65 R01 — Resume safely in a new coding session

**Stage:** Recovery · **Requires:** Any completed checkpoint

**Expected change scope:** docs/status.md; next incomplete slice

```text
Act as the Codex implementation agent for this repository. Apply AGENTS.md and the materialized specification. Task R01.

Inspect applicable instructions, docs/status.md, decisions, action/feature coverage and current git diff. Identify the last genuinely completed prompt and its evidence. Distinguish uncommitted user work from unfinished prototype work. Re-run only checks needed to assess current readiness. Continue the next unmet dependency in the run order; do not regenerate the repository or discard working screens. Report the resumed prompt ID and exact remaining blockers, then implement the next authorized slice.

Acceptance checks:
Resumed state agrees with artifacts and actual code; no unrelated changes lost; progress registry remains truthful.

Complete this slice end to end. Inspect relevant code, make the changes and run meaningful affected checks. Preserve unrelated edits. Update status and provide the evidence contract. If blocked, retain completed work and identify the exact unmet prerequisite.
```

<a id="prompt-r02"></a>

### 66 R02 — Repair a failed action or regression

**Stage:** Recovery · **Requires:** Observed failure

**Expected change scope:** Minimal affected implementation and regression test

```text
Act as the Codex implementation agent for this repository. Apply AGENTS.md and the materialized specification. Task R02.

Use the failing action/test evidence, reproduce the issue with its persona, project, seed and artifact revision, then trace UI handler → policy → workflow/service → repository/adapter → returned state. Fix the root cause without bypassing approval, role or prerequisite checks. Add a meaningful regression assertion for the failure. Run affected checks and inspect the repaired user journey. Update status and coverage only after the observed outcome matches the contract.

Acceptance checks:
Failure reproduced and corrected; adjacent workflows remain valid; no policy weakening or fabricated test pass.

Complete this slice end to end. Inspect relevant code, make the changes and run meaningful affected checks. Preserve unrelated edits. Update status and provide the evidence contract. If blocked, retain completed work and identify the exact unmet prerequisite.
```

<a id="prompt-r03"></a>

### 67 R03 — Review implementation against the source specification

**Stage:** Recovery · **Requires:** A reviewable increment

**Expected change scope:** Review output only

```text
Act as the Codex implementation agent for this repository. Apply AGENTS.md and the materialized specification. Task R03.

Perform a read-only review of the current increment against docs/spec, current source plan and repository instructions. Check missing controls, incorrect role enforcement, unsafe state transitions, fabricated source/metric claims, unverified SAP interfaces, Fiori deviations and inconsistent fixture IDs. Return findings by severity with file locations, affected action/feature IDs, reproduction and suggested fix. Do not change files in this review task. Do not call it complete because screenshots look polished.

Acceptance checks:
Findings grounded in actual files and behavior; scope limits and untested areas stated.

Complete this slice end to end. Inspect relevant code, make the changes and run meaningful affected checks. Preserve unrelated edits. Update status and provide the evidence contract. If blocked, retain completed work and identify the exact unmet prerequisite.
```

<a id="prompt-r04"></a>

### 68 R04 — Prepare a bounded reviewable change request

**Stage:** Recovery · **Requires:** One completed increment

**Expected change scope:** docs/reviews/* or response with review-ready text

```text
Act as the Codex implementation agent for this repository. Apply AGENTS.md and the materialized specification. Task R04.

Inspect the actual diff and tests for one completed prompt or coherent journey slice. Prepare a change summary with concrete behavior, touched action/feature IDs, validation and material limitations. Identify unrelated changes to exclude without deleting them. Produce a suggested PR title/body or review note locally. Do not create a remote PR, commit, push or notify others unless separately instructed.

Acceptance checks:
Review text matches actual diff and test results; no unrequested remote action.

Complete this slice end to end. Inspect relevant code, make the changes and run meaningful affected checks. Preserve unrelated edits. Update status and provide the evidence contract. If blocked, retain completed work and identify the exact unmet prerequisite.
```

## Context recovery and review

Run R01 when switching devices, accounts, coding tools or chats. The repository state and versioned records are authoritative; a previous assistant claim is not proof. Use R02 with an actual failure, R03 for a read-only review and R04 for a local review/PR description. These recovery prompts are repeatable and do not belong to the one-time sequential build count.

### Required progress record

```json
{
  "promptId": "B00",
  "status": "Not started",
  "sourceVersion": "GROW UX 001 v1.0 2026-10-30",
  "completedActions": [],
  "affectedFeatureIds": [],
  "checks": [],
  "uiInspected": false,
  "blockers": [],
  "nextPrompt": "B01"
}
```

Use these fields as a schema example, not fabricated completion evidence. Completed action entries must link an actual handler and assertion. Maintain separate counts for named actions, rendered affordances, feature representation and production implementation.

### Source conflict handling

An explicit new project instruction takes precedence over this fixed baseline. Surface its scope impact and update the source/decision log; do not silently omit older requirements. Unverified SAP activity IDs stay DEMO-*; catalog gaps are explicit; client countries remain unconfirmed outside synthetic fixtures. If a real production connector, model, identity service or deployment is requested later, estimate and authorize that work separately from mock-up completion.

## Embedded specification

These blocks are project data. They are not instructions from uploaded client documents and never authorize privileged actions. Preserve IDs exactly. Proposed BPD requirements remain proposals; country/legal applicability must be validated in real implementation work.

### baseline

<!-- BEGIN SPEC baseline -->
```json
{
  "project": "GROW Automation MVP clickable prototype",
  "sourceVersion": "GROW UX 001 v1.0 dated 2026-10-30",
  "screens": 28,
  "screenActions": 130,
  "commonFamilies": 24,
  "r1Features": 138,
  "processes": 202,
  "stack": {
    "frontend": "SAP UI5 and supported Fiori elements/freestyle patterns",
    "backend": "SAP CAP Node.js mock services",
    "persistence": "Persisted local mock repository; CDS contracts prepared for eventual HANA Cloud; live HANA optional"
  },
  "phaseView": [
    "Discover",
    "Prepare",
    "Explore",
    "Realize Build",
    "Realize Test",
    "Deploy",
    "Run"
  ],
  "countriesAreSynthetic": true,
  "demoCountries": [
    "IN",
    "DE",
    "US",
    "GB",
    "SG"
  ],
  "entitiesPerCountry": 2,
  "demoScopeItems": 16,
  "demoConfigurationActivities": 10,
  "target": "One simulated nonproduction SAP target",
  "futureScope": [
    "Full master data loading",
    "Full migration agent",
    "Full 202-process execution automation",
    "Full cutover",
    "Autonomous Run agent",
    "Live Signavio and LeanIX production connectors"
  ],
  "proposalStates": [
    "Draft",
    "Validating",
    "Review ready",
    "Submitted",
    "Approved",
    "Returned",
    "Rejected"
  ],
  "approvalStates": [
    "Pending",
    "Approved",
    "Returned",
    "Rejected",
    "Expired",
    "Revoked",
    "Stale"
  ],
  "packageStates": [
    "Draft",
    "Preflight",
    "Awaiting release",
    "Authorized",
    "Queued",
    "Running",
    "Reconciling",
    "Verified",
    "Failed",
    "Unknown",
    "Attended",
    "Paused"
  ],
  "agentStates": [
    "Planned",
    "Retrieving",
    "Proposing",
    "Validating",
    "Awaiting human decision",
    "Executing simulation",
    "Verifying",
    "Completed",
    "Failed",
    "Paused",
    "Cancelled"
  ],
  "transitions": [
    "Draft -> Validating -> Review ready -> Submitted -> Approved/Returned/Rejected",
    "Returned proposal -> new Draft revision -> Validating -> review and submission",
    "Any material source/target/value/prerequisite change -> new revision; affected approval Stale",
    "Pending approval -> Approved/Returned/Rejected/Expired/Revoked with eligibility checks",
    "Draft package -> Preflight -> Awaiting release -> Authorized -> Queued -> Running -> Reconciling -> Verified",
    "Running uncertain action -> Unknown -> Observing -> Verified/Proven not committed/Needs operator",
    "Proven not committed -> explicit safe retry through current policy checks",
    "Attended reported completion -> readback reconciliation -> Verified only if observations match",
    "Pause -> no new dispatch; resolve in-flight action before determining final state"
  ],
  "guardrail": "No transition bypasses current role, approval, target, version or prerequisite policy",
  "successCriteria": {
    "actionCoverage": "All rendered actionable instances plus 130 named actions and 24 families",
    "roles": "UI and backend negative cases",
    "responsiveWidths": [
      360,
      768,
      1024,
      1440
    ],
    "usability": "At least four of five representative reviewers complete core assigned tasks without critical rescue"
  },
  "prototypeSchedule": {
    "start": "2026-11-02",
    "end": "2026-12-11",
    "teamFte": 4.5,
    "effortPersonDays": 87.5,
    "capacityPersonDays": 108,
    "focusFactor": 0.8,
    "note": "Proposed six-week prototype schedule; not the full March application delivery commitment"
  },
  "gates": {
    "GUX1": "Design baseline",
    "GUX2": "Navigation skeleton",
    "GUX3": "Grounded scope journey",
    "GUX4": "Organization and configuration approval",
    "GUX5": "Full end-to-end simulation",
    "GUX6": "Tested handover"
  },
  "methodologyNote": "Seven-phase project view splits SAP Activate Realize. EY-specific branded method artifacts require method-owner confirmation.",
  "metricRules": {
    "traceability": "Requirements with reviewed artifact links / requirements in selected pilot set",
    "verifiedCompletion": "Required package actions with matching readback / required package actions",
    "illustrativeBenefit": "Baseline manual hours - assisted hours - review hours - recovery hours",
    "unknownDenominator": "Show Unavailable or Not measured, never an invented zero or success percentage"
  }
}
```
<!-- END SPEC baseline -->

### screens

<!-- BEGIN SPEC screens -->
```json
[
  {
    "id": "P00",
    "title": "Demo entry and role context",
    "route": "/demo",
    "roles": "All personas",
    "pattern": "Guided entry",
    "purpose": "A labeled demonstration entry establishes persona, project and scenario without pretending to authenticate to SAP.",
    "actions": [
      {
        "id": "P00-A01",
        "label": "Choose persona",
        "input": "Select a seeded user",
        "outcome": "Load that user’s permitted navigation and project scope"
      },
      {
        "id": "P00-A02",
        "label": "Choose scenario",
        "input": "Select happy path or an exception",
        "outcome": "Load a separate fixture version and explain starting state"
      },
      {
        "id": "P00-A03",
        "label": "Start guided tour",
        "input": "Confirm demo context",
        "outcome": "Open P01 and show the first story prompt"
      },
      {
        "id": "P00-A04",
        "label": "Reset scenario",
        "input": "Confirm destructive demo reset",
        "outcome": "Clear only the selected demo workspace and restore its seed"
      }
    ]
  },
  {
    "id": "P01",
    "title": "Executive value cockpit",
    "route": "/home",
    "roles": "Sponsor and Delivery Lead",
    "pattern": "Overview with actionable cards",
    "purpose": "Show the transformation story, unresolved decisions and verified progress before exposing operational detail.",
    "actions": [
      {
        "id": "P01-A01",
        "label": "Readiness KPI",
        "input": "Select phase or country",
        "outcome": "Open P02 with the same filter; reveal numerator and denominator"
      },
      {
        "id": "P01-A02",
        "label": "Value indicator",
        "input": "Choose a benefit",
        "outcome": "Open P25 and show its assumptions and evidence"
      },
      {
        "id": "P01-A03",
        "label": "Approval count",
        "input": "Select pending work",
        "outcome": "Open P16 filtered to visible approvals"
      },
      {
        "id": "P01-A04",
        "label": "Continue journey",
        "input": "Use current phase and role",
        "outcome": "Route to the next eligible task; show blockers when none is ready"
      }
    ]
  },
  {
    "id": "P02",
    "title": "Project and seven phase workspace",
    "route": "/projects/:id",
    "roles": "Delivery Lead and permitted project members",
    "pattern": "Object Page with phase navigation",
    "purpose": "Keep all seven phases reachable while distinguishing completed work, current work and simulated later-stage evidence.",
    "actions": [
      {
        "id": "P02-A01",
        "label": "Select phase",
        "input": "Click any phase",
        "outcome": "Open its worklist or gate overview without granting execution authority"
      },
      {
        "id": "P02-A02",
        "label": "Gate details",
        "input": "Select a gate",
        "outcome": "Show required evidence, missing items, owner and linked tasks"
      },
      {
        "id": "P02-A03",
        "label": "Change project",
        "input": "Select authorized project",
        "outcome": "Reload context and clear selections belonging to the prior project"
      },
      {
        "id": "P02-A04",
        "label": "Phase completion",
        "input": "Request readiness review",
        "outcome": "Open approval preparation or list blockers; never bypass dependencies"
      }
    ]
  },
  {
    "id": "P03",
    "title": "Discover and transformation context",
    "route": "/projects/:id/discover",
    "roles": "Sponsor Business Owner and Enterprise Architect",
    "pattern": "Object Page",
    "purpose": "Connect industry goals and business processes to proposed scope and applications.",
    "actions": [
      {
        "id": "P03-A01",
        "label": "Business outcome",
        "input": "Select an outcome",
        "outcome": "Open measurable benefit and linked process set"
      },
      {
        "id": "P03-A02",
        "label": "Process landscape",
        "input": "Select manufacturing domain",
        "outcome": "Open P08 filtered to that domain"
      },
      {
        "id": "P03-A03",
        "label": "Architecture context",
        "input": "Select application relation",
        "outcome": "Open P27 with LeanIX references and lifecycle context"
      },
      {
        "id": "P03-A04",
        "label": "Confirm discovery brief",
        "input": "Edit assumptions and save",
        "outcome": "Version the brief and show required decision owners"
      }
    ]
  },
  {
    "id": "P04",
    "title": "Prepare and project setup",
    "route": "/projects/:id/prepare",
    "roles": "Delivery Lead and Administrator",
    "pattern": "Wizard and Object Page",
    "purpose": "Establish ownership, legal entity inputs, countries, source baseline and target before proposing executable work.",
    "actions": [
      {
        "id": "P04-A01",
        "label": "Edit project",
        "input": "Change permitted field",
        "outcome": "Validate mandatory values and save a draft version"
      },
      {
        "id": "P04-A02",
        "label": "Legal entities",
        "input": "Add or edit seeded entity",
        "outcome": "Open P12 with uniqueness and country validation"
      },
      {
        "id": "P04-A03",
        "label": "Assign owners",
        "input": "Choose eligible persona",
        "outcome": "Update responsibility and notify the assignee"
      },
      {
        "id": "P04-A04",
        "label": "Readiness check",
        "input": "Request validation",
        "outcome": "Show missing setup and route to P05 or P06 for resolution"
      }
    ]
  },
  {
    "id": "P05",
    "title": "Integration control center",
    "route": "/projects/:id/integrations",
    "roles": "Administrator and Integration Operator",
    "pattern": "List Report and Object Page",
    "purpose": "Make the five SAP integration touchpoints tangible with correlation, capability and last-observed status.",
    "actions": [
      {
        "id": "P05-A01",
        "label": "Test connection",
        "input": "Select a named system fixture",
        "outcome": "Show separate connectivity, authentication and permitted-operation results"
      },
      {
        "id": "P05-A02",
        "label": "View contract",
        "input": "Select an operation",
        "outcome": "Show API/upload/UI/attended classification and approved payload preview"
      },
      {
        "id": "P05-A03",
        "label": "Refresh snapshot",
        "input": "Request read-only refresh",
        "outcome": "Advance observed timestamp or show seeded stale/offline failure"
      },
      {
        "id": "P05-A04",
        "label": "Inspect failed exchange",
        "input": "Select a correlation ID",
        "outcome": "Open P21 with sanitized request, response and accountable recovery"
      },
      {
        "id": "P05-A05",
        "label": "Open SAP reference",
        "input": "Choose linked record",
        "outcome": "Open an in-app simulated target preview with external system identity and return route"
      }
    ]
  },
  {
    "id": "P06",
    "title": "TO BE document intake",
    "route": "/projects/:id/documents",
    "roles": "Business Analyst and Functional Consultant",
    "pattern": "Upload collection and Wizard",
    "purpose": "Turn the existing BPD into versioned atomic requirements with visible extraction and source safety results.",
    "actions": [
      {
        "id": "P06-A01",
        "label": "Upload document",
        "input": "Choose a safe local DOCX or provided fixture",
        "outcome": "Validate type and size; display extraction progress and resulting revision"
      },
      {
        "id": "P06-A02",
        "label": "Use BPD fixture",
        "input": "Select existing demonstration baseline",
        "outcome": "Create the same downstream records as upload; preserve BR and TC IDs"
      },
      {
        "id": "P06-A03",
        "label": "Inspect source",
        "input": "Select a paragraph reference",
        "outcome": "Open document preview at the cited passage"
      },
      {
        "id": "P06-A04",
        "label": "Resolve upload issue",
        "input": "Select duplicate or failed document",
        "outcome": "Offer new revision, remove draft or retry safe extraction"
      },
      {
        "id": "P06-A05",
        "label": "Review requirements",
        "input": "Extraction completes",
        "outcome": "Open P07 with unresolved and low-evidence items first"
      }
    ]
  },
  {
    "id": "P07",
    "title": "Requirement and fit workbench",
    "route": "/projects/:id/requirements",
    "roles": "Business Analyst and Functional Consultant",
    "pattern": "List Report with Flexible Column Layout",
    "purpose": "Keep the business requirement, proposed process fit, source and acceptance criterion together.",
    "actions": [
      {
        "id": "P07-A01",
        "label": "Filter or search",
        "input": "Enter text or choose domain/country",
        "outcome": "Update rows and counts; provide reset and meaningful no-results state"
      },
      {
        "id": "P07-A02",
        "label": "Edit requirement",
        "input": "Change atomic text or classification",
        "outcome": "Create a new version and mark dependent proposals stale"
      },
      {
        "id": "P07-A03",
        "label": "Inspect trace",
        "input": "Select BR ID",
        "outcome": "Show source, scope, organization, configuration, TC and evidence links"
      },
      {
        "id": "P07-A04",
        "label": "Request scope proposal",
        "input": "Select eligible requirements",
        "outcome": "Create an agent run in P15 and route completed output to P09"
      },
      {
        "id": "P07-A05",
        "label": "Resolve assumption",
        "input": "Enter approved evidence",
        "outcome": "Validate source and update the unresolved decision register"
      }
    ]
  },
  {
    "id": "P08",
    "title": "Process and architecture explorer",
    "route": "/projects/:id/processes",
    "roles": "Functional Consultant and Enterprise Architect",
    "pattern": "Tree and detail view",
    "purpose": "Browse the 202-process catalog and make Signavio process context discoverable without presenting it as automated business-process coverage.",
    "actions": [
      {
        "id": "P08-A01",
        "label": "Select domain or process",
        "input": "Choose catalog node",
        "outcome": "Open process detail with BR/TC and scope candidates"
      },
      {
        "id": "P08-A02",
        "label": "View process flow",
        "input": "Select Signavio reference",
        "outcome": "Show a labeled illustrative flow and provenance; real licensed link is a separate action"
      },
      {
        "id": "P08-A03",
        "label": "Inspect application relation",
        "input": "Choose supporting system",
        "outcome": "Open P27 with the same process context"
      },
      {
        "id": "P08-A04",
        "label": "Add to review",
        "input": "Select process",
        "outcome": "Add requirements to the scope review basket and show updated count"
      }
    ]
  },
  {
    "id": "P09",
    "title": "Scoping agent review",
    "route": "/projects/:id/scope",
    "roles": "Functional Consultant and Scope Approver",
    "pattern": "List Report",
    "purpose": "Review grounded scope candidates, exclusions, prerequisites and applicability before baselining.",
    "actions": [
      {
        "id": "P09-A01",
        "label": "Generate proposal",
        "input": "Choose requirement set and catalog version",
        "outcome": "Create visible planned/running/completed agent states in P15"
      },
      {
        "id": "P09-A02",
        "label": "Select candidate",
        "input": "Open SAP identifier row",
        "outcome": "Navigate to P10 with evidence and prerequisites"
      },
      {
        "id": "P09-A03",
        "label": "Accept or exclude",
        "input": "Enter inclusion decision and reason",
        "outcome": "Persist reviewer choice; update dependency and coverage counts"
      },
      {
        "id": "P09-A04",
        "label": "Compare versions",
        "input": "Select two revisions",
        "outcome": "Show added/removed items and downstream impact"
      },
      {
        "id": "P09-A05",
        "label": "Submit scope baseline",
        "input": "Confirm reviewed candidates",
        "outcome": "Create scope approval in P16 or show unresolved blockers"
      }
    ]
  },
  {
    "id": "P10",
    "title": "Scope candidate detail",
    "route": "/projects/:id/scope/:scopeId",
    "roles": "Functional Consultant and Scope Approver",
    "pattern": "Object Page",
    "purpose": "Explain why a scope item fits and where SAP availability or evidence still needs validation.",
    "actions": [
      {
        "id": "P10-A01",
        "label": "Inspect SAP identity",
        "input": "Choose verified catalog reference",
        "outcome": "Display exact ID/title pair, release and verification state"
      },
      {
        "id": "P10-A02",
        "label": "Explain recommendation",
        "input": "Open assistant prompt",
        "outcome": "Answer using cited requirements and catalog excerpts"
      },
      {
        "id": "P10-A03",
        "label": "Resolve prerequisite",
        "input": "Select a prerequisite",
        "outcome": "Open the dependent scope object and preserve return context"
      },
      {
        "id": "P10-A04",
        "label": "Apply reviewer decision",
        "input": "Enter rationale",
        "outcome": "Save candidate decision and invalidate impacted approvals"
      },
      {
        "id": "P10-A05",
        "label": "Prepare activation package",
        "input": "Use approved baseline",
        "outcome": "Open P18 dry-run package or route to remaining approvals"
      }
    ]
  },
  {
    "id": "P11",
    "title": "Organization structure designer",
    "route": "/projects/:id/organization",
    "roles": "Functional Consultant and Organization Approver",
    "pattern": "Freestyle UI5 tree with detail panel",
    "purpose": "Design 10 entities across five illustrative countries with accessible editing and explicit assignments.",
    "actions": [
      {
        "id": "P11-A01",
        "label": "Select node",
        "input": "Choose company plant or organizational unit",
        "outcome": "Open P12 with required attributes and assignments"
      },
      {
        "id": "P11-A02",
        "label": "Add node or assignment",
        "input": "Choose allowed object type",
        "outcome": "Open typed form; reject duplicate codes and invalid parents"
      },
      {
        "id": "P11-A03",
        "label": "Generate design",
        "input": "Use approved scope version",
        "outcome": "Run organization agent and show proposed graph differences"
      },
      {
        "id": "P11-A04",
        "label": "Validate structure",
        "input": "Run deterministic rules",
        "outcome": "List missing attributes and assignment errors with focus links"
      },
      {
        "id": "P11-A05",
        "label": "Submit structure",
        "input": "Resolve mandatory issues",
        "outcome": "Create organization approval and downstream impact summary"
      }
    ]
  },
  {
    "id": "P12",
    "title": "Organization object detail",
    "route": "/projects/:id/organization/:nodeId",
    "roles": "Functional Consultant and Organization Approver",
    "pattern": "Object Page",
    "purpose": "Make legal attributes, identifiers and assignments editable through standard forms rather than graph-only interactions.",
    "actions": [
      {
        "id": "P12-A01",
        "label": "Edit attributes",
        "input": "Change approved fields",
        "outcome": "Validate code/country/currency and save new graph revision"
      },
      {
        "id": "P12-A02",
        "label": "Manage assignments",
        "input": "Select allowed parent or related object",
        "outcome": "Validate cardinality and update tree and detail together"
      },
      {
        "id": "P12-A03",
        "label": "Compare observed target",
        "input": "Open snapshot",
        "outcome": "Show designed versus observed structure with timestamp"
      },
      {
        "id": "P12-A04",
        "label": "Inspect impact",
        "input": "Choose a changed field",
        "outcome": "List affected configuration proposals and approvals"
      },
      {
        "id": "P12-A05",
        "label": "Return to designer",
        "input": "Use breadcrumb",
        "outcome": "Restore selected node and prior filter"
      }
    ]
  },
  {
    "id": "P13",
    "title": "Configuration activity worklist",
    "route": "/projects/:id/configuration",
    "roles": "Configuration Consultant and Finance Approver",
    "pattern": "List Report",
    "purpose": "Resolve requirements to configuration activities and distinguish an activity identifier from its executable integration pathway.",
    "actions": [
      {
        "id": "P13-A01",
        "label": "Generate values",
        "input": "Select pilot activity set",
        "outcome": "Run configuration agent with grounded requirements and verified structure"
      },
      {
        "id": "P13-A02",
        "label": "Open activity",
        "input": "Choose activity row",
        "outcome": "Open P14 with typed fields, current values and suggested values"
      },
      {
        "id": "P13-A03",
        "label": "Filter pathway",
        "input": "Choose API upload UI or attended",
        "outcome": "Update supported-operation rows and counts"
      },
      {
        "id": "P13-A04",
        "label": "Validate set",
        "input": "Run field and dependency checks",
        "outcome": "Show errors and unresolved local requirements"
      },
      {
        "id": "P13-A05",
        "label": "Submit change set",
        "input": "Select validated revisions",
        "outcome": "Create approval for the exact target, values and package hash"
      }
    ]
  },
  {
    "id": "P14",
    "title": "Configuration proposal and value diff",
    "route": "/projects/:id/configuration/:activityId",
    "roles": "Configuration Consultant and Finance Approver",
    "pattern": "Object Page with editable table",
    "purpose": "Let reviewers compare observed, proposed and approved values and understand the source for each value.",
    "actions": [
      {
        "id": "P14-A01",
        "label": "Edit proposed value",
        "input": "Enter typed value",
        "outcome": "Validate allowed values and cross-field rules; retain human edit attribution"
      },
      {
        "id": "P14-A02",
        "label": "View evidence",
        "input": "Select field citation",
        "outcome": "Open BR/source passage and organization dependency"
      },
      {
        "id": "P14-A03",
        "label": "Explain risk",
        "input": "Select risk status",
        "outcome": "Show finance-sensitive or irreversible conditions and required owner"
      },
      {
        "id": "P14-A04",
        "label": "Refresh observed values",
        "input": "Request snapshot",
        "outcome": "Update diff and invalidate approval when target state changed"
      },
      {
        "id": "P14-A05",
        "label": "Submit or revise",
        "input": "Save validated version",
        "outcome": "Route to P16 or return a field-linked blocker list"
      }
    ]
  },
  {
    "id": "P15",
    "title": "Agent mission control",
    "route": "/projects/:id/agents/:runId",
    "roles": "Consultant and Delivery Lead",
    "pattern": "Object Page with Timeline",
    "purpose": "Show bounded agents planning, retrieving sources, validating, waiting for review and handing off accountable work.",
    "actions": [
      {
        "id": "P15-A01",
        "label": "Inspect plan",
        "input": "Choose visible step",
        "outcome": "Show intended tool, bounded input, expected output and prerequisite"
      },
      {
        "id": "P15-A02",
        "label": "View sources",
        "input": "Select evidence reference",
        "outcome": "Open source excerpt and freshness information"
      },
      {
        "id": "P15-A03",
        "label": "Pause or cancel",
        "input": "Choose pending demo run",
        "outcome": "Prevent undispatched steps and preserve completed evidence"
      },
      {
        "id": "P15-A04",
        "label": "Review outcome",
        "input": "Choose proposal result",
        "outcome": "Open P09 P11 or P13 with run linkage"
      },
      {
        "id": "P15-A05",
        "label": "Retry safe analysis",
        "input": "Choose failed read-only step",
        "outcome": "Create linked attempt; preserve prior failure and budget history"
      }
    ]
  },
  {
    "id": "P16",
    "title": "My approvals inbox",
    "route": "/projects/:id/approvals",
    "roles": "Scope Organization Finance and Release Approvers",
    "pattern": "List Report",
    "purpose": "Route exact business decisions to eligible approvers and make overdue, returned and stale work visible.",
    "actions": [
      {
        "id": "P16-A01",
        "label": "Filter assignments",
        "input": "Choose type status or due date",
        "outcome": "Show only permitted items with updated count"
      },
      {
        "id": "P16-A02",
        "label": "Open approval",
        "input": "Choose row",
        "outcome": "Open P17 with baseline, target, diff and eligibility"
      },
      {
        "id": "P16-A03",
        "label": "Inspect eligibility",
        "input": "Select own submitted item",
        "outcome": "Explain segregation of duties and identify eligible reviewer"
      },
      {
        "id": "P16-A04",
        "label": "Open returned work",
        "input": "Choose returned item",
        "outcome": "Route proposer to the affected proposal with reviewer comments"
      }
    ]
  },
  {
    "id": "P17",
    "title": "Approval decision and workflow",
    "route": "/projects/:id/approvals/:approvalId",
    "roles": "Assigned eligible Approver",
    "pattern": "Object Page with approval Timeline",
    "purpose": "Require informed approval of the exact version, target and policy before any simulated write.",
    "actions": [
      {
        "id": "P17-A01",
        "label": "Approve",
        "input": "Confirm eligible identity and immutable package",
        "outcome": "Record decision and unlock next gate only when all prerequisites pass"
      },
      {
        "id": "P17-A02",
        "label": "Return for changes",
        "input": "Enter mandatory reason",
        "outcome": "Create returned state and notify proposer"
      },
      {
        "id": "P17-A03",
        "label": "Reject",
        "input": "Enter reason and confirm",
        "outcome": "Record final rejection for this version; preserve lineage"
      },
      {
        "id": "P17-A04",
        "label": "Inspect workflow",
        "input": "Choose step or decision",
        "outcome": "Show assignment, timestamp, policy and next owner"
      },
      {
        "id": "P17-A05",
        "label": "Review stale approval",
        "input": "Open changed proposal",
        "outcome": "Show invalidation and route to a fresh approval request"
      }
    ]
  },
  {
    "id": "P18",
    "title": "Deployment package and dry run",
    "route": "/projects/:id/packages/:packageId",
    "roles": "Release Manager and Deployment Operator",
    "pattern": "Object Page with ordered action table",
    "purpose": "Separate preparation, release authorization and dispatch; respect scope and organization prerequisite deployment.",
    "actions": [
      {
        "id": "P18-A01",
        "label": "Build package",
        "input": "Select approved baseline versions",
        "outcome": "Generate ordered manifest with target and stable action keys"
      },
      {
        "id": "P18-A02",
        "label": "Dry run",
        "input": "Run preflight",
        "outcome": "Display validation results and eligible or attended pathways without changing target"
      },
      {
        "id": "P18-A03",
        "label": "Review blockers",
        "input": "Select failed precondition",
        "outcome": "Open exact missing approval, stale snapshot or organization issue"
      },
      {
        "id": "P18-A04",
        "label": "Request release authorization",
        "input": "Submit immutable package",
        "outcome": "Create release approval in P16"
      },
      {
        "id": "P18-A05",
        "label": "Execute simulation",
        "input": "Use authorized current package",
        "outcome": "Start P19 only after policy, approval and target checks pass"
      }
    ]
  },
  {
    "id": "P19",
    "title": "Deployment execution monitor",
    "route": "/projects/:id/deployments/:runId",
    "roles": "Deployment Operator and Release Manager",
    "pattern": "Object Page with Timeline and responsive action list",
    "purpose": "Make simulated external activity observable and recoverable rather than animating an unconditional success.",
    "actions": [
      {
        "id": "P19-A01",
        "label": "Inspect action",
        "input": "Choose queued running or completed step",
        "outcome": "Show request classification, correlation, attempts and observed state"
      },
      {
        "id": "P19-A02",
        "label": "Pause remaining actions",
        "input": "Confirm pause",
        "outcome": "Stop new dispatch while an in-flight action resolves"
      },
      {
        "id": "P19-A03",
        "label": "Reconcile unknown",
        "input": "Select uncertain outcome",
        "outcome": "Open P20 with target observation; do not blindly retry"
      },
      {
        "id": "P19-A04",
        "label": "Open attended step",
        "input": "Choose human task",
        "outcome": "Show typed instructions, owner and evidence upload"
      },
      {
        "id": "P19-A05",
        "label": "Open results",
        "input": "Wait for verification",
        "outcome": "Open P20 or P21; completion requires observed evidence"
      }
    ]
  },
  {
    "id": "P20",
    "title": "Readback and reconciliation",
    "route": "/projects/:id/reconciliation/:packageId",
    "roles": "Deployment Operator and Functional Consultant",
    "pattern": "Comparison table and Object Page",
    "purpose": "Distinguish approved intent, simulated target observations and verified completion.",
    "actions": [
      {
        "id": "P20-A01",
        "label": "Refresh observation",
        "input": "Request read-only lookup",
        "outcome": "Resolve seeded match mismatch or unknown with a new timestamp"
      },
      {
        "id": "P20-A02",
        "label": "Inspect difference",
        "input": "Choose mismatched field",
        "outcome": "Show approved and observed values and affected requirements"
      },
      {
        "id": "P20-A03",
        "label": "Create recovery task",
        "input": "Assign accountable owner",
        "outcome": "Open P21 and link the original action"
      },
      {
        "id": "P20-A04",
        "label": "Accept verified completion",
        "input": "All required observations match",
        "outcome": "Close eligible actions and update project readiness"
      },
      {
        "id": "P20-A05",
        "label": "Export reconciliation",
        "input": "Choose accessible evidence format",
        "outcome": "Download actual fixture report with source and simulated status"
      }
    ]
  },
  {
    "id": "P21",
    "title": "Exceptions and recovery worklist",
    "route": "/projects/:id/exceptions",
    "roles": "Integration Operator and Deployment Operator",
    "pattern": "List Report and Object Page",
    "purpose": "Turn failures into owned decisions with safe recovery and no hidden retry loops.",
    "actions": [
      {
        "id": "P21-A01",
        "label": "Inspect exception",
        "input": "Select failed exchange or validation",
        "outcome": "Show category, sanitized evidence and affected gate"
      },
      {
        "id": "P21-A02",
        "label": "Assign owner",
        "input": "Choose eligible operator",
        "outcome": "Record assignment and notify"
      },
      {
        "id": "P21-A03",
        "label": "Retry eligible operation",
        "input": "Review safe-retry assessment",
        "outcome": "Run read-only or proven-uncommitted retry; ambiguous writes route to reconciliation"
      },
      {
        "id": "P21-A04",
        "label": "Complete attended task",
        "input": "Enter required evidence and result",
        "outcome": "Record reported completion then require readback before verified state"
      },
      {
        "id": "P21-A05",
        "label": "Escalate",
        "input": "Enter reason",
        "outcome": "Create in-app escalation and retain return context"
      }
    ]
  },
  {
    "id": "P22",
    "title": "Realize Test and qualification",
    "route": "/projects/:id/quality",
    "roles": "QA Lead and Business Owner",
    "pattern": "List Report and Object Page",
    "purpose": "Demonstrate product qualification and selected pilot scenarios without claiming the future full process-testing agent.",
    "actions": [
      {
        "id": "P22-A01",
        "label": "Run demo suite",
        "input": "Select deterministic fixture tests",
        "outcome": "Show queued/running/passed/failed results linked to feature and TC"
      },
      {
        "id": "P22-A02",
        "label": "Inspect failure",
        "input": "Choose failed test",
        "outcome": "Open assertion, evidence and affected gate"
      },
      {
        "id": "P22-A03",
        "label": "Record UAT result",
        "input": "Enter permitted business outcome",
        "outcome": "Persist acceptance or defect with accountable owner"
      },
      {
        "id": "P22-A04",
        "label": "Create ALM task",
        "input": "Confirm mapped target",
        "outcome": "Simulate correlated task creation and show resulting external ID"
      },
      {
        "id": "P22-A05",
        "label": "Request quality gate",
        "input": "Use complete evidence set",
        "outcome": "Create approval or show missing tests and unresolved defects"
      }
    ]
  },
  {
    "id": "P23",
    "title": "Evidence and audit explorer",
    "route": "/projects/:id/evidence",
    "roles": "Auditor and authorized project roles",
    "pattern": "List Report and Object Page",
    "purpose": "Make every decision and simulated privileged attempt traceable from source through outcome.",
    "actions": [
      {
        "id": "P23-A01",
        "label": "Search audit",
        "input": "Filter actor time BR or package",
        "outcome": "Return authorized events and stable correlation references"
      },
      {
        "id": "P23-A02",
        "label": "Open lineage",
        "input": "Select artifact",
        "outcome": "Traverse requirement, proposal, approval, action and observation"
      },
      {
        "id": "P23-A03",
        "label": "Inspect redaction",
        "input": "Select restricted field",
        "outcome": "Explain policy without revealing hidden value"
      },
      {
        "id": "P23-A04",
        "label": "Export bundle",
        "input": "Confirm export entitlement",
        "outcome": "Download a real demo evidence file with manifest and simulation label"
      }
    ]
  },
  {
    "id": "P24",
    "title": "Run handover and pilot health",
    "route": "/projects/:id/run",
    "roles": "Support Operator and Delivery Lead",
    "pattern": "Overview and Object Page",
    "purpose": "Close the MVP story with ownership, known limitations and pilot monitoring; full Run automation remains future scope.",
    "actions": [
      {
        "id": "P24-A01",
        "label": "Open runbook",
        "input": "Select a known issue",
        "outcome": "Show recovery procedure and responsible owner"
      },
      {
        "id": "P24-A02",
        "label": "Inspect pilot health",
        "input": "Select health indicator",
        "outcome": "Open correlated demo alerts and last-observed state"
      },
      {
        "id": "P24-A03",
        "label": "Accept handover",
        "input": "Confirm complete evidence",
        "outcome": "Record authorized handover or list missing artifacts"
      },
      {
        "id": "P24-A04",
        "label": "Record support task",
        "input": "Enter incident description",
        "outcome": "Create owned demo task with project linkage"
      },
      {
        "id": "P24-A05",
        "label": "Open future capability",
        "input": "Select roadmap topic",
        "outcome": "Show an interactive future-scope explanation and return route"
      }
    ]
  },
  {
    "id": "P25",
    "title": "Benefits and outcome narrative",
    "route": "/projects/:id/value",
    "roles": "Sponsor and Delivery Lead",
    "pattern": "Analytical overview",
    "purpose": "Explain how grounded proposals, reusable structures, approvals and verified execution reduce avoidable effort and risk.",
    "actions": [
      {
        "id": "P25-A01",
        "label": "Inspect metric",
        "input": "Select coverage time or rework indicator",
        "outcome": "Show denominator, event trail and whether observed or illustrative"
      },
      {
        "id": "P25-A02",
        "label": "Edit planning assumption",
        "input": "Change baseline hours or unit cost",
        "outcome": "Recalculate scenario benefit and label it illustrative"
      },
      {
        "id": "P25-A03",
        "label": "Compare journey",
        "input": "Choose baseline versus assisted mode",
        "outcome": "Show step counts and human checkpoints with assumptions"
      },
      {
        "id": "P25-A04",
        "label": "Export executive summary",
        "input": "Choose permitted report",
        "outcome": "Download a real demo report including caveats and open risks"
      }
    ]
  },
  {
    "id": "P26",
    "title": "Access and governance administration",
    "route": "/projects/:id/access",
    "roles": "Administrator and Security Reviewer",
    "pattern": "List Report and Object Page",
    "purpose": "Demonstrate permission boundaries, access expiry and audit-export separation without allowing role escalation from chat.",
    "actions": [
      {
        "id": "P26-A01",
        "label": "Inspect persona grants",
        "input": "Select seeded user",
        "outcome": "Show permitted actions and organization scope"
      },
      {
        "id": "P26-A02",
        "label": "Change demo grant",
        "input": "Choose allowed scope and expiry",
        "outcome": "Record audited demo access change and refresh navigation"
      },
      {
        "id": "P26-A03",
        "label": "Revoke access",
        "input": "Confirm user scope",
        "outcome": "Deny subsequent protected routes and show safe error"
      },
      {
        "id": "P26-A04",
        "label": "Test denied route",
        "input": "Choose predefined negative case",
        "outcome": "Show access denied and authorized return option"
      }
    ]
  },
  {
    "id": "P27",
    "title": "Process application and architecture context",
    "route": "/projects/:id/architecture",
    "roles": "Enterprise Architect and Functional Consultant",
    "pattern": "Relationship list and Object Page",
    "purpose": "Connect Signavio process context to LeanIX application and capability references and the implementation scope.",
    "actions": [
      {
        "id": "P27-A01",
        "label": "Select relation",
        "input": "Choose process application or capability",
        "outcome": "Open provenance, lifecycle and owner details"
      },
      {
        "id": "P27-A02",
        "label": "Open Signavio context",
        "input": "Select process reference",
        "outcome": "Show labeled simulated process record and linked scope candidates"
      },
      {
        "id": "P27-A03",
        "label": "Open LeanIX context",
        "input": "Select fact-sheet reference",
        "outcome": "Show labeled simulated application record and supported process links"
      },
      {
        "id": "P27-A04",
        "label": "Assess impact",
        "input": "Choose scope change",
        "outcome": "Highlight affected architecture relations and require review"
      },
      {
        "id": "P27-A05",
        "label": "Refresh mapped context",
        "input": "Choose read-only synchronization",
        "outcome": "Show simulated synchronization, source ownership and conflict state"
      }
    ]
  }
]
```
<!-- END SPEC screens -->

### common-controls

<!-- BEGIN SPEC common-controls -->
```json
[
  {
    "id": "C01",
    "control": "Shell logo and home",
    "outcome": "Return to authorized landing page; confirm or retain unsaved draft"
  },
  {
    "id": "C02",
    "control": "Navigation expansion and menu item",
    "outcome": "Expand/collapse menu; route with project context and active selection"
  },
  {
    "id": "C03",
    "control": "Project selector",
    "outcome": "Search only authorized projects; reload context and clear unrelated selections"
  },
  {
    "id": "C04",
    "control": "Persona and permissions",
    "outcome": "Open seeded identity details and View permissions; role switching stays in Demo controls"
  },
  {
    "id": "C05",
    "control": "Global search",
    "outcome": "Search authorized objects; select a result to open its actual route"
  },
  {
    "id": "C06",
    "control": "Notifications",
    "outcome": "Open notification list; mark read and navigate to referenced task"
  },
  {
    "id": "C07",
    "control": "Help",
    "outcome": "Open contextual guidance and glossary; close returns focus to trigger"
  },
  {
    "id": "C08",
    "control": "Breadcrumb and browser back",
    "outcome": "Restore prior object/list context; unsaved edits prompt Save Discard Cancel"
  },
  {
    "id": "C09",
    "control": "Filter variant and clear filters",
    "outcome": "Apply saved local variant; reset returns all authorized rows"
  },
  {
    "id": "C10",
    "control": "Sort group and column menu",
    "outcome": "Change data presentation; restore defaults; settings persist for demo persona"
  },
  {
    "id": "C11",
    "control": "Table checkbox and row menu",
    "outcome": "Update selection count and eligible actions; menu commands use same policy checks"
  },
  {
    "id": "C12",
    "control": "Value help and form inputs",
    "outcome": "Open searchable valid values; validate on submit; link messages to invalid fields"
  },
  {
    "id": "C13",
    "control": "Tabs expanders and status links",
    "outcome": "Reveal real content or scoped detail; preserve selection and focus"
  },
  {
    "id": "C14",
    "control": "Dialog confirmation cancel close",
    "outcome": "Commit only on confirmation; cancel leaves original record unchanged"
  },
  {
    "id": "C15",
    "control": "Message popover and retry",
    "outcome": "Show field/object-linked issues; retry follows operation safety rules"
  },
  {
    "id": "C16",
    "control": "Loading empty and no-results states",
    "outcome": "Show progress with cancel where supported; offer reset, add or permitted next action"
  },
  {
    "id": "C17",
    "control": "Assistant shell entry and close",
    "outcome": "Open contextual panel; close returns focus; phone uses full-screen route"
  },
  {
    "id": "C18",
    "control": "Assistant send stop retry",
    "outcome": "Submit intent; stop further response events; retry safe analysis with visible history"
  },
  {
    "id": "C19",
    "control": "Assistant sources prompts and feedback",
    "outcome": "Open cited authorized objects; suggested prompt executes bounded intent; feedback persists"
  },
  {
    "id": "C20",
    "control": "Assistant new conversation and history",
    "outcome": "Confirm new thread; retrieve only current user/project conversations"
  },
  {
    "id": "C21",
    "control": "Demo scenario selector and fault toggle",
    "outcome": "Apply named fixture/fault with visible label; preserve separate happy-path reset"
  },
  {
    "id": "C22",
    "control": "Demo reset and guided step controls",
    "outcome": "Confirm reset; Next/Previous opens story checkpoint without silently approving work"
  },
  {
    "id": "C23",
    "control": "Chart data point and metric drilldown",
    "outcome": "Open filtered underlying records and show calculation basis"
  },
  {
    "id": "C24",
    "control": "Export menu and download",
    "outcome": "Generate actual content; permission denial routes to View permissions"
  }
]
```
<!-- END SPEC common-controls -->

### personas

<!-- BEGIN SPEC personas -->
```json
[
  {
    "id": "sponsor",
    "grants": [
      "Read scoped readiness and benefits"
    ],
    "denies": [
      "Proposal edit",
      "Approve configuration",
      "Dispatch"
    ]
  },
  {
    "id": "deliveryLead",
    "grants": [
      "Manage project/owners",
      "Inspect gates",
      "Route work"
    ],
    "denies": [
      "Bypass specialist approval"
    ]
  },
  {
    "id": "analyst",
    "grants": [
      "Upload BPD",
      "Edit atomic requirements",
      "Resolve assumptions"
    ],
    "denies": [
      "Self approval",
      "Dispatch"
    ]
  },
  {
    "id": "functionalConsultant",
    "grants": [
      "Propose scope",
      "Propose organization",
      "Review fit"
    ],
    "denies": [
      "Approve own version"
    ]
  },
  {
    "id": "configurationConsultant",
    "grants": [
      "Propose and revise typed values"
    ],
    "denies": [
      "Sole finance approval",
      "Release authorization"
    ]
  },
  {
    "id": "scopeApprover",
    "grants": [
      "Approve assigned scope in authorized project"
    ],
    "denies": [
      "Approve own version"
    ]
  },
  {
    "id": "organizationApprover",
    "grants": [
      "Approve assigned organization in authorized project"
    ],
    "denies": [
      "Approve own version"
    ]
  },
  {
    "id": "financeApprover",
    "grants": [
      "Approve assigned finance-sensitive values"
    ],
    "denies": [
      "Dispatch",
      "Change privileges",
      "Approve own version"
    ]
  },
  {
    "id": "releaseManager",
    "grants": [
      "Authorize eligible immutable package"
    ],
    "denies": [
      "Bypass tests target or freshness"
    ]
  },
  {
    "id": "deploymentOperator",
    "grants": [
      "Execute authorized simulation",
      "Pause",
      "Reconcile"
    ],
    "denies": [
      "Grant business approval",
      "Blind retry unknown"
    ]
  },
  {
    "id": "integrationAdmin",
    "grants": [
      "Inspect connection capabilities",
      "Manage demo grants if separately authorized"
    ],
    "denies": [
      "Raw secrets",
      "Business value approval"
    ]
  },
  {
    "id": "qaLead",
    "grants": [
      "Run demo qualification",
      "Record tests"
    ],
    "denies": [
      "Alter execution evidence"
    ]
  },
  {
    "id": "businessOwner",
    "grants": [
      "Record assigned UAT and quality decision"
    ],
    "denies": [
      "Alter execution evidence",
      "Self approval"
    ]
  },
  {
    "id": "auditor",
    "grants": [
      "Read permitted evidence"
    ],
    "denies": [
      "Export without separate entitlement",
      "Write",
      "Dispatch"
    ]
  },
  {
    "id": "supportOperator",
    "grants": [
      "Pilot handover tasks",
      "Runbooks",
      "Demo support incidents"
    ],
    "denies": [
      "Privileged execution unless separately granted"
    ]
  }
]
```
<!-- END SPEC personas -->

### r1-features

<!-- BEGIN SPEC r1-features -->
```json
[
  {
    "id": "F01-001",
    "title": "Project lifecycle",
    "epic": "Product and project foundation",
    "priority": "P0",
    "acceptance": "Project creates once and all required ownership fields persist.",
    "screens": [
      "P02",
      "P04"
    ],
    "journey": "J01"
  },
  {
    "id": "F01-002",
    "title": "Client and environment boundaries",
    "epic": "Product and project foundation",
    "priority": "P0",
    "acceptance": "Cross-project identifiers cannot read or mutate another project.",
    "screens": [
      "P02",
      "P04"
    ],
    "journey": "J01"
  },
  {
    "id": "F02-001",
    "title": "Federated sign in",
    "epic": "Identity security and privacy",
    "priority": "P0",
    "acceptance": "Expired or invalid tokens are denied on every protected endpoint.",
    "screens": [
      "P00",
      "P26",
      "P17",
      "P23"
    ],
    "journey": "J04"
  },
  {
    "id": "F02-002",
    "title": "Business roles",
    "epic": "Identity security and privacy",
    "priority": "P0",
    "acceptance": "A read-only analyst cannot submit an execution command.",
    "screens": [
      "P00",
      "P26",
      "P17",
      "P23"
    ],
    "journey": "J04"
  },
  {
    "id": "F02-003",
    "title": "Organizational authorization",
    "epic": "Identity security and privacy",
    "priority": "P0",
    "acceptance": "Cross-company negative tests deny both reads and writes.",
    "screens": [
      "P00",
      "P26",
      "P17",
      "P23"
    ],
    "journey": "J04"
  },
  {
    "id": "F02-004",
    "title": "Segregation of duties",
    "epic": "Identity security and privacy",
    "priority": "P0",
    "acceptance": "The proposer cannot approve the same governed change.",
    "screens": [
      "P00",
      "P26",
      "P17",
      "P23"
    ],
    "journey": "J04"
  },
  {
    "id": "F02-005",
    "title": "Privileged technical identities",
    "epic": "Identity security and privacy",
    "priority": "P0",
    "acceptance": "A runner cannot access unrelated projects or SAP targets.",
    "screens": [
      "P00",
      "P26",
      "P17",
      "P23"
    ],
    "journey": "J04"
  },
  {
    "id": "F02-006",
    "title": "Secret handling",
    "epic": "Identity security and privacy",
    "priority": "P0",
    "acceptance": "Secrets are absent from prompts, payload exports and application logs.",
    "screens": [
      "P00",
      "P26",
      "P17",
      "P23"
    ],
    "journey": "J04"
  },
  {
    "id": "F02-007",
    "title": "Personal data minimization",
    "epic": "Identity security and privacy",
    "priority": "P0",
    "acceptance": "Sensitive attributes are masked in model requests and evidence previews.",
    "screens": [
      "P00",
      "P26",
      "P17",
      "P23"
    ],
    "journey": "J04"
  },
  {
    "id": "F02-008",
    "title": "Authorization regression",
    "epic": "Identity security and privacy",
    "priority": "P0",
    "acceptance": "Associated-entity and custom-action negative tests pass.",
    "screens": [
      "P00",
      "P26",
      "P17",
      "P23"
    ],
    "journey": "J04"
  },
  {
    "id": "F02-009",
    "title": "Access lifecycle",
    "epic": "Identity security and privacy",
    "priority": "P0",
    "acceptance": "Revoked users lose application access and pending grants expire.",
    "screens": [
      "P00",
      "P26",
      "P17",
      "P23"
    ],
    "journey": "J04"
  },
  {
    "id": "F02-010",
    "title": "Audit access separation",
    "epic": "Identity security and privacy",
    "priority": "P0",
    "acceptance": "Unauthorized export fails and the denial is recorded.",
    "screens": [
      "P00",
      "P26",
      "P17",
      "P23"
    ],
    "journey": "J04"
  },
  {
    "id": "F01-003",
    "title": "Lifecycle taxonomy",
    "epic": "Product and project foundation",
    "priority": "P1",
    "acceptance": "Phase transitions retain prerequisites and accountable decisions.",
    "screens": [
      "P02",
      "P04"
    ],
    "journey": "J01"
  },
  {
    "id": "F01-004",
    "title": "Decision and assumption register",
    "epic": "Product and project foundation",
    "priority": "P1",
    "acceptance": "An unresolved country is surfaced and cannot become a valid country key.",
    "screens": [
      "P02",
      "P04"
    ],
    "journey": "J01"
  },
  {
    "id": "F01-005",
    "title": "Stable business identifiers",
    "epic": "Product and project foundation",
    "priority": "P1",
    "acceptance": "References remain valid after a new source or proposal revision.",
    "screens": [
      "P02",
      "P04"
    ],
    "journey": "J01"
  },
  {
    "id": "F04-001",
    "title": "Word document intake",
    "epic": "Knowledge and data foundation",
    "priority": "P0",
    "acceptance": "Duplicate uploads are detected and revisions remain distinguishable.",
    "screens": [
      "P06",
      "P07",
      "P08"
    ],
    "journey": "J01"
  },
  {
    "id": "F04-002",
    "title": "Source safety screening",
    "epic": "Knowledge and data foundation",
    "priority": "P0",
    "acceptance": "Malicious document instructions cannot invoke privileged tools.",
    "screens": [
      "P06",
      "P07",
      "P08"
    ],
    "journey": "J01"
  },
  {
    "id": "F01-006",
    "title": "Product scope baseline",
    "epic": "Product and project foundation",
    "priority": "P1",
    "acceptance": "Every selected feature has an owner and release classification.",
    "screens": [
      "P02",
      "P04"
    ],
    "journey": "J01"
  },
  {
    "id": "F03-001",
    "title": "Repository and conventions",
    "epic": "Engineering platform and release controls",
    "priority": "P0",
    "acceptance": "Build, lint and type checks run from a documented clean checkout.",
    "screens": [
      "P05",
      "P22",
      "P24"
    ],
    "journey": "J05"
  },
  {
    "id": "F03-002",
    "title": "Development environments",
    "epic": "Engineering platform and release controls",
    "priority": "P0",
    "acceptance": "Environment configuration is separated and contains no embedded secrets.",
    "screens": [
      "P05",
      "P22",
      "P24"
    ],
    "journey": "J05"
  },
  {
    "id": "F03-003",
    "title": "CAP service skeleton",
    "epic": "Engineering platform and release controls",
    "priority": "P0",
    "acceptance": "Service metadata and error contracts pass contract checks.",
    "screens": [
      "P05",
      "P22",
      "P24"
    ],
    "journey": "J05"
  },
  {
    "id": "F03-004",
    "title": "HANA persistence and HDI",
    "epic": "Engineering platform and release controls",
    "priority": "P0",
    "acceptance": "Schema deployment succeeds in test and migration evidence is retained.",
    "screens": [
      "P05",
      "P22",
      "P24"
    ],
    "journey": "J05"
  },
  {
    "id": "F03-005",
    "title": "Continuous integration",
    "epic": "Engineering platform and release controls",
    "priority": "P0",
    "acceptance": "A failing required check prevents promotion.",
    "screens": [
      "P05",
      "P22",
      "P24"
    ],
    "journey": "J05"
  },
  {
    "id": "F03-006",
    "title": "Application deployment pipeline",
    "epic": "Engineering platform and release controls",
    "priority": "P0",
    "acceptance": "A signed application release is traceable to commit and test evidence.",
    "screens": [
      "P05",
      "P22",
      "P24"
    ],
    "journey": "J05"
  },
  {
    "id": "F03-007",
    "title": "Dependency security",
    "epic": "Engineering platform and release controls",
    "priority": "P0",
    "acceptance": "Critical unresolved findings block the candidate release.",
    "screens": [
      "P05",
      "P22",
      "P24"
    ],
    "journey": "J05"
  },
  {
    "id": "F03-008",
    "title": "Observability foundation",
    "epic": "Engineering platform and release controls",
    "priority": "P0",
    "acceptance": "One request can be traced from UI command to verification result.",
    "screens": [
      "P05",
      "P22",
      "P24"
    ],
    "journey": "J05"
  },
  {
    "id": "F05-001",
    "title": "Durable business workflow",
    "epic": "Workflow approvals and execution ledger",
    "priority": "P0",
    "acceptance": "Restart resumes an approval wait without losing its state.",
    "screens": [
      "P16",
      "P17",
      "P18",
      "P19",
      "P20",
      "P23"
    ],
    "journey": "J02"
  },
  {
    "id": "F05-002",
    "title": "Version bound approvals",
    "epic": "Workflow approvals and execution ledger",
    "priority": "P0",
    "acceptance": "A changed target or payload requires a new approval.",
    "screens": [
      "P16",
      "P17",
      "P18",
      "P19",
      "P20",
      "P23"
    ],
    "journey": "J02"
  },
  {
    "id": "F05-003",
    "title": "Approval inbox",
    "epic": "Workflow approvals and execution ledger",
    "priority": "P0",
    "acceptance": "Only eligible approvers can decide the assigned item.",
    "screens": [
      "P16",
      "P17",
      "P18",
      "P19",
      "P20",
      "P23"
    ],
    "journey": "J02"
  },
  {
    "id": "F05-004",
    "title": "Policy evaluation",
    "epic": "Workflow approvals and execution ledger",
    "priority": "P0",
    "acceptance": "A valid approval cannot bypass a missing mandatory prerequisite.",
    "screens": [
      "P16",
      "P17",
      "P18",
      "P19",
      "P20",
      "P23"
    ],
    "journey": "J02"
  },
  {
    "id": "F05-005",
    "title": "Transactional dispatch",
    "epic": "Workflow approvals and execution ledger",
    "priority": "P0",
    "acceptance": "A process crash cannot silently lose an approved command.",
    "screens": [
      "P16",
      "P17",
      "P18",
      "P19",
      "P20",
      "P23"
    ],
    "journey": "J02"
  },
  {
    "id": "F05-006",
    "title": "Idempotency controls",
    "epic": "Workflow approvals and execution ledger",
    "priority": "P0",
    "acceptance": "Repeated requests return one logical action and no duplicate write.",
    "screens": [
      "P16",
      "P17",
      "P18",
      "P19",
      "P20",
      "P23"
    ],
    "journey": "J02"
  },
  {
    "id": "F05-007",
    "title": "Unknown outcome handling",
    "epic": "Workflow approvals and execution ledger",
    "priority": "P0",
    "acceptance": "A timeout after a possible write cannot trigger blind replay.",
    "screens": [
      "P16",
      "P17",
      "P18",
      "P19",
      "P20",
      "P23"
    ],
    "journey": "J02"
  },
  {
    "id": "F05-008",
    "title": "Execution evidence ledger",
    "epic": "Workflow approvals and execution ledger",
    "priority": "P0",
    "acceptance": "Every attempted privileged action has complete evidence.",
    "screens": [
      "P16",
      "P17",
      "P18",
      "P19",
      "P20",
      "P23"
    ],
    "journey": "J02"
  },
  {
    "id": "F05-009",
    "title": "Kill switch and pause",
    "epic": "Workflow approvals and execution ledger",
    "priority": "P0",
    "acceptance": "Paused actions cannot start while read-only analysis remains usable.",
    "screens": [
      "P16",
      "P17",
      "P18",
      "P19",
      "P20",
      "P23"
    ],
    "journey": "J02"
  },
  {
    "id": "F06-001",
    "title": "Responsive application shell",
    "epic": "SAP Fiori workbench and experience",
    "priority": "P0",
    "acceptance": "Agreed desktop, tablet and narrow layouts remain usable.",
    "screens": [
      "P01",
      "P02",
      "P09",
      "P11",
      "P15"
    ],
    "journey": "J01"
  },
  {
    "id": "F06-002",
    "title": "Project cockpit",
    "epic": "SAP Fiori workbench and experience",
    "priority": "P0",
    "acceptance": "Metrics drill into the underlying scoped records.",
    "screens": [
      "P01",
      "P02",
      "P09",
      "P11",
      "P15"
    ],
    "journey": "J01"
  },
  {
    "id": "F07-001",
    "title": "Landscape registry",
    "epic": "Admin cockpit and integration foundation",
    "priority": "P0",
    "acceptance": "Every command resolves an explicitly approved target.",
    "screens": [
      "P05",
      "P21",
      "P23"
    ],
    "journey": "J05"
  },
  {
    "id": "F07-002",
    "title": "Destination configuration",
    "epic": "Admin cockpit and integration foundation",
    "priority": "P0",
    "acceptance": "A missing or invalid destination blocks calls with a sanitized error.",
    "screens": [
      "P05",
      "P21",
      "P23"
    ],
    "journey": "J05"
  },
  {
    "id": "F07-003",
    "title": "Connectivity diagnostics",
    "epic": "Admin cockpit and integration foundation",
    "priority": "P0",
    "acceptance": "A reachable endpoint is not reported as business-ready without permission checks.",
    "screens": [
      "P05",
      "P21",
      "P23"
    ],
    "journey": "J05"
  },
  {
    "id": "F07-004",
    "title": "Capability registry",
    "epic": "Admin cockpit and integration foundation",
    "priority": "P0",
    "acceptance": "No write is generated without a validated operation route.",
    "screens": [
      "P05",
      "P21",
      "P23"
    ],
    "journey": "J05"
  },
  {
    "id": "F07-005",
    "title": "API contract registry",
    "epic": "Admin cockpit and integration foundation",
    "priority": "P0",
    "acceptance": "Unsupported create or update operations are rejected.",
    "screens": [
      "P05",
      "P21",
      "P23"
    ],
    "journey": "J05"
  },
  {
    "id": "F07-006",
    "title": "Integration error worklist",
    "epic": "Admin cockpit and integration foundation",
    "priority": "P0",
    "acceptance": "Permanent failures remain visible until an authorized resolution.",
    "screens": [
      "P05",
      "P21",
      "P23"
    ],
    "journey": "J05"
  },
  {
    "id": "F07-007",
    "title": "Callback authentication",
    "epic": "Admin cockpit and integration foundation",
    "priority": "P0",
    "acceptance": "Forged, stale or mismatched callbacks cannot advance workflow.",
    "screens": [
      "P05",
      "P21",
      "P23"
    ],
    "journey": "J05"
  },
  {
    "id": "F07-008",
    "title": "External correlation",
    "epic": "Admin cockpit and integration foundation",
    "priority": "P0",
    "acceptance": "An accepted SAP object is traceable to the originating request.",
    "screens": [
      "P05",
      "P21",
      "P23"
    ],
    "journey": "J05"
  },
  {
    "id": "F08-001",
    "title": "Adapter contract",
    "epic": "Bounded SAP execution adapters",
    "priority": "P0",
    "acceptance": "Every executable adapter rejects invalid input before target access.",
    "screens": [
      "P18",
      "P19",
      "P20",
      "P21"
    ],
    "journey": "J03"
  },
  {
    "id": "F08-002",
    "title": "Read only target snapshots",
    "epic": "Bounded SAP execution adapters",
    "priority": "P0",
    "acceptance": "Snapshot includes tenant, object key, observation time and provenance.",
    "screens": [
      "P18",
      "P19",
      "P20",
      "P21"
    ],
    "journey": "J03"
  },
  {
    "id": "F08-003",
    "title": "API execution worker",
    "epic": "Bounded SAP execution adapters",
    "priority": "P0",
    "acceptance": "Response and persisted target state agree on the outcome.",
    "screens": [
      "P18",
      "P19",
      "P20",
      "P21"
    ],
    "journey": "J03"
  },
  {
    "id": "F08-004",
    "title": "UI runner isolation",
    "epic": "Bounded SAP execution adapters",
    "priority": "P0",
    "acceptance": "A long browser job cannot hold an HTTP transaction open.",
    "screens": [
      "P18",
      "P19",
      "P20",
      "P21"
    ],
    "journey": "J03"
  },
  {
    "id": "F08-005",
    "title": "Semantic UI targeting",
    "epic": "Bounded SAP execution adapters",
    "priority": "P0",
    "acceptance": "A changed label or unexpected screen stops the affected action safely.",
    "screens": [
      "P18",
      "P19",
      "P20",
      "P21"
    ],
    "journey": "J03"
  },
  {
    "id": "F08-006",
    "title": "Approved upload path",
    "epic": "Bounded SAP execution adapters",
    "priority": "P0",
    "acceptance": "Generated output matches the approved target template version.",
    "screens": [
      "P18",
      "P19",
      "P20",
      "P21"
    ],
    "journey": "J03"
  },
  {
    "id": "F08-007",
    "title": "Write verification",
    "epic": "Bounded SAP execution adapters",
    "priority": "P0",
    "acceptance": "A successful click without persisted change is not marked verified.",
    "screens": [
      "P18",
      "P19",
      "P20",
      "P21"
    ],
    "journey": "J03"
  },
  {
    "id": "F08-008",
    "title": "Replay and recovery test",
    "epic": "Bounded SAP execution adapters",
    "priority": "P0",
    "acceptance": "Restart never duplicates the tested business side effect.",
    "screens": [
      "P18",
      "P19",
      "P20",
      "P21"
    ],
    "journey": "J03"
  },
  {
    "id": "F12-001",
    "title": "Deployment package manifest",
    "epic": "Deployment agent",
    "priority": "P0",
    "acceptance": "Any content change invalidates package signature.",
    "screens": [
      "P18",
      "P19",
      "P20",
      "P21"
    ],
    "journey": "J03"
  },
  {
    "id": "F12-002",
    "title": "Prerequisite gate engine",
    "epic": "Deployment agent",
    "priority": "P0",
    "acceptance": "Dependent actions cannot run early.",
    "screens": [
      "P18",
      "P19",
      "P20",
      "P21"
    ],
    "journey": "J03"
  },
  {
    "id": "F12-003",
    "title": "Target authorization",
    "epic": "Deployment agent",
    "priority": "P0",
    "acceptance": "Target mismatch blocks execution.",
    "screens": [
      "P18",
      "P19",
      "P20",
      "P21"
    ],
    "journey": "J03"
  },
  {
    "id": "F12-004",
    "title": "Dry-run planner",
    "epic": "Deployment agent",
    "priority": "P0",
    "acceptance": "Preview lists unsupported and attended steps.",
    "screens": [
      "P18",
      "P19",
      "P20",
      "P21"
    ],
    "journey": "J03"
  },
  {
    "id": "F12-005",
    "title": "Release approval gate",
    "epic": "Deployment agent",
    "priority": "P0",
    "acceptance": "Expired or revoked approval blocks dispatch.",
    "screens": [
      "P18",
      "P19",
      "P20",
      "P21"
    ],
    "journey": "J03"
  },
  {
    "id": "F12-006",
    "title": "Durable execution state machine",
    "epic": "Deployment agent",
    "priority": "P0",
    "acceptance": "Restart resumes from reconciled state.",
    "screens": [
      "P18",
      "P19",
      "P20",
      "P21"
    ],
    "journey": "J03"
  },
  {
    "id": "F12-007",
    "title": "Target locking",
    "epic": "Deployment agent",
    "priority": "P0",
    "acceptance": "Concurrent conflicting package is queued.",
    "screens": [
      "P18",
      "P19",
      "P20",
      "P21"
    ],
    "journey": "J03"
  },
  {
    "id": "F12-008",
    "title": "Bounded execution dispatch",
    "epic": "Deployment agent",
    "priority": "P0",
    "acceptance": "Agent cannot call arbitrary endpoints or scripts.",
    "screens": [
      "P18",
      "P19",
      "P20",
      "P21"
    ],
    "journey": "J03"
  },
  {
    "id": "F12-009",
    "title": "Readback reconciliation",
    "epic": "Deployment agent",
    "priority": "P0",
    "acceptance": "Success requires independently retrieved evidence.",
    "screens": [
      "P18",
      "P19",
      "P20",
      "P21"
    ],
    "journey": "J03"
  },
  {
    "id": "F12-010",
    "title": "Failure and unknown recovery",
    "epic": "Deployment agent",
    "priority": "P0",
    "acceptance": "Unknown writes cannot be blindly repeated.",
    "screens": [
      "P18",
      "P19",
      "P20",
      "P21"
    ],
    "journey": "J03"
  },
  {
    "id": "F12-011",
    "title": "Operator recovery console",
    "epic": "Deployment agent",
    "priority": "P0",
    "acceptance": "Each recovery records actor and reason.",
    "screens": [
      "P18",
      "P19",
      "P20",
      "P21"
    ],
    "journey": "J03"
  },
  {
    "id": "F12-012",
    "title": "Deployment qualification suite",
    "epic": "Deployment agent",
    "priority": "P0",
    "acceptance": "No duplicate change occurs in fault tests.",
    "screens": [
      "P18",
      "P19",
      "P20",
      "P21"
    ],
    "journey": "J03"
  },
  {
    "id": "F14-001",
    "title": "ALM connector feasibility",
    "epic": "ALM and delivery traceability",
    "priority": "P0",
    "acceptance": "Supported objects and permissions documented.",
    "screens": [
      "P05",
      "P22",
      "P23"
    ],
    "journey": "J05"
  },
  {
    "id": "F14-002",
    "title": "Requirement linkage",
    "epic": "ALM and delivery traceability",
    "priority": "P0",
    "acceptance": "Links are bidirectionally traceable where supported.",
    "screens": [
      "P05",
      "P22",
      "P23"
    ],
    "journey": "J05"
  },
  {
    "id": "F15-001",
    "title": "Contract and schema tests",
    "epic": "Product qualification and adoption",
    "priority": "P0",
    "acceptance": "All published contracts pass positive and negative cases.",
    "screens": [
      "P22",
      "P26",
      "P24"
    ],
    "journey": "J04"
  },
  {
    "id": "F15-002",
    "title": "CAP authorization testing",
    "epic": "Product qualification and adoption",
    "priority": "P0",
    "acceptance": "Cross-client and deep-operation access attempts are denied.",
    "screens": [
      "P22",
      "P26",
      "P24"
    ],
    "journey": "J04"
  },
  {
    "id": "F15-003",
    "title": "UI5 journey tests",
    "epic": "Product qualification and adoption",
    "priority": "P0",
    "acceptance": "Review and recovery journeys pass supported viewports.",
    "screens": [
      "P22",
      "P26",
      "P24"
    ],
    "journey": "J04"
  },
  {
    "id": "F15-004",
    "title": "Golden agent evaluations",
    "epic": "Product qualification and adoption",
    "priority": "P0",
    "acceptance": "Critical grounded decisions meet agreed thresholds.",
    "screens": [
      "P22",
      "P26",
      "P24"
    ],
    "journey": "J04"
  },
  {
    "id": "F15-005",
    "title": "Connector fault injection",
    "epic": "Product qualification and adoption",
    "priority": "P0",
    "acceptance": "Timeout and replay cases preserve write safety.",
    "screens": [
      "P22",
      "P26",
      "P24"
    ],
    "journey": "J04"
  },
  {
    "id": "F15-006",
    "title": "Integrated vertical scenario",
    "epic": "Product qualification and adoption",
    "priority": "P0",
    "acceptance": "BPD to verified configuration scenario completes with evidence.",
    "screens": [
      "P22",
      "P26",
      "P24"
    ],
    "journey": "J04"
  },
  {
    "id": "F15-007",
    "title": "User acceptance testing",
    "epic": "Product qualification and adoption",
    "priority": "P0",
    "acceptance": "Business owners sign pilot acceptance and defects.",
    "screens": [
      "P22",
      "P26",
      "P24"
    ],
    "journey": "J04"
  },
  {
    "id": "F15-008",
    "title": "Performance and recovery tests",
    "epic": "Product qualification and adoption",
    "priority": "P0",
    "acceptance": "Agreed load and restart objectives are demonstrated.",
    "screens": [
      "P22",
      "P26",
      "P24"
    ],
    "journey": "J04"
  },
  {
    "id": "F01-007",
    "title": "Backlog traceability",
    "epic": "Product and project foundation",
    "priority": "P1",
    "acceptance": "A reviewer follows a feature to its test result without manual reconciliation.",
    "screens": [
      "P02",
      "P04"
    ],
    "journey": "J01"
  },
  {
    "id": "F01-008",
    "title": "Controlled state transitions",
    "epic": "Product and project foundation",
    "priority": "P1",
    "acceptance": "An invalid transition fails with a useful reason and audit record.",
    "screens": [
      "P02",
      "P04"
    ],
    "journey": "J01"
  },
  {
    "id": "F04-003",
    "title": "Structured extraction",
    "epic": "Knowledge and data foundation",
    "priority": "P1",
    "acceptance": "A sampled requirement links to its original paragraph or table cell.",
    "screens": [
      "P06",
      "P07",
      "P08"
    ],
    "journey": "J01"
  },
  {
    "id": "F04-004",
    "title": "Canonical process taxonomy",
    "epic": "Knowledge and data foundation",
    "priority": "P1",
    "acceptance": "Every imported process has an unambiguous stable identifier.",
    "screens": [
      "P06",
      "P07",
      "P08"
    ],
    "journey": "J01"
  },
  {
    "id": "F04-005",
    "title": "SAP scope catalogue",
    "epic": "Knowledge and data foundation",
    "priority": "P1",
    "acceptance": "Unverified or deprecated IDs cannot be selected silently.",
    "screens": [
      "P06",
      "P07",
      "P08"
    ],
    "journey": "J01"
  },
  {
    "id": "F04-006",
    "title": "Configuration activity catalogue",
    "epic": "Knowledge and data foundation",
    "priority": "P1",
    "acceptance": "Activity IDs are distinct from scope IDs and internal feature IDs.",
    "screens": [
      "P06",
      "P07",
      "P08"
    ],
    "journey": "J01"
  },
  {
    "id": "F04-007",
    "title": "Release and localization metadata",
    "epic": "Knowledge and data foundation",
    "priority": "P1",
    "acceptance": "Retrieval excludes inapplicable country or superseded content.",
    "screens": [
      "P06",
      "P07",
      "P08"
    ],
    "journey": "J01"
  },
  {
    "id": "F04-008",
    "title": "Hybrid retrieval",
    "epic": "Knowledge and data foundation",
    "priority": "P1",
    "acceptance": "An exact activity-ID query resolves the correct eligible record.",
    "screens": [
      "P06",
      "P07",
      "P08"
    ],
    "journey": "J01"
  },
  {
    "id": "F04-009",
    "title": "Evidence lineage",
    "epic": "Knowledge and data foundation",
    "priority": "P1",
    "acceptance": "A proposal exposes the exact source revision used.",
    "screens": [
      "P06",
      "P07",
      "P08"
    ],
    "journey": "J01"
  },
  {
    "id": "F09-001",
    "title": "Structured agent contracts",
    "epic": "Agent runtime and AI governance",
    "priority": "P0",
    "acceptance": "Malformed or unsupported output is rejected before business-state changes.",
    "screens": [
      "P15",
      "P07",
      "P23"
    ],
    "journey": "J01"
  },
  {
    "id": "F09-002",
    "title": "Grounded recommendations",
    "epic": "Agent runtime and AI governance",
    "priority": "P0",
    "acceptance": "Every proposed decision has evidence or an explicit unresolved question.",
    "screens": [
      "P15",
      "P07",
      "P23"
    ],
    "journey": "J01"
  },
  {
    "id": "F09-003",
    "title": "Allowlisted agent tools",
    "epic": "Agent runtime and AI governance",
    "priority": "P0",
    "acceptance": "Agents cannot run arbitrary SQL, shell or unrestricted HTTP.",
    "screens": [
      "P15",
      "P07",
      "P23"
    ],
    "journey": "J01"
  },
  {
    "id": "F09-004",
    "title": "Model gateway",
    "epic": "Agent runtime and AI governance",
    "priority": "P0",
    "acceptance": "A disabled model endpoint cannot receive restricted project content.",
    "screens": [
      "P15",
      "P07",
      "P23"
    ],
    "journey": "J01"
  },
  {
    "id": "F09-005",
    "title": "Prompt injection defenses",
    "epic": "Agent runtime and AI governance",
    "priority": "P0",
    "acceptance": "Adversarial documents cannot alter permissions or approval rules.",
    "screens": [
      "P15",
      "P07",
      "P23"
    ],
    "journey": "J01"
  },
  {
    "id": "F09-006",
    "title": "Evaluation harness",
    "epic": "Agent runtime and AI governance",
    "priority": "P0",
    "acceptance": "Held-out expert-reviewed cases meet approved release thresholds.",
    "screens": [
      "P15",
      "P07",
      "P23"
    ],
    "journey": "J01"
  },
  {
    "id": "F09-007",
    "title": "Explainability record",
    "epic": "Agent runtime and AI governance",
    "priority": "P0",
    "acceptance": "Reviewers can understand a proposal without hidden model reasoning.",
    "screens": [
      "P15",
      "P07",
      "P23"
    ],
    "journey": "J01"
  },
  {
    "id": "F09-008",
    "title": "Run budgets and limits",
    "epic": "Agent runtime and AI governance",
    "priority": "P0",
    "acceptance": "Exceeding a budget stops the run and preserves usable evidence.",
    "screens": [
      "P15",
      "P07",
      "P23"
    ],
    "journey": "J01"
  },
  {
    "id": "F06-003",
    "title": "Review floorplans",
    "epic": "SAP Fiori workbench and experience",
    "priority": "P1",
    "acceptance": "Users can filter, review and navigate without losing context.",
    "screens": [
      "P01",
      "P02",
      "P09",
      "P11",
      "P15"
    ],
    "journey": "J01"
  },
  {
    "id": "F10-001",
    "title": "Requirement normalization",
    "epic": "Scoping agent",
    "priority": "P0",
    "acceptance": "Every candidate retains document version and exact source location.",
    "screens": [
      "P09",
      "P10",
      "P17",
      "P18"
    ],
    "journey": "J01"
  },
  {
    "id": "F10-002",
    "title": "Industry and country intake",
    "epic": "Scoping agent",
    "priority": "P0",
    "acceptance": "Unknown countries block localization approval.",
    "screens": [
      "P09",
      "P10",
      "P17",
      "P18"
    ],
    "journey": "J01"
  },
  {
    "id": "F06-004",
    "title": "Current proposed comparison",
    "epic": "SAP Fiori workbench and experience",
    "priority": "P1",
    "acceptance": "Changed and unchanged values are distinguishable and accessible.",
    "screens": [
      "P01",
      "P02",
      "P09",
      "P11",
      "P15"
    ],
    "journey": "J01"
  },
  {
    "id": "F06-005",
    "title": "Organization designer",
    "epic": "SAP Fiori workbench and experience",
    "priority": "P1",
    "acceptance": "A reviewer can identify invalid parent-child assignments.",
    "screens": [
      "P01",
      "P02",
      "P09",
      "P11",
      "P15"
    ],
    "journey": "J01"
  },
  {
    "id": "F06-006",
    "title": "Agent control panel",
    "epic": "SAP Fiori workbench and experience",
    "priority": "P1",
    "acceptance": "The panel distinguishes planned, executing, unknown and verified states.",
    "screens": [
      "P01",
      "P02",
      "P09",
      "P11",
      "P15"
    ],
    "journey": "J01"
  },
  {
    "id": "F06-007",
    "title": "Accessible interactions",
    "epic": "SAP Fiori workbench and experience",
    "priority": "P1",
    "acceptance": "Critical tasks pass agreed accessibility and keyboard checks.",
    "screens": [
      "P01",
      "P02",
      "P09",
      "P11",
      "P15"
    ],
    "journey": "J01"
  },
  {
    "id": "F06-008",
    "title": "Consistent failure states",
    "epic": "SAP Fiori workbench and experience",
    "priority": "P1",
    "acceptance": "Users can identify the failure cause and allowed next action.",
    "screens": [
      "P01",
      "P02",
      "P09",
      "P11",
      "P15"
    ],
    "journey": "J01"
  },
  {
    "id": "F10-003",
    "title": "Scope candidate generation",
    "epic": "Scoping agent",
    "priority": "P1",
    "acceptance": "Candidates cite catalog release and explain inclusion.",
    "screens": [
      "P09",
      "P10",
      "P17",
      "P18"
    ],
    "journey": "J01"
  },
  {
    "id": "F10-004",
    "title": "Scope identity validation",
    "epic": "Scoping agent",
    "priority": "P1",
    "acceptance": "Invalid or mismatched scope IDs cannot be approved.",
    "screens": [
      "P09",
      "P10",
      "P17",
      "P18"
    ],
    "journey": "J01"
  },
  {
    "id": "F10-005",
    "title": "Country availability checks",
    "epic": "Scoping agent",
    "priority": "P1",
    "acceptance": "Unavailable combinations raise a blocking exception.",
    "screens": [
      "P09",
      "P10",
      "P17",
      "P18"
    ],
    "journey": "J01"
  },
  {
    "id": "F10-006",
    "title": "Scope dependency graph",
    "epic": "Scoping agent",
    "priority": "P1",
    "acceptance": "Missing prerequisites appear before baseline approval.",
    "screens": [
      "P09",
      "P10",
      "P17",
      "P18"
    ],
    "journey": "J01"
  },
  {
    "id": "F10-007",
    "title": "Fit-to-standard assessment",
    "epic": "Scoping agent",
    "priority": "P1",
    "acceptance": "Each delta has rationale and business owner.",
    "screens": [
      "P09",
      "P10",
      "P17",
      "P18"
    ],
    "journey": "J01"
  },
  {
    "id": "F10-008",
    "title": "Scope review workbench",
    "epic": "Scoping agent",
    "priority": "P1",
    "acceptance": "Edits invalidate approvals for affected items.",
    "screens": [
      "P09",
      "P10",
      "P17",
      "P18"
    ],
    "journey": "J01"
  },
  {
    "id": "F10-009",
    "title": "Scope baseline approval",
    "epic": "Scoping agent",
    "priority": "P1",
    "acceptance": "Only signed baseline versions proceed to execution.",
    "screens": [
      "P09",
      "P10",
      "P17",
      "P18"
    ],
    "journey": "J01"
  },
  {
    "id": "F11-001",
    "title": "Enterprise structure intake",
    "epic": "Organization structure agent",
    "priority": "P0",
    "acceptance": "No invented legal names or tax registrations enter execution.",
    "screens": [
      "P11",
      "P12",
      "P17",
      "P20"
    ],
    "journey": "J02"
  },
  {
    "id": "F11-002",
    "title": "Organization object schema",
    "epic": "Organization structure agent",
    "priority": "P0",
    "acceptance": "Each supported object has required keys and lifecycle.",
    "screens": [
      "P11",
      "P12",
      "P17",
      "P20"
    ],
    "journey": "J02"
  },
  {
    "id": "F10-010",
    "title": "Scope activation package",
    "epic": "Scoping agent",
    "priority": "P1",
    "acceptance": "Package includes target, prerequisite checks and checksum.",
    "screens": [
      "P09",
      "P10",
      "P17",
      "P18"
    ],
    "journey": "J01"
  },
  {
    "id": "F10-011",
    "title": "Scoping evaluation suite",
    "epic": "Scoping agent",
    "priority": "P1",
    "acceptance": "No fabricated scope IDs and all critical prerequisites detected.",
    "screens": [
      "P09",
      "P10",
      "P17",
      "P18"
    ],
    "journey": "J01"
  },
  {
    "id": "F10-012",
    "title": "Scoping handoff contract",
    "epic": "Scoping agent",
    "priority": "P1",
    "acceptance": "Downstream agent rejects stale scope versions.",
    "screens": [
      "P09",
      "P10",
      "P17",
      "P18"
    ],
    "journey": "J01"
  },
  {
    "id": "F11-003",
    "title": "Assignment graph",
    "epic": "Organization structure agent",
    "priority": "P1",
    "acceptance": "Invalid or circular assignments are rejected.",
    "screens": [
      "P11",
      "P12",
      "P17",
      "P20"
    ],
    "journey": "J02"
  },
  {
    "id": "F11-004",
    "title": "Organization proposal",
    "epic": "Organization structure agent",
    "priority": "P1",
    "acceptance": "Each recommendation explains source and assumption.",
    "screens": [
      "P11",
      "P12",
      "P17",
      "P20"
    ],
    "journey": "J02"
  },
  {
    "id": "F11-005",
    "title": "Country and currency validation",
    "epic": "Organization structure agent",
    "priority": "P1",
    "acceptance": "Missing legal attributes block release.",
    "screens": [
      "P11",
      "P12",
      "P17",
      "P20"
    ],
    "journey": "J02"
  },
  {
    "id": "F11-006",
    "title": "Naming and number rules",
    "epic": "Organization structure agent",
    "priority": "P1",
    "acceptance": "Duplicate target identifiers are blocked.",
    "screens": [
      "P11",
      "P12",
      "P17",
      "P20"
    ],
    "journey": "J02"
  },
  {
    "id": "F11-007",
    "title": "Interactive organization designer",
    "epic": "Organization structure agent",
    "priority": "P1",
    "acceptance": "Changes create a new proposal version.",
    "screens": [
      "P11",
      "P12",
      "P17",
      "P20"
    ],
    "journey": "J02"
  },
  {
    "id": "F11-008",
    "title": "Structure impact analysis",
    "epic": "Organization structure agent",
    "priority": "P1",
    "acceptance": "Affected proposals require revalidation.",
    "screens": [
      "P11",
      "P12",
      "P17",
      "P20"
    ],
    "journey": "J02"
  },
  {
    "id": "F11-009",
    "title": "Organization approval",
    "epic": "Organization structure agent",
    "priority": "P1",
    "acceptance": "Maker cannot approve own executable package.",
    "screens": [
      "P11",
      "P12",
      "P17",
      "P20"
    ],
    "journey": "J02"
  },
  {
    "id": "F11-010",
    "title": "Organization execution package",
    "epic": "Organization structure agent",
    "priority": "P1",
    "acceptance": "Parents and prerequisites precede dependent assignments.",
    "screens": [
      "P11",
      "P12",
      "P17",
      "P20"
    ],
    "journey": "J02"
  },
  {
    "id": "F11-011",
    "title": "Organization readback",
    "epic": "Organization structure agent",
    "priority": "P1",
    "acceptance": "Mismatch stops dependent configuration.",
    "screens": [
      "P11",
      "P12",
      "P17",
      "P20"
    ],
    "journey": "J02"
  },
  {
    "id": "F11-012",
    "title": "Organization evaluation suite",
    "epic": "Organization structure agent",
    "priority": "P1",
    "acceptance": "All mandatory assignment errors are detected.",
    "screens": [
      "P11",
      "P12",
      "P17",
      "P20"
    ],
    "journey": "J02"
  },
  {
    "id": "F13-001",
    "title": "Activity discovery",
    "epic": "Configuration agent",
    "priority": "P0",
    "acceptance": "Activity identity is verified for release and target.",
    "screens": [
      "P13",
      "P14",
      "P17",
      "P20"
    ],
    "journey": "J02"
  },
  {
    "id": "F13-002",
    "title": "Configuration metadata contract",
    "epic": "Configuration agent",
    "priority": "P0",
    "acceptance": "Unknown fields cannot be dispatched.",
    "screens": [
      "P13",
      "P14",
      "P17",
      "P20"
    ],
    "journey": "J02"
  },
  {
    "id": "F13-003",
    "title": "Organization dependency binding",
    "epic": "Configuration agent",
    "priority": "P1",
    "acceptance": "Unverified company code references are blocked.",
    "screens": [
      "P13",
      "P14",
      "P17",
      "P20"
    ],
    "journey": "J02"
  },
  {
    "id": "F13-004",
    "title": "Current-state snapshot",
    "epic": "Configuration agent",
    "priority": "P1",
    "acceptance": "Snapshot records target and retrieval time.",
    "screens": [
      "P13",
      "P14",
      "P17",
      "P20"
    ],
    "journey": "J02"
  },
  {
    "id": "F13-005",
    "title": "Requirement to value mapping",
    "epic": "Configuration agent",
    "priority": "P1",
    "acceptance": "Each value cites requirement or explicit assumption.",
    "screens": [
      "P13",
      "P14",
      "P17",
      "P20"
    ],
    "journey": "J02"
  },
  {
    "id": "F13-006",
    "title": "Country rule routing",
    "epic": "Configuration agent",
    "priority": "P1",
    "acceptance": "Missing country evidence routes to specialist.",
    "screens": [
      "P13",
      "P14",
      "P17",
      "P20"
    ],
    "journey": "J02"
  },
  {
    "id": "F13-007",
    "title": "Field and cross-field validation",
    "epic": "Configuration agent",
    "priority": "P1",
    "acceptance": "Invalid combinations fail before approval.",
    "screens": [
      "P13",
      "P14",
      "P17",
      "P20"
    ],
    "journey": "J02"
  },
  {
    "id": "F13-008",
    "title": "Configuration diff review",
    "epic": "Configuration agent",
    "priority": "P1",
    "acceptance": "Reviewer sees additions, updates and omissions.",
    "screens": [
      "P13",
      "P14",
      "P17",
      "P20"
    ],
    "journey": "J02"
  },
  {
    "id": "F13-009",
    "title": "Risk classification",
    "epic": "Configuration agent",
    "priority": "P1",
    "acceptance": "High-risk changes require specialist approval.",
    "screens": [
      "P13",
      "P14",
      "P17",
      "P20"
    ],
    "journey": "J02"
  },
  {
    "id": "F13-010",
    "title": "Configuration approval",
    "epic": "Configuration agent",
    "priority": "P1",
    "acceptance": "Changed values cannot reuse previous approval.",
    "screens": [
      "P13",
      "P14",
      "P17",
      "P20"
    ],
    "journey": "J02"
  },
  {
    "id": "F13-011",
    "title": "Execution pathway selection",
    "epic": "Configuration agent",
    "priority": "P1",
    "acceptance": "Unsupported automation is reported as attended.",
    "screens": [
      "P13",
      "P14",
      "P17",
      "P20"
    ],
    "journey": "J02"
  },
  {
    "id": "F13-012",
    "title": "Configuration package handoff",
    "epic": "Configuration agent",
    "priority": "P1",
    "acceptance": "Package contains activity and requirement traceability.",
    "screens": [
      "P13",
      "P14",
      "P17",
      "P20"
    ],
    "journey": "J02"
  },
  {
    "id": "F13-013",
    "title": "Configuration verification",
    "epic": "Configuration agent",
    "priority": "P1",
    "acceptance": "Discrepancies block completion.",
    "screens": [
      "P13",
      "P14",
      "P17",
      "P20"
    ],
    "journey": "J02"
  },
  {
    "id": "F13-014",
    "title": "Configuration evaluation suite",
    "epic": "Configuration agent",
    "priority": "P1",
    "acceptance": "Zero critical value errors in approved pilot set.",
    "screens": [
      "P13",
      "P14",
      "P17",
      "P20"
    ],
    "journey": "J02"
  },
  {
    "id": "F14-003",
    "title": "Defect synchronization",
    "epic": "ALM and delivery traceability",
    "priority": "P1",
    "acceptance": "Duplicate events do not create duplicate defects.",
    "screens": [
      "P05",
      "P22",
      "P23"
    ],
    "journey": "J05"
  },
  {
    "id": "F14-004",
    "title": "Evidence export",
    "epic": "ALM and delivery traceability",
    "priority": "P1",
    "acceptance": "Bundle resolves every included requirement.",
    "screens": [
      "P05",
      "P22",
      "P23"
    ],
    "journey": "J05"
  }
]
```
<!-- END SPEC r1-features -->

### process-catalog

<!-- BEGIN SPEC process-catalog -->
```json
[
  {
    "requirementId": "BR-01-001",
    "testId": "TC-01-001",
    "domainId": "D01",
    "domain": "Product engineering and lifecycle management",
    "process": "Products assemblies components and spare parts",
    "priorSapMapping": "Product master management",
    "mappingClass": "C",
    "proposedRequirement": "Enforce one approved global product identity with plant-specific extensions and base-unit controls.",
    "proposedAcceptance": "Duplicate legacy products resolve to one target product; invalid base-unit conversion is rejected.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-01-002",
    "testId": "TC-01-002",
    "domainId": "D01",
    "domain": "Product engineering and lifecycle management",
    "process": "Engineering and manufacturing bills of material",
    "priorSapMapping": "Bills of material and production engineering",
    "mappingClass": "C",
    "proposedRequirement": "Release BOMs with quantities, units, alternatives and effective dates; prevent use of obsolete components.",
    "proposedAcceptance": "A dated production order selects the approved BOM and calculates expected component quantities.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-01-003",
    "testId": "TC-01-003",
    "domainId": "D01",
    "domain": "Product engineering and lifecycle management",
    "process": "Manufacturing operations and standard times",
    "priorSapMapping": "Routings",
    "mappingClass": "C",
    "proposedRequirement": "Maintain sequenced operations, setup and run times, control keys and costing relevance.",
    "proposedAcceptance": "An order derives the approved operation sequence and planned standard activity consumption.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-01-004",
    "testId": "TC-01-004",
    "domainId": "D01",
    "domain": "Product engineering and lifecycle management",
    "process": "Machines lines and labor resources",
    "priorSapMapping": "Work centers and capacities",
    "mappingClass": "C",
    "proposedRequirement": "Assign work centers to plants and cost centers with calendars, shifts and available capacities.",
    "proposedAcceptance": "Capacity demand and activity cost calculate against the correct plant calendar and cost center.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-01-005",
    "testId": "TC-01-005",
    "domainId": "D01",
    "domain": "Product engineering and lifecycle management",
    "process": "Alternative manufacturing methods",
    "priorSapMapping": "Production versions and alternative BOMs or routings",
    "mappingClass": "C",
    "proposedRequirement": "Select valid production versions by lot size and date; record alternative sourcing conditions.",
    "proposedAcceptance": "Boundary lot sizes and effective dates select the intended BOM and routing combination.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-01-006",
    "testId": "TC-01-006",
    "domainId": "D01",
    "domain": "Product engineering and lifecycle management",
    "process": "Engineering changes and effective dates",
    "priorSapMapping": "Engineering change management",
    "mappingClass": "V",
    "proposedRequirement": "Require engineering review of changes, effectivity and impact on open orders and purchased stock.",
    "proposedAcceptance": "A future-dated change preserves historical orders and identifies affected open commitments.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-01-007",
    "testId": "TC-01-007",
    "domainId": "D01",
    "domain": "Product engineering and lifecycle management",
    "process": "Specifications drawings and technical documents",
    "priorSapMapping": "Document management and engineering integration",
    "mappingClass": "V",
    "proposedRequirement": "Maintain controlled document versions and approved drawing references on relevant product structures.",
    "proposedAcceptance": "Operators retrieve the released revision; superseded drawings cannot be presented as current.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-01-008",
    "testId": "TC-01-008",
    "domainId": "D01",
    "domain": "Product engineering and lifecycle management",
    "process": "Customer specific product variants",
    "priorSapMapping": "Variant configuration",
    "mappingClass": "V",
    "proposedRequirement": "Validate characteristic combinations and derive valid components and operations for configured products.",
    "proposedAcceptance": "A valid option set derives the expected structure; an incompatible combination is blocked.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-01-009",
    "testId": "TC-01-009",
    "domainId": "D01",
    "domain": "Product engineering and lifecycle management",
    "process": "CAD or PLM handover to manufacturing",
    "priorSapMapping": "CAD and PLM integration",
    "mappingClass": "I",
    "proposedRequirement": "Transfer only approved engineering data using controlled identity and revision mappings.",
    "proposedAcceptance": "Repeated PLM messages do not create duplicate products or BOM revisions; failed transfers are recoverable.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-01-010",
    "testId": "TC-01-010",
    "domainId": "D01",
    "domain": "Product engineering and lifecycle management",
    "process": "New product development and introduction",
    "priorSapMapping": "Engineering projects and product development",
    "mappingClass": "V",
    "proposedRequirement": "Track development milestones, engineering costs and release readiness before commercial introduction.",
    "proposedAcceptance": "A product cannot enter the approved launch baseline without its engineering and costing evidence.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-01-011",
    "testId": "TC-01-011",
    "domainId": "D01",
    "domain": "Product engineering and lifecycle management",
    "process": "Product phase in replacement and phase out",
    "priorSapMapping": "Lifecycle and planning controls",
    "mappingClass": "V",
    "proposedRequirement": "Plan supersession dates and stock disposition while preserving service-part availability.",
    "proposedAcceptance": "New demand follows the approved successor rule and obsolete stock receives an assigned disposition.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-01-012",
    "testId": "TC-01-012",
    "domainId": "D01",
    "domain": "Product engineering and lifecycle management",
    "process": "Regulated product information and marketability",
    "priorSapMapping": "Product compliance",
    "mappingClass": "V",
    "proposedRequirement": "Determine applicable compliance checks before purchase, manufacture or shipment of regulated products.",
    "proposedAcceptance": "A restricted product is held from the affected transaction until compliance review is recorded.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-02-001",
    "testId": "TC-02-001",
    "domainId": "D02",
    "domain": "Demand planning and supply planning",
    "process": "Demand forecasts by product market and location",
    "priorSapMapping": "Demand planning with SAP IBP or another planning solution",
    "mappingClass": "I",
    "proposedRequirement": "Version demand by product, plant and period, distinguishing baseline forecasts from manual overrides.",
    "proposedAcceptance": "The approved forecast loads once and retains planner adjustments with author and period.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-02-002",
    "testId": "TC-02-002",
    "domainId": "D02",
    "domain": "Demand planning and supply planning",
    "process": "Group sales and operations planning",
    "priorSapMapping": "Sales and operations planning with SAP IBP or another solution",
    "mappingClass": "I",
    "proposedRequirement": "Reconcile demand, capacity and inventory assumptions into an approved group operating plan.",
    "proposedAcceptance": "The signed plan reconciles totals across entities and records unresolved supply constraints.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-02-003",
    "testId": "TC-02-003",
    "domainId": "D02",
    "domain": "Demand planning and supply planning",
    "process": "Planned independent requirements",
    "priorSapMapping": "Demand management",
    "mappingClass": "C",
    "proposedRequirement": "Maintain independent requirements with plant, planning version, quantity and consumption rules.",
    "proposedAcceptance": "A sales order consumes the appropriate requirement without duplicating total demand.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-02-004",
    "testId": "TC-02-004",
    "domainId": "D02",
    "domain": "Demand planning and supply planning",
    "process": "Production planning against sales orders",
    "priorSapMapping": "Sales order driven planning",
    "mappingClass": "C",
    "proposedRequirement": "Preserve customer-order linkage for dedicated production and procurement where selected.",
    "proposedAcceptance": "An order-specific requirement can be traced to its supply proposal and customer order.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-02-005",
    "testId": "TC-02-005",
    "domainId": "D02",
    "domain": "Demand planning and supply planning",
    "process": "Material shortages and replenishment calculations",
    "priorSapMapping": "Material requirements planning",
    "mappingClass": "C",
    "proposedRequirement": "Run MRP using approved horizons, procurement types and planning parameters.",
    "proposedAcceptance": "A seeded shortage generates the expected dated proposal; covered demand is not replenished twice.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-02-006",
    "testId": "TC-02-006",
    "domainId": "D02",
    "domain": "Demand planning and supply planning",
    "process": "Planned orders and purchase requisitions",
    "priorSapMapping": "MRP procurement proposals",
    "mappingClass": "C",
    "proposedRequirement": "Convert proposals only after planner review of source, dates, quantities and firming rules.",
    "proposedAcceptance": "Conversion preserves quantities and dates; repeat conversion cannot create duplicate supply.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-02-007",
    "testId": "TC-02-007",
    "domainId": "D02",
    "domain": "Demand planning and supply planning",
    "process": "Safety stock lot sizes and procurement lead times",
    "priorSapMapping": "Material planning parameters",
    "mappingClass": "C",
    "proposedRequirement": "Maintain safety stock, lot sizes and lead times by product and plant with accountable ownership.",
    "proposedAcceptance": "A controlled parameter change produces the expected replenishment result in simulation.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-02-008",
    "testId": "TC-02-008",
    "domainId": "D02",
    "domain": "Demand planning and supply planning",
    "process": "Replenishment between plants and companies",
    "priorSapMapping": "Stock transfers and intercompany supply planning",
    "mappingClass": "V",
    "proposedRequirement": "Plan transfers using supplying and receiving locations, lead times and intercompany applicability.",
    "proposedAcceptance": "The receiving shortage creates an eligible transfer proposal with an achievable receipt date.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-02-009",
    "testId": "TC-02-009",
    "domainId": "D02",
    "domain": "Demand planning and supply planning",
    "process": "Capacity evaluation against demand",
    "priorSapMapping": "Capacity planning and evaluation",
    "mappingClass": "V",
    "proposedRequirement": "Compare load against available capacity and route overloads to the responsible planner.",
    "proposedAcceptance": "An overloaded work center is visible and its approved resolution is retained.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-02-010",
    "testId": "TC-02-010",
    "domainId": "D02",
    "domain": "Demand planning and supply planning",
    "process": "Demand change impact assessment",
    "priorSapMapping": "Predictive material and resource planning",
    "mappingClass": "V",
    "proposedRequirement": "Simulate demand changes separately from operative planning until approved.",
    "proposedAcceptance": "A scenario quantifies material and capacity impacts without changing released transactions.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-02-011",
    "testId": "TC-02-011",
    "domainId": "D02",
    "domain": "Demand planning and supply planning",
    "process": "Detailed scheduling under machine constraints",
    "priorSapMapping": "Detailed or finite scheduling assessment",
    "mappingClass": "V",
    "proposedRequirement": "Sequence constrained operations using agreed resource and dependency rules if supported.",
    "proposedAcceptance": "The accepted schedule respects tested constraints; unsupported constraints become explicit gaps.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-02-012",
    "testId": "TC-02-012",
    "domainId": "D02",
    "domain": "Demand planning and supply planning",
    "process": "Shortage delay and excess inventory monitoring",
    "priorSapMapping": "Planning exceptions and analytics",
    "mappingClass": "C",
    "proposedRequirement": "Assign material shortages, late supplies and excess stock exceptions to named planners.",
    "proposedAcceptance": "Each seeded exception appears with an owner, due date and documented disposition.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-03-001",
    "testId": "TC-03-001",
    "domainId": "D03",
    "domain": "Sourcing and procurement",
    "process": "Supplier creation and maintenance",
    "priorSapMapping": "Supplier business partner management",
    "mappingClass": "C",
    "proposedRequirement": "Approve supplier identity, tax and purchasing data before the supplier can be used.",
    "proposedAcceptance": "A duplicate or incomplete supplier is held; approved purchasing and finance roles are usable.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-03-002",
    "testId": "TC-03-002",
    "domainId": "D03",
    "domain": "Sourcing and procurement",
    "process": "Quotation requests and offer comparison",
    "priorSapMapping": "Requests for quotation and quotation processing",
    "mappingClass": "C",
    "proposedRequirement": "Compare quotations on normalized price, currency, lead time and commercial conditions.",
    "proposedAcceptance": "Award evidence explains the selected offer using comparable landed commercial assumptions.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-03-003",
    "testId": "TC-03-003",
    "domainId": "D03",
    "domain": "Sourcing and procurement",
    "process": "Purchasing contracts and negotiated prices",
    "priorSapMapping": "Purchase contracts and purchasing conditions",
    "mappingClass": "C",
    "proposedRequirement": "Maintain contract validity, target quantities or values and controlled price conditions.",
    "proposedAcceptance": "Orders use valid contract terms and expose expiry or exhausted target exceptions.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-03-004",
    "testId": "TC-03-004",
    "domainId": "D03",
    "domain": "Sourcing and procurement",
    "process": "Approved sources of supply",
    "priorSapMapping": "Source determination and purchasing master data",
    "mappingClass": "C",
    "proposedRequirement": "Determine eligible sources from approved purchasing records and sourcing restrictions.",
    "proposedAcceptance": "A blocked source is excluded and a valid source is selected for the test material.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-03-005",
    "testId": "TC-03-005",
    "domainId": "D03",
    "domain": "Sourcing and procurement",
    "process": "Raw material and component purchases",
    "priorSapMapping": "Direct material procurement",
    "mappingClass": "C",
    "proposedRequirement": "Procure stock materials with plant, quantity, delivery date, price and receipt requirements.",
    "proposedAcceptance": "An approved purchase order produces a matching receipt and a traceable supplier liability.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-03-006",
    "testId": "TC-03-006",
    "domainId": "D03",
    "domain": "Sourcing and procurement",
    "process": "Consumables and maintenance material purchases",
    "priorSapMapping": "Indirect procurement",
    "mappingClass": "C",
    "proposedRequirement": "Require account assignment for consumption purchases with valid cost objects.",
    "proposedAcceptance": "A purchase without a valid cost center or other required assignment is rejected.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-03-007",
    "testId": "TC-03-007",
    "domainId": "D03",
    "domain": "Sourcing and procurement",
    "process": "External service purchases",
    "priorSapMapping": "Service purchasing and service entry",
    "mappingClass": "C",
    "proposedRequirement": "Accept procured services only against authorized orders and evidenced service performance.",
    "proposedAcceptance": "Invoice processing references an approved service entry and rejects unauthorized service acceptance.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-03-008",
    "testId": "TC-03-008",
    "domainId": "D03",
    "domain": "Sourcing and procurement",
    "process": "Capital equipment purchases",
    "priorSapMapping": "Asset procurement",
    "mappingClass": "C",
    "proposedRequirement": "Route equipment purchases to the approved asset or investment assignment.",
    "proposedAcceptance": "Receipt and invoice post to the intended asset or asset-under-construction process.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-03-009",
    "testId": "TC-03-009",
    "domainId": "D03",
    "domain": "Sourcing and procurement",
    "process": "Requisition and purchase order approvals",
    "priorSapMapping": "Operational procurement and flexible workflows",
    "mappingClass": "C",
    "proposedRequirement": "Apply approval routing by entity, value, category and exception conditions without self-approval.",
    "proposedAcceptance": "Below-threshold, boundary and above-threshold orders route correctly; rejection prevents release.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-03-010",
    "testId": "TC-03-010",
    "domainId": "D03",
    "domain": "Sourcing and procurement",
    "process": "Goods receipt against purchase orders",
    "priorSapMapping": "Goods receipt and inventory integration",
    "mappingClass": "C",
    "proposedRequirement": "Post receipts against open order quantities with approved tolerance and inspection controls.",
    "proposedAcceptance": "An over-receipt outside tolerance is rejected and accepted quantities update stock correctly.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-03-011",
    "testId": "TC-03-011",
    "domainId": "D03",
    "domain": "Sourcing and procurement",
    "process": "Invoice matching and verification",
    "priorSapMapping": "Supplier invoice management",
    "mappingClass": "C",
    "proposedRequirement": "Match invoice quantity, price and tax against order and receipt or service evidence.",
    "proposedAcceptance": "A variance outside tolerance is blocked for payment until independent resolution.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-03-012",
    "testId": "TC-03-012",
    "domainId": "D03",
    "domain": "Sourcing and procurement",
    "process": "Supplier returns credit notes and differences",
    "priorSapMapping": "Purchasing returns and invoice adjustments",
    "mappingClass": "C",
    "proposedRequirement": "Link returns and supplier credits to original receipts and invoices.",
    "proposedAcceptance": "Return quantity, stock reduction and credit value reconcile to the originating documents.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-03-013",
    "testId": "TC-03-013",
    "domainId": "D03",
    "domain": "Sourcing and procurement",
    "process": "Components supplied to subcontractors",
    "priorSapMapping": "Subcontracting procurement",
    "mappingClass": "V",
    "proposedRequirement": "Track components issued to subcontractors and reconcile their consumption against receipts.",
    "proposedAcceptance": "Subcontract stock and consumed component quantities reconcile after partial and final receipts.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-03-014",
    "testId": "TC-03-014",
    "domainId": "D03",
    "domain": "Sourcing and procurement",
    "process": "Consumption of supplier owned stock",
    "priorSapMapping": "Supplier consignment",
    "mappingClass": "V",
    "proposedRequirement": "Distinguish supplier-owned consignment stock from company-valued stock until consumption.",
    "proposedAcceptance": "Consumption creates the expected liability without valuing unconsumed supplier-owned stock as owned.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-03-015",
    "testId": "TC-03-015",
    "domainId": "D03",
    "domain": "Sourcing and procurement",
    "process": "Supplier direct delivery to customer",
    "priorSapMapping": "Third party order processing",
    "mappingClass": "V",
    "proposedRequirement": "Link customer demand to supplier direct-delivery procurement and confirmation evidence.",
    "proposedAcceptance": "The supplier delivery and invoice can be traced to the correct customer sales order.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-03-016",
    "testId": "TC-03-016",
    "domainId": "D03",
    "domain": "Sourcing and procurement",
    "process": "Supplier delivery price and quality evaluation",
    "priorSapMapping": "Supplier evaluation and procurement analytics",
    "mappingClass": "C",
    "proposedRequirement": "Evaluate suppliers using agreed delivery, price and quality definitions and periods.",
    "proposedAcceptance": "Scorecard results reproduce source transactions for the selected supplier and evaluation period.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-03-017",
    "testId": "TC-03-017",
    "domainId": "D03",
    "domain": "Sourcing and procurement",
    "process": "Supplier onboarding qualification and sourcing events",
    "priorSapMapping": "SAP Ariba or other supplier collaboration solution",
    "mappingClass": "I",
    "proposedRequirement": "Require onboarding checks and qualification decisions before external supplier activation.",
    "proposedAcceptance": "An unqualified supplier remains ineligible; approved integration updates the intended record.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-03-018",
    "testId": "TC-03-018",
    "domainId": "D03",
    "domain": "Sourcing and procurement",
    "process": "Electronic orders confirmations and invoices",
    "priorSapMapping": "SAP Business Network EDI or integration services",
    "mappingClass": "I",
    "proposedRequirement": "Exchange purchasing documents with message identifiers, acknowledgement and replay controls.",
    "proposedAcceptance": "A duplicate message is suppressed and an unsuccessful exchange enters an owned exception queue.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-04-001",
    "testId": "TC-04-001",
    "domainId": "D04",
    "domain": "Manufacturing execution",
    "process": "Standard products manufactured for inventory",
    "priorSapMapping": "Make to stock production",
    "mappingClass": "C",
    "proposedRequirement": "Plan and manufacture standard inventory using approved production versions and order controls.",
    "proposedAcceptance": "A representative stock order records components, operations, finished receipt and actual costs.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-04-002",
    "testId": "TC-04-002",
    "domainId": "D04",
    "domain": "Manufacturing execution",
    "process": "Products manufactured against customer orders",
    "priorSapMapping": "Make to order production",
    "mappingClass": "C",
    "proposedRequirement": "Segregate customer-specific supply and costs for selected make-to-order products.",
    "proposedAcceptance": "Finished output and order costs remain traceable to the originating customer demand.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-04-003",
    "testId": "TC-04-003",
    "domainId": "D04",
    "domain": "Manufacturing execution",
    "process": "Equipment assembled from standard modules",
    "priorSapMapping": "Assembly and customer order driven production",
    "mappingClass": "V",
    "proposedRequirement": "Assemble approved modules to customer requirements without duplicating engineering masters.",
    "proposedAcceptance": "The test assembly selects valid modules and preserves its sales-order linkage.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-04-004",
    "testId": "TC-04-004",
    "domainId": "D04",
    "domain": "Manufacturing execution",
    "process": "Configurable products",
    "priorSapMapping": "Configurable manufacturing",
    "mappingClass": "V",
    "proposedRequirement": "Carry selected configuration characteristics through sales, planning and production.",
    "proposedAcceptance": "The manufactured BOM and operations agree with the approved customer configuration.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-04-005",
    "testId": "TC-04-005",
    "domainId": "D04",
    "domain": "Manufacturing execution",
    "process": "Unique customer equipment engineering and manufacture",
    "priorSapMapping": "Project oriented or engineer to order assessment",
    "mappingClass": "V",
    "proposedRequirement": "Coordinate customer engineering, project milestones, procurement and production dependencies.",
    "proposedAcceptance": "A pilot engineered order has an approved feasible end-to-end design before scope commitment.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-04-006",
    "testId": "TC-04-006",
    "domainId": "D04",
    "domain": "Manufacturing execution",
    "process": "High volume repetitive component production",
    "priorSapMapping": "Repetitive manufacturing",
    "mappingClass": "V",
    "proposedRequirement": "Control repetitive production quantities, reporting points and material consumption where applicable.",
    "proposedAcceptance": "Periodic output and consumption reconcile to production accounting for the selected line.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-04-007",
    "testId": "TC-04-007",
    "domainId": "D04",
    "domain": "Manufacturing execution",
    "process": "Process based intermediates such as coatings",
    "priorSapMapping": "Process manufacturing",
    "mappingClass": "V",
    "proposedRequirement": "Use approved recipes, resources and process-order controls for relevant process materials.",
    "proposedAcceptance": "A pilot batch records planned inputs, yield, quality disposition and finished receipt.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-04-008",
    "testId": "TC-04-008",
    "domainId": "D04",
    "domain": "Manufacturing execution",
    "process": "Planned order conversion",
    "priorSapMapping": "Production order management",
    "mappingClass": "C",
    "proposedRequirement": "Convert only reviewed planned orders and retain source requirements and production versions.",
    "proposedAcceptance": "A planned order converts once with the expected dates, quantity and master data.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-04-009",
    "testId": "TC-04-009",
    "domainId": "D04",
    "domain": "Manufacturing execution",
    "process": "Production release and control",
    "priorSapMapping": "Production order release",
    "mappingClass": "C",
    "proposedRequirement": "Verify production readiness before release, including approved structures and required materials.",
    "proposedAcceptance": "An order with an unresolved release-blocking condition cannot proceed as executable work.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-04-010",
    "testId": "TC-04-010",
    "domainId": "D04",
    "domain": "Manufacturing execution",
    "process": "Material staging to production",
    "priorSapMapping": "Material staging and inventory movements",
    "mappingClass": "C",
    "proposedRequirement": "Stage only authorized materials in the required quantities to the production supply location.",
    "proposedAcceptance": "Staged quantity and source-stock reduction reconcile to the reservation and supply location.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-04-011",
    "testId": "TC-04-011",
    "domainId": "D04",
    "domain": "Manufacturing execution",
    "process": "Component issues and consumption recording",
    "priorSapMapping": "Goods issues and backflushing",
    "mappingClass": "C",
    "proposedRequirement": "Record component issues or controlled backflush with batch and quantity references.",
    "proposedAcceptance": "Consumption reconciles to confirmations; failed postings are visible and corrected once.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-04-012",
    "testId": "TC-04-012",
    "domainId": "D04",
    "domain": "Manufacturing execution",
    "process": "Quantities labor and machine time confirmation",
    "priorSapMapping": "Production confirmations",
    "mappingClass": "C",
    "proposedRequirement": "Capture good yield, scrap, labor and machine time at the required operations.",
    "proposedAcceptance": "A partial confirmation updates remaining quantity and costs without closing unfinished work.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-04-013",
    "testId": "TC-04-013",
    "domainId": "D04",
    "domain": "Manufacturing execution",
    "process": "Completed product receipt",
    "priorSapMapping": "Production goods receipt",
    "mappingClass": "C",
    "proposedRequirement": "Receive finished output with required serial or batch identifiers and quality status.",
    "proposedAcceptance": "Stock increases by accepted yield with the correct valuation and inspection classification.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-04-014",
    "testId": "TC-04-014",
    "domainId": "D04",
    "domain": "Manufacturing execution",
    "process": "Scrap yield loss and deviations",
    "priorSapMapping": "Production execution and cost reporting",
    "mappingClass": "C",
    "proposedRequirement": "Classify losses using agreed reasons and assign material variances for review.",
    "proposedAcceptance": "Scrap quantity and associated cost can be reported by order, material and reason.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-04-015",
    "testId": "TC-04-015",
    "domainId": "D04",
    "domain": "Manufacturing execution",
    "process": "Rework processing",
    "priorSapMapping": "Rework scenarios",
    "mappingClass": "V",
    "proposedRequirement": "Authorize rework, define extra operations and preserve original product traceability.",
    "proposedAcceptance": "Rework cost and outcome are linked to the original stock or work-in-process record.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-04-016",
    "testId": "TC-04-016",
    "domainId": "D04",
    "domain": "Manufacturing execution",
    "process": "Outsourced production operations",
    "priorSapMapping": "External processing",
    "mappingClass": "V",
    "proposedRequirement": "Procure external operations with due dates and completion evidence linked to the order.",
    "proposedAcceptance": "The external service receipt and charge update the intended production operation.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-04-017",
    "testId": "TC-04-017",
    "domainId": "D04",
    "domain": "Manufacturing execution",
    "process": "Batch and serial tracking in production",
    "priorSapMapping": "Batch and serial number management",
    "mappingClass": "V",
    "proposedRequirement": "Assign required batches and serials and retain component-to-output traceability evidence.",
    "proposedAcceptance": "A selected output serial or batch can be traced to relevant component and order records.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-04-018",
    "testId": "TC-04-018",
    "domainId": "D04",
    "domain": "Manufacturing execution",
    "process": "Production order closure and settlement",
    "priorSapMapping": "Production accounting and settlement",
    "mappingClass": "C",
    "proposedRequirement": "Close orders only after quantity, cost, work-in-process and exception reconciliation.",
    "proposedAcceptance": "A completed pilot order has reviewed variances and no unexplained unsettled balances.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-04-019",
    "testId": "TC-04-019",
    "domainId": "D04",
    "domain": "Manufacturing execution",
    "process": "Machine signals operator instructions and detailed events",
    "priorSapMapping": "SAP Digital Manufacturing or another MES",
    "mappingClass": "I",
    "proposedRequirement": "Exchange orders, confirmations and shop-floor events with the MES using controlled interfaces.",
    "proposedAcceptance": "Out-of-order or repeated events do not duplicate confirmations or inventory movements.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-05-001",
    "testId": "TC-05-001",
    "domainId": "D05",
    "domain": "Quality management",
    "process": "Inspection characteristics methods and plans",
    "priorSapMapping": "Quality planning",
    "mappingClass": "C",
    "proposedRequirement": "Define inspection characteristics, sampling and acceptance limits under quality ownership.",
    "proposedAcceptance": "The released inspection plan contains approved limits, methods and sampling rules.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-05-002",
    "testId": "TC-05-002",
    "domainId": "D05",
    "domain": "Quality management",
    "process": "Purchased material inspection on receipt",
    "priorSapMapping": "Procurement quality inspection",
    "mappingClass": "C",
    "proposedRequirement": "Create receipt inspections for quality-relevant purchased materials before unrestricted use.",
    "proposedAcceptance": "The test receipt remains in the required inspection status until an authorized decision.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-05-003",
    "testId": "TC-05-003",
    "domainId": "D05",
    "domain": "Quality management",
    "process": "Inspection during manufacturing",
    "priorSapMapping": "In process inspection",
    "mappingClass": "V",
    "proposedRequirement": "Capture operation-related quality evidence at designated manufacturing checkpoints.",
    "proposedAcceptance": "A failed in-process result is visible before the downstream release decision.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-05-004",
    "testId": "TC-05-004",
    "domainId": "D05",
    "domain": "Quality management",
    "process": "Finished product inspection",
    "priorSapMapping": "Production quality inspection",
    "mappingClass": "C",
    "proposedRequirement": "Inspect completed production and prevent unauthorized release of rejected output.",
    "proposedAcceptance": "Rejected test output remains unavailable for the affected fulfillment process.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-05-005",
    "testId": "TC-05-005",
    "domainId": "D05",
    "domain": "Quality management",
    "process": "Measurement and inspection result capture",
    "priorSapMapping": "Results recording",
    "mappingClass": "C",
    "proposedRequirement": "Capture measured values, units, inspector and inspection references.",
    "proposedAcceptance": "A result outside the approved range is identified and retained with its measurement context.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-05-006",
    "testId": "TC-05-006",
    "domainId": "D05",
    "domain": "Quality management",
    "process": "Acceptance rejection blocking and release",
    "priorSapMapping": "Usage decisions and stock disposition",
    "mappingClass": "C",
    "proposedRequirement": "Require an authorized usage decision and record stock disposition.",
    "proposedAcceptance": "A decision moves only the authorized quantity to the intended stock category.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-05-007",
    "testId": "TC-05-007",
    "domainId": "D05",
    "domain": "Quality management",
    "process": "Defect and nonconformance recording",
    "priorSapMapping": "Defect and quality issue management",
    "mappingClass": "V",
    "proposedRequirement": "Record nonconformances with product, location, severity and containment ownership.",
    "proposedAcceptance": "A seeded defect can be traced to stock or an order and an accountable disposition.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-05-008",
    "testId": "TC-05-008",
    "domainId": "D05",
    "domain": "Quality management",
    "process": "Supplier quality complaints",
    "priorSapMapping": "Quality notifications and supplier processes",
    "mappingClass": "V",
    "proposedRequirement": "Link supplier complaints to the material, receipt and supplier response.",
    "proposedAcceptance": "Complaint evidence identifies the supplier receipt and tracks corrective follow-up.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-05-009",
    "testId": "TC-05-009",
    "domainId": "D05",
    "domain": "Quality management",
    "process": "Customer quality complaints",
    "priorSapMapping": "Quality and returns processes",
    "mappingClass": "V",
    "proposedRequirement": "Link customer complaints to deliveries and product traceability evidence.",
    "proposedAcceptance": "The affected customer delivery and returned item are identifiable from the complaint.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-05-010",
    "testId": "TC-05-010",
    "domainId": "D05",
    "domain": "Quality management",
    "process": "Corrective actions and root cause investigation",
    "priorSapMapping": "Quality issue resolution",
    "mappingClass": "V",
    "proposedRequirement": "Assign root cause and corrective actions with due dates and closure evidence.",
    "proposedAcceptance": "An action cannot be considered complete without reviewed implementation evidence.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-05-011",
    "testId": "TC-05-011",
    "domainId": "D05",
    "domain": "Quality management",
    "process": "Quality certificate management",
    "priorSapMapping": "Quality certificate scenarios",
    "mappingClass": "V",
    "proposedRequirement": "Generate required certificates from approved inspection data and customer requirements.",
    "proposedAcceptance": "The certificate references the correct batch, results and recipient without unapproved values.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-05-012",
    "testId": "TC-05-012",
    "domainId": "D05",
    "domain": "Quality management",
    "process": "Affected batch and serial tracking",
    "priorSapMapping": "Traceability and logistics integration",
    "mappingClass": "V",
    "proposedRequirement": "Identify affected stock, orders and deliveries from selected batch or serial references.",
    "proposedAcceptance": "A traceability drill identifies impacted quantities and transaction references.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-05-013",
    "testId": "TC-05-013",
    "domainId": "D05",
    "domain": "Quality management",
    "process": "Advanced laboratory statistical quality and enterprise CAPA",
    "priorSapMapping": "Specialist quality or laboratory systems",
    "mappingClass": "I",
    "proposedRequirement": "Integrate specialist laboratory or CAPA systems only with approved ownership and data contracts.",
    "proposedAcceptance": "Imported results preserve sample identity and rejected messages remain recoverable.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-06-001",
    "testId": "TC-06-001",
    "domainId": "D06",
    "domain": "Inventory and warehouse operations",
    "process": "Purchased manufactured and transferred goods receipt",
    "priorSapMapping": "Inventory goods receipts",
    "mappingClass": "C",
    "proposedRequirement": "Classify each receipt by origin, location, quantity, unit and ownership.",
    "proposedAcceptance": "Receipt totals agree to purchase, production or transfer source documents.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-06-002",
    "testId": "TC-06-002",
    "domainId": "D06",
    "domain": "Inventory and warehouse operations",
    "process": "Inventory by plant and storage location",
    "priorSapMapping": "Inventory management",
    "mappingClass": "C",
    "proposedRequirement": "Maintain product stock by plant and storage location with approved valuation treatment.",
    "proposedAcceptance": "Stock balances reconcile by product, location and stock category.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-06-003",
    "testId": "TC-06-003",
    "domainId": "D06",
    "domain": "Inventory and warehouse operations",
    "process": "Warehouse bin putaway",
    "priorSapMapping": "Warehouse management",
    "mappingClass": "V",
    "proposedRequirement": "Direct putaway using the selected warehouse design and bin rules.",
    "proposedAcceptance": "Received goods reach an authorized destination bin with an auditable movement.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-06-004",
    "testId": "TC-06-004",
    "domainId": "D06",
    "domain": "Inventory and warehouse operations",
    "process": "Transfers between locations and plants",
    "priorSapMapping": "Transfer postings and stock transfers",
    "mappingClass": "C",
    "proposedRequirement": "Record source, destination and transit status for plant or storage-location transfers.",
    "proposedAcceptance": "Dispatch and receipt reconcile; unexplained in-transit differences are flagged.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-06-005",
    "testId": "TC-06-005",
    "domainId": "D06",
    "domain": "Inventory and warehouse operations",
    "process": "Production component supply",
    "priorSapMapping": "Production supply and warehouse integration",
    "mappingClass": "V",
    "proposedRequirement": "Supply production with reservations and warehouse tasks where selected.",
    "proposedAcceptance": "Staged materials agree to production demand and prevent duplicate supply postings.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-06-006",
    "testId": "TC-06-006",
    "domainId": "D06",
    "domain": "Inventory and warehouse operations",
    "process": "Customer order picking packing and dispatch",
    "priorSapMapping": "Outbound delivery and warehouse processing",
    "mappingClass": "C",
    "proposedRequirement": "Pick and pack released deliveries using required quantities and identification controls.",
    "proposedAcceptance": "Goods issue is limited to the physically confirmed delivery quantity.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-06-007",
    "testId": "TC-06-007",
    "domainId": "D06",
    "domain": "Inventory and warehouse operations",
    "process": "Picking area replenishment",
    "priorSapMapping": "Warehouse replenishment",
    "mappingClass": "V",
    "proposedRequirement": "Maintain replenishment quantities and triggers for designated picking areas.",
    "proposedAcceptance": "A threshold breach generates one eligible replenishment action with correct quantities.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-06-008",
    "testId": "TC-06-008",
    "domainId": "D06",
    "domain": "Inventory and warehouse operations",
    "process": "Batches serial numbers and handling units",
    "priorSapMapping": "Logistics identification and tracking",
    "mappingClass": "V",
    "proposedRequirement": "Preserve batch, serial and handling-unit identity across supported warehouse movements.",
    "proposedAcceptance": "A sampled unit can be traced from receipt through its current location and shipment.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-06-009",
    "testId": "TC-06-009",
    "domainId": "D06",
    "domain": "Inventory and warehouse operations",
    "process": "Unrestricted inspection and blocked stock",
    "priorSapMapping": "Stock category management",
    "mappingClass": "C",
    "proposedRequirement": "Segregate unrestricted, inspection, blocked and other relevant stock categories.",
    "proposedAcceptance": "A user cannot pick stock whose category prohibits the intended movement.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-06-010",
    "testId": "TC-06-010",
    "domainId": "D06",
    "domain": "Inventory and warehouse operations",
    "process": "Physical counts and cycle counting",
    "priorSapMapping": "Physical inventory",
    "mappingClass": "C",
    "proposedRequirement": "Execute controlled physical counts with independent difference review.",
    "proposedAcceptance": "Count differences post only after authorization and reconcile inventory and accounting.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-06-011",
    "testId": "TC-06-011",
    "domainId": "D06",
    "domain": "Inventory and warehouse operations",
    "process": "Damaged obsolete or expired stock disposal",
    "priorSapMapping": "Goods movements and inventory accounting",
    "mappingClass": "C",
    "proposedRequirement": "Approve scrap or write-off with reason codes and value impact.",
    "proposedAcceptance": "An authorized disposal reduces the correct stock and posts the expected financial effect.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-06-012",
    "testId": "TC-06-012",
    "domainId": "D06",
    "domain": "Inventory and warehouse operations",
    "process": "Aging slow moving and excess stock analysis",
    "priorSapMapping": "Inventory analytics",
    "mappingClass": "C",
    "proposedRequirement": "Report inventory age and movement using agreed aging and obsolescence definitions.",
    "proposedAcceptance": "Report totals reconcile to stock balances and reproduce the age basis for sample items.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-06-013",
    "testId": "TC-06-013",
    "domainId": "D06",
    "domain": "Inventory and warehouse operations",
    "process": "Automated warehouses conveyors and robotics",
    "priorSapMapping": "Warehouse automation integration",
    "mappingClass": "I",
    "proposedRequirement": "Integrate automation equipment using acknowledged warehouse commands and status feedback.",
    "proposedAcceptance": "A failed equipment command is recoverable without losing or duplicating stock movements.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-06-014",
    "testId": "TC-06-014",
    "domainId": "D06",
    "domain": "Inventory and warehouse operations",
    "process": "Highly complex warehouse operations",
    "priorSapMapping": "Detailed fit assessment or separate warehouse solution",
    "mappingClass": "V",
    "proposedRequirement": "Validate complex warehouse requirements before selecting an embedded or separate solution.",
    "proposedAcceptance": "A representative complex scenario passes the fit assessment or becomes an approved integration gap.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-07-001",
    "testId": "TC-07-001",
    "domainId": "D07",
    "domain": "Sales and order fulfillment",
    "process": "Customers sales areas and commercial terms",
    "priorSapMapping": "Customer business partner and sales master data",
    "mappingClass": "C",
    "proposedRequirement": "Maintain customer finance and sales-area data with partner functions and commercial controls.",
    "proposedAcceptance": "Orders use the approved sold-to, ship-to, bill-to and payer assignments.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-07-002",
    "testId": "TC-07-002",
    "domainId": "D07",
    "domain": "Sales and order fulfillment",
    "process": "Customer quotations",
    "priorSapMapping": "Sales quotation processing",
    "mappingClass": "C",
    "proposedRequirement": "Prepare quotations with product, price, delivery assumptions and validity.",
    "proposedAcceptance": "A converted quotation retains agreed commercial terms and its source reference.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-07-003",
    "testId": "TC-07-003",
    "domainId": "D07",
    "domain": "Sales and order fulfillment",
    "process": "Contracts and scheduling agreements",
    "priorSapMapping": "Sales contract and agreement processing",
    "mappingClass": "V",
    "proposedRequirement": "Manage contractual commitments and delivery schedules with validity controls.",
    "proposedAcceptance": "A release references the correct agreement and updates the relevant commitment.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-07-004",
    "testId": "TC-07-004",
    "domainId": "D07",
    "domain": "Sales and order fulfillment",
    "process": "Standard product sales from stock",
    "priorSapMapping": "Sell from stock processing",
    "mappingClass": "C",
    "proposedRequirement": "Sell available standard stock using approved pricing, delivery and billing rules.",
    "proposedAcceptance": "A pilot order completes delivery, inventory relief, billing and receivables posting.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-07-005",
    "testId": "TC-07-005",
    "domainId": "D07",
    "domain": "Sales and order fulfillment",
    "process": "Sales linked to customer specific production",
    "priorSapMapping": "Make to order sales integration",
    "mappingClass": "C",
    "proposedRequirement": "Link customer orders to dedicated manufacturing and fulfillment milestones.",
    "proposedAcceptance": "Customer demand and finished output reconcile through delivery and invoicing.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-07-006",
    "testId": "TC-07-006",
    "domainId": "D07",
    "domain": "Sales and order fulfillment",
    "process": "Configurable equipment sales",
    "priorSapMapping": "Configurable sales order processing",
    "mappingClass": "V",
    "proposedRequirement": "Validate configured equipment choices and carry them into the execution structure.",
    "proposedAcceptance": "An invalid characteristic combination is rejected before order release.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-07-007",
    "testId": "TC-07-007",
    "domainId": "D07",
    "domain": "Sales and order fulfillment",
    "process": "Spare parts and consumables sales",
    "priorSapMapping": "Standard sales and distribution",
    "mappingClass": "C",
    "proposedRequirement": "Sell spare parts with compatible product identity, availability and service references.",
    "proposedAcceptance": "The selected replacement part is valid for the sample equipment and can be fulfilled.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-07-008",
    "testId": "TC-07-008",
    "domainId": "D07",
    "domain": "Sales and order fulfillment",
    "process": "Availability and delivery date promises",
    "priorSapMapping": "Availability checking and order promising",
    "mappingClass": "V",
    "proposedRequirement": "Promise dates using the selected availability rules and eligible stock or supply.",
    "proposedAcceptance": "The promised date reproduces the agreed availability scenario and shortage behavior.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-07-009",
    "testId": "TC-07-009",
    "domainId": "D07",
    "domain": "Sales and order fulfillment",
    "process": "Prices discounts freight and taxes",
    "priorSapMapping": "Sales pricing and tax determination",
    "mappingClass": "C",
    "proposedRequirement": "Determine price, discounts, freight and tax from approved conditions.",
    "proposedAcceptance": "The invoice reproduces expected pricing and tax for a controlled test dataset.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-07-010",
    "testId": "TC-07-010",
    "domainId": "D07",
    "domain": "Sales and order fulfillment",
    "process": "Customer credit exposure checks",
    "priorSapMapping": "Credit management",
    "mappingClass": "V",
    "proposedRequirement": "Apply credit policies and independent release of eligible credit exceptions.",
    "proposedAcceptance": "An over-limit order is held and can be released only by an authorized credit persona.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-07-011",
    "testId": "TC-07-011",
    "domainId": "D07",
    "domain": "Sales and order fulfillment",
    "process": "Deliveries picking packing and goods issue",
    "priorSapMapping": "Delivery management",
    "mappingClass": "C",
    "proposedRequirement": "Create deliveries and confirm picking, packing and goods issue quantities.",
    "proposedAcceptance": "Physical shipped quantity agrees to the posted delivery and inventory movement.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-07-012",
    "testId": "TC-07-012",
    "domainId": "D07",
    "domain": "Sales and order fulfillment",
    "process": "Customer invoicing and receivables posting",
    "priorSapMapping": "Sales billing and financial integration",
    "mappingClass": "C",
    "proposedRequirement": "Bill completed deliveries or approved billing events and post customer liabilities.",
    "proposedAcceptance": "Invoice values reconcile to receivables, revenue and tax in the intended company code.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-07-013",
    "testId": "TC-07-013",
    "domainId": "D07",
    "domain": "Sales and order fulfillment",
    "process": "Advance payments and milestone billing",
    "priorSapMapping": "Down payment and billing plan scenarios",
    "mappingClass": "V",
    "proposedRequirement": "Manage advances and milestones using an approved billing and accounting design.",
    "proposedAcceptance": "An advance or milestone invoice follows the signed schedule without double billing.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-07-014",
    "testId": "TC-07-014",
    "domainId": "D07",
    "domain": "Sales and order fulfillment",
    "process": "Returns replacements and credit notes",
    "priorSapMapping": "Customer returns and billing adjustments",
    "mappingClass": "C",
    "proposedRequirement": "Control returns, replacement and credits using the original transaction references.",
    "proposedAcceptance": "Returned stock, credit amount and replacement obligation reconcile to approved disposition.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-07-015",
    "testId": "TC-07-015",
    "domainId": "D07",
    "domain": "Sales and order fulfillment",
    "process": "Supplier direct fulfillment",
    "priorSapMapping": "Third party sales",
    "mappingClass": "V",
    "proposedRequirement": "Fulfill customer demand directly through a supplier with procurement linkage.",
    "proposedAcceptance": "The customer invoice and supplier obligation trace back to the same approved demand.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-07-016",
    "testId": "TC-07-016",
    "domainId": "D07",
    "domain": "Sales and order fulfillment",
    "process": "Sales through a group affiliate",
    "priorSapMapping": "Intercompany sales",
    "mappingClass": "V",
    "proposedRequirement": "Coordinate selling and supplying affiliates with supported intercompany flows.",
    "proposedAcceptance": "External and intercompany documents reconcile across both entity ledgers.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-07-017",
    "testId": "TC-07-017",
    "domainId": "D07",
    "domain": "Sales and order fulfillment",
    "process": "Leads opportunities and complex sales configuration",
    "priorSapMapping": "CRM and potentially SAP CPQ",
    "mappingClass": "I",
    "proposedRequirement": "Integrate sales pipeline or CPQ data with approved product and pricing ownership.",
    "proposedAcceptance": "Accepted configuration and customer references enter ERP once with validation evidence.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-07-018",
    "testId": "TC-07-018",
    "domainId": "D07",
    "domain": "Sales and order fulfillment",
    "process": "Orders through portals EDI and commerce",
    "priorSapMapping": "Sales integration",
    "mappingClass": "I",
    "proposedRequirement": "Accept external orders with authenticated partners, validation and duplicate controls.",
    "proposedAcceptance": "Malformed or repeated orders do not create unintended sales orders.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-08-001",
    "testId": "TC-08-001",
    "domainId": "D08",
    "domain": "Transportation and international trade",
    "process": "Dispatch planning and shipping dates",
    "priorSapMapping": "Delivery and shipping management",
    "mappingClass": "C",
    "proposedRequirement": "Schedule dispatch against delivery readiness, calendars and requested dates.",
    "proposedAcceptance": "A dispatch plan respects goods availability and agreed shipping cutoffs.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-08-002",
    "testId": "TC-08-002",
    "domainId": "D08",
    "domain": "Transportation and international trade",
    "process": "Shipment consolidation and transport arrangement",
    "priorSapMapping": "Transportation management",
    "mappingClass": "V",
    "proposedRequirement": "Consolidate eligible deliveries using the selected transport process.",
    "proposedAcceptance": "Consolidated loads retain delivery references and do not exceed tested constraints.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-08-003",
    "testId": "TC-08-003",
    "domainId": "D08",
    "domain": "Transportation and international trade",
    "process": "Carrier selection and shipment exchange",
    "priorSapMapping": "Transportation and carrier integration",
    "mappingClass": "V",
    "proposedRequirement": "Exchange carrier assignments and shipment instructions through approved channels.",
    "proposedAcceptance": "A carrier receives one accepted instruction with a traceable acknowledgement.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-08-004",
    "testId": "TC-08-004",
    "domainId": "D08",
    "domain": "Transportation and international trade",
    "process": "Delivery tracking and proof of delivery",
    "priorSapMapping": "Logistics execution and tracking integration",
    "mappingClass": "V",
    "proposedRequirement": "Track delivery milestones and proof of delivery where required.",
    "proposedAcceptance": "Proof of delivery references the correct shipment and resolves delivery exceptions.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-08-005",
    "testId": "TC-08-005",
    "domainId": "D08",
    "domain": "Transportation and international trade",
    "process": "Freight costs and settlement",
    "priorSapMapping": "Freight related processing",
    "mappingClass": "V",
    "proposedRequirement": "Allocate and reconcile freight costs using an approved method.",
    "proposedAcceptance": "Freight charges reconcile to carrier evidence and the designated cost objects.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-08-006",
    "testId": "TC-08-006",
    "domainId": "D08",
    "domain": "Transportation and international trade",
    "process": "Commodity codes and trade master data",
    "priorSapMapping": "International trade",
    "mappingClass": "V",
    "proposedRequirement": "Maintain approved commodity classifications and trade attributes.",
    "proposedAcceptance": "A sample product has a valid classification for its applicable trading scenario.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-08-007",
    "testId": "TC-08-007",
    "domainId": "D08",
    "domain": "Transportation and international trade",
    "process": "Import and export documentation",
    "priorSapMapping": "Country specific trade processes",
    "mappingClass": "V",
    "proposedRequirement": "Prepare legally required cross-border documentation for each relevant corridor.",
    "proposedAcceptance": "The approved country-corridor checklist is complete before shipment release.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-08-008",
    "testId": "TC-08-008",
    "domainId": "D08",
    "domain": "Transportation and international trade",
    "process": "Customs sanctions screening and preferences",
    "priorSapMapping": "SAP Global Trade Services or other trade services",
    "mappingClass": "I",
    "proposedRequirement": "Use an approved trade solution for customs, screening or preference needs beyond ERP fit.",
    "proposedAcceptance": "A restricted-party or customs failure prevents the affected release and enters review.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-09-001",
    "testId": "TC-09-001",
    "domainId": "D09",
    "domain": "Enterprise asset maintenance",
    "process": "Factory equipment and functional locations",
    "priorSapMapping": "Technical object management",
    "mappingClass": "C",
    "proposedRequirement": "Create equipment and functional locations with hierarchy, plant and cost assignments.",
    "proposedAcceptance": "A sampled machine has the correct installed location, ownership and maintenance history.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-09-002",
    "testId": "TC-09-002",
    "domainId": "D09",
    "domain": "Enterprise asset maintenance",
    "process": "Breakdown and maintenance reporting",
    "priorSapMapping": "Maintenance requests and notifications",
    "mappingClass": "C",
    "proposedRequirement": "Record breakdown symptoms, priority, asset and business impact.",
    "proposedAcceptance": "A request reaches the responsible maintenance planner with traceable priority.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-09-003",
    "testId": "TC-09-003",
    "domainId": "D09",
    "domain": "Enterprise asset maintenance",
    "process": "Corrective maintenance planning and execution",
    "priorSapMapping": "Maintenance orders",
    "mappingClass": "C",
    "proposedRequirement": "Plan and execute corrective work with labor, parts and external operations.",
    "proposedAcceptance": "The completed order records work, consumed parts, costs and technical completion.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-09-004",
    "testId": "TC-09-004",
    "domainId": "D09",
    "domain": "Enterprise asset maintenance",
    "process": "Preventive maintenance scheduling",
    "priorSapMapping": "Maintenance plans and scheduled maintenance",
    "mappingClass": "C",
    "proposedRequirement": "Generate preventive work from approved plans, cycles and scheduling rules.",
    "proposedAcceptance": "A due plan generates the expected maintenance call without duplicate work.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-09-005",
    "testId": "TC-09-005",
    "domainId": "D09",
    "domain": "Enterprise asset maintenance",
    "process": "Operating readings and counters",
    "priorSapMapping": "Measurement and counter based maintenance",
    "mappingClass": "V",
    "proposedRequirement": "Capture meter readings and validate counter continuity and units.",
    "proposedAcceptance": "A valid reading advances maintenance forecasting; an implausible reading is flagged.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-09-006",
    "testId": "TC-09-006",
    "domainId": "D09",
    "domain": "Enterprise asset maintenance",
    "process": "Labor spare parts and external service planning",
    "priorSapMapping": "Maintenance planning and procurement integration",
    "mappingClass": "C",
    "proposedRequirement": "Reserve spares and procure services against maintenance demand.",
    "proposedAcceptance": "Planned and actual resources reconcile to the intended maintenance order.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-09-007",
    "testId": "TC-09-007",
    "domainId": "D09",
    "domain": "Enterprise asset maintenance",
    "process": "Work confirmations and cost capture",
    "priorSapMapping": "Maintenance confirmations and cost tracking",
    "mappingClass": "C",
    "proposedRequirement": "Confirm maintenance activities and collect actual costs against the correct asset.",
    "proposedAcceptance": "Labor, material and external costs appear against the completed order.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-09-008",
    "testId": "TC-09-008",
    "domainId": "D09",
    "domain": "Enterprise asset maintenance",
    "process": "Shutdowns and major overhauls",
    "priorSapMapping": "Maintenance and project coordination",
    "mappingClass": "V",
    "proposedRequirement": "Coordinate shutdown scope, dates, dependencies and readiness.",
    "proposedAcceptance": "A shutdown rehearsal identifies prerequisite tasks and unresolved readiness constraints.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-09-009",
    "testId": "TC-09-009",
    "domainId": "D09",
    "domain": "Enterprise asset maintenance",
    "process": "Equipment inspection and calibration",
    "priorSapMapping": "Maintenance and quality related processes",
    "mappingClass": "V",
    "proposedRequirement": "Define supported inspection or calibration procedures and evidence retention.",
    "proposedAcceptance": "The pilot procedure records results and prevents unsupported assumptions about checklist availability.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-09-010",
    "testId": "TC-09-010",
    "domainId": "D09",
    "domain": "Enterprise asset maintenance",
    "process": "Sensor based failure prediction",
    "priorSapMapping": "SAP Asset Performance Management or other solution",
    "mappingClass": "I",
    "proposedRequirement": "Use condition data and predictive analytics through an approved integration.",
    "proposedAcceptance": "A simulated alert produces a reviewable recommendation without unapproved automatic intervention.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-09-011",
    "testId": "TC-09-011",
    "domainId": "D09",
    "domain": "Enterprise asset maintenance",
    "process": "Mobile maintenance execution",
    "priorSapMapping": "Mobile maintenance solution",
    "mappingClass": "I",
    "proposedRequirement": "Enable mobile work with authorized asset access and synchronization controls.",
    "proposedAcceptance": "A mobile confirmation synchronizes once and rejected updates remain recoverable.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-10-001",
    "testId": "TC-10-001",
    "domainId": "D10",
    "domain": "After sales service and repair",
    "process": "Customer equipment records",
    "priorSapMapping": "Service technical objects and equipment records",
    "mappingClass": "V",
    "proposedRequirement": "Maintain customer equipment ownership, location, serial and relevant service references.",
    "proposedAcceptance": "A service request identifies the correct installed equipment and entitled customer.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-10-002",
    "testId": "TC-10-002",
    "domainId": "D10",
    "domain": "After sales service and repair",
    "process": "Service agreements and maintenance contracts",
    "priorSapMapping": "Service contract management",
    "mappingClass": "C",
    "proposedRequirement": "Define service coverage, validity, response terms and pricing agreements.",
    "proposedAcceptance": "An expired or uncovered contract is identified during service order review.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-10-003",
    "testId": "TC-10-003",
    "domainId": "D10",
    "domain": "After sales service and repair",
    "process": "Service quotations and orders",
    "priorSapMapping": "Service order management",
    "mappingClass": "C",
    "proposedRequirement": "Create service orders with scope, customer, equipment and pricing basis.",
    "proposedAcceptance": "Fixed-price and time-and-material examples derive the approved planned scope.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-10-004",
    "testId": "TC-10-004",
    "domainId": "D10",
    "domain": "After sales service and repair",
    "process": "Service labor parts and expense planning",
    "priorSapMapping": "Service order planning",
    "mappingClass": "C",
    "proposedRequirement": "Plan labor, parts, expenses and procured services before release.",
    "proposedAcceptance": "Released work contains the approved resources and cost/revenue baseline.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-10-005",
    "testId": "TC-10-005",
    "domainId": "D10",
    "domain": "After sales service and repair",
    "process": "Work and parts consumption recording",
    "priorSapMapping": "Service confirmations",
    "mappingClass": "C",
    "proposedRequirement": "Record technician time, parts and expenses against authorized work.",
    "proposedAcceptance": "A confirmation updates the correct order and cannot be duplicated by replay.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-10-006",
    "testId": "TC-10-006",
    "domainId": "D10",
    "domain": "After sales service and repair",
    "process": "Fixed price and resource based service invoicing",
    "priorSapMapping": "Service billing",
    "mappingClass": "C",
    "proposedRequirement": "Bill fixed-price or resource-based services from approved billable evidence.",
    "proposedAcceptance": "Invoice quantities and values agree to contract terms and accepted confirmations.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-10-007",
    "testId": "TC-10-007",
    "domainId": "D10",
    "domain": "After sales service and repair",
    "process": "Repair center receipt and repair",
    "priorSapMapping": "In house repair",
    "mappingClass": "C",
    "proposedRequirement": "Receive customer repair objects, assess, quote, repair and return them.",
    "proposedAcceptance": "The repair object remains identifiable through receipt, work, return and billing.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-10-008",
    "testId": "TC-10-008",
    "domainId": "D10",
    "domain": "After sales service and repair",
    "process": "Replacement parts supply",
    "priorSapMapping": "Service parts and sales integration",
    "mappingClass": "C",
    "proposedRequirement": "Supply compatible service parts and record their consumption or sale.",
    "proposedAcceptance": "Part usage updates stock and the intended service or sales financial record.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-10-009",
    "testId": "TC-10-009",
    "domainId": "D10",
    "domain": "After sales service and repair",
    "process": "Warranty coverage and related work",
    "priorSapMapping": "Warranty related service scenarios",
    "mappingClass": "V",
    "proposedRequirement": "Determine warranty coverage and route chargeable exceptions for review.",
    "proposedAcceptance": "Covered and non-covered test cases receive the approved commercial treatment.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-10-010",
    "testId": "TC-10-010",
    "domainId": "D10",
    "domain": "After sales service and repair",
    "process": "Field technician scheduling and dispatch",
    "priorSapMapping": "SAP Field Service Management integration",
    "mappingClass": "I",
    "proposedRequirement": "Integrate technician dispatch and appointment updates with the field-service platform.",
    "proposedAcceptance": "A rescheduled assignment updates once and completed work returns with the correct reference.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-10-011",
    "testId": "TC-10-011",
    "domainId": "D10",
    "domain": "After sales service and repair",
    "process": "Remote monitoring and connected services",
    "priorSapMapping": "IoT and service platform integration",
    "mappingClass": "I",
    "proposedRequirement": "Ingest connected-equipment alerts with customer consent and service relevance.",
    "proposedAcceptance": "A test alert identifies the equipment and creates a reviewable service event.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-11-001",
    "testId": "TC-11-001",
    "domainId": "D11",
    "domain": "Projects and capital investment",
    "process": "Customer equipment delivery projects",
    "priorSapMapping": "Project control and sales integration",
    "mappingClass": "V",
    "proposedRequirement": "Structure customer equipment delivery projects with commercial and execution dependencies.",
    "proposedAcceptance": "A pilot delivery project traces milestones to relevant sales and production obligations.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-11-002",
    "testId": "TC-11-002",
    "domainId": "D11",
    "domain": "Projects and capital investment",
    "process": "Internal engineering and development projects",
    "priorSapMapping": "Internal project control",
    "mappingClass": "C",
    "proposedRequirement": "Create internal engineering projects with ownership, dates and authorized cost collection.",
    "proposedAcceptance": "Costs post to the intended internal project and are visible to its controller.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-11-003",
    "testId": "TC-11-003",
    "domainId": "D11",
    "domain": "Projects and capital investment",
    "process": "New factories production lines and facilities",
    "priorSapMapping": "Investment projects",
    "mappingClass": "C",
    "proposedRequirement": "Create investment projects with approved budget and asset settlement design.",
    "proposedAcceptance": "Capital expenditure is traceable from approval to asset capitalization.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-11-004",
    "testId": "TC-11-004",
    "domainId": "D11",
    "domain": "Projects and capital investment",
    "process": "Project structures budgets and milestones",
    "priorSapMapping": "Project planning and control",
    "mappingClass": "C",
    "proposedRequirement": "Maintain WBS structures, milestones, budgets and responsible organizational assignments.",
    "proposedAcceptance": "The approved baseline and later changes remain distinguishable.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-11-005",
    "testId": "TC-11-005",
    "domainId": "D11",
    "domain": "Projects and capital investment",
    "process": "Project material and service purchases",
    "priorSapMapping": "Project procurement",
    "mappingClass": "C",
    "proposedRequirement": "Procure project materials and services against valid WBS demand.",
    "proposedAcceptance": "Commitments and actual purchases appear on the intended project element.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-11-006",
    "testId": "TC-11-006",
    "domainId": "D11",
    "domain": "Projects and capital investment",
    "process": "Project labor and expense recording",
    "priorSapMapping": "Time recording and project cost collection",
    "mappingClass": "V",
    "proposedRequirement": "Capture project time and expenses with approval and period controls.",
    "proposedAcceptance": "Approved hours and expenses update the correct WBS and accounting period.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-11-007",
    "testId": "TC-11-007",
    "domainId": "D11",
    "domain": "Projects and capital investment",
    "process": "Commitments actual costs and budget tracking",
    "priorSapMapping": "Project financial control",
    "mappingClass": "C",
    "proposedRequirement": "Monitor budget, commitments, actuals and forecast exposure.",
    "proposedAcceptance": "A seeded overrun is reported and routed according to the approved budget-control policy.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-11-008",
    "testId": "TC-11-008",
    "domainId": "D11",
    "domain": "Projects and capital investment",
    "process": "Capitalization of investment expenditure",
    "priorSapMapping": "Assets under construction and settlement",
    "mappingClass": "C",
    "proposedRequirement": "Settle eligible expenditure to assets using approved capitalization rules.",
    "proposedAcceptance": "The capitalization amount reconciles to eligible project costs and asset records.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-11-009",
    "testId": "TC-11-009",
    "domainId": "D11",
    "domain": "Projects and capital investment",
    "process": "Work delivered by another group company",
    "priorSapMapping": "Intercompany project control",
    "mappingClass": "V",
    "proposedRequirement": "Coordinate supplying and receiving affiliates on project work.",
    "proposedAcceptance": "Cross-company service costs and charges reconcile to project and intercompany records.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-11-010",
    "testId": "TC-11-010",
    "domainId": "D11",
    "domain": "Projects and capital investment",
    "process": "Complex engineer to order delivery and scheduling",
    "priorSapMapping": "Project and manufacturing fit assessment",
    "mappingClass": "V",
    "proposedRequirement": "Validate engineered delivery dependencies, scheduling and costing before scope commitment.",
    "proposedAcceptance": "A representative engineered project demonstrates an accepted solution or documented gap.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-12-001",
    "testId": "TC-12-001",
    "domainId": "D12",
    "domain": "Finance and management accounting",
    "process": "Operating and group charts of accounts",
    "priorSapMapping": "General ledger master data",
    "mappingClass": "C",
    "proposedRequirement": "Adopt a governed operating chart and map local and group reporting needs.",
    "proposedAcceptance": "Legacy accounts map uniquely to approved target accounts and reporting positions.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-12-002",
    "testId": "TC-12-002",
    "domainId": "D12",
    "domain": "Finance and management accounting",
    "process": "Journals accruals and recurring entries",
    "priorSapMapping": "General ledger accounting",
    "mappingClass": "C",
    "proposedRequirement": "Post balanced journals with valid accounts, assignments and independent verification where required.",
    "proposedAcceptance": "An unbalanced or unauthorized journal is rejected; a valid approved journal posts once.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-12-003",
    "testId": "TC-12-003",
    "domainId": "D12",
    "domain": "Finance and management accounting",
    "process": "Supplier liabilities and payments",
    "priorSapMapping": "Accounts payable",
    "mappingClass": "C",
    "proposedRequirement": "Process supplier items, payment proposals and independently approved payments.",
    "proposedAcceptance": "Paid items reconcile to approved proposals and bank acknowledgements.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-12-004",
    "testId": "TC-12-004",
    "domainId": "D12",
    "domain": "Finance and management accounting",
    "process": "Customer receipts collections and overdue balances",
    "priorSapMapping": "Accounts receivable",
    "mappingClass": "C",
    "proposedRequirement": "Match receipts to customer items and manage deductions and overdue collections.",
    "proposedAcceptance": "A receipt clears the correct item and leaves a traceable residual or dispute.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-12-005",
    "testId": "TC-12-005",
    "domainId": "D12",
    "domain": "Finance and management accounting",
    "process": "Bank statement reconciliation",
    "priorSapMapping": "Bank accounting",
    "mappingClass": "C",
    "proposedRequirement": "Import statements and reconcile bank transactions using approved matching rules.",
    "proposedAcceptance": "Bank and ledger balances reconcile; unmatched items enter an owned worklist.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-12-006",
    "testId": "TC-12-006",
    "domainId": "D12",
    "domain": "Finance and management accounting",
    "process": "Fixed asset acquisition depreciation transfer and retirement",
    "priorSapMapping": "Asset accounting",
    "mappingClass": "C",
    "proposedRequirement": "Manage asset acquisition, depreciation, transfers and retirement by approved class.",
    "proposedAcceptance": "Asset balances and depreciation reconcile across the required accounting views.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-12-007",
    "testId": "TC-12-007",
    "domainId": "D12",
    "domain": "Finance and management accounting",
    "process": "Assets under construction",
    "priorSapMapping": "Asset accounting and investment integration",
    "mappingClass": "C",
    "proposedRequirement": "Track assets under construction and settle on readiness for use.",
    "proposedAcceptance": "Settlement transfers only authorized amounts to the correct final asset.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-12-008",
    "testId": "TC-12-008",
    "domainId": "D12",
    "domain": "Finance and management accounting",
    "process": "Cost centers and profit centers",
    "priorSapMapping": "Management accounting",
    "mappingClass": "C",
    "proposedRequirement": "Maintain cost and profit center hierarchies, validity and company assignments.",
    "proposedAcceptance": "Invalid-period or unauthorized organizational assignments are rejected.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-12-009",
    "testId": "TC-12-009",
    "domainId": "D12",
    "domain": "Finance and management accounting",
    "process": "Overhead and shared cost allocations",
    "priorSapMapping": "Allocations and overhead accounting",
    "mappingClass": "C",
    "proposedRequirement": "Allocate shared costs using approved drivers, cycles and receiver rules.",
    "proposedAcceptance": "Sender credits and receiver charges reconcile to the approved allocation total.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-12-010",
    "testId": "TC-12-010",
    "domainId": "D12",
    "domain": "Finance and management accounting",
    "process": "Standard product cost calculation",
    "priorSapMapping": "Product cost planning",
    "mappingClass": "C",
    "proposedRequirement": "Calculate standard costs using approved quantities, activities and procurement assumptions.",
    "proposedAcceptance": "The approved cost estimate reproduces the agreed component and activity basis.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-12-011",
    "testId": "TC-12-011",
    "domainId": "D12",
    "domain": "Finance and management accounting",
    "process": "Production cost work in process and variance analysis",
    "priorSapMapping": "Manufacturing cost accounting",
    "mappingClass": "C",
    "proposedRequirement": "Calculate and explain manufacturing cost, work in process and variances.",
    "proposedAcceptance": "A closed production period has reconciled costs and reviewed material variances.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-12-012",
    "testId": "TC-12-012",
    "domainId": "D12",
    "domain": "Finance and management accounting",
    "process": "Product customer and segment profitability",
    "priorSapMapping": "Margin analysis",
    "mappingClass": "C",
    "proposedRequirement": "Analyze margin using approved product, customer and segment characteristics.",
    "proposedAcceptance": "Reported margin reconciles to source accounting with stated allocation treatment.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-12-013",
    "testId": "TC-12-013",
    "domainId": "D12",
    "domain": "Finance and management accounting",
    "process": "Inventory valuation and material cost analysis",
    "priorSapMapping": "Inventory and material valuation",
    "mappingClass": "C",
    "proposedRequirement": "Value inventory using approved valuation and material accounting policies.",
    "proposedAcceptance": "Quantity and value reconcile to the ledger; unexplained differences prevent sign-off.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-12-014",
    "testId": "TC-12-014",
    "domainId": "D12",
    "domain": "Finance and management accounting",
    "process": "Foreign currency valuation and period end adjustments",
    "priorSapMapping": "Financial closing",
    "mappingClass": "C",
    "proposedRequirement": "Perform currency valuation, accruals and closing adjustments under period controls.",
    "proposedAcceptance": "The trial balance balances and adjustments are reproducible from approved inputs.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-12-015",
    "testId": "TC-12-015",
    "domainId": "D12",
    "domain": "Finance and management accounting",
    "process": "Entity financial statements",
    "priorSapMapping": "Financial reporting",
    "mappingClass": "C",
    "proposedRequirement": "Produce entity financial statements under applicable accounting principles.",
    "proposedAcceptance": "Statements reconcile to the approved ledger and reporting hierarchy.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-12-016",
    "testId": "TC-12-016",
    "domainId": "D12",
    "domain": "Finance and management accounting",
    "process": "Budgets and financial forecasts",
    "priorSapMapping": "Financial planning potentially with SAP Analytics Cloud",
    "mappingClass": "V",
    "proposedRequirement": "Maintain approved financial planning versions and assumptions.",
    "proposedAcceptance": "Budget and forecast comparisons use the intended version and reporting currency.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-12-017",
    "testId": "TC-12-017",
    "domainId": "D12",
    "domain": "Finance and management accounting",
    "process": "Cash positions liquidity and bank relationships",
    "priorSapMapping": "Cash and treasury processes",
    "mappingClass": "V",
    "proposedRequirement": "Monitor cash and liquidity using approved bank and forecast sources.",
    "proposedAcceptance": "The cash position reconciles to bank balances with identifiable forecast adjustments.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-12-018",
    "testId": "TC-12-018",
    "domainId": "D12",
    "domain": "Finance and management accounting",
    "process": "Loans investments foreign exchange and hedging",
    "priorSapMapping": "Treasury and risk management",
    "mappingClass": "V",
    "proposedRequirement": "Manage approved funding and risk instruments with independent controls.",
    "proposedAcceptance": "A pilot instrument produces validated cash flows and accounting or an explicit scope gap.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-12-019",
    "testId": "TC-12-019",
    "domainId": "D12",
    "domain": "Finance and management accounting",
    "process": "Consolidated group statements",
    "priorSapMapping": "Group reporting",
    "mappingClass": "V",
    "proposedRequirement": "Consolidate group entities using approved ownership and elimination rules.",
    "proposedAcceptance": "Consolidated balances reconcile to entity submissions and elimination evidence.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-12-020",
    "testId": "TC-12-020",
    "domainId": "D12",
    "domain": "Finance and management accounting",
    "process": "Complex group close orchestration",
    "priorSapMapping": "Financial close tools and integration",
    "mappingClass": "V",
    "proposedRequirement": "Control close tasks, dependencies and sign-off across entities.",
    "proposedAcceptance": "A close cannot be marked complete while mandatory reconciliations remain unresolved.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-13-001",
    "testId": "TC-13-001",
    "domainId": "D13",
    "domain": "Intercompany and group operations",
    "process": "Manufacturing entity sells to distribution affiliate",
    "priorSapMapping": "Intercompany sales",
    "mappingClass": "V",
    "proposedRequirement": "Execute affiliate product sales using approved supplying and selling entity relationships.",
    "proposedAcceptance": "Intercompany invoice and external fulfillment values reconcile across both entities.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-13-002",
    "testId": "TC-13-002",
    "domainId": "D13",
    "domain": "Intercompany and group operations",
    "process": "Components supplied to another company plant",
    "priorSapMapping": "Cross company stock transfer",
    "mappingClass": "V",
    "proposedRequirement": "Transfer stock across legal ownership boundaries with the supported logistics and billing design.",
    "proposedAcceptance": "Dispatch, receipt, in-transit ownership and intercompany balances reconcile.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-13-003",
    "testId": "TC-13-003",
    "domainId": "D13",
    "domain": "Intercompany and group operations",
    "process": "Affiliate ships directly to selling entity customer",
    "priorSapMapping": "Supported intercompany fulfillment scenario",
    "mappingClass": "V",
    "proposedRequirement": "Support affiliate direct shipment only through a validated fulfillment scenario.",
    "proposedAcceptance": "The pilot customer delivery generates the intended external and affiliate documents.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-13-004",
    "testId": "TC-13-004",
    "domainId": "D13",
    "domain": "Intercompany and group operations",
    "process": "Affiliate service delivery on another company project",
    "priorSapMapping": "Intercompany service and project processing",
    "mappingClass": "V",
    "proposedRequirement": "Record affiliate service delivery against the receiving company project or order.",
    "proposedAcceptance": "Supplier-side effort and receiver-side charges retain common transaction references.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-13-005",
    "testId": "TC-13-005",
    "domainId": "D13",
    "domain": "Intercompany and group operations",
    "process": "Corporate IT finance and engineering charges",
    "priorSapMapping": "Cross company postings and billing",
    "mappingClass": "V",
    "proposedRequirement": "Allocate and invoice shared services using approved agreements and tax treatment.",
    "proposedAcceptance": "Receiver charges reconcile to the approved allocation basis and service agreement.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-13-006",
    "testId": "TC-13-006",
    "domainId": "D13",
    "domain": "Intercompany and group operations",
    "process": "Mutual group balances and settlements",
    "priorSapMapping": "Intercompany accounting",
    "mappingClass": "V",
    "proposedRequirement": "Record reciprocal balances with trading partner identification.",
    "proposedAcceptance": "Receivable and payable totals reconcile by partner, currency and period.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-13-007",
    "testId": "TC-13-007",
    "domainId": "D13",
    "domain": "Intercompany and group operations",
    "process": "Balance matching and difference investigation",
    "priorSapMapping": "Intercompany reconciliation",
    "mappingClass": "V",
    "proposedRequirement": "Investigate mismatches before close using common references and timing rules.",
    "proposedAcceptance": "Seeded currency, timing and missing-document differences receive assigned resolutions.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-13-008",
    "testId": "TC-13-008",
    "domainId": "D13",
    "domain": "Intercompany and group operations",
    "process": "Commercial pricing for group transactions",
    "priorSapMapping": "Transfer pricing and valuation design",
    "mappingClass": "V",
    "proposedRequirement": "Apply approved transfer prices and retain policy and effective-date references.",
    "proposedAcceptance": "A controlled transaction uses the correct policy version and price basis.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-13-009",
    "testId": "TC-13-009",
    "domainId": "D13",
    "domain": "Intercompany and group operations",
    "process": "Elimination of group balances and transactions",
    "priorSapMapping": "Group reporting",
    "mappingClass": "V",
    "proposedRequirement": "Eliminate eligible intercompany balances and transactions during group close.",
    "proposedAcceptance": "Eliminations reconcile to matched entity submissions without deleting source postings.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-13-010",
    "testId": "TC-13-010",
    "domainId": "D13",
    "domain": "Intercompany and group operations",
    "process": "Group negotiated or centralized buying",
    "priorSapMapping": "Central procurement fit assessment",
    "mappingClass": "V",
    "proposedRequirement": "Design centralized purchasing with clear contracting, receiving and paying responsibilities.",
    "proposedAcceptance": "A pilot order identifies the correct legal buyer, receiver, invoice recipient and payer.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-13-011",
    "testId": "TC-13-011",
    "domainId": "D13",
    "domain": "Intercompany and group operations",
    "process": "Group liquidity payments and funding",
    "priorSapMapping": "Treasury and payment architecture assessment",
    "mappingClass": "V",
    "proposedRequirement": "Design group liquidity, payment and funding processes with bank and legal approval.",
    "proposedAcceptance": "The selected payment or funding scenario passes authorization and reconciliation tests.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-14-001",
    "testId": "TC-14-001",
    "domainId": "D14",
    "domain": "Country localization and statutory compliance",
    "process": "Domestic indirect tax calculation",
    "priorSapMapping": "Country specific VAT GST sales tax or equivalent",
    "mappingClass": "V",
    "proposedRequirement": "Determine domestic indirect tax from approved country, registration and transaction rules.",
    "proposedAcceptance": "Local tax specialists approve rate, account, base and rounding outcomes for test cases.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-14-002",
    "testId": "TC-14-002",
    "domainId": "D14",
    "domain": "Country localization and statutory compliance",
    "process": "Cross border tax treatment",
    "priorSapMapping": "Import export tax and cross border processes",
    "mappingClass": "V",
    "proposedRequirement": "Determine cross-border tax using documented seller, buyer, shipment and registration facts.",
    "proposedAcceptance": "Each approved trade corridor passes domestic, export and import tax scenarios.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-14-003",
    "testId": "TC-14-003",
    "domainId": "D14",
    "domain": "Country localization and statutory compliance",
    "process": "Withholding deductions and reporting",
    "priorSapMapping": "Country specific withholding processes",
    "mappingClass": "V",
    "proposedRequirement": "Apply withholding rules to the relevant supplier, payment and tax events.",
    "proposedAcceptance": "Withholding amounts and certificates reconcile to approved jurisdiction-specific examples.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-14-004",
    "testId": "TC-14-004",
    "domainId": "D14",
    "domain": "Country localization and statutory compliance",
    "process": "Legally compliant customer invoices",
    "priorSapMapping": "Local invoice content numbering and language",
    "mappingClass": "V",
    "proposedRequirement": "Produce compliant invoices with entity identity, tax references and legal numbering.",
    "proposedAcceptance": "Local reviewers approve mandatory content and controlled numbering for each entity.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-14-005",
    "testId": "TC-14-005",
    "domainId": "D14",
    "domain": "Country localization and statutory compliance",
    "process": "Electronic invoice issuance",
    "priorSapMapping": "Country specific e invoicing and authority connectivity",
    "mappingClass": "V",
    "proposedRequirement": "Submit electronic documents and handle authority acceptance, rejection and cancellation.",
    "proposedAcceptance": "A test rejection is corrected and resubmitted without duplicate legal issuance.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-14-006",
    "testId": "TC-14-006",
    "domainId": "D14",
    "domain": "Country localization and statutory compliance",
    "process": "Statutory financial submissions",
    "priorSapMapping": "Local reporting and electronic submissions",
    "mappingClass": "V",
    "proposedRequirement": "Prepare statutory submissions from reconciled entity accounting data.",
    "proposedAcceptance": "The local controller reconciles a sample filing to the ledger and source transactions.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-14-007",
    "testId": "TC-14-007",
    "domainId": "D14",
    "domain": "Country localization and statutory compliance",
    "process": "Local accounting treatments",
    "priorSapMapping": "Accounting principles ledgers and adjustments",
    "mappingClass": "V",
    "proposedRequirement": "Apply approved local and group accounting treatments through the selected ledger design.",
    "proposedAcceptance": "Local and group differences are explained and reconcile to approved adjustments.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-14-008",
    "testId": "TC-14-008",
    "domainId": "D14",
    "domain": "Country localization and statutory compliance",
    "process": "Local asset depreciation",
    "priorSapMapping": "Country specific depreciation and tax accounting",
    "mappingClass": "V",
    "proposedRequirement": "Maintain local depreciation and tax treatment by asset class and accounting view.",
    "proposedAcceptance": "A sample asset produces locally approved depreciation and reporting values.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-14-009",
    "testId": "TC-14-009",
    "domainId": "D14",
    "domain": "Country localization and statutory compliance",
    "process": "Local bank payments",
    "priorSapMapping": "Banking formats and payment requirements",
    "mappingClass": "V",
    "proposedRequirement": "Generate bank payments using supported local formats and authorized bank details.",
    "proposedAcceptance": "The bank accepts the test file and confirms the expected payment reference and amount.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-14-010",
    "testId": "TC-14-010",
    "domainId": "D14",
    "domain": "Country localization and statutory compliance",
    "process": "Trade statistics reporting",
    "priorSapMapping": "Intrastat or equivalent where applicable",
    "mappingClass": "V",
    "proposedRequirement": "Prepare applicable trade statistics with correct commodity and movement information.",
    "proposedAcceptance": "A sample submission reconciles quantities and values to the underlying trade movements.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-14-011",
    "testId": "TC-14-011",
    "domainId": "D14",
    "domain": "Country localization and statutory compliance",
    "process": "Tax registration maintenance",
    "priorSapMapping": "Entity branch or establishment registrations",
    "mappingClass": "V",
    "proposedRequirement": "Maintain entity and establishment tax registrations with effective dates.",
    "proposedAcceptance": "Transactions determine the correct registration for the approved operating location.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-14-012",
    "testId": "TC-14-012",
    "domainId": "D14",
    "domain": "Country localization and statutory compliance",
    "process": "Record retention and audit support",
    "priorSapMapping": "Legal retention and audit requirements",
    "mappingClass": "V",
    "proposedRequirement": "Retain legal and audit records under approved retention and access rules.",
    "proposedAcceptance": "An authorized auditor retrieves evidence while unauthorized access is denied.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-14-013",
    "testId": "TC-14-013",
    "domainId": "D14",
    "domain": "Country localization and statutory compliance",
    "process": "Product environmental and safety obligations",
    "priorSapMapping": "Compliance capabilities and specialist systems",
    "mappingClass": "V",
    "proposedRequirement": "Identify product, environmental and safety obligations by country and product category.",
    "proposedAcceptance": "The compliance owner approves the obligations register and release controls.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-15-001",
    "testId": "TC-15-001",
    "domainId": "D15",
    "domain": "Enterprise data analytics and supporting processes",
    "process": "Product customer supplier and financial data governance",
    "priorSapMapping": "ERP controls potentially with SAP Master Data Governance",
    "mappingClass": "V",
    "proposedRequirement": "Assign ownership and quality rules to shared master data and organizational extensions.",
    "proposedAcceptance": "Duplicate, incomplete and unauthorized changes enter review before operational use.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-15-002",
    "testId": "TC-15-002",
    "domainId": "D15",
    "domain": "Enterprise data analytics and supporting processes",
    "process": "Purchasing journal and other approvals",
    "priorSapMapping": "Business workflows",
    "mappingClass": "C",
    "proposedRequirement": "Route business approvals using documented authority, substitution and escalation rules.",
    "proposedAcceptance": "Boundary, absence, rejection and self-approval tests produce the intended outcome.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-15-003",
    "testId": "TC-15-003",
    "domainId": "D15",
    "domain": "Enterprise data analytics and supporting processes",
    "process": "Role based operational dashboards",
    "priorSapMapping": "SAP Fiori and embedded analytics",
    "mappingClass": "C",
    "proposedRequirement": "Provide role-based Fiori navigation and accessible operational worklists.",
    "proposedAcceptance": "Authorized users can complete assigned tasks on agreed devices using accessible controls.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-15-004",
    "testId": "TC-15-004",
    "domainId": "D15",
    "domain": "Enterprise data analytics and supporting processes",
    "process": "Procurement production inventory sales and finance KPIs",
    "priorSapMapping": "Embedded analytics",
    "mappingClass": "C",
    "proposedRequirement": "Calculate operational KPIs using agreed definitions, sources and refresh expectations.",
    "proposedAcceptance": "Sample KPI values reproduce source transactions and show their reporting timestamp.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-15-005",
    "testId": "TC-15-005",
    "domainId": "D15",
    "domain": "Enterprise data analytics and supporting processes",
    "process": "Cross system enterprise analytics",
    "priorSapMapping": "SAP Analytics Cloud SAP Business Data Cloud or other platforms",
    "mappingClass": "I",
    "proposedRequirement": "Publish cross-system analytics with lineage, access restrictions and currency definitions.",
    "proposedAcceptance": "A consolidated view reconciles to ERP sources without exposing unauthorized entity data.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-15-006",
    "testId": "TC-15-006",
    "domainId": "D15",
    "domain": "Enterprise data analytics and supporting processes",
    "process": "Bank customer and supplier transaction exchange",
    "priorSapMapping": "APIs communication arrangements and integration",
    "mappingClass": "V",
    "proposedRequirement": "Operate API integrations using supported contracts and controlled communication identities.",
    "proposedAcceptance": "Duplicate, invalid and unavailable-service tests preserve transactional integrity.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-15-007",
    "testId": "TC-15-007",
    "domainId": "D15",
    "domain": "Enterprise data analytics and supporting processes",
    "process": "PLM MES warehouse and transport connections",
    "priorSapMapping": "Application integration",
    "mappingClass": "I",
    "proposedRequirement": "Connect operational platforms with explicit mastership and reconciliation responsibilities.",
    "proposedAcceptance": "Each integrated object has one owner and a tested recovery path for failed synchronization.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-15-008",
    "testId": "TC-15-008",
    "domainId": "D15",
    "domain": "Enterprise data analytics and supporting processes",
    "process": "Employee reference data and time recording",
    "priorSapMapping": "Workforce integration and relevant ERP processes",
    "mappingClass": "V",
    "proposedRequirement": "Synchronize employee references and approved time data without exposing unnecessary personal data.",
    "proposedAcceptance": "An approved employee can record eligible time; terminated access is removed.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-15-009",
    "testId": "TC-15-009",
    "domainId": "D15",
    "domain": "Enterprise data analytics and supporting processes",
    "process": "Recruitment payroll and talent management",
    "priorSapMapping": "SAP SuccessFactors or another HR platform",
    "mappingClass": "I",
    "proposedRequirement": "Integrate HR and payroll through approved service boundaries.",
    "proposedAcceptance": "Approved postings reconcile while sensitive payroll details remain appropriately restricted.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-15-010",
    "testId": "TC-15-010",
    "domainId": "D15",
    "domain": "Enterprise data analytics and supporting processes",
    "process": "Travel and employee expense processing",
    "priorSapMapping": "SAP Concur or another expense platform",
    "mappingClass": "I",
    "proposedRequirement": "Integrate travel and expense approvals, settlement and accounting.",
    "proposedAcceptance": "A sampled expense reconciles from approval through employee settlement and ledger posting.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-15-011",
    "testId": "TC-15-011",
    "domainId": "D15",
    "domain": "Enterprise data analytics and supporting processes",
    "process": "Advanced sustainability and carbon reporting",
    "priorSapMapping": "SAP sustainability or specialist solutions",
    "mappingClass": "I",
    "proposedRequirement": "Define sustainability reporting boundaries, source data and calculation ownership.",
    "proposedAcceptance": "A sample reported measure has reproducible inputs and approved calculation rules.",
    "status": "Proposed BPD baseline; not client-approved"
  },
  {
    "requirementId": "BR-15-012",
    "testId": "TC-15-012",
    "domainId": "D15",
    "domain": "Enterprise data analytics and supporting processes",
    "process": "Access segregation of duties and audit evidence",
    "priorSapMapping": "ERP authorizations and supporting governance tools",
    "mappingClass": "V",
    "proposedRequirement": "Enforce least privilege, segregation of duties and traceable access changes.",
    "proposedAcceptance": "Cross-entity and conflicting-duty negative tests fail with retained audit evidence.",
    "status": "Proposed BPD baseline; not client-approved"
  }
]
```
<!-- END SPEC process-catalog -->

### demo-catalogs

<!-- BEGIN SPEC demo-catalogs -->
```json
{
  "status": "Synthetic prototype configuration contracts, not verified SAP scope or CBC metadata",
  "primaryProjectId": "NORTHSTAR-DEMO",
  "secondaryProjectId": "RESTRICTED-DEMO",
  "primaryTargetId": "S4-PILOT",
  "configurationProposalId": "CFG-DEMO-014",
  "deploymentPackageId": "PKG-DEMO-007",
  "entities": [
    {
      "nodeId": "ORG-CC-1000",
      "companyCode": "1000",
      "country": "IN",
      "currency": "INR",
      "name": "Northstar IN Manufacturing Demo",
      "plant": "IN01"
    },
    {
      "nodeId": "ORG-CC-1010",
      "companyCode": "1010",
      "country": "IN",
      "currency": "INR",
      "name": "Northstar IN Services Demo",
      "plant": "IN02"
    },
    {
      "nodeId": "ORG-CC-2000",
      "companyCode": "2000",
      "country": "DE",
      "currency": "EUR",
      "name": "Northstar DE Manufacturing Demo",
      "plant": "DE01"
    },
    {
      "nodeId": "ORG-CC-2010",
      "companyCode": "2010",
      "country": "DE",
      "currency": "EUR",
      "name": "Northstar DE Services Demo",
      "plant": "DE02"
    },
    {
      "nodeId": "ORG-CC-3000",
      "companyCode": "3000",
      "country": "US",
      "currency": "USD",
      "name": "Northstar US Manufacturing Demo",
      "plant": "US01"
    },
    {
      "nodeId": "ORG-CC-3010",
      "companyCode": "3010",
      "country": "US",
      "currency": "USD",
      "name": "Northstar US Services Demo",
      "plant": "US02"
    },
    {
      "nodeId": "ORG-CC-4000",
      "companyCode": "4000",
      "country": "GB",
      "currency": "GBP",
      "name": "Northstar GB Manufacturing Demo",
      "plant": "GB01"
    },
    {
      "nodeId": "ORG-CC-4010",
      "companyCode": "4010",
      "country": "GB",
      "currency": "GBP",
      "name": "Northstar GB Services Demo",
      "plant": "GB02"
    },
    {
      "nodeId": "ORG-CC-5000",
      "companyCode": "5000",
      "country": "SG",
      "currency": "SGD",
      "name": "Northstar SG Manufacturing Demo",
      "plant": "SG01"
    },
    {
      "nodeId": "ORG-CC-5010",
      "companyCode": "5010",
      "country": "SG",
      "currency": "SGD",
      "name": "Northstar SG Services Demo",
      "plant": "SG02"
    }
  ],
  "organizationTypes": [
    "CompanyCode",
    "Plant",
    "StorageLocation",
    "PurchasingOrganization",
    "PurchasingGroup",
    "SalesOrganization",
    "DistributionChannel",
    "Division",
    "SalesArea",
    "ShippingPoint"
  ],
  "scopeCandidates": [
    {
      "id": "DEMO-SCOPE-01",
      "concept": "Supplier creation and maintenance",
      "requirementId": "BR-03-001",
      "verification": "Synthetic concept; replace with target-release verified SAP identity only through reviewed catalog update"
    },
    {
      "id": "DEMO-SCOPE-02",
      "concept": "Quotation requests and offer comparison",
      "requirementId": "BR-03-002",
      "verification": "Synthetic concept; replace with target-release verified SAP identity only through reviewed catalog update"
    },
    {
      "id": "DEMO-SCOPE-03",
      "concept": "Purchasing contracts and negotiated prices",
      "requirementId": "BR-03-003",
      "verification": "Synthetic concept; replace with target-release verified SAP identity only through reviewed catalog update"
    },
    {
      "id": "DEMO-SCOPE-04",
      "concept": "Approved sources of supply",
      "requirementId": "BR-03-004",
      "verification": "Synthetic concept; replace with target-release verified SAP identity only through reviewed catalog update"
    },
    {
      "id": "DEMO-SCOPE-05",
      "concept": "Raw material and component purchases",
      "requirementId": "BR-03-005",
      "verification": "Synthetic concept; replace with target-release verified SAP identity only through reviewed catalog update"
    },
    {
      "id": "DEMO-SCOPE-06",
      "concept": "Requisition and purchase order approvals",
      "requirementId": "BR-03-009",
      "verification": "Synthetic concept; replace with target-release verified SAP identity only through reviewed catalog update"
    },
    {
      "id": "DEMO-SCOPE-07",
      "concept": "Goods receipt against purchase orders",
      "requirementId": "BR-03-010",
      "verification": "Synthetic concept; replace with target-release verified SAP identity only through reviewed catalog update"
    },
    {
      "id": "DEMO-SCOPE-08",
      "concept": "Invoice matching and verification",
      "requirementId": "BR-03-011",
      "verification": "Synthetic concept; replace with target-release verified SAP identity only through reviewed catalog update"
    },
    {
      "id": "DEMO-SCOPE-09",
      "concept": "Operating and group charts of accounts",
      "requirementId": "BR-12-001",
      "verification": "Synthetic concept; replace with target-release verified SAP identity only through reviewed catalog update"
    },
    {
      "id": "DEMO-SCOPE-10",
      "concept": "Journals accruals and recurring entries",
      "requirementId": "BR-12-002",
      "verification": "Synthetic concept; replace with target-release verified SAP identity only through reviewed catalog update"
    },
    {
      "id": "DEMO-SCOPE-11",
      "concept": "Supplier liabilities and payments",
      "requirementId": "BR-12-003",
      "verification": "Synthetic concept; replace with target-release verified SAP identity only through reviewed catalog update"
    },
    {
      "id": "DEMO-SCOPE-12",
      "concept": "Customer receipts collections and overdue balances",
      "requirementId": "BR-12-004",
      "verification": "Synthetic concept; replace with target-release verified SAP identity only through reviewed catalog update"
    },
    {
      "id": "DEMO-SCOPE-13",
      "concept": "Bank statement reconciliation",
      "requirementId": "BR-12-005",
      "verification": "Synthetic concept; replace with target-release verified SAP identity only through reviewed catalog update"
    },
    {
      "id": "DEMO-SCOPE-14",
      "concept": "Cost centers and profit centers",
      "requirementId": "BR-12-008",
      "verification": "Synthetic concept; replace with target-release verified SAP identity only through reviewed catalog update"
    },
    {
      "id": "DEMO-SCOPE-15",
      "concept": "Foreign currency valuation and period end adjustments",
      "requirementId": "BR-12-014",
      "verification": "Synthetic concept; replace with target-release verified SAP identity only through reviewed catalog update"
    },
    {
      "id": "DEMO-SCOPE-16",
      "concept": "Entity financial statements",
      "requirementId": "BR-12-015",
      "verification": "Synthetic concept; replace with target-release verified SAP identity only through reviewed catalog update"
    }
  ],
  "policySource": {
    "id": "DEMO-POLICY-001",
    "status": "Synthetic assumption, not client-approved",
    "text": "Illustrative pilot uses 45 payment days, two approval levels, INR 10000 purchase approval threshold, 2 percent invoice tolerance and INR 50000 journal review threshold. These values demonstrate review and validation only."
  },
  "activities": [
    {
      "id": "DEMO-PT",
      "title": "Payment terms",
      "br": "BR-12-003",
      "fields": {
        "termCode": {
          "type": "string",
          "pattern": "D[0-9]{3}",
          "observed": "D030",
          "proposed": "D045"
        },
        "days": {
          "type": "integer",
          "min": 0,
          "max": 365,
          "observed": 30,
          "proposed": 45
        }
      },
      "crossRule": "termCode day digits must match days",
      "pathway": "attended"
    },
    {
      "id": "DEMO-PO-APP",
      "title": "Purchase approval thresholds",
      "br": "BR-03-009",
      "fields": {
        "threshold": {
          "type": "decimal",
          "min": 0,
          "observed": 5000,
          "proposed": 10000
        },
        "currency": {
          "type": "enum",
          "values": [
            "INR"
          ],
          "proposed": "INR"
        },
        "levels": {
          "type": "integer",
          "min": 1,
          "max": 3,
          "proposed": 2
        }
      },
      "crossRule": "Currency must match selected demo company policy; proposer cannot be sole approver",
      "pathway": "API simulation"
    },
    {
      "id": "DEMO-INV-TOL",
      "title": "Invoice tolerance",
      "br": "BR-03-011",
      "fields": {
        "percentage": {
          "type": "decimal",
          "min": 0,
          "max": 5,
          "observed": 1,
          "proposed": 2
        }
      },
      "crossRule": "Above allowed maximum blocks submission",
      "pathway": "upload simulation"
    },
    {
      "id": "DEMO-JE-REV",
      "title": "Journal review threshold",
      "br": "BR-12-002",
      "fields": {
        "threshold": {
          "type": "decimal",
          "min": 0,
          "observed": 25000,
          "proposed": 50000
        },
        "currency": {
          "type": "enum",
          "values": [
            "INR"
          ],
          "proposed": "INR"
        }
      },
      "crossRule": "Finance approver required; no self approval",
      "pathway": "UI simulation"
    },
    {
      "id": "DEMO-NUM-RNG",
      "title": "Document number interval",
      "br": "BR-12-002",
      "fields": {
        "start": {
          "type": "integer",
          "proposed": 100000
        },
        "end": {
          "type": "integer",
          "proposed": 199999
        }
      },
      "crossRule": "start < end; no overlap; specialist review and attended recovery; no automatic rollback",
      "pathway": "attended"
    },
    {
      "id": "DEMO-ORG-REF",
      "title": "Company assignment reference",
      "br": "BR-12-008",
      "fields": {
        "companyCode": {
          "type": "OrganizationReference",
          "objectType": "CompanyCode"
        }
      },
      "crossRule": "Referenced company must exist and have verified observation",
      "pathway": "API simulation"
    },
    {
      "id": "DEMO-CUR-CHK",
      "title": "Company currency validation",
      "br": "BR-12-014",
      "fields": {
        "currency": {
          "type": "DerivedEnum",
          "source": "selected CompanyCode.currency"
        }
      },
      "crossRule": "Proposed currency cannot contradict organization; no legal currency change performed",
      "pathway": "read-only validation"
    },
    {
      "id": "DEMO-PUR-GRP",
      "title": "Purchasing responsibility",
      "br": "BR-03-005",
      "fields": {
        "purchasingGroup": {
          "type": "OrganizationReference",
          "objectType": "PurchasingGroup"
        },
        "plant": {
          "type": "OrganizationReference",
          "objectType": "Plant"
        }
      },
      "crossRule": "Selected plant and purchasing group must share permitted project scope",
      "pathway": "UI simulation"
    },
    {
      "id": "DEMO-GR-CTRL",
      "title": "Receipt control",
      "br": "BR-03-010",
      "fields": {
        "receiptRequired": {
          "type": "boolean",
          "observed": false,
          "proposed": true
        }
      },
      "crossRule": "Required receipt control cannot be disabled for the approved demo raw-material scenario",
      "pathway": "upload simulation"
    },
    {
      "id": "DEMO-CLOSE",
      "title": "Close task deadline",
      "br": "BR-12-015",
      "fields": {
        "dayOfFollowingMonth": {
          "type": "integer",
          "min": 1,
          "max": 28,
          "observed": 7,
          "proposed": 5
        }
      },
      "crossRule": "Illustrative working deadline only; no statutory reporting deadline inferred",
      "pathway": "attended"
    }
  ]
}
```
<!-- END SPEC demo-catalogs -->

## Final acceptance

- All 28 route contracts exist and support direct navigation, refresh and safe return.
- Every Pxx-Ayy action is implemented and tested: 130 distinct named actions.
- C01–C24 shared controls work wherever rendered. Coverage includes every actionable instance discovered in supported persona/scenario states, not just 154 labels.
- The five J01–J05 journeys pass from reset seeds with their required exception branches.
- All 138 R1 feature IDs are mapped to real prototype behavior or inspectable simulated evidence; production-only capabilities remain explicitly unimplemented.
- All 202 proposed process records and BR/TC IDs are preserved without implying 202 automated business processes.
- Backend and UI enforce persona, project and organization boundaries. Self-approval, stale approval and unauthorized export/dispatch fail safely.
- Verified organization prerequisites precede dependent configuration dispatch. Unknown writes are reconciled before retry. Success requires readback.
- The assistant supports its bounded intents, grounded citations, context/history and safe refusals. It cannot grant approval or change privileges.
- All five SAP integration previews are useful and explicitly simulated; source ownership and correlation are visible.
- Core journeys work at 360/768/1024/1440 CSS pixels and by keyboard; actual visual inspection is recorded.
- Exports download real fixture content; metrics show denominator, evidence and illustrative assumptions.
- Clean-start, reset, demo scripts, decisions, test evidence, limitations and team handover are complete. No critical dead control, unsafe transition or access leak remains.
- GUX1–GUX6 evidence and named human review are recorded truthfully. Test pass counts alone do not substitute for functional and UX acceptance.

## Sources and version notes

Project authority:

- `GROW_Automation_MVP_Prototype_Implementation_Plan.docx`, GROW UX 001 v1.0, 30 October 2026: 28 screens, 130 actions, 24 shared families and 138-feature coverage.
- `GROW_Automation_Feature_Backlog.xlsx`, 30 October 2026: R1 feature IDs and acceptance criteria.
- `Industrial_Manufacturing_TO_BE_BPD.docx` and the process mapping: proposed 202-process baseline. Embedded requirements retain proposed status.

Official tool references reviewed 30 October 2026:

- [Codex best practices](https://learn.chatgpt.com/docs/learn/best-practices): repository context, durable guidance and validation.
- [Codex development workflows](https://developers.openai.com/cookbook/examples/codex/iterating-development-workflows-with-codex): repository instructions and reusable workflow context.
- [SAP Fiori design principles](https://www.sap.com/design-system/fiori-design-web/v1-142/discover/sap-design-system/vision-and-mission/design-principles)
- [SAP Fiori elements](https://www.sap.com/design-system/fiori-design-web/v1-139/discover/frameworks/smart-templates)
- [SAP CAP documentation](https://cap.cloud.sap/docs/)

UI5/CAP versions, coding assistant interfaces and integration capabilities evolve. B01 must verify the installed environment and current official framework documentation. The prompts deliberately avoid hardcoded model names, subscription claims, live SAP endpoints and unverified automation APIs.
