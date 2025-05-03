<template>
  <div class="text-center mb-12 md:mb-16">
    <h2 class="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
      {{ title }}
    </h2>
    <div v-if="subtitle" class="max-w-3xl mx-auto">
      <p class="text-lg text-gray-600 dark:text-gray-400">{{ subtitle }}</p>
    </div>
    <div class="w-20 h-1 bg-primary-500 mx-auto mt-4"></div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  }
});
</script>