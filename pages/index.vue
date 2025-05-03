<template>
  <div>
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center py-20">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="order-2 lg:order-1 animate-slide-right">
            <div class="text-sm font-medium text-primary-600 dark:text-primary-400 mb-4">Hello, I'm</div>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              John Doe
              <span class="text-primary-600 dark:text-primary-400">Developer</span>
            </h1>
            <p class="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
              I create beautiful, functional websites and applications with modern technologies.
            </p>
            <div class="flex flex-wrap gap-4">
              <NuxtLink to="/contact" class="btn-primary">
                Contact Me
              </NuxtLink>
              <NuxtLink to="/projects" class="btn-outline">
                View My Work
              </NuxtLink>
            </div>
            
            <div class="mt-12 flex items-center space-x-4">
              <a 
                v-for="(social, index) in socialLinks" 
                :key="index"
                :href="social.url" 
                target="_blank" 
                rel="noopener noreferrer"
                class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                :aria-label="social.name"
              >
                <div class="w-6 h-6" v-html="social.icon"></div>
              </a>
            </div>
          </div>
          
          <div class="order-1 lg:order-2 flex justify-center lg:justify-end animate-slide-left">
            <div class="relative">
              <div class="w-64 h-64 md:w-80 md:h-80 rounded-full bg-primary-600 dark:bg-primary-500 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="Profile"
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary-500 rounded-full flex items-center justify-center text-white font-bold">
                <div class="text-center">
                  <div class="text-lg">5+ Years</div>
                  <div class="text-sm">Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span class="text-sm text-gray-600 dark:text-gray-400 mb-2">Scroll Down</span>
        <div class="w-6 h-10 border-2 border-gray-600 dark:border-gray-400 rounded-full flex justify-center">
          <div class="w-1.5 h-3 bg-gray-600 dark:bg-gray-400 rounded-full mt-1.5 animate-bounce-light"></div>
        </div>
      </div>
    </section>
    
    <!-- About Section Preview -->
    <section class="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div class="container mx-auto px-4">
        <SectionHeading
          title="About Me"
          subtitle="I'm a passionate developer with a focus on creating beautiful and functional web applications."
        />
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div class="animate-slide-right">
            <p class="text-lg text-gray-700 dark:text-gray-300 mb-6">
              With over 5 years of experience in web development, I specialize in creating modern, 
              responsive websites and applications. I'm passionate about clean code, user experience, 
              and staying up-to-date with the latest technologies.
            </p>
            <p class="text-lg text-gray-700 dark:text-gray-300 mb-8">
              When I'm not coding, you can find me hiking in the mountains, reading about new 
              technologies, or experimenting with photography.
            </p>
            <NuxtLink to="/about" class="btn-primary">
              Learn More About Me
            </NuxtLink>
          </div>
          
          <div class="grid grid-cols-2 gap-6 animate-slide-left">
            <div class="card p-6 text-center group hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors duration-300">
              <AnimatedCounter :to="150" suffix="+" />
              <p class="mt-2 text-gray-600 dark:text-gray-400">Projects Completed</p>
            </div>
            <div class="card p-6 text-center group hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors duration-300">
              <AnimatedCounter :to="80" suffix="+" />
              <p class="mt-2 text-gray-600 dark:text-gray-400">Happy Clients</p>
            </div>
            <div class="card p-6 text-center group hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors duration-300">
              <AnimatedCounter :to="5" suffix="+" />
              <p class="mt-2 text-gray-600 dark:text-gray-400">Years Experience</p>
            </div>
            <div class="card p-6 text-center group hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors duration-300">
              <AnimatedCounter :to="15" suffix="+" />
              <p class="mt-2 text-gray-600 dark:text-gray-400">Technologies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Skills Section Preview -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <SectionHeading
          title="My Skills"
          subtitle="I work with a variety of technologies to create modern web applications."
        />
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCard
            title="Frontend Development"
            description="Building responsive and interactive user interfaces with modern frameworks and libraries."
            :items="['HTML/CSS', 'JavaScript', 'Vue.js', 'React', 'Tailwind CSS']"
            :delay="0"
            icon="<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' /></svg>"
          />
          
          <SkillCard
            title="Backend Development"
            description="Developing server-side applications and APIs with robust and scalable technologies."
            :items="['Node.js', 'Express', 'PHP', 'Python', 'RESTful APIs']"
            :delay="150"
            icon="<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01' /></svg>"
          />
          
          <SkillCard
            title="UI/UX Design"
            description="Creating intuitive and beautiful user interfaces with a focus on user experience."
            :items="['Figma', 'Adobe XD', 'Responsive Design', 'Prototyping']"
            :delay="300"
            icon="<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122' /></svg>"
          />
        </div>
        
        <div class="text-center mt-12">
          <NuxtLink to="/skills" class="btn-primary">
            View All Skills
          </NuxtLink>
        </div>
      </div>
    </section>
    
    <!-- Projects Section Preview -->
    <section class="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div class="container mx-auto px-4">
        <SectionHeading
          title="Featured Projects"
          subtitle="Check out some of my recent work."
        />
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            v-for="(project, index) in featuredProjects"
            :key="index"
            :project="project"
          />
        </div>
        
        <div class="text-center mt-12">
          <NuxtLink to="/projects" class="btn-primary">
            View All Projects
          </NuxtLink>
        </div>
      </div>
    </section>
    
    <!-- Contact CTA -->
    <section class="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to work together?</h2>
        <p class="text-xl mb-8 max-w-3xl mx-auto">
          I'm currently available for freelance work. If you have a project that you want to get started, 
          think you need my help with something or just want to say hello, then get in touch.
        </p>
        <NuxtLink to="/contact" class="btn bg-white text-primary-600 hover:bg-gray-100 focus:ring-white">
          Contact Me
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

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

const featuredProjects = [
  {
    title: 'E-Commerce Website',
    description: 'A fully responsive e-commerce website with shopping cart functionality, user authentication, and payment processing.',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    tags: ['Vue.js', 'Nuxt', 'Tailwind CSS', 'Stripe'],
    demoUrl: '#',
    codeUrl: '#'
  },
  {
    title: 'Task Management App',
    description: 'A productivity application that helps users organize tasks, set deadlines, and track progress with intuitive UI.',
    image: 'https://images.pexels.com/photos/3182774/pexels-photo-3182774.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    tags: ['React', 'Redux', 'Node.js', 'MongoDB'],
    demoUrl: '#',
    codeUrl: '#'
  },
  {
    title: 'Weather Dashboard',
    description: 'Real-time weather information dashboard with location-based forecasts, historical data, and interactive maps.',
    image: 'https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    tags: ['JavaScript', 'API Integration', 'Chart.js', 'CSS3'],
    demoUrl: '#',
    codeUrl: '#'
  }
];
</script>