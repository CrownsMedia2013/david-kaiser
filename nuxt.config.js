import Prismic from '@prismicio/client'
import sm from './slicemachine.config.json'
import lessPluginFunctions from 'less-plugin-functions'
//import getRoutes from './utils/getRoutes'

export default async () => {
  const client = await Prismic.getApi(sm.apiEndpoint)
  const locales = client.languages.map(lang => lang.id)
  const defaultLocale = locales[0]

  return {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'server',
    // Enviroment variables
    env: {
      baseUrl: process.env.BASE_URL || sm.hostname
    },

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
      title: 'Koppenhagen',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: ''
        },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]
    },

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
      '@nuxt/image'
      //'@nuxt/postcss8'
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
      '@nuxtjs/i18n',
      /* Load Prismic module after i18n module to prevent extend route concurrency */ 
      '@nuxtjs/prismic',
      '@nuxtjs/sitemap'
    ],

    build: {
      // See: https://github.com/nuxt/postcss8/issues/24
      /*loaders: {
        css: {
          modules: false
        }
      },*/
      /*postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {}
        }
      },*/
      transpile: ['@prismicio/vue', '@iconify/utils'],
      extend(config, { loaders: { less } }) {
        less.lessOptions = { 
          plugins: [ 
            new lessPluginFunctions()
          ]
        }
      }
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
      '@/assets/style.less'
      /*'@fontsource/inter/400.css',
      '@fontsource/inter/600.css',
      '@fontsource/libre-baskerville/400.css',
      '@fontsource/libre-baskerville/400-italic.css',
      '@fontsource/libre-baskerville/700.css',
      //'flag-icons/css/flag-icons.css'*/
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    publicRuntimeConfig: {
      development: process.env.NODE_ENV === 'development'
    },

    i18n: {
      locales,
      defaultLocale
    },

    plugins: [
      { src: '~/plugins/link-resolver' },
      { src: '~/plugins/not-empty' },
      { src: '~/plugins/iconify' },
      { src: '~/plugins/inverse-colors' },
      { src: '~/plugins/DocumentLink' },
      { src: '~/plugins/uikit', ssr: false },
      { src: '~/plugins/client-fixes', ssr: false },
      { src: '~/plugins/scroll.js', ssr: false }
    ],

    prismic: {
      endpoint: sm.apiEndpoint,
      modern: true,
      linkResolver: '~/plugins/link-resolver'
    },

    // Set nuxt image provider
    image: {
      provider: 'imgproxy',
      providers: {
        imgproxy: {
          name: 'imgproxy',
          provider: '~/providers/imgproxy.js'
        },
      }
    },

    //sitemap: {
    //  hostname: sm.hostname,
    //  path: '/sitemap.xml',
    //  cacheTime: 10,
    //  gzip: true,
    //  exclude: [ '/preview', '**/404', '/slice-simulator' ],
    //  routes: getRoutes
    //}
  }
}
