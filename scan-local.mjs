#!/usr/bin/env node
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

export async function collectSnapshot(options = {}) {
  const cwd = path.resolve(options.cwd || process.cwd());
  const home = options.home || os.homedir();
  const codexHome = path.resolve(options.codexHome || process.env.CODEX_HOME || path.join(home, ".codex"));
  const claudeHome = path.resolve(options.claudeHome || process.env.CLAUDE_HOME || path.join(home, ".claude"));
  const codexConfigPath = options.codexConfig
    ? path.resolve(options.codexConfig)
    : path.join(codexHome, "config.toml");
  const enabledCodexPlugins = await readEnabledCodexPlugins(codexConfigPath);

  const skillRoots = defaultSkillRoots({
    codexHome,
    claudeHome,
    cwd,
    enabledCodexPlugins,
    includePluginCacheAll: options.includePluginCacheAll,
  })
    .concat((options.skillRoot || []).map((root) => ({
      label: "自定义 Skill 根目录",
      path: path.resolve(root),
      ecosystem: "Custom",
      source: "custom",
    })));

  const configPaths = defaultConfigPaths({ codexHome, claudeHome, cwd, home, codexConfigPath })
    .concat((options.config || []).map((filePath) => ({
      label: "自定义 MCP 配置",
      path: path.resolve(filePath),
      ecosystem: "Custom",
      type: inferConfigType(filePath),
    })));

  const presetPaths = [];
  for (const entry of skillRoots) {
    presetPaths.push({
      kind: "skill-root",
      label: entry.label,
      path: entry.path,
      exists: await exists(entry.path),
    });
  }
  for (const entry of configPaths) {
    presetPaths.push({
      kind: "mcp-config",
      label: entry.label,
      path: entry.path,
      exists: await exists(entry.path),
    });
  }

  const skills = await scanSkills(skillRoots);
  const mcpServers = await scanMcpServers(configPaths);
  const globalSettings = await readCodexGlobalSettings(codexConfigPath, mcpServers);

  return {
    projectName: "SeeThrough Skill",
    generatedAt: new Date().toISOString(),
    platform: process.platform,
    home,
    codexHome,
    claudeHome,
    configPath: codexConfigPath,
    enabledCodexPlugins,
    presetPaths,
    globalSettings,
    total: skills.length,
    skills,
    mcpServers,
  };
}

export async function writeSnapshot(payload, options = {}) {
  const cwd = path.resolve(options.cwd || process.cwd());
  const outPath = path.resolve(options.out || path.join(cwd, "skills-data.js"));
  const jsonPath = options.json === true
    ? path.resolve(cwd, "skill-snapshot.json")
    : options.json
      ? path.resolve(options.json)
      : "";
  const json = JSON.stringify(payload, null, 2);

  await fs.writeFile(outPath, `window.SKILL_DATA = ${json};\n`, "utf8");
  if (jsonPath) await fs.writeFile(jsonPath, `${json}\n`, "utf8");

  return { outPath, jsonPath };
}

export async function main(argv = process.argv.slice(2)) {
  const args = parseArgs(argv);
  if (args.help) {
    printHelp();
    return;
  }

  const payload = await collectSnapshot(args);
  const written = await writeSnapshot(payload, args);
  console.log(`Generated ${written.outPath}`);
  if (written.jsonPath) console.log(`Generated ${written.jsonPath}`);
  console.log(`Skills: ${payload.skills.length}`);
  console.log(`MCP servers: ${payload.mcpServers.length}`);
}

function parseArgs(argv) {
  const result = {
    skillRoot: [],
    config: [],
  };
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    const next = argv[index + 1];
    if (arg === "--help" || arg === "-h") {
      result.help = true;
    } else if (arg === "--out") {
      result.out = next;
      index += 1;
    } else if (arg === "--json") {
      if (next && !next.startsWith("--")) {
        result.json = next;
        index += 1;
      } else {
        result.json = true;
      }
    } else if (arg === "--codex-home") {
      result.codexHome = next;
      index += 1;
    } else if (arg === "--codex-config") {
      result.codexConfig = next;
      index += 1;
    } else if (arg === "--claude-home") {
      result.claudeHome = next;
      index += 1;
    } else if (arg === "--skill-root") {
      result.skillRoot.push(next);
      index += 1;
    } else if (arg === "--config") {
      result.config.push(next);
      index += 1;
    } else if (arg === "--include-plugin-cache-all") {
      result.includePluginCacheAll = true;
    } else {
      throw new Error(`Unknown argument: ${arg}`);
    }
  }
  return result;
}

