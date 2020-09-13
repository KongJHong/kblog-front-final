const path = require("path");
const resolve = dir => path.join(__dirname, dir);
const name = "TS-VUE";
const sourceMap = process.env.NODE_ENV === "development";
const indexPath = process.env.NODE_ENV === 'production' ? '/' : '/';


const devServerPort = 3010;
const mockServerPort = 9528;

module.exports = {
  // 默认情况下，Vue CLI 会假设你的应用是被部署在一个域名的根路径上，例如 https://www.my-app.com/。如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径。例如，如果你的应用被部署在 https://www.my-app.com/my-app/，则设置 publicPath 为 /my-app/。
  publicPath: '/',
  // 当运行 vue-cli-service build 时生成的生产环境构建文件的目录
  outputDir: 'dist',
  //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录，默认为""
  assetsDir:"",
  //指定生成的 index.html 的输出路径 (相对于 outputDir)
  indexPath: indexPath,
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  // webpack配置
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
 //如果这个值是一个对象，则会通过 [webpack-merge](https://github.com/survivejs/webpack-merge) 合并到最终的配置中。
 //如果这个值是一个函数，则会接收被解析的配置作为参数。该函数及可以修改配置并不返回任何东西，也可以返回一个被克隆或合并过的配置版本。
  configureWebpack: () => {
    devtool: 'source-map'
  },
 //是一个函数，会接收一个基于 [webpack-chain](https://github.com/mozilla-neutrino/webpack-chain) 的 `ChainableConfig` 实例。允许对内部的 webpack 配置进行更细粒度的修改。
  chainWebpack: config => {
    // 添加别名
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@assets", resolve("src/assets"))
      .set("@components", resolve("src/components"))
      .set("@router", resolve("src/router"))
      .set("@views", resolve("src/views"));
  },
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  // 是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建。
  parallel: require('os').cpus().length > 1,
  // PWA 插件相关配置
  // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {},
  /* webpack-dev-server 相关配置 */
  devServer: {
        /* 自动打开浏览器 */
        open: true,
        /* 设置为0.0.0.0则所有的地址均能访问 */
        host: "localhost",
        port: 3001, //8080,
        https: false,
        hotOnly: false,
        proxy: {
          // 设置代理
          // proxy all requests starting with /api to jsonplaceholder
          '/api': {
              // 代理到哪个地址   可以是后端，也可以是nginx
              target: 'http://127.0.0.1:3000/',
              // 开启代理：在本地创建一个虚拟服务器，发送请求、接受数据，不存在跨域问题。
              changeOrigin: true,
              ws: true,
              // 匹配所有的/ts替换为空
              pathRewrite: {
                '^/api': ''
              }
            }
          }
        },
  // 第三方插件配置
  pluginOptions: {
   // ...
  }
 }