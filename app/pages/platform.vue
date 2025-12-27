<script setup lang="ts">
const { software } = useZuokeData()
</script>

<template>
  <div class="page platform-page">
    <SectionsSectionHeading title="电力设备物联平台" subtitle="软硬件一体化生态" />
    <div class="split">
      <div>
        <p class="page-lead">
          平台提供协议接入、数据治理、事件告警、可视化等能力，让本地设备数据快速上云，打通云边协同链路，降低系统集成与软件开发门槛。
        </p>
        <ul>
          <li>统一数据模型与多租户架构</li>
          <li>实时告警、设备生命周期管理</li>
          <li>开放 API 与 SDK，支持快速二次开发</li>
        </ul>
      </div>
      <div class="card-list">
        <article v-for="item in software" :key="item.title">
          <h3>{{ item.title }}</h3>
          <ul>
            <li v-for="point in item.points" :key="point">{{ point }}</li>
          </ul>
        </article>
      </div>
    </div>
    <SectionsCalloutPanel
      title="登录后获取平台资料"
      description="注册账号可获取平台介绍、接口说明与方案资料入口（演示）。"
      primary="注册"
      primary-to="/register"
      secondary="登录"
      secondary-to="/login"
    />
  </div>
</template>

