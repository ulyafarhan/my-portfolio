<template>
  <div class="container mx-auto px-6 py-16">
    <div v-if="isLoading" class="text-center py-12 text-text-secondary animate-pulse">
      Sedang memuat artikel...
    </div>

    <div v-else-if="error" class="text-red-500 text-center py-12 font-medium">
      {{ error.message }}
    </div>
    
    <article v-else-if="post" class="max-w-3xl mx-auto">
      <h1 class="text-4xl md:text-6xl font-bold mb-6 text-text-primary leading-tight">
        {{ post.title }}
      </h1>

      <p class="text-lg text-text-secondary mb-8 italic">
        Dipublikasikan pada {{ formatDate(post.publishedAt) }}
      </p>
      
      <img 
        v-if="post.mainImage" 
        :src="optimizedImgUrl" 
        alt="Gambar Artikel" 
        class="w-full h-auto rounded-xl shadow-lg mb-10"
      />

      <div class="prose dark:prose-invert max-w-none text-text-secondary leading-relaxed">
        <PortableText :value="post.body" />
      </div>
    </article>
    
    <div v-else class="text-text-secondary text-center py-12">
      <p class="text-lg">Artikel tidak ditemukan.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from 'vue'
import { useBlogStore } from '@/stores/blogStore.js'
import { PortableText } from '@portabletext/vue'
import { urlFor } from '@/services/imageUrl' 

const props = defineProps({
  slug: {
    type: String,
    required: true
  }
})

const blogStore = useBlogStore()
const post = ref(null)
const isLoading = ref(true)
const error = ref(null)

const optimizedImgUrl = computed(() => {
  return post.value?.mainImage ? urlFor(post.value.mainImage, 1200) : ''
})

const getPostData = async (slug) => {
  isLoading.value = true
  error.value = null
  
  const data = await blogStore.fetchPostBySlug(slug)
  
  if (blogStore.error) {
    error.value = blogStore.error
  } else if (data) {
    post.value = data
  } else {
    error.value = new Error('Artikel tidak ditemukan.')
  }
  
  isLoading.value = false
}

onMounted(() => {
  getPostData(props.slug)
})

watch(() => props.slug, (newSlug) => {
  getPostData(newSlug)
})

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('id-ID', {
    year: 'numeric', month: 'long', day: 'numeric'
  })
}
</script>