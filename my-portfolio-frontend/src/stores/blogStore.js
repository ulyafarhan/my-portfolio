import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { fetchData, allPostsQuery, singlePostQuery } from '@/services/sanityClient.js'

export const useBlogStore = defineStore('blog', () => {
  const posts = ref([])
  const isLoading = ref(false)
  const recentPosts = ref([])
  const error = ref(null)

  // Mengambil semua post untuk halaman daftar
  async function fetchAllPosts() {
    if (posts.value.length > 0) return 

    isLoading.value = true
    error.value = null
    try {
      // PERBAIKAN 1: Menjamin 'posts.value' selalu array
      posts.value = await fetchData(allPostsQuery) || []
    } catch (e) {
      error.value = e
    } finally {
      isLoading.value = false
    }
  }

  // Mengambil satu post berdasarkan slug
  const getPostBySlug = computed(() => {
    return (slug) => posts.value.find((p) => p.slug === slug)
  })

  // Mengambil data detail post (termasuk 'body')
  async function fetchPostBySlug(slug) {
    const cached = getPostBySlug.value(slug)
    if (cached && cached.body) {
      return cached
    }
    
    isLoading.value = true
    error.value = null
    try {
      const post = await fetchData(singlePostQuery, { slug })
      if (!post) throw new Error('Post not found')
      
      const index = posts.value.findIndex(p => p.slug === slug)
      if (index !== -1) {
        posts.value[index] = post
      } else {
        posts.value.push(post)
      }
      return post
    } catch (e) {
      error.value = e
      return null
    } finally {
      isLoading.value = false
    }
  }

  async function fetchRecentPosts() {
    const recentPostsQuery = allPostsQuery + ' [0..2]' 
    if (recentPosts.value.length > 0) return 

    isLoading.value = true
    error.value = null
    try {
      recentPosts.value = await fetchData(recentPostsQuery) || []
    } catch (e) {
      error.value = e
    } finally {
      isLoading.value = false
    }
  }

  return { 
    posts, 
    isLoading, 
    error, 
    recentPosts, 
    fetchAllPosts, 
    fetchPostBySlug, 
    getPostBySlug,
    fetchRecentPosts 
  }
})