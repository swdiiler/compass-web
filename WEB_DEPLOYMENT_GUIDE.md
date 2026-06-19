# 招商决策Compass 浏览器访问部署方案

## 目标

把当前桌面原型发布成浏览器可访问的 Web 应用，供其他用户访问。

当前程序是静态前端应用，发布目录为 `web/`：

- `web/index.html`
- `web/app.js`
- `web/styles.css`
- `web/source-data.js`
- `web/.nojekyll`

## 安全口径

- 不要把 GitHub token 写入代码、文档、网页或聊天记录。
- 已经暴露过的 token 应立即在 GitHub 删除并重新生成。
- GitHub Pages 更适合公开演示；如果数据包含商户、价格、人员等敏感信息，应使用 Cloudflare Access、企业 VPN 或后端登录保护。
- 当前 `source-data.js` 会被浏览器完整下载，任何能访问页面的人都能看到其中数据。

## 方案 A：GitHub Pages 快速上线

适合演示版、数据可公开或只给有限人短期查看的场景。

### 步骤

1. 在 GitHub 新建仓库，例如 `compass-web`。
2. 把本目录中的这些内容提交到仓库：
   - `web/`
   - `.github/workflows/deploy-pages.yml`
   - `WEB_DEPLOYMENT_GUIDE.md`
3. 进入仓库 `Settings -> Pages`。
4. `Build and deployment` 选择 `GitHub Actions`。
5. 推送到 `main` 分支后，Actions 会自动部署。
6. 部署完成后，在 Actions 页面或 Pages 设置页查看访问地址。

### 本机首次推送示例

不要在命令里直接写 token。建议使用 GitHub CLI 登录：

```bash
gh auth login
git init
git branch -M main
git add web .github WEB_DEPLOYMENT_GUIDE.md
git commit -m "Deploy Compass web app"
git remote add origin git@github.com:<你的账号或组织>/compass-web.git
git push -u origin main
```

如果不用 SSH，也可以使用 HTTPS，但 token 应走 Git Credential Manager 或环境变量，不要写进脚本。

## 方案 B：Cloudflare Pages + Access

适合内部业务使用。优点是能给页面加访问控制。

### 发布方式

1. GitHub 仓库仍然保存 `web/`。
2. Cloudflare Pages 连接该仓库。
3. 构建命令留空。
4. 输出目录填写 `web`。
5. 发布后在 Cloudflare Zero Trust 中配置 Access：
   - 允许指定邮箱域名
   - 或允许指定邮箱列表
   - 或接企业身份源

### 推荐原因

当前应用没有后端鉴权。Cloudflare Access 可以在页面前面加一层登录门禁，避免任何拿到链接的人直接访问数据。

## 数据更新流程

每次 Excel 更新后，在本地执行：

```bash
node sync_latest_source_data.mjs
node sync_web_release.mjs
git add source-data.js web/source-data.js
git commit -m "Sync latest Compass data"
git push
```

如果同时改了页面代码，也把对应文件加入提交：

```bash
git add index.html app.js styles.css web/index.html web/app.js web/styles.css
```

## 正式多人版建议

静态发布版不能解决多人协作和权限问题。正式版建议升级为：

- 前端：Cloudflare Pages 或 Vercel
- 鉴权：企业微信、手机号登录或 Cloudflare Access
- 后端：Node.js / FastAPI / Supabase Edge Functions
- 数据库：Postgres
- 文件导入：后台上传 Excel 后入库
- 审计：记录用户、时间、操作类型、修改前后数据

当需要多人同时录入回价、审批、查看历史记录时，应切换到正式架构。
