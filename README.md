# Yajath's Personal Portfolio

A modern, responsive personal portfolio website built with Next.js 16, React 19, and Tailwind CSS.

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org) | 16 | React framework (App Router) |
| [React](https://react.dev) | 19 | UI library |
| [TypeScript](https://www.typescriptlang.org) | 5 | Type safety |
| [Tailwind CSS](https://tailwindcss.com) | 4 | Utility-first styling |
| [Lucide React](https://lucide.dev) | latest | Icon library |

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles, CSS variables, and animations
│   ├── layout.tsx       # Root layout with dark mode bootstrap
│   └── page.tsx         # Home page (Hero + About sections)
└── components/
    ├── DarkMode.tsx     # Dark mode context, provider, and toggle button
    └── Navbar.tsx       # Top navigation bar
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) 18.18 or later
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/yajathb/personal-portfolio.git
cd personal-portfolio

# Install dependencies
npm install
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the site. The page hot-reloads as you make edits.

### Other Commands

```bash
npm run build   # Create a production build
npm run start   # Start the production server
npm run lint    # Run ESLint
```

## Deployment

This project is optimized for deployment on [Vercel](https://vercel.com). Simply connect your GitHub repository to Vercel and it will automatically build and deploy on every push to `main`.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yajathb/personal-portfolio)

For other platforms, run `npm run build` to generate a production build in the `.next` directory.
