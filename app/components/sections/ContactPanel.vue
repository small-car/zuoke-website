<script setup lang="ts">
defineProps<{ phone: string; email: string; address: string }>()
</script>

<template>
  <section class="contact-panel">
    <div>
      <h3>联系我们</h3>
      <p>填写需求或直接联系销售，我们将尽快为您提供项目建议与实施路径。</p>
      <ul class="contact-list">
        <li>电话：{{ phone }}</li>
        <li>Email：{{ email }}</li>
        <li>地址：{{ address }}</li>
      </ul>
    </div>
    <form class="contact-form" @submit.prevent>
      <input placeholder="姓名" autocomplete="name" />
      <input placeholder="公司/部门" />
      <input placeholder="电话/邮箱" autocomplete="email" />
      <textarea placeholder="项目需求"></textarea>
      <button class="primary" type="submit">提交需求</button>
    </form>
  </section>
</template>

