
整体架构  
  
    webpack4.x+scss+art-template+mock+es6+

1.打包编译JS【ok】
2.压缩合并css【ok】
3.图片打包处理【ok】
4.rem手机适配【ok】
5.scss【ok】
6.模块热替换【ok】
7.mock 数据服务【ok】
8.模块化html【ok】
9.art-template【ok】
10.图片压缩 base64转换【ok】
11.入口文件自动生成【ok】
12.包含工具类【整理中....】
  01.数组处理
  02.浏览器处理
  03.日期时间转换处理
  04.http处理
  05.移动端判断
  06.常用正则
  07.URL处理
  08.loading
  09.字符串处理
  10.modal处理 
13.JSLint配置【进行中】

待优化的问题
 1.js字符串拼接中图片路径问题【】？
 2.css模块化实现方式【读写流文件信息实现】？
扩展功能
 1.mvvm框架的引入【延后处理】
 2.打包文件上传服务器【node处理】

 关于 cssloader作用
1.sass-loader 先处理 sass 语法
2.postcss-loader 进行前缀添加等其他处理
3.css-loader 将内容引入 @import 所在的 css 文件内
4.style-loader 将生成 style 标签，将 css 内容插入 HTML
媒体资源 loader
url-loader：图片、视频、字体等文件进行 loader 配置