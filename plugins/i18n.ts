import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  allowComposition: true,
  locale: 'uz',
  fallbackLocale: 'oz',
  availableLocales: ['ru', 'uz', 'en', 'oz'],
  messages: {
  }
})

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(i18n)
  nuxtApp.provide('i18n', i18n.global)
  nuxtApp.provide('t', i18n.global.t)
})
