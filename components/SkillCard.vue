<template>
  <div 
    class="card p-6 group transition-all duration-300 hover:bg-primary-50 dark:hover:bg-primary-900/20"
    :class="{ 'animate-slide-up': isVisible }"
    :style="{ 'animation-delay': `${delay}ms` }"
    ref="cardRef"
  >
    <div class="flex items-center mb-4">
      <div class="w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mr-4">
        <div v-html="icon" class="w-6 h-6"></div>
      </div>
      <h3 class="text-xl font-bold text-gray-900 dark:text-white">{{ title }}</h3>
    </div>
    <p class="text-gray-600 dark:text-gray-400">{{ description }}</p>
    <div class="mt-4">
      <div v-if="items && items.length" class="flex flex-wrap gap-2">
        <span 
          v-for="(item, index) in items" 
          :key="index" 
          class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
        >
          {{ item }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useIntersectionObserver } from '@vueuse/core';

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: ''
  },
  items: {
    type: Array,
    default: () => []
  },
  delay: {
    type: Number,
    default: 0
  }
});

const cardRef = ref(null);
const isVisible = ref(false);

onMounted(() => {
  if (!cardRef.value) return;
  
  const { stop } = useIntersectionObserver(
    cardRef,
    ([{ isIntersecting }]) => {
      if (isIntersecting) {
        isVisible.value = true;
        stop();
      }
    },
    { threshold: 0.1 }
  );
});
</script>