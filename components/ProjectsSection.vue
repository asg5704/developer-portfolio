<template>
  <section id="projects" class="py-20 px-4 bg-muted/30">
    <div class="container mx-auto max-w-6xl">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-heading mb-4">
          Project showcase
        </h2>
        <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
          I've worked on a huge variety of projects, however here are a selection of my favorite projects that showcase
          my skills and experience
        </p>
      </div>

      <!-- Project Filter -->
      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <button v-for="filter in filters" :key="filter" @click="activeFilter = filter"
          class="px-4 py-2 rounded-full text-sm font-medium transition-colors" :class="activeFilter === filter
            ? 'bg-primary text-primary-foreground'
            : 'bg-card text-card-foreground hover:bg-accent hover:text-accent-foreground'">
          {{ filter }}
        </button>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="project in filteredProjects" :key="project.id"
          class="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-border hover:border-primary/20">
          <!-- Project Image/Placeholder -->
          <div class="relative h-48 bg-gradient-to-br from-primary/10 to-secondary/10 overflow-hidden">
            <div v-if="project.imageUrl" class="w-full h-full">
              <!-- Placeholder for image -->
              <div
                class="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <span class="text-muted-foreground text-sm">{{ project.title }}</span>
              </div>
            </div>
            <div v-else class="w-full h-full flex items-center justify-center">
              <div class="text-6xl opacity-20">
                <Code class="w-16 h-16" />
              </div>
            </div>

            <!-- Status Badge -->
            <div class="absolute top-4 right-4">
              <span class="px-2 py-1 text-xs rounded-full" :class="getStatusColor(project.status)">
                {{ project.status }}
              </span>
            </div>

            <!-- Featured Badge -->
            <div v-if="project.featured" class="absolute top-4 left-4">
              <span
                class="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
                Featured
              </span>
            </div>
          </div>

          <!-- Project Content -->
          <div class="p-6 space-y-4">
            <div class="space-y-2">
              <h3 class="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors">
                {{ project.title }}
              </h3>
              <p class="text-muted-foreground text-sm leading-relaxed">
                {{ project.description }}
              </p>
            </div>

            <!-- Technologies -->
            <div class="flex flex-wrap gap-2">
              <span v-for="tech in project.technologies.slice(0, 3)" :key="tech"
                class="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground">
                {{ tech }}
              </span>
              <span v-if="project.technologies.length > 3"
                class="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground">
                +{{ project.technologies.length - 3 }}
              </span>
            </div>

            <!-- Project Links -->
            <div class="flex gap-3 pt-2">
              <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" rel="noopener noreferrer"
                class="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Github class="w-4 h-4" />
                Code
              </a>
              <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" rel="noopener noreferrer"
                class="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <ExternalLink class="w-4 h-4" />
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Show More Button -->
      <div v-if="hasMoreProjects" class="text-center mt-12">
        <button @click="showAllProjects = !showAllProjects"
          class="px-6 py-3 bg-card text-card-foreground rounded-lg font-medium hover:bg-accent hover:text-accent-foreground transition-colors border border-border">
          {{ showAllProjects ? 'Show Less' : 'View All Projects' }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Github, ExternalLink, Code } from 'lucide-vue-next'
import type { Project } from '~/types/portfolio'

interface Props {
  projects: Project[]
}

const props = defineProps<Props>()

const activeFilter = ref('All')
const showAllProjects = ref(false)

const filters = computed(() => {
  const statuses = [...new Set(props.projects.map(p => p.status))]
  return ['All', ...statuses]
})

const filteredProjects = computed(() => {
  let filtered = props.projects

  // Filter by status
  if (activeFilter.value !== 'All') {
    filtered = filtered.filter(project => project.status === activeFilter.value)
  }

  // Sort by featured first, then by date
  filtered = filtered.sort((a, b) => {
    if (a.featured && !b.featured) return -1
    if (!a.featured && b.featured) return 1
    return new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  })

  // Limit results if not showing all
  if (!showAllProjects.value) {
    filtered = filtered.slice(0, 6)
  }

  return filtered
})

const hasMoreProjects = computed(() => {
  return props.projects.length > 6
})

function getStatusColor(status: Project['status']): string {
  const colors = {
    'Completed': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    'In Progress': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
    'Archived': 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'
  }
  return colors[status]
}
</script>