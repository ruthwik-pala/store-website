# StyleSquare (Next.js + MERN-ready)

## Run

1. Install dependencies
   npm install
2. Create env file
   cp .env.local.example .env.local
3. Update WhatsApp number in `.env.local`
4. Start app
   npm run dev

Open http://localhost:3000

## Notes

- Ordering is WhatsApp-first (no payment gateway).
- API route: `/api/products`
- If `MONGODB_URI` is set, products are served from MongoDB collection `products`.
- If MongoDB is not configured, seeded local products are served.
