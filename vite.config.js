// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()]
// })
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')
import { resolve } from 'path' // 主要用于alias文件路径别名
import { viteMockServe } from 'vite-plugin-mock'
import eslintPlugin from 'vite-plugin-eslint'
// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const isDevelopment = command === 'serve'
  return {
    plugins: [
      vue(),
      viteMockServe({
        // default
        mockPath: 'mock',
        supportTs: false,
        watchFiles: true,
        localEnabled: isDevelopment, // 设置为 false 将禁用 mock 功能
        // prodEnabled: isBuild, // 设置为true，生产环境开启了 mock 功能
      }),
      eslintPlugin({
        include: ['src/**/*.vue', 'src/**/*.js'], // 检查的文件
        cache: false, // 禁用 eslint 缓存
      }),
    ],
    // 是否自动在浏览器打开
    open: true,
    // 是否开启 https
    https: false,
    // 服务端渲染
    ssr: false,
    /**
     * 在生产中服务时的基本公共路径。
     * @default '/'
     */
    base: './',
    /**
     * 与“根”相关的目录，构建输出将放在其中。如果目录存在，它将在构建之前被删除。
     * @default 'dist'
     */
    outDir: 'dist',
    resolve: {
      alias: {
        '@': resolve(__dirname, '.', 'src'),
      },
    },
    // 反向代理
    server: {
      port: 8080,
      // 是否自动在浏览器打开
      open: true,
      // 是否开启 https
      https: false,
      proxy: {
        '/api': {
          target: 'http://localhost:5000',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
  }
})
