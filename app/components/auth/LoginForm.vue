<script setup lang="ts">
import { computed, ref } from 'vue'

type LoginModel = {
  account: string
  password: string
  remember: boolean
}

const model = ref<LoginModel>({
  account: '',
  password: '',
  remember: true
})

const formError = ref<string | null>(null)
const submitted = ref(false)

const isValid = computed(() => {
  return model.value.account.trim().length >= 3 && model.value.password.length >= 6
})

const submit = async () => {
  submitted.value = true
  formError.value = null

  if (!isValid.value) {
    formError.value = '请检查账号与密码（密码至少 6 位）。'
    return
  }

  // TODO: 替换为真实登录接口（例如 server/api/login.post.ts）
  await new Promise((resolve) => setTimeout(resolve, 300))
  formError.value = '当前为演示页面，尚未接入登录接口。'
}
</script>

<template>
  <form class="auth-form" @submit.prevent="submit">
    <div class="form-field">
      <label for="account">账号</label>
      <input
        id="account"
        v-model.trim="model.account"
        autocomplete="username"
        placeholder="手机号 / 邮箱 / 用户名"
      />
    </div>

    <div class="form-field">
      <label for="password">密码</label>
      <input
        id="password"
        v-model="model.password"
        type="password"
        autocomplete="current-password"
        placeholder="请输入密码"
      />
    </div>

    <div class="form-row">
      <label class="checkbox">
        <input v-model="model.remember" type="checkbox" />
        <span>记住我</span>
      </label>
      <NuxtLink class="text-link" to="/register">没有账号？去注册</NuxtLink>
    </div>

    <p v-if="submitted && formError" class="form-error">{{ formError }}</p>

    <button class="primary" type="submit">登录</button>
  </form>
</template>

