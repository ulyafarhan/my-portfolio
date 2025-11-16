# 🚀 PANDUAN SETUP & INSTALLASI LENGKAP MY-PORTFOLIO

## 📋 Prasyarat Sistem

### Hardware Requirements
- **RAM**: Minimum 4GB, Recommended 8GB atau lebih
- **Storage**: Minimum 2GB free space
- **Processor**: Intel i3/AMD Ryzen 3 atau setara
- **Internet**: Koneksi stabil untuk download dependencies

### Software Requirements
- **Node.js**: Versi 16.0.0 atau lebih baru
- **npm**: Versi 7.0.0 atau lebih baru (terinstall dengan Node.js)
- **Git**: Versi 2.20.0 atau lebih baru (optional)
- **Text Editor**: VS Code, WebStorm, atau editor pilihan
- **Web Browser**: Chrome, Firefox, Safari, atau Edge (terbaru)

## 🔍 Pre-Installation Check

### 1. Cek Node.js dan npm
```bash
# Cek Node.js version
node --version
# Output expected: v16.x.x atau lebih baru

# Cek npm version
npm --version
# Output expected: 7.x.x atau lebih baru

# Cek npx availability
npx --version
# Output expected: 7.x.x atau lebih baru
```

### 2. Update Node.js (jika diperlukan)
```bash
# Windows - menggunakan Node.js installer
# Download dari: https://nodejs.org/

# macOS - menggunakan Homebrew
brew update
brew upgrade node

# Linux - menggunakan NodeSource
# curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
# sudo apt-get install -y nodejs
```

## 📁 Setup Project Structure

### 1. Clone atau Download Project
```bash
# Jika menggunakan Git
# git clone [repository-url] my-portfolio
# cd my-portfolio

# Jika manual download, extract ke folder my-portfolio
# cd my-portfolio
```

### 2. Verifikasi Struktur Folder
```bash
# Command untuk melihat struktur
ls -la my-portfolio/

# Expected output:
# .hintrc
# my-portfolio-cms/
# my-portfolio-frontend/
```

## ⚙️ Frontend Setup (my-portfolio-frontend)

### Step 1: Navigate ke Frontend Folder
```bash
cd my-portfolio-frontend
```

### Step 2: Install Dependencies
```bash
# Install dengan npm
npm install

# Alternatif dengan yarn (jika tersedia)
# yarn install

# Alternatif dengan pnpm (jika tersedia)
# pnpm install
```

#### Troubleshooting Installasi Dependencies

**Jika terjadi error permission:**
```bash
# macOS/Linux
sudo npm install

# Windows - run Command Prompt as Administrator
npm install
```

**Jika terjadi network error:**
```bash
# Gunakan registry alternatif
npm install --registry https://registry.npm.taobao.org/

# Atau clear cache terlebih dahulu
npm cache clean --force
npm install
```

**Jika terjadi dependency conflict:**
```bash
# Force install dengan legacy peer deps
npm install --legacy-peer-deps

# Atau delete node_modules dan install ulang
rm -rf node_modules package-lock.json
npm install
```

### Step 3: Verifikasi Environment Variables
```bash
# Cek file .env
cat .env

# Expected content:
# VITE_SANITY_PROJECT_ID="YOUR_SANITY_PROJECT_ID"
# VITE_SANITY_DATASET="production"
```

**Jika file .env tidak ada, buat manual:**
```bash
# Create .env file
echo 'VITE_SANITY_PROJECT_ID="YOUR_SANITY_PROJECT_ID"' > .env
echo 'VITE_SANITY_DATASET="production"' >> .env
```

### ⚠️ Important Security Note
**Ganti `YOUR_SANITY_PROJECT_ID` dengan project ID Sanity Anda yang sebenarnya. Jangan pernah share project ID asli di repository publik atau version control. Pastikan `.env` sudah ada di `.gitignore`.**

### Step 4: Jalankan Development Server
```bash
# Jalankan dev server
npm run dev

# Expected output:
# VITE v7.2.2  ready in XXXX ms
# ➜  Local:   http://localhost:5173/
# ➜  Network: use --host to expose
# ➜  Vue DevTools: Open http://localhost:5173/__devtools__/
```

#### Troubleshooting Development Server

**Jika port 5173 sudah digunakan:**
```bash
# Vite otomatis akan menggunakan port berikutnya (5174, 5175, dst)
# Atau force specific port
npm run dev -- --port 3000
```

