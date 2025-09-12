<template>
  <section id="skills" class="py-20 px-4 bg-background">
    <div class="container mx-auto max-w-6xl">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-heading mb-4">
          Skills & Technologies
        </h2>
        <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
          Technologies and tools I work with
        </p>
      </div>

      <!-- Skills by Category -->
      <div class="space-y-16">
        <div v-for="category in skillCategories" :key="category.name" class="space-y-8">
          <h3 class="text-xl font-semibold text-heading text-center flex items-center justify-center gap-2">
            <component :is="category.icon" class="w-5 h-5" />
            {{ category.name }}
          </h3>

          <div class="flex flex-wrap justify-center gap-6">
            <div v-for="skill in category.skills" :key="skill.name"
              class="group flex flex-col items-center p-4 rounded-xl bg-card hover:bg-accent transition-all duration-200 border border-border hover:border-primary/20 hover:shadow-md min-w-[120px]">
              <!-- Skill Logo/Icon -->
              <div
                class="w-12 h-12 mb-3 flex items-center justify-center bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <img 
                  :src="`/images/${skill.logo}`" 
                  :alt="skill.name" 
                  class="w-8 h-8 object-contain"
                />
              </div>

              <!-- Skill Name -->
              <h4 class="font-medium text-sm text-card-foreground group-hover:text-accent-foreground text-center">
                {{ skill.name }}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  Code,
  Server,
  Database,
  Wrench,
  Cloud,
  Languages,
} from 'lucide-vue-next'
import type { Skill } from '~/types/portfolio'

interface Props {
  skills: Skill[]
}

const props = defineProps<Props>()

const categoryIcons = {
  'Frontend': Code,
  'Backend': Server,
  'Database': Database,
  'Tools': Wrench,
  'DevOps': Cloud,
  'Languages': Languages
}

const skillCategories = computed(() => {
  const categories = props.skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push(skill)
    return acc
  }, {} as Record<string, Skill[]>)

  return Object.entries(categories).map(([name, skills]) => ({
    name,
    skills: skills.sort((a, b) => a.name.localeCompare(b.name)),
    icon: categoryIcons[name as keyof typeof categoryIcons] || Code
  }))
})
</script>