# Project instructions: HoliFit

Shared rules: [workspace](../../../AGENTS.md) and [personal projects](../../AGENTS.md). This file adds only project-specific guidance.

## Scope

Local static reconstruction of the public HoliFit site. Preserve its reference-led page compositions and distinguish supplied content from editable placeholders.

## Architecture

Dependency-free Node ES modules generate prerendered HTML into `dist/`. Content/media settings live in `src/content.mjs`; shared rendering, routes and browser behavior remain separate. There is no existing application database or live inquiry backend.

## Commands

Run from this directory; `package.json` is the command source of truth. Node 22+ is declared; the site needs no package installation.

| Task                                          | Command                          |
| --------------------------------------------- | -------------------------------- |
| Start local server                            | `npm run dev`                    |
| Syntax/content checks                         | `npm run check`                  |
| Rebuild static output                         | `npm run build`                  |
| Browser verification, after its prerequisites | `node scripts/browser-check.cjs` |

README.md describes the browser tooling dependency. Restart the local server after source changes; use the port printed by the server.

## Project restrictions

- Keep inquiries disconnected by default: the current fallback prepares an email for the visitor to send.
- Enabling `site.formEndpoint` requires an implemented/approved backend and updated disconnected-default checks; a configured URL alone is not a working integration.
- Route media changes through MEDIA-GUIDE.md and content settings; keep placeholders honest until approved assets/copy arrive.
- A future static host needs directory-index routing and the generated `404.html` fallback. Do not substitute an SPA fallback for this multipage build.

## Documentation

- Setup and integration contracts: [README.md](README.md).
- Design and interactions: [DESIGN.md](DESIGN.md), [UX-CONTRACT.md](UX-CONTRACT.md).
- Media replacement: [MEDIA-GUIDE.md](MEDIA-GUIDE.md).
- Verification and work status: [REVIEW.md](REVIEW.md), [TASKS.md](TASKS.md).
