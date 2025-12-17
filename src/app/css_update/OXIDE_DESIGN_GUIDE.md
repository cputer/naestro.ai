# Naestro.ai - Oxide Computer Design System

Complete replication of oxide.computer design aesthetic for Next.js + Tailwind CSS

## 🎨 Color Palette

### Primary Accent (Oxide Green)
- **Green-800** `rgb(72, 213, 151)` - Primary accent, buttons, links
- **Green-700** `rgb(32, 163, 108)` - Hover states
- **Green-600** `rgb(35, 138, 94)` - Active states
- **Green-200** `rgb(22, 35, 34)` - Light backgrounds

### Neutral (Grayscale)
Dark theme with sophisticated neutrals:
- **Neutral-0** `rgb(8, 15, 17)` - Primary background
- **Neutral-50** `rgb(16, 22, 24)` - Raised surfaces
- **Neutral-100** `rgb(20, 27, 29)` - Secondary surfaces
- **Neutral-200** `rgb(28, 34, 37)` - Borders, dividers
- **Neutral-300** `rgb(45, 51, 53)` - Default borders
- **Neutral-800** `rgb(184, 187, 188)` - Primary text
- **Neutral-900** `rgb(215, 216, 217)` - Bright text

### Additional Colors
- **Blue**: Info states, code highlights
- **Red**: Errors, warnings
- **Yellow**: Notices, alerts
- **Purple**: Special highlights

## 🔤 Typography

### Font Family
```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif
```

### Headings
- H1: 3.5rem (56px), font-weight: 600, letter-spacing: -0.02em
- H2: 2.25rem (36px), font-weight: 600
- H3: 1.875rem (30px), font-weight: 600
- H4: 1.5rem (24px), font-weight: 600
- H5: 1.25rem (20px), font-weight: 600
- H6: 1rem (16px), font-weight: 600, uppercase

### Body Text
- Base: 1rem (16px), line-height: 1.5
- Secondary: rgba colors with reduced opacity

## 📦 Component Classes

### Buttons
```jsx
<button className="btn btn-primary">Primary Button</button>
<button className="btn btn-secondary">Secondary Button</button>
<button className="btn btn-ghost">Ghost Button</button>
```

### Cards
```jsx
<div className="card">
  <h3 className="card-title">Card Title</h3>
  <p className="card-description">Card description text</p>
</div>
```

### Inputs
```jsx
<div>
  <label className="label">Input Label</label>
  <input className="input" type="text" placeholder="Enter text" />
</div>
```

### Badges
```jsx
<span className="badge badge-success">Running</span>
<span className="badge badge-error">Stopped</span>
<span className="badge badge-warning">Pending</span>
```

## 🎯 Usage Examples

### Hero Section
```jsx
<section className="hero">
  <h1 className="hero-title">The cloud you own</h1>
  <p className="hero-subtitle">
    On-demand elastic resources. On-prem economics and governance.
  </p>
  <div className="flex gap-4 justify-center">
    <button className="btn btn-primary">Try Now</button>
    <button className="btn btn-secondary">Contact Sales</button>
  </div>
</section>
```

### Feature Grid
```jsx
<div className="grid-3">
  <div className="card">
    <div className="feature-icon">
      <svg>...</svg>
    </div>
    <h3 className="card-title">Feature Title</h3>
    <p className="card-description">Feature description</p>
  </div>
  {/* More cards... */}
</div>
```

### Data Table
```jsx
<table className="table-container">
  <thead>
    <tr>
      <th>Name</th>
      <th>Status</th>
      <th>CPU</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>instance-1</td>
      <td><span className="badge badge-success">Running</span></td>
      <td>4 vCPU</td>
    </tr>
  </tbody>
</table>
```

## 🎨 Design Principles

1. **Dark Theme First**: Deep blacks with subtle grays
2. **Green Accent**: Signature Oxide green for all interactive elements
3. **High Contrast**: Excellent readability with proper contrast ratios
4. **Minimalist**: Clean, uncluttered layouts
5. **Technical Aesthetic**: Monospace fonts for code, sharp edges
6. **Subtle Animations**: Smooth transitions, no jarring effects

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Installation

1. Copy `tailwind.config.js` to your project root
2. Copy `globals.css` to your styles folder
3. Import in your main layout:
```jsx
import '@/styles/globals.css'
```

## 💡 Tips

- Use `bg-surface` for main backgrounds
- Use `bg-surface-raised` for cards and elevated elements
- Use `text-content-primary` for main text
- Use `text-content-secondary` for muted text
- Use `border-stroke` for borders
- Use `accent` color for all interactive elements (buttons, links)
