<template>
  <span ref="elementRef">{{ formattedValue }}</span>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const props = defineProps({
  to: { type: Number, required: true },
  duration: { type: Number, default: 5 },
  prefix: { type: String, default: '' },
  suffix: { type: String, default: '' },
  decimals: { type: Number, default: 0 }
});

const elementRef = ref(null);
const animatedValue = ref(0); 
let scrollTriggerInstance = null;

const formattedValue = computed(() => {
  const num = animatedValue.value.toFixed(props.decimals);
  return `${props.prefix}${num}${props.suffix}`;
});

onMounted(() => {
  const animationTarget = { value: 0 };

  scrollTriggerInstance = ScrollTrigger.create({
    trigger: elementRef.value,
    start: 'top bottom-=100px', 
    once: true, 
    onEnter: () => {
      gsap.to(animationTarget, {
        value: props.to,
        duration: props.duration,
        ease: 'circ.out',
        onUpdate: () => {
          animatedValue.value = animationTarget.value;
        }
      });
    }
  });
});

onUnmounted(() => {
  if (scrollTriggerInstance) {
    scrollTriggerInstance.kill();
  }
});
</script>