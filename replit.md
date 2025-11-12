# IgniraX - Firefighting Drone Technology Landing Page

## Overview

IgniraX is a landing page application for a firefighting drone technology startup. The platform showcases AI-powered autonomous drones designed to protect people from fire using eco-safe chemical extinguishing systems. The application features a dramatic, cinematic user experience inspired by SpaceX aesthetics, with dynamic news headline animations and comprehensive information about the technology, impact, and vision of the company.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React with TypeScript, using Vite as the build tool and development server.

**Routing**: Client-side routing implemented with Wouter, a lightweight React router. The application currently has a single-page architecture with the Home page as the primary view.

**Component Structure**: The application follows a component-based architecture with:
- **Page Components**: Single Home page that orchestrates all section components
- **Section Components**: Modular sections (Hero, About, Technology, Impact, Vision, Contact) that can be independently maintained
- **UI Components**: shadcn/ui component library providing consistent, accessible UI primitives built on Radix UI

**State Management**: 
- React hooks for local component state
- TanStack Query (React Query) for server state management and data fetching
- Form state managed via React Hook Form with Zod schema validation

**Styling**: 
- Tailwind CSS for utility-first styling
- Custom CSS variables for theming (dark theme with orange/red and teal/cyan accents)
- Design system inspired by SpaceX with futuristic, mission-critical aesthetics
- Responsive design with mobile-first approach

**Animation**: GSAP (GreenSock Animation Platform) for professional-grade animations, particularly the dynamic news headline sequence in the hero section.

**Type Safety**: Full TypeScript implementation with shared schemas between client and server using Zod for runtime validation.

### Backend Architecture

**Server Framework**: Express.js running on Node.js with TypeScript.

**API Design**: RESTful API structure with routes prefixed with `/api`. Currently minimal backend implementation with placeholder route registration system.

**Middleware**: 
- JSON body parsing with raw body preservation for webhook support
- URL-encoded form data parsing
- Request/response logging middleware for API routes
- Vite middleware integration for development hot module replacement

**Storage Layer**: Abstract storage interface (`IStorage`) with in-memory implementation (`MemStorage`) for user management. The interface supports CRUD operations and is designed to be swapped with a database-backed implementation.

**Development Server**: Custom Vite integration that provides:
- Hot module replacement during development
- Template rendering for SSR-ready architecture
- Middleware mode for seamless Express/Vite integration

### Data Storage Solutions

**Current State**: In-memory storage using JavaScript Map structures for user data.

**Database Readiness**: 
- Drizzle ORM configured for PostgreSQL dialect
- Schema definitions in shared directory for type safety
- Migration system configured via Drizzle Kit
- Neon Database serverless driver integration prepared
- Connection pooling support via `connect-pg-simple`

**Schema Design**: 
- User schema with basic fields (id, username)
- News headline schema for hero section content
- Contact form schema with validation rules
- Zod schemas provide both TypeScript types and runtime validation

### External Dependencies

**UI Component Library**: 
- shadcn/ui (Radix UI primitives with custom styling)
- Extensive component library including forms, dialogs, toasts, navigation, etc.

**Form Management**:
- React Hook Form for form state and validation
- @hookform/resolvers for Zod schema integration

**Animation & Interaction**:
- GSAP for timeline-based animations
- Embla Carousel for potential carousel implementations
- Framer Motion implicitly available through dependencies

**Utility Libraries**:
- clsx and tailwind-merge for className composition
- date-fns for date manipulation
- class-variance-authority for variant-based component styling

**Development Tools**:
- Vite plugins for Replit integration (cartographer, dev banner, runtime error overlay)
- TypeScript with strict type checking
- PostCSS with Tailwind and Autoprefixer

**Fonts**: Google Fonts integration with Space Grotesk (primary), Inter (fallback), and Space Mono (monospace) for futuristic typography.

**Build Tools**: 
- Vite for frontend bundling and development
- esbuild for server-side production builds
- TypeScript compiler for type checking