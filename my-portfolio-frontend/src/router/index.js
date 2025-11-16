import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectDetailView from '../views/ProjectDetailView.vue'
import ProjectListView from '../views/ProjectListView.vue'
import BlogListView from '../views/BlogListView.vue'
import BlogDetailView from '../views/BlogDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/project/:slug',
      name: 'project-detail',
      component: ProjectDetailView, 
      props: true 
    },
    {
      path: '/blog',
      name: 'blog-list',
      component: BlogListView
    },
    {
      path: '/blog/:slug',
      name: 'blog-detail',
      component: BlogDetailView,
      props: true
    },
    {
      path: '/projects',
      name: 'project-list',
      component: ProjectListView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router