**Jika terjadi build error:**
```bash
# Clear Vite cache
rm -rf node_modules/.vite
npm run dev
```

**Jika Vue DevTools tidak muncul:**
```bash
# Pastikan extension Vue DevTools terinstall di browser
# Atau akses manual: http://localhost:5173/__devtools__/
```

### Step 5: Verifikasi Frontend
1. Buka browser ke `http://localhost:5173/`
2. Cek console untuk error messages
3. Pastikan title page: "Farhan-Web Developer"
4. Cek Vue DevTools functionality

## 🗃️ CMS Setup (my-portfolio-cms)

### Step 1: Navigate ke CMS Folder
```bash
# Dari root project
cd my-portfolio-cms

# Atau dari frontend folder
cd ../my-portfolio-cms
```

### Step 2: Install Dependencies
```bash
# Install Sanity dependencies
npm install

# Jika terjadi error, coba:
npm install --legacy-peer-deps
```

#### Troubleshooting CMS Dependencies

**Jika terjadi peer dependency error:**
```bash
# Install dengan force
npm install --force

# Atau gunakan specific npm version
npx npm@latest install
```

**Jika terjadi build tools error:**
```bash
# Install build tools (Windows)
npm install --global windows-build-tools

# Install Python (untuk node-gyp)
# Download dari python.org
```

### Step 3: Sanity CLI Setup (jika diperlukan)
```bash
# Install Sanity CLI global (jika belum ada)
npm install -g @sanity/cli

# Login ke Sanity (jika diperlukan)
sanity login

# Init project (jika belum diinit)
# sanity init --project 4ur4pk1e --dataset production
```

### Step 4: Jalankan Sanity Studio
```bash
# Jalankan development server Sanity
npm run dev

# Alternatif menggunakan Sanity CLI
sanity dev
```

#### Expected Output:
```
✔ Sanity Studio running at http://localhost:3333/
```

### Step 5: Verifikasi CMS
1. Buka browser ke `http://localhost:3333/`
2. Login dengan Sanity account
3. Pastikan schema sudah ter-load dengan benar
4. Cek content types yang tersedia

## 🔧 Development Workflow

### Frontend Development
```bash
# Terminal 1 - Frontend server
cd my-portfolio-frontend
npm run dev

# Terminal 2 - Frontend build (untuk testing)
npm run build

# Terminal 3 - Preview build
npm run preview
```

### CMS Development
```bash
# Terminal 1 - CMS server
cd my-portfolio-cms
npm run dev

# Terminal 2 - Deploy schema changes
sanity deploy

# Terminal 3 - GraphQL playground
sanity graphql deploy
```

## 🧪 Testing dan Quality Assurance

### Frontend Testing
```bash
# Run linting
npm run lint

# Fix linting errors otomatis
npm run lint -- --fix

# Type checking (jika TypeScript)
npm run type-check

# Unit testing (jika tersedia)
npm test
```

### CMS Testing
```bash
# Run ESLint untuk Sanity
npm run lint

# Validate schema
sanity schema validate

# Check dataset consistency
sanity dataset check
```

## 📦 Build dan Deployment

### Frontend Build Process
```bash
# Production build
npm run build

# Expected output:
# dist/index.html
# dist/assets/ (CSS, JS, images)
# dist/manifest.json (jika PWA)
```

#### Build Troubleshooting

**Jika build gagal karena memory:**
```bash
# Increase Node.js memory limit
export NODE_OPTIONS="--max-old-space-size=4096"
npm run build
```

**Jika terjadi module resolution error:**
```bash
# Clear semua cache
rm -rf node_modules package-lock.json dist
npm install
npm run build
```

### CMS Deployment
```bash
# Deploy Sanity Studio
sanity deploy

# Deploy GraphQL API
sanity graphql deploy

# Deploy dataset changes
sanity dataset export production backup.tar.gz
```

## 🌐 Environment Configuration

### Development Environment
```bash
# Frontend .env
VITE_SANITY_PROJECT_ID="Your_Sanity_Project_ID"
VITE_SANITY_DATASET="production"
VITE_SANITY_API_VERSION="2023-12-01"

# Optional development settings
VITE_DEV_TOOLS=true
VITE_DEBUG=true
```

### Production Environment
```bash
# Frontend production .env
VITE_SANITY_PROJECT_ID="Your_Sanity_Project_ID"
VITE_SANITY_DATASET="production"
VITE_SANITY_API_VERSION="2023-12-01"
VITE_SITE_URL="https://yourdomain.com"

# Security settings
VITE_DEV_TOOLS=false
VITE_DEBUG=false
```