function printHelp() {
  console.log(`SeeThrough Skill scanner

Usage:
  node scan-local.mjs
  node scan-local.mjs --json
  node scan-local.mjs --skill-root "D:\\skills" --config "D:\\config.toml"

Options:
  --out <path>          Write browser snapshot JS. Default: ./skills-data.js
  --json [path]         Also write plain JSON. Default path: ./skill-snapshot.json
  --codex-home <path>   Override Codex home. Default: CODEX_HOME or ~/.codex
  --codex-config <path> Override Codex config. Default: <codex-home>/config.toml
  --claude-home <path>  Override Claude home. Default: CLAUDE_HOME or ~/.claude
  --skill-root <path>   Add a Skill root. Can be repeated.
  --config <path>       Add an MCP config file. Can be repeated.
  --include-plugin-cache-all
                        Include every cached Codex plugin Skill, not only enabled plugins.
`);
}

function defaultSkillRoots({ codexHome, claudeHome, cwd, enabledCodexPlugins, includePluginCacheAll }) {
  const roots = [
    {
      label: "Codex system skills",
      path: path.join(codexHome, "skills", ".system"),
      ecosystem: "Codex",
      source: "codex-system",
      recursive: false,
    },
    {
      label: "Codex local skills",
      path: path.join(codexHome, "skills"),
      ecosystem: "Codex",
      source: "codex-local",
      recursive: false,
    },
    {
      label: "Codex plugin cache",
      path: path.join(codexHome, "plugins", "cache"),
      ecosystem: "Codex",
      source: "codex-plugin-cache",
      recursive: true,
      enabledPlugins: includePluginCacheAll ? null : enabledCodexPlugins,
    },
    {
      label: "Claude user skills",
      path: path.join(claudeHome, "skills"),
      ecosystem: "Claude",
      source: "claude-user",
      recursive: false,
    },
    {
      label: "Claude plugin skills",
      path: path.join(claudeHome, "plugins"),
      ecosystem: "Claude",
      source: "claude-plugin",
      recursive: true,
    },
    {
      label: "Project Claude skills",
      path: path.join(cwd, ".claude", "skills"),
      ecosystem: "Project",
      source: "project-claude",
      recursive: false,
    },
    {
      label: "Project Codex skills",
      path: path.join(cwd, ".codex", "skills"),
      ecosystem: "Project",
      source: "project-codex",
      recursive: false,
    },
  ];

  if (process.platform === "win32") {
    roots.push({
      label: "Windows Codex home skills",
      path: "E:\\codex-home\\skills",
      ecosystem: "Codex",
      source: "codex-home",
      recursive: false,
    });
  }

  return dedupePaths(roots);
}

function defaultConfigPaths({ codexHome, claudeHome, cwd, home, codexConfigPath }) {
  const paths = [
    {
      label: "Codex config.toml",
      path: codexConfigPath,
      ecosystem: "Codex",
      type: "toml",
    },
    {
      label: "Claude settings.json",
      path: path.join(claudeHome, "settings.json"),
      ecosystem: "Claude",
      type: "json",
    },
    {
      label: "Claude global state",
      path: path.join(home, ".claude.json"),
      ecosystem: "Claude",
      type: "json",
    },
    {
      label: "Project .mcp.json",
      path: path.join(cwd, ".mcp.json"),
      ecosystem: "Project",
      type: "json",
    },
  ];

  if (process.platform === "win32" && process.env.APPDATA) {
    paths.push({
      label: "Claude Desktop config",
      path: path.join(process.env.APPDATA, "Claude", "claude_desktop_config.json"),
      ecosystem: "Claude Desktop",
      type: "json",
    });
  } else if (process.platform === "darwin") {
    paths.push({
      label: "Claude Desktop config",
      path: path.join(home, "Library", "Application Support", "Claude", "claude_desktop_config.json"),
      ecosystem: "Claude Desktop",
      type: "json",
    });
  } else {
    paths.push({
      label: "Claude Desktop config",
      path: path.join(home, ".config", "Claude", "claude_desktop_config.json"),
      ecosystem: "Claude Desktop",
      type: "json",
    });
  }

  return dedupePaths(paths);
}

