<template>
  <div class="relative">
    <!-- Theme Toggle Button -->
    <button @click="toggleTheme" class="p-2 rounded-lg bg-card hover:bg-accent transition-colors border border-border">
      <Sun v-if="isDark" :class="className" />
      <Moon v-else :class="className" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { Sun, Moon } from 'lucide-vue-next'

const colorMode = useColorMode()

const isDark = computed(() => colorMode.value === 'dark')
const className = computed(() => `w-4 h-4 text-muted-foreground hover:text-foreground transition-colors`)

const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>