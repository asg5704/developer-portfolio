<template>
  <div class="min-h-screen bg-background">
    <!-- Navigation -->
    <nav class="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div class="container mx-auto px-4 max-w-4xl">
        <div class="flex items-center justify-between h-16">
          <!-- Logo/Name -->
          <div class="font-bold text-xl text-heading">
            {{ portfolioData.name }}
          </div>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center gap-6">
            <nav class="flex items-center gap-8">
              <a v-for="item in navItems" :key="item.href" :href="item.href"
                class="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
                @click.prevent="scrollToSection(item.href)">
                {{ item.label }}
              </a>
            </nav>
            <ThemeSwitcher />
          </div>

          <!-- Mobile Actions -->
          <div class="md:hidden flex items-center gap-2">
            <ThemeSwitcher />
            <button class="p-2 rounded-md hover:bg-accent" @click="mobileMenuOpen = !mobileMenuOpen">
              <Menu v-if="!mobileMenuOpen" class="w-5 h-5" />
              <X v-else class="w-5 h-5" />
            </button>
          </div>
        </div>

        <!-- Mobile Navigation -->
        <div v-if="mobileMenuOpen" class="md:hidden py-4 border-t border-border">
          <div class="flex flex-col gap-4">
            <a v-for="item in navItems" :key="item.href" :href="item.href"
              class="text-muted-foreground hover:text-foreground transition-colors font-medium"
              @click.prevent="scrollToSection(item.href); mobileMenuOpen = false">
              {{ item.label }}
            </a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="pt-16">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="py-12 px-4 bg-muted/30 border-t border-border">
      <div class="container mx-auto max-w-4xl">
        <div class="flex flex-col md:flex-row items-center justify-between gap-6">
          <div class="text-center md:text-left">
            <p class="text-muted-foreground">
              © {{ currentYear }} {{ portfolioData.name }}. All rights reserved.
            </p>
          </div>

          <div class="flex items-center gap-4">
            <a v-if="portfolioData.links.github" :href="portfolioData.links.github" target="_blank"
              rel="noopener noreferrer" class="p-2 rounded-full bg-card hover:bg-accent transition-colors">
              <Github class="w-4 h-4 text-muted-foreground hover:text-foreground" />
            </a>
            <a v-if="portfolioData.links.linkedin" :href="portfolioData.links.linkedin" target="_blank"
              rel="noopener noreferrer" class="p-2 rounded-full bg-card hover:bg-accent transition-colors">
              <Linkedin class="w-4 h-4 text-muted-foreground hover:text-foreground" />
            </a>
            <a v-if="portfolioData.links.twitter" :href="portfolioData.links.twitter" target="_blank"
              rel="noopener noreferrer" class="p-2 rounded-full bg-card hover:bg-accent transition-colors">
              <Twitter class="w-4 h-4 text-muted-foreground hover:text-foreground" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { Menu, X, Github, Linkedin, Twitter } from 'lucide-vue-next'
import { portfolioData } from '~/data/portfolio';

const mobileMenuOpen = ref(false)

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' }
]

const currentYear = new Date().getFullYear()

function scrollToSection(href: string) {
  const sectionId = href.replace('#', '')

  nextTick(() => {
    const element = document.getElementById(sectionId)

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  })
}

// Close mobile menu when clicking outside
onMounted(() => {
  const handleClickOutside = (event: Event) => {
    const target = event.target as Element
    if (!target.closest('nav')) {
      mobileMenuOpen.value = false
    }
  }

  document.addEventListener('click', handleClickOutside)

  return () => {
    document.removeEventListener('click', handleClickOutside)
  }
})
</script>