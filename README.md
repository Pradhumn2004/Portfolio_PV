<div align="center">
  <img src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js" alt="Next.js 15" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js" alt="Three.js" />
  <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer" alt="Framer Motion" />
</div>

<br />

<div align="center">
  <h1>🚀 AI Engineer Portfolio</h1>
  <p>A futuristic, premium portfolio website built for an Applied AI Engineer — inspired by OpenAI, Vercel, Linear, and Stripe.</p>
  <p>Dark theme · Glassmorphism · 3D visuals · Micro-interactions</p>
</div>

<br />

## ✨ Features

### 🎨 Design & UI
- **Futuristic AI/Tech theme** — dark mode with gradient accents and glow effects
- **Glassmorphism** — frosted glass cards with backdrop blur
- **Animated background** — Three.js interactive 3D wireframe, particle network canvas
- **Mouse-following glow** — radial gradient that follows cursor + custom cursor dot
- **Noise overlay** — subtle grain texture for depth
- **Fully responsive** — desktop, tablet, and mobile

### 📄 Sections
- **Hero** — animated introduction with parallax, social links, CTA buttons
- **About** — professional bio, contact chips, education timeline
- **Experience** — timeline with glass cards, bullet points, tech tags
- **Skills** — categorized interactive grid with animated transitions
- **Projects** — featured project cards with tech badges and GitHub links
- **Certifications & Achievements** — modal-preview cards for certs, achievements, open source
- **GitHub Repos** — live fetch from GitHub API with star/fork counts
- **Resume** — preview card with Google Drive link (or local PDF)
- **Contact** — form with validation + social links

### ⚡ Animations & Effects
- Framer Motion scroll-triggered reveals
- Text gradient animations
- Floating/parallax elements
- Magnetic hover effects on cards
- Loading screen with spinner
- Smooth page transitions
- Animated skill category tabs

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 15** | React framework with App Router |
| **React 19** | UI library |
| **TypeScript** | Type safety |
| **Tailwind CSS v4** | Utility-first styling |
| **Framer Motion** | Declarative animations |
| **Three.js** | 3D interactive background |
| **Lucide React** | Icon library |
| **Shadcn/UI** | Accessible component primitives |
| **Nodemailer** | Contact form email delivery |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/portfolio.git
cd portfolio

# Install dependencies
npm install

# Generate resume PDF (optional — updates public/resume.pdf from CV data)
node scripts/generate-resume.cjs

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
portfolio/
├── public/                  # Static assets (resume.pdf, images)
├── scripts/
│   └── generate-resume.cjs  # PDF generator from CV data
├── src/
│   ├── app/
│   │   ├── api/contact/     # Contact form API route
│   │   ├── resume/          # Printable resume page
│   │   ├── globals.css      # Global styles & theme
│   │   ├── layout.tsx       # Root layout
│   │   ├── client-layout.tsx # Client wrapper with effects
│   │   └── page.tsx         # Main portfolio page
│   ├── components/
│   │   ├── effects/         # ParticleBackground, MouseGlow, ThreeBackground, LoadingScreen
│   │   ├── layout/          # Navbar, Footer
│   │   ├── sections/        # Hero, About, Experience, Skills, Projects, Certifications, GitHub, Resume, Contact
│   │   └── ui/              # Button, Dialog, Tooltip, icons
│   └── data/
│       └── portfolio.ts     # All CV data (extracted from resume)
└── package.json
```

---

## 🧑‍💻 Customization

All portfolio content is centralized in `src/data/portfolio.ts`. Edit this file to:

- Update personal info, bio, links
- Add/remove projects, experience, skills
- Modify certifications, achievements
- Change navigation links

The resume PDF is auto-generated from this data file. Run `node scripts/generate-resume.cjs` after updating.

---

## 📬 Contact Form

The contact form sends emails via Nodemailer. In production, set these environment variables:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

In development mode, submissions are logged to the console instead.

---

## 🌐 Deployment

This project is optimized for **Vercel**:

```bash
npm i -g vercel
vercel
```

No special configuration needed — static pages are pre-rendered, only the contact API route is dynamic.

---

## 📄 License

MIT

---

<div align="center">
  Built with ❤️ using Next.js, Three.js, and Framer Motion
</div>
