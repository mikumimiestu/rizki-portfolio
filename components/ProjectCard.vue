<template>
  <div 
    class="card group overflow-hidden"
    :class="{ 'animate-fade-in': isVisible }"
    ref="cardRef"
  >
    <div class="relative overflow-hidden aspect-video">
      <img 
        :src="project.image" 
        :alt="project.title" 
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
        <div class="p-6 w-full">
          <div class="flex space-x-2 mb-3">
            <span 
              v-for="(tag, index) in project.tags" 
              :key="index" 
              class="px-2 py-1 text-xs font-medium rounded-full bg-primary-500/20 text-primary-100"
            >
              {{ tag }}
            </span>
          </div>
          <div class="flex space-x-2">
            <a 
              v-if="project.demoUrl" 
              :href="project.demoUrl" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="btn-primary py-1 px-3 text-sm"
            >
              Live Demo
            </a>
            <a 
              v-if="project.codeUrl" 
              :href="project.codeUrl"
              target="_blank" 
              rel="noopener noreferrer" 
              class="btn-outline py-1 px-3 text-sm text-white border-white/30"
            >
              Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="p-6">
      <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">{{ project.title }}</h3>
      <p class="text-gray-600 dark:text-gray-400 mb-4">{{ project.description }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useIntersectionObserver } from '@vueuse/core';

const props = defineProps({
  project: {
    type: Object,
    required: true
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