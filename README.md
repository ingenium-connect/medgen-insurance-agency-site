# Med-Gen Insurance Agency Website

A professional marketing website for Med-Gen Insurance Agency, a Kenyan insurance provider offering comprehensive medical and general insurance products.

## 🚀 Tech Stack

- **Framework**: Next.js 15.4.5 (App Router)
- **React**: 19.1.0
- **TypeScript**: 5.x
- **Styling**: Tailwind CSS v4 with PostCSS plugin
- **UI Components**: Radix UI primitives + shadcn/ui
- **Animations**: Framer Motion 12.x
- **Icons**: Lucide React + React Icons
- **Forms**: React Hook Form + Zod (ready for implementation)
- **Notifications**: Sonner
- **Fonts**: Geist Sans + Geist Mono
- **Package Manager**: pnpm

## 🎨 Design

The website uses a professional color scheme borrowed from the Wheelswise frontend:
- **Primary**: `#397397` (teal-blue)
- **Primary Dark**: `#1e3a5f` (dark blue)
- **Accent**: Light blue tints (`#8bbfd8`, `#edf5f8`)
- **Gradients**: `from-[#1e3a5f] to-[#397397]`

All colors are defined using OKLCH color space for better color consistency and accessibility.

## 📁 Project Structure

```
medgen-insurance/
├── app/
│   ├── layout.tsx                 # Root layout with fonts, metadata
│   ├── globals.css                # Tailwind imports + CSS variables
│   ├── page.tsx                   # Home page
│   ├── about/page.tsx             # About Us page
│   ├── products/
│   │   ├── page.tsx               # Products overview
│   │   ├── medical/page.tsx       # Medical insurance details
│   │   └── general/page.tsx       # General insurance details
│   ├── resources/page.tsx         # Resources page
│   └── contact/page.tsx           # Contact Us page with form
├── components/
│   ├── layout/
│   │   ├── Header.tsx             # Navigation header
│   │   └── Footer.tsx             # Footer with links
│   ├── home/                      # Home page sections
│   └── ui/                        # shadcn components
├── lib/utils.ts                   # Utility functions
└── public/                        # Static assets
```

## 🌟 Features

### Pages

1. **Home Page** (`/`) - Hero, benefits, products overview, testimonials, CTA
2. **About Us** (`/about`) - Company history, mission, values, commitment
3. **Products** (`/products`) - Overview of insurance products
4. **Medical Insurance** (`/products/medical`) - Detailed medical insurance info
5. **General Insurance** (`/products/general`) - Motor, home, travel, business insurance
6. **Resources** (`/resources`) - Glossary, forms, useful links
7. **Contact** (`/contact`) - Contact form, office info, map

### Components

- Responsive Header with mobile menu
- Footer with company links and social media
- Animated sections with Framer Motion
- Consistent card designs
- Contact form with validation
- Toast notifications

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ (recommended)
- pnpm 10.12.1+

### Installation

```bash
# Install dependencies
pnpm install
```

### Development

```bash
# Start development server (with Turbopack)
pnpm dev

# The site will be available at http://localhost:3000
```

### Build

```bash
# Create production build
pnpm build

# Start production server
pnpm start
```

### Linting & Formatting

```bash
# Run ESLint
pnpm lint

# Format code with Prettier
pnpm format

# Check formatting
pnpm format:check
```

## 🎯 Environment Variables

Create a `.env.local` file in the root directory:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://medgeninsurance.com

# Contact Form (Optional - if using email service)
# NEXT_PUBLIC_EMAIL_SERVICE_URL=
# EMAIL_API_KEY=
```

## 📝 Customization

### Updating Content

- **Company Info**: Update in `components/layout/Footer.tsx` and `Header.tsx`
- **Testimonials**: Edit `components/home/TestimonialsSection.tsx`
- **Products**: Modify `app/products/**/page.tsx` files
- **Contact Details**: Update in `app/contact/page.tsx` and Footer

### Adding New Pages

1. Create a new directory in `app/`
2. Add a `page.tsx` file with your content
3. Add navigation link in `components/layout/Header.tsx`

### Styling

- Global styles: `app/globals.css`
- Color variables: `:root` and `.dark` in `globals.css`
- Component styles: Use Tailwind utility classes
- Custom components: Add to `components/ui/`

## 🔗 Integration Points

### Contact Form

The contact form currently uses a client-side toast notification. To connect it to a backend:

1. Create an API route in `app/api/contact/route.ts`
2. Update the `handleSubmit` function in `app/contact/page.tsx`
3. Add email service integration (e.g., Resend, SendGrid)

### Analytics

Add Google Analytics or other analytics in `app/layout.tsx`.

## 🌐 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
pnpm i -g vercel

# Deploy
vercel
```

The site can also be deployed to Netlify, AWS Amplify, Digital Ocean, Railway, or Render.

## 📱 Responsive Design

Fully responsive and tested on:
- Mobile (320px - 767px)
- Tablet (768px - 1023px)
- Desktop (1024px+)

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus visible states
- Color contrast compliance (WCAG AA)

## 🔒 Security Headers

Security headers configured in `next.config.ts`:
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- Referrer-Policy: strict-origin-when-cross-origin

## 📄 License

This project is proprietary and confidential. All rights reserved by Med-Gen Insurance Agency.

## 🤝 Support

For questions or issues:
- Email: support@medgeninsurance.com
- Phone: +254 717 227 690

## 🎨 Design Credits

Color scheme and design patterns borrowed from the Wheelswise motor insurance platform.

---

**Built with ❤️ for Med-Gen Insurance Agency** by *Ingenium*
