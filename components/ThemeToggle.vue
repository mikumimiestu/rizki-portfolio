<template>
  <button
    @click="toggleColorMode"
    class="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
    aria-label="Toggle dark mode"
  >
    <transition name="theme-toggle" mode="out-in">
      <div v-if="$colorMode.value === 'dark'" key="light" class="w-5 h-5">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      </div>
      <div v-else key="dark" class="w-5 h-5">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      </div>
    </transition>
  </button>
</template>

<script setup>
const colorMode = useColorMode();

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
};
</script>

<style scoped>
.theme-toggle-enter-active,
.theme-toggle-leave-active {
  transition: all 0.3s ease;
}
.theme-toggle-enter-from,
.theme-toggle-leave-to {
  opacity: 0;
  transform: rotate(30deg) scale(0.7);
}
</style>