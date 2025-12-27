<script setup lang="ts">
defineProps<{ items: { title: string; desc: string; icon: string }[] }>()
</script>

<template>
  <div class="grid">
    <article v-for="item in items" :key="item.title" class="product-card">
      <img class="product-icon" :src="item.icon" :alt="item.title" loading="lazy" />
      <h3>{{ item.title }}</h3>
      <p>{{ item.desc }}</p>
      <NuxtLink class="text-link" to="/hardware">查看详情 →</NuxtLink>
    </article>
  </div>
</template>

