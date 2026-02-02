# Website Analysis: https://www.dhai.dev/

## Overview
The site presents a clean, modern portfolio with a warm, minimal aesthetic. It uses a cream/off-white background (#faf9f6) with dark text, creating an elegant, readable experience. The design leverages Next.js with Tailwind CSS for styling, utilizing variable fonts for typography flexibility. The overall approach emphasizes content over chrome, with subtle interactions and a card-based layout system.

---

## Hero Section: Layout & Structure

### Layout Pattern
**Image-Text Paired Layout** (Left-Right Split on Desktop)

```
[Profile Image]  |  [Text Content]
                 |  - "Hi, I'm Daniel"
                 |  - "Electrical Engineering Student"
                 |  - [UBC + Formula UBC Logos]
                 |  - Location/Time info
                 |  - Social links
                 |  - Spotify widget
```

### Structural Implementation
- **Container**: Likely max-width constrained (estimate: 1200px-1400px)
- **Layout Method**: CSS Grid or Flexbox with gap spacing
- **Image Position**: Left column, likely 40-50% width
- **Content Position**: Right column, 50-60% width
- **Vertical Alignment**: Center or flex-start with controlled spacing

### Key Characteristics
- Card-based component architecture
- Expandable/interactive blocks ("tap blocks to see more")
- Nested content with accordion-style reveals
- White space focused, breathing room around elements

---

## Typography

### Font Families
**Primary Font Stack:**
- **DM Sans** (Variable Font)
  - Usage: Body text, UI elements, labels
  - Source: Google Fonts (likely)
  - Variable axes available for weight flexibility
  - Clean, geometric sans-serif for modern readability

**Secondary Font Stack:**
- **Playfair Display** (Variable Font)
  - Usage: Headings, emphasis elements
  - Source: Google Fonts (likely)
  - Serif font providing elegant contrast
  - Variable weight for typographic hierarchy

### Type Scale (Estimated based on standard practices)

**Main Heading ("Hi, I'm Daniel"):**
- Font: Playfair Display
- Size: 48px-64px (3rem-4rem)
- Weight: 600-700 (Semibold/Bold)
- Line Height: 1.1-1.2
- Letter Spacing: -0.02em to -0.01em (slight tightening)
- Color: Black or very dark gray (#111111 - #1f1f1f)

**Subheading ("Electrical Engineering Student"):**
- Font: DM Sans or Playfair Display (lighter weight)
- Size: 20px-28px (1.25rem-1.75rem)
- Weight: 400-500 (Regular/Medium)
- Line Height: 1.4-1.5
- Letter Spacing: 0 to 0.01em
- Color: Medium gray (#4a4a4a - #666666)

**Body Text:**
- Font: DM Sans
- Size: 16px-18px (1rem-1.125rem)
- Weight: 400 (Regular)
- Line Height: 1.6-1.7
- Letter Spacing: 0
- Color: Dark gray (#333333 - #444444)

**Caption/Small Text:**
- Font: DM Sans
- Size: 14px (0.875rem)
- Weight: 400-500
- Line Height: 1.5
- Color: Gray (#666666 - #999999)

### Font Loading Strategy
- Variable fonts loaded via CSS modules
- Next.js font optimization (automatic subsetting)
- Classes: `.dm_sans_variable`, `.playfair_display_variable`

---

## Color Palette

### Primary Colors

**Background:**
- Main: `#faf9f6` (Off-white/Cream)
  - Warm, soft alternative to pure white
  - Reduces eye strain, adds sophistication
  - RGB: rgb(250, 249, 246)

**Text Colors:**
- Primary Text: `#111111` - `#1f1f1f` (Near black)
- Secondary Text: `#4a4a4a` - `#666666` (Medium gray)
- Tertiary/Muted: `#999999` - `#aaaaaa` (Light gray)

### Accent Colors

**Interactive Elements:**
- Links/Social Icons: Blue tones (standard link blue or custom)
  - Likely: `#0066cc` - `#0077ff` range
  - Platform specific: LinkedIn blue, GitHub black, Instagram gradient, Spotify green

**Semantic Colors:**
- Success/Active: Green tones (for Spotify, active states)
- Interactive Highlights: Subtle blue or brand color

### Shadow/Overlay Values (Estimated)
- Card shadows: `rgba(0, 0, 0, 0.05)` - `rgba(0, 0, 0, 0.1)`
- Elevation system likely uses soft shadows for depth
- Image overlays: Minimal or none on profile photo

---

## Spacing System

### Base Unit Pattern
Likely using Tailwind's default spacing scale (0.25rem = 4px base unit):
- 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px

### Hero Section Spacing (Estimated)

**Container Padding:**
- Desktop: 48px-64px horizontal (12-16 Tailwind units)
- Mobile: 24px-32px horizontal (6-8 Tailwind units)
- Vertical: 64px-96px top/bottom (16-24 Tailwind units)

**Element Gaps:**
- Profile Image to Content: 48px-64px (12-16 units)
- Heading to Subheading: 12px-16px (3-4 units)
- Subheading to Logos: 24px-32px (6-8 units)
- Logo section to Location: 16px-24px (4-6 units)
- Between social links: 12px-16px (3-4 units)

**Internal Component Padding:**
- Card padding: 24px-32px (6-8 units)
- Button padding: 12px 24px (3 units vertical, 6 horizontal)

### Common Patterns
- Sections separated by 64px-96px
- Consistent card/block internal padding (24px-32px)
- Tight spacing for related elements (8px-16px)
- Generous spacing between unrelated sections (48px-64px)

---

## Profile Image Display

### Image Specifications

**Filename:** `DSCF7233.JPG`
**Source Optimization:** Next.js Image component
- URL pattern: `/_next/image?url=...&w=3840&q=75`
- Max width: 3840px (likely for Retina/4K displays)
- Quality: 75 (balance of quality/performance)

### Visual Treatment (Estimated)

**Dimensions:**
- Desktop: 400px-500px width
- Mobile: Full width or 300px-350px
- Aspect Ratio: Likely 1:1 (square) or 4:5 (portrait)

**Border Radius:**
- Moderate rounding: 12px-24px (3-6 Tailwind units)
- Alternative: Full circle (50% border-radius) if square aspect
- Modern approach suggests subtle rounding over full circle

**Effects:**
- Box Shadow: Subtle, likely `0 4px 12px rgba(0,0,0,0.08)`
- Object Fit: `cover` (ensures proper cropping)
- Object Position: `center` (focal point centering)
- Border: None or subtle 1px rgba(0,0,0,0.05)

**Positioning:**
- Likely position: relative or static in flex/grid container
- No absolute positioning (clean layout)
- May use transform: scale on hover (subtle zoom: 1.02-1.05)

---

## Animations & Micro-Interactions

### Identified Animation Features

**Interactive Blocks:**
- "tap blocks to see more" - Accordion/expansion animations
- Transition duration: Likely 200ms-300ms
- Easing: ease-in-out or custom cubic-bezier

**Image Carousel:**
- Multiple artist/movie posters
- Gallery navigation with smooth transitions
- Transform animations (translateX for slides)
- Duration: 300ms-500ms

**State Interactions:**
- Like/heart toggle with summary view
- Likely scale or color transition
- Duration: 150ms-250ms (quick feedback)

### Transition Patterns (Estimated)

**Hover States:**
```css
transition: all 0.2s ease-in-out;
/* or more specific */
transition: transform 0.2s ease, opacity 0.2s ease;
```

**Link Hovers:**
- Color transition: 150ms
- Possible underline grow animation
- Social icons: Scale(1.1) or color shift

**Card/Block Expansion:**
- Max-height animation or scale
- Duration: 300ms
- Easing: ease or cubic-bezier(0.4, 0, 0.2, 1)

**Image Interactions:**
- Hover zoom: transform: scale(1.05)
- Duration: 400ms
- Easing: ease-out

### Animation Libraries
- Likely using CSS transitions (no heavy framework detected)
- Possible Framer Motion for React animations (common with Next.js)
- Tailwind's transition utilities: `transition-all`, `duration-300`, `ease-in-out`

---

## Interactive Elements

### Buttons & Links

**Social Links:**
- Icon-based buttons
- Size: 40px-48px (10-12 Tailwind units)
- Spacing: Flex gap of 12px-16px
- Platforms: Email, LinkedIn, GitHub, Instagram, Spotify
- Style: Filled icons with brand colors or monochrome

**Link Treatment:**
- Blue accent color for text links
- Hover: Underline or color shift
- Active state: Slightly darker shade

### Embedded Components

**Spotify Widget:**
- Integrated player for music sharing
- Iframe or API integration
- Width: Matches content column

**Video Embeds:**
- Google Drive preview iframes
- Responsive sizing
- Content: Swimming/piano performances

**Image Galleries:**
- Clickable/expandable blocks
- Smooth reveal animations
- Grid or flex layout

---

## Responsive Behavior

### Breakpoint Strategy (Tailwind Default Likely)

```
sm: 640px   - Small tablets
md: 768px   - Tablets
lg: 1024px  - Small laptops
xl: 1280px  - Desktops
2xl: 1536px - Large screens
```

### Hero Adaptations

**Desktop (lg and up):**
- Side-by-side image and content
- 50/50 or 40/60 split
- Generous spacing (64px-96px)

**Tablet (md-lg):**
- May maintain side-by-side or stack
- Reduced spacing (48px-64px)
- Smaller image (350px-400px)

**Mobile (below md):**
- Stacked layout (image top, content below)
- Full-width image with max constraints
- Reduced typography sizes (scale factor 0.85-0.9)
- Padding reduced to 24px-32px

### Responsive Typography
- Fluid sizing possible with clamp()
- Example: `font-size: clamp(2rem, 5vw, 4rem)`
- Maintains readability across devices

---

## Technical Stack

### Framework Detection

**Next.js:**
- Server-side rendering
- Automatic image optimization
- Font optimization with CSS modules
- File-based routing

**Tailwind CSS:**
- Utility-first classes visible: `antialiased`, `bg-[#faf9f6]`
- Custom CSS modules for font variables
- Likely custom configuration for colors/spacing

**React:**
- Component-based architecture
- State management for interactive elements
- Client-side hydration for interactions

### Build Optimizations
- Image optimization: WebP format, responsive sizes
- Font subsetting: Only used glyphs loaded
- CSS purging: Unused Tailwind classes removed
- Analytics integration: Tracking component (`$L5`)

---

## Achieving the Modern Aesthetic

### Key Design Principles

**1. Warm Minimalism:**
- Off-white background vs. stark white
- Generous white space
- Subtle color palette
- Focus on content over decoration

**2. Typography Hierarchy:**
- Clear size differentiation
- Serif for personality (Playfair)
- Sans-serif for clarity (DM Sans)
- Variable fonts for fine-tuned control

**3. Subtle Interactions:**
- Gentle transitions (200ms-300ms)
- Hover states provide feedback
- No aggressive animations
- Progressive disclosure (tap to reveal)

**4. Content-First Layout:**
- Card-based organization
- Scannable information architecture
- Embedded rich media (Spotify, videos)
- Personal touches (location, timezone)

**5. Professional but Personal:**
- Profile photo creates connection
- Social links for accessibility
- Student/professional identity clear
- Interests/personality visible (music, sports)

### Implementation Recommendations

**For Similar Hero Section:**

1. **Layout Structure:**
   - Use CSS Grid with 2 columns (40/60 split)
   - Gap of 48px-64px between image and content
   - Max-width container (1200px-1400px)
   - Center alignment in viewport

2. **Profile Image:**
   - 400px-500px square or portrait
   - Border-radius: 16px-24px (not full circle)
   - Box-shadow: 0 4px 12px rgba(0,0,0,0.08)
   - Object-fit: cover
   - Optimize with Next.js Image or similar

3. **Typography Setup:**
   - Install DM Sans and Playfair Display (Google Fonts)
   - Use Playfair for main heading (48px-64px, weight 600-700)
   - Use DM Sans for body (16px-18px, weight 400)
   - Set line-heights: 1.2 for headings, 1.6 for body
   - Apply -0.02em letter-spacing on large headings

4. **Color Application:**
   - Background: #faf9f6
   - Primary text: #1f1f1f
   - Secondary text: #666666
   - Links: #0066cc or brand color
   - Maintain WCAG AA contrast ratios

5. **Spacing System:**
   - Use 8px base unit (Tailwind scale)
   - Section padding: 64px vertical, 48px horizontal
   - Element gaps: 16px-24px for related items
   - 48px-64px between major sections

6. **Interactions:**
   - Add transition: all 0.2s ease-in-out to links
   - Hover scale on images: transform: scale(1.05)
   - Button hovers: subtle background change
   - Keep animations under 300ms for snappiness

7. **Responsive Strategy:**
   - Stack on mobile (below 768px)
   - Reduce font sizes by 15-20% on mobile
   - Adjust padding to 24px-32px on small screens
   - Make image full-width on mobile with max-width

---

## Additional Observations

### Unique Features Worth Noting:

1. **Personal Touches:**
   - "Raincouver, BC" (playful language)
   - Timezone display (thoughtful for remote work)
   - Spotify integration (personality)
   - Performance videos (multi-dimensional identity)

2. **Progressive Disclosure:**
   - Expandable blocks reduce initial overwhelm
   - "Tap to see more" invites exploration
   - Information architecture prioritizes scanning

3. **Rich Media Integration:**
   - Photo galleries
   - Video embeds
   - Music player
   - Creates dynamic, engaging experience

4. **Accessibility Considerations:**
   - Semantic HTML structure
   - Proper heading hierarchy
   - Sufficient color contrast
   - Responsive images with proper alt text

5. **Performance Focus:**
   - Next.js optimization
   - Image quality at 75% (balance)
   - Lazy loading likely implemented
   - Minimal JavaScript for interactions

---

## Design Token Reference

### Quick Implementation Guide

```css
/* Color Tokens */
--color-bg-primary: #faf9f6;
--color-text-primary: #1f1f1f;
--color-text-secondary: #666666;
--color-text-tertiary: #999999;
--color-accent: #0066cc;
--color-shadow: rgba(0, 0, 0, 0.08);

/* Typography Tokens */
--font-heading: 'Playfair Display', serif;
--font-body: 'DM Sans', sans-serif;
--text-hero: 4rem;        /* 64px */
--text-h2: 2.5rem;        /* 40px */
--text-h3: 1.75rem;       /* 28px */
--text-body: 1.125rem;    /* 18px */
--text-small: 0.875rem;   /* 14px */

/* Spacing Tokens */
--space-xs: 0.5rem;       /* 8px */
--space-sm: 1rem;         /* 16px */
--space-md: 1.5rem;       /* 24px */
--space-lg: 2rem;         /* 32px */
--space-xl: 3rem;         /* 48px */
--space-2xl: 4rem;        /* 64px */
--space-3xl: 6rem;        /* 96px */

/* Border/Radius Tokens */
--radius-sm: 0.5rem;      /* 8px */
--radius-md: 1rem;        /* 16px */
--radius-lg: 1.5rem;      /* 24px */

/* Shadow Tokens */
--shadow-sm: 0 2px 8px var(--color-shadow);
--shadow-md: 0 4px 12px var(--color-shadow);
--shadow-lg: 0 8px 24px var(--color-shadow);

/* Transition Tokens */
--transition-fast: 150ms ease;
--transition-base: 200ms ease;
--transition-slow: 300ms ease;
```

---

## Summary

The dhai.dev portfolio achieves its modern, professional aesthetic through:
- Warm, minimal color palette (#faf9f6 background)
- Sophisticated typography pairing (Playfair + DM Sans)
- Generous white space and clear hierarchy
- Subtle, purposeful interactions
- Personal touches that humanize the portfolio
- Technical excellence (Next.js optimization)
- Content-first, card-based layout system

The hero section specifically succeeds by balancing professional presentation (clear headings, credentials) with personal connection (photo, location, interests) in a clean, scannable layout.
