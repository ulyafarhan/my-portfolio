<template>
  <component
    :is="tag"
    :to="to"
    :href="href"
    :class="[
      'border-2 border-border-default', 
      'inline-flex items-center justify-center rounded-lg font-medium',
      'focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 focus:ring-primary-dark',
      'shadow-md',
      'transform', 
      'transition-all duration-300 ease-in-out', 
      'hover:-translate-y-0.5 hover:scale-105', 
      'hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)]', 
      'active:scale-[0.98]',
      
      variants[variant],
      size === 'lg' ? 'px-6 py-3 text-base' : 'px-5 py-2 text-sm',
    ]"
  >
    <slot />
  </component>
</template>

<script setup>
import { computed } from 'vue' 
import { RouterLink } from 'vue-router'

const props = defineProps({
  to: [String, Object],
  href: String,
  variant: {
    type: String,
    default: 'primary',
  },
  size: {
    type: String,
    default: 'md',
  },
})

const tag = computed(() => {
  if (props.to) return RouterLink
  if (props.href) return 'a'
  return 'button'
})

const variants = {
  primary: 'bg-primary-DEFAULT text-white hover:bg-primary-dark border-primary-dark',
  secondary: 'bg-border-default text-text-primary hover:bg-gray-600',
}
</script>