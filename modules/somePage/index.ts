import path from 'path'
import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  // Default configuration options for your module
  defaults: {},
  hooks: {
    // ROUTES
    'pages:extend' (pages) {
      pages.push(
        {
          name: 'some-page',
          path: '/some-page',
          file: path.resolve(__dirname, './pages/somePage.vue')
        }
      )
    },

    // COMPONENTS
    'components:dirs' (dirs) {
      // Add ./components dir to the list
      dirs.push({
        path: path.resolve(__dirname, './components')
      })
    },

  },
  setup (moduleOptions, nuxt) {
  }
})
