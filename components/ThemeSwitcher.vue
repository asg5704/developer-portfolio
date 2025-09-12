<template>
  <div class="relative">
    <!-- Theme Toggle Button -->
    <button
      @click="toggleTheme"
      class="p-2 rounded-lg bg-card hover:bg-accent transition-colors border border-border"
      :title="`Switch to ${isDark ? 'light' : 'dark'} mode`"
    >
      <Sun 
        v-if="isDark" 
        class="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors" 
      />
      <Moon 
        v-else 
        class="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors" 
      />
    </button>
  </div>
</template>

<script setup lang="ts">
import { Sun, Moon } from 'lucide-vue-next'

const colorMode = useColorMode()

const isDark = computed(() => colorMode.value === 'dark')

const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>