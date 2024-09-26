// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  ssr: false,
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      meta: [
        {
          name: 'google-site-verification',
          content: 'iRM2mAsobIRkCayqeOJBlXglOgW5hqJhMTUP7xS3FG4'
        }
      ]
    }
  }
})
