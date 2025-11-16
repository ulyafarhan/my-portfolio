<template>
  <div class="project-card group bg-surface border border-border-default rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col">
    
    <RouterLink :to="{ name: 'project-detail', params: { slug: project.slug } }" class="overflow-hidden block">
      <img v-if="project.mainImage" 
           :src="optimizedImgUrl" 
           :alt="project.title"
           loading="lazy"
           class="w-full object-cover group-hover:scale-105 transition-transform duration-500 aspect-video" />
      
      <div v-else class="w-full aspect-video bg-border-default flex items-center justify-center">
        <span class="text-text-secondary">[Tidak ada gambar]</span>
      </div>
    </RouterLink>
    
    <div class="p-6 flex flex-col flex-grow">
      <h3 class="text-2xl font-bold text-text-primary group-hover:text-primary-light transition-colors mb-2">
        {{ project.title }}
      </h3>
      
      <p class="font-normal text-text-secondary mb-4 line-clamp-3 flex-grow">
        {{ project.excerpt || 'Deskripsi proyek belum tersedia.' }}
      </p>
      
      <VButton 
        :to="{ name: 'project-detail', params: { slug: project.slug } }"
        variant="primary"
        class="self-start transition-transform duration-300 hover:scale-105 mt-auto focus:ring-2 focus:ring-primary-light"
      >
        Lihat Detail
      </VButton>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import VButton from '@/components/VButton.vue'
import { RouterLink } from 'vue-router'
import { urlFor } from '@/services/imageUrl'

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
})

const optimizedImgUrl = computed(() => {
  return urlFor(props.project.mainImage, 600)
})
</script>