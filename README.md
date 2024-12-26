# uniapp-android(安卓APP)

1.推荐VScode 编辑器开发

2.UI组件库使用 uview-plus 地址： https://uview-plus.jiangruyi.com/components/intro.html;

3.当前项目为vue3的版本;

4.全局状态管理用的是vuex;

5.Http请求用的是  [uview-plus](https://uview-plus.jiangruyi.com/) 内置的请求库：https://uview-plus.jiangruyi.com/js/http.html

6.推荐使用`pnpm `;

8.初始化依赖：

```
pnpm i
```

9.本地浏览器运行

```
pnpm run dev
```

10.安卓打包文件

```
pnpm run build:app-android
```

11. 生成本地文件build后，需要下载 Android Studio ，新建一个空白的安卓项目，导入build中的文件，生成apk包.