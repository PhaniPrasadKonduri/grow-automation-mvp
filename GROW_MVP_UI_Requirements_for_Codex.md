# GROW Automation comprehensive MVP UI requirements

UIR 001 v1.0 · 30 October 2026. Detailed supplement to GROW UX 001 and the existing Codex/Copilot libraries.

## Audit conclusion

The prior plan covers journeys, roles, 28 screens and 130 actions, but is incomplete as a field-level UI build specification. This supplement adds 52 global requirements, 196 field/control contracts, page-specific filters/sorts, mock distributions, responsive/state rules and UI acceptance. This is a documentation audit, not a tested application certification.

## Audit findings

| Area | Prior coverage | Evidence and gap |
| --- | --- | --- |
| MVP screen and journey inventory | Covered | Sections 2, 5 and Appendix A; Retain 28 routes and 130 named actions |
| Fiori principles and floorplans | Covered at principle level | Sections 3 and 7; Add per-screen composition and table/control selection |
| Role and approval boundaries | Covered | Sections 8 and 9; Add field visibility and contextual action-state acceptance |
| Seven-phase navigation | Covered | Section 4; Add per-phase worklist and visible prerequisite contracts |
| Assistant and agent behavior | Covered at interaction level | Section 10 and P15; Add panel anatomy, response/error states and evidence treatment |
| Five SAP integrations | Covered at story level | Section 11; Add object columns, timestamps, operation status and fault fixtures |
| Field and column dictionaries | Partial | Appendix A names action inputs; Add typed field/control/rule/example records for every screen |
| Filtering sorting and personalization | Partial | Section 17 shared controls; Add default sort, critical columns, search scope and persisted preferences |
| Layout and action hierarchy | Partial | Three visual compositions; floorplan labels; Add regions, primary action, overflow and detail behavior per page |
| Screen-specific validation and recovery | Partial | Generic and selected action examples; Add empty/invalid/denied/stale/offline/unknown outcomes by screen |
| Mock-data distributions and boundaries | Partial | Section 12 quantities and scenario packs; Add datasets for table density, long strings, null values and state distributions |
| Responsive detail behavior | Partial | Widths and high-level adaptations; Add phone/tablet/desktop table, diff, hierarchy and assistant rules |
| Accessibility and microcopy | Partial | Keyboard/contrast objectives; Add focus order, announcements, label/message and non-color requirements |
| UI generation and traceability gates | Partial | Action registry and feature matrix; Add stable UI requirements, field IDs, generation checklist and review gates |

## Global UI requirements

| ID | Topic | Requirement | Acceptance |
| --- | --- | --- | --- |
| UI-G01 | Scope | Preserve 28 P00–P27 routes, 130 named actions and 24 shared control families. | Registry reconciles with the prior plan; no screen/action disappears. |
| UI-G02 | Scope | Represent all 138 R1 features without claiming production capabilities from mock evidence. | Coverage differentiates direct interaction, simulated evidence and production work. |
| UI-G03 | Fiori | Use native SAP UI5 and supported Fiori elements/freestyle patterns. | Floorplan register names supported controls; no generic HTML dashboard substitution. |
| UI-G04 | Fiori | Use Horizon light theme, SAP typography where available and semantic theme tokens. | No arbitrary status colors, unapproved brand assets or internal-control CSS overrides. |
| UI-G05 | Fiori | Provide one contextually eligible primary action and a concise secondary/overflow hierarchy. | Primary task visible without competing emphasized buttons; action labels use verbs. |
| UI-G06 | Layout | Show project, persona, environment and Demo simulation context consistently. | Context remains accessible at all supported widths and in external previews. |
| UI-G07 | Layout | Use a dynamic context header, content sections and task-appropriate footer/actions. | Header can collapse without losing identity, status or the next task. |
| UI-G08 | Navigation | Preserve filters, selected row and useful return route when opening detail. | Back returns to the prior permitted list state; stale objects show a safe resolution. |
| UI-G09 | Navigation | Support direct route, browser refresh and browser back without blank pages. | All 28 routes have permitted, denied and missing-object outcomes. |
| UI-G10 | Navigation | Make all seven phase labels navigable without advancing readiness gates. | Incomplete phases open their work/readiness summary and list prerequisites. |
| UI-G11 | Tables | Choose responsive tables by default; justify any desktop-oriented analytical grid. | Phone flow offers usable cards/pop-ins or a reduced task view, not squeezed columns. |
| UI-G12 | Tables | Provide search, result count, clear filters and meaningful filtered no-results states. | Clear filters recovers authorized data; inaccessible counts are never disclosed. |
| UI-G13 | Tables | Use page-specific critical columns, stable sort and accessible row navigation. | Identity, business status and blocker remain visible on narrow displays. |
| UI-G14 | Tables | Persist personal table/variant settings by demo user and context. | Changing persona does not inherit another user’s private saved filters. |
| UI-G15 | Tables | Separate row selection, navigation and actionable cell links. | Checkbox selection never unintentionally opens detail or submits a change. |
| UI-G16 | Tables | Bulk actions evaluate every selected record and show per-item eligibility. | Mixed eligible/ineligible selection shows reasons; no implicit batch approval. |
| UI-G17 | Forms | Mark mandatory fields and provide searchable value help with valid scoped options. | Missing input receives field-linked text; no invalid free-text enum is accepted. |
| UI-G18 | Forms | Apply deterministic type, range, uniqueness, reference and cross-field validation. | Each editable field has valid, invalid and boundary fixtures and a focused error target. |
| UI-G19 | Forms | Distinguish observed, proposed and approved values and attribute manual overrides. | Changing a proposed value creates a version and affects approval state. |
| UI-G20 | Forms | Protect unsaved work with Save, Discard and Cancel choices where appropriate. | Cancel leaves the stored version unchanged; navigation does not silently save/lose edits. |
| UI-G21 | Messaging | Use field value state plus message summary for validation errors. | Selecting a summary item focuses the field or affected object; persistent errors are not toast-only. |
| UI-G22 | Messaging | Use concise completion feedback only after the expected state effect succeeds. | No fake success toast or unconditional green completion after a failed operation. |
| UI-G23 | Messaging | Provide loading, empty, filtered-empty, denied, stale and failed states. | Each state offers a permitted useful next step and preserves relevant user input. |
| UI-G24 | Controls | Every visible interactive affordance must produce a specified meaningful outcome. | No empty handler, dead chart, fake export, placeholder route or Coming soon dead end. |
| UI-G25 | Controls | Replace unavailable business actions with actionable blocker/permission review. | Do not render a disabled-looking button that gives no explanation or recovery. |
| UI-G26 | Security | Filter data and actions by persona, project and organization with backend checks. | Hidden buttons alone do not pass; direct forged/deep requests are denied. |
| UI-G27 | Security | Separate author, business approver, release authority, executor and audit export. | Self-approval and unauthorized dispatch/export fail with owned next steps. |
| UI-G28 | Workflow | Show artifact version, target, risk, evidence, expiry and decision owner before approval. | Return/Reject require reason; changed material input invalidates old approval. |
| UI-G29 | Workflow | Show prerequisite scope/organization verification before dependent configuration dispatch. | A navigation shortcut or valid signature cannot bypass a missing prerequisite. |
| UI-G30 | Workflow | Distinguish queued, dispatched, unknown, failed, reconciling and verified outcomes. | Progress counts verified required actions, not merely started actions. |
| UI-G31 | Recovery | An uncertain write offers reconciliation before any retry. | Only proven-not-committed or safe read operations offer retry; history remains visible. |
| UI-G32 | Recovery | Pause prevents new dispatch while preserving in-flight/completed action evidence. | UI never promises reversal of a possible remote commit or unsupported rollback. |
| UI-G33 | Agent UX | Show goal, bounded plan/tool, sources, validation and accountable handoff. | Agent status corresponds to persisted mock events and a meaningful current step. |
| UI-G34 | Agent UX | Expose concise rationale and citations without fabricated hidden reasoning. | Missing evidence produces abstention or a review issue rather than false certainty. |
| UI-G35 | Assistant | Provide contextual shell panel and a phone full-screen conversation. | Open/close returns focus correctly; project change explicitly changes context. |
| UI-G36 | Assistant | Support at least 12 bounded intents, citations, history, stop, retry and feedback. | Unknown prompt clarifies; request to bypass gates cannot grant approval or roles. |
| UI-G37 | Assistant | Limit conversations and citations to authorized persona/project records. | Switching user cannot reveal restricted thread content or source excerpts. |
| UI-G38 | Integration | Show all five SAP systems with operation, source ownership, correlation and last observation. | A reachable endpoint is not automatically business-ready; offline/permission states differ. |
| UI-G39 | Integration | Keep IDs for BR/TC, scope, activity, process, fact sheet and target objects distinct. | Final evidence can traverse each source reference without reusing a foreign ID namespace. |
| UI-G40 | Mock data | Use deterministic seeded synthetic records and a fixed adjustable demo clock. | Reset restores coherent data; overdue/expiry/staleness tests are reproducible. |
| UI-G41 | Mock data | Separate source specification, immutable fixture and mutable application state. | Refresh/restart preserves submitted work; seed is not reloaded on every request. |
| UI-G42 | Metrics | Show numerator, denominator, time basis and observed/illustrative label. | Unknown denominator is Not measured; negative benefit is shown rather than hidden. |
| UI-G43 | Outputs | Generate actual scoped CSV/JSON/text downloads with source and simulation labels. | Export content reconciles and is redacted; read permission does not imply export grant. |
| UI-G44 | Responsive | Validate 360, 768, 1024 and 1440 CSS-pixel viewports. | No clipped labels or horizontal page overflow; key tasks remain possible. |
| UI-G45 | Responsive | Use ordered content and progressive disclosure rather than fixed pixel page grids. | Tree/diff/assistant have one-column phone alternatives with retained context. |
| UI-G46 | Accessibility | Provide labels, accessible names, logical focus, keyboard equivalents and visible focus. | Core journey completes without a pointer; no inaccessible graph-only operation. |
| UI-G47 | Accessibility | Announce status/errors appropriately and never use color alone. | Screen-reader/keyboard checks record actual evidence and any untested combinations. |
| UI-G48 | Localization | Format dates, numbers and currencies by selected display locale with timezone. | Underlying typed values remain stable; identifiers never receive numeric grouping. |
| UI-G49 | Content | Use short business labels, descriptive links, meaningful headings and helpful errors. | Errors identify problem and permitted resolution; stack traces stay in sanitized detail. |
| UI-G50 | Quality | Trace UI requirement to control/handler, mock state, persona and assertion. | No declared UI completion without implemented behavior and recorded verification. |
| UI-G51 | Performance | Debounce search, prevent duplicate submit and preserve busy/timeout feedback. | Repeat clicks create one logical command; long analysis remains cancelable where safe. |
| UI-G52 | Scope | Use Discover, Prepare, Explore, Realize Build, Realize Test, Deploy and Run. | State that the project view splits SAP Activate Realize; do not invent EY proprietary certification. |

## Shared shell and conversation controls

| ID | Control | Required outcome |
| --- | --- | --- |
| C01 | Shell logo and home | Return to authorized landing page; confirm or retain unsaved draft |
| C02 | Navigation expansion and menu item | Expand/collapse menu; route with project context and active selection |
| C03 | Project selector | Search only authorized projects; reload context and clear unrelated selections |
| C04 | Persona and permissions | Open seeded identity details and View permissions; role switching stays in Demo controls |
| C05 | Global search | Search authorized objects; select a result to open its actual route |
| C06 | Notifications | Open notification list; mark read and navigate to referenced task |
| C07 | Help | Open contextual guidance and glossary; close returns focus to trigger |
| C08 | Breadcrumb and browser back | Restore prior object/list context; unsaved edits prompt Save Discard Cancel |
| C09 | Filter variant and clear filters | Apply saved local variant; reset returns all authorized rows |
| C10 | Sort group and column menu | Change data presentation; restore defaults; settings persist for demo persona |
| C11 | Table checkbox and row menu | Update selection count and eligible actions; menu commands use same policy checks |
| C12 | Value help and form inputs | Open searchable valid values; validate on submit; link messages to invalid fields |
| C13 | Tabs expanders and status links | Reveal real content or scoped detail; preserve selection and focus |
| C14 | Dialog confirmation cancel close | Commit only on confirmation; cancel leaves original record unchanged |
| C15 | Message popover and retry | Show field/object-linked issues; retry follows operation safety rules |
| C16 | Loading empty and no-results states | Show progress with cancel where supported; offer reset, add or permitted next action |
| C17 | Assistant shell entry and close | Open contextual panel; close returns focus; phone uses full-screen route |
| C18 | Assistant send stop retry | Submit intent; stop further response events; retry safe analysis with visible history |
| C19 | Assistant sources prompts and feedback | Open cited authorized objects; suggested prompt executes bounded intent; feedback persists |
| C20 | Assistant new conversation and history | Confirm new thread; retrieve only current user/project conversations |
| C21 | Demo scenario selector and fault toggle | Apply named fixture/fault with visible label; preserve separate happy-path reset |
| C22 | Demo reset and guided step controls | Confirm reset; Next/Previous opens story checkpoint without silently approving work |
| C23 | Chart data point and metric drilldown | Open filtered underlying records and show calculation basis |
| C24 | Export menu and download | Generate actual content; permission denial routes to View permissions |

## Mock data requirements

| Dataset | Minimum quantity | Coverage |
| --- | --- | --- |
| Project context | 2 projects; one restricted negative-test project | One active Northstar workspace plus cross-project denial; retain independent reset |
| Personas | 15 distinct synthetic identities/roles | Author/approver separate; read-only sponsor/auditor; expired grant and missing export grant |
| Organization | 10 entities, 5 countries, 10 organization types | IN/DE/US/GB/SG illustrative only; missing field, duplicate code, invalid assignment and cycle variants |
| Process catalog | 202 process records, 15 domains, BR and TC IDs | Search, long names, multi-domain filters and inaccessible reference example |
| Scope | 16 demo candidates | Required fixture distribution: 8 Include, 3 Exclude, 3 Needs decision, 2 Unassessed; independent prerequisite/unverified variants |
| Configuration | 10 typed DEMO activities | 3 draft, 2 awaiting review, 2 approved, 1 returned, 1 invalid, 1 stale; independent scenario snapshots |
| Approval | At least 2 records for each relevant decision state | Pending, approved, returned, rejected, expired, revoked, stale; self-authored negative case |
| Deployment | At least 4 coherent package snapshots | Preflight blocked, authorized happy path, unknown-after-possible-write, attended/mismatch recovery |
| Integrations | 5 system fixtures with at least 4 exchange outcomes each | Success, offline, permission denied, stale/mapping error; stable external references |
| Agent runs | At least 2 runs per MVP agent | Happy result, missing evidence/validation failure; pause/retry and budget boundary |
| Assistant | 12 supported intents plus 6 adverse prompts | Unknown intent, inaccessible source, prompt injection, unsupported approval, stale context and stopped response |
| Evidence | At least 100 synthetic events | Actor/time/correlation lineage; denied attempts; redaction and export entitlement cases |
| Table density | Dedicated 250-row stress fixture for selected lists | Clearly synthetic duplicates-with-new-IDs, not extra business process claims; paging/search/performance |
| Content boundaries | Every screen has a long-text/null/zero/empty variant | 80-character names, 2000-character requirement, unknown timestamp, zero denominator and negative benefit |

## Field and action permissions

| Screen | Editable by | Review restriction |
| --- | --- | --- |
| P04 | Delivery Lead edits project and owners; Administrator manages permitted technical setup | Other project members see scoped read-only setup; legal design edits still require review |
| P06 P07 | Analyst/Functional Consultant uploads, interprets and revises requirements | Approvers inspect sources; no hidden edit authority from a review role |
| P09 P10 | Functional Consultant proposes and records draft inclusion decisions | Scope Approver reviews read-only and decides in P17; own authored version cannot be approved |
| P11 P12 | Functional Consultant edits organization attributes and assignments | Organization Approver reviews read-only here and decides in P17 |
| P13 P14 | Configuration Consultant edits proposed typed values and override reason | Finance Approver reviews read-only here and decides in P17; observations/approved values are always read-only |
| P16 P17 | Eligible assigned separate approver decides exact artifact revision | Author, expired/revoked user and unassigned reader get eligibility/blocker view |
| P18 P19 | Deployment Operator prepares eligible packages and executes authorized simulation | Release Manager reviews and authorizes through P17; neither bypasses business or quality gates |
| P20 P21 | Authorized Operator refreshes observations, assigns recovery and reports attended work | Functional Consultant inspects business differences; no user edits observed values to force a match |
| P22 | QA records product results; assigned Business Owner records UAT decision | No role changes stored assertions or evidence to manufacture a pass |
| P23 | Auditor/project reader inspects permitted records | Export requires separate entitlement; events and redacted values are not editable |
| P25 | Delivery Lead edits persisted illustrative planning assumptions | Sponsor reads and drills into calculations; any personal what-if is clearly nonpersisted |
| P26 | Only Administrator with an explicit demo access-management grant changes permitted grants | Security Reviewer is read-only unless separately granted; no unrestricted role escalation |

## State and recovery requirements

| State | Presentation | Recovery |
| --- | --- | --- |
| Loading | Show descriptive busy feedback and retain context; prevent duplicate mutation | Safe cancel for analysis; never imply abort of an already committed write |
| No records | Explain that the dataset is empty | Offer permitted Create, Upload, Generate or setup route |
| No matches | Show active filters and authorized result count | Clear filters returns data without disclosing inaccessible records |
| Invalid | Field-linked message plus actionable summary | Keep draft input and focus the field; validation is repeated by backend |
| Denied | Show useful permission explanation without private object data | Return to permitted list or View permissions; no fake retry |
| Stale | Show source/snapshot version and affected approval | Refresh or review changed values; require new approval when material |
| Offline/failed | Retain last good observation and distinguish connection/permission/business error | Owned exception; safe retry only where allowed |
| Unknown write | Show uncertainty separately from failed or verified | Readback reconciliation before any potential replay |
| Partial result | Show per-item outcomes and remaining work | Do not mark package complete; recover affected actions only |
| Unsaved change | Warn when in-app navigation/cancel risks losing edits | Save, Discard, Cancel; Cancel leaves current task and values intact |

Desktop supports useful list/detail layouts; tablet reduces simultaneous panels; phone uses one column, responsive pop-ins/cards, stacked observed/proposed/approved values and a full-screen assistant. Validate 360/768/1024/1440 CSS-pixel widths, keyboard flow, focus return, visible focus and meaningful status announcements. All dates show timezone; identifiers remain strings; unknown differs from zero.

## Adoption prompt

Run this before UI generation or as a targeted review for existing screens:

```text
Read AGENTS.md, docs/spec, the existing prototype plan and this UI requirements supplement. Preserve all original P00–P27 screen IDs and Pxx-Ayy actions. Extract the marked UI requirements JSON below into docs/spec/ui-requirements.json; do not overwrite the seven existing specification files. Record UIR 001 v1.0 provenance. Reconcile 52 globals, 28 screens, 196 field contracts and 130 action contracts. For each screen, compare current implementation to layout, fields, filters/sort, action outcomes, states, roles, mock data and responsive rules. Create an honest requirement-to-control-to-fixture-to-test coverage register. Implement the next bounded UI-Pxx task from the existing library using this supplement. Use genuine UI5/Fiori controls and deterministic mock data. Do not claim a screen complete from static appearance, fake success or missing tests. Preserve unrelated work. Report changed files, actual checks and the next unmet dependency.
```

## P00 Demo entry and role context

Route: `/demo`. Personas: All personas. Layout: Demo entry.

Regions: Persona; Project; Scenario; Seed version. Primary task: Start guided tour.

Filters: Persona, project and named scenario. Default order: Project name ascending.

| Field requirement | Key/control | Rule and example |
| --- | --- | --- |
| UI-P00-F01 | persona / Select | Required; show role and organization scope; backend validates session; example Functional Consultant |
| UI-P00-F02 | project / Searchable select | Required; authorized projects only; example NORTHSTAR-DEMO |
| UI-P00-F03 | scenario / Select | Required; J01–J05 plus named fault variants; example J01 |
| UI-P00-F04 | seedVersion / Read-only text | Show version and reset timestamp; example demo-v1 |
| UI-P00-F05 | resumeState / Status link | Open current checkpoint; never auto-approve; example Scope draft |
| UI-P00-F06 | resetScope / Dialog choice | Require explicit confirmation; selected workspace only; example Current project |