## 🔍 Debugging dan Error Handling

### Common Issues dan Solusi

#### 1. Module Not Found Error
```bash
# Error: Cannot find module 'package-name'
# Solusi:
npm install package-name
# Atau delete node_modules dan install ulang
rm -rf node_modules
npm install
```

#### 2. Port Already in Use
```bash
# Error: Port 5173 is already in use
# Solusi:
# Cari process yang menggunakan port
netstat -ano | findstr :5173    # Windows
lsof -i :5173                    # macOS/Linux

# Kill process (Windows)
taskkill /PID [PID] /F

# Kill process (macOS/Linux)
kill -9 [PID]
```

#### 3. Memory Leak
```bash
# Error: JavaScript heap out of memory
# Solusi:
export NODE_OPTIONS="--max-old-space-size=4096"
npm run dev
```

#### 4. Sanity Connection Error
```bash
# Error: Failed to fetch from Sanity
# Solusi:
# Cek environment variables
# Cek internet connection
# Cek Sanity project ID dan dataset
# Cek Sanity API status di dashboard
```

### Debug Tools

#### Frontend Debug
```bash
# Enable Vue DevTools
# Install extension di browser
# Buka http://localhost:5173/__devtools__/

# Enable Vite debug mode
DEBUG=vite:* npm run dev
```

#### CMS Debug
```bash
# Enable Sanity debug mode
DEBUG=sanity:* npm run dev

# Sanity CLI debug
sanity debug
```

## 📊 Performance Monitoring

### Frontend Performance
```bash
# Lighthouse audit
# Buka Chrome DevTools > Lighthouse > Generate report

# Web Vitals monitoring
npm install web-vitals

# Bundle analyzer
npm install --save-dev rollup-plugin-analyzer
```

### CMS Performance
```bash
# Sanity query performance
# Gunakan Sanity Vision untuk test query performance

# Dataset size monitoring
sanity dataset stats
```

## 🔧 Advanced Configuration

### Vite Configuration
```javascript
// vite.config.js (jika diperlukan)
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,
    host: true,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue', 'vue-router'],
          animations: ['gsap']
        }
      }
    }
  }
})
```

### Sanity Advanced Config
```javascript
// sanity.config.js
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'

export default defineConfig({
  name: 'my-portfolio-cms',
  title: 'My Portfolio CMS',
  projectId: 'Your_Sanity_Project_ID',
  dataset: 'production',
  plugins: [
    deskTool(),
    visionTool({
      defaultApiVersion: '2023-12-01',
      defaultDataset: 'production'
    })
  ],
  schema: {
    types: schemaTypes,
  },
})
```

## 📝 Maintenance dan Updates

### Regular Maintenance
```bash
# Update dependencies (monthly)
npm update

# Security audit
npm audit
npm audit fix

# Check for outdated packages
npm outdated
```

### Backup Strategy
```bash
# Backup Sanity dataset
sanity dataset export production backup-$(date +%Y%m%d).tar.gz

# Backup project files
git add .
git commit -m "Backup: $(date)"
git push origin main
```

### Performance Optimization
```bash
# Analyze bundle size
npm run build
npx vite-bundle-analyzer dist

# Optimize images
# Gunakan Sanity image transformations
# Implement lazy loading
# Use WebP format
```

## 🆘 Emergency Procedures

### Complete Reset
```bash
# Frontend reset
cd my-portfolio-frontend
rm -rf node_modules dist .vite
npm cache clean --force
npm install
npm run dev

# CMS reset
cd my-portfolio-cms
rm -rf node_modules .sanity
npm cache clean --force
npm install
npm run dev
```

### Recovery Procedures
```bash
# Git recovery (jika tersedia)
git status
git log --oneline
git reset --hard [commit-hash]

# Sanity recovery
sanity dataset import backup.tar.gz production
```

---

*Panduan ini memberikan langkah-langkah detail untuk setup dan maintenance project My Portfolio. Untuk update terbaru, selalu cek dokumentasi resmi dari masing-masing teknologi yang digunakan.*

**Support**: Jika mengalami masalah yang tidak dapat diselesaikan dengan panduan ini, silakan:
1. Cek error messages dengan teliti
2. Search di documentation resmi
3. Tanya di community forums
4. Hubungi developer project