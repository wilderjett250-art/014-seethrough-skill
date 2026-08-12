# 014 SeeThrough Skill 桌面查看器 / SeeThrough Skill Desktop Viewer

> 普通用户双击一个 Windows EXE，就能只读查看本机 Codex、Claude Skill 和 MCP 配置。
>
> **English:** A Windows desktop viewer that lets ordinary users inspect local Codex, Claude Skills, and MCP configuration by double-clicking one EXE.

## 解决什么问题 / Problem

AI 工具配置通常分散在多个目录，普通用户很难知道 Skill 原文在哪里、MCP 服务从哪里启动。

**English:** AI tool configuration is spread across directories, making it difficult to locate Skill source or MCP entry points.

## 项目展示 / Demo

~~~mermaid
flowchart LR
 A[Codex / Claude / MCP 配置] --> B[本地扫描器]
 B --> C[只读快照]
 C --> D[原始 SKILL.md 与服务配置]
~~~

下载 ZIP、解压、双击 EXE 即可开始；不会把扫描结果上传到网络。

**English:** Download, extract, and double-click the EXE; scan results stay local.

## 高光亮点 / Highlights

- Windows 免安装 EXE。
  **English:** Portable Windows EXE for non-developers.
- Skill/MCP 原始内容查看。
  **English:** Shows original Skill and MCP content.
- 本地只读扫描，不上传数据。
  **English:** Performs local read-only scanning without uploads.
- Electron + GitHub Actions Release。
  **English:** Electron packaging with GitHub Actions releases.

## 技术名词 / Tech

`Electron · JavaScript · HTML/CSS · PowerShell · GitHub Actions`

## 从 ZIP 开始复现 / Reproduce from ZIP

1. 从 Releases 下载 `seethrough-skill-windows-x64-v*.zip` 并解压。
2. 双击 `SeeThrough Skill.exe`。
3. 等待扫描完成，在左侧选择 Skill 或 MCP。
4. 开发者也可以进入源码目录执行 `npm install` 和 `npm start`。

**Expected result:** 完成上述步骤后，应能看到项目的页面、窗口、设备输出或测试结果。

**Expected result:** After these steps, you should see the project's page, window, device output, or test result.

## 范围与安全 / Scope and Safety

查看器只读本机配置；请先确认电脑上没有要隐藏的敏感配置，并不要分享扫描快照。

**English:** The viewer reads local configuration only; check for sensitive entries before scanning and do not share scan snapshots.

## 交流 / Contact

欢迎交流技术。

Open to technical exchange.

[English full version](README.en.md)
