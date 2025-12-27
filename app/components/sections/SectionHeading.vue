<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
}>()
</script>

<template>
  <header class="section-heading">
    <p v-if="subtitle" class="section-subtitle">{{ subtitle }}</p>
    <h2 class="section-title">{{ title }}</h2>
  </header>
</template>

