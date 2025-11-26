# MyAI3 - AI Chatbot Assistant

## Project Overview

MyAI3 is a customizable AI chatbot assistant built with Next.js 16, featuring:
- AI-powered chat using OpenAI's GPT models
- Web search capabilities via Exa API
- Vector database integration with Pinecone
- Content moderation for safe interactions
- Real-time streaming responses
- Citation support for sources

## Tech Stack

- **Framework**: Next.js 16.0.0 with React 19.2.0
- **Language**: TypeScript
- **AI SDK**: Vercel AI SDK with multiple provider support
- **Styling**: Tailwind CSS v4 with Radix UI components
- **APIs**: OpenAI, Exa (web search), Pinecone (vector database)

## Replit Environment Setup

This project has been configured to run in the Replit environment:

### Development Server
- **Host**: 0.0.0.0 (required for Replit webview)
- **Port**: 5000 (configured for Replit's proxy)
- **Command**: `npm run dev`

### Configuration Changes Made
1. **package.json**: Updated dev script to bind to `0.0.0.0:5000`
2. **next.config.ts**: Added experimental serverActions configuration with wildcard allowedOrigins
3. **lib/pinecone.ts**: Made Pinecone optional to prevent errors when API key is not configured

### Known Development Warnings
- Cross-origin warnings in development are expected when running in Replit's iframe webview
- WebSocket HMR connection warnings are normal and don't affect functionality
- The application works correctly despite these development-only warnings

## Environment Variables

### Required
- `OPENAI_API_KEY` - OpenAI API key for AI model and content moderation (REQUIRED)

### Optional
- `EXA_API_KEY` - Exa API key for web search functionality
- `PINECONE_API_KEY` - Pinecone API key for vector database search
- `FIREWORKS_API_KEY` - Fireworks API key (if using Fireworks models)

**Note**: Only `OPENAI_API_KEY` is required to run the basic chat functionality. The application will gracefully handle missing optional API keys.

## Project Structure

```
myAI3/
├── app/
│   ├── api/chat/              # Chat API endpoint and tools
│   │   ├── route.ts           # Main chat handler
│   │   └── tools/             # AI tools (web search, vector search)
│   ├── page.tsx               # Main chat UI
│   ├── layout.tsx             # Root layout
│   └── terms/                 # Terms of Use page
├── components/
│   ├── ai-elements/           # AI-specific UI components
│   ├── messages/              # Message display components
│   └── ui/                    # Reusable UI components (Radix)
├── lib/
│   ├── moderation.ts          # OpenAI content moderation
│   ├── pinecone.ts            # Pinecone vector database
│   └── sources.ts             # Citation handling
├── config.ts                  # Main configuration file
├── prompts.ts                 # AI system prompts and behavior
└── package.json               # Dependencies and scripts
```

## Key Configuration Files

### config.ts
Main configuration file containing:
- AI model selection
- AI name and owner name
- Welcome messages
- Moderation messages
- Pinecone settings

### prompts.ts
AI behavior configuration including:
- System prompts
- Tone and style guidelines
- Tool calling instructions
- Citation rules

## Customization

Users can easily customize the AI assistant by editing two main files:

1. **config.ts** - Change AI name, owner, welcome message, model settings
2. **prompts.ts** - Modify AI behavior, tone, and response style

See README.md for detailed customization instructions.

## Deployment

The project is configured for deployment on Replit with:
- **Deployment Type**: Autoscale (suitable for stateless web applications)
- **Build Command**: `npm run build`
- **Run Command**: `npm start` (binds to 0.0.0.0:5000)

### Environment Variables for Production
Make sure to set the required environment variables in the Replit Secrets tab before deploying.

## Recent Changes (November 26, 2025)

1. Configured Next.js to run on 0.0.0.0:5000 for Replit compatibility
2. Updated next.config.ts with allowedOrigins configuration
3. Made Pinecone integration optional to prevent startup errors
4. Set up deployment configuration for Replit autoscale deployment

## Development Workflow

1. **Start development server**: The workflow "Start application" runs `npm run dev`
2. **View the app**: Use the Replit webview to see the running application
3. **Make changes**: Edit config.ts or prompts.ts to customize the AI
4. **Set API keys**: Add required secrets in the Replit Secrets tab
5. **Deploy**: Click the Deploy button in Replit to publish to production

## User Preferences

- No specific user preferences recorded yet
- Project structure follows Next.js conventions
- Uses modern React 19 with Server Components
