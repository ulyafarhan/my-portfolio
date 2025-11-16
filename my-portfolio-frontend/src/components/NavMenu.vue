<template>
  <nav ref="navRef" class="relative hidden md:flex items-center space-x-6" @mouseleave="handleMouseLeave">
    <div
      ref="magicPillRef"
      class="absolute bottom-0 h-1 rounded-full bg-primary-light"
      style="width: 0px; left: 0px;"
    />
    
    <template v-for="(item, index) in items" :key="item.label">
      <component
        :is="isExternal(item.href) ? 'a' : 'RouterLink'"
        :to="!isExternal(item.href) ? item.href : undefined"
        :href="isExternal(item.href) ? item.href : undefined"
        :ref="el => setLinkRef(el, index)"
        class="relative z-10 p-2 transition-colors duration-200"
        :class="isActive(item.href) ? 'text-primary-light font-medium' : 'hover:text-primary-light'"
        @mouseenter="handleHover(index)"
      >
        {{ item.label }}
      </component>
    </template>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUpdate, watch, nextTick } from 'vue'
import { gsap } from 'gsap'
import { RouterLink } from 'vue-router'

const props = defineProps({
  items: {
    type: Array,
    required: true
  },
  activeHref: {
    type: String,
    required: true
  }
})

const navRef = ref(null)
const magicPillRef = ref(null)
const linkRefs = ref([])

const setLinkRef = (el, index) => {
  if (el) {
    linkRefs.value[index] = el.$el || el 
  }
}
onBeforeUpdate(() => {
  linkRefs.value = []
})

const isExternal = (href) => href.startsWith('#') || href.startsWith('http')
const isActive = (href) => props.activeHref === href

const moveTo = (el) => {
  if (!el || !magicPillRef.value) return

  gsap.to(magicPillRef.value, {
    left: el.offsetLeft,
    width: el.clientWidth,
    duration: 0.3,
    ease: 'power3.out'
  })
}

const getActiveEl = () => {
  const activeIndex = props.items.findIndex(item => item.href === props.activeHref)
  return linkRefs.value[activeIndex]
}

const handleHover = (index) => {
  moveTo(linkRefs.value[index])
}

const handleMouseLeave = () => {
  moveTo(getActiveEl())
}

watch(() => props.activeHref, async () => {
  await nextTick() 
  moveTo(getActiveEl())
})

onMounted(async () => {
  await nextTick() 
  const el = getActiveEl()
  if (el) {
    gsap.set(magicPillRef.value, {
      left: el.offsetLeft,
      width: el.clientWidth
    })
  }
})
</script>