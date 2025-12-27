<script setup lang="ts">
const { solutions } = useZuokeData()
</script>

<template>
  <div class="page solutions-page">
    <SectionsSectionHeading title="解决方案" subtitle="面向电力行业 B 端客户" />
    <p class="page-lead">
      从工业园区到城市配电网，佐客以软硬件一体化能力构建覆盖规划、实施、运维的整套数字化方案，提升安全与效率。
    </p>
    <SectionsTimelineStrip :items="solutions" />
    <SectionsCalloutPanel
      title="获取定制化方案"
      description="留下您的场景和需求，我们的解决方案团队将在 1 个工作日内与您联系。"
      primary="提交项目需求"
      primary-to="/contact"
      secondary="去注册"
      secondary-to="/register"
    />
  </div>
</template>

