<template>
  <form @submit.prevent="submitForm" class="space-y-6 card p-8">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
        <input
          id="name"
          v-model="form.name"
          type="text"
          required
          class="w-full rounded-lg border-gray-300 dark:border-gray-700 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-800 dark:text-white"
          placeholder="Your name"
        />
      </div>
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          required
          class="w-full rounded-lg border-gray-300 dark:border-gray-700 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-800 dark:text-white"
          placeholder="your.email@example.com"
        />
      </div>
    </div>
    <div>
      <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject</label>
      <input
        id="subject"
        v-model="form.subject"
        type="text"
        required
        class="w-full rounded-lg border-gray-300 dark:border-gray-700 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-800 dark:text-white"
        placeholder="Subject"
      />
    </div>
    <div>
      <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
      <textarea
        id="message"
        v-model="form.message"
        rows="5"
        required
        class="w-full rounded-lg border-gray-300 dark:border-gray-700 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-800 dark:text-white"
        placeholder="Your message"
      ></textarea>
    </div>
    <div>
      <button
        type="submit"
        class="btn-primary w-full py-3 relative overflow-hidden group"
        :disabled="isSubmitting"
      >
        <span v-if="isSubmitting" class="flex items-center justify-center">
          <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Sending...
        </span>
        <span v-else>
          Send Message
          <span class="absolute right-0 -mt-12 -mr-12 h-32 w-32 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-in-out bg-white/10"></span>
        </span>
      </button>
    </div>
    
    <div v-if="formStatus" class="text-center p-3 rounded-lg" :class="formStatus.type === 'success' ? 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200' : 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200'">
      {{ formStatus.message }}
    </div>
  </form>
</template>

<script setup>
import { ref, reactive } from 'vue';

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const isSubmitting = ref(false);
const formStatus = ref(null);

const submitForm = async () => {
  isSubmitting.value = true;
  formStatus.value = null;
  
  try {
    // Simulate API request
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Reset form
    form.name = '';
    form.email = '';
    form.subject = '';
    form.message = '';
    
    formStatus.value = {
      type: 'success',
      message: 'Thank you for your message! I will get back to you soon.'
    };
  } catch (error) {
    formStatus.value = {
      type: 'error',
      message: 'There was an error sending your message. Please try again.'
    };
  } finally {
    isSubmitting.value = false;
  }
};
</script>