function dedupePaths(entries) {
  const seen = new Set();
  return entries.filter((entry) => {
    const key = path.resolve(entry.path).toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

async function scanSkills(roots) {
  const records = [];
  const seenFiles = new Set();
  for (const root of roots) {
    if (!(await exists(root.path))) continue;
    const files = await findSkillFiles(root.path, root.recursive !== false);
    for (const filePath of files) {
      if (root.source === "codex-plugin-cache" && Array.isArray(root.enabledPlugins) && !isEnabledCodexPluginSkill(filePath, root)) {
        continue;
      }
      const key = path.resolve(filePath).toLowerCase();
      if (seenFiles.has(key)) continue;
      seenFiles.add(key);
      const record = await readSkill(filePath, root);
      if (record) records.push(record);
    }
  }

  const byName = new Map();
  for (const record of records) {
    const nameKey = record.name.toLowerCase();
    if (!byName.has(nameKey)) byName.set(nameKey, []);
    byName.get(nameKey).push(record);
  }
  for (const record of records) {
    const duplicates = byName.get(record.name.toLowerCase()) || [];
    record.duplicateCount = duplicates.length;
    record.duplicatePaths = duplicates.map((item) => item.primaryPath);
  }
  return records.sort((a, b) => a.name.localeCompare(b.name));
}

async function readEnabledCodexPlugins(configPath) {
  if (!(await exists(configPath))) return [];
  const text = await fs.readFile(configPath, "utf8");
  const lines = text.split(/\r?\n/);
  const enabled = [];
  let currentPlugin = "";
  for (const line of lines) {
    const section = line.match(/^\s*\[plugins\."([^"]+)"\]\s*$/);
    if (section) {
      currentPlugin = section[1];
      continue;
    }
    if (currentPlugin && /^\s*enabled\s*=\s*true\s*$/.test(line)) {
      enabled.push(currentPlugin);
      currentPlugin = "";
      continue;
    }
    if (/^\s*\[/.test(line)) currentPlugin = "";
  }
  return Array.from(new Set(enabled)).sort();
}

function isEnabledCodexPluginSkill(filePath, root) {
  if (!root.enabledPlugins.length) return false;
  const parts = path.relative(root.path, filePath).split(path.sep).filter(Boolean).map((part) => part.toLowerCase());
  return root.enabledPlugins.some((pluginId) => {
    const [pluginName, provider] = pluginId.toLowerCase().split("@");
    if (provider && !(parts.includes(provider))) return false;
    return parts.includes(pluginName);
  });
}

async function findSkillFiles(rootPath, recursive) {
  const results = [];
  if (!recursive) {
    const directSkill = path.join(rootPath, "SKILL.md");
    if (await exists(directSkill)) results.push(directSkill);
    let entries = [];
    try {
      entries = await fs.readdir(rootPath, { withFileTypes: true });
    } catch {
      return results;
    }
    for (const entry of entries) {
      if (!entry.isDirectory()) continue;
      if (entry.name === ".system" || shouldSkipDirectory(entry.name)) continue;
      const skillPath = path.join(rootPath, entry.name, "SKILL.md");
      if (await exists(skillPath)) results.push(skillPath);
    }
    return results;
  }

  async function walk(directory, depth) {
    if (depth > 8) return;
    let entries = [];
    try {
      entries = await fs.readdir(directory, { withFileTypes: true });
    } catch {
      return;
    }
    for (const entry of entries) {
      const fullPath = path.join(directory, entry.name);
      if (entry.isDirectory()) {
        if (shouldSkipDirectory(entry.name)) continue;
        await walk(fullPath, depth + 1);
      } else if (entry.isFile() && entry.name.toLowerCase() === "skill.md") {
        results.push(fullPath);
      }
    }
  }
  await walk(rootPath, 0);
  return results;
}

async function readSkill(filePath, root) {
  try {
    const rawMarkdown = await fs.readFile(filePath, "utf8");
    const frontmatter = parseFrontmatter(rawMarkdown).data;
    const directory = path.dirname(filePath);
    const folderName = path.basename(directory);
    const name = frontmatter.name || folderName;
    const stat = await fs.stat(filePath);
    return {
      id: stableId(["skill", name, filePath]),
      name,
      displayName: frontmatter.name || folderName,
      folderName,
      ecosystem: root.ecosystem,
      source: classifySkillSource(filePath, root),
      plugin: inferPluginName(filePath, root),
      category: "",
      description: frontmatter.description || firstMarkdownHeading(rawMarkdown),
      frontmatter,
      rawMarkdown,
      primaryPath: filePath,
      directory,
      lineCount: countLines(rawMarkdown),
      sizeBytes: Buffer.byteLength(rawMarkdown, "utf8"),
      lastWriteTime: stat.mtime.toISOString(),
    };
  } catch (error) {
    return {
      id: stableId(["skill-error", filePath]),
      name: path.basename(path.dirname(filePath)),
      displayName: path.basename(path.dirname(filePath)),
      ecosystem: root.ecosystem,
      source: root.source,
      description: `读取失败：${error.message}`,
      rawMarkdown: "",
      primaryPath: filePath,
      directory: path.dirname(filePath),
      readError: error.message,
    };
  }
}

function classifySkillSource(filePath, root) {
  const normalized = filePath.toLowerCase();
  if (normalized.includes(`${path.sep}skills${path.sep}.system${path.sep}`.toLowerCase())) return "codex-system";
  if (root.source === "codex-plugin-cache") return "codex-plugin-cache";
  return root.source;
}

function inferPluginName(filePath, root) {
  if (root.source !== "codex-plugin-cache" && root.source !== "claude-plugin") return "";
  const relative = path.relative(root.path, filePath).split(path.sep).filter(Boolean);
  if (!relative.length) return "";
  if (relative[0].startsWith("openai-") && relative[1]) return relative[1];
  return relative[0];
}

async function scanMcpServers(configs) {
  const servers = [];
  for (const config of configs) {
    if (!(await exists(config.path))) continue;
    const text = await fs.readFile(config.path, "utf8");
    const parsed = config.type === "json"
      ? parseJsonMcpServers(text, config)
      : parseTomlMcpServers(text, config);
    servers.push(...parsed);
  }
  const seen = new Set();
  return servers.filter((server) => {
    const key = `${server.configPath}|${server.name}`.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  }).sort((a, b) => a.name.localeCompare(b.name));
}

function parseJsonMcpServers(text, config) {
  let data;
  try {
    data = JSON.parse(text);
  } catch {
    return [];
  }
  const servers = [];
  walkObject(data, (value, objectPath) => {
    if (!value || typeof value !== "object" || Array.isArray(value)) return;
    if (objectPath[objectPath.length - 1] !== "mcpServers") return;
    for (const [name, serverConfig] of Object.entries(value)) {
      if (!serverConfig || typeof serverConfig !== "object") continue;
      servers.push({
        id: stableId(["mcp", config.path, name]),
        name,
        ecosystem: config.ecosystem,
        configPath: config.path,
        configType: "json",
        enabled: serverConfig.enabled === false ? "false" : "true",
        enabledBool: serverConfig.enabled !== false,
        command: serverConfig.command || "",
        args: Array.isArray(serverConfig.args) ? serverConfig.args.join(" ") : serverConfig.args || "",
        url: serverConfig.url || "",
        transport: serverConfig.url ? "remote" : serverConfig.command ? "local" : serverConfig.transport || "unknown",
        rawConfig: redactText(JSON.stringify({ [name]: serverConfig }, null, 2)),
      });
    }
  });
  return servers;
}

function parseTomlMcpServers(text, config) {
  const lines = text.split(/\r?\n/);
  const servers = [];
  let current = null;
  let rawLines = [];

  function finish() {
    if (!current) return;
    current.rawConfig = redactText(rawLines.join("\n"));
    if (!current.transport) current.transport = current.url ? "remote" : current.command ? "local" : "unknown";
    servers.push(current);
  }

  for (const line of lines) {
    const section = line.match(/^\s*\[(?:mcp_servers|mcpServers)\.("?)([^\]"]+)\1\]\s*$/);
    if (section) {
      finish();
      const name = section[2];
      current = {
        id: stableId(["mcp", config.path, name]),
        name,
        ecosystem: config.ecosystem,
        configPath: config.path,
        configType: "toml",
        enabled: "true",
        enabledBool: true,
        command: "",
        args: "",
        url: "",
        transport: "",
      };
      rawLines = [line];
      continue;
    }

    if (/^\s*\[/.test(line)) {
      finish();
      current = null;
      rawLines = [];
      continue;
    }

    if (!current) continue;
    rawLines.push(line);
    const kv = line.match(/^\s*([A-Za-z0-9_-]+)\s*=\s*(.+?)\s*$/);
    if (!kv) continue;
    const key = kv[1];
    const value = cleanScalar(kv[2]);
    if (key === "enabled") {
      current.enabled = value;
      current.enabledBool = value !== "false";
    } else if (key === "command" || key === "url" || key === "transport") {
      current[key] = value;
    } else if (key === "args") {
      current.args = value;
    } else if (key === "bearer_token_env_var") {
      current.auth = `env:${value}`;
    } else if (key === "startup_timeout_sec") {
      current.startupTimeout = value;
    } else if (key === "tool_timeout_sec") {
      current.toolTimeout = value;
    }
  }
  finish();
  return servers;
}

async function readCodexGlobalSettings(configPath, mcpServers) {
  if (!(await exists(configPath))) {
    return { configPath, configFound: false };
  }
  const text = await fs.readFile(configPath, "utf8");
  const enabledMcpCount = mcpServers.filter((server) => server.enabledBool).length;
  const disabledMcpCount = mcpServers.length - enabledMcpCount;
  return {
    configPath,
    configFound: true,
    model: tomlScalar(text, "model"),
    reasoningEffort: tomlScalar(text, "model_reasoning_effort"),
    verbosity: tomlScalar(text, "model_verbosity"),
    approvalPolicy: tomlScalar(text, "approval_policy"),
    sandboxMode: tomlScalar(text, "sandbox_mode"),
    memoryEnabled: tomlScalar(text, "memories"),
    multiAgentEnabled: tomlScalar(text, "multi_agent"),
    trustedProjectCount: (text.match(/^\[projects\./gm) || []).length,
    enabledMcpCount,
    disabledMcpCount,
  };
}

function tomlScalar(text, key) {
  const pattern = new RegExp(`^\\s*${escapeRegex(key)}\\s*=\\s*(.+?)\\s*$`, "m");
  const match = text.match(pattern);
  return match ? cleanScalar(match[1]) : "";
}

function inferConfigType(filePath) {
  return filePath.toLowerCase().endsWith(".json") ? "json" : "toml";
}

function shouldSkipDirectory(name) {
  return /^(node_modules|\.git|dist|build|coverage|output|__pycache__)$/i.test(name)
    || /^skill-quarantine/i.test(name);
}

function parseFrontmatter(raw) {
  const result = { data: {}, body: raw || "" };
  if (!raw || !raw.startsWith("---")) return result;
  const end = raw.indexOf("\n---", 3);
  if (end < 0) return result;
  const block = raw.slice(3, end).trim();
  result.body = raw.slice(end + 4).replace(/^\r?\n/, "");

  let currentKey = "";
  for (const line of block.split(/\r?\n/)) {
    const match = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (match) {
      currentKey = match[1];
      const value = match[2].trim();
      result.data[currentKey] = value === "|" || value === ">" ? "" : stripQuotes(value);
      continue;
    }
    if (currentKey && /^\s+/.test(line)) {
      result.data[currentKey] = `${result.data[currentKey]} ${line.trim()}`.trim();
    }
  }
  return result;
}

function firstMarkdownHeading(raw) {
  const match = String(raw || "").match(/^\s{0,3}#\s+(.+)$/m);
  return match ? match[1].trim() : "";
}

function countLines(text) {
  if (!text) return 0;
  return String(text).split(/\r?\n/).length;
}

function cleanScalar(value) {
  return stripQuotes(String(value || "").trim());
}

function stripQuotes(value) {
  return String(value || "").replace(/^["']|["']$/g, "");
}

function redactText(text) {
  return String(text || "")
    .replace(/(access[_-]?token\s*[:=]\s*["']?)[^"'\s,}]+/gi, "$1***")
    .replace(/(api[_-]?key\s*[:=]\s*["']?)[^"'\s,}]+/gi, "$1***")
    .replace(/(secret\s*[:=]\s*["']?)[^"'\s,}]+/gi, "$1***")
    .replace(/(bearer\s+)[A-Za-z0-9._~+/=-]{12,}/gi, "$1***");
}

function walkObject(value, visitor, objectPath = []) {
  visitor(value, objectPath);
  if (!value || typeof value !== "object") return;
  for (const [key, child] of Object.entries(value)) {
    walkObject(child, visitor, [...objectPath, key]);
  }
}

async function exists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

function stableId(parts) {
  return parts
    .filter((part) => part !== undefined && part !== null)
    .join("|")
    .toLowerCase()
    .replace(/[^a-z0-9\u4e00-\u9fa5_-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 180) || "item";
}

function escapeRegex(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}
