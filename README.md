# Modernist

Theme for [Hexo]. Based on Hexo default light theme, and [modernist theme] for Github Pages.  

[Demo the Theme]

## Install

Execute the following command and modify `theme` in `_config.yml` to `modernist`.

```
git clone git://github.com/heroicyang/hexo-theme-modernist.git themes/modernist
```

## Update

Execute the following command to update Modernist.

```
cd themes/modernist
git pull
```

## Config

Default config:

``` yaml
menu:
  Home: /
  Archives: /archives

excerpt_link: Read More

fancybox: true

duoshuo_shortname:

google_analytics:
rss:
```

- **menu** - Main navigation menu
- **excerpt_link** - "Read More" link text at the bottom of excerpted articles
- **fancybox** - Enable [Fancybox]
- **duoshuo_shortname** - [Duoshuo] ID
- **google_analytics** - Google Analytics ID
- **rss** - RSS subscription link (change if using Feedburner)

[Hexo]: http://zespia.tw/hexo/
[modernist theme]: https://github.com/orderedlist/modernist
[Demo the Theme]: http://heroicyang.com/
[Duoshuo]: http://duoshuo.com
[Fancybox]: http://fancyapps.com/fancybox/