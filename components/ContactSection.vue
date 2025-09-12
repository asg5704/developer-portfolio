<template>
  <section id="contact" class="py-20 px-4 bg-background">
    <div class="container mx-auto max-w-4xl">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-heading mb-4">
          Let's Work Together
        </h2>
        <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
          I'm always interested in new opportunities and exciting projects.
          Feel free to reach out!
        </p>
      </div>

      <!-- Contact Methods -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <!-- Email Card -->
        <div
          class="group p-6 bg-card rounded-xl border border-border hover:border-primary/20 hover:bg-accent transition-all duration-300">
          <div class="flex items-center gap-4 mb-4">
            <div class="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
              <Mail class="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 class="font-semibold text-card-foreground group-hover:text-accent-foreground">
                Email Me
              </h3>
              <p class="text-sm text-muted-foreground">
                Get in touch via email
              </p>
            </div>
          </div>
          <a :href="`mailto:${data.email}`" class="text-primary hover:text-primary/80 transition-colors font-medium">
            {{ data.email }}
          </a>
        </div>

        <!-- Location Card -->
        <div
          class="group p-6 bg-card rounded-xl border border-border hover:border-primary/20 hover:bg-accent transition-all duration-300">
          <div class="flex items-center gap-4 mb-4">
            <div class="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
              <MapPin class="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 class="font-semibold text-card-foreground group-hover:text-accent-foreground">
                Location
              </h3>
              <p class="text-sm text-muted-foreground">
                Based in
              </p>
            </div>
          </div>
          <p class="text-muted-foreground">
            {{ data.location }}
          </p>
        </div>
      </div>

      <!-- Social Links -->
      <div class="text-center">
        <p class="text-muted-foreground mb-6">
          Or connect with me on social media
        </p>
        <div class="flex justify-center gap-4">
          <a v-if="data.links.github" :href="data.links.github" target="_blank" rel="noopener noreferrer"
            class="group p-4 bg-card hover:bg-accent rounded-xl border border-border hover:border-primary/20 transition-all duration-300">
            <Github class="w-6 h-6 text-muted-foreground group-hover:text-foreground" />
          </a>
          <a v-if="data.links.linkedin" :href="data.links.linkedin" target="_blank" rel="noopener noreferrer"
            class="group p-4 bg-card hover:bg-accent rounded-xl border border-border hover:border-primary/20 transition-all duration-300">
            <Linkedin class="w-6 h-6 text-muted-foreground group-hover:text-foreground" />
          </a>
          <a v-if="data.links.twitter" :href="data.links.twitter" target="_blank" rel="noopener noreferrer"
            class="group p-4 bg-card hover:bg-accent rounded-xl border border-border hover:border-primary/20 transition-all duration-300">
            <Twitter class="w-6 h-6 text-muted-foreground group-hover:text-foreground" />
          </a>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center mt-12">
        <a :href="`mailto:${data.email}?subject=Let's%20work%20together`"
          class="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
          <Send class="w-4 h-4" />
          Send Message
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Mail, MapPin, Github, Linkedin, ExternalLink, Twitter, Send } from 'lucide-vue-next'
import type { PortfolioData } from '~/types/portfolio'

interface Props {
  data: PortfolioData
}

defineProps<Props>()
</script>