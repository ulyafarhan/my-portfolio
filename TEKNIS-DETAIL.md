# 🔧 DOKUMENTASI TEKNIS DETAIL MY-PORTFOLIO

## 🏗️ Arsitektur Sistem

### High-Level Architecture
```
┌─────────────────────────────────────────────────────────────┐
│                     USER BROWSER                           │
├─────────────────────────────────────────────────────────────┤
│                    Frontend Portfolio                       │
│  ┌─────────────┐ ┌──────────────┐ ┌─────────────────────┐  │
│  │   Vue.js 3  │ │  Tailwind CSS │ │      GSAP          │  │
│  │  Components │ │   Styling     │ │   Animations       │  │
│  └──────┬──────┘ └──────┬───────┘ └──────────┬────────┘  │
│         │               │                     │           │
│  ┌──────┴───────────────┴─────────────────────┴────────┐  │
│  │                    Vite Build Tool                  │  │
│  └────────────────────┬──────────────────────────────┘  │
└───────────────────────┼──────────────────────────────────┘
                        │
                        │ HTTPS/API Calls
                        │
┌───────────────────────┼──────────────────────────────────┐
│                       ▼                                   │
│                Sanity.io Backend                           │
│  ┌────────────────────────────────────────────────────┐  │
│  │              Sanity CMS Studio                     │  │
│  │  ┌─────────────┐ ┌──────────────┐ ┌──────────┐  │  │
│  │  │   GROQ      │ │   Schema     │ │  TypeScript│  │  │
│  │  │  Queries    │ │  Definition  │ │   Types    │  │  │
│  │  └─────────────┘ └──────────────┘ └──────────┘  │  │
│  └────────────────────────┬───────────────────────────┘  │
│                           │                                │
│  ┌────────────────────────┴───────────────────────────┐  │
│  │              Sanity API & CDN                     │  │
│  └────────────────────────┬───────────────────────────┘  │
└───────────────────────────┼────────────────────────────────┘
                           │
                           ▼
                  Content Database
```

## 🎯 Dependency Analysis

### Frontend Dependencies (Analysis dari node_modules)

#### Core Framework
```json
{
  "vue": "^3.5.x",
  "@vue/compiler-sfc": "^3.5.x",
  "@vue/devtools-api": "^6.x",
  "@vue/reactivity": "^3.5.x",
  "@vue/runtime-core": "^3.5.x",
  "@vue/runtime-dom": "^3.5.x",
  "@vue/shared": "^3.5.x"
}
```

#### Build Tools & Development
```json
{
  "vite": "^7.2.x",
  "@vitejs/plugin-vue": "^5.x",
  "autoprefixer": "^10.x",
  "postcss": "^8.x",
  "tailwindcss": "^3.x"
}
```

#### Animation & UI
```json
{
  "gsap": "^3.x",
  "@heroicons/vue": "^2.x",
  "@headlessui/vue": "^1.x"
}
```

#### State Management & Routing
```json
{
  "pinia": "^2.x",
  "vue-router": "^4.x"
}
```

#### Content Management
```json
{
  "@sanity/client": "^6.x",
  "@portabletext/vue": "^1.x",
  "@sanity/image-url": "^1.x"
}
```

#### Utilities
```json
{
  "axios": "^1.x",
  "motion": "^10.x",
  "@vueuse/core": "^10.x"
}
```

### CMS Dependencies (Sanity Studio)

#### Sanity Core
```json
{
  "@sanity/base": "^2.x",
  "@sanity/core": "^2.x",
  "@sanity/default-layout": "^2.x",
  "@sanity/default-login": "^2.x",
  "@sanity/desk-tool": "^2.x",
  "@sanity/eslint-config-studio": "^2.x"
}
```

## 🎨 Frontend Technical Details

### Project Structure Analysis
```
my-portfolio-frontend/
├── index.html                    # Entry point HTML
├── .env                          # Environment variables
├── .gitignore                    # Git ignore rules
├── node_modules/                 # Dependencies
│   ├── .vite/                   # Vite cache & build artifacts
│   │   └── deps/                # Pre-bundled dependencies
│   │       ├── vue.js           # Vue.js core
│   │       ├── vue-router.js    # Vue Router
│   │       ├── pinia.js         # Pinia state management
│   │       ├── gsap.js          # GSAP animations
│   │       ├── @sanity_client.js # Sanity client
│   │       └── ...
│   ├── .vite-temp/              # Vite temporary files
│   └── .vue-global-types/       # Vue TypeScript definitions
└── [src/]                       # Source code (tidak terlihat di current state)
```

### Vite Configuration Analysis

#### Build Process
```javascript
// Vite optimizes dependencies:
- Pre-bundling untuk mengurangi module requests
- Cache untuk faster rebuilds
- Hot Module Replacement (HMR)
- Tree-shaking untuk smaller bundles
```

#### Development Server
```
Port: 5174 (fallback dari 5173)
Features:
- Hot Module Replacement
- Vue DevTools integration
- Fast refresh
- Source maps
```

### Vue.js Architecture

