# 77 个人站

面向初次认识 77 的访客，提供中英双语的个人介绍、职业经历、项目经过与工作方法。采用已选的编辑式布局：黑白灰为主，橙色用于主要操作和少量重点。设计约定见 [DESIGN.md](DESIGN.md)，后续可以先调整变量，再检查实际页面。

在线网站：[77 个人站](https://sunky-z.github.io/77-portfolio/) · 独立工程仓库：[77-portfolio](https://github.com/sunky-Z/77-portfolio)

## 在另一台电脑继续开发

安装 Git、VS Code 和 Node.js 24（与 GitHub Actions 一致）。`.nvmrc`、`.node-version` 均记录推荐主版本 24；`package.json` 的最低运行范围与当前 Vite 依赖一致。使用 npm 和已提交的 `package-lock.json` 安装依赖。

首次取得工程：

```sh
git clone https://github.com/sunky-Z/77-portfolio.git
cd 77-portfolio
code website
```

在 VS Code 中打开 `website` 文件夹后，新建终端运行：

```sh
npm ci
npm run dev
```

打开终端显示的 [本地开发地址](http://127.0.0.1:5177/)。修改源码后自动刷新。也可以通过“终端 → 运行任务”启动开发、构建或检查。

已有本地副本时，先保存或提交自己的改动，在仓库根目录运行 `git pull --ff-only`；如果依赖清单或锁文件发生变化，再进入 `website` 运行 `npm ci`。出现冲突时先处理冲突，再继续开发。无需复制另一台电脑的 `node_modules`、`dist` 或私有档案。

工程不依赖固定盘符、本机路径或 `digital-77` 的其他文件。也可以直接打开整个仓库，手动 `cd website` 后运行命令；此时 VS Code 的文件夹任务配置不会自动从子目录加载。

## 常用命令

| 命令 | 用途 |
|---|---|
| `npm ci` | 按锁文件安装；首次下载或依赖变化后运行 |
| `npm run dev` | 开发服务，默认端口 5177 |
| `npm test` | 核对独立路由、内容映射、中英项目与关联链接 |
| `npm run build` | 生成资源、19 个独立页面和 `404.html` 到 `dist/` |
| `npm run check:build` | 构建后核对 HTML、入口资源、静态文件与部署前缀 |
| `npm run preview` | 预览构建结果，默认端口 4177 |

修改完成后至少运行 `npm test`、`npm run build`、`npm run check:build`。页面交互、中文排版和移动端效果仍需要在浏览器里检查。

## 部署

现有 GitHub Pages 工作流在公开仓库 `main` 分支收到网站源码变更后，安装依赖、构建并部署 `website/dist`。工作流为当前仓库传入 `VITE_BASE_PATH=/77-portfolio/`，网站地址为 `https://sunky-z.github.io/77-portfolio/`。提交工程源码和锁文件即可；不要手动提交 `dist`。

本地默认构建到站点根路径 `/`，运行 `npm run build` 后，通过 `npm run preview` 访问 `http://127.0.0.1:4177/`。

要在本地核对与 GitHub Pages 相同的子路径，PowerShell 使用：

```powershell
$env:VITE_BASE_PATH = '/77-portfolio/'
npm run build
npm run check:build
npm run preview
```

此时访问 `http://127.0.0.1:4177/77-portfolio/`。构建、检查和预览应使用同一个前缀。终止预览后，可清除当前终端的变量：

```powershell
Remove-Item Env:VITE_BASE_PATH -ErrorAction SilentlyContinue
```

macOS / Linux 可先运行 `export VITE_BASE_PATH=/77-portfolio/`，再依次执行相同 npm 命令；完成后运行 `unset VITE_BASE_PATH`。

迁移到自定义域名或其他静态托管时，用 `VITE_BASE_PATH` 指定部署目录（根目录为 `/`），用 `VITE_SITE_ORIGIN` 指定域名（例如 `https://example.com`，不含子路径）。构建脚本据此生成 canonical、分享网址和分享图地址；未指定域名时沿用当前 GitHub Pages 域名。需要同时给构建和检查命令提供相同的环境变量。

```powershell
$env:VITE_BASE_PATH = '/'
$env:VITE_SITE_ORIGIN = 'https://example.com'
npm run build
npm run check:build
```

将 `dist` 的全部内容上传到支持目录 `index.html` 的静态托管服务。页面采用真实目录与独立 HTML，不需要服务端应用或客户端路由重写。服务器应正常返回 `assets/`，并使用 `404.html` 作为未找到页面。

## 改什么，去哪里

| 修改目标 | 文件 |
|---|---|
| 设计规则、配色与布局约定 | `DESIGN.md` |
| 橙色、背景、文字、间距、响应式 | `src/styles.css` 中的样式变量和组件规则 |
| 中英文字体与回退 | `src/fonts.css` |
| 首页、分类页、正文布局和交互 | `src/App.jsx` |
| 双语简介、项目卡片、职业入口与能力内容 | `src/portfolio.js` |
| 双语项目及职业正文 | `src/content.zh.js`、`src/content.js` |
| 页面清单、层级与旧地址映射 | `src/routes.js` |
| 从网址选择页面 | `src/hooks/usePortfolioNavigation.js` |
| 语言选择和本机偏好 | `src/i18n.js` |
| 图片素材 | `public/assets/` |
| 独立 HTML、标题与分享元数据 | `scripts/build-pages.mjs` |
| 部署前缀和构建配置 | `vite.config.js` |
| 发布触发条件与 GitHub Pages | 仓库根目录 `.github/workflows/deploy-pages.yml` |

先从内容文件和样式变量改起。增加或删除页面时，同时核对路由清单、双语内容、分类入口与相关链接，再运行检查。

英文与数字通过本机字体别名 `Portfolio Times` 使用 Times New Roman / Times，未安装时可回退到 Liberation Serif。`src/fonts.css` 用 `@font-face` 的 `unicode-range` 将它限制在拉丁字符、数字及相关符号范围，避免操作系统的 Times 字体链接将中文选成衬线体。中文独立采用 SF Pro SC / PingFang SC → Hiragino Sans GB → Microsoft YaHei → Noto Sans CJK SC / Noto Sans SC → 系统无衬线字体的回退顺序。所有字体从本机读取，工程不打包或分发 Apple 字体文件；Windows 与 macOS 的实际字形和换行仍可能不同。

## 信息结构

网站采用“首页 → 分类总览 → 详细正文”的三层架构。HR 可以先看经历与教育背景；业务负责人可以进入项目正文读工作和交付物；陌生访客从简介和精选项目开始。

| 层级 | 路径 | 内容 |
|---|---|---|
| 首页 | `/` | 简介、精选项目及分类入口 |
| 分类 | `/experience/`、`/projects/`、`/capabilities/` | 职业经历、七个项目、四个能力分支 |
| 联系 | `/contact/` | 邮箱及复制入口 |
| 经历详情 | `/experience/huawei/`、`/experience/hardware/`、`/experience/current/` | 三段职业经历 |
| AI 项目 | `/projects/ai-ecosystem/`、`/projects/skill-ecosystem/`、`/projects/ai-commercialization/`、`/projects/international-product/` | 主动服务、技能治理、订阅权益、海外本地化 |
| 研究及产品分析 | `/projects/energy-research/`、`/projects/hardware-research/`、`/projects/product-business/` | 能源、智能硬件、消费端产品 |
| 方法详情 | `/capabilities/research/`、`/capabilities/planning/`、`/capabilities/ai/`、`/capabilities/delivery/` | 方法、应用项目和工作范围 |

所有页面都有自己的 HTML，可直接访问、刷新、分享或在新标签中打开。面包屑和返回链接指向父分类；经历、项目和方法之间有相关链接。切换语言保留当前页面与阅读位置；旧版 `#about`、`#projects`、`#work/…` 等地址会转换到对应页面。

## 内容和素材边界

文案写清参与、负责和协作范围；数量保留对象、阶段和状态。29 套卡片模板与 38 个视觉变体是设计交付，295 → 47 是共享标签整理，15 类账户场景是订阅原型覆盖，不作为业务增长或实际支付通过率。未补齐口径的留存和收益指标不公开。

首页与项目插画采用通用成年男性、白底黑色线稿；人物不作为真实肖像，概念图不作为实际产品截图。首页概括图与项目封面分别使用独立素材。第三方组件及历史许可保留在 `THIRD_PARTY_NOTICES.md`；历史 WebGL、视频与动效组件未进入当前页面运行路径。

公开工程只包含可发布的网站源码、素材与维护文档；简历原件、周报、核对资料、会话和私人档案不进入工程。`node_modules`、`dist`、环境变量、日志与运行资料由 `.gitignore` 排除。
