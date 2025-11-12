# IgniraX Landing Page Design Guidelines

## Design Approach
**Reference-Based:** Modern, clean tech aesthetic with SpaceX-inspired precision. Light, airy UI with greyish backgrounds and minimal black touches, featuring vibrant orange/red accents representing fire/urgency balanced with bright teal/cyan highlighting precision and technology.

## Core Design Elements

### Typography
- **Headlines:** Bold, futuristic sans-serif (700-900 weight) for impact
- **Body:** Clean sans-serif (400-500 weight) for readability
- **News Headlines:** Medium weight (600) with strong contrast
- **Tagline:** Extra bold (800) with letter-spacing for emphasis
- **Hierarchy:** Hero tagline (4xl-6xl) → Section headers (3xl-4xl) → Body (lg-xl)
- **Text Colors:** Dark charcoal/black on light backgrounds for strong readability

### Layout System
- **Spacing Units:** Tailwind units of 4, 8, 12, 16, 24 for consistent rhythm
- **Section Padding:** py-24 desktop, py-16 mobile for breathing room
- **Container:** max-w-7xl for content sections, full-width for hero
- **Grid:** 3-column for technology features, 2-column for impact metrics

### Color Palette (Descriptive)
- **Foundation:** Light greyish backgrounds (white to soft grey spectrum) with subtle gradients
- **Accent Primary:** Vibrant orange/red for urgency, CTAs, and fire elements
- **Accent Secondary:** Bright teal/cyan for precision, technology, and modern accents
- **Text:** Dark charcoal/black primary text, medium grey secondary text
- **Atmospheric:** Soft grey overlays and subtle light effects

## Hero Section - Dynamic News Animation

### News Headlines Component
- **Images:** Real fire incident photos (4-6 headlines total)
- **Layout:** Each headline = image thumbnail (120x80px) + bold text snippet
- **Animation:** Headlines drop from different angles with rotation (15-45 degrees)
- **Landing Positions:** Staggered across viewport, varying vertical placement
- **Timing:** Display all headlines for 3-4 seconds, then fade out
- **Editability:** Managed via JavaScript array with image URLs and text strings

### Main Hero After Fade
- **Tagline:** "When seconds matter, IgniraX responds" - center-aligned, massive scale
- **Sub-message:** Brief one-liner about AI-powered autonomous rescue
- **CTA:** Primary "See Technology" + Secondary "Contact Us" buttons with blurred backgrounds
- **Background:** Subtle 3D smoke effect or faint drone silhouette using atmospheric particles
- **Height:** 90vh to create cinematic immersion

## Page Sections

### 1. About IgniraX (py-24)
- **Quote-driven:** Large pull quote "We believe protection should fly faster than danger"
- **Layout:** Single column centered with max-w-4xl
- **Supporting Text:** Mission statement with emotional resonance
- **Visual:** Subtle drone illustration or abstract tech pattern background

### 2. Technology Showcase (py-24)
- **Grid:** 3-column feature cards (stacks to 1 column mobile)
- **Features:** AI Detection, Autonomous Navigation, Chemical Extinguishing
- **Card Design:** Light card backgrounds with subtle borders, icon + title + description
- **Icons:** Tech-focused iconography (brain/AI, navigation arrows, droplet/chemical)
- **Visual Enhancement:** Animated SVG or Lottie drone loop in background

### 3. Impact Metrics (py-24)
- **Layout:** 2-3 column stat display
- **Metrics:** Lives protected, Response time improvement, Coverage area
- **Style:** Large numbers (5xl) with orange glow, smaller descriptive text below
- **Background:** Gradient panel with subtle particle animation

### 4. Vision / Brand Motto (py-32)
- **Centerpiece:** "Born from Fire. Built to Save." in dramatic typography
- **Treatment:** Full-width cinematic section with dark-to-orange gradient
- **Supporting Elements:** Brand values in minimalist layout
- **Visual:** Abstract flame-to-drone transformation graphic

### 5. Contact / Join Us (py-24)
- **Layout:** 2-column split (form + info)
- **Left:** Contact form with futuristic input styling (glowing borders on focus)
- **Right:** Partnership opportunities, contact details, mission call-out
- **CTA:** "Partner with IgniraX to redefine rescue" as headline
- **Background:** Subtle teal glow accent

## Component Library

### Buttons
- **Primary:** Vibrant orange/red with white text for maximum impact
- **Secondary:** Teal outline with transparent or light fill
- **Sizing:** px-8 py-4 for prominence

### Cards
- **Background:** Light grey panels (slightly darker than page background)
- **Borders:** Subtle grey borders
- **Padding:** p-8 for breathing room
- **Hover:** Subtle elevation with shadow

### Typography Treatment
- **Emphasis:** Bold weights and color for key headlines
- **Letter Spacing:** Increased tracking on taglines for impact

## Images

### Hero Section
- **News Images:** 4-6 real fire incident photos (120x80px thumbnails) - dramatic, high-contrast
- **Background:** Atmospheric smoke texture or abstract fire particles (subtle, not distracting)

### Technology Section
- **Optional:** Drone product shots or 3D renders showcasing technology

### Impact Section  
- **Optional:** Before/after rescue scenarios or mission photos

**No traditional large hero background image** - hero is animation-driven with atmospheric effects

## Animations & Motion
- **GSAP-powered:** Headline rotations (15-45 deg), smooth fade transitions, stagger effects
- **Timing:** 3-4 second news display, 1-2 second fade transitions
- **Scroll:** Subtle parallax on atmospheric elements
- **Interactions:** Glow intensity on hover, smooth card elevations
- **Performance:** Optimized for mobile with reduced motion option

## Responsive Strategy
- **Desktop (1024px+):** Full multi-column layouts, complex animations
- **Tablet (768-1023px):** 2-column max, simplified animations
- **Mobile (<768px):** Single column, essential animations only, stacked news headlines