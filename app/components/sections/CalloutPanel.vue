<script setup lang="ts">
defineProps<{
  title: string
  description: string
  primary: string
  primaryTo?: string
  secondary?: string
  secondaryTo?: string
}>()
</script>

<template>
  <section class="callout-panel">
    <div>
      <p class="eyebrow">立即行动</p>
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
    </div>
    <div class="callout-actions">
      <NuxtLink v-if="primaryTo" class="primary" :to="primaryTo">{{ primary }}</NuxtLink>
      <button v-else class="primary" type="button">{{ primary }}</button>
      <NuxtLink v-if="secondary && secondaryTo" class="matrix" :to="secondaryTo">{{ secondary }}</NuxtLink>
      <button v-else-if="secondary" class="matrix" type="button">{{ secondary }}</button>
    </div>
  </section>
</template>
