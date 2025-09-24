<template>
  <section id="work-experience" class="py-20 px-4">
    <div class="container mx-auto max-w-4xl">
      <!-- Section Header -->
      <div class="text-left mb-6">
        <h2 class="text-3xl md:text-4xl font-bold text-heading">
          Work experience
        </h2>
      </div>

      <!-- Skills by Category -->
      <div class="">
        <div class="flex flex-col justify-start gap-4 mx-auto">
          <div v-for="company in props.workExperience" :key="company.companyName"
            class="flex items-center bg-card gap-x-2">
            <!-- Skill Logo/Icon -->
            <!-- Uncomment to add -->
            <div class="w-12 h-12 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
              <img v-if="company.companyIcon" :src="`/images/${company.companyIcon}`" :alt="company.companyName"
                class="w-8 h-8 object-contain rounded" />
            </div>

            <!-- Company Name -->
            <h4 class="font-medium text-base flex flex-col text-card-foreground group-hover:text-accent-foreground">
              {{ company.companyName }}
              <span className="font-normal text-sm">{{ company.jobTitle }}</span>
            </h4>

            <p className="flex-1 font-normal text-base text-muted-foreground text-right">
              {{ company.dates }}
            </p>
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
import type { WorkExperience } from '~/types/portfolio'

interface Props {
  workExperience: WorkExperience[]
}

const props = defineProps<Props>()

</script>