| Action ID/control | Required outcome |
| --- | --- |
| P00-A01 / Choose persona | Load that user’s permitted navigation and project scope |
| P00-A02 / Choose scenario | Load a separate fixture version and explain starting state |
| P00-A03 / Start guided tour | Open P01 and show the first story prompt |
| P00-A04 / Reset scenario | Clear only the selected demo workspace and restore its seed |

Empty: No demo workspace exists. Choose a project and seed to begin. Invalid/blocked: Reject an unknown persona or seed; preserve prior valid selection.

Responsive: retain identity/status/next action; use pop-ins or stacked details for secondary fields. Every field/action requires valid/invalid, persona, cancel/refresh and relevant adverse-state checks. Apply all global requirements.

## P01 Executive value cockpit

Route: `/home`. Personas: Sponsor and Delivery Lead. Layout: Overview.

Regions: Project readiness; decisions; next work; benefit basis. Primary task: Continue journey.

Filters: Phase, country and owner; synchronized KPI/list scope. Default order: Critical blockers then earliest due date.

| Field requirement | Key/control | Rule and example |
| --- | --- | --- |
| UI-P01-F01 | phaseReadiness / KPI link | Count accepted gates over required gates; drill to filtered records; example Explore 2 of 3 |
| UI-P01-F02 | pendingApprovals / KPI link | Count visible assigned work; never show inaccessible totals; example 4 pending |
| UI-P01-F03 | blockers / Ranked list | Order critical first then due date; open exact object; example 2 blockers |
| UI-P01-F04 | nextTask / Actionable list | Title, owner, due, phase and status; no dead rows; example Review scope |
| UI-P01-F05 | verifiedActions / KPI link | Show numerator denominator and observed time; example 3 of 5 |
| UI-P01-F06 | benefit / Metric link | Label illustrative or observed; open calculation; example Illustrative 12 h |

| Action ID/control | Required outcome |
| --- | --- |
| P01-A01 / Readiness KPI | Open P02 with the same filter; reveal numerator and denominator |
| P01-A02 / Value indicator | Open P25 and show its assumptions and evidence |
| P01-A03 / Approval count | Open P16 filtered to visible approvals |
| P01-A04 / Continue journey | Route to the next eligible task; show blockers when none is ready |

Empty: No work yet. Open Prepare or load the approved demo seed. Invalid/blocked: A metric with unavailable data shows Not measured, not zero or 100 percent.

Responsive: retain identity/status/next action; use pop-ins or stacked details for secondary fields. Every field/action requires valid/invalid, persona, cancel/refresh and relevant adverse-state checks. Apply all global requirements.

## P02 Project and seven phase workspace

Route: `/projects/:id`. Personas: Delivery Lead and permitted project members. Layout: Project Object Page.

Regions: Context header; seven-phase strip; worklist; readiness. Primary task: Review phase gate.

Filters: Phase, task type, owner and status. Default order: Phase order then due date.

| Field requirement | Key/control | Rule and example |
| --- | --- | --- |
| UI-P02-F01 | projectId / Read-only link | Stable key with project name and simulation badge; example NORTHSTAR-DEMO |
| UI-P02-F02 | phase / Segmented navigation | All seven phases reachable; navigation does not complete gate; example Explore |
| UI-P02-F03 | gateStatus / Status link | Incomplete, Ready for review, Accepted; show evidence basis; example Incomplete |
| UI-P02-F04 | workItem / Responsive table | Title, type, owner, due, blocker and status; example Organization review |
| UI-P02-F05 | assumption / List | Open owner and resolution source; example Countries synthetic |
| UI-P02-F06 | sourceBaseline / Version link | Show source revision and effective demo time; example BPD v0.9 |

| Action ID/control | Required outcome |
| --- | --- |
| P02-A01 / Select phase | Open its worklist or gate overview without granting execution authority |
| P02-A02 / Gate details | Show required evidence, missing items, owner and linked tasks |
| P02-A03 / Change project | Reload context and clear selections belonging to the prior project |
| P02-A04 / Phase completion | Open approval preparation or list blockers; never bypass dependencies |

Empty: This phase has no assigned work. Show phase guidance and eligible next task. Invalid/blocked: An incomplete gate opens blockers and cannot be accepted by navigation.

Responsive: retain identity/status/next action; use pop-ins or stacked details for secondary fields. Every field/action requires valid/invalid, persona, cancel/refresh and relevant adverse-state checks. Apply all global requirements.

## P03 Discover and transformation context

Route: `/projects/:id/discover`. Personas: Sponsor Business Owner and Enterprise Architect. Layout: Discovery Object Page.

Regions: Business outcomes; process map; application context. Primary task: Confirm discovery brief.

Filters: Domain, outcome owner and application lifecycle. Default order: Outcome priority then title.

| Field requirement | Key/control | Rule and example |
| --- | --- | --- |
| UI-P03-F01 | industry / Select | Required for brief; use industrial manufacturing; example Industrial manufacturing |
| UI-P03-F02 | outcome / Editable list | Require title, owner and measurable indicator; example Reduce review rework |
| UI-P03-F03 | processDomain / Tree select | Select authorized catalog domain; preserve parent context; example D03 Procurement |
| UI-P03-F04 | application / Relationship list | Show fact-sheet reference, owner and lifecycle; example ERP legacy demo |
| UI-P03-F05 | assumption / Editable list | Value, source, status and decision owner; example Five demo countries |
| UI-P03-F06 | briefVersion / Version link | New save creates reviewable revision; example Discovery v1 |

| Action ID/control | Required outcome |
| --- | --- |
| P03-A01 / Business outcome | Open measurable benefit and linked process set |
| P03-A02 / Process landscape | Open P08 filtered to that domain |
| P03-A03 / Architecture context | Open P27 with LeanIX references and lifecycle context |
| P03-A04 / Confirm discovery brief | Version the brief and show required decision owners |

Empty: No discovery brief. Create an outcome and select a process domain. Invalid/blocked: An outcome without an owner or measurement basis remains a draft.

Responsive: retain identity/status/next action; use pop-ins or stacked details for secondary fields. Every field/action requires valid/invalid, persona, cancel/refresh and relevant adverse-state checks. Apply all global requirements.

## P04 Prepare and project setup

Route: `/projects/:id/prepare`. Personas: Delivery Lead and Administrator. Layout: Prepare Wizard and Object Page.

Regions: Project basics; countries/entities; owners; target; readiness. Primary task: Check readiness.

Filters: Country, organization type and readiness issue. Default order: Required blockers first.

| Field requirement | Key/control | Rule and example |
| --- | --- | --- |
| UI-P04-F01 | projectName / Input | Required; trim whitespace; 3–80 characters; example Northstar Manufacturing Demo |
| UI-P04-F02 | countries / Multi-value help | IN DE US GB SG synthetic; at least one for demo baseline; example IN, DE, US, GB, SG |
| UI-P04-F03 | entities / Table with create/edit | 10 seeded unique company codes; link to P12; example 1000 |
| UI-P04-F04 | owner / Value help | Required; eligible seeded project member; example Delivery Lead |
| UI-P04-F05 | target / Value help | Required explicit nonproduction demo target; example S4-PILOT |
| UI-P04-F06 | sourceDocument / Object link | Show selected revision and extraction state; example TO-BE v0.9 |
| UI-P04-F07 | readiness / Checklist | Show input, permission and capability checks separately; example 2 issues |

| Action ID/control | Required outcome |
| --- | --- |
| P04-A01 / Edit project | Validate mandatory values and save a draft version |
| P04-A02 / Legal entities | Open P12 with uniqueness and country validation |
| P04-A03 / Assign owners | Update responsibility and notify the assignee |
| P04-A04 / Readiness check | Show missing setup and route to P05 or P06 for resolution |

Empty: Project setup is incomplete. Start with project name and owner. Invalid/blocked: Duplicate entity codes or missing target block readiness; focus the offending field.

Responsive: retain identity/status/next action; use pop-ins or stacked details for secondary fields. Every field/action requires valid/invalid, persona, cancel/refresh and relevant adverse-state checks. Apply all global requirements.

## P05 Integration control center

Route: `/projects/:id/integrations`. Personas: Administrator and Integration Operator. Layout: Integration List Report and detail.

Regions: Filter bar; five-system table; operation detail; exchange log. Primary task: Test selected connection.

Filters: System, direction, pathway and connection/permission state. Default order: Failed permission then failed connectivity then system name.

| Field requirement | Key/control | Rule and example |
| --- | --- | --- |
| UI-P05-F01 | system / Value help | Exactly five named SAP system fixtures; filter by name; example SAP CBC |
| UI-P05-F02 | connectionState / Semantic status | Connectivity, authentication and authorization separate; example Permission failed |
| UI-P05-F03 | operation / Responsive table | Name, direction, pathway, permission, last observation; example Read organization |
| UI-P05-F04 | pathway / Select filter | API upload UI attended unsupported; simulation always visible; example Attended |
| UI-P05-F05 | correlationId / Copyable link | Stable exchange reference; open sanitized detail; example CORR-DEMO-204 |
| UI-P05-F06 | lastObserved / Date/time | Show timezone and stale status; retain last good time; example 30 Oct 2026 10:00 IST |
| UI-P05-F07 | externalObject / Link | Open labeled simulated preview and return route; example CBC-DEMO-01 |

| Action ID/control | Required outcome |
| --- | --- |
| P05-A01 / Test connection | Show separate connectivity, authentication and permitted-operation results |
| P05-A02 / View contract | Show API/upload/UI/attended classification and approved payload preview |
| P05-A03 / Refresh snapshot | Advance observed timestamp or show seeded stale/offline failure |
| P05-A04 / Inspect failed exchange | Open P21 with sanitized request, response and accountable recovery |
| P05-A05 / Open SAP reference | Open an in-app simulated target preview with external system identity and return route |

Empty: No operation matches the filter. Clear filters; keep all five systems discoverable. Invalid/blocked: Offline and expired permissions are distinct; no green business-ready status from reachability alone.

Responsive: retain identity/status/next action; use pop-ins or stacked details for secondary fields. Every field/action requires valid/invalid, persona, cancel/refresh and relevant adverse-state checks. Apply all global requirements.

## P06 TO BE document intake

Route: `/projects/:id/documents`. Personas: Business Analyst and Functional Consultant. Layout: Document intake Wizard.

Regions: Upload collection; safety/extraction progress; revision list; source preview. Primary task: Review extracted requirements.

Filters: Document/revision, owner and extraction state. Default order: Newest revision first.

| Field requirement | Key/control | Rule and example |
| --- | --- | --- |
| UI-P06-F01 | file / Upload control | DOCX only initially; proposed max 10 MiB; reject before parsing; example TO-BE.docx |
| UI-P06-F02 | documentName / Input | Required metadata; preserve original filename separately; example TO-BE industrial demo |
| UI-P06-F03 | revision / Read-only version | Duplicate content offers existing or explicit new revision; example v0.9 |
| UI-P06-F04 | owner / Value help | Required authorized source owner; example Business Analyst |
| UI-P06-F05 | extractionState / Progress/status | Queued, Screening, Extracting, Review ready, Failed; real fixture transitions; example Review ready |
| UI-P06-F06 | sourceLocation / Source link | Paragraph or section resolves to actual excerpt; example Section D12 paragraph 3 |
| UI-P06-F07 | extractedCount / Count link | Show requirements, unresolved items and source revision; example 202 records |

| Action ID/control | Required outcome |
| --- | --- |
| P06-A01 / Upload document | Validate type and size; display extraction progress and resulting revision |
| P06-A02 / Use BPD fixture | Create the same downstream records as upload; preserve BR and TC IDs |
| P06-A03 / Inspect source | Open document preview at the cited passage |
| P06-A04 / Resolve upload issue | Offer new revision, remove draft or retry safe extraction |
| P06-A05 / Review requirements | Open P07 with unresolved and low-evidence items first |

Empty: No source document. Upload a DOCX or use the clearly labeled BPD fixture. Invalid/blocked: Wrong type, oversize, duplicate, unsafe content and parse failure have distinct messages and recovery.

Responsive: retain identity/status/next action; use pop-ins or stacked details for secondary fields. Every field/action requires valid/invalid, persona, cancel/refresh and relevant adverse-state checks. Apply all global requirements.

## P07 Requirement and fit workbench

Route: `/projects/:id/requirements`. Personas: Business Analyst and Functional Consultant. Layout: Requirement List Report with detail.

Regions: Filter bar; requirements table; source and fit detail. Primary task: Request scope proposal.

Filters: Text/BR/TC, domain, fit, review status and owner. Default order: Needs evidence then BR ID.

| Field requirement | Key/control | Rule and example |
| --- | --- | --- |
| UI-P07-F01 | requirementId / Object link | Preserve BR-nn-nnn and linked TC; immutable identifier; example BR-12-003 |
| UI-P07-F02 | statement / Text area | Required atomic business statement; max 2000 chars; version edits; example Supplier payments |
| UI-P07-F03 | domain / Value help | 15 supplied domains; no free-text new domain without review; example D12 |
| UI-P07-F04 | fitType / Select | Unassessed, Standard fit, Configuration, Extension, Needs decision; example Configuration |
| UI-P07-F05 | sourceRef / Source link | Required for approved interpretation; distinguish assumption; example BPD v0.9 |
| UI-P07-F06 | reviewStatus / Status/filter | Draft, Needs evidence, Reviewed, Stale; example Needs evidence |
| UI-P07-F07 | owner / Value help | Eligible reviewer; route task by project scope; example Finance specialist |

| Action ID/control | Required outcome |
| --- | --- |
| P07-A01 / Filter or search | Update rows and counts; provide reset and meaningful no-results state |
| P07-A02 / Edit requirement | Create a new version and mark dependent proposals stale |
| P07-A03 / Inspect trace | Show source, scope, organization, configuration, TC and evidence links |
| P07-A04 / Request scope proposal | Create an agent run in P15 and route completed output to P09 |
| P07-A05 / Resolve assumption | Validate source and update the unresolved decision register |

Empty: No requirements match. Clear filters or return to document intake. Invalid/blocked: Blank statement or unresolved required evidence prevents reviewed status and proposal submission.

Responsive: retain identity/status/next action; use pop-ins or stacked details for secondary fields. Every field/action requires valid/invalid, persona, cancel/refresh and relevant adverse-state checks. Apply all global requirements.

## P08 Process and architecture explorer

Route: `/projects/:id/processes`. Personas: Functional Consultant and Enterprise Architect. Layout: Process Tree and detail.

Regions: Domain tree; process list; process/BR/TC detail; related applications. Primary task: Add process to review.

Filters: Text/BR/TC, domain and selected basket membership. Default order: Domain order then BR ID.

| Field requirement | Key/control | Rule and example |
| --- | --- | --- |
| UI-P08-F01 | domainId / Tree node | 15 domains; expand/collapse and keyboard selection; example D03 |
| UI-P08-F02 | processName / Searchable row | 202 catalog processes; search name or BR/TC; example Supplier liabilities and payments |
| UI-P08-F03 | requirementId / Link | Open P07 with same context; example BR-12-003 |
| UI-P08-F04 | testId / Link | Show proposed acceptance, not automated process coverage; example TC-12-003 |
| UI-P08-F05 | processReference / External preview link | Show source/version and illustrative flow label; example SIG-DEMO-012 |
| UI-P08-F06 | applicationReference / Relationship link | Show distinct LeanIX fact-sheet identity; example LX-APP-001 |
| UI-P08-F07 | reviewBasket / Token list | Prevent duplicates; show count and remove action; example 3 selected |

| Action ID/control | Required outcome |
| --- | --- |
| P08-A01 / Select domain or process | Open process detail with BR/TC and scope candidates |
| P08-A02 / View process flow | Show a labeled illustrative flow and provenance; real licensed link is a separate action |
| P08-A03 / Inspect application relation | Open P27 with the same process context |
| P08-A04 / Add to review | Add requirements to the scope review basket and show updated count |

Empty: No process found. Clear search or select a domain. Invalid/blocked: A missing process reference shows unavailable evidence, not an invented official SAP diagram.

Responsive: retain identity/status/next action; use pop-ins or stacked details for secondary fields. Every field/action requires valid/invalid, persona, cancel/refresh and relevant adverse-state checks. Apply all global requirements.

## P09 Scoping agent review

Route: `/projects/:id/scope`. Personas: Functional Consultant and Scope Approver. Layout: Scoping List Report.

Regions: Candidate filters; dependency summary; candidates; comparison. Primary task: Submit scope baseline.

Filters: Decision, country, applicability, prerequisite state and owner. Default order: Unresolved prerequisites then candidate ID.

| Field requirement | Key/control | Rule and example |
| --- | --- | --- |
| UI-P09-F01 | candidateId / Object link | DEMO-SCOPE-* unless real identity verified; pair ID and title; example DEMO-SCOPE-01 |
| UI-P09-F02 | requirementRefs / Multi-link | Each candidate has traceable requirement set; example BR-03-005 |
| UI-P09-F03 | countryApplicability / Status/popover | Available, Unverified, Unavailable; never infer from rank; example Unverified demo |
| UI-P09-F04 | reviewDecision / Select with reason | Include, Exclude, Needs decision; persist reviewer attribution; example Include |
| UI-P09-F05 | prerequisites / Count/status link | Open dependent candidates and unresolved conflicts; example 1 missing |
| UI-P09-F06 | proposalVersion / Version selector | Compare exact revisions; retain human edits; example v2 |
| UI-P09-F07 | reviewOwner / Value help | Separate author and scope approver; example Scope Approver |

| Action ID/control | Required outcome |
| --- | --- |
| P09-A01 / Generate proposal | Create visible planned/running/completed agent states in P15 |
| P09-A02 / Select candidate | Navigate to P10 with evidence and prerequisites |
| P09-A03 / Accept or exclude | Persist reviewer choice; update dependency and coverage counts |
| P09-A04 / Compare versions | Show added/removed items and downstream impact |
| P09-A05 / Submit scope baseline | Create scope approval in P16 or show unresolved blockers |

Empty: No candidates. Select reviewed requirements and generate a proposal. Invalid/blocked: Missing prerequisite, invalid identity or unresolved applicability blocks executable baseline approval.

Responsive: retain identity/status/next action; use pop-ins or stacked details for secondary fields. Every field/action requires valid/invalid, persona, cancel/refresh and relevant adverse-state checks. Apply all global requirements.

## P10 Scope candidate detail

Route: `/projects/:id/scope/:scopeId`. Personas: Functional Consultant and Scope Approver. Layout: Scope Object Page.

Regions: Identity header; rationale; applicability; prerequisites; impact. Primary task: Apply reviewer decision.

Filters: Country and dependency status within object sections. Default order: Country code; unresolved dependencies first.

| Field requirement | Key/control | Rule and example |
| --- | --- | --- |
| UI-P10-F01 | scopeIdentity / ID/title display | Show verified versus synthetic status and catalog release; example DEMO-SCOPE-01 |
| UI-P10-F02 | rationale / Expandable text | Concise evidence-backed reason; no hidden chain-of-thought; example Matches purchasing requirement |
| UI-P10-F03 | sourceCitations / Source list | All links accessible and resolve to revision/excerpt; example BR-03-005 |
| UI-P10-F04 | countryCheck / Country table | Country, availability, evidence time and decision owner; example IN / unverified |
| UI-P10-F05 | dependency / Related-object table | Type, referenced item, readiness and conflict reason; example Requires organization |
| UI-P10-F06 | reviewReason / Text area | Required for exclusion/override; max 1000 chars; example Outside pilot |
| UI-P10-F07 | activationStatus / Status link | Package eligibility separate from candidate acceptance; example Approval needed |

| Action ID/control | Required outcome |
| --- | --- |
| P10-A01 / Inspect SAP identity | Display exact ID/title pair, release and verification state |
| P10-A02 / Explain recommendation | Answer using cited requirements and catalog excerpts |
| P10-A03 / Resolve prerequisite | Open the dependent scope object and preserve return context |
| P10-A04 / Apply reviewer decision | Save candidate decision and invalidate impacted approvals |
| P10-A05 / Prepare activation package | Open P18 dry-run package or route to remaining approvals |

