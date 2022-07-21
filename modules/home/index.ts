import path from 'path'
import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  // Default configuration options for your module
  defaults: {},
  hooks: {
    // ROUTES
    'pages:extend' (pages) {
      pages.push({
        name: 'home',
        path: '/home',
        file: path.resolve(__dirname, './pages/homePage.vue')
      })
    },

    // COMPONENTS
    'components:dirs' (dirs) {
      // Add ./components dir to the list
      dirs.push({
        path: path.resolve(__dirname, './components')
      })
    },

    // COMPOSABLES
    'autoImports:dirs' (dirs) {
      dirs.push(path.resolve(__dirname, './composables'))
    }
  },
  setup (options, nuxt) {
    // -- Add your module logic here --
    nuxt.options.css.push(path.resolve(__dirname, './assets/css/homeComponentStyle.css'))
  }
})
