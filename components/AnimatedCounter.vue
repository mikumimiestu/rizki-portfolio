<template>
  <div>
    <span ref="countElement" class="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400">0</span>
    <span class="text-xl md:text-2xl">{{ suffix }}</span>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useIntersectionObserver } from '@vueuse/core';

const props = defineProps({
  to: {
    type: Number,
    required: true
  },
  duration: {
    type: Number,
    default: 1000
  },
  suffix: {
    type: String,
    default: ''
  }
});

const countElement = ref(null);
const counted = ref(false);

const formatNumber = (num) => {
  return Math.round(num).toLocaleString();
};

const animateCount = () => {
  if (counted.value) return;
  
  counted.value = true;
  const start = 0;
  const end = props.to;
  const startTime = performance.now();
  
  const updateCount = (currentTime) => {
    const elapsedTime = currentTime - startTime;
    
    if (elapsedTime < props.duration) {
      const progress = elapsedTime / props.duration;
      const currentCount = Math.floor(progress * (end - start) + start);
      
      if (countElement.value) {
        countElement.value.textContent = formatNumber(currentCount);
      }
      
      requestAnimationFrame(updateCount);
    } else {
      if (countElement.value) {
        countElement.value.textContent = formatNumber(end);
      }
    }
  };
  
  requestAnimationFrame(updateCount);
};

// Use intersection observer to trigger animation when element is visible
onMounted(() => {
  if (!countElement.value) return;
  
  const { stop } = useIntersectionObserver(
    countElement,
    ([{ isIntersecting }]) => {
      if (isIntersecting) {
        animateCount();
        stop();
      }
    },
    { threshold: 0.1 }
  );
});

// Reset and re-animate if props change
watch(() => props.to, () => {
  counted.value = false;
  if (countElement.value && countElement.value.isIntersecting) {
    animateCount();
  }
});
</script>