#### Component Structure (Expected)
```
src/
├── main.js                 # Entry point
├── App.vue                 # Root component
├── router/                 # Vue Router configuration
│   └── index.js
├── store/                  # Pinia stores
│   ├── index.js
│   └── modules/
├── components/             # Reusable components
│   ├── common/
│   ├── layout/
│   └── sections/
├── views/                  # Page components
│   ├── Home.vue
│   ├── About.vue
│   ├── Projects.vue
│   └── Contact.vue
├── composables/            # Vue composables
├── utils/                  # Utility functions
├── assets/                 # Static assets
│   ├── images/
│   ├── styles/
│   └── icons/
└── services/               # API services
    └── sanity.js
```

#### State Management (Pinia)
```javascript
// Expected store structure:
{
  portfolio: {
    projects: [],
    skills: [],
    experiences: [],
    loading: boolean,
    error: string|null
  },
  ui: {
    theme: 'light'|'dark',
    sidebarOpen: boolean,
    currentSection: string
  }
}
```

### Styling Architecture (Tailwind CSS)

#### Configuration
```javascript
// tailwind.config.js (expected)
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#YOUR_PRIMARY_COLOR',
        secondary: '#YOUR_SECONDARY_COLOR',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      }
    },
  },
  plugins: [],
}
```

#### Responsive Design System
```css
/* Breakpoints */
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px
- 2xl: 1536px

/* Custom utilities */
- Animation utilities dengan GSAP
- Scroll-triggered animations
- Intersection Observer untuk reveal effects
```

### Animation System (GSAP)

#### Core Features
```javascript
// GSAP plugins yang digunakan:
- ScrollTrigger: Animasi berbasis scroll
- MotionPath: Animasi mengikuti path
- TextPlugin: Animasi teks
- DrawSVG: Animasi SVG drawing
```

#### Animation Patterns
```javascript
// Scroll-triggered animations
ScrollTrigger.create({
  trigger: '.section',
  start: 'top 80%',
  end: 'bottom 20%',
  animation: gsap.from('.element', {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power2.out'
  })
});
```

## 🗃️ Sanity CMS Technical Details

### Sanity Studio Architecture

#### Project Configuration
```javascript
// sanity.config.js (expected)
export default defineConfig({
  name: 'my-portfolio-cms',
  title: 'My Portfolio CMS',
  projectId: '',
  dataset: 'production',
  plugins: [
    deskTool(),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
})
```

#### Schema Types (Expected)
```javascript
// Schema structure:
{
  project: {
    name: 'project',
    title: 'Project',
    fields: [
      { name: 'title', type: 'string' },
      { name: 'description', type: 'text' },
      { name: 'image', type: 'image' },
      { name: 'technologies', type: 'array' },
      { name: 'liveUrl', type: 'url' },
      { name: 'githubUrl', type: 'url' },
      { name: 'featured', type: 'boolean' },
      { name: 'order', type: 'number' }
    ]
  },
  skill: {
    name: 'skill',
    title: 'Skill',
    fields: [
      { name: 'name', type: 'string' },
      { name: 'level', type: 'number' },
      { name: 'category', type: 'string' },
      { name: 'icon', type: 'image' }
    ]
  },
  experience: {
    name: 'experience',
    title: 'Experience',
    fields: [
      { name: 'company', type: 'string' },
      { name: 'position', type: 'string' },
      { name: 'description', type: 'text' },
      { name: 'startDate', type: 'date' },
      { name: 'endDate', type: 'date' },
      { name: 'current', type: 'boolean' }
    ]
  }
}
```

### GROQ Query Patterns

#### Basic Queries
```javascript
// Fetch all projects
const projectsQuery = `*[_type == "project"] | order(order asc)`;

// Fetch featured projects
const featuredProjectsQuery = `*[_type == "project" && featured == true] | order(order asc)`;

// Fetch skills by category
const skillsByCategoryQuery = `*[_type == "skill"] | order(name asc)`;
```

#### Complex Queries
```javascript
// Fetch project with specific technology
const projectsByTechQuery = `*[_type == "project" && "${technology}" in technologies[]->name] | order(order asc)`;

// Fetch experience with date filtering
const currentExperienceQuery = `*[_type == "experience" && current == true] | order(startDate desc)`;
```

### Sanity Client Integration

#### Configuration
```javascript
// sanity.js service
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  useCdn: true, // Use CDN for better performance
  apiVersion: '2023-12-01', // Use current date for API version
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
export default client;
```

#### Data Fetching Patterns
```javascript
// Vue composable untuk fetching data
import { ref, onMounted } from 'vue';
import client from '@/services/sanity.js';

export function useSanity(query) {
  const data = ref(null);
  const loading = ref(true);
  const error = ref(null);

  const fetchData = async () => {
    try {
      loading.value = true;
      const result = await client.fetch(query);
      data.value = result;
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  };

  onMounted(fetchData);

  return { data, loading, error, refetch: fetchData };
}
```

## 🚀 Performance Optimization

### Frontend Optimization Strategies

