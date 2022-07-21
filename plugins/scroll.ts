export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.$router.options.scrollBehavior = () => {
    return { left: 0, top: 0 }
  }
})

// export default defineNuxtPlugin((nuxtApp) => {
//   nuxtApp.hook('page:finish', async (a) => {
//     window.scrollTo({ top: 0 })
//   })
// })
