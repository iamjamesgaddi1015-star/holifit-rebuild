# Shared UI behavior

Source: user request to reproduce holifit.ph, with replacement-ready image placeholders. Existing dependency-free ES modules and static routes are retained.

| Capability | Canonical owner | Behavior |
| --- | --- | --- |
| Navigation | `src/brand.mjs`, `public/app.js` | Shared header, service menu, resources disclosure; keyboard, Escape, outside dismissal, mobile toggle |
| Footer and contact section | `src/brand.mjs` | Shared across routes; telephone/email links; local scheduler destination; schematic map |
| Forms | `src/components.mjs`, `public/app.js` | Inline validation, first-error focus, preserved values on failure; no live submission configured |
| Selects | Native HTML select | Platform keyboard, popup and locale accepted; calculator units/mode/sex and contact-service choices |
| Feedback | Inline `role=status` regions | No transient toast hides the only error or result |
| Media | `src/content.mjs`, `src/components.mjs` | Local configurable URLs, reserved ratios, alternative text; native video controls; reduced-motion background-video pause |
| Scrollbars | `public/styles.css` | Shared visible scrollbar tokens, forced-colors fallback; logo strip is independently scrollable with arrow buttons |
| Calculator | `public/app.js` | Local adult energy estimate; metric/imperial and known-BMR modes; no storage/network calls |

No analytics, real booking, marketing subscription, uploaded private data, or production service endpoint is enabled. Catalog forms validate but explain that delivery is disconnected. Contact forms prepare an email link without sending it. Optional configured endpoints retain the existing timeout and duplicate-submit guard.

Touch input uses native scrolling, manipulation tap behavior and 16px input text where the pointer is coarse. Keyboard focus stays visible. Emulated mobile checks do not constitute physical iPhone/Android testing. Typography and layout use the reference site; original low-contrast nav-on-white behavior is corrected for readable navigation.
