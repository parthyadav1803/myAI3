# Changelog

All notable changes to the Delivera project will be documented in this file.

## [2.1.0] - 2024-11-26

### Added

#### Advanced Intelligence Suite v2.0

##### Backend: System Prompt Engineering
- **MODULE 1: Courier Negotiation Engine**
  - Trigger: User mentions "negotiate," "lower rates," "compare prices," or complains about high costs
  - Generates data-backed negotiation scripts with alternative partner comparisons
  - Calculates Rating_Delta and Cost_Savings metrics
  
- **MODULE 2: RTO Shield (Predictive Risk Scoring)**
  - Trigger: User proposes a specific shipment scenario
  - Calculates risk probability with base 10% + risk accumulation factors
  - Risk factors: Weather (+35%), Fragile/Perishable (+25%), Truck efficiency (+20%), Route history (+15%)
  - Outputs risk percentage, root cause, and mitigation recommendations
  
- **MODULE 3: Green Logistics Calculator**
  - Trigger: User mentions "Green," "Eco," "Carbon," or "Sustainability"
  - Calculates CO2 savings comparing Diesel Truck (105g/km) vs EV Van (0g/km)
  - Appends hidden rendering tag for frontend Green Badge display

##### Frontend: UI Components
- **GreenBadge Component** (`components/ui/green-badge.tsx`)
  - Visual certificate for sustainability achievements
  - Green gradient design with Leaf icon
  - Displays calculated carbon savings in kg
  - "Certified by Delivera Intelligence" footer
  
- **Chat Message Parsing Logic**
  - Regex-based parsing for `[RENDER_GREEN_BADGE: SAVED_KG=X.XX]` tags
  - Automatic tag removal from displayed text
  - Dynamic rendering of GreenBadge below message content

##### Landing Page Updates
- **Advanced Intelligence Suite section** with 3 Pro feature cards:
  1. Smart Negotiation Engine (Blue theme, Handshake icon)
  2. RTO Risk Shield (Orange theme, ShieldAlert icon)
  3. Sustainability Intelligence (Green theme, Leaf icon)

#### New Files Created
- `components/ui/green-badge.tsx` - Sustainability badge component

#### Modified Files
- `prompts.ts` - Added ADVANCED_INTELLIGENCE_PROMPT with 3 modules
- `components/messages/assistant-message.tsx` - Added Green Badge parsing and rendering
- `app/page.tsx` - Added Pro Features section

---

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