Empty: Referenced candidate is missing or inaccessible. Return to permitted candidate list. Invalid/blocked: Changing the decision shows downstream impact and invalidates affected approval.

Responsive: retain identity/status/next action; use pop-ins or stacked details for secondary fields. Every field/action requires valid/invalid, persona, cancel/refresh and relevant adverse-state checks. Apply all global requirements.

## P11 Organization structure designer

Route: `/projects/:id/organization`. Personas: Functional Consultant and Organization Approver. Layout: Organization Tree and details.

Regions: Summary and validation; accessible tree; selected node; assignments. Primary task: Validate structure.

Filters: Type, country, issue severity and code/name. Default order: Hierarchy order; issues critical first.

| Field requirement | Key/control | Rule and example |
| --- | --- | --- |
| UI-P11-F01 | nodeId / Tree/list key | Stable internal identity; select opens P12; example ORG-CC-1000 |
| UI-P11-F02 | objectType / Value help | 10 approved demo types; typed parent/assignment rules; example CompanyCode |
| UI-P11-F03 | code / Input | Required unique within type/project; company/plant demo codes use four uppercase alphanumerics; example 1000 |
| UI-P11-F04 | country / Value help | Required for company; synthetic demo selection explicit; example IN |
| UI-P11-F05 | currency / Value help | Required for company; seed-consistent; no legal advice; example INR |
| UI-P11-F06 | assignment / Relationship editor | Valid type, cardinality and existing target; reject cycles; example Plant IN01 to 1000 |
| UI-P11-F07 | validationIssues / Message list | Focus exact node/field; show error versus warning; example Duplicate plant code |

| Action ID/control | Required outcome |
| --- | --- |
| P11-A01 / Select node | Open P12 with required attributes and assignments |
| P11-A02 / Add node or assignment | Open typed form; reject duplicate codes and invalid parents |
| P11-A03 / Generate design | Run organization agent and show proposed graph differences |
| P11-A04 / Validate structure | List missing attributes and assignment errors with focus links |
| P11-A05 / Submit structure | Create organization approval and downstream impact summary |

Empty: No organization proposal. Generate from approved scope or add the first permitted node. Invalid/blocked: Duplicate code, cycle, invalid assignment and missing legal attributes block submission.

Responsive: retain identity/status/next action; use pop-ins or stacked details for secondary fields. Every field/action requires valid/invalid, persona, cancel/refresh and relevant adverse-state checks. Apply all global requirements.

## P12 Organization object detail

Route: `/projects/:id/organization/:nodeId`. Personas: Functional Consultant and Organization Approver. Layout: Organization Object Page.

Regions: Node header; typed attributes; assignments; observed diff; impact. Primary task: Save node revision.

Filters: Assignment type and observation result. Default order: Assignment type then target code.

| Field requirement | Key/control | Rule and example |
| --- | --- | --- |
| UI-P12-F01 | objectType / Read-only discriminator | Determine required form and permitted assignments; example CompanyCode |
| UI-P12-F02 | code / Input | Required object-type contract; company/plant demo codes four alphanumerics; key changes require design review; example 1000 |
| UI-P12-F03 | name / Input | Required; 2–80 chars; fictional label; example Northstar IN Manufacturing Demo |
| UI-P12-F04 | country / Value help | Required for legal entity; not required for every subordinate node; example IN |
| UI-P12-F05 | currency / Value help | Required for company; derived reference rules elsewhere; example INR |
| UI-P12-F06 | assignments / Editable table | Show assignment type, target code/name and validation; example Plant IN01 |
| UI-P12-F07 | observedVersion / Timestamp/diff | Distinguish designed value from target observation; example Observed 10:00 IST |

| Action ID/control | Required outcome |
| --- | --- |
| P12-A01 / Edit attributes | Validate code/country/currency and save new graph revision |
| P12-A02 / Manage assignments | Validate cardinality and update tree and detail together |
| P12-A03 / Compare observed target | Show designed versus observed structure with timestamp |
| P12-A04 / Inspect impact | List affected configuration proposals and approvals |
| P12-A05 / Return to designer | Restore selected node and prior filter |

Empty: Node not found or inaccessible. Return to authorized organization tree. Invalid/blocked: Cancel preserves original node; save updates graph and list together and shows affected configuration.

Responsive: retain identity/status/next action; use pop-ins or stacked details for secondary fields. Every field/action requires valid/invalid, persona, cancel/refresh and relevant adverse-state checks. Apply all global requirements.

## P13 Configuration activity worklist

Route: `/projects/:id/configuration`. Personas: Configuration Consultant and Finance Approver. Layout: Configuration List Report.

Regions: Organization/status/pathway filters; activity list; validation summary. Primary task: Generate values.

Filters: Activity ID/title, company/plant, validation, risk and pathway. Default order: Invalid/stale first then activity ID.

| Field requirement | Key/control | Rule and example |
| --- | --- | --- |
| UI-P13-F01 | activityId / Object link | DEMO-* unless verified real metadata; not an endpoint; example DEMO-PT |
| UI-P13-F02 | activityTitle / Text/link | Business-readable title paired with ID; example Payment terms |
| UI-P13-F03 | organizationRef / Value help/filter | Only approved permitted nodes; show verification state; example 1000 |
| UI-P13-F04 | pathway / Status/filter | API, upload, UI, attended, read-only, unsupported; all simulated; example Attended |
| UI-P13-F05 | validationStatus / Semantic status | Not checked, Valid, Invalid, Needs evidence, Stale; example Needs evidence |
| UI-P13-F06 | risk / Status/popover | Explain specialist approval need; no unexplained numeric score; example Finance sensitive |
| UI-P13-F07 | proposalVersion / Version link | Exact value set and source baseline; example v3 |

| Action ID/control | Required outcome |
| --- | --- |
| P13-A01 / Generate values | Run configuration agent with grounded requirements and verified structure |
| P13-A02 / Open activity | Open P14 with typed fields, current values and suggested values |
| P13-A03 / Filter pathway | Update supported-operation rows and counts |
| P13-A04 / Validate set | Show errors and unresolved local requirements |
| P13-A05 / Submit change set | Create approval for the exact target, values and package hash |

Empty: No eligible activities. Inspect scope, organization verification or clear filters. Invalid/blocked: Unverified organization, invalid field contract or unsupported route prevents executable submission.

Responsive: retain identity/status/next action; use pop-ins or stacked details for secondary fields. Every field/action requires valid/invalid, persona, cancel/refresh and relevant adverse-state checks. Apply all global requirements.

## P14 Configuration proposal and value diff

Route: `/projects/:id/configuration/:activityId`. Personas: Configuration Consultant and Finance Approver. Layout: Configuration Diff Object Page.

Regions: Context/risk; before/proposed/approved comparison; evidence; decision. Primary task: Submit validated change set.

Filters: Changed only, invalid only and evidence missing. Default order: Invalid fields first; retain contract field order.

| Field requirement | Key/control | Rule and example |
| --- | --- | --- |
| UI-P14-F01 | fieldName / Read-only label | Business label and technical contract key; example Payment days |
| UI-P14-F02 | observedValue / Read-only typed value | Show retrieval time and provenance; missing remains Unknown; example 30 |
| UI-P14-F03 | proposedValue / Typed input | Per demo-catalog type/range/enum/reference; no free text for enum; example 45 |
| UI-P14-F04 | approvedValue / Read-only typed value | Blank until current version approved; retain historical approval separately; example Not approved |
| UI-P14-F05 | sourceRef / Evidence link | BR plus explicit DEMO-POLICY source for numeric assumptions; example BR-12-003 / DEMO-POLICY-001 |
| UI-P14-F06 | organizationRef / Object link | Show selected target company/plant and verified state; example 1000 verified |
| UI-P14-F07 | changeReason / Text area | Required for manual override; record actor and version; example Demo policy updated |
| UI-P14-F08 | snapshotTime / Date/time refresh | Material drift invalidates approval; highlight exact difference; example 10:00 IST |

| Action ID/control | Required outcome |
| --- | --- |
| P14-A01 / Edit proposed value | Validate allowed values and cross-field rules; retain human edit attribution |
| P14-A02 / View evidence | Open BR/source passage and organization dependency |
| P14-A03 / Explain risk | Show finance-sensitive or irreversible conditions and required owner |
| P14-A04 / Refresh observed values | Update diff and invalidate approval when target state changed |
| P14-A05 / Submit or revise | Route to P16 or return a field-linked blocker list |

Empty: No value proposal. Generate values for this eligible activity. Invalid/blocked: Invalid value highlights cell and summary; refresh drift blocks dispatch until reviewed again.

Responsive: retain identity/status/next action; use pop-ins or stacked details for secondary fields. Every field/action requires valid/invalid, persona, cancel/refresh and relevant adverse-state checks. Apply all global requirements.

## P15 Agent mission control

Route: `/projects/:id/agents/:runId`. Personas: Consultant and Delivery Lead. Layout: Agent Mission Object Page.

Regions: Goal and state; plan/timeline; sources; findings; handoff. Primary task: Review outcome.

Filters: Agent, run status, step state and finding severity. Default order: Newest run; steps in execution order.

| Field requirement | Key/control | Rule and example |
| --- | --- | --- |
| UI-P15-F01 | agentType / Select/filter | Scoping, Organization, Configuration, Deployment only; example Scoping |
| UI-P15-F02 | runId / Stable link | Versioned run with project and source context; example RUN-DEMO-001 |
| UI-P15-F03 | state / Timeline/status | Planned through completed, failed, paused; meaningful timestamps; example Validating |
| UI-P15-F04 | step / Expandable list | Goal, bounded tool, input class, expected outcome and prerequisite; example Check scope identity |
| UI-P15-F05 | source / Evidence link | Revision, location and freshness; accessible only; example BPD v0.9 |
| UI-P15-F06 | validationFinding / Message list | Severity, object and action to resolve; example Missing country evidence |
| UI-P15-F07 | budget / Read-only meter | Demo step/retry counts and configured cap; no invented live token cost; example 3 of 8 steps |
| UI-P15-F08 | handoffOwner / Persona/task link | Explicit next accountable user or service; example Scope Approver |

| Action ID/control | Required outcome |
| --- | --- |
| P15-A01 / Inspect plan | Show intended tool, bounded input, expected output and prerequisite |
| P15-A02 / View sources | Open source excerpt and freshness information |
| P15-A03 / Pause or cancel | Prevent undispatched steps and preserve completed evidence |
| P15-A04 / Review outcome | Open P09 P11 or P13 with run linkage |
| P15-A05 / Retry safe analysis | Create linked attempt; preserve prior failure and budget history |

Empty: No agent run yet. Open an eligible proposal and start analysis. Invalid/blocked: No evidence causes abstention; failed read-only analysis can retry; privileged execution cannot bypass policy.

Responsive: retain identity/status/next action; use pop-ins or stacked details for secondary fields. Every field/action requires valid/invalid, persona, cancel/refresh and relevant adverse-state checks. Apply all global requirements.

## P16 My approvals inbox

Route: `/projects/:id/approvals`. Personas: Scope Organization Finance and Release Approvers. Layout: Approval Inbox List Report.

Regions: Assignment/status filters; approval table; eligibility details. Primary task: Open selected approval.

Filters: My assignment, approval type, due date, risk and status. Default order: Overdue then due date then approval ID.

| Field requirement | Key/control | Rule and example |
| --- | --- | --- |
| UI-P16-F01 | approvalId / Object link | Stable approval reference and type; example APR-DEMO-001 |
| UI-P16-F02 | artifact / Object link | Exact proposal/package revision and target; example CFG-DEMO-014 v3 |
| UI-P16-F03 | assignedTo / Persona text/filter | Only permitted assignments; no private totals; example Finance Approver |
| UI-P16-F04 | dueAt / Date/time/filter | Timezone visible; overdue status separate from expiry; example Today 16:00 IST |
| UI-P16-F05 | status / Semantic filter | Pending, Returned, Rejected, Stale, Expired, Approved, Revoked; example Pending |
| UI-P16-F06 | risk / Status/popover | Explain required review depth; example Finance sensitive |
| UI-P16-F07 | submittedBy / Persona text | Enable visible self-approval eligibility explanation; example Configuration Consultant |

| Action ID/control | Required outcome |
| --- | --- |
| P16-A01 / Filter assignments | Show only permitted items with updated count |
| P16-A02 / Open approval | Open P17 with baseline, target, diff and eligibility |
| P16-A03 / Inspect eligibility | Explain segregation of duties and identify eligible reviewer |
| P16-A04 / Open returned work | Route proposer to the affected proposal with reviewer comments |

Empty: No assigned approvals. Offer permitted project overview or clear filters. Invalid/blocked: A user opening their own submitted artifact sees eligibility explanation, not an enabled approval control.

Responsive: retain identity/status/next action; use pop-ins or stacked details for secondary fields. Every field/action requires valid/invalid, persona, cancel/refresh and relevant adverse-state checks. Apply all global requirements.

## P17 Approval decision and workflow

Route: `/projects/:id/approvals/:approvalId`. Personas: Assigned eligible Approver. Layout: Approval Decision Object Page.

Regions: Artifact header; diff/evidence; readiness; workflow; decision footer. Primary task: Approve eligible version.

Filters: Evidence type and workflow event type within sections. Default order: Workflow chronological; current diff contract order.

| Field requirement | Key/control | Rule and example |
| --- | --- | --- |
| UI-P17-F01 | artifactVersion / Read-only link | Exact immutable version and payload hash; example v3 / hash prefix |
| UI-P17-F02 | target / Read-only link | Explicit target and environment; change requires new approval; example S4-PILOT |
| UI-P17-F03 | policyVersion / Read-only link | Show policy, expiry and eligibility; example POLICY-v1 |
| UI-P17-F04 | reviewEvidence / Expandable list | Sources, validations and readback prerequisites accessible; example 3 sources |
| UI-P17-F05 | decisionReason / Text area | Required for Return/Reject; max 1000 chars; example Revise payment days |
| UI-P17-F06 | confirmation / Review dialog | Summarize version, target and change; no implicit checkbox consent; example Approve v3 |
| UI-P17-F07 | workflow / Timeline | Actor, decision, timestamp and next owner; immutable history; example Returned v1 |

| Action ID/control | Required outcome |
| --- | --- |
| P17-A01 / Approve | Record decision and unlock next gate only when all prerequisites pass |
| P17-A02 / Return for changes | Create returned state and notify proposer |
| P17-A03 / Reject | Record final rejection for this version; preserve lineage |
| P17-A04 / Inspect workflow | Show assignment, timestamp, policy and next owner |
| P17-A05 / Review stale approval | Show invalidation and route to a fresh approval request |

Empty: Approval no longer exists or is inaccessible. Return to eligible inbox. Invalid/blocked: Changed/expired/revoked version cannot approve; show specific reason and route to fresh review.

Responsive: retain identity/status/next action; use pop-ins or stacked details for secondary fields. Every field/action requires valid/invalid, persona, cancel/refresh and relevant adverse-state checks. Apply all global requirements.

## P18 Deployment package and dry run

Route: `/projects/:id/packages/:packageId`. Personas: Release Manager and Deployment Operator. Layout: Deployment Package Object Page.

Regions: Manifest context; preflight; ordered actions; release gate. Primary task: Dry run or execute simulation when authorized.

Filters: Package type, action state and pathway. Default order: Dependency/topological order; do not sort execution sequence arbitrarily.

| Field requirement | Key/control | Rule and example |
| --- | --- | --- |
| UI-P18-F01 | packageId / Read-only link | Stable package and manifest revision; example PKG-DEMO-007 |
| UI-P18-F02 | packageType / Select on draft | Scope, Organization, Configuration; each has prerequisite rules; example Configuration |
| UI-P18-F03 | target / Value help on draft | Explicit permitted demo target; freeze at approval; example S4-PILOT |
| UI-P18-F04 | sourceVersions / Version links | Scope, graph, changes and quality evidence linked; example Scope v2 / Org v3 |
| UI-P18-F05 | actionOrder / Responsive table | Sequence, object, operation, pathway, dependency and status; example 01 Payment terms |
| UI-P18-F06 | preflight / Checklist | Per check outcome, owner and blocker route; example Organization verified |
| UI-P18-F07 | releaseApproval / Status link | Current approver, expiry and manifest hash; example Awaiting release |
| UI-P18-F08 | readiness / Status/action | Review blockers replaces unavailable dispatch; example 2 blockers |

| Action ID/control | Required outcome |
| --- | --- |
| P18-A01 / Build package | Generate ordered manifest with target and stable action keys |
| P18-A02 / Dry run | Display validation results and eligible or attended pathways without changing target |
| P18-A03 / Review blockers | Open exact missing approval, stale snapshot or organization issue |
| P18-A04 / Request release authorization | Create release approval in P16 |
| P18-A05 / Execute simulation | Start P19 only after policy, approval and target checks pass |

Empty: No package. Select approved baseline versions to create a draft manifest. Invalid/blocked: Stale snapshot, missing release, conflicting target lock or unverified structures block dispatch.

Responsive: retain identity/status/next action; use pop-ins or stacked details for secondary fields. Every field/action requires valid/invalid, persona, cancel/refresh and relevant adverse-state checks. Apply all global requirements.

## P19 Deployment execution monitor

Route: `/projects/:id/deployments/:runId`. Personas: Deployment Operator and Release Manager. Layout: Execution Monitor Object Page.

Regions: Run header; action timeline; selected action detail; recovery. Primary task: Inspect or reconcile current action.

Filters: Action state, pathway and owned recovery tasks. Default order: Execution order; latest event visible in detail.

| Field requirement | Key/control | Rule and example |
| --- | --- | --- |
| UI-P19-F01 | runId / Stable link | Project, package, target and start time; example DEPLOY-DEMO-007 |
| UI-P19-F02 | state / Status/timeline | Queued, Running, Unknown, Reconciling, Verified, Failed, Paused; example Unknown |
| UI-P19-F03 | action / Selectable table | Order, object, operation, state, attempt and last event; example Action 03 |
| UI-P19-F04 | correlation / Copy/link | Open sanitized exchange and evidence; example CORR-DEMO-204 |
| UI-P19-F05 | attemptCount / Read-only number | Retain attempts; never hide duplicate prevention; example 1 |
| UI-P19-F06 | observedState / Status link | Unknown separate from failure and successful commit; example Readback required |
| UI-P19-F07 | operatorTask / Task link | Owner, due, instructions and completion evidence; example Reconcile target |
| UI-P19-F08 | progress / Count link | Verified required actions / total required; do not equate dispatched with verified; example 2 of 5 verified |

| Action ID/control | Required outcome |
| --- | --- |
| P19-A01 / Inspect action | Show request classification, correlation, attempts and observed state |
| P19-A02 / Pause remaining actions | Stop new dispatch while an in-flight action resolves |
| P19-A03 / Reconcile unknown | Open P20 with target observation; do not blindly retry |
| P19-A04 / Open attended step | Show typed instructions, owner and evidence upload |
| P19-A05 / Open results | Open P20 or P21; completion requires observed evidence |

Empty: No execution exists for this package. Return to preflight and release. Invalid/blocked: A timeout after possible write enters Unknown; no blind Retry button; offer Reconcile unknown.

Responsive: retain identity/status/next action; use pop-ins or stacked details for secondary fields. Every field/action requires valid/invalid, persona, cancel/refresh and relevant adverse-state checks. Apply all global requirements.

## P20 Readback and reconciliation

Route: `/projects/:id/reconciliation/:packageId`. Personas: Deployment Operator and Functional Consultant. Layout: Reconciliation Comparison.

Regions: Summary; expected/observed rows; discrepancy details; evidence. Primary task: Refresh observation.

Filters: Result, object type and required/optional action. Default order: Mismatch/Unknown first then action order.

