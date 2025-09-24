<template>
  <div id="home">
    <!-- Hero Section -->
    <HeroSection :data="portfolioData" />

    <!-- Work Experience -->
    <WorkExperience :work-experience="portfolioData.workExperience" />

    <!-- Skills Section -->
    <SkillsSection :skills="portfolioData.skills" />

    <!-- Projects Section -->
    <ProjectsSection :projects="portfolioData.projects" />

    <!-- Contact Section -->
    <ContactSection :data="portfolioData" />
  </div>
</template>

<script setup lang="ts">
import { portfolioData } from '~/data/portfolio'

// SEO Meta
useHead({
  title: `${portfolioData.name} - ${portfolioData.title}`,
  meta: [
    { name: 'description', content: portfolioData.bio },
    { name: 'author', content: portfolioData.name },
    { property: 'og:title', content: `${portfolioData.name} - ${portfolioData.title}` },
    { property: 'og:description', content: portfolioData.bio },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: `${portfolioData.name} - ${portfolioData.title}` },
    { name: 'twitter:description', content: portfolioData.bio }
  ],
})
</script>