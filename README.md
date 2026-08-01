# SeeThrough Skill

一个本机只读的 Skill / MCP 查看器，用来快速看清当前电脑里安装了哪些 Codex / Claude Skill，以及 MCP 配置暴露了哪些工具入口。

SeeThrough Skill is a local read-only viewer for inspecting Codex Skills, Claude Skills, and MCP configuration on a Windows machine.

[Download Releases](https://github.com/wilderjett250-art/seethrough-skill/releases) · [中文说明](#中文说明) · [English](#english)

---

## 中文说明

### 项目定位

SeeThrough Skill 是一个面向普通用户和开发者的小工具。它把本机可扫描到的 Skill、MCP 配置和原始 `SKILL.md` 内容集中展示出来，帮助用户理解自己的 AI 编程环境里到底有哪些能力入口。

这个项目的核心思路是“事实优先”：

- 扫描本机常见 Codex / Claude Skill 目录。
- 读取并展示原始 `SKILL.md`。
- 解析 Skill frontmatter、来源路径和重复路径。
- 读取常见 MCP 配置文件，并做基础脱敏展示。
- 保留原文，让用户自己判断 Skill 的作用、边界和质量。

### 普通用户怎么用

从 GitHub Releases 下载：

```text
seethrough-skill-windows-x64-v0.1.0.zip
```

解压后第一层就是：

```text
SeeThrough Skill.exe
README.md
source\
```

直接双击：

```text
SeeThrough Skill.exe
```

程序会打开桌面界面并扫描当前电脑上的 Codex、Claude Skill 和 MCP 配置。这个版本已经把运行环境打包进 EXE，适合直接发给普通用户使用。

### 开发者怎么运行

要求：

- Windows
- Node.js 18 或更高版本
- npm

安装依赖：

```powershell
npm install
```

启动本地网页版：

```powershell
npm start
```

启动 Electron 桌面版：

```powershell
npm run desktop
```

只扫描并生成本机快照：

```powershell
npm run scan
```

生成 JSON 快照：

```powershell
npm run scan:json
```

### 构建 Windows 版本

生成 Windows 便携 EXE：

```powershell
npm run build:win
```

生成普通用户可直接解压使用的发布 ZIP：

```powershell
npm run package:release
```

输出文件：

```text
dist/seethrough-skill-windows-x64-v0.1.0.zip
```

ZIP 内部结构：

```text
SeeThrough Skill.exe
README.md
source\
```

### GitHub Releases 自动发布

仓库已包含 GitHub Actions 工作流：

```text
.github/workflows/build-windows-release.yml
```

推送版本标签后，GitHub 会自动构建 Windows EXE、生成发布 ZIP，并创建 Release：

```powershell
git tag v0.1.0
git push origin v0.1.0
```

### 默认扫描位置

SeeThrough Skill 会尝试读取这些常见位置，只有路径存在时才扫描：

```text
%USERPROFILE%\.codex\skills
%USERPROFILE%\.codex\plugins\cache
%USERPROFILE%\.codex\config.toml
%USERPROFILE%\.claude\skills
%USERPROFILE%\.claude\settings.json
%APPDATA%\Claude\claude_desktop_config.json
.claude\skills
.codex\skills
.mcp.json
```

也可以指定自己的 Skill 目录或 MCP 配置：

```powershell
node .\scan-local.mjs --skill-root "D:\my-skills" --config "D:\my-config.toml"
```

扫描 Codex 插件缓存里的历史 Skill：

```powershell
node .\scan-local.mjs --include-plugin-cache-all
```

### 浏览器导入能力

页面顶部提供三个入口：

- 选择 Skill 目录：在 Edge / Chrome 中读取选中目录里的 `SKILL.md`。
- 选择 MCP 配置：导入 `config.toml`、`claude_desktop_config.json` 或 `.mcp.json`。
- 导入快照：导入 `scan-local.mjs --json` 生成的 JSON，或项目生成的 `skills-data.js`。

### 多语言界面

项目内置多语言 UI 文案，方便不同语言用户查看本机 Skill 信息。右侧详情区保留原始 Markdown，并提供辅助阅读视图。

### 文件结构

```text
app.js                         Browser UI logic
index.html                     Main page
styles.css                     Interface styles
scan-local.mjs                 Local Skill and MCP scanner
serve-local.mjs                Local HTTP server and browser launcher
electron/main.mjs              Electron main process
electron/preload.cjs           Safe bridge between Electron and page
scripts/explain-code.mjs       Annotated-code document generator
docs/annotated-code.md         Chinese line-by-line source explanation
package-release.ps1            Release ZIP packager
package-portable.ps1           Source portable packager
install-desktop-shortcut.ps1   Desktop shortcut helper
.github/workflows/             GitHub Actions release workflow
```

### 隐私和安全

SeeThrough Skill 按本地只读工具设计。扫描结果、Skill 原文和 MCP 配置摘要都保留在本机。项目默认忽略本机快照、构建产物和发布包：

```text
skills-data.js
skill-snapshot.json
node_modules/
release/
dist/
output/
skill-quarantine-*/
```

MCP 配置中的 token、api key、secret、bearer token 会做基础脱敏。正式发布前仍建议人工核对导出的快照和截图，只发布源码与通用说明。

### 适合谁使用

- 想看清本机安装了哪些 Codex / Claude Skill 的用户。
- 想审查 MCP 工具入口和配置来源的开发者。
- 想整理、迁移或复盘 AI 编程环境的人。
- 想学习 Electron + 本地扫描 + 静态前端组合的小工具开发者。

---

## English

### What is SeeThrough Skill?

SeeThrough Skill is a small Windows utility for inspecting local Codex Skills, Claude Skills, and MCP configuration.

It focuses on showing facts from the local machine:

- installed Skill paths
- original `SKILL.md` content
- frontmatter metadata
- duplicated Skill locations
- MCP configuration entries
- local snapshot data for review

The tool keeps the original Markdown visible, so users can read the real instructions and understand what each Skill does.

### Quick start for users

Download the Windows ZIP from GitHub Releases:

```text
seethrough-skill-windows-x64-v0.1.0.zip
```

Unzip it. The first level contains:

```text
SeeThrough Skill.exe
README.md
source\
```

Double-click:

```text
SeeThrough Skill.exe
```

The desktop app scans common Codex and Claude Skill locations and displays the result in a local interface.

### Run from source

Requirements:

- Windows
- Node.js 18+
- npm

Install dependencies:

```powershell
npm install
```

Start the local web version:

```powershell
npm start
```

Start the Electron desktop version:

```powershell
npm run desktop
```

Run the scanner:

```powershell
npm run scan
```

Generate a JSON snapshot:

```powershell
npm run scan:json
```

### Build Windows release

Build the portable Windows EXE:

```powershell
npm run build:win
```

Package the ready-to-run ZIP:

```powershell
npm run package:release
```

Expected output:

```text
dist/seethrough-skill-windows-x64-v0.1.0.zip
```

### Release workflow

This repository includes a GitHub Actions workflow for Windows release builds:

```text
.github/workflows/build-windows-release.yml
```

Push a version tag to create a release:

```powershell
git tag v0.1.0
git push origin v0.1.0
```

### Design idea

SeeThrough Skill is intentionally simple:

1. The scanner collects local facts.
2. The UI shows the collected facts in a readable layout.
3. The user reads the original Skill content and decides what it means.

This makes the tool useful for environment review, migration, cleanup, and learning.

### License

Open-source utility project by Horizon Quest World.
