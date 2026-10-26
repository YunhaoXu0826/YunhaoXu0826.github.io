# Yunhao (Henry) Xu - Portfolio Website

A professional portfolio website for Materials Science Researcher & Engineer, built with modern web technologies.

## 🚀 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS 4
- **Icons:** Lucide React
- **Language:** TypeScript

## 🎨 Design

This portfolio is inspired by the "Minimal Mistakes" Jekyll theme, featuring:
- Clean, academic aesthetic with high contrast typography
- Persistent sidebar navigation on desktop
- Responsive mobile-first design
- Professional grayscale color palette with subtle blue accents
- Ample whitespace for excellent readability

## 📂 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page with section navigation
│   └── globals.css         # Global styles and CSS variables
├── components/
│   ├── Sidebar.tsx         # Persistent sidebar with profile and navigation
│   ├── About.tsx           # About and Education section
│   ├── Experience.tsx      # Professional experience
│   ├── Research.tsx        # Research projects with detailed cards
│   └── Skills.tsx          # Technical skills categorized
└── public/                 # Static assets
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ (recommended: Node.js 20+)
- npm or yarn

### Installation

1. Clone or navigate to the portfolio directory:
```bash
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📱 Features

### Responsive Design
- Desktop: Persistent left sidebar with smooth scrolling content area
- Mobile: Collapsible hamburger menu with overlay navigation

### Sections
1. **About:** Introduction, bio, and educational background
2. **Experience:** Professional work history with detailed responsibilities
3. **Research & Projects:** Comprehensive research project cards with highlights and tags
4. **Skills:** Categorized technical skills (Programming, Materials Science, Certifications)

### Interactive Elements
- Smooth scrolling navigation
- Active section highlighting
- Hover effects on cards and links
- Responsive mobile menu

## 🎨 Customization

### Colors
The color scheme is defined in `app/globals.css`:
- Primary background: White (`#ffffff`)
- Sidebar background: Light gray (`#f8f9fa`)
- Accent color: Academic blue (`#2c5282`)
- Text: High contrast dark gray (`#171717`)

### Content
All content is embedded in the components. To update:
- **Profile info:** Edit `components/Sidebar.tsx`
- **Education/Bio:** Edit `components/About.tsx`
- **Work experience:** Edit `components/Experience.tsx`
- **Research projects:** Edit `components/Research.tsx`
- **Skills:** Edit `components/Skills.tsx`

### Adding a Profile Photo
Replace the placeholder in `components/Sidebar.tsx` (line 52-58) with an actual image:
```tsx
<Image
  src="/profile.jpg"
  alt="Yunhao Xu"
  width={160}
  height={160}
  className="rounded-full"
/>
```
Place your photo in the `public/` directory.

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🚢 Deployment

This Next.js app can be deployed to:
- **Vercel** (recommended): Connect your GitHub repo for automatic deployments
- **Netlify:** Supports Next.js with automatic builds
- **AWS/Google Cloud/Azure:** Deploy as a containerized application

## 📄 License

This project is created for personal portfolio use.

## 📧 Contact

- **Email:** xyh18301778938@gmail.com
- **Phone:** 412-450-2179
- **LinkedIn:** [yunhao-henry-xu](https://www.linkedin.com/in/yunhao-henry-xu)

---

Built with ❤️ using Next.js, Tailwind CSS, and Lucide React
