# 🎨 Naestro.ai - Oxide Computer Design System

**Complete CSS & Component Library for Next.js + Tailwind**

Replicate the beautiful dark aesthetic of [oxide.computer](https://oxide.computer) on your site.

---

## 📦 What's Included

| File | Description | Size |
|------|-------------|------|
| **tailwind.config.js** | Complete Tailwind configuration with all Oxide colors | 3.3 KB |
| **globals.css** | Component classes, base styles, utilities | 2 KB |
| **ExampleComponents.tsx** | 10+ production-ready React components | 12 KB |
| **page-example.tsx** | Complete page implementation example | 2.3 KB |
| **README.md** | Comprehensive usage guide | 6.4 KB |
| **INSTALLATION_GUIDE.md** | Step-by-step setup instructions | 4 KB |
| **OXIDE_DESIGN_GUIDE.md** | Design principles & best practices | 4.2 KB |
| **COLOR_REFERENCE.md** | Complete color palette documentation | 3.5 KB |

**Total:** 8 files, ready to use!

---

## 🚀 Quick Start (3 Steps)

### 1️⃣ Copy Configuration Files

```bash
# Copy to your Next.js project
cp tailwind.config.js /your-project/
cp globals.css /your-project/app/
```

### 2️⃣ Import Global Styles

```typescript
// app/layout.tsx
import './globals.css'
```

### 3️⃣ Start Using Components

```jsx
<button className="btn btn-primary">Get Started</button>
<div className="card">Your content</div>
```

**That's it!** 🎉

---

## 🎨 Key Features

✅ **Oxide's Signature Green** - Perfect accent color (`#48D597`)  
✅ **Dark Theme** - Deep blacks with sophisticated grays  
✅ **Complete Color System** - 50+ colors (neutrals, blues, reds, yellows)  
✅ **Ready-Made Components** - Buttons, cards, tables, badges, forms  
✅ **Fully Responsive** - Mobile-first design  
✅ **TypeScript Ready** - Full type support  
✅ **Accessible** - WCAG AAA contrast ratios  

---

## 📚 Documentation Guide

**New to this? Start here:**

1. 📖 **[INSTALLATION_GUIDE.md](./INSTALLATION_GUIDE.md)** - Setup instructions
2. 🎨 **[COLOR_REFERENCE.md](./COLOR_REFERENCE.md)** - All colors with hex codes
3. 📝 **[README.md](./README.md)** - Complete usage guide
4. 🎯 **[OXIDE_DESIGN_GUIDE.md](./OXIDE_DESIGN_GUIDE.md)** - Design principles

**Want to see examples?**

- 🧩 **[ExampleComponents.tsx](./ExampleComponents.tsx)** - Component library
- 📄 **[page-example.tsx](./page-example.tsx)** - Full page template

---

## 🎯 Core Design System

### Colors

```tsx
// Backgrounds
bg-surface              // Main background: rgb(8, 15, 17)
bg-surface-raised       // Cards: rgb(16, 22, 24)
bg-accent               // Oxide green: rgb(72, 213, 151)

// Text
text-content-primary    // Main text: rgb(184, 187, 188)
text-content-secondary  // Muted text: rgb(161, 164, 165)
text-accent             // Green text: rgb(72, 213, 151)

// Borders
border-stroke           // Default: rgb(45, 51, 53)
border-stroke-hover     // Hover: rgb(64, 70, 71)
```

### Components

```jsx
// Buttons
<button className="btn btn-primary">Primary</button>
<button className="btn btn-secondary">Secondary</button>

// Cards
<div className="card">
  <h3 className="card-title">Title</h3>
  <p className="card-description">Description</p>
</div>

// Inputs
<input className="input" placeholder="Enter text" />

// Badges
<span className="badge badge-success">Active</span>
```

---

## 💡 Use Cases

Perfect for:
- 🤖 AI/ML platforms
- ☁️ Cloud infrastructure sites
- 👨‍💻 Developer tools
- 📊 SaaS dashboards
- 🔧 Technical documentation

---

## 🎬 See It In Action

After installation, create a test page:

```jsx
export default function TestPage() {
  return (
    <div className="min-h-screen bg-surface p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-semibold text-neutral-900 mb-4">
          Oxide Design System
        </h1>
        <p className="text-content-secondary mb-8">
          Beautiful dark theme with signature green accents
        </p>
        <button className="btn btn-primary">
          Get Started
        </button>
      </div>
    </div>
  )
}
```

---

## 📸 What You Get

**Visual Style:**
- ✨ Dark, sophisticated interface
- 🟢 Vibrant green accents
- 📐 Clean geometric layouts
- 🎭 High contrast for readability
- ⚡ Smooth hover effects

**Technical:**
- 🔧 Tailwind CSS utilities
- 📦 Component classes
- 🎨 Full color palette
- 📱 Responsive breakpoints
- ♿ Accessibility built-in

---

## 🆘 Need Help?

**Common Issues:**

❓ **Colors not showing?**  
→ Check your Tailwind `content` paths

❓ **Styles not applying?**  
→ Make sure `globals.css` is imported

❓ **TypeScript errors?**  
→ Rename `.tsx` files to `.jsx` for JavaScript projects

**Full troubleshooting:** See [INSTALLATION_GUIDE.md](./INSTALLATION_GUIDE.md)

---

## 🎨 Design Principles

This system follows Oxide's core design philosophy:

1. **Dark-First** - Deep blacks create sophisticated foundation
2. **Green Accent** - Signature color for all interactive elements
3. **High Contrast** - Excellent readability in all conditions
4. **Technical Feel** - Clean, precise, developer-focused
5. **Subtle Motion** - Smooth transitions, no jarring effects

---

## 🚀 Next Steps

1. ✅ Read **INSTALLATION_GUIDE.md**
2. 🎨 Browse **COLOR_REFERENCE.md** 
3. 🧩 Explore **ExampleComponents.tsx**
4. 📖 Study **README.md** for detailed usage
5. 🎯 Review **OXIDE_DESIGN_GUIDE.md** for best practices

---

## 📄 License

Inspired by Oxide Computer's public website design.  
Free to use for your projects.

---

## 🙏 Credits

**Inspired by:** [Oxide Computer Company](https://oxide.computer)  
**Built for:** Naestro.ai  
**Design System:** Oxide's signature dark theme with green accents

---

**Happy Building! 🎉**

Questions? Check the comprehensive documentation in each guide file.
