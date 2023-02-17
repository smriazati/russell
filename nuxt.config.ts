// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/sanity'],
  app: {
    layoutTransition: { name: 'layout', mode: 'out-in' },
    pageTransition: { name: 'layout', mode: 'out-in' }
  },
  pages: true,
  sanity: {
    projectId: 'b5rvg8t0'
  },
  buildModules: [
    '@nuxtjs/google-fonts'
  ],
  css: [
    '@/assets/css/main.css'
  ],  
  googleFonts: {
    families: {
      'DM+Sans': {
        wght: [400, 700],
        ital: [400]
      },
    }
  }
})
