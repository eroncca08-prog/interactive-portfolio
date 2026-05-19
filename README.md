# Eron Carlo Caina — AI Portfolio

Interactive AI-powered portfolio built with Next.js, Vercel AI SDK, and Framer Motion.

## Features

- Animated SVG avatar with idle breathing, blinking, thinking & talking states
- Streaming AI chat powered by Groq (Llama-3.1-70B) or OpenAI (GPT-4o-mini)
- Rainbow liquid gradient that follows the mouse, fades on inactivity
- Liquid splash ring effect on click
- Dark / light mode toggle
- Inline project cards triggered when visitor asks about work
- Suggestion chips to guide the conversation

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Copy the example file and add your API key:

```bash
cp .env.example .env.local
```

Edit `.env.local` — choose **one** provider:

```
# Recommended: Groq (free, fast)
GROQ_API_KEY=your_groq_api_key_here

# OR: OpenAI
# OPENAI_API_KEY=your_openai_api_key_here
```

Get a Groq key (free): https://console.groq.com  
Get an OpenAI key: https://platform.openai.com

### 3. Run locally

```bash
npm run dev
```

Open http://localhost:3000

## Deploy to Vercel

1. Push this folder to a GitHub repository
2. Import the repo in Vercel (vercel.com/new)
3. Add your `GROQ_API_KEY` (or `OPENAI_API_KEY`) in Vercel → Settings → Environment Variables
4. Deploy

The `vercel.json` is pre-configured with the `sin1` region (Singapore — closest to PH).

## Adding Real Screenshots

Replace the picsum placeholder images in [components/ProjectCards.tsx](components/ProjectCards.tsx):

```tsx
// Change these lines:
image: 'https://picsum.photos/seed/propertyads2024/800/450',
// To your actual image paths:
image: '/screenshots/project-1.png',
```

Place screenshots in the `public/screenshots/` folder.

## Adding Your Firefly Avatar Video

Once you have the Adobe Firefly rotating video:

1. Place it in `public/avatar.mp4`
2. Replace the `<Avatar>` SVG component usage in `app/page.tsx` with:

```tsx
<video
  src="/avatar.mp4"
  autoPlay
  loop
  muted
  playsInline
  className="w-44 h-44 rounded-full object-cover"
/>
```

## Customization

- **System prompt / resume data** → [lib/prompt.ts](lib/prompt.ts)
- **Project cards** → [components/ProjectCards.tsx](components/ProjectCards.tsx)
- **Suggestion chips** → `SUGGESTIONS` array in [app/page.tsx](app/page.tsx)
- **Colors / theme** → CSS variables in [app/globals.css](app/globals.css)
- **Avatar character** → [components/Avatar.tsx](components/Avatar.tsx)

## Tech Stack

- **Next.js 15** (App Router, Edge Runtime)
- **Vercel AI SDK v4** — streaming chat
- **Framer Motion v11** — animations
- **Tailwind CSS v3** — styling
- **Lucide React** — icons
- **react-markdown + remark-gfm** — markdown in chat bubbles
