<template>
  <div>
    <!-- Hero Section -->
    <section class="relative py-20 bg-gray-50 dark:bg-gray-800/50">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white animate-slide-down">
            My Projects
          </h1>
          <p class="text-xl text-gray-700 dark:text-gray-300 animate-slide-up">
            Explore a selection of my recent work across various industries and technologies.
          </p>
        </div>
      </div>
    </section>
    
    <!-- Project Filters -->
    <section class="py-8">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-center gap-3 mb-12">
          <button 
            v-for="category in categories" 
            :key="category"
            @click="activeCategory = category"
            class="px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200"
            :class="activeCategory === category ? 
              'bg-primary-500 text-white' : 
              'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'"
          >
            {{ category }}
          </button>
        </div>
      </div>
    </section>
    
    <!-- Projects Grid -->
    <section class="py-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            v-for="(project, index) in filteredProjects"
            :key="index"
            :project="project"
          />
        </div>
        
        <!-- Empty State -->
        <div v-if="filteredProjects.length === 0" class="text-center py-16">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 class="text-xl font-bold text-gray-700 dark:text-gray-300 mb-2">No projects found</h3>
          <p class="text-gray-600 dark:text-gray-400">
            No projects match the selected category. Try selecting a different category.
          </p>
        </div>
      </div>
    </section>
    
    <!-- Project Process Section -->
    <section class="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div class="container mx-auto px-4">
        <SectionHeading 
          title="My Project Process"
          subtitle="A systematic approach to bringing your ideas to life."
        />
        
        <div class="max-w-4xl mx-auto">
          <div class="relative">
            <!-- Process Timeline -->
            <div class="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300 dark:bg-gray-700"></div>
            
            <div class="space-y-12">
              <!-- Step 1 -->
              <div class="relative flex flex-col md:flex-row items-center">
                <div class="flex-1 md:text-right md:pr-12 md:py-8 animate-slide-right">
                  <h3 class="text-xl font-bold mb-3 text-gray-900 dark:text-white">Discovery & Planning</h3>
                  <p class="text-gray-600 dark:text-gray-400">
                    We start by understanding your vision, goals, and requirements. This phase includes target audience 
                    analysis, competitive research, and creating a detailed project roadmap.
                  </p>
                </div>
                
                <div class="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-primary-500 text-white font-bold my-4 md:my-0 z-10">
                  1
                </div>
                
                <div class="flex-1 md:pl-12 md:py-8"></div>
              </div>
              
              <!-- Step 2 -->
              <div class="relative flex flex-col md:flex-row items-center">
                <div class="flex-1 md:pr-12 md:py-8 md:text-right md:order-1 md:order-none"></div>
                
                <div class="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-primary-500 text-white font-bold my-4 md:my-0 z-10">
                  2
                </div>
                
                <div class="flex-1 md:pl-12 md:py-8 animate-slide-left">
                  <h3 class="text-xl font-bold mb-3 text-gray-900 dark:text-white">Design & Prototyping</h3>
                  <p class="text-gray-600 dark:text-gray-400">
                    I create wireframes and interactive prototypes to visualize the project, focusing on user experience, 
                    information architecture, and visual design. This allows us to refine the concept before development.
                  </p>
                </div>
              </div>
              
              <!-- Step 3 -->
              <div class="relative flex flex-col md:flex-row items-center">
                <div class="flex-1 md:text-right md:pr-12 md:py-8 animate-slide-right">
                  <h3 class="text-xl font-bold mb-3 text-gray-900 dark:text-white">Development</h3>
                  <p class="text-gray-600 dark:text-gray-400">
                    I build the project using the most appropriate technologies, following best practices for clean, 
                    efficient, and maintainable code. Development is done in sprints with regular updates.
                  </p>
                </div>
                
                <div class="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-primary-500 text-white font-bold my-4 md:my-0 z-10">
                  3
                </div>
                
                <div class="flex-1 md:pl-12 md:py-8"></div>
              </div>
              
              <!-- Step 4 -->
              <div class="relative flex flex-col md:flex-row items-center">
                <div class="flex-1 md:pr-12 md:py-8 md:text-right md:order-1 md:order-none"></div>
                
                <div class="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-primary-500 text-white font-bold my-4 md:my-0 z-10">
                  4
                </div>
                
                <div class="flex-1 md:pl-12 md:py-8 animate-slide-left">
                  <h3 class="text-xl font-bold mb-3 text-gray-900 dark:text-white">Testing & Quality Assurance</h3>
                  <p class="text-gray-600 dark:text-gray-400">
                    Rigorous testing across different devices and browsers ensures the project works flawlessly. 
                    This includes user testing, performance optimization, and bug fixing.
                  </p>
                </div>
              </div>
              
              <!-- Step 5 -->
              <div class="relative flex flex-col md:flex-row items-center">
                <div class="flex-1 md:text-right md:pr-12 md:py-8 animate-slide-right">
                  <h3 class="text-xl font-bold mb-3 text-gray-900 dark:text-white">Deployment & Launch</h3>
                  <p class="text-gray-600 dark:text-gray-400">
                    Once approved, the project is deployed to a production environment with careful attention to 
                    performance, security, and SEO. A launch checklist ensures everything is ready for users.
                  </p>
                </div>
                
                <div class="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-primary-500 text-white font-bold my-4 md:my-0 z-10">
                  5
                </div>
                
                <div class="flex-1 md:pl-12 md:py-8"></div>
              </div>
              
              <!-- Step 6 -->
              <div class="relative flex flex-col md:flex-row items-center">
                <div class="flex-1 md:pr-12 md:py-8 md:text-right md:order-1 md:order-none"></div>
                
                <div class="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-primary-500 text-white font-bold my-4 md:my-0 z-10">
                  6
                </div>
                
                <div class="flex-1 md:pl-12 md:py-8 animate-slide-left">
                  <h3 class="text-xl font-bold mb-3 text-gray-900 dark:text-white">Support & Maintenance</h3>
                  <p class="text-gray-600 dark:text-gray-400">
                    I provide ongoing support and maintenance to ensure your project continues to run smoothly, 
                    with updates, improvements, and addressing any issues that may arise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Testimonials Section -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <SectionHeading 
          title="Client Testimonials"
          subtitle="Don't just take my word for it - here's what my clients have to say."
        />
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(testimonial, index) in testimonials" :key="index" class="card p-8">
            <div class="flex items-center mb-6">
              <div class="text-yellow-400 flex">
                <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
            
            <blockquote class="text-gray-600 dark:text-gray-400 italic mb-6">
              "{{ testimonial.quote }}"
            </blockquote>
            
            <div class="flex items-center">
              <div class="w-12 h-12 rounded-full overflow-hidden mr-4">
                <img :src="testimonial.avatar" :alt="testimonial.name" class="w-full h-full object-cover" />
              </div>
              <div>
                <h4 class="text-lg font-bold text-gray-900 dark:text-white">{{ testimonial.name }}</h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">{{ testimonial.position }}, {{ testimonial.company }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Have a project in mind?</h2>
        <p class="text-xl mb-8 max-w-3xl mx-auto">
          Let's work together to bring your ideas to life! Whether you need a website, web application, 
          or digital solution, I'm here to help.
        </p>
        <NuxtLink to="/contact" class="btn bg-white text-primary-600 hover:bg-gray-100 focus:ring-white">
          Let's Talk
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// Page meta
useHead({
  title: 'Projects | My Portfolio',
  meta: [
    { name: 'description', content: 'Explore my portfolio of web development projects across various industries and technologies.' }
  ]
});

