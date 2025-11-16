<template>
  <div class="container mx-auto px-6 py-20 md:py-24">
    <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-text-primary text-center">
      Artikel & Blog
    </h1>

    <div v-if="blogStore.isLoading" class="text-center text-text-secondary animate-pulse py-12">
      Sedang memuat artikel...
    </div>

    <div v-else-if="blogStore.error" class="text-red-500 text-center py-12 font-medium">
      {{ blogStore.error.message }}
    </div>
    
    <div v-else-if="blogStore.posts.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <BlogCard 
        v-for="post in blogStore.posts" 
        :key="post._id" 
        :post="post"
      />
    </div>
    
    <div v-else class="text-text-secondary text-center py-12">
      <p class="text-lg">Belum ada artikel yang dipublikasikan.</p>
      <p class="text-sm mt-2">Silakan tambahkan artikel melalui CMS.</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useBlogStore } from '@/stores/blogStore.js'
import BlogCard from '@/components/BlogCard.vue'

const blogStore = useBlogStore()

onMounted(() => {
  blogStore.fetchAllPosts()
})
</script>