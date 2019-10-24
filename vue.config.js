const path = require('path')

function resolve(dir) {
  return path.join(__dirname, './', dir)
}
// cdn 预加载使用
const externals = {
  "core-js": "CorrJs",
  "postcss-write-svg": "PostcssWriteSvg",
  "svg-sprite-loader": "SvgSpriteLoader",
  "vue": "Vue",
  "vue-router": "VueRouter",
  "vuex": "Vuex"
}
const cdn = {
  // 开发环境
  dev: {
    css: [],
    js: [
      'https://cdn.bootcss.com/core-js/2.6.9/core.js'
    ]
  },
  // 生产环境
  build: {
    css: [],
    js: [
      'https://cdn.bootcss.com/core-js/2.6.9/core.js'
    ]
  }
}
module.exports = {
  configureWebpack: config => {
    const myConfig = {}
    if (process.env.NODE_ENV === 'production') {
      // 生产环境
      myConfig.externals = externals
    }
    if(process.env.NODE_ENV === 'development'){
      // 开发环境
      myConfig.devServer = {
        disableHostCheck: true
      }
    }
    return myConfig
  },
  chainWebpack: config => {
    /**
     * 添加CDN参数到htmlWebpackPlugin配置中， 详见public/index.html 修改
     */
    config.plugin('html').tap(args => {
      if (process.env.NODE_ENV === 'production') {
        args[0].cdn = cdn.build
      }
      if (process.env.NODE_ENV === 'development') {
        args[0].cdn = cdn.dev
      }
      return args
    })

    // svg loader
    const svgRule = config.module.rule('svg') // 找到svg-loader
    svgRule.uses.clear() // 清除已有的loader, 如果不这样做会添加在此loader之后
    svgRule.exclude.add(/node_modules/) // 正则匹配排除node_modules目录
    svgRule // 添加svg新的loader处理
      .test(/\.svg$/)
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })

    // 修改images loader 添加svg处理
    const imagesRule = config.module.rule('images')
    imagesRule.exclude.add(resolve('src/icons'))
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
  },
  devServer: {
    open: true,
    hot: true,
    // https: true,
    proxy: {
      '/api': {
        target: 'http://localhost:4000/api',
        ws: false,
        changeOrigin: true
      }
    }
  }
}