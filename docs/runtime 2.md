# Runtime guidance

## Supported runtime selection

This repository intentionally pins a compatible Node.js runtime for the SAP CAP + UI5 toolchain used by the prototype.

- Node.js: `22.x`
- npm: `>=10`
- CAP SDK: `@sap/cds-dk` `^10.2.0`
- UI5 CLI: `@ui5/cli` `^4.0.71`

The project is aligned to the local environment where Node 24 is installed, but the repository states a supported CAP-compatible Node 22 major version to keep the runtime deterministic and compatible with the official toolchain guidance.

## Current status

- Structure scaffold exists.
- Specification materialization exists.
- Runtime and dependency contract is now recorded.
- CAP/UI5 startup scripts remain future B02 work.

## Intended future runtime

- `npm install` at the repository root to resolve the workspace.
- `npm run dev:backend` for CAP service startup.
- `npm run dev:frontend` for UI5 local development server.
- `npm run dev` to start both processes together after B02 creates the runtime scripts.

These commands are planned, not yet implemented in this scaffold stage.
