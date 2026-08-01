const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("seeThroughDesktop", {
  scanLocal: (options) => ipcRenderer.invoke("snapshot:scan", options || {}),
  pickSkillDirectory: () => ipcRenderer.invoke("dialog:skill-directory"),
  pickMcpConfig: () => ipcRenderer.invoke("dialog:mcp-config"),
  platform: process.platform,
  versions: {
    chrome: process.versions.chrome,
    electron: process.versions.electron,
    node: process.versions.node,
  },
});
