<template>
  <article class="group bg-surface border border-border-default rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col">
    <RouterLink :to="{ name: 'blog-detail', params: { slug: post.slug } }" class="block flex flex-col flex-grow">
      
      <img v-if="post.mainImage" 
           :src="optimizedImgUrl" 
           :alt="post.title" 
           class="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105">
      
      <div v-else class="w-full aspect-video bg-border-default flex items-center justify-center">
        <span class="text-text-secondary">No Image</span>
      </div>
      
      <div class="p-6 flex flex-col flex-grow">
        <p class="text-sm text-text-secondary mb-1">{{ formatDate(post.publishedAt) }}</p>
        
        <h3 class="text-xl font-semibold text-text-primary line-clamp-2 transition-colors group-hover:text-primary-light">
          {{ post.title }}
        </h3>
        
        <p class="text-text-secondary text-sm mt-2 line-clamp-3 flex-grow mb-4">
          {{ post.excerpt }}
        </p>
        
        <p class="text-primary-light font-semibold text-sm mt-auto">
          Baca Selengkapnya &rarr;
        </p>
      </div>
    </RouterLink>
  </article>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { urlFor } from '@/services/imageUrl'

const props = defineProps({
  post: {
    type: Object,
    required: true
  }
})

const optimizedImgUrl = computed(() => {
  return urlFor(props.post.mainImage, 600)
})

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('id-ID', {
    year: 'numeric', month: 'long', day: 'numeric'
  })
}
</script>