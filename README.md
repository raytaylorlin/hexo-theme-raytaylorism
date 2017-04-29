# hexo-theme-raytaylorism v2

raytaylorism（Ray Taylor主义）是我自己设计并制作的一款清新的的响应式Material Design风格的[Hexo]主题。该主题支持最新的Hexo 3.1版本。**本主题不再支持Hexo 2.x版本，请使用本主题前备份你的数据并升级到Hexo 3。**

（English document is coming soon...）

## 预览

* [我的博客]
* [主题截图1](http://raytaylorlin-blog.qiniudn.com/image%2Fscreenshot%2Fscreenshot1.jpg)
* [主题截图2](http://raytaylorlin-blog.qiniudn.com/image%2Fscreenshot%2Fscreenshot2.jpg)
* [主题截图3](http://raytaylorlin-blog.qiniudn.com/image%2Fscreenshot%2Fscreenshot3.jpg)
* [主题截图4](http://raytaylorlin-blog.qiniudn.com/image%2Fscreenshot%2Fscreenshot4.jpg)

## 安装

```
cd yourblog
git clone https://github.com/raytaylorlin/hexo-theme-raytaylorism.git themes/raytaylorism
```

请不定期`git pull`一下主题以便获得最新的功能。**请在pull之前先备份好你原来的配置。**

## 启用（重要）

1. 修改 `_config.yml` 中的`theme`一项的值为`raytaylorism`
2. 由于本主题使用了[Data Files]数据文件和额外的layout文件，所以请复制以下文件到你的博客目录中，否则在启动server时可能会报错
    * **复制`yourblog/themes/raytaylorism/_data`文件夹到`yourblog/source`目录下**
    * **复制`yourblog/themes/raytaylorism/_md/`下所有文件夹（about和reading）到`yourblog/source`目录下**
3. 在你的`yourblog/_config.yml`配置文件的`#pagination`的位置添加下面配置（禁用归档、标签、目录页面的分页功能）

```
archive_generator:
  per_page: 0
tag_generator:
  per_page: 0
category_generator:
  per_page: 0
```

## 配置指南（重要）

我的博文[《新版Hexo主题Raytaylorism v2发布》](http://raytaylorlin.com/daily/hexo-theme-raytaylorism-v2/)写了一些本指南没有涉及到的主题使用小技巧，可以作为参考。其余配置细节，还是以本指南的说明为主。

### 样式

* **主题颜色配置**：如果对主题的配色不满意，可以自行在`yourblog/themes/raytaylorism/_config.yml`中的`color`一项进行配置。其中各部件的颜色字符串命名遵循[Materializecss色板]规范。注意：`link`、`article_title_link`和`tab`配置的是文字的颜色，**因此不可以给这几项配置`lighten`和`darken`的颜色加亮加暗的后缀**。
* **页面标题**：在`yourblog/_config.yml`中，`title`项决定了页面header中显示的标题，`subtitle`决定了浏览器的`<title>`标签内容。
* **favicon**：请将`yourblog/themes/raytaylorism/source/favicon.png`替换为你自己的图标文件，**保持`favicon.png`命名不变**。
* **多语言**：目前主题支持简体中文、繁体中文和英文三种语言，可以将`yourblog/_config.yml`中`language`一项设置为`zh-CN`、`zh-TW`、`en`实现
* **正文宽度问题**：有许多使用者反映正文在大屏幕下显得太窄（默认为700px定宽），这是**出于提升文章阅读体验的考虑，在PC端上宽屏一行不至于过长，参考了UI设计师的建议以及一些知名博客类网站如[medium.com](https://medium.com/)、[简书](http://www.jianshu.com/)等等才做出的调整。**如果依旧对这样的宽度不满意，可以自行调整`yourblog/themes/raytaylorism/source/css/_base/lib_customize.styl`中的`.container`类的宽度设置

### 数据

* **外部链接**：在`yourblog/source/_data/link.json`数据文件中进行配置。如果不需要以下两项，直接把`link.json`删除即可。
    * 社交平台：对应`social`项，预设有`weibo`和`github`两种，如果需要其他社交平台可自行追加，但要注意**key值必须与[Font Awesome图标]相对应，否则可能无法正常显示**。
    * 友情链接：对应`extern`项，其中key值为链接文字，value值为外链URL
* **首页幻灯片**：在`yourblog/source/_data/slider.json`数据文件中进行配置。可以配置背景图、标题、副标题、对齐方式。如果不需要幻灯片，直接把`slider.json`删除即可。
* **关于页面**：`yourblog/themes/raytaylorism/_md/about/index.md`文件为自我介绍的正文，只需要像平时写博文一样正常地书写markdown即可。在`yourblog/source/_data/about.json`数据文件中配置关于页面的其他项。
    * `avatar`：String类型，头像图片链接
    * `name`：String类型，自己的姓名
    * `tag`: String类型，描述自己的标签，**主要显示在侧滑栏的头部**
    * `desc`：String类型，对自己的简短描述
    * `skills`：Object类型，对象技能展示。对象key值为技能名，value值为评分（取值为0-10的整数），取值为-1为分隔线。若不需要则将该字段设为null
    * `projects`：Array类型，作品与项目展示，内含多个Object，每个Object都有`name`作品名、`image`封面、`description`作品描述、`link_text`链接文字、`link`链接地址。若不需要则将该字段设为null
    * `reward`：Array类型，打赏二维码图片列表。例子中两个图片分别为微信和支付宝的二维码图片链接。若不需要则将该字段设为null
* **读书页面**：在`yourblog/source/_data/reading.json`数据文件中进行配置。读书页面有“已读”“在读”和“想读”三栏，分别对应`contents`项中的`readed`、`reading`和`wanted`字段，每个字段对应一个书籍列表，按照例子进行修改即可。
* **new标签**：在`yourblog/source/_data/hint.json`数据文件中进行配置。`selector`项是一个数组，里面可以包含若干个CSS选择器用于选择要添加new标签的DOM元素。

### 插件

* **代码语法高亮**：语法高亮的主题默认由CSS文件`yourblog/themes/raytaylorism/source/css/lib/prettify-tomorrow-night-eighties.css`。如果需要替换，可以到[Prettify Theme]选择你喜欢的主题，下载主题的CSS文件并存放到相同的目录下，并将`yourblog/themes/raytaylorism/_config.yml`中的`google_code_prettify_theme`一项改为对应的文件名。
* **评论**：~评论插件默认使用[多说]，需要自行配置`yourblog/themes/raytaylorism/_config.yml`中的`duoshuo_shortname`为你自己站点的shortname~（多说即将关闭服务）评论插件默认使用[网易云跟帖]，需要自行配置`yourblog/themes/raytaylorism/_config.yml`中的`yungentie_product_key`为你自己站点的productKey（从通用代码中获取）
* **搜索**：安装[hexo-generator-search]，在`yourblog/_config.yml`中添加如下配置代码。如果不需要搜索功能，将`yourblog/themes/raytaylorism/_config.yml`中`menu`的`-id: search`那一整项删除即可
```
search:
  path: search.xml
  field: all
```
* **RSS**：安装[hexo-generator-feed]，并按照说明配置（`atom.xml`的链接写在`yourblog/source/_data/link.json`的social项中，一般无需更改）
* **站点分析**：
    * Google分析：`yourblog/themes/raytaylorism/_config.yml`中的`google_analytics`一项改为你的**Google分析track id**，留空则不启用
    * 腾讯分析：（国内用户有Google分析被墙的可能）`yourblog/themes/raytaylorism/_config.yml`中的`tencent_analytics`一项改为你的**sId**（在腾讯分析添加站点后，复制代码中`sId=xxxxxxxx`那串数字就是sId），留空则不启用
    * 如果你需要其他第三方的站点统计，可以仿照上面的例子添加配置，并在`yourblog/themes/raytaylorism/layout/_partial/plugin/analytics.ejs`中添加相应的统计代码
* **网页计数器**：使用不蒜子来统计PV和UV，若不需要可将`yourblog/themes/raytaylorism/_config.yml`中的`page_stat`设为false

## 使用的插件

* 样式框架：[Materialize]
* 代码语法高亮：[Google-code-prettify]
* 流量分析：[Google Analytics]、[腾讯分析]
* 第三方社会化评论：[多说]

## 更新日志

* 2.3.3(2017-4-29) 新增网易云跟帖评论插件支持
* 2.3.2(2016-12-21) 优化文章目录，使其随正文内容滚动（https://github.com/raytaylorlin/hexo-theme-raytaylorism/pull/49）
* 2.3.1(2016-12-14) 开放文章上一篇和下一篇功能
* 2.3.0(2016-12-10) 新增站点PV、UV和文章阅读量统计
* 2.2.3(2016-10-1) 修复首页非第1页点击READMORE路径错误的问题，修复多行代码由于空行不占位导致显示错位的问题
* 2.2.2(2016-6-7) 更新jQuery和Materialize库至最新版，修复正文右侧目录在某些浏览器无法正常导航的问题
* 2.2.1(2016-5-14) 添加打开搜索框时自动聚焦的功能
* 2.2.0(2016-4-22) 新增搜索功能
* 2.1.3(2016-4-13) 修复多行代码被挤到下方的显示问题
* 2.1.2(2016-4-5) 优化二级无序列表的样式，修复标签页和分类页的pagenav链接重复显示了两次导致404的问题
* 2.1.1(2016-3-29) 优化正文表格和引用的显示
* 2.1.0(2016-3-28) 增加对繁体中文和英文的支持
* 2.0.0-alpha(2016-3-14) 发布raytaylorism v2 alpha版本

[历史记录](log.md)

[Hexo]: http://hexo.io/
[我的博客]: http://raytaylorlin.com/
[Data Files]: https://hexo.io/docs/data-files.html
[Materializecss色板]: http://materializecss.com/color.html#palette
[Font Awesome图标]: https://fortawesome.github.io/Font-Awesome/icons/
[Prettify Theme]: http://jmblog.github.io/color-themes-for-google-code-prettify/
[hexo-generator-search]: https://github.com/PaicHyperionDev/hexo-generator-search
[hexo-generator-feed]: https://github.com/hexojs/hexo-generator-feed
[Materialize]: http://materializecss.com/
[Google-code-prettify]: https://code.google.com/p/google-code-prettify/
[Google Analytics]: http://www.google.com/analytics/
[腾讯分析]: http://v2.ta.qq.com/
[Furatto]: http://icalialabs.github.io/furatto/
[Font Awesome]: http://fortawesome.github.io/Font-Awesome/
[多说]: http://duoshuo.com/
