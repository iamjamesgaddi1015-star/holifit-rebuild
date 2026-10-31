# HoliFit website design

## Purpose and register
Brand and content website for Philippine HR leaders exploring employee wellness.
Reference: https://holifit.ph/, homepage plus 16 secondary pages inspected with an installed browser on 2026-10-29.
User requested a 1:1 visual reconstruction with replaceable image placeholders. Fidelity takes precedence over new art direction.
Use editable replacement copy and explicit media slots. No live collection, bookings or publication is enabled.
The adult energy calculator runs locally with validated inputs and an explicit estimate label.

## Visual direction
Dark forest sections, green actions, white trust/testimonial/FAQ surfaces, condensed bold headings.
Keep the video/image hero, client logo strip, alternating service rows, outcomes, testimonials, FAQ and contact progression.
Avoid introducing unrelated dashboard conventions or decorative stock photos.

## Token ownership
The existing base tokens live in public/styles.css; public/reference.css is the canonical fidelity layer loaded after it.
Forest #14261c; panel/reference green #1f7a50; decorative action green #269e70;
small white action labels use #1f7a50 or #14633e; lime #cfdb12; white #ffffff; ink #212121.
Body Poppins, heading Oswald; fallback Century Gothic/Arial and Arial Narrow/Impact.
Self-host open-license TTF files and their OFL notices under public/fonts; fallback metrics may differ.
Maximum content width 1200px; homepage hero text width 890px; desktop gutters 40px; phone gutters 20px.
Desktop headings 56–80px, section headings 60px, service-card headings 35px, body 17px.
Section spacing generally 100px desktop/60px phone. Square media with pill CTAs match the source.
Solid offset image frames reproduce the original; soft shadows are limited to floating menus.

## Responsive and behavior
Navigation collapses below 1100px. Content grids become one column below 700px.
Service menus use click and keyboard activation, Escape dismissal and focus restoration.
FAQs use native details/summary. All actions are links or buttons; focus remains visible.
Respect reduced motion; background video has a pause button. Media reserves its aspect ratio.
Global scrollbars remain visible, with standards and WebKit styles plus forced-colors fallback.
Form errors stay inline and preserve entered values. Native select is intentional for OS keyboard support.
No fake submission success. No persistence of personal information in the browser.

## Content and future changes
Shared data: src/content.mjs. Header/footer/contact: src/brand.mjs. Shared forms/media: src/components.mjs.
Page assembly: src/pages.mjs; reference homepage: src/home.mjs; secondary layouts: src/reference-pages.mjs.
New service data automatically creates a route and menu entry. MEDIA-GUIDE.md lists replacement settings.
Replace content placeholders with approved materials before launch. CMS integration should adapt data to these templates.

## Verification
Node static route/link/media checks and Playwright desktop/mobile workflow checks.
The Python skill auditor cannot run here because Python is unavailable.
Reference top viewports were captured for 16 secondary pages. Full pixel parity is not established.

## Applied skills and intentional exceptions
Taste and Emil design engineering guide precision, readable hierarchy and interaction feedback; frontend-design/premium
guide shared components, resilient forms and documented ownership. Mobile-native guidance informs touch and input behavior.
The user's reference-copy request overrides random Taste directions, new typography/palettes and replacement compositions.
Taste's static scanner flags original pill buttons, Oswald/Poppins usage, reference labels, offset frames and the neutral image scrim;
these are reviewed reference-fidelity exceptions, not evidence of an unqualified scanner pass. The Python audit is unavailable
with the present Windows application aliases; no software is installed for this task. Physical device checks remain open.
