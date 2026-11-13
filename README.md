# 77 个人站

中英双语个人介绍、职业经历、项目实践和工作方法。React + Vite，19 个独立静态页面；黑白灰为主、橙色作少量强调。

[查看网站](https://sunky-z.github.io/77-portfolio/) · [开发与部署说明](website/README.md) · [设计规范](website/DESIGN.md)

## 在新电脑上继续

安装 Git、VS Code、Node.js 24 后：

```sh
git clone https://github.com/sunky-Z/77-portfolio.git
cd 77-portfolio
code website
```

在 VS Code 的终端运行：

```sh
npm ci
npm run dev
```

开发地址为 `http://127.0.0.1:5177/`。已有仓库先保存自己的改动，再运行 `git pull --ff-only`；锁文件变化后重新 `npm ci`。

源码在 `website/`，可直接编辑。运行 `npm test`、`npm run build`、`npm run check:build` 检查；本地默认根目录构建，`npm run preview` 使用 `http://127.0.0.1:4177/`。自定义部署前缀与域名的命令见开发说明。

推送 `main` 会触发 GitHub Actions，构建并发布到 GitHub Pages。工程包含依赖锁文件、设计参考与 VS Code 任务；无需私有档案、本机绝对路径或手动复制依赖与构建产物。
