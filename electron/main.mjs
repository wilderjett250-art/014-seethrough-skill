import { app, BrowserWindow, dialog, ipcMain } from "electron";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { collectSnapshot } from "../scan-local.mjs";

const appDir = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
let mainWindow = null;

app.setName("SeeThrough Skill");

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1480,
    height: 980,
    minWidth: 1080,
    minHeight: 720,
    title: "SeeThrough Skill",
    backgroundColor: "#f4f5f1",
    webPreferences: {
      preload: path.join(appDir, "electron", "preload.cjs"),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: false,
    },
  });

  mainWindow.loadFile(path.join(appDir, "index.html"));
}

ipcMain.handle("snapshot:scan", async (_event, options = {}) => {
  return collectSnapshot({
    ...options,
    cwd: app.getPath("home"),
  });
});

ipcMain.handle("dialog:skill-directory", async () => {
  const result = await dialog.showOpenDialog(mainWindow, {
    title: "选择 Skill 目录",
    properties: ["openDirectory"],
  });
  if (result.canceled || !result.filePaths.length) return null;
  return collectSnapshot({
    cwd: app.getPath("home"),
    skillRoot: result.filePaths,
  });
});

ipcMain.handle("dialog:mcp-config", async () => {
  const result = await dialog.showOpenDialog(mainWindow, {
    title: "选择 MCP 配置文件",
    properties: ["openFile"],
    filters: [
      { name: "MCP config", extensions: ["toml", "json", "mcp", "txt"] },
      { name: "All files", extensions: ["*"] },
    ],
  });
  if (result.canceled || !result.filePaths.length) return null;
  return collectSnapshot({
    cwd: app.getPath("home"),
    config: result.filePaths,
  });
});

app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
