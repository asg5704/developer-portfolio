<template>
  <section id="skills" class="py-20 px-4">
    <div class="container mx-auto max-w-4xl">
      <!-- Section Header -->
      <div class="text-left mb-6">
        <h2 class="text-3xl md:text-4xl font-bold text-heading">
          Skills
        </h2>
      </div>

      <!-- Skills by Category -->
      <div class="max-w-[600px]">
        <div class="flex flex-wrap justify-start gap-2  mx-auto">
          <div v-for="skill in props.skills" :key="skill.name"
            class="group flex flex-col items-center rounded-lg bg-primary px-3 py-1">
            <!-- Skill Logo/Icon -->
            <!-- Uncomment to add -->
            <!-- <div
              class="w-12 h-12 mb-3 flex items-center justify-center bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
              <img :src="`/images/${skill.logo}`" :alt="skill.name" class="w-8 h-8 object-contain" />
            </div> -->

            <!-- Skill Name -->
            <h4 class="font-medium text-sm text-primary-foreground text-center">
              {{ skill.name }}
            </h4>
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

</script>