
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'IBS',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: '北京中科生仪科技有限公司获评为中关村高新技术企业，以先进生命科学技术和装备的研发、生产、销售、服务作为主营业务，其中侧重点集中于便携式核酸分子检测技术设备。' },
      { name: 'keywords', content: '中科生仪、便携式核酸分子检测技术设备，核酸实时定量分析系统、基因克隆、核酸提取、核酸纯化、蛋白质表达、蛋白质纯化、PCR、冻干'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  render: {
    bundleRenderer: {
      cache: require('lru-cache')({
        max: 1000,
        maxAge: 1000 * 60 * 15
      })
    }
  },
  build: {
    vender: [
      'element-ui', 'axios'
    ]
    // vendor: ['iview']
    /*
    ** Run ESLint on save
    */
    // extend (config, ctx) {
    //   if (ctx.dev && ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  },
  babel: {
    // plugins: [["component", [
    //   {
    //     libraryName: "element-ui",
    //     styleLibraryName: "theme-chalk"
    //   }
    // ]]]
  },
  plugins: [
    { src: '~plugins/element-ui', ssr: true },
    '~/plugins/axios'
  ],
  css: [
    // 全部引用的时候需要用到
    { src: '~css/reset.scss', lang: 'scss' },
    'element-ui/lib/theme-chalk/index.css',
    'element-ui/lib/theme-chalk/display.css',
    { src: '~css/element.scss', lang: 'scss' }
  ],
  modules: [
    '@nuxtjs/axios'
    // '@nuxtjs/proxy',
  ],
  axios: {
    proxy: process.env.NODE_ENV === 'development',
    // proxy: false,
    debug: true
  },
  proxy: [
    [
      '/api',
      {
        target: 'http://admin.ibs-bj.com/api',
        pathRewrite: { '^/api/': '/' }
      }
    ]
  ]
}
