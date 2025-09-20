# Repository Guidelines

## Project Structure & Module Organization
This repository is intentionally starting from a clean slate; create the following top-level layout as modules land: `src/` for production code grouped by domain, `tests/` mirroring the module tree, `assets/` for fixtures and sample data, `docs/` for architecture notes, and `scripts/` for developer tooling. Keep experimental spikes under `sandbox/` and delete them once promoted. When contributions span multiple languages, isolate each runtime under `src/<runtime>/` to keep dependencies independent.

## Build, Test, and Development Commands
Automate repeatable tasks with executable scripts in `scripts/` and re-export them through a `Makefile` or `justfile`. At a minimum, define:
- `scripts/bootstrap.sh` – installs dependencies and verifies toolchain versions.
- `scripts/dev.sh` – runs the primary service or CLI in watch mode.
- `scripts/test.sh` – executes the entire test matrix; accept `--unit` and `--integration`.
Expose shorthand wrappers (`make bootstrap`, `make dev`, `make test`) so CI can call the same entry points.

## Coding Style & Naming Conventions
Format code before committing. Adopt language-native formatters (`black` for Python, `prettier` for TS/JS, `rustfmt` for Rust) and pin versions in `pyproject.toml` or `package.json`. Use 4-space indentation except where language tooling dictates otherwise. Favor descriptive, lowercase-with-dashes directory names and `snake_case` files unless a framework requires `PascalCase`. Prefix feature branches with the issue id, e.g., `123-feature-flag-api`.

## Testing Guidelines
Co-locate unit tests under `tests/<module>` with filenames `test_<feature>.py` or `<Feature>.spec.ts`, matching the implementation language. Include integration scenarios under `tests/integration/` and mock external services; place re-usable fixtures in `tests/fixtures/`. Target high-value paths first and keep coverage reports within the repo (`coverage/` ignored in Git). Run `scripts/test.sh` locally before every push and ensure new behaviors ship with at least one failing test prior to implementation.

## Commit & Pull Request Guidelines
Write commits in imperative tense (`Add cipher round helpers`). Group related changes; avoid mixing refactors with feature work. Pull requests should describe the intent, list notable decisions, and link tracking issues. Attach screenshots or CLI transcripts for user-visible changes. Request review from at least one maintainer and wait for green CI before merging.