const categories = ['All', 'Web App', 'E-Commerce', 'UI/UX', 'Mobile App', 'Marketing'];
const activeCategory = ref('All');

const projects = [
  {
    title: 'E-Commerce Website',
    description: 'A fully responsive e-commerce website with shopping cart functionality, user authentication, and payment processing.',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    tags: ['Vue.js', 'Nuxt', 'Tailwind CSS', 'Stripe'],
    category: 'E-Commerce',
    demoUrl: '#',
    codeUrl: '#'
  },
  {
    title: 'Task Management App',
    description: 'A productivity application that helps users organize tasks, set deadlines, and track progress with intuitive UI.',
    image: 'https://images.pexels.com/photos/3182774/pexels-photo-3182774.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    tags: ['React', 'Redux', 'Node.js', 'MongoDB'],
    category: 'Web App',
    demoUrl: '#',
    codeUrl: '#'
  },
  {
    title: 'Weather Dashboard',
    description: 'Real-time weather information dashboard with location-based forecasts, historical data, and interactive maps.',
    image: 'https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    tags: ['JavaScript', 'API Integration', 'Chart.js', 'CSS3'],
    category: 'Web App',
    demoUrl: '#',
    codeUrl: '#'
  },
  {
    title: 'Fitness Tracking Mobile App',
    description: 'A cross-platform mobile application that helps users track workouts, nutrition, and fitness goals.',
    image: 'https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    tags: ['React Native', 'Firebase', 'Redux', 'Expo'],
    category: 'Mobile App',
    demoUrl: '#',
    codeUrl: '#'
  },
  {
    title: 'Restaurant Booking System',
    description: 'An online reservation system for restaurants with table management, customer profiles, and automated reminders.',
    image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    tags: ['Vue.js', 'Node.js', 'Express', 'MongoDB'],
    category: 'Web App',
    demoUrl: '#',
    codeUrl: '#'
  },
  {
    title: 'Portfolio Website Redesign',
    description: 'A complete redesign of a photographer\'s portfolio website with gallery management and client access areas.',
    image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    tags: ['HTML', 'CSS', 'JavaScript', 'Figma'],
    category: 'UI/UX',
    demoUrl: '#',
    codeUrl: '#'
  },
  {
    title: 'Marketing Landing Page',
    description: 'A high-converting landing page for a marketing campaign with A/B testing, analytics integration, and lead capture.',
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    tags: ['HTML', 'CSS', 'JavaScript', 'Google Analytics'],
    category: 'Marketing',
    demoUrl: '#',
    codeUrl: '#'
  },
  {
    title: 'Real Estate Platform',
    description: 'A comprehensive real estate platform with property listings, virtual tours, agent profiles, and search functionality.',
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    tags: ['React', 'Node.js', 'MongoDB', 'Google Maps API'],
    category: 'Web App',
    demoUrl: '#',
    codeUrl: '#'
  },
  {
    title: 'Luxury Watch Store',
    description: 'An elegant e-commerce platform for a luxury watch brand with advanced filtering, wishlist, and 3D product views.',
    image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    tags: ['Vue.js', 'Nuxt.js', 'Strapi CMS', 'Three.js'],
    category: 'E-Commerce',
    demoUrl: '#',
    codeUrl: '#'
  }
];

const testimonials = [
  {
    quote: "Working with John was an absolute pleasure! He took our vague idea and turned it into a stunning website that perfectly represents our brand. His attention to detail and technical expertise are impressive.",
    name: "Sarah Johnson",
    position: "Marketing Director",
    company: "StyleBoutique",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=150"
  },
  {
    quote: "John delivered our e-commerce platform ahead of schedule and with all the features we requested. The site is fast, mobile-friendly, and our sales have increased by 40% since launch. Highly recommended!",
    name: "Michael Chen",
    position: "CEO",
    company: "TechGadgets Inc.",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=150"
  },
  {
    quote: "We hired John to redesign our outdated website, and the results exceeded our expectations. He was communicative throughout the process and provided thoughtful solutions to our specific needs.",
    name: "Emily Rodriguez",
    position: "Operations Manager",
    company: "Wellness Center",
    avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=150"
  }
];

const filteredProjects = computed(() => {
  if (activeCategory.value === 'All') {
    return projects;
  }
  return projects.filter(project => project.category === activeCategory.value);
});
</script>