<template>
  <div
    class="relative inline-flex items-center justify-center rounded-full overflow-hidden shadow-lg"
    :style="{ width: `${size}px`, height: `${size}px` }"
  >
    <img
      v-if="src"
      :src="src"
      :alt="alt"
      class="w-full h-full object-cover"
    />
    <div v-else class="w-full h-full bg-gray-300 dark:bg-gray-800 flex items-center justify-center">
      <span class="text-gray-500">?</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  src: String,
  alt: {
    type: String,
    default: 'Avatar',
  },
  size: {
    type: [String, Number],
    default: 64, // Ukuran default
  },
})
</script>