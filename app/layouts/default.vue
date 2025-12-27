<script setup lang="ts">
import { ref } from 'vue'

const navLinks = [
  { label: '硬件矩阵', path: '/hardware' },
  { label: '物联平台', path: '/platform' },
  { label: '解决方案', path: '/solutions' },
  { label: '联系我们', path: '/contact' },
  { label: '登录', path: '/login', mobileOnly: true },
  { label: '注册', path: '/register', mobileOnly: true }
]

const isMenuOpen = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <div class="page-shell">
    <header class="site-header" :class="{ 'menu-open': isMenuOpen }">
      <NuxtLink class="logo" href="/">ZUOKE</NuxtLink>

      <button
        type="button"
        class="menu-toggle"
        aria-label="切换导航菜单"
        :aria-expanded="isMenuOpen"
        @click="toggleMenu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav class="site-nav" :class="{ open: isMenuOpen }">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          :class="{ 'mobile-only': link.mobileOnly }"
          @click="closeMenu"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <div class="header-actions desktop-only">
        <NuxtLink class="matrix" to="/login">登录</NuxtLink>
        <NuxtLink class="primary" to="/register">注册</NuxtLink>
      </div>
    </header>

    <main><slot /></main>

    <footer class="site-footer">
      <p>© {{ new Date().getFullYear() }} 杭州佐客科技有限公司 · 浙ICP备xxxxxx号</p>
    </footer>
  </div>
</template>
