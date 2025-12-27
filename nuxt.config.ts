export default defineNuxtConfig({
  srcDir: 'app/',
  modules: ["@nuxtjs/sitemap"],
  devtools: { enabled: false },
  app: {
    head: {
      title: '杭州佐客科技有限公司 · 电力物联官网',
      meta: [
        { name: 'description', content: '软硬件一体化的电力物联网平台与云应用' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  },
  css: ['~/assets/css/main.scss'],
  runtimeConfig: {
    public: {
      contactPhone: '400-000-xxxx',
      contactEmail: 'sales@zuokeelectric.com'
    }
  }
})
