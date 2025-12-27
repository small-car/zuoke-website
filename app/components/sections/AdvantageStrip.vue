<script setup lang="ts">
type AdvantageItem = {
  title: string
  lines: string[]
  icon: 'tech' | 'product' | 'service' | 'team'
}

const items: AdvantageItem[] = [
  { title: '领先的技术', lines: ['自主研发的平台化系统构架', '真正的云+大数据平台'], icon: 'tech' },
  { title: '成熟的产品', lines: ['完整的软硬件产品体系', '十年市场应用验证'], icon: 'product' },
  { title: '专业的服务', lines: ['完善的服务体系', '+专业的服务团队'], icon: 'service' },
  { title: '卓越的团队', lines: ['云计算/互联网专家', '+高效研发流程'], icon: 'team' }
]
</script>

<template>
  <section class="advantage-strip" aria-label="核心优势">
    <div class="advantage-inner">
      <div class="advantage-card">
        <article v-for="item in items" :key="item.title" class="advantage-item">
          <div class="advantage-icon" :data-icon="item.icon" aria-hidden="true">
            <svg viewBox="0 0 64 64" class="hex" role="presentation">
              <path
                d="M32 4 L53 16.5 V47.5 L32 60 L11 47.5 V16.5 Z"
                fill="rgba(60,125,255,0.10)"
                stroke="rgba(35,211,255,0.35)"
                stroke-width="2"
              />
            </svg>
            <svg v-if="item.icon === 'tech'" viewBox="0 0 64 64" class="glyph" role="presentation">
              <path d="M22 22h20v20H22z" fill="rgba(5,8,22,0.65)" stroke="rgba(60,125,255,0.9)" stroke-width="2" />
              <path d="M18 18l6 6M46 18l-6 6M18 46l6-6M46 46l-6-6" stroke="rgba(35,211,255,0.9)" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <svg v-else-if="item.icon === 'product'" viewBox="0 0 64 64" class="glyph" role="presentation">
              <path d="M20 26l12-8 12 8v16l-12 8-12-8V26z" fill="rgba(5,8,22,0.65)" stroke="rgba(60,125,255,0.9)" stroke-width="2"/>
              <path d="M32 18v32" stroke="rgba(35,211,255,0.9)" stroke-width="2" opacity="0.8"/>
            </svg>
            <svg v-else-if="item.icon === 'service'" viewBox="0 0 64 64" class="glyph" role="presentation">
              <path d="M22 26h20v22H22z" fill="rgba(5,8,22,0.65)" stroke="rgba(60,125,255,0.9)" stroke-width="2"/>
              <path d="M24 22h16" stroke="rgba(35,211,255,0.9)" stroke-width="2" stroke-linecap="round"/>
              <path d="M26 32h12M26 38h10M26 44h14" stroke="rgba(245,246,251,0.45)" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <svg v-else viewBox="0 0 64 64" class="glyph" role="presentation">
              <path d="M22 28a6 6 0 1 0 0.01 0zM42 28a6 6 0 1 0 0.01 0z" fill="rgba(5,8,22,0.65)" stroke="rgba(60,125,255,0.9)" stroke-width="2"/>
              <path d="M16 48c2-8 10-12 16-12s14 4 16 12" fill="none" stroke="rgba(35,211,255,0.9)" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
          <div class="advantage-text">
            <h3>{{ item.title }}</h3>
            <p v-for="line in item.lines" :key="line">{{ line }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

