import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { fetchData, allProjectsQuery, singleProjectQuery } from '@/services/sanityClient.js'

export const useProjectStore = defineStore('project', () => {
  const projects = ref([])
  const isLoading = ref(false)
  const recentProjects = ref([])
  const error = ref(null)

  async function fetchAllProjects() {
    if (projects.value.length > 0) return 

    isLoading.value = true
    error.value = null
    try {
      projects.value = await fetchData(allProjectsQuery) || []
    } catch (e) {
      error.value = e
    } finally {
      isLoading.value = false
    }
  }

  const getProjectBySlug = computed(() => {
    return (slug) => projects.value.find((p) => p.slug === slug)
  })

  async function fetchRecentProjects() {
    const recentProjectsQuery = allProjectsQuery + ' [0..2]' 
    
    if (recentProjects.value.length > 0) return 

    isLoading.value = true
    error.value = null
    try {
      recentProjects.value = await fetchData(recentProjectsQuery) || []
    } catch (e) {
      error.value = e
    } finally {
      isLoading.value = false
    }
  }
  async function fetchProjectBySlug(slug) {
    const cached = getProjectBySlug.value(slug)
    if (cached && cached.description) {
      return cached
    }
    
    isLoading.value = true
    error.value = null
    try {
      const project = await fetchData(singleProjectQuery, { slug })
      if (!project) throw new Error('Project not found')
      
      const index = projects.value.findIndex(p => p.slug === slug)
      if (index !== -1) {
        projects.value[index] = project
      } else {
        projects.value.push(project)
      }
      return project
    } catch (e) {
      error.value = e
      return null
    } finally {
      isLoading.value = false
    }
  }

  return {
    projects, 
    recentProjects, 
    isLoading, 
    error, 
    fetchAllProjects, 
    fetchRecentProjects, 
    fetchProjectBySlug, 
    getProjectBySlug
  }
})