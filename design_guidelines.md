# IgniraX Landing Page Design Guidelines

## Design Approach
**Reference-Based:** SpaceX-inspired rescue tech aesthetic - combining futuristic precision with urgent, mission-critical design language. Dark, cinematic UI with strategic orange/red accent glows representing fire/urgency balanced with calm dark teal shadows representing precision and control.

## Core Design Elements

### Typography
- **Headlines:** Bold, futuristic sans-serif (700-900 weight) for dramatic impact
- **Body:** Clean sans-serif (400-500 weight) for readability
- **News Headlines:** Medium weight (600) with high contrast for urgency
- **Tagline:** Extra bold (800) with letter-spacing for cinematic emphasis
- **Hierarchy:** Hero tagline (4xl-6xl) → Section headers (3xl-4xl) → Body (lg-xl)

### Layout System
- **Spacing Units:** Tailwind units of 4, 8, 12, 16, 24 for consistent rhythm
- **Section Padding:** py-24 desktop, py-16 mobile for breathing room
- **Container:** max-w-7xl for content sections, full-width for hero
- **Grid:** 3-column for technology features, 2-column for impact metrics

### Color Palette (Descriptive)
- **Foundation:** Deep dark backgrounds with subtle gradients
- **Accent Primary:** Fiery orange/red glows for urgency and CTAs
- **Accent Secondary:** Dark teal/cyan for precision, shadows, and tech elements
- **Text:** High-contrast white/light gray on dark backgrounds
- **Atmospheric:** Smoky gray overlays and subtle particle effects

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
- **Card Design:** Dark card backgrounds with teal glow borders, icon + title + description
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
- **Primary:** Orange/red glow with blur background (for hero images), solid dark background elsewhere
- **Secondary:** Teal outline with transparent fill
- **Sizing:** px-8 py-4 for prominence

### Cards
- **Background:** Dark panels with subtle gradients
- **Borders:** 1px teal glow or orange accent
- **Padding:** p-8 for breathing room
- **Hover:** Subtle lift with increased glow intensity

### Typography Treatment
- **Glow Effect:** Text-shadow with orange/teal on key headlines
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