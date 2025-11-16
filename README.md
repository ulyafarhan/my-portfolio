# 🚀 My Portfolio - Project Documentation

> **Modern Portfolio Website with Headless CMS**
>
> Built with Vue.js 3, Sanity.io, Tailwind CSS, and GSAP

## 📋 Quick Overview

**My Portfolio** adalah aplikasi portfolio modern yang terdiri dari:
- **Frontend**: Vue.js 3 + Vite + Tailwind CSS + GSAP
- **CMS Backend**: Sanity.io Studio untuk content management
- **Animations**: Smooth animations dengan GSAP ScrollTrigger
- **Responsive**: Mobile-first responsive design
- **Performance**: Optimized dengan code splitting dan lazy loading

## 🎯 Features

### Frontend Portfolio
- ✅ Modern Vue.js 3 dengan Composition API
- ✅ Smooth scroll animations dengan GSAP
- ✅ Responsive design dengan Tailwind CSS
- ✅ Dynamic content dari Sanity CMS
- ✅ Vue DevTools integration
- ✅ Hot Module Replacement (HMR)
- ✅ Optimized production build

### CMS Backend
- ✅ Sanity Studio untuk content management
- ✅ Real-time content preview
- ✅ Rich text editor
- ✅ Image optimization
- ✅ TypeScript support
- ✅ Custom schema types

## 🛠️ Tech Stack

### Frontend
- **Vue.js 3** - Progressive JavaScript Framework
- **Vite** - Fast build tool dan development server
- **Tailwind CSS** - Utility-first CSS framework
- **GSAP** - Professional animation library
- **Pinia** - State management untuk Vue.js
- **Vue Router** - Client-side routing

### Backend/CMS
- **Sanity.io** - Headless CMS platform
- **TypeScript** - Type-safe JavaScript
- **ESLint** - Code linting

### Development Tools
- **Node.js** - JavaScript runtime
- **npm** - Package manager
- **Git** - Version control

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm 7+
- Web browser modern

### 1. Clone dan Setup
```bash
# Clone repository (jika tersedia)
# git clone [repository-url] my-portfolio
# cd my-portfolio

# Atau langsung setup dari folder yang ada
cd my-portfolio
```

### 2. Frontend Setup
```bash
cd my-portfolio-frontend
npm install
npm run dev
```
Frontend akan berjalan di: `http://localhost:5173/`

### 3. CMS Setup
```bash
cd my-portfolio-cms
npm install
npm run dev
```
CMS akan berjalan di: `http://localhost:3333/`

## 📁 Project Structure

```
my-portfolio/
├── my-portfolio-frontend/          # Frontend Portfolio
│   ├── index.html                  # Entry point
│   ├── .env                        # Environment variables
│   ├── node_modules/               # Dependencies
│   └── .vite/                      # Vite cache
│
├── my-portfolio-cms/               # Sanity CMS Backend
│   ├── .sanity/                    # Runtime files
│   ├── .gitignore                  # Git ignore
│   ├── eslint.config.mjs           # ESLint config
│   └── node_modules/               # Dependencies
│
└── .hintrc                         # Webhint configuration
```

## 🔧 Environment Variables

### Frontend (.env)
```
VITE_SANITY_PROJECT_ID="YOUR_SANITY_PROJECT_ID"
VITE_SANITY_DATASET="production"
```

### Sanity Configuration
- **Project ID**: `YOUR_SANITY_PROJECT_ID` *(ganti dengan project ID Anda)*
- **Dataset**: `production`
- **API Version**: `2023-12-01`

### ⚠️ Security Note
**Jangan pernah share project ID asli Anda di repository publik. Gunakan environment variables dan pastikan `.env` ada di `.gitignore`.**

## 🎨 Styling & Design

### Design System
- **Colors**: Custom color palette dengan Tailwind
- **Typography**: Modern font stack
- **Spacing**: Consistent spacing scale
- **Animations**: GSAP-powered smooth animations

### Responsive Breakpoints
- Mobile: `< 640px`
- Tablet: `640px - 1024px`
- Desktop: `> 1024px`

## 📱 Features Detail

### Frontend Features
- **Hero Section** - Animated introduction
- **About Section** - Personal description
- **Projects Showcase** - Portfolio projects dengan filtering
- **Skills Display** - Technical skills dengan progress bars
- **Experience Timeline** - Work experience timeline
- **Contact Section** - Contact information dan social links

### CMS Features
- **Project Management** - Add/edit/delete projects
- **Content Editor** - Rich text editor untuk descriptions
- **Image Upload** - Drag & drop image upload
- **Real-time Preview** - Live preview perubahan
- **SEO Optimization** - Meta tags dan descriptions

## 🚀 Development Commands

### Frontend
```bash
npm run dev      # Start development server
npm run build    # Build untuk production
npm run preview  # Preview production build
```

