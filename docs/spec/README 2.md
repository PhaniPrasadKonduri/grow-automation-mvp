# Specification source of truth

This directory contains the materialized source specification extracted from `GROW_MVP_Codex_Prompt_Library.md` on 2026-10-30.

## Source precedence

- `GROW_MVP_Codex_Prompt_Library.md` is the canonical source for embedded project data.
- `docs/spec/*.json` are the repository source-of-truth files used for validation and downstream implementation prompts.
- Later implementation prompts may update specific artifacts only with a matching source diff and recorded provenance.

## Scope

The extracted artifacts in this directory include:

- baseline
- screens
- common-controls
- personas
- r1-features
- process-catalog
- demo-catalogs

## Simulation and project boundaries

- The project remains a deterministic nonproduction prototype.
- SAP live integrations and production model/API credentials are not assumed to exist.
- Country and legal data are synthetic and require client-specific validation before production reuse.
- The seven-phase project model is used as the repository baseline for architecture and implementation sequencing.
