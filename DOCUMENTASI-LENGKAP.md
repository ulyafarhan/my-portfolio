# 📚 DOKUMENTASI LENGKAP PROJECT MY-PORTFOLIO

## 🎯 Deskripsi Project

**My Portfolio** adalah sebuah aplikasi portfolio modern yang dibangun menggunakan teknologi web terkini. Project ini terdiri dari dua bagian utama:

1. **Frontend Portfolio** - Aplikasi portfolio interaktif berbasis Vue.js 3
2. **CMS Backend** - Content Management System berbasis Sanity.io untuk mengelola konten portfolio

## 📁 Struktur Project

```
my-portfolio/
├── .hintrc                           # Konfigurasi Webhint untuk linting HTML/CSS
├── my-portfolio-cms/                 # Folder CMS Backend (Sanity.io)
│   ├── .git_disabled/               # Repository Git (dinonaktifkan)
│   ├── .gitignore                   # File ignore untuk Git
│   ├── .sanity/                     # Folder runtime Sanity
│   │   └── runtime/                 # File runtime untuk development
│   │       ├── app.js
│   │       └── index.html
│   ├── eslint.config.mjs            # Konfigurasi ESLint untuk CMS
│   └── node_modules/                # Dependencies CMS
└── my-portfolio-frontend/           # Folder Frontend Portfolio
    ├── .env                         # Environment variables
    ├── .gitignore                   # File ignore untuk Git
    ├── index.html                   # Entry point HTML
    ├── node_modules/                # Dependencies Frontend
    └── .vite/                       # Cache dan build Vite
```

## 🛠️ Teknologi yang Digunakan

### Frontend Portfolio
- **Vue.js 3** - Progressive JavaScript Framework
- **Vite** - Build tool dan development server yang cepat
- **Tailwind CSS** - Utility-first CSS framework
- **GSAP** - GreenSock Animation Platform untuk animasi smooth
- **Pinia** - State management untuk Vue.js
- **Vue Router** - Client-side routing
- **Sanity Client** - Untuk komunikasi dengan CMS

### CMS Backend (Sanity.io)
- **Sanity Studio** - Content Management System
- **Sanity.io** - Backend-as-a-Service untuk content
- **TypeScript** - Superset JavaScript dengan type safety
- **ESLint** - Code linting untuk menjaga kualitas kode

## 🔧 Konfigurasi Environment

### Frontend Environment (.env)
```
VITE_SANITY_PROJECT_ID="YOUR_SANITY_PROJECT_ID"
VITE_SANITY_DATASET="production"
```

### CMS Configuration
- **Project ID**: `YOUR_SANITY_PROJECT_ID` *(ganti dengan project ID Anda)*
- **Dataset**: `production`
- **Sanity Studio**: Running di port default Sanity

### ⚠️ Catatan Keamanan
**Project ID yang digunakan adalah placeholder. Ganti `YOUR_SANITY_PROJECT_ID` dengan project ID Sanity Anda yang sebenarnya. Jangan pernah share project ID asli di repository publik.**

## 🚀 Getting Started

### Prerequisites
- Node.js (versi 16 atau lebih baru)
- npm atau yarn
- Git (optional)

### Instalasi Frontend

1. Masuk ke folder frontend:
```bash
cd my-portfolio-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Jalankan development server:
```bash
npm run dev
```

Frontend akan berjalan di `http://localhost:5174` (port bisa berubah jika 5173 sudah digunakan)

### Instalasi CMS Backend

1. Masuk ke folder CMS:
```bash
cd my-portfolio-cms
```

2. Install dependencies:
```bash
npm install
```

3. Jalankan Sanity Studio:
```bash
npm run dev
```

## 📋 Fitur-Fitur Utama

### Frontend Portfolio
- **Responsive Design** - Tampilan yang optimal di semua device
- **Animasi Smooth** - Menggunakan GSAP untuk animasi yang fluid
- **Modern UI/UX** - Desain modern dengan Tailwind CSS
- **Dynamic Content** - Konten yang diambil dari Sanity CMS
- **Vue DevTools Integration** - Debugging tools untuk development

### CMS Sanity Studio
- **Content Management** - Mengelola konten portfolio dengan mudah
- **Rich Text Editor** - Editor teks kaya untuk konten
- **Image Management** - Manajemen gambar dengan optimasi
- **Real-time Preview** - Preview perubahan secara real-time
- **TypeScript Support** - Type safety untuk development

## 🔍 Detail Teknis

### Frontend Architecture

#### Dependencies Utama (berdasarkan node_modules):
- **@vue** - Core Vue.js framework
- **@vitejs** - Build tools dan development server
- **@tailwindcss** - CSS framework
- **gsap** - Animation library
- **@sanity/client** - Sanity client untuk data fetching
- **@portabletext** - Portable text untuk rich content
- **@heroicons** - Icon library
- **pinia** - State management
- **vue-router** - Routing

#### Development Tools:
- **Vite** - Module bundler yang cepat
- **ESLint** - Code linting
- **Autoprefixer** - CSS vendor prefixing
- **PostCSS** - CSS processing

### CMS Architecture

#### Dependencies Utama:
- **@sanity** - Sanity framework dan tools
- **eslint** - Code linting dengan konfigurasi Sanity
- **TypeScript** - Type safety

#### Konfigurasi ESLint:
```javascript
import studio from '@sanity/eslint-config-studio'
export default [...studio]
```

## 🎨 Styling dan Desain

### Tailwind CSS Configuration
- **Utility-first approach** - Menggunakan class utilities Tailwind
- **Responsive breakpoints** - Mobile-first responsive design
- **Custom animations** - Animasi custom dengan Tailwind
- **Dark mode support** - Mode gelap terintegrasi

