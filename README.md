# 77 个人站

中英双语作品集：个人介绍、职业经历、项目与工作方法。当前 V2 以黑、暖白和红色层次为视觉基础，首页、目录和详情共用组件；正文 18px、辅助文字 16px。

[查看 V2](https://sunky-z.github.io/77-portfolio/) · [查看 V1](https://sunky-z.github.io/77-portfolio/v1/) · [开发说明](website/README.md) · [设计规范](website/DESIGN.md)

## 本地开发

```sh
git clone https://github.com/sunky-Z/77-portfolio.git
cd 77-portfolio/website
npm ci
npm run dev
```

Node.js 24；默认地址 `http://127.0.0.1:5177/`。正式源码在 `website/`，不依赖私人档案或本机绝对路径。

```sh
npm test
npm run build
npm run check:build
```

推送 `main` 的网站源码改动后，由 GitHub Actions 发布到 GitHub Pages。V1 保存在 `v1` 分支、`v1` 标签及 `website/public/v1/` 的独立静态版本中；更新 V2 时保留该目录。
