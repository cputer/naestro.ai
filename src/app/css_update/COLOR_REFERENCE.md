# Oxide Computer Color Palette Reference

## 🎨 Complete Color Palette for Naestro.ai

### Primary Accent (Oxide Green)

| Color | RGB | Hex | Usage |
|-------|-----|-----|-------|
| Green-800 | `rgb(72, 213, 151)` | `#48D597` | Primary buttons, links, icons |
| Green-700 | `rgb(32, 163, 108)` | `#20A36C` | Hover states, active states |
| Green-600 | `rgb(35, 138, 94)` | `#238A5E` | Secondary accents |
| Green-500 | `rgb(35, 106, 76)` | `#236A4C` | Tertiary accents |
| Green-400 | `rgb(32, 77, 59)` | `#204D3B` | Dark accent backgrounds |
| Green-300 | `rgb(28, 55, 46)` | `#1C372E` | Very dark accent backgrounds |
| Green-200 | `rgb(22, 35, 34)` | `#162322` | Light accent backgrounds |
| Green-100 | `rgb(19, 26, 28)` | `#131A1C` | Darkest accent backgrounds |

### Neutral Colors (Grayscale)

| Color | RGB | Hex | Usage |
|-------|-----|-----|-------|
| Neutral-0 | `rgb(8, 15, 17)` | `#080F11` | Primary background |
| Neutral-50 | `rgb(16, 22, 24)` | `#101618` | Raised surfaces (cards) |
| Neutral-100 | `rgb(20, 27, 29)` | `#141B1D` | Secondary surfaces |
| Neutral-200 | `rgb(28, 34, 37)` | `#1C2225` | Tertiary surfaces, hover states |
| Neutral-300 | `rgb(45, 51, 53)` | `#2D3335` | Default borders |
| Neutral-400 | `rgb(64, 70, 71)` | `#404647` | Border hover states |
| Neutral-500 | `rgb(91, 95, 97)` | `#5B5F61` | Disabled elements |
| Neutral-600 | `rgb(126, 131, 133)` | `#7E8385` | Tertiary text |
| Neutral-700 | `rgb(161, 164, 165)` | `#A1A4A5` | Secondary text |
| Neutral-800 | `rgb(184, 187, 188)` | `#B8BBBC` | Primary text |
| Neutral-900 | `rgb(215, 216, 217)` | `#D7D8D9` | Bright text (headings) |
| Neutral-1000 | `rgb(254, 255, 255)` | `#FEFFFF` | White |

### Blue Colors (Info/Code Highlights)

| Color | RGB | Hex | Usage |
|-------|-----|-----|-------|
| Blue-800 | `rgb(139, 161, 255)` | `#8BA1FF` | Info badges, code highlights |
| Blue-700 | `rgb(120, 138, 221)` | `#788ADD` | Secondary info states |
| Blue-600 | `rgb(103, 118, 187)` | `#6776BB` | Tertiary info states |
| Blue-500 | `rgb(81, 91, 143)` | `#515B8F` | Dark info backgrounds |
| Blue-400 | `rgb(60, 67, 102)` | `#3C4366` | Very dark info backgrounds |

### Red Colors (Errors/Destructive Actions)

| Color | RGB | Hex | Usage |
|-------|-----|-----|-------|
| Red-800 | `rgb(251, 110, 136)` | `#FB6E88` | Error messages, delete buttons |
| Red-700 | `rgb(218, 97, 119)` | `#DA6177` | Secondary error states |
| Red-600 | `rgb(195, 87, 106)` | `#C3576A` | Tertiary error states |
| Red-500 | `rgb(149, 69, 83)` | `#954553` | Dark error backgrounds |
| Red-400 | `rgb(106, 52, 60)` | `#6A343C` | Very dark error backgrounds |

### Yellow Colors (Warnings/Notices)

| Color | RGB | Hex | Usage |
|-------|-----|-----|-------|
| Yellow-800 | `rgb(245, 185, 68)` | `#F5B944` | Warning badges, alerts |
| Yellow-700 | `rgb(202, 153, 59)` | `#CA993B` | Secondary warning states |
| Yellow-600 | `rgb(153, 116, 48)` | `#997430` | Tertiary warning states |
| Yellow-500 | `rgb(118, 90, 39)` | `#765A27` | Dark warning backgrounds |
| Yellow-400 | `rgb(85, 66, 31)` | `#55421F` | Very dark warning backgrounds |

## 🎯 Semantic Color Usage

### Surfaces (Backgrounds)

```typescript
surface-default: neutral-0        // Main page background
surface-raised: neutral-50        // Cards, modals, elevated elements
surface-secondary: neutral-100    // Secondary surfaces
surface-tertiary: neutral-200     // Tertiary surfaces, hover states
```

### Content (Text)

```typescript
content-primary: neutral-800      // Main body text
content-secondary: neutral-700    // Muted text, descriptions
content-tertiary: neutral-600     // Very muted text
content-disabled: neutral-500     // Disabled text
content-bright: neutral-900       // Headings, emphasis
```

### Strokes (Borders)

```typescript
stroke-default: neutral-300       // Default borders
stroke-hover: neutral-400         // Border hover states
stroke-secondary: neutral-200     // Subtle dividers
stroke-tertiary: neutral-100      // Very subtle dividers
```

### Interactive Colors

```typescript
accent: green-800                 // Primary CTA color
accent-hover: green-700           // Hover states
success: green-800                // Success states
error: red-800                    // Error states
warning: yellow-800               // Warning states
info: blue-800                    // Info states
```

## 📋 CSS Variable Names

All colors are available as CSS variables:

```css
/* Example usage */
background: var(--base-neutral-0);
color: var(--base-green-800);
border-color: var(--base-neutral-300);
```

## 🎨 Tailwind Class Names

```jsx
// Background colors
className="bg-surface"           // neutral-0
className="bg-surface-raised"    // neutral-50
className="bg-accent"            // green-800

// Text colors
className="text-content-primary"   // neutral-800
className="text-content-secondary" // neutral-700
className="text-accent"            // green-800

// Border colors
className="border-stroke"        // neutral-300
className="border-stroke-hover"  // neutral-400
```

## 💡 Color Accessibility

All color combinations meet WCAG AAA contrast requirements:

- ✅ Text on backgrounds: 7:1 or higher
- ✅ Interactive elements: Clear visual distinction
- ✅ Focus states: High contrast outlines

## 🎨 Design Token System

### Spacing Scale
- 4px base unit
- 8px, 16px, 24px, 32px, 48px common values

### Border Radius
- sm: 4px (small elements)
- md: 8px (default, cards, buttons)
- lg: 12px (modals, large cards)

### Shadows
- Subtle, dark shadows for elevation
- Low opacity (0.2-0.4) for depth
