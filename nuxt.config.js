export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'quiz',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"},

      // { rel: 'stylesheet', href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap"},
      // { rel: 'stylesheet', href:"https://use.fontawesome.com/releases/v5.15.1/css/all.css"},
      // { rel: 'stylesheet', href:"https://cdn.jsdelivr.net/npm/mdb-vue-ui-kit/css/mdb.min.css"},
    ],
    // script: [
    //   {
    //     src: "https://unpkg.com/vue@next",
    //     src: "https://cdn.jsdelivr.net/npm/mdb-vue-ui-kit/js/mdb.umd.min.js",
    //     body: true,
    //   },
    // ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  // css: [
  //   '~/assets/styles/generic.css',
  // ],
  css: [
    // '~/assets/styles/generic.css',
    'bootstrap-css-only/css/bootstrap.min.css',
    'mdbvue/lib/css/mdb.min.css',
    // 'mdb-vue-ui-kit/css/mdb.min.css',
    
   ],
  // css: [
  //   'mdb-vue-ui-kit/css/mdb.min.css'    
  //  ],
  // css: [
  //   'bootstrap-css-only/css/bootstrap.min.css',
  //   'mdbvue/build/css/mdb.css'
  //  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  database: {
    emulatorPort: 9000,
    emulatorHost: 'localhost',
  },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // '@nuxtjs/fontawesome' 
  ],

  // fontawesome:{
  //   component:'fa',
  //   icons:{
  //     solid:true,
  //     brands:true,
  //   }
  // },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  // build: {
    
  // }
  build: {
    extend(config, ctx) {},
    transpile: [
      'mdbvue/lib/components'
    ]
  }
  // build: {
  //   extend(config, ctx) {},
  //   transpile: [
  //     'mdb-vue-ui-kit/src/components/free/components'
  //   ]
  // }
}
