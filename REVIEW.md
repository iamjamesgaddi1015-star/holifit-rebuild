# Holifit local rebuild review — 2026-10-29

User requested a reference-led 1:1 rebuild of https://holifit.ph/ with replaceable imagery. This is an existing project; its dependency-free static architecture is retained. Local implementation and self-review only; no independent reviewer or publication approval is claimed.

## Implemented

| Before | After | Why |
| --- | --- | --- |
| Generic single-heading hero, green topbar, logo on left | Two large uppercase homepage headings, image collage slot, overlaid navigation, logo on right | Matches the observed reference geometry |
| Generic alternating service rows | Oversized images with alternating overlapping green text panels | Recreates the original's distinctive program section |
| Identical service-page templates | Separate image-led and editorial layouts with route-specific section outlines | Reference pages use materially different layouts |
| Missing media, catalog and contact composition | Trust carousel, media names, testimonial rows, catalog form, green contact card and schematic map | Restores the reference's section sequence |
| Abstract empty media boxes | Local editable SVG scene placeholders and centralized replacement settings | Supports approved image replacement without template rewrites |
| Calculator empty state | Local validated adult energy calculator with unit and BMR modes | Rebuilds a visible reference interaction without collecting data |
| Old hero max-width changes line wrapping | Dedicated 890px hero text measure | Screenshot comparison identified inherited CSS drift |

## Evidence

- `npm.cmd run check`: PASS, 29 routes, unique routes, one h1 per route, internal destinations, media references and disconnected integration defaults.
- `npm.cmd run build`: PASS, 29 generated static routes.
- `node scripts/browser-check.cjs`: PASS, navigation, menus, FAQ, form validation, synthetic endpoint failure/success, mobile menu, five-width homepage checks, local calculator arithmetic/invalid input, catalog validation, reduced motion, 404 and page-error checks. No actual inquiry is sent.
- `node scripts/visual-review.cjs`: PASS, 28 non-404 routes × four widths (320/390/768/1440), zero horizontal-overflow cases, zero page errors. Desktop/mobile screenshots saved under ignored `artifacts/`.
- Original reference: homepage HTML/layout measurements and screenshots, plus top-viewport screenshots and heading structure for 16 secondary pages, under ignored `artifacts/reference/`.
- Taste static lint and real-browser inspector both executed. They do **not** pass their default original-design rules. Preserved source features trigger headline wrapping, labels, dividers, card icons, frame offsets, type/size count and carousel findings. SVG media and absent footage are explicit user-approved placeholder constraints. No random art-direction draw was used because it conflicts with the user's reference-copy requirement. Low-contrast small CTA labels were darkened after review.
- Python premium audit unavailable: only Windows app-execution aliases are present. No Python/package/browser installation was attempted. Physical mobile hardware, screen readers, full zoom matrix, comprehensive accessibility audit and exact pixel-difference testing remain OPEN.

## Fidelity boundaries

The homepage and top-level layouts are reconstructed from the public reference, with approved-media slots and independently editable text. Original photos, videos, logo graphics, testimonial quotations/portraits, historical blog articles, downloads and legal text are not supplied. Article/resource/legal destinations are explicit editable placeholders. Scheduling and live catalog delivery remain disconnected. The schematic map is not an interactive geographic service. This is not a verified pixel-identical copy of every route or a production-ready publication.

The reference currently has visible loading/contrast/layout defects on some pages. The rebuild retains readable navigation, visible content, semantic headings and working mobile controls instead of reproducing those defects.

The calculator uses the simplified Mifflin–St Jeor resting-energy equation ([primary paper](https://pubmed.ncbi.nlm.nih.gov/2305711/)), or a lean-mass estimate for optional body-fat input, then the chosen activity factor. It labels results as estimates, limits inputs to adults and does not prescribe diet or store/transmit entries. Formula parity with the original calculator is not asserted.

## Operation and rollback

Run `Start Holifit.cmd`, or `npm run dev`, and open http://127.0.0.1:4173. Stop with Ctrl+C. Media settings and dimensions are documented in MEDIA-GUIDE.md. No deployment, original-site change, live form submission, remote booking, new dependency or billing activation occurred.

Rollback: stop the local server; selectively restore this project's source changes from the workspace version history and rebuild. Keep user-supplied media. Do not reset unrelated workspace changes. Original reference HTML/screenshots stay outside the deployable public directory. Site owner must approve actual assets, quotations, wording, policies and integrations before publication.
