<script setup lang="ts">
const contact = useRuntimeConfig().public
</script>

<template>
  <div class="page contact-page">
    <SectionsSectionHeading title="联系我们" subtitle="与佐客开启电力物联合作" />
    <p class="page-lead">填写需求或直接拨打服务热线，我们将为您提供定制化建议和实施路径。</p>
    <section>
      <SectionsContactPanel :phone="contact.contactPhone" :email="contact.contactEmail" address="杭州市滨江区（示例地址）" />
    </section>

  </div>
</template>
