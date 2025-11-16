<template>
  <div class="gallery-container">
    <div v-if="images && images.length > 0">
      <img :src="mainImageUrl" :alt="images[currentIndex].alt || 'Gallery image'" class="main-image w-full h-auto rounded-lg shadow-md mb-4" />

      <div class="thumbnail-strip flex gap-2 overflow-x-auto p-2">
        <img 
          v-for="(image, index) in images" 
          :key="image._key"
          :src="getThumbnailUrl(image)"
          @click="currentIndex = index"
          class="h-20 w-20 object-cover rounded cursor-pointer"
          :class="{ 'ring-2 ring-blue-500': index === currentIndex }"
        />
      </div>
    </div>
    <div v-else class="text-gray-500">
      <p>Tidak ada gambar galeri untuk proyek ini.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { urlFor } from '@/services/imageUrl' // Pastikan ini diimpor

const props = defineProps({
  images: {
    type: Array,
    default: () => []
  }
})

const currentIndex = ref(0)

const mainImageUrl = computed(() => {
  if (!props.images[currentIndex.value]) return ''
  return urlFor(props.images[currentIndex.value], 1024)
})

const getThumbnailUrl = (image) => {
  return urlFor(image, 150)
}
</script>