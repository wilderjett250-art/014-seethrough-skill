# 014 SeeThrough Skill Desktop Viewer

> A Windows desktop viewer that lets ordinary users inspect local Codex, Claude Skills, and MCP configuration by double-clicking one EXE.

## Problem

AI tool configuration is spread across directories, making it difficult to locate Skill source or MCP entry points.

## Demo

~~~mermaid
flowchart LR
 A[Codex / Claude / MCP config] --> B[Local scanner]
 B --> C[Read-only snapshot]
 C --> D[Original SKILL.md and service config]
~~~

Download, extract, and double-click the EXE; scan results stay local.

## Highlights

- Portable Windows EXE for non-developers.
- Shows original Skill and MCP content.
- Performs local read-only scanning without uploads.
- Electron packaging with GitHub Actions releases.

## Tech

`Electron · JavaScript · HTML/CSS · PowerShell · GitHub Actions`

## Reproduce from ZIP

1. Download and extract `seethrough-skill-windows-x64-v*.zip` from Releases.
2. Double-click `SeeThrough Skill.exe`.
3. Wait for the scan to finish, then select a Skill or MCP entry.
4. Developers can open the source directory and run `npm install` and `npm start`.

**Expected result:** After these steps, you should see the project's page, window, device output, or test result.

## Scope and Safety

The viewer reads local configuration only; check for sensitive entries before scanning and do not share scan snapshots.

## Contact

Open to technical exchange.
