<template>
  <div class="min-h-screen bg-background text-text-primary transition-colors duration-200 font-sans">
    <header class="sticky top-0 z-50 w-full bg-surface/80 backdrop-blur-md border-b border-border-default shadow-sm">
      <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
        <RouterLink to="/" class="flex items-center gap-3 text-2xl font-bold text-text-primary focus:outline-none">
          <img src="/logo.svg" alt="Logo Ulya Farhan" class="w-9 h-9" />
          <span> Ulya <span class="text-primary-light">Farhan</span> </span>
        </RouterLink>
        <NavMenu :items="navItems" :activeHref="activePath" />
        <div class="flex items-center space-x-4">
          <VButton href="#contact" variant="primary" class="hidden sm:block">
            Hubungi Saya
          </VButton>
        </div>
      </nav>
    </header>
    <main>
      <RouterView />
    </main>
    <footer id="contact" class="bg-surface border-t border-border-default mt-24">
      <div class="container mx-auto px-6 py-16">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div class="md:col-span-1">
            <h3 class="text-2xl font-bold text-text-primary mb-4">
              Ulya <span class="text-primary-light">Farhan</span>
            </h3>
            <p class="text-text-secondary max-w-xs leading-relaxed">
              Seorang Web Developer yang bersemangat menciptakan pengalaman digital yang bersih, modern, dan fungsional.
            </p>
          </div>
          <div>
            <h4 class="text-lg font-semibold text-text-primary mb-4">Kontak</h4>
            <ul class="space-y-3">
              <li>
                <a href="mailto:muhammadulyafarhan@gmail.com" class="flex items-center gap-3 text-text-secondary hover:text-primary-light transition-colors">
                  <EnvelopeIcon class="w-5 h-5 flex-shrink-0" />
                  <span>muhammadulyafarhan@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/6282372268996" target="_blank" class="flex items-center gap-3 text-text-secondary hover:text-primary-light transition-colors">
                  <ChatBubbleLeftRightIcon class="w-5 h-5 flex-shrink-0" />
                  <span>WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 class="text-lg font-semibold text-text-primary mb-4">Media Sosial</h4>
            <SocialIcons />
          </div>
        </div>
      </div>
      <div class="bg-background py-6 border-t border-border-default">
        <div class="container mx-auto px-6 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
          <p class="text-text-secondary text-sm">
            © {{ new Date().getFullYear() }} Ulya Farhan. Hak cipta dilindungi.
          </p>
          <p class="text-text-secondary text-sm mt-2 sm:mt-0 flex items-center gap-1">
            <MapPinIcon class="w-4 h-4" />
            Dibuat di Pidie Jaya, Aceh
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { computed } from 'vue' 
import { RouterLink, RouterView, useRoute } from 'vue-router'
import VButton from './components/VButton.vue'
import NavMenu from './components/NavMenu.vue' 

import { EnvelopeIcon, MapPinIcon, ChatBubbleLeftRightIcon } from '@heroicons/vue/24/outline'
import SocialIcons from './components/SocialIcons.vue'

const route = useRoute() 

const navItems = [
  { label: 'Beranda', href: '/' },
  { label: 'Proyek', href: '/projects' },
  { label: 'Artikel', href: '/blog' },
  { label: 'Kontak', href: '#contact' }, 
]

const activePath = computed(() => {
  if (route.path.startsWith('/blog')) return '/blog'
  return route.path
})
</script>