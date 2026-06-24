# Y2K Client Setup Checklist

Use this order for fast client delivery.

## 1. Update `config.js`

Replace:
- `name`
- `email`
- `taglineEn` / `taglineTh`
- `footerDescEn` / `footerDescTh`
- `aboutBioEn` / `aboutBioTh`
- `manifestoEn` / `manifestoTh`
- `measurements`
- `compCardUrl`
- `compCardDownloadUrl`
- `showImageCaptions`
- `imageCaptions`
- `instagram`
- `line`
- `whatsapp`

Leave optional links blank (`""`) to hide the related booking button.

## 2. Replace Images With The Same Filenames

Fastest path: keep the existing filenames and replace the image files directly.

- Hero: `image/hero/hero.webp`
- About portrait: `image/about/01.webp`
- Highlights: `image/highlights/01.webp` through `04.webp`
- Portfolio: `image/portfolio/01.webp` through `20.webp`
- Digitals: `image/digitals/01.webp` through `04.webp`
- Brand logos: `image/brand_icons/*.webp`
- Comp card preview: `image/Folio-Lab-Compcard Y2K.webp`
- Comp card download: `image/Folio-Lab-Compcard Y2K.png`

If portfolio image dimensions change a lot, update the `width` and `height` attributes in `index.html` for those portfolio images to keep mobile anchor jumps stable.

## 3. Booking Calendar

In `booking.html`, replace the `booking-embed-placeholder` block with the client's Cal.com embed.

## 4. SEO Metadata

Before final delivery, update the page metadata in:
- `index.html`
- `about.html`
- `booking.html`

Search for:
- `your-client-domain.com`
- `Client Name`
- default descriptions

## 5. Cache Version

After edits, bump `CACHE_NAME` in `sw.js` so deployed phones receive the newest files.
