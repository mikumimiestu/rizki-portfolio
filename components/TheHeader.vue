<template>
  <header
    :class="[
      'sticky top-0 z-50 w-full transition-all duration-300',
      { 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm': scrolled }
    ]"
  >
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16 md:h-20">
        <!-- Logo -->
        <NuxtLink to="/" class="text-xl md:text-2xl font-bold text-primary-600 dark:text-primary-400">
          Portfolio
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex space-x-8">
          <NuxtLink
            v-for="(item, index) in navItems"
            :key="index"
            :to="item.path"
            class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-200"
            active-class="text-primary-600 dark:text-primary-400"
          >
            {{ item.name }}
          </NuxtLink>
        </nav>

        <div class="flex items-center space-x-4">
          <!-- Theme Toggle -->
          <ThemeToggle />

          <!-- Mobile Menu Button -->
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            <svg
              v-if="!mobileMenuOpen"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Navigation Menu -->
    <div
      v-show="mobileMenuOpen"
      class="md:hidden bg-white dark:bg-gray-900 shadow-lg animate-slide-down"
    >
      <div class="container mx-auto px-4 py-3">
        <nav class="flex flex-col space-y-3">
          <NuxtLink
            v-for="(item, index) in navItems"
            :key="index"
            :to="item.path"
            class="py-2 px-4 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium transition-colors duration-200"
            active-class="bg-gray-100 dark:bg-gray-800 text-primary-600 dark:text-primary-400"
            @click="mobileMenuOpen = false"
          >
            {{ item.name }}
          </NuxtLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' }
];

const mobileMenuOpen = ref(false);
const scrolled = ref(false);

const handleScroll = () => {
  scrolled.value = window.scrollY > 10;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Check initial scroll position
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>