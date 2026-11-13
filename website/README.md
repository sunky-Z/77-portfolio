# 77 个人站

面向初次认识 77 的访客，提供中英双语的个人介绍、职业经历、项目经过与工作方法。视觉采用黑白灰、留白和轻边框，搭配原创简笔画。英文与数字沿用 Times New Roman / Times，中文优先使用 SF Pro SC / PingFang SC；设备未安装时回退到系统中文字体，不分发 Apple 字体文件。

## 信息结构

首页用三张入口卡片概括“先认识我、看项目经历、了解做事方式”。HR 可以先看职业经历与教育背景；业务负责人可以进入项目正文读具体工作和交付物；陌生访客可以从简介及自然语言概括开始。

阅读采用总览、分类卡片、详细正文的层级。经历、项目和能力分别有独立链接；项目与能力互相关联。详情页有面包屑、页内目录、返回入口和复制链接。目录滚动不改变详情链接，切换语言保留当前分支和阅读位置。

- `#experience/huawei`、`#experience/hardware`、`#experience/current`：三段职业经历。
- `#work/ai-ecosystem`、`#work/energy-research`、`#work/hardware-research`、`#work/product-business`：四个项目主题。
- `#skills/research`、`#skills/planning`、`#skills/ai`、`#skills/delivery`：四个能力与方法分支。

页面文案以具体工作、操作和产物为主，保留参与、负责及协作范围。现有材料能支持的职责、方法与交付物已经展开，不新增业绩数字、样本、前后对比或外部评价。6 条产品线与 178 个已验证并上架技能属于 DROI 的工作范围及过程记录，不作为个人独立业绩。

## 源码维护

- `src/App.jsx`：首页、三类正文和全部交互。
- `src/portfolio.js`：双语简介、概览卡片、职业入口、项目卡片和能力正文。
- `src/content.js`、`src/content.zh.js`：双语项目正文与职业经历详情。
- `src/hooks/usePortfolioNavigation.js`：链接、浏览器历史、滚动和焦点恢复。
- `src/i18n.js`：语言选择，首次按浏览器语言，后续记住本机选择。
- `src/styles.css`、`src/fonts.css`：黑白灰卡片与正文布局、响应式、字体和减少动态设置。
- `public/assets/sketch-*.webp`：四张原创黑白插画，900×600，总约 169KB；是通用人物插画，不是 77 肖像或真实产品截图。

页面不再引用旧的视频、WebGL 背景、磁吸或开场动效。原组件与素材保留在源码中，但不进入当前页面运行和下载路径。概念插画使用内置 imagegen 生成：白纸背景、黑色墨线与少量灰填充，分别表现人物与机器人整理任务、访谈记录、观察硬件使用、比较纸面图表。

内容来源保持为已核对的职业经历与原项目说明。公司日期为 HUAWEI（2021.06–2024.04）、NINESTAR（2024.06–2025.04）、DROI（2025.11–至今）；学校沿用 WNU 与 YBU，联系邮箱由本人提供。私人档案源文件不进入公开仓库或站点。

## 本地预览与发布

使用 React + Vite。依赖已安装时直接运行 `npm run dev`，访问 http://127.0.0.1:5177 。`npm run build` 生成 `dist/`，`npm run preview` 在 4177 端口预览。

网站源码位于本仓库的 `website/`，默认生产路径为 `/77-portfolio/`。构建时也可通过 `VITE_BASE_PATH` 指定，生产预览访问 http://127.0.0.1:4177/77-portfolio/ 。

推送 `main` 后，GitHub Actions 使用 Node.js 24 安装依赖并构建，只发布 `website/dist`。网站地址为 https://sunky-z.github.io/77-portfolio/ 。

不提交本机依赖、构建产物、环境变量、运行资料或临时文件。第三方组件的历史许可保留于 `THIRD_PARTY_NOTICES.md`。
