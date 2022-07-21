import { defineNuxtConfig } from 'nuxt'
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    // Load modules locally
    '~/modules/home/index.ts',
    '~/modules/somePage/index.ts',
  ],
  modern: true,
  build: {
    analyze: true
  },
  css: ['~/assets/scss/global.scss'],
  buildModules: ['@pinia/nuxt'],
  vite: {
    server: {
      host: '127.0.0.1'
    },
    mode: 'production',
    build: {
      minify: 'esbuild',
      lib: false,
      cssCodeSplit: true
    }

  },
  builder: 'vite',
  webpack: {
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            chunks: 'initial',
            filename: 'vendors.[contenthash].js',
            priority: 1,
            maxInitialRequests: 2,
            minChunks: 3 // count of entries
          }
        }
      }
    }
  }
})