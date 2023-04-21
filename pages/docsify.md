# 站点生成 - docsify

!> 一个神奇的文档站点生成器

- 简单、轻便 (压缩后 ~21kB)
- 无需生成 html 文件
- 众多主题

## 官网地址 :id=org

> 全局搜索 cdn.jsdelivr.net/npm 替换为 unpkg.com 或 unpkg.zhimg.com

- [官网地址](https://docsify.js.org/)
- [官网文档](https://docsify.js.org/#/zh-cn/quickstart)
- [官网仓库](https://github.com/docsifyjs/docsify)

## 快速开始 - NPM 方式 :id=npm-quickstart

1. 安装 Node.js 环境，[下载地址](https://nodejs.cn/download/)
2. 全局安装工具：`npm i docsify-cli -g --registry=https://registry.npm.taobao.org`
3. 初始化项目：`docsify init ./docs`
4. 启动服务：`docsify serve docs`
5. 浏览服务：http://localhost:3000

## 快速开始 - DIY 方式 :id=diy-quickstart

1. 创建 index.html 文件

```html
<!-- index.html -->

<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/docsify/themes/vue.css" />
  </head>
  <body>
    <div id="app"></div>
    <script>
      window.$docsify = {
        //...
      };
    </script>
    <script src="//cdn.jsdelivr.net/npm/docsify/lib/docsify.min.js"></script>
  </body>
</html>
```

2. 接着使用 python 来启动一个静态服务，命令需要在目录内执行，默认访问地址 http://localhost:3000

- python2：`python -m SimpleHTTPServer 3000`
- python3：`python -m http.server 3000`

## 路由说明 :id=route

> README.md 相当于我们熟悉的 index.html，可以省略

假设你的目录结构如下：

```text
.
└── docs
    ├── README.md
    ├── guide.md
    └── zh-cn
        ├── README.md
        └── guide.md
```

那么对应的访问页面将是

```text
docs/README.md        => http://domain.com
docs/guide.md         => http://domain.com/guide
docs/zh-cn/README.md  => http://domain.com/zh-cn/
docs/zh-cn/guide.md   => http://domain.com/zh-cn/guide
```

## 定制化 :id=diy

### 开启侧边栏

```html
<!-- index.html -->
<script>
  window.$docsify = {
    // 开启侧边栏
    loadSidebar: true,
    // _sidebar.md 的加载逻辑是从每层目录下获取文件，如果不存在则回退到上级目录，可以配置 alias 避免不必要的回退过程
    alias: {
      "/.*/_sidebar.md": "/_sidebar.md",
    },
    // 自定义侧边栏后默认不会再生成目录，可以通过设置生成目录的最大层级开启这个功能
    subMaxLevel: 0,
  };
</script>
```

在根目录下创建 \_sidebar.md 文件

> 指定页面标题可以有更好的 SEO 效果

```markdown
<!-- _sidebar.md -->

- [首页](zh-cn/)
- [指南](zh-cn/guide "The greatest guide in the world")
```

> 设置了 subMaxLevel 时，默认情况下每个标题都会自动添加到目录中。忽略特定的标题可以给它添加 <!-- {docsify-ignore} -->，忽略页面上的所有标题可以在第一个标题上添加 <!-- {docsify-ignore-all} -->

### 开启导航栏

```html
<!-- index.html -->
<script>
  window.$docsify = {
    // 开启导航栏
    loadNavbar: true,
    // _navbar.md 的加载逻辑是从每层目录下获取文件，如果不存在则回退到上级目录，可以配置 alias 避免不必要的回退过程
    alias: {
      "/.*/_navbar.md": "/_navbar.md",
    },
  };
</script>
```

在根目录下创建 \_navbar.md 文件

> 需要在根目录下创建一个 .nojekyll 文件，以防止 GitHub Pages 忽略下划线开头的文件；支持多级嵌套

```markdown
<!-- _navbar.md -->

- [顶部导航](/)
  - [子导航](/sub/)
```

### 开启封面

```html
<!-- index.html -->
<script>
  window.$docsify = {
    // 开启封面
    coverpage: true,
    // 开启多封面 - 1
    // coverpage: ['/', '/zh-cn/'],
    // 开启多封面 - 2
    // coverpage: { '/': 'cover.md', '/zh-cn/': 'cover.md' }
  };
</script>
```

在根目录下创建 \_coverpage.md 文件

```markdown
<!-- _coverpage.md -->

<!-- 自定义背景图片 -->

![](_media/bg.png)

<!-- 自定义背景色 -->

![color](#f0f0f0)

# docsify <small>3.5</small>

> 一个神奇的文档网站生成器。

- 简单、轻便 (压缩后 ~21kB)
- 无需生成 html 文件
- 众多主题

[GitHub](https://github.com/docsifyjs/docsify/)
[Get Started](#docsify)
```

## window.$docsify 配置项 :id=config

| 配置                     | 类型                        | 默认值                   | 示例                                                                                                                                                                          | 说明                                                                                                             |
| ------------------------ | --------------------------- | ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| el                       | String                      | #app                     | { el: '#app' }                                                                                                                                                                | 初始化的挂载元素，支持 CSS 选择器                                                                                |
| repo                     | String                      | null                     | { repo: 'docsifyjs/docsify' } <br> or <br> { repo: 'https://github.com/docsifyjs/docsify/' }                                                                                  | 配置仓库地址或者 username/repo 的字符串，会在页面右上角渲染一个 GitHub Corner 挂件                               |
| maxLevel                 | Number                      | 6                        | {maxLevel: 4}                                                                                                                                                                 | 默认情况下会抓取文档中所有标题渲染成目录，可配置最大支持渲染的标题层级                                           |
| loadNavbar               | Boolean or String           | false                    | { loadNavbar: true } <br> or <br> { loadNavbar: 'nav.md' }                                                                                                                    | 设置为 true 后会加载 \_navbar.md 文件，也可以自定义加载的文件名                                                  |
| loadSidebar              | Boolean or String           | false                    | { loadSidebar: true } <br> or <br> { loadSidebar: 'summary.md' }                                                                                                              | 设置为 true 后会加载 \_sidebar.md 文件，也可以自定义加载的文件名                                                 |
| hideSidebar              | Boolean                     | true                     | { hideSidebar: true }                                                                                                                                                         | 这个选项用来完全隐藏侧边栏，侧边栏的任何内容都不会被渲染                                                         |
| subMaxLevel              | Number                      | 0                        | { subMaxLevel: 2 }                                                                                                                                                            | 自定义侧边栏后默认不会再生成目录，可以通过设置生成目录的最大层级开启这个功能                                     |
| auto2top                 | Boolean                     | false                    | { auto2top: true }                                                                                                                                                            | 切换页面后是否自动跳转到页面顶部                                                                                 |
| homepage                 | String                      | README.md                | { homepage: 'home.md' }                                                                                                                                                       | 设置首页文件加载路径，支持 http 地址                                                                             |
| basePath                 | String                      | /                        | { basePath: '/path/' }                                                                                                                                                        | 文档加载的根路径，可以是二级路径或者是其他域名的路径                                                             |
| relativePath             | Boolean                     | false                    | { relativePath: true }                                                                                                                                                        | 如果该选项设为 true，那么链接会使用相对路径                                                                      |
| coverpage                | Boolean or String           | false                    | { coverpage: true } <br> or <br> { coverpage: 'cover.md' } <br> or <br> { coverpage: ['/', '/zh-cn/'] } <br> or <br> { coverpage:{ '/': 'cover.md', '/zh-cn/': 'cover.md' } } | 启用封面页。开启后是加载 \_coverpage.md 文件，也可以自定义文件名                                                 |
| logo                     | String                      | NULL                     | { logo: '/\_media/icon.svg' }                                                                                                                                                 | 在侧边栏中出现的网站图标，你可以使用 CSS 来更改大小                                                              |
| name                     | String                      | NULL                     | { name: 'docsify' }                                                                                                                                                           | 文档标题，会显示在侧边栏顶部，支持包含自定义的 HTML 代码                                                         |
| nameLink                 | String                      | window.location.pathname | { nameLink: '/' } <br> or <br> { nameLink: { '/zh-cn/': '/zh-cn/', '/': '/', } }                                                                                              | 点击文档标题后跳转的链接地址                                                                                     |
| markdown                 | Object or Function          | NULL                     | { markdown: {} }                                                                                                                                                              | [参考 Markdown 配置](https://docsify.js.org/#/zh-cn/markdown)                                                    |
| themeColor               | String                      | NULL                     | { themeColor: '#3F51B5' }                                                                                                                                                     | 替换主题色。利用 CSS3 支持变量的特性，对于老的浏览器有 polyfill 处理                                             |
| alias                    | Object                      | NULL                     | { alias: { '/.\*/\_sidebar.md': '/\_sidebar.md' } }                                                                                                                           | 定义路由别名，可以更自由的定义路由规则，支持正则                                                                 |
| autoHeader               | Boolean                     | false                    | { autoHeader: true }                                                                                                                                                          | 同时设置 loadSidebar 和 autoHeader 后，可以根据 \_sidebar.md 的内容自动为每个页面增加标题                        |
| executeScript            | Boolean                     | false                    | { executeScript: true }                                                                                                                                                       | 执行文档里的 script 标签里的脚本，只执行第一个 script (demo)。 如果 Vue 存在，则自动开启                         |
| noEmoji                  | Boolean                     | false                    | { noEmoji: true }                                                                                                                                                             | 禁用 emoji 解析                                                                                                  |
| mergeNavbar              | Boolean                     | false                    | { mergeNavbar: true }                                                                                                                                                         | 小屏设备下合并导航栏到侧边栏                                                                                     |
| formatUpdated            | String or Function          | NULl                     | { formatUpdated: '{MM}/{DD} {HH}:{mm}' } <br> or <br> { formatUpdated: function(time){...} }                                                                                  | 可以通过 {docsify-updated} 变量显示文档更新日期. 并且通过 formatUpdated 配置日期格式                             |
| externalLinkTarget       | String                      | \_blank                  | { externalLinkTarget: '\_self' }                                                                                                                                              | 外部链接的打开方式                                                                                               |
| cornerExternalLinkTarget | String                      | \_blank                  | { cornerExternalLinkTarget: '\_self' }                                                                                                                                        | 右上角链接的打开方式                                                                                             |
| externalLinkRel          | String                      | noopener                 | { externalLinkRel: '' }                                                                                                                                                       | 防止新打开的外部页面（当 externalLinkTarget 设为 \_blank 时）能控制我们的页面                                    |
| routerMode               | String                      | hash                     | { routerMode: 'history' }                                                                                                                                                     |                                                                                                                  |
| crossOriginLinks         | Array                       | []                       | { crossOriginLinks: ['https://example.com/cross-origin-link'] }                                                                                                               | 当设置了 routerMode:'history'时，解决跨域问题                                                                    |
| noCompileLinks           | Array                       | []                       | { noCompileLinks: ['/foo', '/bar/.*'] }                                                                                                                                       | 有时我们不希望 docsify 处理我们的链接                                                                            |
| onlyCover                | Boolean                     | false                    | { onlyCover: true }                                                                                                                                                           | 只在访问主页时加载封面                                                                                           |
| requestHeaders           | Object                      | NULL                     | { requestHeaders: { 'cache-control': 'max-age=600' } }                                                                                                                        | 设置请求资源的请求头                                                                                             |
| ext                      | String                      | NULL                     | { ext: '.md' }                                                                                                                                                                | 资源的文件扩展名                                                                                                 |
| fallbackLanguages        | Array<string>               | NULL                     | { fallbackLanguages: ['fr', 'de'] }                                                                                                                                           | 一个语言列表                                                                                                     |
| notFoundPage             | Boolean or String or Object | NULL                     | { notFoundPage: true } <br> or <br> { notFoundPage: 'my404.md' } <br> or <br> { notFoundPage: { '/': '\_404.md', '/de': 'de/\_404.md', } }                                    | 在找不到指定页面时加载\_404.md                                                                                   |
| topMargin                | Number                      | 0                        | { topMargin: 90 }                                                                                                                                                             | 让你的内容页在滚动到指定的锚点时，距离页面顶部有一定空间                                                         |
| vueComponents            | Object                      | NULL                     |                                                                                                                                                                               | 创建并注册全局 Vue 组件，[参见](https://docsify.js.org/#/zh-cn/configuration?id=vuecomponents)                   |
| vueGlobalOptions         | Object                      | NULL                     |                                                                                                                                                                               | 指定 Vue 选项，[参见](https://docsify.js.org/#/zh-cn/configuration?id=vueglobaloptions)                          |
| vueMounts                | Object                      | NULL                     |                                                                                                                                                                               | 指定要挂载为 Vue 实例 的 DOM 元素及其相关选项，[参见](https://docsify.js.org/#/zh-cn/configuration?id=vuemounts) |

## 主题 :id=theme

```html
<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/docsify/themes/vue.css" />
<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/docsify/themes/buble.css" />
<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/docsify/themes/dark.css" />
<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/docsify/themes/pure.css" />
<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/docsify/themes/dolphin.css" />
```

> 压缩版 1：//cdn.jsdelivr.net/npm/docsify/themes/{name}.min.css
>
> 压缩版 2：//cdn.jsdelivr.net/npm/docsify/lib/themes/{name}.css
>
> 压缩版 3：//cdn.jsdelivr.net/npm/docsify/lib/themes/{name}.min.css
>
> [docsify-themeable](https://jhildenbiddle.github.io/docsify-themeable/) 一个用于 docsify 的，简单到令人愉悦的主题系统

## 插件支持 :id=plugin

> 导入插件很简单，一般引入 js 即可，建议将 js 下载到本地，离线运行

- ✔️ [全文搜索](https://docsify.js.org/#/zh-cn/plugins?id=%e5%85%a8%e6%96%87%e6%90%9c%e7%b4%a2-search)
- ✔️ [谷歌统计](https://docsify.js.org/#/zh-cn/plugins?id=%e8%b0%b7%e6%ad%8c%e7%bb%9f%e8%ae%a1-google-analytics)
- ✔️ [emoji](https://docsify.js.org/#/zh-cn/plugins?id=emoji)
- ✔️ [外链脚本](https://docsify.js.org/#/zh-cn/plugins?id=%e5%a4%96%e9%93%be%e8%84%9a%e6%9c%ac-external-script)
- ✔️ [图片缩放](https://docsify.js.org/#/zh-cn/plugins?id=%e5%9b%be%e7%89%87%e7%bc%a9%e6%94%be-zoom-image)
- ❌ [在 Github 上编辑](https://docsify.js.org/#/zh-cn/plugins?id=%e5%9c%a8-github-%e4%b8%8a%e7%bc%96%e8%be%91)
- ❌ [代码即时预览和 jsfiddle 集成](https://docsify.js.org/#/zh-cn/plugins?id=%e4%bb%a3%e7%a0%81%e5%8d%b3%e6%97%b6%e9%a2%84%e8%a7%88%e5%92%8c-jsfiddle-%e9%9b%86%e6%88%90)
- ✔️ [复制代码](https://docsify.js.org/#/zh-cn/plugins?id=%e5%a4%8d%e5%88%b6%e5%88%b0%e5%89%aa%e8%b4%b4%e6%9d%bf)
- ❌ [Disqus 评论](https://docsify.js.org/#/zh-cn/plugins?id=disqus)
- ✔️ [Gitalk 评论](https://docsify.js.org/#/zh-cn/plugins?id=gitalk) [Gitalk 官网文档](https://github.com/gitalk/gitalk/blob/master/readme-cn.md)
- ✔️ [分页导航](https://docsify.js.org/#/zh-cn/plugins?id=pagination)
- ✔️ [字数统计](https://docsify.js.org/#/zh-cn/plugins?id=%e5%ad%97%e6%95%b0%e7%bb%9f%e8%ae%a1)
- ✔️ [标签页](https://docsify.js.org/#/zh-cn/plugins?id=tabs)
- ✔️ [侧边栏手风琴效果](https://github.com/atleastzero/docsify-accordify)
- ✔️ [阅读进度](https://github.com/HerbertHe/docsify-progress)
- ✔️ [页脚增强](https://alertbox.github.io/docsify-footer)
- ✔️ [文本高亮](https://github.com/fzankl/docsify-plugin-flexible-alerts)
- ✔️ [百度统计](https://github.com/mg0324/docsify-baidu-tj)
- [更多插件](https://docsify.js.org/#/awesome?id=plugins)

## 开发插件 :id=write-a-plugin

> 如果需要用 docsify 的内部方法，可以通过 window.Docsify 获取，通过 vm 获取当前实例

```js
window.$docsify = {
  plugins: [
    function (hook, vm) {
      // 初始化完成后调用，只调用一次，没有参数。
      hook.init(function () {
        // ...
      });
      // 每次开始解析 Markdown 内容时调用，支持异步逻辑
      hook.beforeEach(function (content) {
        // ...
        return content;
      });
      // 解析成 html 后调用，支持处理异步逻辑
      hook.afterEach(function (html, next) {
        // ...
        next(html);
      });
      // 每次路由切换时数据全部加载完成后调用，没有参数。
      hook.doneEach(function () {
        // ...
      });
      // 初始化并第一次加载完成数据后调用，只触发一次，没有参数。
      hook.mounted(function () {});
      // 初始化并第一次加载完成数据后调用，没有参数。
      hook.ready(function () {
        // ...
      });
    },
  ],
};
```

## Markdown 配置 :id=markdown

> [参见官方文档](https://docsify.js.org/#/zh-cn/markdown)

## 代码高亮 :id=language-highlight

> 基于 [Prism](https://prismjs.com/)，支持很多种语言

`<script src="//unpkg.com/prismjs/components/prism-bash.js"></script>`

## 部署 :id=deploy

> [参见官方文档](https://docsify.js.org/#/zh-cn/deploy)

1. 创建一个代码仓库
2. 上传所有代码文件
3. 开启代码仓库的 Pages 功能
4. 访问生成的地址

## 文档助手 :id=helpers

> [参见官方文档](https://docsify.js.org/#/zh-cn/helpers)
>
> 扩展了一些 Markdown 语法，可以让文档更易读

- 强调内容：`!> 内容`

!> 内容

- 普通提示：`?> _TODO_ 完善示例`

?> _TODO_ 完善示例

- 忽略编译链接：`[link](/demo/ ':ignore title')`

[link](/demo/ ":ignore title")

- 设置链接的 target 属性：`[link](/demo ':target=_blank')`

[link](/demo ":target=_blank")

- 禁用链接：`[link](/demo ':disabled')`

[link](/demo ":disabled")

- 跨域链接：`[example.com](https://example.com/ ':crossorgin')`

[example.com](https://example.com/ ":crossorgin")

- 任务列表：`- [×] foo`

- [ ] foo
- [×] foo

- 图片处理：

```markdown
![logo](https://docsify.js.org/_media/icon.svg ":size=WIDTHxHEIGHT")
![logo](https://docsify.js.org/_media/icon.svg ":size=50x100")
![logo](https://docsify.js.org/_media/icon.svg ":size=100")
![logo](https://docsify.js.org/_media/icon.svg ":size=10%")
```

![logo](https://docsify.js.org/_media/icon.svg ":size=WIDTHxHEIGHT")
![logo](https://docsify.js.org/_media/icon.svg ":size=50x100")
![logo](https://docsify.js.org/_media/icon.svg ":size=100")
![logo](https://docsify.js.org/_media/icon.svg ":size=10%")

- 设置图片的 Class：`![logo](https://docsify.js.org/_media/icon.svg ':class=someCssClass')`

![logo](https://docsify.js.org/_media/icon.svg ":class=someCssClass")

- 设置图片的 ID：`![logo](https://docsify.js.org/_media/icon.svg ':id=someCssId')`

![logo](https://docsify.js.org/_media/icon.svg ":id=someCssId")

- 设置标题的 id 属性：`### 你好，世界！ :id=hello-world`

### 你好，世界！ :id=hello-world

- html 标签中的 Markdown

```markdown
<details>
<summary>自我评价（点击展开）</summary>
- Abc
- Abc
</details>
```

<details>
<summary>自我评价（点击展开）</summary>
- Abc
- Abc
</details>

## 兼容 Vue :id=vue

> [参见官方文档](https://docsify.js.org/#/zh-cn/vue)

## CDN :id=cdn

> [参见官方文档](https://docsify.js.org/#/zh-cn/cdn)

## 离线模式 :id=pwa

> [参见官方文档](https://docsify.js.org/#/zh-cn/pwa)

## 服务端渲染（SSR） :id=ssr

> [参见官方文档](https://docsify.js.org/#/zh-cn/ssr)

## 更新日志 :id=changelog

> [参见官方文档](https://docsify.js.org/#/zh-cn/changelog)
