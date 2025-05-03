<template>
  <div>
    <!-- Hero Section -->
    <section class="relative py-20 bg-gray-50 dark:bg-gray-800/50">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white animate-slide-down">
            Get In Touch
          </h1>
          <p class="text-xl text-gray-700 dark:text-gray-300 animate-slide-up">
            Have a project in mind or want to discuss a potential collaboration? Let's talk!
          </p>
        </div>
      </div>
    </section>
    
    <!-- Contact Section -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Info -->
          <div class="animate-slide-right">
            <h2 class="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Contact Information</h2>
            
            <div class="space-y-8">
              <div class="flex items-start">
                <div class="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-1">Email</h3>
                  <a href="mailto:contact@example.com" class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                    contact@example.com
                  </a>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-1">Phone</h3>
                  <a href="tel:+1234567890" class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-1">Location</h3>
                  <p class="text-gray-600 dark:text-gray-400">
                    San Francisco, California, USA
                  </p>
                </div>
              </div>
            </div>
            
            <div class="mt-12">
              <h3 class="text-xl font-bold mb-6 text-gray-900 dark:text-white">Connect With Me</h3>
              <div class="flex space-x-4">
                <a 
                  v-for="(social, index) in socialLinks" 
                  :key="index"
                  :href="social.url" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-colors duration-200"
                  :aria-label="social.name"
                >
                  <div class="w-5 h-5" v-html="social.icon"></div>
                </a>
              </div>
            </div>
            
            <div class="mt-12">
              <h3 class="text-xl font-bold mb-6 text-gray-900 dark:text-white">Availability</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-4">
                I'm currently available for freelance work and new project inquiries. My typical response time is within 24 hours.
              </p>
              <div class="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                <h4 class="font-medium text-gray-900 dark:text-white mb-2">Working Hours:</h4>
                <p class="text-gray-600 dark:text-gray-400">
                  Monday - Friday: 9am - 6pm PST<br>
                  Weekend: Limited availability
                </p>
              </div>
            </div>
          </div>
          
          <!-- Contact Form -->
          <div class="animate-slide-left">
            <h2 class="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Send Me a Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
    
    <!-- FAQ Section -->
    <section class="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div class="container mx-auto px-4">
        <SectionHeading 
          title="Frequently Asked Questions"
          subtitle="Quick answers to questions I often receive about my services."
        />
        
        <div class="max-w-3xl mx-auto">
          <div class="space-y-6">
            <div v-for="(faq, index) in faqs" :key="index" class="card p-6 hover:shadow-md transition-shadow duration-300">
              <div 
                class="flex justify-between items-center cursor-pointer"
                @click="faq.isOpen = !faq.isOpen"
              >
                <h3 class="text-lg font-medium text-gray-900 dark:text-white">{{ faq.question }}</h3>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  class="h-5 w-5 text-gray-500 transition-transform duration-200"
                  :class="faq.isOpen ? 'transform rotate-180' : ''"
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div 
                v-show="faq.isOpen" 
                class="mt-4 text-gray-600 dark:text-gray-400 transition-all duration-300"
              >
                <p>{{ faq.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="py-20">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Ready to start your project?</h2>
        <p class="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          Let's work together to create something amazing. I'm excited to hear about your ideas!
        </p>
        <div class="flex justify-center">
          <a href="mailto:contact@example.com" class="btn-primary">
            Email Me Now
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Page meta
useHead({
  title: 'Contact Me | My Portfolio',
  meta: [
    { name: 'description', content: 'Get in touch with me for freelance work, project inquiries, or collaboration opportunities.' }
  ]
});

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/',
    icon: `<svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>`
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/',
    icon: `<svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/',
    icon: `<svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>`
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/',
    icon: `<svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.897 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.897-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>`
  }
];

const faqs = [
  {
    question: "What services do you offer?",
    answer: "I offer a wide range of web development services including frontend and backend development, responsive web design, e-commerce solutions, CMS integration, performance optimization, and maintenance services.",
    isOpen: true
  },
  {
    question: "How long does it typically take to complete a project?",
    answer: "Project timelines vary depending on the scope and complexity. A simple website might take 2-3 weeks, while a complex web application could take 2-3 months. I'll provide you with a detailed timeline during our initial consultation.",
    isOpen: false
  },
  {
    question: "What is your development process like?",
    answer: "My development process typically involves discovery and planning, design and prototyping, development, testing and quality assurance, deployment and launch, and ongoing support and maintenance. I keep clients involved at every stage of the process.",
    isOpen: false
  },
  {
    question: "Do you offer ongoing maintenance and support?",
    answer: "Yes, I offer ongoing maintenance and support packages to ensure your website or application remains secure, up-to-date, and running smoothly. This includes regular updates, bug fixes, performance monitoring, and technical support.",
    isOpen: false
  },
  {
    question: "How do you handle project payments?",
    answer: "I typically require a 50% deposit to begin work, with the remaining balance due upon project completion. For larger projects, I may set up milestone payments. I accept payments via bank transfer, PayPal, or credit card.",
    isOpen: false
  },
  {
    question: "Can you work with clients remotely?",
    answer: "Absolutely! I work with clients worldwide and have established effective processes for remote collaboration, including regular video calls, collaborative tools, and clear communication channels.",
    isOpen: false
  }
];
</script>