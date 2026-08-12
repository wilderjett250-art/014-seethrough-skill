# 014 SeeThrough Skill 桌面查看器 | Skill Viewer

> 不用手动翻目录，直接查看本机 Codex、Claude Skill 和 MCP 配置。
>
> **English:** A practical, runnable project with a documented workflow for the problem described above.

## 项目展示 / Demo

```mermaid
flowchart LR
 A[Codex/Claude/MCP 配置] --> B[本地扫描器]
 B --> C[只读快照]
 C --> D[Skill 原文与服务详情]
```

## 解决什么问题 / Problem

解决普通用户无法快速定位 AI 工具配置、原始 SKILL.md 和 MCP 服务入口的问题。

**English:** This project addresses the problem above with a reproducible local workflow.

## 有什么用 / Use

下载 Windows ZIP 后双击 EXE，扫描本机配置并只读展示原始内容。

**English:** Run the workflow locally, inspect the output, and extend the project from the provided source.

## 高光亮点 / Highlights

- Windows 免安装 EXE
- Skill/MCP 原始内容查看
- 本地只读扫描，不上传数据
- Electron + GitHub Actions Release

## 技术名词 / Tech

`Electron · JavaScript · HTML/CSS · PowerShell · GitHub Actions`

## 从 ZIP 开始复现 / Reproduce from ZIP

1. 从 Releases 下载 ZIP 并解压。
2. 双击 SeeThrough Skill.exe。
3. 等待扫描完成，在左侧选择 Skill 或 MCP。
4. 开发者也可以下载源码 ZIP，执行 npm install 和 npm start。

**Expected result:** 普通用户看到桌面窗口和本机 Skill/MCP 列表；源码用户可以重新扫描并构建 Windows 版本。

## 目录提示 / Notes

- 先阅读本 README，再按项目内更详细的中文/英文文档补充配置。
- 不要把真实密码、Token、数据库业务数据和本机运行结果提交回仓库。
- 下载 ZIP 后的第一次运行应使用测试数据或示例图片，确认链路正常后再接入自己的环境。

[English documentation](README.en.md)
