export default defineNuxtConfig({
  app: {
    head: {
      titleTemplate: 'Nuxt Academy | %s'
    }
  },
  srcDir: 'src',
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/supabase', '@vueuse/nuxt', 'nuxt-icon']
})
