# astro-theme-bluearchive

![logo](src/assets/theme/icon/footLogo.png)

基于 Astro 构建的个人博客主题，灵感来自 Blue Archive 游戏风格。

## 功能特性

- [x] 首页横幅 Banner
- [x] 文章列表展示
- [x] 标签分类系统
- [x] 全文搜索功能
- [x] Waline 评论系统
- [x] 代码高亮与行号显示
- [x] 手机端响应式适配
- [x] LaTeX 数学公式支持
- [x] 点击烟花效果
- [x] 底栏信息展示
- [x] 优化 404 页面
- [x] Spine 模型动画（Arona / Plana / Kei / Aris）
- [x] 首屏加载动画
- [x] 夜间模式切换
- [x] RSS 订阅
- [x] 站点地图Sitemap生成
- [x] 图片灯箱浏览
- [x] 阅读时间估算
- [x] 友链页面
- [x] 项目展示页面

## 技术栈

- **框架**: [Astro](https://astro.build/) - 高性能静态站点生成器
- **UI 框架**: [Vue 3](https://vuejs.org/) - 渐进式 JavaScript 框架
- **样式**: [Less](https://lesscss.org/) - 动态样式语言
- **代码高亮**: [Expressive Code](https://expressive-code.com/) - 美观的代码块
- **数学公式**: [KaTeX](https://katex.org/) - 快速数学排版
- **评论系统**: [Waline](https://waline.js.org/) - 简洁安全的评论系统
- **图片浏览**: [PhotoSwipe](https://photoswipe.com/) - 触摸优化的图片灯箱
- **动画模型**: [Spine](https://esotericsoftware.com/) - 2D 骨骼动画
- **图标**: [Astro Icon](https://www.astroicon.dev/) + [Phosphor Icons](https://phosphoricons.com/) + [Font Awesome](https://fontawesome.com/)

## 快速开始

```bash
# 克隆项目
git clone <repository-url>
cd astro-blog

# 安装依赖
yarn install

# 启动开发服务器
yarn dev

# 构建生产版本
yarn build

# 预览生产构建
yarn preview
```

## 项目配置

配置文件位于 `config.yml`，包含以下主要配置项：

```yaml
# 站点基本信息
site:
  title: "Astro Blog"
  description: "Welcome to my website!"
  author: "Your Name"
  avatar: "/theme/banner/avatar.webp"
  favicon: "/favicon.svg"
  url: "https://example.com"
  lang: "zh-CN"
  # 备案信息（可选）
  icp:
    - text: "萌ICP备114514号"
      url: "https://icp.gov.moe/"
  # 社交链接
  social:
    - icon: "github"
      url: "https://github.com/username"
    - icon: "twitter"
      url: "https://twitter.com/username"

# 导航菜单
nav:
  - name: "首页"
    url: "/"
  - name: "标签"
    url: "/tags/"
  - name: "项目"
    url: "/project/"
  - name: "友链"
    url: "/friends/"
  - name: "关于"
    url: "/about/"

# 评论系统
comments:
  enable: true
  type: "waline"
  waline:
    serverURL: "https://your-waline-server.vercel.app"
```

## 文章配置

在文章 Frontmatter 中可以配置以下选项：

```markdown
---
title: 文章标题
description: 文章描述
date: 2024-01-01
tags:
  - 标签1
  - 标签2
image: /blog-placeholder-1.jpg  # 封面图片
---

文章摘要，会显示在文章列表中

---

正文内容...
```

## 资源文件

- **头像/背景**: `src/assets/theme/banner/`
  - `avatar.webp` - 站点头像
  - `banner.webp` - 首页背景
  - `banner_dark.webp` - 暗色模式首页背景
  - `bgm.mp3` - 背景音乐

- **Spine 模型**: `public/spine_assets/`
  - 支持 Arona、Plana、Kei、Aris 等角色模型

## 感谢

- [Astro](https://astro.build/) - 快速、内容驱动的网站框架
- [vitepress-theme-bluearchive](https://github.com/Alittfre/vitepress-theme-bluearchive) - 本主题的设计灵感来源
- [vitepress-theme-sakura](https://github.com/flaribbit/vitepress-theme-sakura) - 提供参考
- [spine-runtimes](https://github.com/esotericsoftware/spine-runtimes) - Spine 动画运行时
- [Resource Han Rounded](https://github.com/CyanoHao/Resource-Han-Rounded) - 字体资源

## License

[MIT](LICENSE)
