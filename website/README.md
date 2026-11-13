# Digital77 · Work

以 77 的职业经历为基础的英文个人作品站。文案使用简洁英文，学校名称按用户指定使用 WNU 与 YBU。内容使用履历中的高层职责与方法，案例为方法复盘，不包含公司内部指标、业务细节或个人隐私。

## 本地预览

使用 React + Vite。在本目录运行 `npm install`，然后运行 `npm run dev`，浏览 `http://127.0.0.1:5177`。`npm run build` 生成生产文件，`npm run preview` 在 4177 端口预览生产版本。

## 内容维护

- `src/App.jsx`：五个页面模块与交互，联系邮箱。
- `src/styles.css`：1700px 版心、PC 和移动端布局、减少动态设置。
- `src/content.js` / `src/content.zh.js`：英文原文与中文对照的职业经历、案例详情。
- `src/i18n.js`：页面文案翻译、语言选择与本机偏好记忆。
- `src/hooks/usePortfolioMotion.js`：GSAP 开场、标题揭幕、卡片序列与图片视差。
- `src/components/`：DarkVeil 蓝色背景与磁吸交互；第三方来源见 `THIRD_PARTY_NOTICES.md`。
- `public/assets/`：原创概念视觉与背景视频，不是真实产品截图。

网站文案依据用户确认的履历整理，源简历与个人资料不包含在本仓库中。

职业经历按用户确认展示：HUAWEI（2021.06–2024.04）、NINESTAR（2024.06–2025.04）与 DROI（2025.11–PRESENT，Product Manager）。DROI 的日期与职责已根据用户提供的简历核对；华为名称沿用用户最新指定。所有案例保留参与范围，不虚构收益或独立主导成果。

About 以 Research / Strategy / Build 三个信息块介绍背景与方向；经历面板保留一句背景、三条工作内容和关键词，优势卡片保留标题与三条能力。详细项目复盘保留在弹窗内。

DROI 用 AI Product & Growth 组织 Agent 体验、技能生态与商业化交付。6 条产品线、178 个已上架验证技能属于工作范围与过程证据；不将留存率或收益变化写成个人独立成果，69 个信息结构化设计暂不作为技能数量展示。AI 项目与商业化项目保留各自的贡献和协同范围。

首页背景保留原创蓝色玻璃视觉，使用 1080p / 60fps / 20 秒的慢速周期运动。首屏和导航按钮关闭磁吸位移，背景不响应鼠标。当前头像为 77 文字头像；四张作品封面分别使用 AI 流动结构、光学研究、精密硬件与增长平台的原创概念图，WebP 总体积约 347KB，不是真实产品截图。联系邮箱由用户明确提供。

动效以遮罩、位移和压缩归位为主，无弹跳缓动。WebGL 背景限制分辨率与 30fps 绘制，视频和背景在屏幕外暂停；触屏关闭悬停扫光与图片视差，系统开启“减少动态效果”时直接呈现内容与静态背景。

## 字体与段落

英文与数字继续使用系统 Times New Roman / Times。中文按 Apple 中国官网的字体链使用 SF Pro SC / PingFang SC，再依设备回退到 Hiragino Sans GB / Microsoft YaHei。Apple 字体文件不随站点分发；在未安装 Apple 中文字体的 Windows 上会使用系统中文字体。字体参考：https://www.apple.com.cn/v/homepage/a/styles/main.built.css 。

右上角的语言按钮支持中文与英文即时切换，案例详情内也保留入口。页面的正文、案例、导航、按钮、提示、辅助描述和浏览器标题一并切换。首次按浏览器语言选择，后续在本机记住选择；切换语言保留当前区块、职业经历选项和案例链接。中文是现有英文的对照翻译，未增补新的履历或成果。

## GitHub Pages 部署

网站源码保存在 `website/`；GitHub Actions 配置位于根目录 `.github/workflows/deploy-pages.yml`。推送网站改动到 `main` 后，工作流使用 Node.js 24 执行 `npm ci` 和构建，仅发布 `website/dist`。

仓库的 Settings → Pages 中需使用 GitHub Actions 作为发布源。本仓库为公开的网站专用仓库，通过 GitHub Pages 发布。

默认生产构建使用 `/77-portfolio/` 子路径，本地开发保留 `/`。工作流通过 `VITE_BASE_PATH` 自动按仓库名称设置路径；图片、视频和字体也适配该路径。生产预览访问 `http://127.0.0.1:4177/77-portfolio/`。

不将本机依赖、构建产物、临时文件、环境变量或旧 Sites 元数据提交到 GitHub。

## 浏览与分享

页面滚动后导航保持可用，手机菜单支持 Escape、点击外部和跳转后关闭，并将焦点移到目标标题。项目封面与标题使用真实链接；`#work/项目ID` 可直接访问、刷新和分享。案例内切换下一项不会增加多余返回层级；浏览器返回或关闭可回到作品列表。详情补充公司、个人职责与工作范围，并提供复制链接。卡片和详情统一标题，保留原有贡献边界。

`src/hooks/useCaseNavigation.js` 管理项目 URL、页面标题与关闭后的焦点恢复；`src/hooks/useBackgroundVideo.js` 统一管理视频。开启系统减少动态或浏览器省流时不挂载视频源，使用静态背景；用户可主动播放。滚出首屏或切换到后台时暂停视频。直接进入页面区块或项目链接时跳过开场动画；图片视差仅在宽屏且具有精细指针和悬停能力时启用。

首屏静态背景使用原图转码的 `hero-poster.webp`（约 57KB，原 PNG 约 1.82MB），视频保持原有视觉。页面补充 canonical、社交分享封面和无 JavaScript 时的联系入口。公开地址仍为 https://sunky-z.github.io/77-portfolio/ 。
