<script setup lang="ts">
defineProps<{ stats: { label: string; value: string }[] }>()
</script>

<template>
  <section class="stats-strip" aria-label="关键指标">
    <div class="stats-grid">
      <div v-for="item in stats" :key="item.label" class="stat">
        <div class="stat-value">{{ item.value }}</div>
        <div class="stat-label">{{ item.label }}</div>
      </div>
    </div>
  </section>
</template>

