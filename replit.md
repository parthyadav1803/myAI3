# Delivera - AI Logistics Intelligence Platform

## Project Overview

Delivera is an AI-powered logistics intelligence platform for Indian MSMEs built with Next.js 16, featuring:
- Smart logistics partner recommendations (Delhivery, Blue Dart, DTDC, etc.)
- Weather-related delivery predictions
- RTO risk assessment and reduction
- Cost optimization and negotiation support
- Green logistics with carbon savings tracking
- Real-time streaming AI responses

## Tech Stack

- **Framework**: Next.js 16.0.0 with React 19.2.0
- **Language**: TypeScript
- **AI SDK**: Vercel AI SDK with OpenAI provider
- **Styling**: Tailwind CSS v4 with Radix UI components
- **APIs**: OpenAI, Exa (web search), Pinecone (vector database)

## Branding

- **Primary Color**: Navy Blue (#1e3a8a)
- **Accent Color**: Saffron Orange (#f97316)
- **Owners**: Parth and Hriday

## Replit Environment Setup

### Development Server
- **Host**: 0.0.0.0 (required for Replit webview)
- **Port**: 5000 (configured for Replit's proxy)
- **Command**: `npm run dev`

### Known Development Warnings
- Cross-origin warnings in development are expected when running in Replit's iframe webview
- WebSocket HMR connection warnings are normal and don't affect functionality

## Environment Variables

### Required
- `OPENAI_API_KEY` - OpenAI API key for AI model and content moderation (REQUIRED)

### Optional
- `EXA_API_KEY` - Exa API key for web search functionality
- `PINECONE_API_KEY` - Pinecone API key for vector database search

## Project Structure

```
delivera/
├── app/
│   ├── api/chat/              # Chat API endpoint and tools
│   │   ├── route.ts           # Main chat handler with SYSTEM_PROMPT
│   │   └── tools/             # AI tools (web search, vector search)
│   ├── page.tsx               # Landing page with hero + Pro features
│   ├── demo/page.tsx          # Chat demo interface
│   ├── features/page.tsx      # Features breakdown
│   ├── pricing/page.tsx       # Pricing tiers
│   ├── testimonials/page.tsx  # Customer stories
│   ├── contact/page.tsx       # Contact Us form
│   ├── login/page.tsx         # Login page
│   ├── signup/page.tsx        # Sign Up page
│   ├── terms/page.tsx         # Terms of Service
│   └── layout.tsx             # Root layout
├── components/
│   ├── ai-elements/           # AI-specific UI components
│   ├── layout/                # Navbar and Footer
│   ├── messages/              # Message display components
│   │   └── assistant-message.tsx  # Includes Green Badge parsing
│   └── ui/
│       └── green-badge.tsx    # Sustainability badge component
├── lib/
│   ├── moderation.ts          # OpenAI content moderation
│   ├── pinecone.ts            # Pinecone vector database
│   └── sources.ts             # Citation handling
├── config.ts                  # Main configuration (AI_NAME, OWNER_NAME)
├── prompts.ts                 # AI system prompts with Intelligence Modules
└── CHANGELOG.md               # Version history
```

## Advanced Intelligence Suite v2.0

### Module 1: Courier Negotiation Engine
- Triggered by: "negotiate", "lower rates", "compare prices", "high costs"
- Generates data-backed negotiation scripts
- Compares rating and cost against regional alternatives

### Module 2: RTO Shield (Risk Scoring)
- Triggered by: Shipment scenario descriptions
- Base probability: 10%
- Risk factors: Weather (+35%), Fragile/Perishable (+25%), Truck inefficiency (+20%), Route history (+15%)
- Provides mitigation recommendations

### Module 3: Green Logistics Calculator
- Triggered by: "Green", "Eco", "Carbon", "Sustainability"
- Compares Diesel Truck (105g/km) vs EV Van (0g/km)
- Renders visual GreenBadge component with carbon savings

### Module 4: International Handling
- Triggered by: Shipping queries to destinations outside India (USA, UK, Dubai, etc.)
- Skips internal India-only database
- Displays mandatory disclaimer about domestic optimization
- Uses web search for international rates from DHL, FedEx, Aramex, etc.

## Mini Chat Popup

A floating chatbot popup appears on all pages (except /demo):
- **Auto-opens**: 1.5 seconds after page load as a nudge to try Delivera
- **Minimize**: Collapses to a compact bar showing "Delivera" with expand/close buttons
- **Expand**: Opens full-screen chat at /demo page (continues same conversation)
- **Close**: Hides popup, shows chat bubble icon to reopen
- **Full functionality**: Same AI capabilities as the main demo chatbot
- **Shared storage**: Uses 'chat-messages' localStorage key (same as demo page)

Components:
- `components/chat-popup.tsx` - Main popup component
- `components/chat-popup-wrapper.tsx` - Client wrapper for layout integration

## Key Files for Customization

### config.ts
- AI_NAME: "Delivera"
- OWNER_NAME: "Parth and Hriday"
- Welcome messages and model settings

### prompts.ts
- IDENTITY_PROMPT: Logistics specialist persona
- PARTNER_RECOMMENDATION_PROMPT: Regional expertise guidelines
- ADVANCED_INTELLIGENCE_PROMPT: 3 intelligence modules
- LOGISTICS_CONTEXT_PROMPT: Indian market specifics

## Deployment

- **Deployment Type**: Autoscale
- **Build Command**: `npm run build`
- **Run Command**: `npm start`

## Recent Changes (November 27, 2025)

### Version 2.3.0
- Added Contact Us page at /contact with form fields (Name, Email, Contact Number, Requirements)
- Added Login page at /login with Email/Password and sign-up link
- Added Sign Up page at /signup with Full Name, Email, Password, Confirm Password
- Replaced "Try Demo" button with "Login / Sign Up" in navbar
- Added "Contact Us" link to navbar and footer navigation

### Version 2.2.0
- Added Mini Chat Popup on all pages (auto-opens after 1.5s)
- Popup has minimize, expand, and close functionality
- Added comprehensive Terms of Service page at /terms
- Added Module 4: International Handling for out-of-India shipping queries
- Updated footer link to "Terms & Disclaimer"

### Version 2.1.0 (November 26, 2025)
- Added Advanced Intelligence Suite with 3 modules
- Created GreenBadge component for sustainability
- Implemented chat message parsing for badge rendering
- Added Pro Features section to landing page

### Version 2.0.0
- Multi-page SaaS architecture
- Landing, Features, Pricing, Testimonials, Demo pages
- Shared Navbar and Footer components
- Delivera branding applied

## Development Workflow

1. **Start server**: Workflow "Start application" runs `npm run dev`
2. **View app**: Use Replit webview at the exposed URL
3. **Customize**: Edit config.ts or prompts.ts
4. **Set API keys**: Add secrets in Replit Secrets tab
5. **Deploy**: Click Deploy button to publish
