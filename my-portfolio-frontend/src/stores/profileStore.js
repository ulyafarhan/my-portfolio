import { defineStore } from 'pinia'
import { ref } from 'vue'
import { fetchData, profileQuery } from '@/services/sanityClient.js'

export const useProfileStore = defineStore('profile', () => {
  const profile = ref(null)
  const isLoading = ref(false)
  const error = ref(null)

  async function fetchProfile() {
    if (profile.value) return 
    
    isLoading.value = true
    error.value = null
    try {
      profile.value = await fetchData(profileQuery) || null
    } catch (e) {
      error.value = e
    } finally {
      isLoading.value = false
    }
  }

  return { profile, isLoading, error, fetchProfile }
})