## mock参考网址
  - 官网：http://mockjs.com/examples.html
  - 配置文件：https://wenku.baidu.com/view/20675767b007e87101f69e3143323968011cf438.html
  - 配置文件：https://blog.csdn.net/weixin_42067720/article/details/115579817
  - 生成虚假数据：https://blog.csdn.net/weixin_45644335/article/details/122452129
## eslint的配置
  - prettier的配置参考网址：https://www.cnblogs.com/linjunfu/p/10880381.html
  - 安装依赖：
  ```
    npm install eslint --save-dev
    npm install eslint-plugin-vue
    npm install --save-dev eslint-config-airbnb-base 
    npm install --save-dev eslint-plugin-prettier
    npm install --save-dev --save-exact prettier
    npm install --save-dev eslint-config-prettier
  ```
  ```
    |- .editorconfig               # 定义项目的编码规范
    |- .env.development            # 配置开发环境变量
    |- .env.production             # 配置生产环境变量
    |- .eslintignore               # 指定eslint忽略文件和目录，就是不进行校验的文件跟目录
    |- .eslintrc.js                # eslint配置文件
    |- .prettierignore             # prettier校验忽略文件，同.eslintignore
    |- prettier.config.js          # prettier校验配置文件
  ```
## 如果要设置在浏览器，或者打包时，eslint校验不通过，报错
  ```
  yarn add vite-plugin-eslint --save-dev
  // 在vite.config.js中进行配置 
  import eslintPlugin from 'vite-plugin-eslint'
  plugins: [
      vue(),
      // ...
      eslintPlugin({
        include: ['src/**/*.vue', 'src/**/*.js'], // 检查的文件
        cache: false, // 禁用 eslint 缓存
      }),
    ],
  ```
