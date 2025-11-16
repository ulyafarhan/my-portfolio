<template>
  <div>
    
    <section v-if="profileStore.profile" class="hero-section container mx-auto px-6 py-20 md:py-24 lg:py-12 mt-0">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        
        <div class="flex flex-col items-center md:items-start text-center md:text-left md:ml-12">
          <span class="text-primary-light font-semibold mb-2">HALO! SAYA</span>

          <TextType
            :text="[
              profileStore.profile.name, 
              'Web Developer', 
              'Mahasiswa',
              'Selamat Datang',
              'Di Portofolio Saya'
            ]"            
            as="h1"
            class="text-4xl md:text-5xl font-bold mb-6 text-text-primary md:text-left"
            :typingSpeed="70"
            :pauseDuration="1500"
            :deletingSpeed="40"
            :loop="true"
            :showCursor="true"
            cursorCharacter="_"
            :textColors="['#FFFFFF', '#3B82F6', '#FFFFFF']"
          />

          <div v-if="profileStore.profile.bio" class="text-lg text-text-secondary mb-8 max-w-lg prose dark:prose-invert md:text-left">
             <PortableText :value="profileStore.profile.bio" />
          </div>
          <div class="flex space-x-4">
            <VButton href="#contact" variant="primary" size="lg">
              Hubungi Saya
            </VButton>
            <VButton v-if="profileStore.profile.resumeUrl" :href="profileStore.profile.resumeUrl" target="_blank" variant="secondary" size="lg">
              Lihat CV
            </VButton>
          </div>
        </div>
        
        <div class="flex flex-col items-center justify-center space-y-6">
          <ProfileCard
            v-if="profileStore.profile.profileImage"
            name="Farhan"
            title="Web Developer"
            handle="ulyafarhan"
            status="Online"
            contact-text="Kontak"
            :avatar-url="avatarUrl"
            :mini-avatar-url="miniAvatarUrl"
            :enable-tilt="true"
            @contact-click="scrollToContact"
          />
          <div v-else class="w-64 h-64 bg-surface rounded-full flex items-center justify-center">
            <p class="text-text-secondary">Unggah Foto Profil</p>
          </div>
          <div class="relative h-32 w-full">
            <Dock 
              :items="serviceItems" 
              :base-item-size="50" 
              :magnification="70" 
              :distance="150"
              :panel-height="60"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 md:py-24">
      
      <ScrollVelocity
        :texts="scrollTexts"
        :velocity="20"
        :damping="50"
        :stiffness="400"
        class-name="text-border-default"
      />
      
      <div class="container mx-auto px-6 mt-12">
        <div class="bg-surface rounded-lg shadow-lg p-8 border border-border-default">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <span class="text-4xl font-bold text-primary-light">
                <CountUp :to="365" suffix="+" />
              </span>
              <p class="text-text-secondary mt-1">Hari Pengalaman</p>
            </div>
            <div>
              <span class="text-4xl font-bold text-primary-light">
                <CountUp :to="6" suffix="+" />
              </span>
              <p class="text-text-secondary mt-1">Proyek Selesai</p>
            </div>
            <div>
              <span class="text-4xl font-bold text-primary-light">
                <CountUp :to="4.5" :decimals="1" />
              </span>
              <p class="text-text-secondary mt-1">Rating Keseluruhan</p>
            </div>
            <div>
              <span class="text-4xl font-bold text-primary-light">
                <CountUp :to="5" suffix="+" />
              </span>
              <p class="text-text-secondary mt-1">Klien Puas</p>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-16">
        <LogoLoop
          :logos="skillLogos"
          :speed="50"
          direction="left"
          :logoHeight="56" 
          :gap="40"
          :pauseOnHover="true"
          :scaleOnHover="true"
          :fadeOut="false" />
      </div>
    </section>

    <section id="projects" class="container mx-auto px-6 py-20 md:py-24">
      <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center text-text-primary">Proyek Saya</h2>
      
      <div v-if="projectStore.isLoading && projectStore.recentProjects.length === 0" class="text-center">
        Memuat proyek...
      </div>
      
      <div v-else-if="projectStore.error" class="text-red-500 text-center">
        {{ projectStore.error.message || projectStore.error }}
      </div>
      
      <div 
        v-else-if="projectStore.recentProjects && projectStore.recentProjects.length > 0" 
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
      >
        <ProjectCard 
          v-for="project in projectStore.recentProjects" 
          :key="project._id" 
          :project="project" 
        />
      </div>
      
      <div v-else class="text-text-secondary text-center">
        <p>Tidak ada proyek ditemukan. Silakan tambahkan di CMS!</p>
      </div>
      
      <div class="text-center mt-12">
        <VButton :to="{ name: 'project-list' }" variant="secondary" size="lg">
          Lihat Semua Proyek
        </VButton>
      </div>
    </section>


    <section id="blog" class="container mx-auto px-6 py-20 md:py-24">
      <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center text-text-primary">Artikel Terbaru</h2>
      
      <div v-if="blogStore.isLoading && blogStore.recentPosts.length === 0" class="text-center">Memuat artikel...</div>
      <div v-else-if="blogStore.error" class="text-red-500 text-center">{{ blogStore.error.message }}</div>
      
      <div v-else-if="blogStore.recentPosts.length > 0" class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <BlogCard
          v-for="post in blogStore.recentPosts"
          :key="post._id"
          :post="post"
        />
      </div>
      <div v-else class="text-text-secondary text-center">
        <p>Belum ada artikel yang dipublikasikan.</p>
      </div>
      
      <div class="text-center mt-12">
        <VButton :to="{ name: 'blog-list' }" variant="secondary" size="lg">
          Lihat Semua Artikel
        </VButton>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, onMounted, h, computed } from 'vue'
