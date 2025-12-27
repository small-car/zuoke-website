<script setup lang="ts">
const { hardware } = useZuokeData()
</script>

<template>
  <div class="page hardware-page">
    <SectionsSectionHeading title="硬件矩阵" subtitle="自主研发 · 即插即用" />
    <p class="page-lead">
      通过智能电力监测仪、智能网关与数据采集器等硬件设备，快速完成现场数据采集与上云，为平台与云应用提供可靠的数据底座。
    </p>
    <SectionsProductGrid :items="hardware" />
    <SectionsCalloutPanel
      title="需要硬件选型与现场部署建议？"
      description="留下您的项目场景与设备规模，我们将为您提供接入方案与实施建议。"
      primary="联系我们"
      primary-to="/contact"
      secondary="去注册"
      secondary-to="/register"
    />
  </div>
</template>

