# Replacing the temporary media

Copy your approved images into `public/media/`, then edit `src/content.mjs`. Run `npm run build` to refresh the local preview. Keep names and paths case-sensitive for future hosting. No package installation is required.

| Location | Setting in content.mjs | Suggested source dimensions |
| --- | --- | --- |
| Main hero | `site.hero.src` | 1920 × 1080 or larger |
| Hero video | `site.hero.video`, with `site.hero.src` as its poster | 1920 × 1080 MP4 |
| Header logo | `site.logo.src` | Transparent SVG or PNG; roughly 100 × 75 |
| Employee well-being / story | `site.story.src` | 1200 × 900 |
| Each service image and service hero | `services[].media.src` | 1200 × 900 or larger |
| About / Resources / Testimonials hero | `pageMedia.about.src`, `pageMedia.resources.src`, `pageMedia.testimonials.src` | 1920 × 1080 |
| Pricing catalog cover | `site.catalog.src` | 900 × 900 |
| Company logo strip | `clientLogos[].src` | Transparent SVG or PNG; roughly 140 × 65 |
| Media logo strip | `mediaLogos[].src` | Transparent SVG or PNG; roughly 140 × 65 |
| Client portraits | `testimonials[].src` | 300 × 300 |
| Feature videos | `site.videos['Exact video section heading']` | Local MP4; 16:9 |

Example:

```js
hero: { src: '/media/holifit-hero.webp', video: '', alt: 'Your accurate image description' },
```

Each service has its own temporary SVG, named after its route. You can replace a file in place without changing templates, or change the URL to your new image. Paths begin with `/media/`, not `public/media/`. Add accurate alternative text when replacing images. Keep hero text clear by choosing photographs that work with the dark overlay. Video sections use native playback controls; the main background video has a pause control.

Company and media names currently stand in for their graphic logos. Portraits, quotations, legal pages, downloads, journal articles and video sections are editable placeholders. The map is a schematic placeholder in `src/brand.mjs`; replace it with an approved static map or an intentionally configured embed. The SVG wordmark approximates the placement of the original but is not the approved brand asset.

No original photos or videos were downloaded into the public media directory. Reference screenshots stay in the ignored `artifacts/reference/` directory and are not shipped in the site build.
