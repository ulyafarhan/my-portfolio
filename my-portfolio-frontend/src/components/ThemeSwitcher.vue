<template>
  <Switch
    v-model="isDark"
    @update:modelValue="toggleTheme"
    :class="isDark ? 'bg-primary-dark' : 'bg-gray-300'"
    class="relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 focus:ring-primary-dark"
  >
    <span class="sr-only">Toggle theme</span>
    <span
      :class="isDark ? 'translate-x-6' : 'translate-x-1'"
      class="inline-block w-4 h-4 transform bg-white rounded-full transition-transform"
    >
      <component
        :is="isDark ? MoonIcon : SunIcon"
        class="h-4 w-4"
        :class="isDark ? 'text-primary-dark' : 'text-yellow-500'"
      />
    </span>
  </Switch>
</template>

<script setup>
import { useTheme } from '@/composables/useTheme.js'
import { Switch } from '@headlessui/vue'
// Impor ikon dari Heroicons
import { SunIcon, MoonIcon } from '@heroicons/vue/24/solid'

const { isDark, setTheme } = useTheme()

const toggleTheme = (value) => {
  setTheme(value ? 'dark' : 'light')
}
</script>