| Field requirement | Key/control | Rule and example |
| --- | --- | --- |
| UI-P20-F01 | objectKey / Read-only link | Target identity and approved action; example DEMO-PT / 1000 |
| UI-P20-F02 | approvedValue / Read-only typed | Exact approved revision; example 45 |
| UI-P20-F03 | observedValue / Read-only typed | Value, retrieval timestamp and source; Unknown stays explicit; example 30 |
| UI-P20-F04 | result / Semantic filter | Match, Mismatch, Unknown, Proven not committed, Needs operator; example Mismatch |
| UI-P20-F05 | observationTime / Date/time | Use fixed demo clock; stale state visible; example 10:05 IST |
| UI-P20-F06 | evidenceRef / Source link | Observation and correlation accessible; example OBS-DEMO-003 |
| UI-P20-F07 | recoveryOwner / Value help | Required if discrepancy routed to recovery; example Deployment Operator |

| Action ID/control | Required outcome |
| --- | --- |
| P20-A01 / Refresh observation | Resolve seeded match mismatch or unknown with a new timestamp |
| P20-A02 / Inspect difference | Show approved and observed values and affected requirements |
| P20-A03 / Create recovery task | Open P21 and link the original action |
| P20-A04 / Accept verified completion | Close eligible actions and update project readiness |
| P20-A05 / Export reconciliation | Download actual fixture report with source and simulated status |

Empty: No observations. Refresh using an authorized read-only lookup. Invalid/blocked: Mismatch cannot be accepted as verified; evidence export includes simulation and source revision.

Responsive: retain identity/status/next action; use pop-ins or stacked details for secondary fields. Every field/action requires valid/invalid, persona, cancel/refresh and relevant adverse-state checks. Apply all global requirements.

## P21 Exceptions and recovery worklist

Route: `/projects/:id/exceptions`. Personas: Integration Operator and Deployment Operator. Layout: Exception List Report and detail.

Regions: Severity/owner/system filters; exceptions; recovery workbench. Primary task: Open permitted recovery action.

Filters: Severity, system, category, owner and resolution state. Default order: Criticality then age descending.

| Field requirement | Key/control | Rule and example |
| --- | --- | --- |
| UI-P21-F01 | exceptionId / Object link | Stable error and source action; example EX-DEMO-003 |
| UI-P21-F02 | category / Select filter | Validation, Permission, Connectivity, Mapping, Unknown, Mismatch; example Unknown |
| UI-P21-F03 | severity / Semantic filter | Critical, High, Medium, Low with textual meaning; example High |
| UI-P21-F04 | owner / Value help | Eligible accountable operator; assignment logged; example Integration Operator |
| UI-P21-F05 | errorDetail / Expandable text | Sanitized technical detail and business impact; no secrets; example Outcome not established |
| UI-P21-F06 | retryEligibility / Status/action | Safe read or proven uncommitted only; example Reconciliation required |
| UI-P21-F07 | resolutionEvidence / Upload/text ref | Required for attended report; readback still mandatory; example Operator evidence |

| Action ID/control | Required outcome |
| --- | --- |
| P21-A01 / Inspect exception | Show category, sanitized evidence and affected gate |
| P21-A02 / Assign owner | Record assignment and notify |
| P21-A03 / Retry eligible operation | Run read-only or proven-uncommitted retry; ambiguous writes route to reconciliation |
| P21-A04 / Complete attended task | Record reported completion then require readback before verified state |
| P21-A05 / Escalate | Create in-app escalation and retain return context |

Empty: No unresolved exceptions. Show last observation and access to resolved history. Invalid/blocked: Missing owner/evidence prevents resolution; permanent failure remains visible after failed retry.

Responsive: retain identity/status/next action; use pop-ins or stacked details for secondary fields. Every field/action requires valid/invalid, persona, cancel/refresh and relevant adverse-state checks. Apply all global requirements.

## P22 Realize Test and qualification

Route: `/projects/:id/quality`. Personas: QA Lead and Business Owner. Layout: Qualification List Report.

Regions: Suite and gate summary; test list; assertion/evidence detail. Primary task: Run demo suite.

Filters: Suite, result, feature and TC ID. Default order: Failed/Blocked first then test ID.

| Field requirement | Key/control | Rule and example |
| --- | --- | --- |
| UI-P22-F01 | suiteId / Select | J01–J05 and selected pilot qualification cases; example J03 |
| UI-P22-F02 | testId / Object link | TC where applicable plus product test ID; do not imply 202 automated tests; example TC-12-003 |
| UI-P22-F03 | result / Semantic filter | Not run, Queued, Running, Passed, Failed, Blocked; example Not run |
| UI-P22-F04 | assertion / Expandable text | Expected versus actual state and affected action; example No duplicate write |
| UI-P22-F05 | featureRefs / Multi-link | Exact Fxx-nnn references; example F12-010 |
| UI-P22-F06 | uatDecision / Select/reason | Authorized acceptance or defect; actor and revision required; example Needs fix |
| UI-P22-F07 | almTask / External preview link | Correlated simulated task; no duplicate task on retry; example ALM-DEMO-001 |

| Action ID/control | Required outcome |
| --- | --- |
| P22-A01 / Run demo suite | Show queued/running/passed/failed results linked to feature and TC |
| P22-A02 / Inspect failure | Open assertion, evidence and affected gate |
| P22-A03 / Record UAT result | Persist acceptance or defect with accountable owner |
| P22-A04 / Create ALM task | Simulate correlated task creation and show resulting external ID |
| P22-A05 / Request quality gate | Create approval or show missing tests and unresolved defects |

Empty: No test result. Select a seeded suite or inspect qualification criteria. Invalid/blocked: Not run is never green; unresolved critical safety failures block quality-gate acceptance.

Responsive: retain identity/status/next action; use pop-ins or stacked details for secondary fields. Every field/action requires valid/invalid, persona, cancel/refresh and relevant adverse-state checks. Apply all global requirements.

## P23 Evidence and audit explorer

Route: `/projects/:id/evidence`. Personas: Auditor and authorized project roles. Layout: Evidence List Report and lineage.

Regions: Search filters; events/artifacts; lineage details; authorized export. Primary task: Open evidence lineage.

Filters: Actor, time range, outcome, BR ID, package and correlation. Default order: Event time descending with stable event ID tie-break.

| Field requirement | Key/control | Rule and example |
| --- | --- | --- |
| UI-P23-F01 | eventId / Stable link | Actor, action, outcome and correlation; example EV-DEMO-010 |
| UI-P23-F02 | artifactRef / Object link | Requirement through proposal approval action observation; example CFG-DEMO-014 v3 |
| UI-P23-F03 | actor / Persona/filter | Actual seeded actor; demo switches labeled separately; example Finance Approver |
| UI-P23-F04 | eventTime / Date/time filter | Timezone explicit; fixed seed clock; example 10:10 IST |
| UI-P23-F05 | outcome / Semantic filter | Attempted, Denied, Approved, Failed, Verified; example Denied |
| UI-P23-F06 | redaction / Disclosure | Explain hidden field policy without revealing hidden value; example Restricted |
| UI-P23-F07 | exportScope / Dialog selection | Read and export entitlements separate; include manifest and simulation label; example Current package |

| Action ID/control | Required outcome |
| --- | --- |
| P23-A01 / Search audit | Return authorized events and stable correlation references |
| P23-A02 / Open lineage | Traverse requirement, proposal, approval, action and observation |
| P23-A03 / Inspect redaction | Explain policy without revealing hidden value |
| P23-A04 / Export bundle | Download a real demo evidence file with manifest and simulation label |

Empty: No visible evidence matches. Clear filters without revealing restricted counts. Invalid/blocked: Denied export provides View permissions; malformed or private source links do not leak details.

Responsive: retain identity/status/next action; use pop-ins or stacked details for secondary fields. Every field/action requires valid/invalid, persona, cancel/refresh and relevant adverse-state checks. Apply all global requirements.

## P24 Run handover and pilot health

Route: `/projects/:id/run`. Personas: Support Operator and Delivery Lead. Layout: Run and Handover Overview.

Regions: Pilot health; runbooks; known limits; handover checklist. Primary task: Review handover readiness.

Filters: Health category, artifact owner, known issue severity. Default order: Critical issue first then required handover items.

| Field requirement | Key/control | Rule and example |
| --- | --- | --- |
| UI-P24-F01 | health / Metric/status link | Last observed target/project status; not fake production monitoring; example Pilot healthy |
| UI-P24-F02 | runbook / Document link | Owner, version, recovery procedure and related issue; example Unknown write recovery |
| UI-P24-F03 | handoverItem / Checklist | Required artifact, owner and accepted state; example Run guide ready |
| UI-P24-F04 | knownIssue / Owned list | Severity, impact, workaround and due date; example Attended activity |
| UI-P24-F05 | supportTask / Form/list | Required description and eligible owner; example Review pilot mismatch |
| UI-P24-F06 | handoverDecision / Review action | Authorized acceptance with complete evidence only; example Awaiting owner |
| UI-P24-F07 | futureCapability / Roadmap link | Useful explanation and return; no Coming soon dead end; example Migration agent later |

| Action ID/control | Required outcome |
| --- | --- |
| P24-A01 / Open runbook | Show recovery procedure and responsible owner |
| P24-A02 / Inspect pilot health | Open correlated demo alerts and last-observed state |
| P24-A03 / Accept handover | Record authorized handover or list missing artifacts |
| P24-A04 / Record support task | Create owned demo task with project linkage |
| P24-A05 / Open future capability | Show an interactive future-scope explanation and return route |

Empty: No handover package. Review required pilot artifacts and ownership. Invalid/blocked: Missing runbooks or unresolved critical issues prevent handover acceptance.

Responsive: retain identity/status/next action; use pop-ins or stacked details for secondary fields. Every field/action requires valid/invalid, persona, cancel/refresh and relevant adverse-state checks. Apply all global requirements.

## P25 Benefits and outcome narrative

Route: `/projects/:id/value`. Personas: Sponsor and Delivery Lead. Layout: Benefits Analytical Overview.

Regions: Outcome summary; metric basis; editable assumptions; comparison. Primary task: Inspect benefit basis.

Filters: Metric, scenario, selected scope and period. Default order: Outcome order; assumptions in calculation order.

| Field requirement | Key/control | Rule and example |
| --- | --- | --- |
| UI-P25-F01 | metric / Value-help select | Coverage, turnaround, rework or illustrative effort; source label visible; example Verified completion |
| UI-P25-F02 | value / Metric link | Show numerator denominator and event basis; example 3 of 5 |
| UI-P25-F03 | baselineHours / Numeric input | Illustrative; finite nonnegative decimal; same scope/time basis; example 20 |
| UI-P25-F04 | assistedHours / Numeric input | Illustrative; finite nonnegative decimal; example 6 |
| UI-P25-F05 | reviewRecoveryHours / Numeric input | Included in calculation; finite nonnegative decimal; example 2 |
| UI-P25-F06 | unitCost / Numeric input | Optional; currency explicit; no invented achieved saving; example INR 1000 |
| UI-P25-F07 | comparison / Interactive chart/table | Baseline versus assisted; data point opens underlying basis; example 12 h illustrative benefit |

| Action ID/control | Required outcome |
| --- | --- |
| P25-A01 / Inspect metric | Show denominator, event trail and whether observed or illustrative |
| P25-A02 / Edit planning assumption | Recalculate scenario benefit and label it illustrative |
| P25-A03 / Compare journey | Show step counts and human checkpoints with assumptions |
| P25-A04 / Export executive summary | Download a real demo report including caveats and open risks |

Empty: No measured outcome yet. Inspect the illustrative scenario assumptions. Invalid/blocked: Unknown denominator shows Not measured; negative computed benefit is allowed and explained, not clipped to zero.

Responsive: retain identity/status/next action; use pop-ins or stacked details for secondary fields. Every field/action requires valid/invalid, persona, cancel/refresh and relevant adverse-state checks. Apply all global requirements.

## P26 Access and governance administration

Route: `/projects/:id/access`. Personas: Administrator and Security Reviewer. Layout: Access Administration List and detail.

Regions: Personas and scopes; grant detail; audit; negative-case launcher. Primary task: Inspect grants.

Filters: User, role, project, organization and grant expiry. Default order: Expired/expiring grants first then user ID.

| Field requirement | Key/control | Rule and example |
| --- | --- | --- |
| UI-P26-F01 | userId / Persona link | Seeded identity; do not treat role label as authentication; example DEMO-USER-05 |
| UI-P26-F02 | role / Value help | Only approved persona roles; allowed admin scope enforced; example Finance Approver |
| UI-P26-F03 | projectScope / Multi-value help | No unauthorized expansion by caller input; example NORTHSTAR-DEMO |
| UI-P26-F04 | organizationScope / Multi-value help | Company/plant boundaries; empty is no grant not global access; example 1000 / IN01 |
| UI-P26-F05 | expiresAt / Date/time input | Future grant expiry; timezone explicit; example Tomorrow 17:00 IST |
| UI-P26-F06 | exportGrant / Boolean control | Separate evidence-export entitlement; audit change; example False |
| UI-P26-F07 | negativeCase / Select/action | Predefined denied scenarios; show actual backend outcome; example Self approval |

| Action ID/control | Required outcome |
| --- | --- |
| P26-A01 / Inspect persona grants | Show permitted actions and organization scope |
| P26-A02 / Change demo grant | Record audited demo access change and refresh navigation |
| P26-A03 / Revoke access | Deny subsequent protected routes and show safe error |
| P26-A04 / Test denied route | Show access denied and authorized return option |

Empty: No visible grants. Select an authorized seeded persona. Invalid/blocked: Unauthorized escalation or expired grant fails at service boundary; revocation affects subsequent requests.

Responsive: retain identity/status/next action; use pop-ins or stacked details for secondary fields. Every field/action requires valid/invalid, persona, cancel/refresh and relevant adverse-state checks. Apply all global requirements.

## P27 Process application and architecture context

Route: `/projects/:id/architecture`. Personas: Enterprise Architect and Functional Consultant. Layout: Architecture Relationship Object Page.

Regions: Process/application selector; relationships; source ownership; impact. Primary task: Inspect process application relation.

Filters: Process/application, relationship, lifecycle and sync state. Default order: Conflict/stale first then process name.

| Field requirement | Key/control | Rule and example |
| --- | --- | --- |
| UI-P27-F01 | processId / Link/value help | Distinct Signavio reference and source version; example SIG-DEMO-012 |
| UI-P27-F02 | factSheetId / Link/value help | Distinct LeanIX application/capability reference; example LX-APP-001 |
| UI-P27-F03 | relationshipType / Select filter | Supports process, realizes capability, replaced by; example Supports process |
| UI-P27-F04 | lifecycle / Read-only status | Demo architecture context; source ownership visible; example Phase out |
| UI-P27-F05 | owner / Read-only persona | Architecture/process source owner; example Enterprise Architect |
| UI-P27-F06 | syncState / Status link | Observed, Stale, Conflict, Unavailable with timestamp; example Conflict |
| UI-P27-F07 | impact / Related-object list | Affected scope/requirements; no silent synchronization writes; example 3 affected candidates |

| Action ID/control | Required outcome |
| --- | --- |
| P27-A01 / Select relation | Open provenance, lifecycle and owner details |
| P27-A02 / Open Signavio context | Show labeled simulated process record and linked scope candidates |
| P27-A03 / Open LeanIX context | Show labeled simulated application record and supported process links |
| P27-A04 / Assess impact | Highlight affected architecture relations and require review |
| P27-A05 / Refresh mapped context | Show simulated synchronization, source ownership and conflict state |

Empty: No mapped relation. Open process context or review the seeded mapping. Invalid/blocked: Conflicting source ownership requires reviewed resolution; no fabricated bidirectional automatic sync.

Responsive: retain identity/status/next action; use pop-ins or stacked details for secondary fields. Every field/action requires valid/invalid, persona, cancel/refresh and relevant adverse-state checks. Apply all global requirements.

## Sources and decisions

| Reference | Guidance | URL |
| --- | --- | --- |
| S01 | SAP Fiori principles | https://www.sap.com/design-system/fiori-design-web/v1-142/discover/sap-design-system/vision-and-mission/design-principles |
| S02 | SAP table selection | https://www.sap.com/design-system/fiori-design-web/v1-145/foundations/best-practices/ui-elements/tables/table-overview |
| S03 | SAP message handling | https://www.sap.com/design-system/fiori-design-web/v1-136/foundations/best-practices/global-patterns/messaging/messaging |
| S04 | SAP AI and Joule design guidance | https://www.sap.com/design-system/fiori-design-web/v1-120/foundations/ai-and-joule-design/guidelines |

Project decisions and numeric UI limits are proposed. Confirm supported UI5 APIs, upload rules, locale, mock density and acceptance with Product/UX/SAP/QA owners before the UI baseline is approved.

## Machine-readable UI requirements

Extract this JSON block by its markers into docs/spec/ui-requirements.json. Existing specification files remain unchanged.

