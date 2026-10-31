# HoliFit recreation

A dependency-free static rebuild based on the public holifit.ph reference inspected on 2026-10-29.
29 pre-rendered routes, reference-led homepage and secondary-page layouts, mobile navigation,
replaceable local SVG media, logo carousel, FAQs, local energy calculator and disconnected inquiry forms.
Original photos, videos, graphic logos, approved quotes and article/download/legal content remain to be supplied.
This is a visual reconstruction, not a verified pixel-identical copy or a connection to the original site's services.

See [MEDIA-GUIDE.md](MEDIA-GUIDE.md) for replacement settings and dimensions.

## Run locally

Requires Node 22 or later. No package installation is needed for the website.

```powershell
cd C:\Users\222170\Documents\James-Workspace\04-Personal-Projects\holifit-rebuild
npm run dev
```

Open http://127.0.0.1:4173. Restart the command after source changes.

```powershell
npm run check
npm run build
```

`dist/` is deployable to any static host that supports directory index pages and custom 404.html.
Deployment has deliberately not been performed. Set the host's 404 fallback to 404.html, not index.html.

## Where to edit

| Change | File |
| --- | --- |
| Business details, service descriptions, media, testimonials, FAQs | src/content.mjs |
| Shared header, navigation, footer, cards, contact form | src/components.mjs |
| Route generation | src/pages.mjs |
| Reference homepage | src/home.mjs |
| Secondary reference layouts | src/reference-pages.mjs |
| Header, footer and contact block | src/brand.mjs |
| Reference typography, colors, spacing and responsive layout | public/reference.css |
| Existing shared base styles and forms | public/styles.css |
| Menus, form validation, video controls | public/app.js |
| Your images, videos and downloadable files | public/media/ |

### Replace a placeholder

Place a licensed image in public/media/ and change its corresponding object in src/content.mjs:

```js
media: { src: '/media/team-building.webp', alt: 'Employees working together at an outdoor activity' }
```

Use the same pattern for hero and story. The hero supports a video URL and image poster.
The typographic wordmark is an approximation; use site.logo.src for the approved logo.
Client logos are intentionally generic slots; edit clientLogos in src/content.mjs.

### Add a service or page

Add a service object with a unique slug to `services`; the build generates the route,
dropdown entry and service content using the shared template. Add other pages through getPages().
The static checker reports missing internal destinations and missing media.

## Integrations

Booking: set site.bookingUrl to your approved scheduler URL. The local scheduling page
then opens that calendar. It never invents availability or creates a booking itself.

Contact: with no endpoint, validation produces a mailto link containing the inquiry.
The visitor must open and send it from their email application. Nothing is stored or sent by the site.
The central site.email is copied to the form's data attribute for the email fallback.

Optional endpoint: set site.formEndpoint to an approved HTTPS JSON POST endpoint.
It receives firstName, lastName, email, phone, company, service and message strings.
Only return a 2xx response after a confirmed successful operation. Support CORS if hosted separately.
The UI has a 15-second timeout, disables duplicate clicks and preserves entries on failure.
This endpoint is a contract for future implementation, not an existing service.
Implement server validation, spam protection, rate limits, idempotency and an approved privacy notice before enabling it.
Update the disconnected-default assertion in scripts/check.mjs when intentionally enabling submission.

Blog articles, resource downloads, testimonials and graphic client logos are editable content placeholders.
The calculator estimates BMR/TDEE locally with metric/imperial and known-BMR modes. It stores/sends no input.
The live site's integrations are not connected. Secondary pages were visually inspected and now use distinct
image-led and editorial templates; full wording, original media and historical article/resource URLs remain open.

## Architecture and scaling

ES modules keep content, rendering, behavior and design tokens separate. HTML is pre-rendered,
so navigation and content work without JavaScript, except the disclosure menu and email preparation.
Static delivery supports CDN caching without an application server. No runtime packages to patch.
If content grows, replace the content-module exports with a build-time CMS adapter, preserve
the templates, and add a CI build. Authenticated portals and transactional systems should be separate
applications connected through documented APIs rather than embedded into this marketing site.

## Browser verification

scripts/browser-check.cjs uses Playwright. It can use the existing sibling workspace installation;
for a standalone copy, install Playwright as a development dependency and its Chromium browser.

Start the local server, then run:

```powershell
node scripts/browser-check.cjs
```

Evidence is written to artifacts/. No external requests or live form submissions are needed.

## Rollback

This is a new isolated folder. Stop its server to stop the preview. No existing site, account,
database or deployment was changed. Restore edited files through version control or retain
a prior dist artifact before a future deployment. No secrets are needed for local operation.
