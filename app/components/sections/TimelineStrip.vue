<script setup lang="ts">
defineProps<{ items: { name: string; benefit: string; kpi: string }[] }>()
</script>

<template>
    <ol class="timeline">
        <li v-for="item in items" :key="item.name">
            <span class="kpi">{{ item.kpi }}</span>
            <h4>{{ item.name }}</h4>
            <p>{{ item.benefit }}</p>
        </li>
    </ol>
</template>
