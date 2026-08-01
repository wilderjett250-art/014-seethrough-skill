#!/usr/bin/env node
import fs from "node:fs";
import http from "node:http";
import path from "node:path";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";

const projectDir = path.dirname(fileURLToPath(import.meta.url));
const options = parseArgs(process.argv.slice(2));
const host = options.host || "127.0.0.1";
const requestedPort = Number(options.port || 4173);

if (!options.noScan) {
  await runNodeScript("scan-local.mjs", options.scanArgs);
}

const server = createStaticServer(projectDir);
const { port } = await listenWithFallback(server, host, requestedPort);
const url = `http://${host}:${port}/index.html`;

console.log(`SeeThrough Skill started: ${url}`);
console.log("按 Ctrl+C 关闭本地服务。");

if (!options.noOpen) {
  openBrowser(url);
}

function parseArgs(argv) {
  const result = {
    scanArgs: [],
    noOpen: false,
    noScan: false,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    const next = argv[index + 1];

    if (arg === "--host") {
      result.host = next;
      index += 1;
    } else if (arg === "--port") {
      result.port = next;
      index += 1;
    } else if (arg === "--no-open") {
      result.noOpen = true;
    } else if (arg === "--no-scan") {
      result.noScan = true;
    } else if (arg === "--") {
      result.scanArgs.push(...argv.slice(index + 1));
      break;
    } else {
      result.scanArgs.push(arg);
    }
  }

  return result;
}

function runNodeScript(scriptName, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [path.join(projectDir, scriptName), ...args], {
      cwd: projectDir,
      stdio: "inherit",
    });

    child.on("error", reject);
    child.on("exit", (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`${scriptName} exited with code ${code}`));
      }
    });
  });
}

function createStaticServer(rootDir) {
  return http.createServer((request, response) => {
    try {
      const requestUrl = new URL(request.url || "/", "http://localhost");
      const safePath = decodeURIComponent(requestUrl.pathname === "/" ? "/index.html" : requestUrl.pathname);
      const filePath = path.resolve(rootDir, `.${safePath}`);

      if (!filePath.startsWith(rootDir)) {
        response.writeHead(403);
        response.end("Forbidden");
        return;
      }

      if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
        response.writeHead(404);
        response.end("Not found");
        return;
      }

      response.writeHead(200, {
        "Content-Type": contentType(filePath),
        "Cache-Control": "no-store",
      });
      fs.createReadStream(filePath).pipe(response);
    } catch (error) {
      response.writeHead(500);
      response.end(error.message || "Server error");
    }
  });
}

function listenWithFallback(server, host, startPort) {
  return new Promise((resolve, reject) => {
    let port = startPort;

    const tryListen = () => {
      server.once("error", (error) => {
        if (error.code === "EADDRINUSE" && port < startPort + 20) {
          port += 1;
          tryListen();
          return;
        }
        reject(error);
      });

      server.listen(port, host, () => resolve({ port }));
    };

    tryListen();
  });
}

function openBrowser(url) {
  if (process.platform === "win32") {
    spawn("cmd", ["/c", "start", "", url], { detached: true, stdio: "ignore" }).unref();
  } else if (process.platform === "darwin") {
    spawn("open", [url], { detached: true, stdio: "ignore" }).unref();
  } else {
    spawn("xdg-open", [url], { detached: true, stdio: "ignore" }).unref();
  }
}

function contentType(filePath) {
  const extension = path.extname(filePath).toLowerCase();
  return {
    ".html": "text/html; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".js": "text/javascript; charset=utf-8",
    ".mjs": "text/javascript; charset=utf-8",
    ".json": "application/json; charset=utf-8",
    ".md": "text/markdown; charset=utf-8",
    ".png": "image/png",
    ".svg": "image/svg+xml",
  }[extension] || "application/octet-stream";
}