### CMS
```bash
npm run dev      # Start Sanity Studio
sanity deploy    # Deploy Sanity Studio
sanity dataset export production backup.tar.gz  # Backup dataset
```

## 🔗 API Integration

### Sanity Client Setup
```javascript
// Sanity client configuration
const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  useCdn: true,
  apiVersion: '2023-12-01'
});
```

### Sample GROQ Queries
```javascript
// Fetch all projects
const projectsQuery = `*[_type == "project"] | order(order asc)`;

// Fetch featured projects
const featuredProjectsQuery = `*[_type == "project" && featured == true]`;

// Fetch skills by category
const skillsQuery = `*[_type == "skill"] | order(name asc)`;
```

## 📊 Performance Optimization

### Frontend Optimizations
- ✅ Code splitting per route
- ✅ Lazy loading untuk images
- ✅ Bundle optimization dengan Vite
- ✅ CDN untuk Sanity assets
- ✅ WebP format untuk images

### CMS Optimizations
- ✅ Query projections untuk reduce payload
- ✅ Image transformations untuk optimal size
- ✅ CDN untuk content delivery
- ✅ Caching untuk static content

## 🔐 Security

### Best Practices
- ✅ Environment variables untuk sensitive data
- ✅ Input validation dan sanitization
- ✅ HTTPS enforcement di production
- ✅ Content Security Policy headers
- ✅ No hardcoded secrets

## 🧪 Testing

### Testing Strategy
- **Unit Testing** - Component testing dengan Vitest
- **Integration Testing** - API integration testing
- **E2E Testing** - End-to-end user flows
- **Performance Testing** - Web Vitals monitoring

## 📈 Deployment

### Frontend Deployment Options
- **Vercel** - Recommended untuk Vue.js
- **Netlify** - Dengan continuous deployment
- **GitHub Pages** - Untuk static hosting
- **AWS S3 + CloudFront** - Untuk enterprise

### CMS Deployment
- **Sanity Hosted** - Managed hosting oleh Sanity
- **Self-hosted** - Custom deployment (optional)

## 📝 Documentation Lengkap

Untuk dokumentasi yang lebih detail, silakan merujuk ke:

1. **[DOCUMENTASI-LENGKAP.md](./DOCUMENTASI-LENGKAP.md)** - Dokumentasi umum lengkap
2. **[TEKNIS-DETAIL.md](./TEKNIS-DETAIL.md)** - Dokumentasi teknis mendalam
3. **[SETUP-INSTALLASI.md](./SETUP-INSTALLASI.md)** - Panduan setup detail

## 🆘 Troubleshooting

### Common Issues

#### Port Already in Use
```bash
# Vite otomatis akan mencari port alternatif
# Atau force specific port:
npm run dev -- --port 3000
```

#### Module Not Found
```bash
# Delete node_modules dan reinstall
rm -rf node_modules package-lock.json
npm install
```

#### Sanity Connection Error
```bash
# Cek environment variables
# Cek internet connection
# Cek Sanity project ID dan dataset
```

### Debug Tools
- **Vue DevTools** - Browser extension untuk Vue debugging
- **Sanity Vision** - GROQ query testing tool
- **Browser DevTools** - Network dan performance monitoring

## 🤝 Contributing

### Development Workflow
1. Fork repository (jika tersedia)
2. Create feature branch
3. Commit perubahan dengan message yang deskriptif
4. Push ke branch
5. Create pull request

### Code Standards
- Gunakan ESLint untuk code consistency
- Follow Vue.js style guide
- Tulis tests untuk new features
- Update documentation untuk perubahan

## 📞 Support

### Developer Contact
- **Name**: Farhan
- **Role**: Web Developer
- **Title**: Farhan-Web Developer

### Technical Support
1. Cek dokumentasi yang tersedia
2. Review error messages dengan teliti
3. Gunakan debug tools yang tersedia
4. Search di documentation resmi

## 📚 Resources

### Official Documentation
- [Vue.js Documentation](https://vuejs.org/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Sanity.io Documentation](https://www.sanity.io/docs)
- [GSAP Documentation](https://greensock.com/docs/)

### Learning Resources
- [Vue.js Guide](https://vuejs.org/guide/)
- [Tailwind CSS Playground](https://play.tailwindcss.com/)
- [Sanity.io Tutorials](https://www.sanity.io/docs/getting-started)
- [GSAP Learning Center](https://greensock.com/learning/)

## 📄 License

Project ini dibuat untuk keperluan portfolio pribadi. Silakan digunakan sebagai reference untuk project serupa.

---

**⭐ Jika project ini membantu, jangan lupa untuk memberikan bintang!**

**Last Updated**: Desember 2024  
**Version**: 1.0.0  
**Status**: Active Development

---

*Made with ❤️ by Farhan*