<!-- BEGIN UI REQUIREMENTS -->
```json
{
  "version": "UIR 001 v1.0 2026-10-30",
  "audit": [
    [
      "MVP screen and journey inventory",
      "Covered",
      "Sections 2, 5 and Appendix A",
      "Retain 28 routes and 130 named actions"
    ],
    [
      "Fiori principles and floorplans",
      "Covered at principle level",
      "Sections 3 and 7",
      "Add per-screen composition and table/control selection"
    ],
    [
      "Role and approval boundaries",
      "Covered",
      "Sections 8 and 9",
      "Add field visibility and contextual action-state acceptance"
    ],
    [
      "Seven-phase navigation",
      "Covered",
      "Section 4",
      "Add per-phase worklist and visible prerequisite contracts"
    ],
    [
      "Assistant and agent behavior",
      "Covered at interaction level",
      "Section 10 and P15",
      "Add panel anatomy, response/error states and evidence treatment"
    ],
    [
      "Five SAP integrations",
      "Covered at story level",
      "Section 11",
      "Add object columns, timestamps, operation status and fault fixtures"
    ],
    [
      "Field and column dictionaries",
      "Partial",
      "Appendix A names action inputs",
      "Add typed field/control/rule/example records for every screen"
    ],
    [
      "Filtering sorting and personalization",
      "Partial",
      "Section 17 shared controls",
      "Add default sort, critical columns, search scope and persisted preferences"
    ],
    [
      "Layout and action hierarchy",
      "Partial",
      "Three visual compositions; floorplan labels",
      "Add regions, primary action, overflow and detail behavior per page"
    ],
    [
      "Screen-specific validation and recovery",
      "Partial",
      "Generic and selected action examples",
      "Add empty/invalid/denied/stale/offline/unknown outcomes by screen"
    ],
    [
      "Mock-data distributions and boundaries",
      "Partial",
      "Section 12 quantities and scenario packs",
      "Add datasets for table density, long strings, null values and state distributions"
    ],
    [
      "Responsive detail behavior",
      "Partial",
      "Widths and high-level adaptations",
      "Add phone/tablet/desktop table, diff, hierarchy and assistant rules"
    ],
    [
      "Accessibility and microcopy",
      "Partial",
      "Keyboard/contrast objectives",
      "Add focus order, announcements, label/message and non-color requirements"
    ],
    [
      "UI generation and traceability gates",
      "Partial",
      "Action registry and feature matrix",
      "Add stable UI requirements, field IDs, generation checklist and review gates"
    ]
  ],
  "globalRequirements": [
    {
      "id": "UI-G01",
      "topic": "Scope",
      "requirement": "Preserve 28 P00–P27 routes, 130 named actions and 24 shared control families.",
      "acceptance": "Registry reconciles with the prior plan; no screen/action disappears."
    },
    {
      "id": "UI-G02",
      "topic": "Scope",
      "requirement": "Represent all 138 R1 features without claiming production capabilities from mock evidence.",
      "acceptance": "Coverage differentiates direct interaction, simulated evidence and production work."
    },
    {
      "id": "UI-G03",
      "topic": "Fiori",
      "requirement": "Use native SAP UI5 and supported Fiori elements/freestyle patterns.",
      "acceptance": "Floorplan register names supported controls; no generic HTML dashboard substitution."
    },
    {
      "id": "UI-G04",
      "topic": "Fiori",
      "requirement": "Use Horizon light theme, SAP typography where available and semantic theme tokens.",
      "acceptance": "No arbitrary status colors, unapproved brand assets or internal-control CSS overrides."
    },
    {
      "id": "UI-G05",
      "topic": "Fiori",
      "requirement": "Provide one contextually eligible primary action and a concise secondary/overflow hierarchy.",
      "acceptance": "Primary task visible without competing emphasized buttons; action labels use verbs."
    },
    {
      "id": "UI-G06",
      "topic": "Layout",
      "requirement": "Show project, persona, environment and Demo simulation context consistently.",
      "acceptance": "Context remains accessible at all supported widths and in external previews."
    },
    {
      "id": "UI-G07",
      "topic": "Layout",
      "requirement": "Use a dynamic context header, content sections and task-appropriate footer/actions.",
      "acceptance": "Header can collapse without losing identity, status or the next task."
    },
    {
      "id": "UI-G08",
      "topic": "Navigation",
      "requirement": "Preserve filters, selected row and useful return route when opening detail.",
      "acceptance": "Back returns to the prior permitted list state; stale objects show a safe resolution."
    },
    {
      "id": "UI-G09",
      "topic": "Navigation",
      "requirement": "Support direct route, browser refresh and browser back without blank pages.",
      "acceptance": "All 28 routes have permitted, denied and missing-object outcomes."
    },
    {
      "id": "UI-G10",
      "topic": "Navigation",
      "requirement": "Make all seven phase labels navigable without advancing readiness gates.",
      "acceptance": "Incomplete phases open their work/readiness summary and list prerequisites."
    },
    {
      "id": "UI-G11",
      "topic": "Tables",
      "requirement": "Choose responsive tables by default; justify any desktop-oriented analytical grid.",
      "acceptance": "Phone flow offers usable cards/pop-ins or a reduced task view, not squeezed columns."
    },
    {
      "id": "UI-G12",
      "topic": "Tables",
      "requirement": "Provide search, result count, clear filters and meaningful filtered no-results states.",
      "acceptance": "Clear filters recovers authorized data; inaccessible counts are never disclosed."
    },
    {
      "id": "UI-G13",
      "topic": "Tables",
      "requirement": "Use page-specific critical columns, stable sort and accessible row navigation.",
      "acceptance": "Identity, business status and blocker remain visible on narrow displays."
    },
    {
      "id": "UI-G14",
      "topic": "Tables",
      "requirement": "Persist personal table/variant settings by demo user and context.",
      "acceptance": "Changing persona does not inherit another user’s private saved filters."
    },
    {
      "id": "UI-G15",
      "topic": "Tables",
      "requirement": "Separate row selection, navigation and actionable cell links.",
      "acceptance": "Checkbox selection never unintentionally opens detail or submits a change."
    },
    {
      "id": "UI-G16",
      "topic": "Tables",
      "requirement": "Bulk actions evaluate every selected record and show per-item eligibility.",
      "acceptance": "Mixed eligible/ineligible selection shows reasons; no implicit batch approval."
    },
    {
      "id": "UI-G17",
      "topic": "Forms",
      "requirement": "Mark mandatory fields and provide searchable value help with valid scoped options.",
      "acceptance": "Missing input receives field-linked text; no invalid free-text enum is accepted."
    },
    {
      "id": "UI-G18",
      "topic": "Forms",
      "requirement": "Apply deterministic type, range, uniqueness, reference and cross-field validation.",
      "acceptance": "Each editable field has valid, invalid and boundary fixtures and a focused error target."
    },
    {
      "id": "UI-G19",
      "topic": "Forms",
      "requirement": "Distinguish observed, proposed and approved values and attribute manual overrides.",
      "acceptance": "Changing a proposed value creates a version and affects approval state."
    },
    {
      "id": "UI-G20",
      "topic": "Forms",
      "requirement": "Protect unsaved work with Save, Discard and Cancel choices where appropriate.",
      "acceptance": "Cancel leaves the stored version unchanged; navigation does not silently save/lose edits."
    },
    {
      "id": "UI-G21",
      "topic": "Messaging",
      "requirement": "Use field value state plus message summary for validation errors.",
      "acceptance": "Selecting a summary item focuses the field or affected object; persistent errors are not toast-only."
    },
    {
      "id": "UI-G22",
      "topic": "Messaging",
      "requirement": "Use concise completion feedback only after the expected state effect succeeds.",
      "acceptance": "No fake success toast or unconditional green completion after a failed operation."
    },
    {
      "id": "UI-G23",
      "topic": "Messaging",
      "requirement": "Provide loading, empty, filtered-empty, denied, stale and failed states.",
      "acceptance": "Each state offers a permitted useful next step and preserves relevant user input."
    },
    {
      "id": "UI-G24",
      "topic": "Controls",
      "requirement": "Every visible interactive affordance must produce a specified meaningful outcome.",
      "acceptance": "No empty handler, dead chart, fake export, placeholder route or Coming soon dead end."
    },
    {
      "id": "UI-G25",
      "topic": "Controls",
      "requirement": "Replace unavailable business actions with actionable blocker/permission review.",
      "acceptance": "Do not render a disabled-looking button that gives no explanation or recovery."
    },
    {
      "id": "UI-G26",
      "topic": "Security",
      "requirement": "Filter data and actions by persona, project and organization with backend checks.",
      "acceptance": "Hidden buttons alone do not pass; direct forged/deep requests are denied."
    },
    {
      "id": "UI-G27",
      "topic": "Security",
      "requirement": "Separate author, business approver, release authority, executor and audit export.",
      "acceptance": "Self-approval and unauthorized dispatch/export fail with owned next steps."
    },
    {
      "id": "UI-G28",
      "topic": "Workflow",
      "requirement": "Show artifact version, target, risk, evidence, expiry and decision owner before approval.",
      "acceptance": "Return/Reject require reason; changed material input invalidates old approval."
    },
    {
      "id": "UI-G29",
      "topic": "Workflow",
      "requirement": "Show prerequisite scope/organization verification before dependent configuration dispatch.",
      "acceptance": "A navigation shortcut or valid signature cannot bypass a missing prerequisite."
    },
    {
      "id": "UI-G30",
      "topic": "Workflow",
      "requirement": "Distinguish queued, dispatched, unknown, failed, reconciling and verified outcomes.",
      "acceptance": "Progress counts verified required actions, not merely started actions."
    },
    {
      "id": "UI-G31",
      "topic": "Recovery",
      "requirement": "An uncertain write offers reconciliation before any retry.",
      "acceptance": "Only proven-not-committed or safe read operations offer retry; history remains visible."
    },
    {
      "id": "UI-G32",
      "topic": "Recovery",
      "requirement": "Pause prevents new dispatch while preserving in-flight/completed action evidence.",
      "acceptance": "UI never promises reversal of a possible remote commit or unsupported rollback."
    },
    {
      "id": "UI-G33",
      "topic": "Agent UX",
      "requirement": "Show goal, bounded plan/tool, sources, validation and accountable handoff.",
      "acceptance": "Agent status corresponds to persisted mock events and a meaningful current step."
    },
    {
      "id": "UI-G34",
      "topic": "Agent UX",
      "requirement": "Expose concise rationale and citations without fabricated hidden reasoning.",
      "acceptance": "Missing evidence produces abstention or a review issue rather than false certainty."
    },
    {
      "id": "UI-G35",
      "topic": "Assistant",
      "requirement": "Provide contextual shell panel and a phone full-screen conversation.",
      "acceptance": "Open/close returns focus correctly; project change explicitly changes context."
    },
    {
      "id": "UI-G36",
      "topic": "Assistant",
      "requirement": "Support at least 12 bounded intents, citations, history, stop, retry and feedback.",
      "acceptance": "Unknown prompt clarifies; request to bypass gates cannot grant approval or roles."
    },
    {
      "id": "UI-G37",
      "topic": "Assistant",
      "requirement": "Limit conversations and citations to authorized persona/project records.",
      "acceptance": "Switching user cannot reveal restricted thread content or source excerpts."
    },
    {
      "id": "UI-G38",
      "topic": "Integration",
      "requirement": "Show all five SAP systems with operation, source ownership, correlation and last observation.",
      "acceptance": "A reachable endpoint is not automatically business-ready; offline/permission states differ."
    },
    {
      "id": "UI-G39",
      "topic": "Integration",
      "requirement": "Keep IDs for BR/TC, scope, activity, process, fact sheet and target objects distinct.",
      "acceptance": "Final evidence can traverse each source reference without reusing a foreign ID namespace."
    },
    {
      "id": "UI-G40",
      "topic": "Mock data",
      "requirement": "Use deterministic seeded synthetic records and a fixed adjustable demo clock.",
      "acceptance": "Reset restores coherent data; overdue/expiry/staleness tests are reproducible."
    },
    {
      "id": "UI-G41",
      "topic": "Mock data",
      "requirement": "Separate source specification, immutable fixture and mutable application state.",
      "acceptance": "Refresh/restart preserves submitted work; seed is not reloaded on every request."
    },
    {
      "id": "UI-G42",
      "topic": "Metrics",
      "requirement": "Show numerator, denominator, time basis and observed/illustrative label.",
      "acceptance": "Unknown denominator is Not measured; negative benefit is shown rather than hidden."
    },
    {
      "id": "UI-G43",
      "topic": "Outputs",
      "requirement": "Generate actual scoped CSV/JSON/text downloads with source and simulation labels.",
      "acceptance": "Export content reconciles and is redacted; read permission does not imply export grant."
    },
    {
      "id": "UI-G44",
      "topic": "Responsive",
      "requirement": "Validate 360, 768, 1024 and 1440 CSS-pixel viewports.",
      "acceptance": "No clipped labels or horizontal page overflow; key tasks remain possible."
    },
    {
      "id": "UI-G45",
      "topic": "Responsive",
      "requirement": "Use ordered content and progressive disclosure rather than fixed pixel page grids.",
      "acceptance": "Tree/diff/assistant have one-column phone alternatives with retained context."
    },
    {
      "id": "UI-G46",
      "topic": "Accessibility",
      "requirement": "Provide labels, accessible names, logical focus, keyboard equivalents and visible focus.",
      "acceptance": "Core journey completes without a pointer; no inaccessible graph-only operation."
    },
    {
      "id": "UI-G47",
      "topic": "Accessibility",
      "requirement": "Announce status/errors appropriately and never use color alone.",
      "acceptance": "Screen-reader/keyboard checks record actual evidence and any untested combinations."
    },
    {
      "id": "UI-G48",
      "topic": "Localization",
      "requirement": "Format dates, numbers and currencies by selected display locale with timezone.",
      "acceptance": "Underlying typed values remain stable; identifiers never receive numeric grouping."
    },
    {
      "id": "UI-G49",
      "topic": "Content",
      "requirement": "Use short business labels, descriptive links, meaningful headings and helpful errors.",
      "acceptance": "Errors identify problem and permitted resolution; stack traces stay in sanitized detail."
    },
    {
      "id": "UI-G50",
      "topic": "Quality",
      "requirement": "Trace UI requirement to control/handler, mock state, persona and assertion.",
      "acceptance": "No declared UI completion without implemented behavior and recorded verification."
    },
    {
      "id": "UI-G51",
      "topic": "Performance",
      "requirement": "Debounce search, prevent duplicate submit and preserve busy/timeout feedback.",
      "acceptance": "Repeat clicks create one logical command; long analysis remains cancelable where safe."
    },
    {
      "id": "UI-G52",
      "topic": "Scope",
      "requirement": "Use Discover, Prepare, Explore, Realize Build, Realize Test, Deploy and Run.",
      "acceptance": "State that the project view splits SAP Activate Realize; do not invent EY proprietary certification."
    }
  ],
  "commonControls": [
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
  ],
  "editPolicies": [
    {
      "screens": [
        "P04"
      ],
      "editAuthority": "Delivery Lead edits project and owners; Administrator manages permitted technical setup",
      "restriction": "Other project members see scoped read-only setup; legal design edits still require review"
    },
    {
      "screens": [
        "P06",
        "P07"
      ],
      "editAuthority": "Analyst/Functional Consultant uploads, interprets and revises requirements",
      "restriction": "Approvers inspect sources; no hidden edit authority from a review role"
    },
    {
      "screens": [
        "P09",
        "P10"
      ],
      "editAuthority": "Functional Consultant proposes and records draft inclusion decisions",
      "restriction": "Scope Approver reviews read-only and decides in P17; own authored version cannot be approved"
    },
    {
      "screens": [
        "P11",
        "P12"
      ],
      "editAuthority": "Functional Consultant edits organization attributes and assignments",
      "restriction": "Organization Approver reviews read-only here and decides in P17"
    },
    {
      "screens": [
        "P13",
        "P14"
      ],
      "editAuthority": "Configuration Consultant edits proposed typed values and override reason",
      "restriction": "Finance Approver reviews read-only here and decides in P17; observations/approved values are always read-only"
    },
    {
      "screens": [
        "P16",
        "P17"
      ],
      "editAuthority": "Eligible assigned separate approver decides exact artifact revision",
      "restriction": "Author, expired/revoked user and unassigned reader get eligibility/blocker view"
    },
    {
      "screens": [
        "P18",
        "P19"
      ],
      "editAuthority": "Deployment Operator prepares eligible packages and executes authorized simulation",
      "restriction": "Release Manager reviews and authorizes through P17; neither bypasses business or quality gates"
    },
    {
      "screens": [
        "P20",
        "P21"
      ],
      "editAuthority": "Authorized Operator refreshes observations, assigns recovery and reports attended work",
      "restriction": "Functional Consultant inspects business differences; no user edits observed values to force a match"
    },
    {
      "screens": [
        "P22"
      ],
      "editAuthority": "QA records product results; assigned Business Owner records UAT decision",
      "restriction": "No role changes stored assertions or evidence to manufacture a pass"
    },
    {
      "screens": [
        "P23"
      ],
      "editAuthority": "Auditor/project reader inspects permitted records",
      "restriction": "Export requires separate entitlement; events and redacted values are not editable"
    },
    {
      "screens": [
        "P25"
      ],
      "editAuthority": "Delivery Lead edits persisted illustrative planning assumptions",
      "restriction": "Sponsor reads and drills into calculations; any personal what-if is clearly nonpersisted"
    },
    {
      "screens": [
        "P26"
      ],
      "editAuthority": "Only Administrator with an explicit demo access-management grant changes permitted grants",
      "restriction": "Security Reviewer is read-only unless separately granted; no unrestricted role escalation"
    }
  ],
  "states": [
    {
      "state": "Loading",
      "presentation": "Show descriptive busy feedback and retain context; prevent duplicate mutation",
      "recovery": "Safe cancel for analysis; never imply abort of an already committed write"
    },
    {
      "state": "No records",
      "presentation": "Explain that the dataset is empty",
      "recovery": "Offer permitted Create, Upload, Generate or setup route"
    },
    {
      "state": "No matches",
      "presentation": "Show active filters and authorized result count",
      "recovery": "Clear filters returns data without disclosing inaccessible records"
    },
    {
      "state": "Invalid",
      "presentation": "Field-linked message plus actionable summary",
      "recovery": "Keep draft input and focus the field; validation is repeated by backend"
    },
    {
      "state": "Denied",
      "presentation": "Show useful permission explanation without private object data",
      "recovery": "Return to permitted list or View permissions; no fake retry"
    },
    {
      "state": "Stale",
      "presentation": "Show source/snapshot version and affected approval",
      "recovery": "Refresh or review changed values; require new approval when material"
    },
    {
      "state": "Offline/failed",
      "presentation": "Retain last good observation and distinguish connection/permission/business error",
      "recovery": "Owned exception; safe retry only where allowed"
    },
    {
      "state": "Unknown write",
      "presentation": "Show uncertainty separately from failed or verified",
      "recovery": "Readback reconciliation before any potential replay"
    },
    {
      "state": "Partial result",
      "presentation": "Show per-item outcomes and remaining work",
      "recovery": "Do not mark package complete; recover affected actions only"
    },
    {
      "state": "Unsaved change",
      "presentation": "Warn when in-app navigation/cancel risks losing edits",
      "recovery": "Save, Discard, Cancel; Cancel leaves current task and values intact"
    }
  ],
  "responsiveWidths": [
    360,
    768,
    1024,
    1440
  ],
  "mockData": [
    {
      "dataset": "Project context",
      "quantity": "2 projects; one restricted negative-test project",
      "coverage": "One active Northstar workspace plus cross-project denial; retain independent reset"
    },
    {
      "dataset": "Personas",
      "quantity": "15 distinct synthetic identities/roles",
      "coverage": "Author/approver separate; read-only sponsor/auditor; expired grant and missing export grant"
    },
    {
      "dataset": "Organization",
      "quantity": "10 entities, 5 countries, 10 organization types",
      "coverage": "IN/DE/US/GB/SG illustrative only; missing field, duplicate code, invalid assignment and cycle variants"
    },
    {
      "dataset": "Process catalog",
      "quantity": "202 process records, 15 domains, BR and TC IDs",
      "coverage": "Search, long names, multi-domain filters and inaccessible reference example"
    },
    {
      "dataset": "Scope",
      "quantity": "16 demo candidates",
      "coverage": "Required fixture distribution: 8 Include, 3 Exclude, 3 Needs decision, 2 Unassessed; independent prerequisite/unverified variants"
    },
    {
      "dataset": "Configuration",
      "quantity": "10 typed DEMO activities",
      "coverage": "3 draft, 2 awaiting review, 2 approved, 1 returned, 1 invalid, 1 stale; independent scenario snapshots"
    },
    {
      "dataset": "Approval",
      "quantity": "At least 2 records for each relevant decision state",
      "coverage": "Pending, approved, returned, rejected, expired, revoked, stale; self-authored negative case"
    },
    {
      "dataset": "Deployment",
      "quantity": "At least 4 coherent package snapshots",
      "coverage": "Preflight blocked, authorized happy path, unknown-after-possible-write, attended/mismatch recovery"
    },
    {
      "dataset": "Integrations",
      "quantity": "5 system fixtures with at least 4 exchange outcomes each",
      "coverage": "Success, offline, permission denied, stale/mapping error; stable external references"
    },
    {
      "dataset": "Agent runs",
      "quantity": "At least 2 runs per MVP agent",
      "coverage": "Happy result, missing evidence/validation failure; pause/retry and budget boundary"
    },
    {
      "dataset": "Assistant",
      "quantity": "12 supported intents plus 6 adverse prompts",
      "coverage": "Unknown intent, inaccessible source, prompt injection, unsupported approval, stale context and stopped response"
    },
    {
      "dataset": "Evidence",
      "quantity": "At least 100 synthetic events",
      "coverage": "Actor/time/correlation lineage; denied attempts; redaction and export entitlement cases"
    },
    {
      "dataset": "Table density",
      "quantity": "Dedicated 250-row stress fixture for selected lists",
      "coverage": "Clearly synthetic duplicates-with-new-IDs, not extra business process claims; paging/search/performance"
    },
    {
      "dataset": "Content boundaries",
      "quantity": "Every screen has a long-text/null/zero/empty variant",
      "coverage": "80-character names, 2000-character requirement, unknown timestamp, zero denominator and negative benefit"
    }
  ],
  "screenCount": 28,
  "fieldCount": 196,
  "actionCount": 130,
  "screens": [
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
      ],
      "layout": "Demo entry",
      "regions": [
        "Persona",
        "Project",
        "Scenario",
        "Seed version"
      ],
      "primary": "Start guided tour",
      "fields": [
        {
          "id": "P00-F01",
          "key": "persona",
          "control": "Select",
          "rule": "Required; show role and organization scope; backend validates session",
          "sample": "Functional Consultant",
          "requirementId": "UI-P00-F01"
        },
        {
          "id": "P00-F02",
          "key": "project",
          "control": "Searchable select",
          "rule": "Required; authorized projects only",
          "sample": "NORTHSTAR-DEMO",
          "requirementId": "UI-P00-F02"
        },
        {
          "id": "P00-F03",
          "key": "scenario",
          "control": "Select",
          "rule": "Required; J01–J05 plus named fault variants",
          "sample": "J01",
          "requirementId": "UI-P00-F03"
        },
        {
          "id": "P00-F04",
          "key": "seedVersion",
          "control": "Read-only text",
          "rule": "Show version and reset timestamp",
          "sample": "demo-v1",
          "requirementId": "UI-P00-F04"
        },
        {
          "id": "P00-F05",
          "key": "resumeState",
          "control": "Status link",
          "rule": "Open current checkpoint; never auto-approve",
          "sample": "Scope draft",
          "requirementId": "UI-P00-F05"
        },
        {
          "id": "P00-F06",
          "key": "resetScope",
          "control": "Dialog choice",
          "rule": "Require explicit confirmation; selected workspace only",
          "sample": "Current project",
          "requirementId": "UI-P00-F06"
        }
      ],
      "emptyState": "No demo workspace exists. Choose a project and seed to begin.",
      "invalidState": "Reject an unknown persona or seed; preserve prior valid selection.",
      "requirementPrefix": "UI-P00",
      "filters": "Persona, project and named scenario",
      "defaultSort": "Project name ascending"
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
      ],
      "layout": "Overview",
      "regions": [
        "Project readiness",
        "decisions",
        "next work",
        "benefit basis"
      ],
      "primary": "Continue journey",
      "fields": [
        {
          "id": "P01-F01",
          "key": "phaseReadiness",
          "control": "KPI link",
          "rule": "Count accepted gates over required gates; drill to filtered records",
          "sample": "Explore 2 of 3",
          "requirementId": "UI-P01-F01"
        },
        {
          "id": "P01-F02",
          "key": "pendingApprovals",
          "control": "KPI link",
          "rule": "Count visible assigned work; never show inaccessible totals",
          "sample": "4 pending",
          "requirementId": "UI-P01-F02"
        },
        {
          "id": "P01-F03",
          "key": "blockers",
          "control": "Ranked list",
          "rule": "Order critical first then due date; open exact object",
          "sample": "2 blockers",
          "requirementId": "UI-P01-F03"
        },
        {
          "id": "P01-F04",
          "key": "nextTask",
          "control": "Actionable list",
          "rule": "Title, owner, due, phase and status; no dead rows",
          "sample": "Review scope",
          "requirementId": "UI-P01-F04"
        },
        {
          "id": "P01-F05",
          "key": "verifiedActions",
          "control": "KPI link",
          "rule": "Show numerator denominator and observed time",
          "sample": "3 of 5",
          "requirementId": "UI-P01-F05"
        },
        {
          "id": "P01-F06",
          "key": "benefit",
          "control": "Metric link",
          "rule": "Label illustrative or observed; open calculation",
          "sample": "Illustrative 12 h",
          "requirementId": "UI-P01-F06"
        }
      ],
      "emptyState": "No work yet. Open Prepare or load the approved demo seed.",
      "invalidState": "A metric with unavailable data shows Not measured, not zero or 100 percent.",
      "requirementPrefix": "UI-P01",
      "filters": "Phase, country and owner; synchronized KPI/list scope",
      "defaultSort": "Critical blockers then earliest due date"
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
      ],
      "layout": "Project Object Page",
      "regions": [
        "Context header",
        "seven-phase strip",
        "worklist",
        "readiness"
      ],
      "primary": "Review phase gate",
      "fields": [
        {
          "id": "P02-F01",
          "key": "projectId",
          "control": "Read-only link",
          "rule": "Stable key with project name and simulation badge",
          "sample": "NORTHSTAR-DEMO",
          "requirementId": "UI-P02-F01"
        },
        {
          "id": "P02-F02",
          "key": "phase",
          "control": "Segmented navigation",
          "rule": "All seven phases reachable; navigation does not complete gate",
          "sample": "Explore",
          "requirementId": "UI-P02-F02"
        },
        {
          "id": "P02-F03",
          "key": "gateStatus",
          "control": "Status link",
          "rule": "Incomplete, Ready for review, Accepted; show evidence basis",
          "sample": "Incomplete",
          "requirementId": "UI-P02-F03"
        },
        {
          "id": "P02-F04",
          "key": "workItem",
          "control": "Responsive table",
          "rule": "Title, type, owner, due, blocker and status",
          "sample": "Organization review",
          "requirementId": "UI-P02-F04"
        },
        {
          "id": "P02-F05",
          "key": "assumption",
          "control": "List",
          "rule": "Open owner and resolution source",
          "sample": "Countries synthetic",
          "requirementId": "UI-P02-F05"
        },
        {
          "id": "P02-F06",
          "key": "sourceBaseline",
          "control": "Version link",
          "rule": "Show source revision and effective demo time",
          "sample": "BPD v0.9",
          "requirementId": "UI-P02-F06"
        }
      ],
      "emptyState": "This phase has no assigned work. Show phase guidance and eligible next task.",
      "invalidState": "An incomplete gate opens blockers and cannot be accepted by navigation.",
      "requirementPrefix": "UI-P02",
      "filters": "Phase, task type, owner and status",
      "defaultSort": "Phase order then due date"
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
      ],
      "layout": "Discovery Object Page",
      "regions": [
        "Business outcomes",
        "process map",
        "application context"
      ],
      "primary": "Confirm discovery brief",
      "fields": [
        {
          "id": "P03-F01",
          "key": "industry",
          "control": "Select",
          "rule": "Required for brief; use industrial manufacturing",
          "sample": "Industrial manufacturing",
          "requirementId": "UI-P03-F01"
        },
        {
          "id": "P03-F02",
          "key": "outcome",
          "control": "Editable list",
          "rule": "Require title, owner and measurable indicator",
          "sample": "Reduce review rework",
          "requirementId": "UI-P03-F02"
        },
        {
          "id": "P03-F03",
          "key": "processDomain",
          "control": "Tree select",
          "rule": "Select authorized catalog domain; preserve parent context",
          "sample": "D03 Procurement",
          "requirementId": "UI-P03-F03"
        },
        {
          "id": "P03-F04",
          "key": "application",
          "control": "Relationship list",
          "rule": "Show fact-sheet reference, owner and lifecycle",
          "sample": "ERP legacy demo",
          "requirementId": "UI-P03-F04"
        },
        {
          "id": "P03-F05",
          "key": "assumption",
          "control": "Editable list",
          "rule": "Value, source, status and decision owner",
          "sample": "Five demo countries",
          "requirementId": "UI-P03-F05"
        },
        {
          "id": "P03-F06",
          "key": "briefVersion",
          "control": "Version link",
          "rule": "New save creates reviewable revision",
          "sample": "Discovery v1",
          "requirementId": "UI-P03-F06"
        }
      ],
      "emptyState": "No discovery brief. Create an outcome and select a process domain.",
      "invalidState": "An outcome without an owner or measurement basis remains a draft.",
      "requirementPrefix": "UI-P03",
      "filters": "Domain, outcome owner and application lifecycle",
      "defaultSort": "Outcome priority then title"
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
      ],
      "layout": "Prepare Wizard and Object Page",
      "regions": [
        "Project basics",
        "countries/entities",
        "owners",
        "target",
        "readiness"
      ],
      "primary": "Check readiness",
      "fields": [
        {
          "id": "P04-F01",
          "key": "projectName",
          "control": "Input",
          "rule": "Required; trim whitespace; 3–80 characters",
          "sample": "Northstar Manufacturing Demo",
          "requirementId": "UI-P04-F01"
        },
        {
          "id": "P04-F02",
          "key": "countries",
          "control": "Multi-value help",
          "rule": "IN DE US GB SG synthetic; at least one for demo baseline",
          "sample": "IN, DE, US, GB, SG",
          "requirementId": "UI-P04-F02"
        },
        {
          "id": "P04-F03",
          "key": "entities",
          "control": "Table with create/edit",
          "rule": "10 seeded unique company codes; link to P12",
          "sample": "1000",
          "requirementId": "UI-P04-F03"
        },
        {
          "id": "P04-F04",
          "key": "owner",
          "control": "Value help",
          "rule": "Required; eligible seeded project member",
          "sample": "Delivery Lead",
          "requirementId": "UI-P04-F04"
        },
        {
          "id": "P04-F05",
          "key": "target",
          "control": "Value help",
          "rule": "Required explicit nonproduction demo target",
          "sample": "S4-PILOT",
          "requirementId": "UI-P04-F05"
        },
        {
          "id": "P04-F06",
          "key": "sourceDocument",
          "control": "Object link",
          "rule": "Show selected revision and extraction state",
          "sample": "TO-BE v0.9",
          "requirementId": "UI-P04-F06"
        },
        {
          "id": "P04-F07",
          "key": "readiness",
          "control": "Checklist",
          "rule": "Show input, permission and capability checks separately",
          "sample": "2 issues",
          "requirementId": "UI-P04-F07"
        }
      ],
      "emptyState": "Project setup is incomplete. Start with project name and owner.",
      "invalidState": "Duplicate entity codes or missing target block readiness; focus the offending field.",
      "requirementPrefix": "UI-P04",
      "filters": "Country, organization type and readiness issue",
      "defaultSort": "Required blockers first"
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
      ],
      "layout": "Integration List Report and detail",
      "regions": [
        "Filter bar",
        "five-system table",
        "operation detail",
        "exchange log"
      ],
      "primary": "Test selected connection",
      "fields": [
        {
          "id": "P05-F01",
          "key": "system",
          "control": "Value help",
          "rule": "Exactly five named SAP system fixtures; filter by name",
          "sample": "SAP CBC",
          "requirementId": "UI-P05-F01"
        },
        {
          "id": "P05-F02",
          "key": "connectionState",
          "control": "Semantic status",
          "rule": "Connectivity, authentication and authorization separate",
          "sample": "Permission failed",
          "requirementId": "UI-P05-F02"
        },
        {
          "id": "P05-F03",
          "key": "operation",
          "control": "Responsive table",
          "rule": "Name, direction, pathway, permission, last observation",
          "sample": "Read organization",
          "requirementId": "UI-P05-F03"
        },
        {
          "id": "P05-F04",
          "key": "pathway",
          "control": "Select filter",
          "rule": "API upload UI attended unsupported; simulation always visible",
          "sample": "Attended",
          "requirementId": "UI-P05-F04"
        },
        {
          "id": "P05-F05",
          "key": "correlationId",
          "control": "Copyable link",
          "rule": "Stable exchange reference; open sanitized detail",
          "sample": "CORR-DEMO-204",
          "requirementId": "UI-P05-F05"
        },
        {
          "id": "P05-F06",
          "key": "lastObserved",
          "control": "Date/time",
          "rule": "Show timezone and stale status; retain last good time",
          "sample": "30 Oct 2026 10:00 IST",
          "requirementId": "UI-P05-F06"
        },
        {
          "id": "P05-F07",
          "key": "externalObject",
          "control": "Link",
          "rule": "Open labeled simulated preview and return route",
          "sample": "CBC-DEMO-01",
          "requirementId": "UI-P05-F07"
        }
      ],
      "emptyState": "No operation matches the filter. Clear filters; keep all five systems discoverable.",
      "invalidState": "Offline and expired permissions are distinct; no green business-ready status from reachability alone.",
      "requirementPrefix": "UI-P05",
      "filters": "System, direction, pathway and connection/permission state",
      "defaultSort": "Failed permission then failed connectivity then system name"
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
      ],
      "layout": "Document intake Wizard",
      "regions": [
        "Upload collection",
        "safety/extraction progress",
        "revision list",
        "source preview"
      ],
      "primary": "Review extracted requirements",
      "fields": [
        {
          "id": "P06-F01",
          "key": "file",
          "control": "Upload control",
          "rule": "DOCX only initially; proposed max 10 MiB; reject before parsing",
          "sample": "TO-BE.docx",
          "requirementId": "UI-P06-F01"
        },
        {
          "id": "P06-F02",
          "key": "documentName",
          "control": "Input",
          "rule": "Required metadata; preserve original filename separately",
          "sample": "TO-BE industrial demo",
          "requirementId": "UI-P06-F02"
        },
        {
          "id": "P06-F03",
          "key": "revision",
          "control": "Read-only version",
          "rule": "Duplicate content offers existing or explicit new revision",
          "sample": "v0.9",
          "requirementId": "UI-P06-F03"
        },
        {
          "id": "P06-F04",
          "key": "owner",
          "control": "Value help",
          "rule": "Required authorized source owner",
          "sample": "Business Analyst",
          "requirementId": "UI-P06-F04"
        },
        {
          "id": "P06-F05",
          "key": "extractionState",
          "control": "Progress/status",
          "rule": "Queued, Screening, Extracting, Review ready, Failed; real fixture transitions",
          "sample": "Review ready",
          "requirementId": "UI-P06-F05"
        },
        {
          "id": "P06-F06",
          "key": "sourceLocation",
          "control": "Source link",
          "rule": "Paragraph or section resolves to actual excerpt",
          "sample": "Section D12 paragraph 3",
          "requirementId": "UI-P06-F06"
        },
        {
          "id": "P06-F07",
          "key": "extractedCount",
          "control": "Count link",
          "rule": "Show requirements, unresolved items and source revision",
          "sample": "202 records",
          "requirementId": "UI-P06-F07"
        }
      ],
      "emptyState": "No source document. Upload a DOCX or use the clearly labeled BPD fixture.",
      "invalidState": "Wrong type, oversize, duplicate, unsafe content and parse failure have distinct messages and recovery.",
      "requirementPrefix": "UI-P06",
      "filters": "Document/revision, owner and extraction state",
      "defaultSort": "Newest revision first"
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
      ],
      "layout": "Requirement List Report with detail",
      "regions": [
        "Filter bar",
        "requirements table",
        "source and fit detail"
      ],
      "primary": "Request scope proposal",
      "fields": [
        {
          "id": "P07-F01",
          "key": "requirementId",
          "control": "Object link",
          "rule": "Preserve BR-nn-nnn and linked TC; immutable identifier",
          "sample": "BR-12-003",
          "requirementId": "UI-P07-F01"
        },
        {
          "id": "P07-F02",
          "key": "statement",
          "control": "Text area",
          "rule": "Required atomic business statement; max 2000 chars; version edits",
          "sample": "Supplier payments",
          "requirementId": "UI-P07-F02"
        },
        {
          "id": "P07-F03",
          "key": "domain",
          "control": "Value help",
          "rule": "15 supplied domains; no free-text new domain without review",
          "sample": "D12",
          "requirementId": "UI-P07-F03"
        },
        {
          "id": "P07-F04",
          "key": "fitType",
          "control": "Select",
          "rule": "Unassessed, Standard fit, Configuration, Extension, Needs decision",
          "sample": "Configuration",
          "requirementId": "UI-P07-F04"
        },
        {
          "id": "P07-F05",
          "key": "sourceRef",
          "control": "Source link",
          "rule": "Required for approved interpretation; distinguish assumption",
          "sample": "BPD v0.9",
          "requirementId": "UI-P07-F05"
        },
        {
          "id": "P07-F06",
          "key": "reviewStatus",
          "control": "Status/filter",
          "rule": "Draft, Needs evidence, Reviewed, Stale",
          "sample": "Needs evidence",
          "requirementId": "UI-P07-F06"
        },
        {
          "id": "P07-F07",
          "key": "owner",
          "control": "Value help",
          "rule": "Eligible reviewer; route task by project scope",
          "sample": "Finance specialist",
          "requirementId": "UI-P07-F07"
        }
      ],
      "emptyState": "No requirements match. Clear filters or return to document intake.",
      "invalidState": "Blank statement or unresolved required evidence prevents reviewed status and proposal submission.",
      "requirementPrefix": "UI-P07",
      "filters": "Text/BR/TC, domain, fit, review status and owner",
      "defaultSort": "Needs evidence then BR ID"
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
      ],
      "layout": "Process Tree and detail",
      "regions": [
        "Domain tree",
        "process list",
        "process/BR/TC detail",
        "related applications"
      ],
      "primary": "Add process to review",
      "fields": [
        {
          "id": "P08-F01",
          "key": "domainId",
          "control": "Tree node",
          "rule": "15 domains; expand/collapse and keyboard selection",
          "sample": "D03",
          "requirementId": "UI-P08-F01"
        },
        {
          "id": "P08-F02",
          "key": "processName",
          "control": "Searchable row",
          "rule": "202 catalog processes; search name or BR/TC",
          "sample": "Supplier liabilities and payments",
          "requirementId": "UI-P08-F02"
        },
        {
          "id": "P08-F03",
          "key": "requirementId",
          "control": "Link",
          "rule": "Open P07 with same context",
          "sample": "BR-12-003",
          "requirementId": "UI-P08-F03"
        },
        {
          "id": "P08-F04",
          "key": "testId",
          "control": "Link",
          "rule": "Show proposed acceptance, not automated process coverage",
          "sample": "TC-12-003",
          "requirementId": "UI-P08-F04"
        },
        {
          "id": "P08-F05",
          "key": "processReference",
          "control": "External preview link",
          "rule": "Show source/version and illustrative flow label",
          "sample": "SIG-DEMO-012",
          "requirementId": "UI-P08-F05"
        },
        {
          "id": "P08-F06",
          "key": "applicationReference",
          "control": "Relationship link",
          "rule": "Show distinct LeanIX fact-sheet identity",
          "sample": "LX-APP-001",
          "requirementId": "UI-P08-F06"
        },
        {
          "id": "P08-F07",
          "key": "reviewBasket",
          "control": "Token list",
          "rule": "Prevent duplicates; show count and remove action",
          "sample": "3 selected",
          "requirementId": "UI-P08-F07"
        }
      ],
      "emptyState": "No process found. Clear search or select a domain.",
      "invalidState": "A missing process reference shows unavailable evidence, not an invented official SAP diagram.",
      "requirementPrefix": "UI-P08",
      "filters": "Text/BR/TC, domain and selected basket membership",
      "defaultSort": "Domain order then BR ID"
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
      ],
      "layout": "Scoping List Report",
      "regions": [
        "Candidate filters",
        "dependency summary",
        "candidates",
        "comparison"
      ],
      "primary": "Submit scope baseline",
      "fields": [
        {
          "id": "P09-F01",
          "key": "candidateId",
          "control": "Object link",
          "rule": "DEMO-SCOPE-* unless real identity verified; pair ID and title",
          "sample": "DEMO-SCOPE-01",
          "requirementId": "UI-P09-F01"
        },
        {
          "id": "P09-F02",
          "key": "requirementRefs",
          "control": "Multi-link",
          "rule": "Each candidate has traceable requirement set",
          "sample": "BR-03-005",
          "requirementId": "UI-P09-F02"
        },
        {
          "id": "P09-F03",
          "key": "countryApplicability",
          "control": "Status/popover",
          "rule": "Available, Unverified, Unavailable; never infer from rank",
          "sample": "Unverified demo",
          "requirementId": "UI-P09-F03"
        },
        {
          "id": "P09-F04",
          "key": "reviewDecision",
          "control": "Select with reason",
          "rule": "Include, Exclude, Needs decision; persist reviewer attribution",
          "sample": "Include",
          "requirementId": "UI-P09-F04"
        },
        {
          "id": "P09-F05",
          "key": "prerequisites",
          "control": "Count/status link",
          "rule": "Open dependent candidates and unresolved conflicts",
          "sample": "1 missing",
          "requirementId": "UI-P09-F05"
        },
        {
          "id": "P09-F06",
          "key": "proposalVersion",
          "control": "Version selector",
          "rule": "Compare exact revisions; retain human edits",
          "sample": "v2",
          "requirementId": "UI-P09-F06"
        },
        {
          "id": "P09-F07",
          "key": "reviewOwner",
          "control": "Value help",
          "rule": "Separate author and scope approver",
          "sample": "Scope Approver",
          "requirementId": "UI-P09-F07"
        }
      ],
      "emptyState": "No candidates. Select reviewed requirements and generate a proposal.",
      "invalidState": "Missing prerequisite, invalid identity or unresolved applicability blocks executable baseline approval.",
      "requirementPrefix": "UI-P09",
      "filters": "Decision, country, applicability, prerequisite state and owner",
      "defaultSort": "Unresolved prerequisites then candidate ID"
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
      ],
      "layout": "Scope Object Page",
      "regions": [
        "Identity header",
        "rationale",
        "applicability",
        "prerequisites",
        "impact"
      ],
      "primary": "Apply reviewer decision",
      "fields": [
        {
          "id": "P10-F01",
          "key": "scopeIdentity",
          "control": "ID/title display",
          "rule": "Show verified versus synthetic status and catalog release",
          "sample": "DEMO-SCOPE-01",
          "requirementId": "UI-P10-F01"
        },
        {
          "id": "P10-F02",
          "key": "rationale",
          "control": "Expandable text",
          "rule": "Concise evidence-backed reason; no hidden chain-of-thought",
          "sample": "Matches purchasing requirement",
          "requirementId": "UI-P10-F02"
        },
        {
          "id": "P10-F03",
          "key": "sourceCitations",
          "control": "Source list",
          "rule": "All links accessible and resolve to revision/excerpt",
          "sample": "BR-03-005",
          "requirementId": "UI-P10-F03"
        },
        {
          "id": "P10-F04",
          "key": "countryCheck",
          "control": "Country table",
          "rule": "Country, availability, evidence time and decision owner",
          "sample": "IN / unverified",
          "requirementId": "UI-P10-F04"
        },
        {
          "id": "P10-F05",
          "key": "dependency",
          "control": "Related-object table",
          "rule": "Type, referenced item, readiness and conflict reason",
          "sample": "Requires organization",
          "requirementId": "UI-P10-F05"
        },
        {
          "id": "P10-F06",
          "key": "reviewReason",
          "control": "Text area",
          "rule": "Required for exclusion/override; max 1000 chars",
          "sample": "Outside pilot",
          "requirementId": "UI-P10-F06"
        },
        {
          "id": "P10-F07",
          "key": "activationStatus",
          "control": "Status link",
          "rule": "Package eligibility separate from candidate acceptance",
          "sample": "Approval needed",
          "requirementId": "UI-P10-F07"
        }
      ],
      "emptyState": "Referenced candidate is missing or inaccessible. Return to permitted candidate list.",
      "invalidState": "Changing the decision shows downstream impact and invalidates affected approval.",
      "requirementPrefix": "UI-P10",
      "filters": "Country and dependency status within object sections",
      "defaultSort": "Country code; unresolved dependencies first"
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
      ],
      "layout": "Organization Tree and details",
      "regions": [
        "Summary and validation",
        "accessible tree",
        "selected node",
        "assignments"
      ],
      "primary": "Validate structure",
      "fields": [
        {
          "id": "P11-F01",
          "key": "nodeId",
          "control": "Tree/list key",
          "rule": "Stable internal identity; select opens P12",
          "sample": "ORG-CC-1000",
          "requirementId": "UI-P11-F01"
        },
        {
          "id": "P11-F02",
          "key": "objectType",
          "control": "Value help",
          "rule": "10 approved demo types; typed parent/assignment rules",
          "sample": "CompanyCode",
          "requirementId": "UI-P11-F02"
        },
        {
          "id": "P11-F03",
          "key": "code",
          "control": "Input",
          "rule": "Required unique within type/project; company/plant demo codes use four uppercase alphanumerics",
          "sample": "1000",
          "requirementId": "UI-P11-F03"
        },
        {
          "id": "P11-F04",
          "key": "country",
          "control": "Value help",
          "rule": "Required for company; synthetic demo selection explicit",
          "sample": "IN",
          "requirementId": "UI-P11-F04"
        },
        {
          "id": "P11-F05",
          "key": "currency",
          "control": "Value help",
          "rule": "Required for company; seed-consistent; no legal advice",
          "sample": "INR",
          "requirementId": "UI-P11-F05"
        },
        {
          "id": "P11-F06",
          "key": "assignment",
          "control": "Relationship editor",
          "rule": "Valid type, cardinality and existing target; reject cycles",
          "sample": "Plant IN01 to 1000",
          "requirementId": "UI-P11-F06"
        },
        {
          "id": "P11-F07",
          "key": "validationIssues",
          "control": "Message list",
          "rule": "Focus exact node/field; show error versus warning",
          "sample": "Duplicate plant code",
          "requirementId": "UI-P11-F07"
        }
      ],
      "emptyState": "No organization proposal. Generate from approved scope or add the first permitted node.",
      "invalidState": "Duplicate code, cycle, invalid assignment and missing legal attributes block submission.",
      "requirementPrefix": "UI-P11",
      "filters": "Type, country, issue severity and code/name",
      "defaultSort": "Hierarchy order; issues critical first"
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
      ],
      "layout": "Organization Object Page",
      "regions": [
        "Node header",
        "typed attributes",
        "assignments",
        "observed diff",
        "impact"
      ],
      "primary": "Save node revision",
      "fields": [
        {
          "id": "P12-F01",
          "key": "objectType",
          "control": "Read-only discriminator",
          "rule": "Determine required form and permitted assignments",
          "sample": "CompanyCode",
          "requirementId": "UI-P12-F01"
        },
        {
          "id": "P12-F02",
          "key": "code",
          "control": "Input",
          "rule": "Required object-type contract; company/plant demo codes four alphanumerics; key changes require design review",
          "sample": "1000",
          "requirementId": "UI-P12-F02"
        },
        {
          "id": "P12-F03",
          "key": "name",
          "control": "Input",
          "rule": "Required; 2–80 chars; fictional label",
          "sample": "Northstar IN Manufacturing Demo",
          "requirementId": "UI-P12-F03"
        },
        {
          "id": "P12-F04",
          "key": "country",
          "control": "Value help",
          "rule": "Required for legal entity; not required for every subordinate node",
          "sample": "IN",
          "requirementId": "UI-P12-F04"
        },
        {
          "id": "P12-F05",
          "key": "currency",
          "control": "Value help",
          "rule": "Required for company; derived reference rules elsewhere",
          "sample": "INR",
          "requirementId": "UI-P12-F05"
        },
        {
          "id": "P12-F06",
          "key": "assignments",
          "control": "Editable table",
          "rule": "Show assignment type, target code/name and validation",
          "sample": "Plant IN01",
          "requirementId": "UI-P12-F06"
        },
        {
          "id": "P12-F07",
          "key": "observedVersion",
          "control": "Timestamp/diff",
          "rule": "Distinguish designed value from target observation",
          "sample": "Observed 10:00 IST",
          "requirementId": "UI-P12-F07"
        }
      ],
      "emptyState": "Node not found or inaccessible. Return to authorized organization tree.",
      "invalidState": "Cancel preserves original node; save updates graph and list together and shows affected configuration.",
      "requirementPrefix": "UI-P12",
      "filters": "Assignment type and observation result",
      "defaultSort": "Assignment type then target code"
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
      ],
      "layout": "Configuration List Report",
      "regions": [
        "Organization/status/pathway filters",
        "activity list",
        "validation summary"
      ],
      "primary": "Generate values",
      "fields": [
        {
          "id": "P13-F01",
          "key": "activityId",
          "control": "Object link",
          "rule": "DEMO-* unless verified real metadata; not an endpoint",
          "sample": "DEMO-PT",
          "requirementId": "UI-P13-F01"
        },
        {
          "id": "P13-F02",
          "key": "activityTitle",
          "control": "Text/link",
          "rule": "Business-readable title paired with ID",
          "sample": "Payment terms",
          "requirementId": "UI-P13-F02"
        },
        {
          "id": "P13-F03",
          "key": "organizationRef",
          "control": "Value help/filter",
          "rule": "Only approved permitted nodes; show verification state",
          "sample": "1000",
          "requirementId": "UI-P13-F03"
        },
        {
          "id": "P13-F04",
          "key": "pathway",
          "control": "Status/filter",
          "rule": "API, upload, UI, attended, read-only, unsupported; all simulated",
          "sample": "Attended",
          "requirementId": "UI-P13-F04"
        },
        {
          "id": "P13-F05",
          "key": "validationStatus",
          "control": "Semantic status",
          "rule": "Not checked, Valid, Invalid, Needs evidence, Stale",
          "sample": "Needs evidence",
          "requirementId": "UI-P13-F05"
        },
        {
          "id": "P13-F06",
          "key": "risk",
          "control": "Status/popover",
          "rule": "Explain specialist approval need; no unexplained numeric score",
          "sample": "Finance sensitive",
          "requirementId": "UI-P13-F06"
        },
        {
          "id": "P13-F07",
          "key": "proposalVersion",
          "control": "Version link",
          "rule": "Exact value set and source baseline",
          "sample": "v3",
          "requirementId": "UI-P13-F07"
        }
      ],
      "emptyState": "No eligible activities. Inspect scope, organization verification or clear filters.",
      "invalidState": "Unverified organization, invalid field contract or unsupported route prevents executable submission.",
      "requirementPrefix": "UI-P13",
      "filters": "Activity ID/title, company/plant, validation, risk and pathway",
      "defaultSort": "Invalid/stale first then activity ID"
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
      ],
      "layout": "Configuration Diff Object Page",
      "regions": [
        "Context/risk",
        "before/proposed/approved comparison",
        "evidence",
        "decision"
      ],
      "primary": "Submit validated change set",
      "fields": [
        {
          "id": "P14-F01",
          "key": "fieldName",
          "control": "Read-only label",
          "rule": "Business label and technical contract key",
          "sample": "Payment days",
          "requirementId": "UI-P14-F01"
        },
        {
          "id": "P14-F02",
          "key": "observedValue",
          "control": "Read-only typed value",
          "rule": "Show retrieval time and provenance; missing remains Unknown",
          "sample": "30",
          "requirementId": "UI-P14-F02"
        },
        {
          "id": "P14-F03",
          "key": "proposedValue",
          "control": "Typed input",
          "rule": "Per demo-catalog type/range/enum/reference; no free text for enum",
          "sample": "45",
          "requirementId": "UI-P14-F03"
        },
        {
          "id": "P14-F04",
          "key": "approvedValue",
          "control": "Read-only typed value",
          "rule": "Blank until current version approved; retain historical approval separately",
          "sample": "Not approved",
          "requirementId": "UI-P14-F04"
        },
        {
          "id": "P14-F05",
          "key": "sourceRef",
          "control": "Evidence link",
          "rule": "BR plus explicit DEMO-POLICY source for numeric assumptions",
          "sample": "BR-12-003 / DEMO-POLICY-001",
          "requirementId": "UI-P14-F05"
        },
        {
          "id": "P14-F06",
          "key": "organizationRef",
          "control": "Object link",
          "rule": "Show selected target company/plant and verified state",
          "sample": "1000 verified",
          "requirementId": "UI-P14-F06"
        },
        {
          "id": "P14-F07",
          "key": "changeReason",
          "control": "Text area",
          "rule": "Required for manual override; record actor and version",
          "sample": "Demo policy updated",
          "requirementId": "UI-P14-F07"
        },
        {
          "id": "P14-F08",
          "key": "snapshotTime",
          "control": "Date/time refresh",
          "rule": "Material drift invalidates approval; highlight exact difference",
          "sample": "10:00 IST",
          "requirementId": "UI-P14-F08"
        }
      ],
      "emptyState": "No value proposal. Generate values for this eligible activity.",
      "invalidState": "Invalid value highlights cell and summary; refresh drift blocks dispatch until reviewed again.",
      "requirementPrefix": "UI-P14",
      "filters": "Changed only, invalid only and evidence missing",
      "defaultSort": "Invalid fields first; retain contract field order"
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
      ],
      "layout": "Agent Mission Object Page",
      "regions": [
        "Goal and state",
        "plan/timeline",
        "sources",
        "findings",
        "handoff"
      ],
      "primary": "Review outcome",
      "fields": [
        {
          "id": "P15-F01",
          "key": "agentType",
          "control": "Select/filter",
          "rule": "Scoping, Organization, Configuration, Deployment only",
          "sample": "Scoping",
          "requirementId": "UI-P15-F01"
        },
        {
          "id": "P15-F02",
          "key": "runId",
          "control": "Stable link",
          "rule": "Versioned run with project and source context",
          "sample": "RUN-DEMO-001",
          "requirementId": "UI-P15-F02"
        },
        {
          "id": "P15-F03",
          "key": "state",
          "control": "Timeline/status",
          "rule": "Planned through completed, failed, paused; meaningful timestamps",
          "sample": "Validating",
          "requirementId": "UI-P15-F03"
        },
        {
          "id": "P15-F04",
          "key": "step",
          "control": "Expandable list",
          "rule": "Goal, bounded tool, input class, expected outcome and prerequisite",
          "sample": "Check scope identity",
          "requirementId": "UI-P15-F04"
        },
        {
          "id": "P15-F05",
          "key": "source",
          "control": "Evidence link",
          "rule": "Revision, location and freshness; accessible only",
          "sample": "BPD v0.9",
          "requirementId": "UI-P15-F05"
        },
        {
          "id": "P15-F06",
          "key": "validationFinding",
          "control": "Message list",
          "rule": "Severity, object and action to resolve",
          "sample": "Missing country evidence",
          "requirementId": "UI-P15-F06"
        },
        {
          "id": "P15-F07",
          "key": "budget",
          "control": "Read-only meter",
          "rule": "Demo step/retry counts and configured cap; no invented live token cost",
          "sample": "3 of 8 steps",
          "requirementId": "UI-P15-F07"
        },
        {
          "id": "P15-F08",
          "key": "handoffOwner",
          "control": "Persona/task link",
          "rule": "Explicit next accountable user or service",
          "sample": "Scope Approver",
          "requirementId": "UI-P15-F08"
        }
      ],
      "emptyState": "No agent run yet. Open an eligible proposal and start analysis.",
      "invalidState": "No evidence causes abstention; failed read-only analysis can retry; privileged execution cannot bypass policy.",
      "requirementPrefix": "UI-P15",
      "filters": "Agent, run status, step state and finding severity",
      "defaultSort": "Newest run; steps in execution order"
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
      ],
      "layout": "Approval Inbox List Report",
      "regions": [
        "Assignment/status filters",
        "approval table",
        "eligibility details"
      ],
      "primary": "Open selected approval",
      "fields": [
        {
          "id": "P16-F01",
          "key": "approvalId",
          "control": "Object link",
          "rule": "Stable approval reference and type",
          "sample": "APR-DEMO-001",
          "requirementId": "UI-P16-F01"
        },
        {
          "id": "P16-F02",
          "key": "artifact",
          "control": "Object link",
          "rule": "Exact proposal/package revision and target",
          "sample": "CFG-DEMO-014 v3",
          "requirementId": "UI-P16-F02"
        },
        {
          "id": "P16-F03",
          "key": "assignedTo",
          "control": "Persona text/filter",
          "rule": "Only permitted assignments; no private totals",
          "sample": "Finance Approver",
          "requirementId": "UI-P16-F03"
        },
        {
          "id": "P16-F04",
          "key": "dueAt",
          "control": "Date/time/filter",
          "rule": "Timezone visible; overdue status separate from expiry",
          "sample": "Today 16:00 IST",
          "requirementId": "UI-P16-F04"
        },
        {
          "id": "P16-F05",
          "key": "status",
          "control": "Semantic filter",
          "rule": "Pending, Returned, Rejected, Stale, Expired, Approved, Revoked",
          "sample": "Pending",
          "requirementId": "UI-P16-F05"
        },
        {
          "id": "P16-F06",
          "key": "risk",
          "control": "Status/popover",
          "rule": "Explain required review depth",
          "sample": "Finance sensitive",
          "requirementId": "UI-P16-F06"
        },
        {
          "id": "P16-F07",
          "key": "submittedBy",
          "control": "Persona text",
          "rule": "Enable visible self-approval eligibility explanation",
          "sample": "Configuration Consultant",
          "requirementId": "UI-P16-F07"
        }
      ],
      "emptyState": "No assigned approvals. Offer permitted project overview or clear filters.",
      "invalidState": "A user opening their own submitted artifact sees eligibility explanation, not an enabled approval control.",
      "requirementPrefix": "UI-P16",
      "filters": "My assignment, approval type, due date, risk and status",
      "defaultSort": "Overdue then due date then approval ID"
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
      ],
      "layout": "Approval Decision Object Page",
      "regions": [
        "Artifact header",
        "diff/evidence",
        "readiness",
        "workflow",
        "decision footer"
      ],
      "primary": "Approve eligible version",
      "fields": [
        {
          "id": "P17-F01",
          "key": "artifactVersion",
          "control": "Read-only link",
          "rule": "Exact immutable version and payload hash",
          "sample": "v3 / hash prefix",
          "requirementId": "UI-P17-F01"
        },
        {
          "id": "P17-F02",
          "key": "target",
          "control": "Read-only link",
          "rule": "Explicit target and environment; change requires new approval",
          "sample": "S4-PILOT",
          "requirementId": "UI-P17-F02"
        },
        {
          "id": "P17-F03",
          "key": "policyVersion",
          "control": "Read-only link",
          "rule": "Show policy, expiry and eligibility",
          "sample": "POLICY-v1",
          "requirementId": "UI-P17-F03"
        },
        {
          "id": "P17-F04",
          "key": "reviewEvidence",
          "control": "Expandable list",
          "rule": "Sources, validations and readback prerequisites accessible",
          "sample": "3 sources",
          "requirementId": "UI-P17-F04"
        },
        {
          "id": "P17-F05",
          "key": "decisionReason",
          "control": "Text area",
          "rule": "Required for Return/Reject; max 1000 chars",
          "sample": "Revise payment days",
          "requirementId": "UI-P17-F05"
        },
        {
          "id": "P17-F06",
          "key": "confirmation",
          "control": "Review dialog",
          "rule": "Summarize version, target and change; no implicit checkbox consent",
          "sample": "Approve v3",
          "requirementId": "UI-P17-F06"
        },
        {
          "id": "P17-F07",
          "key": "workflow",
          "control": "Timeline",
          "rule": "Actor, decision, timestamp and next owner; immutable history",
          "sample": "Returned v1",
          "requirementId": "UI-P17-F07"
        }
      ],
      "emptyState": "Approval no longer exists or is inaccessible. Return to eligible inbox.",
      "invalidState": "Changed/expired/revoked version cannot approve; show specific reason and route to fresh review.",
      "requirementPrefix": "UI-P17",
      "filters": "Evidence type and workflow event type within sections",
      "defaultSort": "Workflow chronological; current diff contract order"
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
      ],
      "layout": "Deployment Package Object Page",
      "regions": [
        "Manifest context",
        "preflight",
        "ordered actions",
        "release gate"
      ],
      "primary": "Dry run or execute simulation when authorized",
      "fields": [
        {
          "id": "P18-F01",
          "key": "packageId",
          "control": "Read-only link",
          "rule": "Stable package and manifest revision",
          "sample": "PKG-DEMO-007",
          "requirementId": "UI-P18-F01"
        },
        {
          "id": "P18-F02",
          "key": "packageType",
          "control": "Select on draft",
          "rule": "Scope, Organization, Configuration; each has prerequisite rules",
          "sample": "Configuration",
          "requirementId": "UI-P18-F02"
        },
        {
          "id": "P18-F03",
          "key": "target",
          "control": "Value help on draft",
          "rule": "Explicit permitted demo target; freeze at approval",
          "sample": "S4-PILOT",
          "requirementId": "UI-P18-F03"
        },
        {
          "id": "P18-F04",
          "key": "sourceVersions",
          "control": "Version links",
          "rule": "Scope, graph, changes and quality evidence linked",
          "sample": "Scope v2 / Org v3",
          "requirementId": "UI-P18-F04"
        },
        {
          "id": "P18-F05",
          "key": "actionOrder",
          "control": "Responsive table",
          "rule": "Sequence, object, operation, pathway, dependency and status",
          "sample": "01 Payment terms",
          "requirementId": "UI-P18-F05"
        },
        {
          "id": "P18-F06",
          "key": "preflight",
          "control": "Checklist",
          "rule": "Per check outcome, owner and blocker route",
          "sample": "Organization verified",
          "requirementId": "UI-P18-F06"
        },
        {
          "id": "P18-F07",
          "key": "releaseApproval",
          "control": "Status link",
          "rule": "Current approver, expiry and manifest hash",
          "sample": "Awaiting release",
          "requirementId": "UI-P18-F07"
        },
        {
          "id": "P18-F08",
          "key": "readiness",
          "control": "Status/action",
          "rule": "Review blockers replaces unavailable dispatch",
          "sample": "2 blockers",
          "requirementId": "UI-P18-F08"
        }
      ],
      "emptyState": "No package. Select approved baseline versions to create a draft manifest.",
      "invalidState": "Stale snapshot, missing release, conflicting target lock or unverified structures block dispatch.",
      "requirementPrefix": "UI-P18",
      "filters": "Package type, action state and pathway",
      "defaultSort": "Dependency/topological order; do not sort execution sequence arbitrarily"
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
      ],
      "layout": "Execution Monitor Object Page",
      "regions": [
        "Run header",
        "action timeline",
        "selected action detail",
        "recovery"
      ],
      "primary": "Inspect or reconcile current action",
      "fields": [
        {
          "id": "P19-F01",
          "key": "runId",
          "control": "Stable link",
          "rule": "Project, package, target and start time",
          "sample": "DEPLOY-DEMO-007",
          "requirementId": "UI-P19-F01"
        },
        {
          "id": "P19-F02",
          "key": "state",
          "control": "Status/timeline",
          "rule": "Queued, Running, Unknown, Reconciling, Verified, Failed, Paused",
          "sample": "Unknown",
          "requirementId": "UI-P19-F02"
        },
        {
          "id": "P19-F03",
          "key": "action",
          "control": "Selectable table",
          "rule": "Order, object, operation, state, attempt and last event",
          "sample": "Action 03",
          "requirementId": "UI-P19-F03"
        },
        {
          "id": "P19-F04",
          "key": "correlation",
          "control": "Copy/link",
          "rule": "Open sanitized exchange and evidence",
          "sample": "CORR-DEMO-204",
          "requirementId": "UI-P19-F04"
        },
        {
          "id": "P19-F05",
          "key": "attemptCount",
          "control": "Read-only number",
          "rule": "Retain attempts; never hide duplicate prevention",
          "sample": "1",
          "requirementId": "UI-P19-F05"
        },
        {
          "id": "P19-F06",
          "key": "observedState",
          "control": "Status link",
          "rule": "Unknown separate from failure and successful commit",
          "sample": "Readback required",
          "requirementId": "UI-P19-F06"
        },
        {
          "id": "P19-F07",
          "key": "operatorTask",
          "control": "Task link",
          "rule": "Owner, due, instructions and completion evidence",
          "sample": "Reconcile target",
          "requirementId": "UI-P19-F07"
        },
        {
          "id": "P19-F08",
          "key": "progress",
          "control": "Count link",
          "rule": "Verified required actions / total required; do not equate dispatched with verified",
          "sample": "2 of 5 verified",
          "requirementId": "UI-P19-F08"
        }
      ],
      "emptyState": "No execution exists for this package. Return to preflight and release.",
      "invalidState": "A timeout after possible write enters Unknown; no blind Retry button; offer Reconcile unknown.",
      "requirementPrefix": "UI-P19",
      "filters": "Action state, pathway and owned recovery tasks",
      "defaultSort": "Execution order; latest event visible in detail"
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
      ],
      "layout": "Reconciliation Comparison",
      "regions": [
        "Summary",
        "expected/observed rows",
        "discrepancy details",
        "evidence"
      ],
      "primary": "Refresh observation",
      "fields": [
        {
          "id": "P20-F01",
          "key": "objectKey",
          "control": "Read-only link",
          "rule": "Target identity and approved action",
          "sample": "DEMO-PT / 1000",
          "requirementId": "UI-P20-F01"
        },
        {
          "id": "P20-F02",
          "key": "approvedValue",
          "control": "Read-only typed",
          "rule": "Exact approved revision",
          "sample": "45",
          "requirementId": "UI-P20-F02"
        },
        {
          "id": "P20-F03",
          "key": "observedValue",
          "control": "Read-only typed",
          "rule": "Value, retrieval timestamp and source; Unknown stays explicit",
          "sample": "30",
          "requirementId": "UI-P20-F03"
        },
        {
          "id": "P20-F04",
          "key": "result",
          "control": "Semantic filter",
          "rule": "Match, Mismatch, Unknown, Proven not committed, Needs operator",
          "sample": "Mismatch",
          "requirementId": "UI-P20-F04"
        },
        {
          "id": "P20-F05",
          "key": "observationTime",
          "control": "Date/time",
          "rule": "Use fixed demo clock; stale state visible",
          "sample": "10:05 IST",
          "requirementId": "UI-P20-F05"
        },
        {
          "id": "P20-F06",
          "key": "evidenceRef",
          "control": "Source link",
          "rule": "Observation and correlation accessible",
          "sample": "OBS-DEMO-003",
          "requirementId": "UI-P20-F06"
        },
        {
          "id": "P20-F07",
          "key": "recoveryOwner",
          "control": "Value help",
          "rule": "Required if discrepancy routed to recovery",
          "sample": "Deployment Operator",
          "requirementId": "UI-P20-F07"
        }
      ],
      "emptyState": "No observations. Refresh using an authorized read-only lookup.",
      "invalidState": "Mismatch cannot be accepted as verified; evidence export includes simulation and source revision.",
      "requirementPrefix": "UI-P20",
      "filters": "Result, object type and required/optional action",
      "defaultSort": "Mismatch/Unknown first then action order"
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
      ],
      "layout": "Exception List Report and detail",
      "regions": [
        "Severity/owner/system filters",
        "exceptions",
        "recovery workbench"
      ],
      "primary": "Open permitted recovery action",
      "fields": [
        {
          "id": "P21-F01",
          "key": "exceptionId",
          "control": "Object link",
          "rule": "Stable error and source action",
          "sample": "EX-DEMO-003",
          "requirementId": "UI-P21-F01"
        },
        {
          "id": "P21-F02",
          "key": "category",
          "control": "Select filter",
          "rule": "Validation, Permission, Connectivity, Mapping, Unknown, Mismatch",
          "sample": "Unknown",
          "requirementId": "UI-P21-F02"
        },
        {
          "id": "P21-F03",
          "key": "severity",
          "control": "Semantic filter",
          "rule": "Critical, High, Medium, Low with textual meaning",
          "sample": "High",
          "requirementId": "UI-P21-F03"
        },
        {
          "id": "P21-F04",
          "key": "owner",
          "control": "Value help",
          "rule": "Eligible accountable operator; assignment logged",
          "sample": "Integration Operator",
          "requirementId": "UI-P21-F04"
        },
        {
          "id": "P21-F05",
          "key": "errorDetail",
          "control": "Expandable text",
          "rule": "Sanitized technical detail and business impact; no secrets",
          "sample": "Outcome not established",
          "requirementId": "UI-P21-F05"
        },
        {
          "id": "P21-F06",
          "key": "retryEligibility",
          "control": "Status/action",
          "rule": "Safe read or proven uncommitted only",
          "sample": "Reconciliation required",
          "requirementId": "UI-P21-F06"
        },
        {
          "id": "P21-F07",
          "key": "resolutionEvidence",
          "control": "Upload/text ref",
          "rule": "Required for attended report; readback still mandatory",
          "sample": "Operator evidence",
          "requirementId": "UI-P21-F07"
        }
      ],
      "emptyState": "No unresolved exceptions. Show last observation and access to resolved history.",
      "invalidState": "Missing owner/evidence prevents resolution; permanent failure remains visible after failed retry.",
      "requirementPrefix": "UI-P21",
      "filters": "Severity, system, category, owner and resolution state",
      "defaultSort": "Criticality then age descending"
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
      ],
      "layout": "Qualification List Report",
      "regions": [
        "Suite and gate summary",
        "test list",
        "assertion/evidence detail"
      ],
      "primary": "Run demo suite",
      "fields": [
        {
          "id": "P22-F01",
          "key": "suiteId",
          "control": "Select",
          "rule": "J01–J05 and selected pilot qualification cases",
          "sample": "J03",
          "requirementId": "UI-P22-F01"
        },
        {
          "id": "P22-F02",
          "key": "testId",
          "control": "Object link",
          "rule": "TC where applicable plus product test ID; do not imply 202 automated tests",
          "sample": "TC-12-003",
          "requirementId": "UI-P22-F02"
        },
        {
          "id": "P22-F03",
          "key": "result",
          "control": "Semantic filter",
          "rule": "Not run, Queued, Running, Passed, Failed, Blocked",
          "sample": "Not run",
          "requirementId": "UI-P22-F03"
        },
        {
          "id": "P22-F04",
          "key": "assertion",
          "control": "Expandable text",
          "rule": "Expected versus actual state and affected action",
          "sample": "No duplicate write",
          "requirementId": "UI-P22-F04"
        },
        {
          "id": "P22-F05",
          "key": "featureRefs",
          "control": "Multi-link",
          "rule": "Exact Fxx-nnn references",
          "sample": "F12-010",
          "requirementId": "UI-P22-F05"
        },
        {
          "id": "P22-F06",
          "key": "uatDecision",
          "control": "Select/reason",
          "rule": "Authorized acceptance or defect; actor and revision required",
          "sample": "Needs fix",
          "requirementId": "UI-P22-F06"
        },
        {
          "id": "P22-F07",
          "key": "almTask",
          "control": "External preview link",
          "rule": "Correlated simulated task; no duplicate task on retry",
          "sample": "ALM-DEMO-001",
          "requirementId": "UI-P22-F07"
        }
      ],
      "emptyState": "No test result. Select a seeded suite or inspect qualification criteria.",
      "invalidState": "Not run is never green; unresolved critical safety failures block quality-gate acceptance.",
      "requirementPrefix": "UI-P22",
      "filters": "Suite, result, feature and TC ID",
      "defaultSort": "Failed/Blocked first then test ID"
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
      ],
      "layout": "Evidence List Report and lineage",
      "regions": [
        "Search filters",
        "events/artifacts",
        "lineage details",
        "authorized export"
      ],
      "primary": "Open evidence lineage",
      "fields": [
        {
          "id": "P23-F01",
          "key": "eventId",
          "control": "Stable link",
          "rule": "Actor, action, outcome and correlation",
          "sample": "EV-DEMO-010",
          "requirementId": "UI-P23-F01"
        },
        {
          "id": "P23-F02",
          "key": "artifactRef",
          "control": "Object link",
          "rule": "Requirement through proposal approval action observation",
          "sample": "CFG-DEMO-014 v3",
          "requirementId": "UI-P23-F02"
        },
        {
          "id": "P23-F03",
          "key": "actor",
          "control": "Persona/filter",
          "rule": "Actual seeded actor; demo switches labeled separately",
          "sample": "Finance Approver",
          "requirementId": "UI-P23-F03"
        },
        {
          "id": "P23-F04",
          "key": "eventTime",
          "control": "Date/time filter",
          "rule": "Timezone explicit; fixed seed clock",
          "sample": "10:10 IST",
          "requirementId": "UI-P23-F04"
        },
        {
          "id": "P23-F05",
          "key": "outcome",
          "control": "Semantic filter",
          "rule": "Attempted, Denied, Approved, Failed, Verified",
          "sample": "Denied",
          "requirementId": "UI-P23-F05"
        },
        {
          "id": "P23-F06",
          "key": "redaction",
          "control": "Disclosure",
          "rule": "Explain hidden field policy without revealing hidden value",
          "sample": "Restricted",
          "requirementId": "UI-P23-F06"
        },
        {
          "id": "P23-F07",
          "key": "exportScope",
          "control": "Dialog selection",
          "rule": "Read and export entitlements separate; include manifest and simulation label",
          "sample": "Current package",
          "requirementId": "UI-P23-F07"
        }
      ],
      "emptyState": "No visible evidence matches. Clear filters without revealing restricted counts.",
      "invalidState": "Denied export provides View permissions; malformed or private source links do not leak details.",
      "requirementPrefix": "UI-P23",
      "filters": "Actor, time range, outcome, BR ID, package and correlation",
      "defaultSort": "Event time descending with stable event ID tie-break"
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
      ],
      "layout": "Run and Handover Overview",
      "regions": [
        "Pilot health",
        "runbooks",
        "known limits",
        "handover checklist"
      ],
      "primary": "Review handover readiness",
      "fields": [
        {
          "id": "P24-F01",
          "key": "health",
          "control": "Metric/status link",
          "rule": "Last observed target/project status; not fake production monitoring",
          "sample": "Pilot healthy",
          "requirementId": "UI-P24-F01"
        },
        {
          "id": "P24-F02",
          "key": "runbook",
          "control": "Document link",
          "rule": "Owner, version, recovery procedure and related issue",
          "sample": "Unknown write recovery",
          "requirementId": "UI-P24-F02"
        },
        {
          "id": "P24-F03",
          "key": "handoverItem",
          "control": "Checklist",
          "rule": "Required artifact, owner and accepted state",
          "sample": "Run guide ready",
          "requirementId": "UI-P24-F03"
        },
        {
          "id": "P24-F04",
          "key": "knownIssue",
          "control": "Owned list",
          "rule": "Severity, impact, workaround and due date",
          "sample": "Attended activity",
          "requirementId": "UI-P24-F04"
        },
        {
          "id": "P24-F05",
          "key": "supportTask",
          "control": "Form/list",
          "rule": "Required description and eligible owner",
          "sample": "Review pilot mismatch",
          "requirementId": "UI-P24-F05"
        },
        {
          "id": "P24-F06",
          "key": "handoverDecision",
          "control": "Review action",
          "rule": "Authorized acceptance with complete evidence only",
          "sample": "Awaiting owner",
          "requirementId": "UI-P24-F06"
        },
        {
          "id": "P24-F07",
          "key": "futureCapability",
          "control": "Roadmap link",
          "rule": "Useful explanation and return; no Coming soon dead end",
          "sample": "Migration agent later",
          "requirementId": "UI-P24-F07"
        }
      ],
      "emptyState": "No handover package. Review required pilot artifacts and ownership.",
      "invalidState": "Missing runbooks or unresolved critical issues prevent handover acceptance.",
      "requirementPrefix": "UI-P24",
      "filters": "Health category, artifact owner, known issue severity",
      "defaultSort": "Critical issue first then required handover items"
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
      ],
      "layout": "Benefits Analytical Overview",
      "regions": [
        "Outcome summary",
        "metric basis",
        "editable assumptions",
        "comparison"
      ],
      "primary": "Inspect benefit basis",
      "fields": [
        {
          "id": "P25-F01",
          "key": "metric",
          "control": "Value-help select",
          "rule": "Coverage, turnaround, rework or illustrative effort; source label visible",
          "sample": "Verified completion",
          "requirementId": "UI-P25-F01"
        },
        {
          "id": "P25-F02",
          "key": "value",
          "control": "Metric link",
          "rule": "Show numerator denominator and event basis",
          "sample": "3 of 5",
          "requirementId": "UI-P25-F02"
        },
        {
          "id": "P25-F03",
          "key": "baselineHours",
          "control": "Numeric input",
          "rule": "Illustrative; finite nonnegative decimal; same scope/time basis",
          "sample": "20",
          "requirementId": "UI-P25-F03"
        },
        {
          "id": "P25-F04",
          "key": "assistedHours",
          "control": "Numeric input",
          "rule": "Illustrative; finite nonnegative decimal",
          "sample": "6",
          "requirementId": "UI-P25-F04"
        },
        {
          "id": "P25-F05",
          "key": "reviewRecoveryHours",
          "control": "Numeric input",
          "rule": "Included in calculation; finite nonnegative decimal",
          "sample": "2",
          "requirementId": "UI-P25-F05"
        },
        {
          "id": "P25-F06",
          "key": "unitCost",
          "control": "Numeric input",
          "rule": "Optional; currency explicit; no invented achieved saving",
          "sample": "INR 1000",
          "requirementId": "UI-P25-F06"
        },
        {
          "id": "P25-F07",
          "key": "comparison",
          "control": "Interactive chart/table",
          "rule": "Baseline versus assisted; data point opens underlying basis",
          "sample": "12 h illustrative benefit",
          "requirementId": "UI-P25-F07"
        }
      ],
      "emptyState": "No measured outcome yet. Inspect the illustrative scenario assumptions.",
      "invalidState": "Unknown denominator shows Not measured; negative computed benefit is allowed and explained, not clipped to zero.",
      "requirementPrefix": "UI-P25",
      "filters": "Metric, scenario, selected scope and period",
      "defaultSort": "Outcome order; assumptions in calculation order"
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
      ],
      "layout": "Access Administration List and detail",
      "regions": [
        "Personas and scopes",
        "grant detail",
        "audit",
        "negative-case launcher"
      ],
      "primary": "Inspect grants",
      "fields": [
        {
          "id": "P26-F01",
          "key": "userId",
          "control": "Persona link",
          "rule": "Seeded identity; do not treat role label as authentication",
          "sample": "DEMO-USER-05",
          "requirementId": "UI-P26-F01"
        },
        {
          "id": "P26-F02",
          "key": "role",
          "control": "Value help",
          "rule": "Only approved persona roles; allowed admin scope enforced",
          "sample": "Finance Approver",
          "requirementId": "UI-P26-F02"
        },
        {
          "id": "P26-F03",
          "key": "projectScope",
          "control": "Multi-value help",
          "rule": "No unauthorized expansion by caller input",
          "sample": "NORTHSTAR-DEMO",
          "requirementId": "UI-P26-F03"
        },
        {
          "id": "P26-F04",
          "key": "organizationScope",
          "control": "Multi-value help",
          "rule": "Company/plant boundaries; empty is no grant not global access",
          "sample": "1000 / IN01",
          "requirementId": "UI-P26-F04"
        },
        {
          "id": "P26-F05",
          "key": "expiresAt",
          "control": "Date/time input",
          "rule": "Future grant expiry; timezone explicit",
          "sample": "Tomorrow 17:00 IST",
          "requirementId": "UI-P26-F05"
        },
        {
          "id": "P26-F06",
          "key": "exportGrant",
          "control": "Boolean control",
          "rule": "Separate evidence-export entitlement; audit change",
          "sample": "False",
          "requirementId": "UI-P26-F06"
        },
        {
          "id": "P26-F07",
          "key": "negativeCase",
          "control": "Select/action",
          "rule": "Predefined denied scenarios; show actual backend outcome",
          "sample": "Self approval",
          "requirementId": "UI-P26-F07"
        }
      ],
      "emptyState": "No visible grants. Select an authorized seeded persona.",
      "invalidState": "Unauthorized escalation or expired grant fails at service boundary; revocation affects subsequent requests.",
      "requirementPrefix": "UI-P26",
      "filters": "User, role, project, organization and grant expiry",
      "defaultSort": "Expired/expiring grants first then user ID"
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
      ],
      "layout": "Architecture Relationship Object Page",
      "regions": [
        "Process/application selector",
        "relationships",
        "source ownership",
        "impact"
      ],
      "primary": "Inspect process application relation",
      "fields": [
        {
          "id": "P27-F01",
          "key": "processId",
          "control": "Link/value help",
          "rule": "Distinct Signavio reference and source version",
          "sample": "SIG-DEMO-012",
          "requirementId": "UI-P27-F01"
        },
        {
          "id": "P27-F02",
          "key": "factSheetId",
          "control": "Link/value help",
          "rule": "Distinct LeanIX application/capability reference",
          "sample": "LX-APP-001",
          "requirementId": "UI-P27-F02"
        },
        {
          "id": "P27-F03",
          "key": "relationshipType",
          "control": "Select filter",
          "rule": "Supports process, realizes capability, replaced by",
          "sample": "Supports process",
          "requirementId": "UI-P27-F03"
        },
        {
          "id": "P27-F04",
          "key": "lifecycle",
          "control": "Read-only status",
          "rule": "Demo architecture context; source ownership visible",
          "sample": "Phase out",
          "requirementId": "UI-P27-F04"
        },
        {
          "id": "P27-F05",
          "key": "owner",
          "control": "Read-only persona",
          "rule": "Architecture/process source owner",
          "sample": "Enterprise Architect",
          "requirementId": "UI-P27-F05"
        },
        {
          "id": "P27-F06",
          "key": "syncState",
          "control": "Status link",
          "rule": "Observed, Stale, Conflict, Unavailable with timestamp",
          "sample": "Conflict",
          "requirementId": "UI-P27-F06"
        },
        {
          "id": "P27-F07",
          "key": "impact",
          "control": "Related-object list",
          "rule": "Affected scope/requirements; no silent synchronization writes",
          "sample": "3 affected candidates",
          "requirementId": "UI-P27-F07"
        }
      ],
      "emptyState": "No mapped relation. Open process context or review the seeded mapping.",
      "invalidState": "Conflicting source ownership requires reviewed resolution; no fabricated bidirectional automatic sync.",
      "requirementPrefix": "UI-P27",
      "filters": "Process/application, relationship, lifecycle and sync state",
      "defaultSort": "Conflict/stale first then process name"
    }
  ]
}
```
<!-- END UI REQUIREMENTS -->