import { ComputerDesktopIcon, ServerIcon, SwatchIcon, CircleStackIcon } from '@heroicons/vue/24/outline'
import { useProjectStore } from '@/stores/projectStore.js'
import { useProfileStore } from '@/stores/profileStore.js'
import ProjectCard from '@/components/ProjectCard.vue'
import { PortableText } from '@portabletext/vue'
import VButton from '@/components/VButton.vue'
import { useBlogStore } from '@/stores/blogStore.js'
import BlogCard from '@/components/BlogCard.vue'
import LogoLoop from '@/components/LogoLoop.vue'
import ScrollVelocity from '@/components/ScrollVelocity.vue'
import CountUp from '@/components/CountUp.vue'
import Dock from '@/components/Dock.vue' 
import ProfileCard from '@/components/ProfileCard.vue'
import TextType from '@/components/TextType.vue' 
import { urlFor } from '@/services/imageUrl' 

const projectStore = useProjectStore()
const profileStore = useProfileStore()
const blogStore = useBlogStore()

const profile = computed(() => profileStore.profile)

const avatarUrl = computed(() => {
  return urlFor(profileStore.profile?.profileImage, 400)
})

const miniAvatarUrl = computed(() => {
  return urlFor(profileStore.profile?.profileImage, 100)
})

const hIcon = (icon) => h(icon, { class: 'w-8 h-8 text-white' });

const serviceItems = [
  { icon: () => hIcon(ComputerDesktopIcon), label: "Front-End" },
  { icon: () => hIcon(ServerIcon), label: "Back-End" },
  { icon: () => hIcon(SwatchIcon), label: "UI/UX" },
  { icon: () => hIcon(CircleStackIcon), label: "Basis Data" }
]

const skillLogos = [
  { src: "/logo/vue.png", alt: "Vue.js" },
  { src: "/logo/react.png", alt: "React" },
  { src: "/logo/python.png", alt: "Python" },
  { src: "/logo/tailwind.png", alt: "Tailwind CSS" },
  { src: "/logo/bootstrap.png", alt: "Bootstrap" },
  { src: "/logo/php.png", alt: "PHP" },
  { src: "/logo/mysql.png", alt: "MySQL" },
  { src: "/logo/javascript.png", alt: "JavaScript" },
  { src: "/logo/laravel.png", alt: "Laravel" },
  { src: "/logo/html.png", alt: "HTML" },
  { src: "/logo/css.png", alt: "CSS" },
  { src: "/logo/figma.png", alt: "Figma" },
]

const scrollTexts = ['Front-End', 'Back-End']

const scrollToContact = () => {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => {
  profileStore.fetchProfile()
  projectStore.fetchRecentProjects()
  blogStore.fetchRecentPosts()
})
</script>