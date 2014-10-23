# hexo-theme-raytaylorism

这是我制作的一款简洁的响应式扁平化风格的[Hexo]主题，基于[Furatto]和[Font Awesome]。

**本主题现已修复bug，可以运行在最新版本（2.8.3）了**

[主题预览（我的博客）]

## 截图

* [主题截图1](http://raytaylorlin-blog.qiniudn.com/%E4%B8%BB%E9%A2%98%E6%88%AA%E5%9B%BE1.jpg)
* [主题截图2](http://raytaylorlin-blog.qiniudn.com/%E4%B8%BB%E9%A2%98%E6%88%AA%E5%9B%BE2.jpg)
* [主题截图3](http://raytaylorlin-blog.qiniudn.com/%E4%B8%BB%E9%A2%98%E6%88%AA%E5%9B%BE3.jpg)
* [主题截图4](http://raytaylorlin-blog.qiniudn.com/%E4%B8%BB%E9%A2%98%E6%88%AA%E5%9B%BE4.jpg)

## 安装

```
cd yourblog.github.io
git clone https://github.com/raytaylorlin/hexo-theme-raytaylorism.git themes/raytaylorism
```

修改 `_config.yml` 中的`theme`一项的值为 `raytaylorism`即可启用主题。

## 使用的插件

代码语法高亮 [Google-code-prettify]

流量分析 [Google Analytics]

第三方社会化评论 [多说]

响应式侧滑菜单 [jQuery.jPanelMenu.js]

## 更新日志

* 1.3.0(2014-10-22) 新增文章中目录导航
* 1.2.9(2014-10-22) 修复主题在hexo 2.0+版本上运行报错的问题
* 1.2.8(2014-6-20) 添加MathJax插件
* 1.2.7(2014-5-4) 将读书栏目的书本封面固定宽高并按比例压缩，将详细展开标签置于封面右侧
* 1.2.6(2014-1-10) 添加分类目录菜单
* 1.2.5(2014-1-8) 修复升级hexo版本到2.3.0后，归档的标题没有显示的问题
* 1.2.4(2014-1-7) 修复Furatto升级版本后侧滑栏样式的问题
* 1.2.3(2014-1-4) 修复“加载更多”无法滚动的问题
* 1.2.2(2014-1-3) 重新调整全局的字体大小
* 1.2.1(2013-12-16) 修复升级hexo版本到2.3.0后，正文中代码排版的问题
* 1.2.0(2013-12-12) 修复当在hexo配置中new_feature_guide字段不存在时，生成会报错的问题
* 1.1.9(2013-11-1) 新增读书栏目
* 1.1.8(2013-10-24) 修复Furatto升级版本后各种样式的问题
* 1.1.7(2013-10-21) 修复Furatto升级版本后网格布局的显示错误
* 1.1.6(2013-10-18) 将Furatto升级到V2.0版本
* 1.1.5(2013-10-8) 修复在其他页面点击header的博客名没有回到首页的bug
* 1.1.4(2013-10-7) 新增about.ejs模板
* 1.1.3(2013-10-6) 修改新功能导航的DOM识别方式为查询字符串，给navbar的各项添加id
* 1.1.2(2013-10-3) 修复google_analytics.ejs中没有引用博客配置的错误
* 1.1.1(2013-9-20) 修复Google Analytics无效的bug
* 1.1.0(2013-9-20) 把新功能导航的特征值分离到博客的配置中
* 1.0.9(2013-9-19) 修复IE新功能导航阴影的显示问题
* 1.0.8(2013-9-19) 修复“你当前所在的位置”为空的bug
* 1.0.7(2013-9-18) 修复“加载更多”动画效果滚动不到位的问题
* 1.0.6(2013-9-15) 新增新功能导航效果
* 1.0.5(2013-9-5) 调整基础布局，新增首页加载更多按钮
* 1.0.4(2013-9-2) 针对手机进行响应式设计，重新定义所有版面的字体大小
* 1.0.3(2013-9-1) 新增响应式设计的侧滑菜单
* 1.0.2(2013-8-31) 添加了About页面并使用自定义模板
* 1.0.1(2013-8-26) 使页面主内容在高度不够的时候可以自适应屏幕，让页脚沉底

[Hexo]: http://hexo.io/
[主题预览（我的博客）]: http://raytaylorlin.com/
[Google-code-prettify]: https://code.google.com/p/google-code-prettify/
[Google Analytics]: http://www.google.com/analytics/
[Furatto]: http://icalialabs.github.io/furatto/
[Font Awesome]: http://fortawesome.github.io/Font-Awesome/
[多说]: http://duoshuo.com/
[jQuery.jPanelMenu.js]: http://jpanelmenu.com/
