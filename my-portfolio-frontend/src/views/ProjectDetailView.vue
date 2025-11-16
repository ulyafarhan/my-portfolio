<template>
  <div class="container mx-auto px-6 py-24 md:py-32">
    <div v-if="isLoading" class="text-center py-12 text-text-secondary animate-pulse">
      Memuat detail proyek...
    </div>
    
    <div v-else-if="error" class="text-red-500 text-center py-12">
      {{ error }}
    </div>
    
    <article v-else-if="project" class="max-w-4xl mx-auto">
      
      <h1 class="text-4xl md:text-5xl font-bold mb-6 text-text-primary">
        {{ project.title }}
      </h1>

      <ProjectGallery :images="project.gallery" class="mb-8" />
      
      <div class="prose dark:prose-invert max-w-none leading-relaxed text-text-secondary mb-8">
        <PortableText :value="project.description" />
      </div>

      <div class="flex flex-wrap gap-4">
        <VButton 
          v-if="project.projectUrl" 
          :href="project.projectUrl" 
          target="_blank" 
          variant="primary"
          size="lg"
        >
          Lihat Demo
        </VButton>
        <VButton 
          v-if="project.githubUrl" 
          :href="project.githubUrl" 
          target="_blank" 
          variant="secondary"
          size="lg"
        >
          Lihat Kode
        </VButton>
      </div>

    </article>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useProjectStore } from '@/stores/projectStore.js' 
import ProjectGallery from '@/components/ProjectGallery.vue'
import { PortableText } from '@portabletext/vue'
import VButton from '@/components/VButton.vue' 

const props = defineProps({
  slug: {
    type: String,
    required: true
  }
})

const projectStore = useProjectStore()

const project = ref(null)
const isLoading = ref(true)
const error = ref(null)

const getProjectData = async (slug) => {
  isLoading.value = true
  project.value = null
  error.value = null
  try {
    const data = await projectStore.fetchProjectBySlug(slug)
    
    if (projectStore.error) {
      throw projectStore.error
    }
    
    if (!data) {
      throw new Error('Proyek tidak ditemukan.')
    }
    
    project.value = data
  } catch (e) {
    console.error(e)
    error.value = `Gagal mengambil data: ${e.message}`
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  getProjectData(props.slug)
})

watch(() => props.slug, (newSlug) => {
  getProjectData(newSlug)
})
</script>