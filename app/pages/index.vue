<script setup lang="ts">
const { stats } = useZuokeData()
</script>

<template>
  <div class="home home-bg">
    <SectionsHeroSection/>
    <SectionsStatsStrip :stats="stats" />
    <SectionsAdvantageStrip />

    <section class="split intro">
      <div>
        <SectionHeading title="杭州佐客科技有限公司" subtitle="电力物联与云边协同专家" />
                <p>
                    我们专注电力物联网平台、硬件与应用的一体化研发，帮助传统电力设备快速接入云端，构建覆盖软硬件、平台与数据的智慧生态。
                    通过数字化改造，我们助力企业提升运营效率与能源管理能力。
                </p>
                <div class="cta-row">
                    <NuxtLink class="primary" to="/solutions">查看解决方案</NuxtLink>
                    <NuxtLink class="matrix" to="/hardware">了解硬件矩阵</NuxtLink>
                </div>
            </div>
            <div>
                <p class="eyebrow">业务范围</p>
                <ul class="intro-list">
                    <li>电力监测、网关、采集器等硬件研发生产</li>
                    <li>电力设备物联平台与统一数据模型</li>
                    <li>云端能效、配电运维、安全巡检等行业应用</li>
                </ul>
            </div>
        </section>

        <CalloutPanel title="登录后获取资料与客户专区" description="注册账号后可获取解决方案资料下载入口与客户服务支持（演示）。" primary="注册"
            primary-to="/register" secondary="登录" secondary-to="/login" />
    </div>
</template>

<style scoped lang="scss">
.home-bg {
    background-image: url('/img/home-bg.svg');
    background-size: cover;
    background-position: center top;
    background-repeat: no-repeat;
    padding-bottom: 0;
}
</style>
