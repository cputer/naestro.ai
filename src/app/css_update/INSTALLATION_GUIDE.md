# Naestro.ai - Oxide Design System Installation Guide

## 📦 What You Got

A complete Next.js + Tailwind CSS design system replicating Oxide Computer's aesthetic:

✅ **tailwind.config.js** - Full color palette and theme configuration  
✅ **globals.css** - Component classes and base styles  
✅ **ExampleComponents.tsx** - Production-ready React components  
✅ **page-example.tsx** - Complete page template  
✅ **OXIDE_DESIGN_GUIDE.md** - Design documentation  
✅ **README.md** - Comprehensive usage guide  

## 🚀 Installation Steps

### Step 1: Copy Tailwind Configuration

```bash
# Copy to your Next.js project root
cp tailwind.config.js /your-project-root/tailwind.config.js
```

**What it does**: Adds all Oxide colors (green accent, neutrals, blues, reds, yellows) to your Tailwind theme

### Step 2: Update Global Styles

```bash
# Copy to your styles folder
cp globals.css /your-project-root/app/globals.css
# OR for older Next.js versions
cp globals.css /your-project-root/styles/globals.css
```

**What it does**: Sets up component classes (btn, card, input, etc.) and base typography

### Step 3: Import in Your Layout

Make sure `globals.css` is imported in your root layout:

```typescript
// app/layout.tsx
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```

### Step 4: Copy Components (Optional)

```bash
# Copy to your components folder
cp ExampleComponents.tsx /your-project-root/components/
```

### Step 5: Test It Out

Create a new page or replace your homepage:

```bash
cp page-example.tsx /your-project-root/app/page.tsx
```

Then run your dev server:

```bash
npm run dev
```

Visit `http://localhost:3000` - you should see the Oxide-styled interface!

## 🎨 Key Design Elements

### Primary Accent Color
**Oxide Green**: `rgb(72, 213, 151)` - Use for all interactive elements

### Dark Background
**Surface**: `rgb(8, 15, 17)` - Main background color

### Component Classes Ready to Use

```jsx
// Buttons
<button className="btn btn-primary">Click Me</button>

// Cards
<div className="card">...</div>

// Inputs
<input className="input" type="text" />

// Tables
<table className="table-container">...</table>
```

## 🔍 Quick Test

After installation, test with this simple component:

```jsx
export default function Test() {
  return (
    <div className="min-h-screen bg-surface p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-semibold text-neutral-900 mb-4">
          Oxide Design Test
        </h1>
        <p className="text-content-secondary mb-8">
          If you see green accent colors and dark backgrounds, it's working!
        </p>
        <button className="btn btn-primary">
          Test Button
        </button>
        <div className="card mt-8">
          <h3 className="text-xl font-semibold text-neutral-900">Card Test</h3>
          <p className="text-content-secondary">This is a test card</p>
        </div>
      </div>
    </div>
  )
}
```

## 🐛 Troubleshooting

### Problem: Colors not showing up

**Solution**: Check that your Tailwind content paths are correct in `tailwind.config.js`:

```js
content: [
  './pages/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}',
  './app/**/*.{js,ts,jsx,tsx,mdx}',
]
```

### Problem: Styles not applying

**Solution**: Make sure you're importing `globals.css` in your root layout

### Problem: Build errors with TypeScript

**Solution**: The component file uses TypeScript. If you're using JavaScript, rename `.tsx` to `.jsx`

## 📝 Next Steps

1. ✅ Verify installation with test component
2. 📖 Read `OXIDE_DESIGN_GUIDE.md` for design principles
3. 🎨 Customize accent color if needed
4. 🚀 Start building your pages!

## 💡 Pro Tips

- Use `bg-surface` for all page backgrounds
- Use `text-accent` for links and interactive text
- Cards should use `card` class for automatic styling
- All buttons use `btn` + modifier classes
- Check the example components for best practices

## 🎯 What Makes This Oxide-Like?

1. ✅ Dark theme with deep blacks
2. ✅ Signature green accent color (`#48D597`)
3. ✅ High contrast for excellent readability
4. ✅ Clean, technical aesthetic
5. ✅ Subtle hover animations
6. ✅ Monospace for code elements

---

**Happy Building!** 🚀

For questions or issues, refer to the comprehensive `README.md`
