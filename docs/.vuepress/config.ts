import { resolve } from 'path'
import { defineConfig4CustomTheme } from 'vuepress/config'
// import { VdoingThemeConfig } from 'vuepress-theme-vdoing/types'
import { VdoingThemeConfig } from '../../vancode/types'
import dayjs from 'dayjs'
import baiduCode from './config/baiduCode' // 百度统计hm码
import htmlModules from './config/htmlModules' // 自定义插入的html块

// latex支持
import plugin from 'markdown-it-mathjax3' 

// md.use(mathjax3);

export default defineConfig4CustomTheme<VdoingThemeConfig>({
  // theme: 'vdoing', // 使用npm包主题
  theme: resolve(__dirname, '../../vancode'), // 使用本地主题

  locales: {
    '/': {
      lang: 'zh-CN',
      title: "Vancode",
      description: 'Simplicity does not precede complexity, but follows it'
    }

  },
  // base: '/', // 默认'/'。如果你想将你的网站部署到如 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/",（否则页面将失去样式等文件）

  // 主题配置
  themeConfig: {

    // 导航配置
    nav: [
      { text: '首页', link: '/' },
      {
        text: '前端',
        link: '/frontend/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
        items: [
          // 说明：以下所有link的值只是在相应md文件头部定义的永久链接（不是什么特殊编码）。另外，注意结尾是有斜杠的

          {
            text: 'JavaScript',
            items: [
              { text: 'JavaScript', link: '/frontend/javascript/' },
              { text: 'TypeScript', link: '/frontend/typescript/' },
              { text: 'Vue.js', link: '/frontend/vue/' },
              { text: 'React', link: '/frontend/react/' },
            ],
          },
          {
            text: '素材',
            items: [
              { text: 'JavaScript', link: '/frontend/resource/js/' },
              { text: 'CSS', link: '/frontend/resource/css/' },
            ],
          },
        ],
      },

      {
        text: '后端',
        link: '/backend/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
        items: [
          {
            text: '语言',
            items: [
              { text: 'Java', link: '/backend/java/' },
              { text: 'Python', link: '/backend/python/' },
              { text: 'Golang', link: '/backend/golang/'}
            ],
          },
          {
            text: '框架',
            items: [
              { text: 'Spring', link: '/backend/spring/' },
              { text: 'Flask', link: '/backend/flask/' },
              { text: 'Djongo', link: '/empty/' },

            ],
          }
        ],
      },
      {
        text: '算法',
        link: '/empty/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
        items: [
          {
            text: '算法基础',
            items: [
              { text: '数据结构',link: '/empty' },
              { text: '基础算法', link: '/empty/' },
              { text: '图像处理', link: '/algorithm/imageprocessing/'}
            ],
          },
          {
            text: '人工智能',
            items: [
              { text: '机器学习', link: '/algorithm/ml/' },
              { text: '深度学习', link: '/empty/' },
              { text: '强化学习', link: '/empty/' },
              { text: '其他文章', link: '/empty/' },
            ],
          }
        ],
      },
      { text: '大数据',link: '/empty/', },
      { text: '物联网', link: '/empty/', },
      { text: '架构',
        items: [
          { text: '负载均衡',   link: '/architecture/loadbalance/' }
        ],
      },
      {
        text: '数据库',
        link: '/database/',
        items: [
          {
            text: 'SQL',
            items: [
              { text: 'Sql基础', link: '/empty/' },
            ],
          },
          {
            text: 'NoSQL',
            items: [
              { text: 'Sql基础', link: '/empty/' },
            ],
          },
          {
            text: 'TSDB',
            items: [
              { text: 'InfluxDB', link: '/empty/' },
              { text: 'OpenTSDB', link: '/empty/' },
              { text: 'Taos', link: '/empty/' },
            ],
          }
        ],
      },
      {
        text: '开发运维',
        link: '', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
        items: [
          {
            text: '部署和版本',
            items: [
              { text: 'git', link: '/develop/git/' },
              { text: 'Docker',link: '/develop/docker/' },
              { text: 'Kubernetes', link: 'develop/kubernetes/'}
            ]
          },
          {
            text: '计算机基础',
            items: [
              {   text: '操作系统', link: '/develop/os/' }
            ]

          },
          {
            text: '其他',
            items: [
              { text: '生产力和工具', link: '/develop/productivity/' },
              { text: '方法论', link: '/empty/' },
              { text: '运维',link: '/maintenance/'}
            ]
          }



        ],
      },
      {
        text: '索引',
        link: '/archives/',
        items: [
          { text: '分类', link: '/categories/' },
          { text: '标签', link: '/tags/' },
          { text: '归档', link: '/archives/' },
        ],
      },

    ],
    sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    logo: '/img/logo.png', // 导航栏logo
    repo: 'Dovahkiin8625/vancode', // 导航栏右侧生成Github链接
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    lastUpdated: '上次更新', // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
    docsDir: 'docs', // 编辑的文件夹
    editLinks: true, // 启用编辑
    editLinkText: '编辑',

    //*** 以下是Vdoing主题相关配置，文档：https://doc.Vance L.com/pages/a20ce8/ ***//

    // category: false, // 是否打开分类功能，默认true
    // tag: false, // 是否打开标签功能，默认true
    // archive: false, // 是否打开归档功能，默认true
    // categoryText: '随笔', // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'

    // bodyBgImg: [
    //   'https://cdn.jsdelivr.net/gh/Vance L/image_store/blog/20200507175828.jpeg',
    //   'https://cdn.jsdelivr.net/gh/Vance L/image_store/blog/20200507175845.jpeg',
    //   'https://cdn.jsdelivr.net/gh/Vance L/image_store/blog/20200507175846.jpeg'
    // ], // body背景大图，默认无。 单张图片 String | 多张图片 Array, 多张图片时每隔15秒换一张。
    // bodyBgImgOpacity: 0.5, // body背景图透明度，选值 0.1~ 1.0, 默认0.5
    // titleBadge: false, // 文章标题前的图标是否显示，默认true
    // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
    //   '图标地址1',
    //   '图标地址2'
    // ],
    // contentBgStyle: 1, // 文章内容块的背景风格，默认无. 1 方格 | 2 横线 | 3 竖线 | 4 左斜线 | 5 右斜线 | 6 点状

    // updateBar: { // 最近更新栏
    //   showToArticle: false, // 显示到文章页底部，默认true
    //   moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
    // },
    // rightMenuBar: false, // 是否显示右侧文章大纲栏，默认true (屏宽小于1300px下无论如何都不显示)
    // sidebarOpen: false, // 初始状态是否打开左侧边栏，默认true
    // pageButton: false, // 是否显示快捷翻页按钮，默认true

    // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | <自定义>    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页
    sidebar: 'structuring',

    // 文章默认的作者信息，(可在md文件中单独配置此信息) string | {name: string, link?: string}
    author: {
      name: 'Vance L', // 必需
      link: 'https://github.com/Dovahkiin8625', // 可选的
    },

    // 博主信息 (显示在首页侧边栏)
    blogger: {
      avatar: '/img/fig.jpg',
      name: 'Vance L',
      slogan: '自由意志是一种幻觉，但是一种必须的幻觉',
    },

    // 社交图标 (显示于博主信息栏和页脚栏。内置图标：https://doc.Vance L.com/pages/a20ce8/#social)
    social: {
      // iconfontCssFile: '//at.alicdn.com/t/xxx.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自己添加。阿里图片库：https://www.iconfont.cn/
      icons: [
        {
          iconClass: 'icon-youjian',
          title: '发邮件',
          link: 'mailto:lf8625@gmail.com',
        },
        {
          iconClass: 'icon-github',
          title: 'GitHub',
          link: 'https://github.com/Dovahkiin8625',
        },
        {
          iconClass: 'icon-erji',
          title: '听音乐',
          link: 'https://music.163.com/#/playlist?id=755597173',
        },
      ],
    },

    // 页脚信息
    footer: {
      createYear: 2022, // 博客创建年份
      copyrightInfo:
        'Vance L | <a href="https://github.com/Dovahkiin8625/vancode/blob/master/LICENSE" target="_blank">MIT License</a>', // 博客版权信息，支持a标签或换行标签</br>
    },

    // 自定义hmtl(广告)模块
    htmlModules
  },

  // 注入到页面<head>中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  head: [
    ['link', { rel: 'icon', href: '/img/favicon.ico' }], //favicons，资源放在public文件夹
    [
      'meta',
      {
        name: 'keywords',
        content: 'vancode,前端,后端,算法,机器学习,web框架,技术文档,时间序列,深度学习,JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github,docker,java,spring,ssm',
      },
    ],
    ['meta', { name: 'baidu-site-verification', content: 'code-8n9CESFEOS' }], // 百度统计的站长验证（你可以去掉）
    ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
    // [
    //   'script',
    //   {
    //     'data-ad-client': 'ca-pub-7828333725993554',
    //     async: 'async',
    //     src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
    //   },
    // ], // 网站关联Google AdSense 与 html格式广告支持（你可以去掉）
  ],

  // 插件配置
  plugins: {
    // 导入本地插件（供学习参考）
    // [resolve(__dirname, './plugins/love-me')]: { // 鼠标点击爱心特效
    //   color: '#11a8cd', // 爱心颜色，默认随机色
    //   excludeClassName: 'theme-vdoing-content' // 要排除元素的class, 默认空''
    // },

    // 百度自动推送
    'vuepress-plugin-baidu-autopush': {},

    // 百度统计
    'vuepress-plugin-baidu-tongji': {
      hm: baiduCode,
    },

    // 全文搜索
    'fulltext-search': {},

    // 可以添加第三方搜索链接的搜索框（继承原官方搜索框的配置参数）
    // 'thirdparty-search': {
    //   thirdparty: [
    //     {
    //       title: '在MDN中搜索',
    //       frontUrl: 'https://developer.mozilla.org/zh-CN/search?q=', // 搜索链接的前面部分
    //       behindUrl: '', // 搜索链接的后面部分，可选，默认 ''
    //     },
    //     {
    //       title: '在Runoob中搜索',
    //       frontUrl: 'https://www.runoob.com/?s=',
    //     },
    //     {
    //       title: '在Vue API中搜索',
    //       frontUrl: 'https://cn.vuejs.org/v2/api/#',
    //     },
    //     {
    //       title: '在Bing中搜索',
    //       frontUrl: 'https://cn.bing.com/search?q=',
    //     },
    //     {
    //       title: '通过百度搜索本站的',
    //       frontUrl: 'https://www.baidu.com/s?wd=site%3AVance L.com%20',
    //     },
    //   ],
    // },

    // 代码块复制按钮
    'one-click-copy': {
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
      copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
      duration: 1000, // prompt message display time.
      showInMobile: false, // whether to display on the mobile side, default: false.
    },

    // DEMO演示模块, API: https://github.com/xiguaxigua/vuepress-plugin-demo-block
    'demo-block': {
      settings: {
        // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
        // cssLib: ['http://xxx'], // 在线示例中的css依赖
        // vue: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
        jsfiddle: false, // 是否显示 jsfiddle 链接
        codepen: true, // 是否显示 codepen 链接
        horizontal: false, // 是否展示为横向样式
      },
    },

    // 放大图片
    'vuepress-plugin-zooming': {
      selector: '.theme-vdoing-content img:not(.no-zoom)', // not排除class是no-zoom的图片
      options: {
        bgColor: 'rgba(0,0,0,0.6)',
      },
    },

    // 评论区
    'vuepress-plugin-comment': {
      choosen: 'gitalk',
      options: {
        clientID: '4735fe39849997f119d8',
        clientSecret: '5702769c4926221d3adea3e6bd87477f5e8685fe',
        repo: 'vancode-commit', // GitHub 仓库
        owner: 'Dovahkiin8625', // GitHub仓库所有者
        admin: ['Dovahkiin8625'], // 对仓库有写权限的人
        // distractionFreeMode: true,
        pagerDirection: 'last', // 'first'正序 | 'last'倒序
        id: '<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>', //  页面的唯一标识,长度不能超过50
        title: '「评论」<%- frontmatter.title %>', // GitHub issue 的标题
        labels: ['Gitalk', 'Comment'], // GitHub issue 的标签
        body:
          '页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>', // GitHub issue 的内容
      },
      // 'yarn add vuepress-plugin-mathjax':{}
    },

    // "上次更新"的时间格式
    '@vuepress/last-updated': {
      transformer: (timestamp, lang) => {
        return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
      },
    },
  },

  markdown: {
    lineNumbers: true,
    extendMarkdown: md=>{
      md.use(plugin)
    }
  },
})
