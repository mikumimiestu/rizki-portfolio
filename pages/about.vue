<template>
  <div>
    <!-- Hero Section -->
    <section class="relative py-20 bg-gray-50 dark:bg-gray-800/50">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white animate-slide-down">
            About Me
          </h1>
          <p class="text-xl text-gray-700 dark:text-gray-300 animate-slide-up">
            Learn more about my journey, experience, and what drives me as a developer.
          </p>
        </div>
      </div>
    </section>
    
    <!-- About Me Section -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="animate-slide-right">
            <img 
              src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
              alt="About Me" 
              class="rounded-xl shadow-lg w-full h-auto object-cover aspect-[4/3]"
            />
          </div>
          
          <div class="animate-slide-left">
            <h2 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">My Journey</h2>
            <p class="text-lg text-gray-700 dark:text-gray-300 mb-6">
              I'm  Rizki Ramadhanu, a passionate web developer with over 5 years of experience creating modern, 
              responsive websites and applications. My journey in web development began during my college years 
              when I started building small websites for friends and local businesses.
            </p>
            <p class="text-lg text-gray-700 dark:text-gray-300 mb-6">
              After graduating with a degree in Computer Science, I worked for several tech companies where 
              I gained valuable experience working on large-scale applications and collaborated with 
              talented developers who helped shape my skills and approach to software development.
            </p>
            <p class="text-lg text-gray-700 dark:text-gray-300">
              Today, I specialize in full-stack development, focusing on modern JavaScript frameworks like 
              Vue.js and React, along with backend technologies like Node.js and PHP. I'm passionate about 
              clean code, user experience, and staying up-to-date with the latest technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Why Choose Me Section -->
    <section class="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div class="container mx-auto px-4">
        <SectionHeading 
          title="Why Choose Me"
          subtitle="Here's what makes me different and how I can help bring your ideas to life."
        />
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="card p-8 hover:transform hover:-translate-y-2 transition-all duration-300">
            <div class="w-14 h-14 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3 text-gray-900 dark:text-white">Creative Problem Solver</h3>
            <p class="text-gray-600 dark:text-gray-400">
              I approach each project as a unique challenge, finding innovative solutions to complex problems and
              ensuring that the final product exceeds expectations.
            </p>
          </div>
          
          <div class="card p-8 hover:transform hover:-translate-y-2 transition-all duration-300">
            <div class="w-14 h-14 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3 text-gray-900 dark:text-white">Detail Oriented</h3>
            <p class="text-gray-600 dark:text-gray-400">
              I pay close attention to the smallest details, ensuring pixel-perfect designs, clean code, and 
              seamless user experiences across all devices and browsers.
            </p>
          </div>
          
          <div class="card p-8 hover:transform hover:-translate-y-2 transition-all duration-300">
            <div class="w-14 h-14 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3 text-gray-900 dark:text-white">Fast Learner</h3>
            <p class="text-gray-600 dark:text-gray-400">
              I quickly adapt to new technologies and project requirements, ensuring that I can 
              implement the best solutions for your specific needs.
            </p>
          </div>
          
          <div class="card p-8 hover:transform hover:-translate-y-2 transition-all duration-300">
            <div class="w-14 h-14 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3 text-gray-900 dark:text-white">Clear Communicator</h3>
            <p class="text-gray-600 dark:text-gray-400">
              I believe in transparent, honest communication throughout the project lifecycle, 
              ensuring that we're always on the same page and that your vision is realized.
            </p>
          </div>
          
          <div class="card p-8 hover:transform hover:-translate-y-2 transition-all duration-300">
            <div class="w-14 h-14 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3 text-gray-900 dark:text-white">Deadline Focused</h3>
            <p class="text-gray-600 dark:text-gray-400">
              I respect your time and project deadlines, delivering high-quality work on schedule 
              without compromising on performance or functionality.
            </p>
          </div>
          
          <div class="card p-8 hover:transform hover:-translate-y-2 transition-all duration-300">
            <div class="w-14 h-14 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3 text-gray-900 dark:text-white">User-Focused Design</h3>
            <p class="text-gray-600 dark:text-gray-400">
              I prioritize the end-user experience in all my projects, creating intuitive interfaces 
              and accessibility-compliant applications that delight users.
            </p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Education & Experience Section -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <SectionHeading 
          title="Education & Experience"
          subtitle="My academic background and professional journey."
        />
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <!-- Education Timeline -->
          <div>
            <h3 class="text-2xl font-bold mb-8 text-gray-900 dark:text-white flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
              Education
            </h3>
            
            <div class="space-y-12">
              <div class="relative pl-8 pb-12 border-l-2 border-gray-200 dark:border-gray-700">
                <div class="absolute -left-2 top-0 w-6 h-6 rounded-full bg-primary-600 dark:bg-primary-500 flex items-center justify-center">
                  <div class="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <div class="mb-1 text-sm font-medium text-primary-600 dark:text-primary-400">2014 - 2018</div>
                <h4 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">Bachelor of Science in Computer Science</h4>
                <p class="text-gray-600 dark:text-gray-400 mb-3">Stanford University</p>
                <p class="text-gray-600 dark:text-gray-400">
                  Focused on software engineering, web development, and database systems. 
                  Graduated with honors and participated in several hackathons.
                </p>
              </div>
              
              <div class="relative pl-8 pb-12 border-l-2 border-gray-200 dark:border-gray-700">
                <div class="absolute -left-2 top-0 w-6 h-6 rounded-full bg-primary-600 dark:bg-primary-500 flex items-center justify-center">
                  <div class="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <div class="mb-1 text-sm font-medium text-primary-600 dark:text-primary-400">2019 - 2020</div>
                <h4 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">Master's in Human-Computer Interaction</h4>
                <p class="text-gray-600 dark:text-gray-400 mb-3">MIT</p>
                <p class="text-gray-600 dark:text-gray-400">
                  Specialized in user experience design and front-end development. 
                  Thesis focused on improving accessibility in web applications.
                </p>
              </div>
              
              <div class="relative pl-8">
                <div class="absolute -left-2 top-0 w-6 h-6 rounded-full bg-primary-600 dark:bg-primary-500 flex items-center justify-center">
                  <div class="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <div class="mb-1 text-sm font-medium text-primary-600 dark:text-primary-400">2022</div>
                <h4 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">AWS Certified Solutions Architect</h4>
                <p class="text-gray-600 dark:text-gray-400 mb-3">Amazon Web Services</p>
                <p class="text-gray-600 dark:text-gray-400">
                  Professional certification for designing distributed systems on AWS.
                </p>
              </div>
            </div>
          </div>
          
          <!-- Experience Timeline -->
          <div>
            <h3 class="text-2xl font-bold mb-8 text-gray-900 dark:text-white flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Experience
            </h3>
            
            <div class="space-y-12">
              <div class="relative pl-8 pb-12 border-l-2 border-gray-200 dark:border-gray-700">
                <div class="absolute -left-2 top-0 w-6 h-6 rounded-full bg-primary-600 dark:bg-primary-500 flex items-center justify-center">
                  <div class="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <div class="mb-1 text-sm font-medium text-primary-600 dark:text-primary-400">2020 - Present</div>
                <h4 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">Senior Web Developer</h4>
                <p class="text-gray-600 dark:text-gray-400 mb-3">TechCorp Inc.</p>
                <p class="text-gray-600 dark:text-gray-400">
                  Lead developer for multiple high-profile web applications. Responsible for architecture decisions, 
                  code reviews, and mentoring junior developers.
                </p>
              </div>
              
              <div class="relative pl-8 pb-12 border-l-2 border-gray-200 dark:border-gray-700">
                <div class="absolute -left-2 top-0 w-6 h-6 rounded-full bg-primary-600 dark:bg-primary-500 flex items-center justify-center">
                  <div class="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <div class="mb-1 text-sm font-medium text-primary-600 dark:text-primary-400">2018 - 2020</div>
                <h4 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">Full-Stack Developer</h4>
                <p class="text-gray-600 dark:text-gray-400 mb-3">InnovateSoft</p>
                <p class="text-gray-600 dark:text-gray-400">
                  Developed and maintained multiple web applications using React, Node.js, and MongoDB. 
                  Implemented CI/CD pipelines and automated testing.
                </p>
              </div>
              
              <div class="relative pl-8">
                <div class="absolute -left-2 top-0 w-6 h-6 rounded-full bg-primary-600 dark:bg-primary-500 flex items-center justify-center">
                  <div class="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <div class="mb-1 text-sm font-medium text-primary-600 dark:text-primary-400">2016 - 2018</div>
                <h4 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">Web Development Intern</h4>
                <p class="text-gray-600 dark:text-gray-400 mb-3">StartUp Hub</p>
                <p class="text-gray-600 dark:text-gray-400">
                  Assisted in developing front-end interfaces using HTML, CSS, and JavaScript. 
                  Learned agile methodologies and collaborated with design teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Personal Interests Section -->
    <section class="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div class="container mx-auto px-4">
        <SectionHeading 
          title="When I'm Not Coding"
          subtitle="A glimpse into my personal interests and hobbies."
        />
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="card overflow-hidden group">
            <div class="relative h-64">
              <img 
                src="https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                alt="Photography" 
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end">
                <div class="p-6">
                  <h3 class="text-xl font-bold text-white mb-2">Photography</h3>
                  <p class="text-gray-200">
                    Capturing beautiful moments and landscapes through my lens.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="card overflow-hidden group">
            <div class="relative h-64">
              <img 
                src="https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                alt="Hiking" 
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end">
                <div class="p-6">
                  <h3 class="text-xl font-bold text-white mb-2">Hiking</h3>
                  <p class="text-gray-200">
                    Exploring nature trails and enjoying the great outdoors.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="card overflow-hidden group">
            <div class="relative h-64">
              <img 
                src="https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                alt="Reading" 
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end">
                <div class="p-6">
                  <h3 class="text-xl font-bold text-white mb-2">Reading</h3>
                  <p class="text-gray-200">
                    Diving into books about technology, science fiction, and philosophy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="py-20">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Ready to work together?</h2>
        <p class="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          I'm currently available for freelance work and exciting projects. Let's create something amazing together!
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <NuxtLink to="/contact" class="btn-primary">
            Contact Me
          </NuxtLink>
          <NuxtLink to="/projects" class="btn-outline">
            View My Work
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Page meta
useHead({
  title: 'About Me | My Portfolio',
  meta: [
    { name: 'description', content: 'Learn more about my journey, experience, and what drives me as a developer.' }
  ]
});
</script>