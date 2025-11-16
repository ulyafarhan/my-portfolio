import { useStorage, usePreferredDark } from '@vueuse/core'
import { watch, computed } from 'vue'

type Theme = 'light' | 'dark' | 'system'

// Kita gunakan 'ref' di luar fungsi agar menjadi 'global singleton'
const theme = useStorage<Theme>('portfolio-theme', 'system')

export function useTheme() {
  const isDarkPreferred = usePreferredDark()

  const isDark = computed(() => {
    if (theme.value === 'system') {
      return isDarkPreferred.value
    }
    return theme.value === 'dark'
  })

  // Fungsi untuk update DOM (menambah/menghapus class 'dark')
  const updateDOM = (isDarkValue: boolean) => {
    const root = document.documentElement
    if (isDarkValue) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }

  // Awasi perubahan dan update DOM
  watch(isDark, updateDOM, { immediate: true })

  const setTheme = (newTheme: Theme) => {
    theme.value = newTheme
  }

  return {
    theme,
    isDark,
    setTheme
  }
}