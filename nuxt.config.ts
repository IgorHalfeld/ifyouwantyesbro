// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@nuxtjs/google-fonts", "@nuxtjs/tailwindcss", "@nuxtjs/seo"],

  tailwindcss: {
    plugins: [require("@tailwindcss/forms")],
  },

  googleFonts: {
    families: {
      Inter: [300, 800],
    },
  },
});
