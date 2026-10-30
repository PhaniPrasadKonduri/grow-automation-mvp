# Routing and floorplans

The UI5 app is intentionally scaffolded to support a multi-screen GROW workflow with shared page patterns, action registries and route metadata.

## Floorplan direction

- Use a small number of shared floorplans for project, scoping, organization, configuration, deployment and governance views.
- Register pages consistently to avoid mismatches between route metadata, manifest entries and tests.
- Keep screen IDs stable across prompt-driven feature work.

## Implementation expectations

The actual route and registry files are part of later feature prompts; the scaffold only establishes the repository structure and documentation boundaries.
