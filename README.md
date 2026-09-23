# Tarek Elariny — Portfolio

Standalone Vite portfolio with no Claude dependency.

## Run locally
Install Node.js 18+.

```bash
npm install
npm run dev
```

## Add your assets
CV: `public/assets/docs/Tarek-Elariny-CV.pdf`
POLLUXA video: `public/assets/video/polluxa-demo.mp4`

Screenshots go into:
- `public/assets/images/polluxa/`
- `public/assets/images/bun-rush/`
- `public/assets/images/amazon/`
- `public/assets/images/superstore/`
- `public/assets/images/netflix/`

The site already contains polished visual slots, so it is usable before assets are added.

## Production
```bash
npm run build
npm run preview
```
Deploy `dist/` to Vercel or Netlify. For Vercel, use build command `npm run build` and output directory `dist`.
