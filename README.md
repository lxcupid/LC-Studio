# LC DIGITAL — Digital Product Studio

> We build ideas into digital experiences.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Fonts:** Geist Sans / Geist Mono (via `next/font/google`)
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm 9 or later

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
```

### Start the production server

```bash
npm start
```

### Lint

```bash
npm run lint
```

## Project Structure

```
src/
  app/
    layout.tsx        # Root layout — fonts, metadata, global styles
    page.tsx          # Homepage
    globals.css       # Tailwind + brand design tokens
  components/
    layout/           # Header, Footer, Nav
    sections/         # Page sections (Hero, Work, Services, etc.)
    ui/               # Reusable UI primitives (Button, Card, etc.)
  data/
    site.ts           # Site-wide config — name, nav, socials
    projects.ts       # Project entries
  lib/                # Utility functions

public/
  images/
    projects/         # Project thumbnails
  logo/               # Brand logo files
  icons/              # Favicon and app icons
```

## Brand Colors

| Token       | Hex       |
|-------------|-----------|
| Primary     | `#6D28D9` |
| Secondary   | `#7C3AED` |
| Dark        | `#171323` |
| Background  | `#F8F7FA` |
| Lavender    | `#C4B5FD` |
| Border      | `#E9E5EF` |

## Environment Variables

No environment variables are required for the foundation phase.  
Add a `.env.local` file at the project root when needed.

## Deployment

Deploy to [Vercel](https://vercel.com/) by connecting the repository.  
The project is pre-configured for zero-config Vercel deployment.
# LC-Studio
