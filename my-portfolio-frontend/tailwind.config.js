const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // 1. Warna Brand Anda (Sudah Benar)
        primary: {
          DEFAULT: colors.blue[600], // #2563EB
          light: colors.blue[500], // #3B82F6
          dark: colors.blue[700],  // #1D4ED8
        },
        
        // 2. ATURAN WARNA SEMANTIK (TAMBAHAN BARU)
        // Ini mendefinisikan 'peran' untuk setiap warna
        background: 'var(--color-background)', // Latar belakang utama halaman
        surface: 'var(--color-surface)',     // Latar belakang kartu, header, dll.
        'text-primary': 'var(--color-text-primary)',   // Teks utama, judul
        'text-secondary': 'var(--color-text-secondary)', // Teks abu-abu, subjudul
        'border-default': 'var(--color-border-default)', // Garis pemisah
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}