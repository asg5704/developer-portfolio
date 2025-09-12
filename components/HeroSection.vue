<template>
  <section class="relative py-20 px-4 bg-gradient-to-br from-background to-muted">
    <div class="container mx-auto max-w-6xl">
      <div class="text-center space-y-8">
        <!-- Avatar/Photo -->
        <div class="relative w-32 h-32 mx-auto mb-8">
          <div class="w-full h-full rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <span class="text-4xl font-bold text-primary-foreground">
              {{ getInitials(data.name) }}
            </span>
          </div>
        </div>

        <!-- Name and Title -->
        <div class="space-y-4">
          <h1 class="text-4xl md:text-6xl font-bold text-heading">
            {{ data.name }}
          </h1>
          <h2 class="text-xl md:text-2xl text-heading font-medium">
            {{ data.title }}
          </h2>
        </div>

        <!-- Bio -->
        <p class="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          {{ data.bio }}
        </p>

        <!-- Location and Contact -->
        <div class="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <div class="flex items-center gap-2">
            <MapPin class="w-4 h-4" />
            <span>{{ data.location }}</span>
          </div>
          <div class="flex items-center gap-2">
            <Mail class="w-4 h-4" />
            <a :href="`mailto:${data.email}`" class="hover:text-foreground transition-colors">
              {{ data.email }}
            </a>
          </div>
        </div>

        <!-- Social Links -->
        <div class="flex justify-center gap-4">
          <a
            v-if="data.links.github"
            :href="data.links.github"
            target="_blank"
            rel="noopener noreferrer"
            class="p-3 rounded-full bg-card hover:bg-accent transition-colors group"
          >
            <Github class="w-5 h-5 text-muted-foreground group-hover:text-foreground" />
          </a>
          <a
            v-if="data.links.linkedin"
            :href="data.links.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="p-3 rounded-full bg-card hover:bg-accent transition-colors group"
          >
            <Linkedin class="w-5 h-5 text-muted-foreground group-hover:text-foreground" />
          </a>
          <a
            v-if="data.links.website"
            :href="data.links.website"
            target="_blank"
            rel="noopener noreferrer"
            class="p-3 rounded-full bg-card hover:bg-accent transition-colors group"
          >
            <ExternalLink class="w-5 h-5 text-muted-foreground group-hover:text-foreground" />
          </a>
          <a
            v-if="data.links.twitter"
            :href="data.links.twitter"
            target="_blank"
            rel="noopener noreferrer"
            class="p-3 rounded-full bg-card hover:bg-accent transition-colors group"
          >
            <Twitter class="w-5 h-5 text-muted-foreground group-hover:text-foreground" />
          </a>
        </div>

        <!-- CTA Button -->
        <div class="pt-8">
          <button
            @click="scrollToProjects"
            class="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            View My Work
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Github, Linkedin, ExternalLink, Twitter, MapPin, Mail } from 'lucide-vue-next'
import type { PortfolioData } from '~/types/portfolio'

interface Props {
  data: PortfolioData
}

defineProps<Props>()

function getInitials(name: string): string {
  return name
    .split(' ')
    .map(part => part.charAt(0))
    .join('')
    .toUpperCase()
}

function scrollToProjects() {
  nextTick(() => {
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  })
}
</script>