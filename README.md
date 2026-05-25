# Ananthula Kedari Store Website

Premium static Next.js storefront for Ananthula Kedari sarees. Built for GitHub Pages with direct WhatsApp buying.

## Run Locally

```bash
npm install
cp .env.local.example .env.local
npm run dev
```

Open `http://localhost:3000`.

## Configure Buying

Update `.env.local` with the shop WhatsApp number:

```bash
NEXT_PUBLIC_WHATSAPP_NUMBER=91XXXXXXXXXX
NEXT_PUBLIC_STORE_PHONE=XXXXXXXXXX
```

## GitHub Pages

This repo deploys with GitHub Actions from `.github/workflows/deploy.yml`.

The workflow builds a static export with:

```bash
NEXT_PUBLIC_BASE_PATH=/store-website npm run build
```

After pushing to `main`, enable GitHub Pages in the repository settings and choose `GitHub Actions` as the source.