#### Bundle Optimization
```javascript
// Vite build configuration
{
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue', 'vue-router', 'pinia'],
          animations: ['gsap', 'motion'],
          sanity: ['@sanity/client', '@portabletext/vue']
        }
      }
    }
  }
}
```

#### Image Optimization
```javascript
// Sanity image URL builder with optimization
export const getOptimizedImageUrl = (source, width = 800) => {
  return urlFor(source)
    .width(width)
    .format('webp') // Use WebP format
    .quality(80) // 80% quality
    .url();
};
```

#### Lazy Loading Implementation
```javascript
// Vue directive untuk lazy loading
const lazyLoad = {
  mounted(el, binding) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          el.src = binding.value;
          imageObserver.unobserve(el);
        }
      });
    });
    imageObserver.observe(el);
  }
};
```

### CMS Optimization

#### Query Optimization
```javascript
// Use projections untuk mengurangi data yang di-fetch
const optimizedQuery = `*[_type == "project"] {
  _id,
  title,
  description,
  "imageUrl": image.asset->url,
  technologies[]->name,
  liveUrl,
  githubUrl
}`;
```

#### CDN Configuration
```javascript
// Enable CDN untuk faster content delivery
const client = createClient({
  projectId: 'your-project-id',
  dataset: 'production',
  useCdn: process.env.NODE_ENV === 'production', // Only use CDN in production
  apiVersion: '2023-12-01'
});
```

## 🔐 Security Implementation

### Environment Security
```javascript
// .env validation
const requiredEnvVars = ['VITE_SANITY_PROJECT_ID', 'VITE_SANITY_DATASET'];

requiredEnvVars.forEach(envVar => {
  if (!import.meta.env[envVar]) {
    throw new Error(`Missing required environment variable: ${envVar}`);
  }
});
```

### Content Security Policy
```javascript
// Security headers untuk production
const securityHeaders = {
  'Content-Security-Policy': `
    default-src 'self';
    script-src 'self' 'unsafe-inline' 'unsafe-eval';
    style-src 'self' 'unsafe-inline';
    img-src 'self' data: https:;
    connect-src 'self' https://4ur4pk1e.api.sanity.io;
  `.replace(/\s{2,}/g, ' ').trim()
};
```

### Input Validation
```javascript
// Input sanitization untuk form submission
const sanitizeInput = (input) => {
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<[^>]+>/g, '')
    .trim();
};
```

## 🧪 Testing Strategy

### Unit Testing Setup
```javascript
// Vue component testing dengan Vitest
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Component from '@/components/Component.vue';

describe('Component', () => {
  it('renders properly', () => {
    const wrapper = mount(Component, {
      props: { title: 'Test Title' }
    });
    expect(wrapper.text()).toContain('Test Title');
  });
});
```

### Integration Testing
```javascript
// API integration testing
import { describe, it, expect, vi } from 'vitest';
import client from '@/services/sanity.js';

vi.mock('@/services/sanity.js', () => ({
  default: {
    fetch: vi.fn()
  }
}));

describe('Sanity Integration', () => {
  it('fetches projects successfully', async () => {
    const mockProjects = [{ _id: '1', title: 'Project 1' }];
    client.fetch.mockResolvedValue(mockProjects);
    
    const result = await client.fetch('*[_type == "project"]');
    expect(result).toEqual(mockProjects);
  });
});
```

## 📊 Monitoring & Analytics

### Performance Monitoring
```javascript
// Performance metrics collection
const reportWebVitals = (metric) => {
  // Send to analytics service
  if (metric.name === 'LCP') {
    console.log('Largest Contentful Paint:', metric.value);
  }
  if (metric.name === 'FID') {
    console.log('First Input Delay:', metric.value);
  }
};
```

### Error Tracking
```javascript
// Global error handler
window.addEventListener('error', (event) => {
  console.error('Global error:', event.error);
  // Send to error tracking service
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
  // Send to error tracking service
});
```

## 🔄 Deployment Pipeline

### Frontend Deployment
```yaml
# Deployment steps untuk Vercel/Netlify
1. Install dependencies: npm ci
2. Run tests: npm test
3. Build application: npm run build
4. Deploy to CDN
5. Run smoke tests
6. Monitor deployment
```

### CMS Deployment
```yaml
# Sanity Studio deployment
1. Sanity CLI login
2. Deploy schema changes
3. Verify content integrity
4. Update API version if needed
5. Monitor API usage
```

## 📈 Scalability Considerations

### Frontend Scalability
- **Code splitting** berdasarkan routes
- **Lazy loading** untuk komponen besar
- **Service worker** untuk offline functionality
- **CDN** untuk asset delivery

### Backend Scalability
- **API rate limiting** untuk prevent abuse
- **Caching strategy** untuk reduce API calls
- **Content optimization** untuk reduce payload size
- **Database indexing** untuk faster queries

---

*Dokumentasi teknis ini memberikan insight mendalam tentang arsitektur dan implementasi project. Untuk implementasi spesifik, referensi ke source code dan konfigurasi aktual.*