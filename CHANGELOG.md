# Changelog

All notable changes to the Delivera project will be documented in this file.

## [2.0.0] - 2024-11-26

### Added

#### Multi-Page SaaS Architecture
- **Landing Page (/)**: New hero section with feature highlights, trust metrics, and call-to-action buttons
- **Features Page (/features)**: Detailed breakdown of 4 core capabilities:
  - Smart Partner Selection - AI-powered logistics partner recommendations based on region and shipment type
  - Weather Guard Technology - Fog, rain, and heat wave prediction for proactive delay management
  - Expansion Modeling - Market viability analysis for new region launches
  - Cost Optimization - RTO reduction strategies and COD-to-prepaid conversion
- **Pricing Page (/pricing)**: Two-tier pricing structure:
  - Free Plan (₹0/mo) - For startups with manual queries and basic features
  - Pro Plan (₹999/mo) - For scaling brands with unlimited queries, API access, and priority support
  - Feature comparison table with checkmarks/crosses
  - FAQ section with 5 common questions
- **Testimonials Page (/testimonials)**: Customer success stories grid featuring:
  - 6 distinct testimonials from real industry roles (Ops Head, Founder, Logistics Manager, etc.)
  - Industries covered: Fashion, Electronics, Perishables, Handicrafts
  - Trust metrics section (500+ SMBs, 30% cost reduction, etc.)
- **Demo Page (/demo)**: Relocated chat interface with improved branding

#### Navigation & Layout
- **Navbar Component**: Responsive navigation with links to Features, Pricing, Testimonials, and Demo
- **Footer Component**: Site-wide footer with product links and company information
- Mobile-responsive hamburger menu for smaller screens

#### Branding
- Consistent color scheme applied across all pages:
  - Navy Blue (#1e3a8a) - Primary brand color
  - Saffron Orange (#f97316) - Accent color
- Logo styling with "D" lettermark in navigation

#### AI Chat Improvements
- Updated system prompts for logistics-focused conversations
- Partner recommendation logic with rate calculator links
- Indian logistics context awareness (monsoons, festivals, regional differences)
- Improved welcome message with capability highlights

### Changed

#### Configuration
- Updated `AI_NAME` from "MyAI3" to "Delivera"
- Updated `OWNER_NAME` to "Parth and Hriday"
- Enhanced `WELCOME_MESSAGE` with feature list
- Updated page metadata with SEO-friendly title and description

#### Prompts
- Rewrote `IDENTITY_PROMPT` for logistics specialization
- Added `PARTNER_RECOMMENDATION_PROMPT` for consistent partner suggestions
- Added `LOGISTICS_CONTEXT_PROMPT` with Indian market specifics
- Updated `TOOL_CALLING_PROMPT` to search for partner rate calculators
- Modified `TONE_STYLE_PROMPT` for business-focused communication

### Technical Details

#### New Files Created
- `components/layout/navbar.tsx` - Responsive navigation component
- `components/layout/footer.tsx` - Site-wide footer component
- `app/page.tsx` - Landing page (refactored from chat)
- `app/features/page.tsx` - Features page
- `app/pricing/page.tsx` - Pricing page
- `app/testimonials/page.tsx` - Testimonials page
- `app/demo/page.tsx` - Chat demo page

#### Modified Files
- `app/layout.tsx` - Added Toaster, updated metadata
- `config.ts` - Updated branding and welcome message
- `prompts.ts` - Complete rewrite for logistics focus

### Migration Notes
- Chat interface moved from `/` to `/demo`
- All internal links updated to use new route structure
- Existing chat history preserved in localStorage

---

## [1.0.0] - Initial Release

### Added
- AI chatbot with OpenAI integration
- Web search capability via Exa API
- Vector database search via Pinecone
- Content moderation system
- Basic chat interface with message history
