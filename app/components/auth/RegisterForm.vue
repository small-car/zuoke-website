<script setup lang="ts">
import { computed, ref } from 'vue'

type RegisterModel = {
  name: string
  company: string
  account: string
  password: string
  confirmPassword: string
  agree: boolean
}

const model = ref<RegisterModel>({
  name: '',
  company: '',
  account: '',
  password: '',
  confirmPassword: '',
  agree: false
})

const submitted = ref(false)
const formError = ref<string | null>(null)

const isValid = computed(() => {
  const accountOk = model.value.account.trim().length >= 3
  const passwordOk = model.value.password.length >= 6
  const confirmOk = model.value.password === model.value.confirmPassword
  return accountOk && passwordOk && confirmOk && model.value.agree
})

const submit = async () => {
  submitted.value = true
  formError.value = null

  if (!isValid.value) {
    formError.value = '请完善信息并同意条款（密码至少 6 位且两次一致）。'
    return
  }

  // TODO: 替换为真实注册接口（例如 server/api/register.post.ts）
  await new Promise((resolve) => setTimeout(resolve, 300))
  formError.value = '当前为演示页面，尚未接入注册接口。'
}
</script>

<template>
  <form class="auth-form" @submit.prevent="submit">
    <div class="form-grid">
      <div class="form-field">
        <label for="name">姓名</label>
        <input id="name" v-model.trim="model.name" autocomplete="name" placeholder="请输入姓名" />
      </div>
      <div class="form-field">
        <label for="company">公司/部门</label>
        <input id="company" v-model.trim="model.company" placeholder="例如：XX 电力 / 运维部" />
      </div>
    </div>

    <div class="form-field">
      <label for="account">账号</label>
      <input id="account" v-model.trim="model.account" autocomplete="username" placeholder="手机号 / 邮箱 / 用户名" />
    </div>

    <div class="form-grid">
      <div class="form-field">
        <label for="password">密码</label>
        <input id="password" v-model="model.password" type="password" autocomplete="new-password" placeholder="至少 6 位" />
      </div>
      <div class="form-field">
        <label for="confirmPassword">确认密码</label>
        <input
          id="confirmPassword"
          v-model="model.confirmPassword"
          type="password"
          autocomplete="new-password"
          placeholder="再次输入密码"
        />
      </div>
    </div>

    <div class="form-row">
      <label class="checkbox">
        <input v-model="model.agree" type="checkbox" />
        <span>我已阅读并同意</span>
      </label>
      <NuxtLink class="text-link" to="/login">已有账号？去登录</NuxtLink>
    </div>

    <p v-if="submitted && formError" class="form-error">{{ formError }}</p>

    <button class="primary" type="submit">注册</button>
  </form>
</template>

