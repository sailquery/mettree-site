# mettree-site

Static marketing site for `mettree.com`, intended for Cloudflare Pages.

## Structure

- `index.html` - main landing page
- `legal/privacy.html` - privacy policy
- `legal/terms.html` - terms of service
- `support/index.html` - support page
- `support/troubleshooting.html` - troubleshooting page
- `styles.css` - shared site styling
- `analytics.js` - Cloudflare Web Analytics placeholder

## Deploy to Cloudflare Pages

1. Create a new Cloudflare Pages project
2. Point it at this repo
3. Set the production branch
4. Use these build settings:

   - Framework preset: `None`
   - Build command: leave blank
   - Build output directory: `/`

Because this is a static site, Cloudflare can publish the repo contents directly.

## Analytics

`analytics.js` includes a placeholder for Cloudflare Web Analytics. Add your token there when ready.

## Content notes

- Replace placeholder emails like `hello@mettree.com`
- Add the real App Store link when available
- Review legal pages with counsel before launch
- Replace placeholder testimonial with a real approved quote
