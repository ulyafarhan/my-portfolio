<template>
  <div class="container mx-auto px-6 py-16">
    <h1 class="text-4xl md:text-6xl font-bold mb-12 text-text-primary text-center">
      Semua Proyek
    </h1>

    <div 
      v-if="projectStore.isLoading && projectStore.projects.length === 0" 
      class="text-center text-text-secondary animate-pulse py-12"
    >
      Sedang memuat daftar proyek...
    </div>

    <div 
      v-else-if="projectStore.error" 
      class="text-red-500 text-center py-12 font-medium"
    >
      {{ projectStore.error.message }}
    </div>
    
    <div 
      v-else-if="projectStore.projects.length > 0" 
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-center justify-center"
    >
      <ProjectCard 
        v-for="project in projectStore.projects" 
        :key="project._id" 
        :project="project" 
        class="max-h-96 items-center justify-center flex-shrink-0"
      />
    </div>
    
    <div v-else class="text-text-secondary text-center py-12">
      <p class="text-lg">Belum ada proyek yang ditambahkan.</p>
      <p class="text-sm mt-2">Silakan tambahkan proyek melalui CMS.</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useProjectStore } from '@/stores/projectStore.js'
import ProjectCard from '@/components/ProjectCard.vue'

const projectStore = useProjectStore()

onMounted(() => {
  projectStore.fetchAllProjects()
})
</script>