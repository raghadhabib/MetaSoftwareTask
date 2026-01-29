# Real-Time Assets Dashboard

Small Next.js app demonstrating a responsive, client-side real-time assets dashboard with debounced search, filtering and sorting.

## Features

- Real-time mock updates: asset prices update every 3 seconds to simulate live data.
- Client-side filtering: filter by asset type (Stock, Crypto, ETF, or All).
- Client-side sorting: sort by `price` or `change`.
- Debounced search: search by name or symbol using a `useDebounce` hook to avoid work on every keystroke.
- Built with Next.js `app` router and Tailwind CSS utilities (no UI component library).

## Run locally

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open http://localhost:3000


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