### GSAP Animations
- **ScrollTrigger** - Animasi berbasis scroll position
- **Timeline** - Animasi berurutan yang kompleks
- **Easing functions** - Transisi yang smooth dan natural

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

### Optimizations
- **Mobile-first approach** - Desain dimulai dari mobile
- **Touch-friendly** - Interface yang ramah sentuhan
- **Performance optimized** - Loading cepat di mobile

## 🔐 Security

### Environment Variables
- **Sanity Project ID** - Disimpan di environment variables
- **Dataset configuration** - Terpisah dari kode
- **No hardcoded secrets** - Tidak ada secret yang hardcoded

### Best Practices
- **Content Security Policy** - Header keamanan yang proper
- **Input validation** - Validasi input di frontend dan backend
- **HTTPS enforcement** - Wajib menggunakan HTTPS di production

## 🚀 Performance

### Frontend Optimizations
- **Code splitting** - Membagi kode untuk loading yang lebih cepat
- **Lazy loading** - Komponen dimuat saat dibutuhkan
- **Image optimization** - Gambar dioptimasi untuk web
- **Bundle size optimization** - Ukuran bundle diminimalkan

### Vite Features
- **Hot Module Replacement (HMR)** - Update tanpa reload penuh
- **Fast refresh** - Perubahan kode terlihat instan
- **Optimized builds** - Build yang dioptimasi untuk production

## 🛠️ Development Workflow

### Development Server
```bash
npm run dev     # Jalankan development server
npm run build   # Build untuk production
npm run preview # Preview hasil build
```

### Linting dan Code Quality
- **ESLint** - Memastikan kode sesuai standar
- **Prettier** - Format kode yang konsisten
- **TypeScript** - Type checking untuk mencegah error

## 📊 Sanity CMS Integration

### Content Types
- **Projects** - Daftar project portfolio
- **Skills** - Keahlian dan teknologi
- **Experience** - Pengalaman kerja
- **Education** - Pendidikan
- **Blog Posts** - Artikel dan tulisan

### API Integration
- **Sanity Client** - Client library untuk komunikasi
- **GROQ Query** - Query language untuk fetching data
- **Real-time updates** - Update konten secara real-time
- **Image URL builder** - Optimasi gambar otomatis

## 🎯 Deployment

### Frontend Deployment
- **Static hosting** - Bisa di-deploy di Netlify, Vercel, atau GitHub Pages
- **CDN integration** - Konten di-deliver melalui CDN
- **Environment variables** - Konfigurasi production di hosting

### CMS Deployment
- **Sanity Hosting** - CMS di-host di Sanity.io
- **Custom domain** - Dapat menggunakan domain custom
- **Team collaboration** - Multi-user content management

## 🔧 Troubleshooting

### Common Issues

1. **Port already in use**
   - Solusi: Vite otomatis mencari port yang tersedia
   - Port default: 5173, alternatif: 5174, 5175, dst

2. **Module not found**
   - Solusi: Jalankan `npm install` untuk install dependencies
   - Cek file package.json untuk dependencies yang benar

3. **Sanity connection error**
   - Solusi: Cek environment variables di file .env
   - Pastikan project ID dan dataset benar

4. **Build error**
   - Solusi: Cek ESLint configuration
   - Pastikan semua dependencies terinstall

### Development Tips
- Gunakan Vue DevTools untuk debugging
- Monitor network tab untuk Sanity API calls
- Gunakan Sanity Vision untuk testing GROQ queries

## 📚 Resources

### Documentation
- [Vue.js Documentation](https://vuejs.org/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Sanity.io Documentation](https://www.sanity.io/docs)
- [GSAP Documentation](https://greensock.com/docs/)

### Tools
- Vue DevTools Browser Extension
- Sanity Studio
- VS Code dengan Vue extension
- Postman untuk API testing

## 🔄 Version Control

### Git Configuration
- **Frontend**: Git repository terpisah
- **CMS**: Git repository dalam folder `.git_disabled`
- **Ignore files**: Konfigurasi .gitignore untuk masing-masing project

### Best Practices
- Commit message yang deskriptif
- Branching strategy yang jelas
- Regular commits untuk tracking perubahan

## 📈 Future Enhancements

### Planned Features
- **Multi-language support** - Dukungan bahasa Indonesia dan Inggris
- **Dark/Light theme toggle** - Switch tema dengan animasi
- **Advanced animations** - Animasi yang lebih kompleks dengan GSAP
- **PWA support** - Progressive Web App untuk offline access
- **Contact form integration** - Form kontak dengan email service

### Performance Improvements
- **Image lazy loading** - Lazy loading untuk gambar
- **Code splitting per route** - Splitting berdasarkan route
- **Service worker** - Caching untuk performance yang lebih baik
- **CDN optimization** - Optimasi CDN untuk assets

## 📞 Support dan Kontak

### Developer
- **Nama**: Farhan
- **Role**: Web Developer
- **Title**: Farhan-Web Developer (terlihat di index.html)

### Technical Support
- Pastikan semua dependencies terinstall dengan benar
- Cek console untuk error messages
- Gunakan development tools untuk debugging
- Referensi ke dokumentasi resmi untuk issue-specific

---

*Dokumentasi ini dibuat untuk memberikan pemahaman komprehensif tentang project My Portfolio. Untuk update dan perubahan, selalu refer ke kode terbaru dan commit history.*

**Last Updated**: [Tanggal dokumentasi dibuat]
**Version**: 1.0.0
**Status**: Active Development