#!/usr/bin/env node
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectDir = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const outputPath = path.join(projectDir, "docs", "annotated-code.md");
const sourceFiles = [
  "index.html",
  "styles.css",
  "app.js",
  "scan-local.mjs",
  "serve-local.mjs",
  "scan-skills.ps1",
  "start-local.ps1",
  "start-local.bat",
  "package.json",
];

await fs.mkdir(path.dirname(outputPath), { recursive: true });

const sections = [];
sections.push("# SeeThrough Skill 逐行代码讲解");
sections.push("");
sections.push("这份文档由 `npm run explain` 生成。它把运行源码保持干净，同时给每一行源码配一条中文说明，方便新读者逐行理解项目。");
sections.push("");

for (const relativePath of sourceFiles) {
  const absolutePath = path.join(projectDir, relativePath);
  const content = await fs.readFile(absolutePath, "utf8");
  const lines = content.split(/\r?\n/);
  const language = languageFor(relativePath);

  sections.push(`## ${relativePath}`);
  sections.push("");
  sections.push(`| 行 | 代码 | 说明 |`);
  sections.push(`| ---: | --- | --- |`);

  lines.forEach((line, index) => {
    sections.push(`| ${index + 1} | \`${escapeTableCode(line)}\` | ${escapeTableText(explainLine(relativePath, line, index + 1, language))} |`);
  });

  sections.push("");
}

await fs.writeFile(outputPath, `${sections.join("\n")}\n`, "utf8");
console.log(`Generated ${outputPath}`);

function languageFor(filePath) {
  const extension = path.extname(filePath).toLowerCase();
  if (extension === ".html") return "html";
  if (extension === ".css") return "css";
  if (extension === ".js" || extension === ".mjs") return "js";
  if (extension === ".ps1") return "powershell";
  if (extension === ".bat") return "batch";
  if (extension === ".json") return "json";
  return "text";
}

function explainLine(filePath, rawLine, lineNumber, language) {
  const line = rawLine.trim();
  if (!line) return "空行，用来分隔代码块，让结构更清楚。";

  if (language === "html") return explainHtml(line);
  if (language === "css") return explainCss(line);
  if (language === "js") return explainJavaScript(line, filePath);
  if (language === "powershell") return explainPowerShell(line);
  if (language === "batch") return explainBatch(line);
  if (language === "json") return explainJson(line);

  return `保留第 ${lineNumber} 行文本内容。`;
}

function explainHtml(line) {
  if (line.startsWith("<!doctype")) return "声明这是 HTML5 文档。";
  if (line.startsWith("<html")) return "打开 HTML 根节点，并设置页面语言。";
  if (line.startsWith("</html")) return "关闭 HTML 根节点。";
  if (line.startsWith("<head")) return "打开页面元信息区域。";
  if (line.startsWith("</head")) return "关闭页面元信息区域。";
  if (line.startsWith("<meta charset")) return "设置文档字符编码为 UTF-8。";
  if (line.startsWith("<meta name=\"viewport\"")) return "设置移动端视口，保证响应式布局按设备宽度渲染。";
  if (line.startsWith("<title")) return "设置浏览器标签页标题。";
  if (line.startsWith("<link")) return "加载外部样式表。";
  if (line.startsWith("<body")) return "打开页面主体内容。";
  if (line.startsWith("</body")) return "关闭页面主体内容。";
  if (line.startsWith("<script")) return "加载页面运行所需的 JavaScript 文件。";
  if (line.startsWith("</script")) return "关闭脚本标签。";
  if (line.startsWith("<header")) return "打开顶部标题和操作区。";
  if (line.startsWith("</header")) return "关闭顶部区域。";
  if (line.startsWith("<section")) return "打开一个语义化页面区域。";
  if (line.startsWith("</section")) return "关闭当前页面区域。";
  if (line.startsWith("<main")) return "打开页面主工作区。";
  if (line.startsWith("</main")) return "关闭页面主工作区。";
  if (line.startsWith("<aside")) return "打开侧边栏或详情栏。";
  if (line.startsWith("</aside")) return "关闭侧边栏或详情栏。";
  if (line.startsWith("<nav")) return "打开导航控件区域。";
  if (line.startsWith("</nav")) return "关闭导航控件区域。";
  if (line.startsWith("<button")) return "定义一个可点击按钮。";
  if (line.startsWith("<input")) return "定义文件选择或搜索输入控件。";
  if (line.startsWith("<select")) return "定义下拉选择控件。";
  if (line.startsWith("<option")) return "定义下拉选择中的一个选项。";
  if (line.startsWith("<div")) return "打开一个布局容器。";
  if (line.startsWith("</div")) return "关闭布局容器。";
  if (line.startsWith("<p")) return "定义一段说明文字。";
  if (line.startsWith("<h1")) return "定义页面一级标题。";
  if (line.startsWith("<h2")) return "定义区域标题。";
  if (line.startsWith("<h3")) return "定义详情区小标题。";
  if (line.startsWith("<dl")) return "打开键值型详情列表。";
  if (line.startsWith("</dl")) return "关闭键值型详情列表。";
  if (line.startsWith("<dt")) return "定义详情项名称。";
  if (line.startsWith("<dd")) return "定义详情项内容。";
  if (line.startsWith("<pre")) return "定义保留换行和空格的原文显示区域。";
  if (line.startsWith("</pre")) return "关闭原文显示区域。";
  if (line.startsWith("</")) return "关闭前面打开的 HTML 标签。";
  return "定义页面结构或可见文本。";
}

function explainCss(line) {
  if (line === "}") return "结束当前 CSS 规则块。";
  if (line.endsWith("{")) return "打开一个 CSS 选择器规则块。";
  if (line.startsWith("--")) return "定义 CSS 自定义变量，供后续样式复用。";
  if (line.startsWith("@media")) return "定义响应式断点规则。";
  if (line.startsWith("*")) return "匹配所有元素并设置全局基础样式。";
  if (line.includes(":")) {
    const property = line.split(":")[0].trim();
    const descriptions = {
      display: "设置元素的布局显示方式。",
      grid: "设置网格布局相关规则。",
      "grid-template-columns": "定义 CSS 网格的列结构。",
      gap: "设置网格或弹性布局子项间距。",
      margin: "设置元素外边距。",
      padding: "设置元素内边距。",
      border: "设置边框。",
      "border-radius": "设置圆角半径。",
      background: "设置背景。",
      color: "设置文字颜色。",
      "font-family": "设置字体栈。",
      "font-size": "设置字号。",
      "font-weight": "设置字重。",
      "line-height": "设置行高。",
      width: "设置宽度。",
      height: "设置高度。",
      "min-height": "设置最小高度。",
      "max-height": "设置最大高度。",
      overflow: "设置内容溢出时的处理方式。",
      position: "设置定位方式。",
      top: "设置定位元素距离顶部的位置。",
      "box-shadow": "设置阴影。",
      "white-space": "设置空白和换行保留方式。",
      "overflow-wrap": "设置长文本换行策略。",
      cursor: "设置鼠标悬停指针样式。",
      outline: "设置键盘聚焦轮廓。",
    };
    return descriptions[property] || `设置 CSS 属性 \`${property}\`。`;
  }
  return "声明 CSS 选择器或样式片段。";
}

function explainJavaScript(line, filePath) {
  if (line.startsWith("#!")) return "声明脚本可以被命令行直接执行。";
  if (line.startsWith("import ")) return "从 Node.js 内置模块或其他模块导入功能。";
  if (line.startsWith("const ")) return "声明一个不会被重新赋值的常量。";
  if (line.startsWith("let ")) return "声明一个后续可能变化的变量。";
  if (line.startsWith("var ")) return "声明一个函数作用域变量。";
  if (line.startsWith("function ")) return "定义一个可复用函数。";
  if (line.startsWith("async function ")) return "定义一个可使用 await 的异步函数。";
  if (line.startsWith("if ")) return "根据条件决定是否执行后续代码。";
  if (line.startsWith("} else if")) return "在前一个条件不成立时检查另一个条件。";
  if (line.startsWith("} else")) return "处理前面条件都不成立的情况。";
  if (line.startsWith("for ")) return "开始循环处理一组数据。";
  if (line.startsWith("while ")) return "在条件成立时持续循环。";
  if (line.startsWith("try")) return "开始捕获可能失败的代码块。";
  if (line.startsWith("catch")) return "处理 try 代码块中抛出的错误。";
  if (line.startsWith("return ")) return "返回当前函数的结果。";
  if (line.startsWith("await ")) return "等待异步操作完成后再继续。";
  if (line.startsWith("throw ")) return "主动抛出错误，中断当前流程。";
  if (line.startsWith("console.log")) return "向命令行输出普通运行信息。";
  if (line.startsWith("console.error")) return "向命令行输出错误信息。";
  if (line.includes("addEventListener")) return "绑定浏览器事件处理逻辑。";
  if (line.includes("document.getElementById")) return "按 id 获取页面元素并操作它。";
  if (line.includes("querySelector")) return "用 CSS 选择器查找页面元素。";
  if (line.includes("JSON.parse")) return "把 JSON 字符串解析成 JavaScript 对象。";
  if (line.includes("JSON.stringify")) return "把 JavaScript 对象转换成 JSON 字符串。";
  if (line.includes("fs.")) return "执行文件系统读写或检查操作。";
  if (line.includes("path.")) return "处理跨平台文件路径。";
  if (line.includes("spawn(")) return "启动一个子进程执行外部命令。";
  if (line.includes("http.createServer")) return "创建本地 HTTP 静态文件服务器。";
  if (line.includes("replace(") || line.includes("replaceAll(")) return "对字符串内容做替换处理。";
  if (line.includes("match(")) return "用正则表达式匹配文本。";
  if (line.includes("map(")) return "把数组中的每一项转换成新结果。";
  if (line.includes("filter(")) return "从数组中过滤出符合条件的项目。";
  if (line.includes("sort(")) return "对数组项目排序。";
  if (line.includes("push(")) return "向数组追加一项内容。";
  if (line === "}" || line === "};" || line === "});" || line === "];") return "结束当前代码块或数据结构。";
  if (line.startsWith("//")) return "普通源码注释。";
  return `执行 ${path.basename(filePath)} 中的这一行逻辑。`;
}

function explainPowerShell(line) {
  if (line.startsWith("$ErrorActionPreference")) return "设置 PowerShell 遇到错误时立即停止执行。";
  if (line.startsWith("Set-Location")) return "把当前工作目录切换到脚本所在目录。";
  if (line.startsWith("$")) return "声明或更新 PowerShell 变量。";
  if (line.startsWith("if ")) return "根据条件决定是否执行后续 PowerShell 代码。";
  if (line.startsWith("Write-Host")) return "向终端输出提示文本。";
  if (line.startsWith("& ")) return "调用外部命令或脚本。";
  if (line.startsWith("exit")) return "以指定退出码结束脚本。";
  if (line === "}") return "结束当前 PowerShell 代码块。";
  return "执行这一行 PowerShell 脚本。";
}

function explainBatch(line) {
  const lower = line.toLowerCase();
  if (lower.startsWith("@echo off")) return "关闭批处理命令回显，让输出更干净。";
  if (lower.startsWith("setlocal")) return "启用局部环境变量作用域。";
  if (lower.startsWith("cd /d")) return "切换到批处理文件所在目录。";
  if (lower.startsWith("where node")) return "检查系统 PATH 中是否能找到 Node.js。";
  if (lower.startsWith("if errorlevel")) return "在上一条命令失败时执行错误处理。";
  if (lower.startsWith("echo")) return "向命令行输出提示文本。";
  if (lower.startsWith("pause")) return "暂停窗口，方便用户阅读错误信息。";
  if (lower.startsWith("node ")) return "使用 Node.js 启动本地服务脚本。";
  if (lower.startsWith("set ")) return "设置批处理变量。";
  if (lower.startsWith("exit")) return "以指定退出码结束批处理。";
  if (line === ")") return "结束批处理条件代码块。";
  return "执行这一行 Windows 批处理命令。";
}

function explainJson(line) {
  if (line === "{" || line === "}") return "开始或结束 JSON 对象。";
  if (line === "}," || line === "},") return "结束当前 JSON 对象并继续下一个字段。";
  if (line.startsWith("\"scripts\"")) return "声明 npm 脚本集合。";
  if (line.includes(":")) {
    const key = line.split(":")[0].replace(/[",]/g, "").trim();
    return `设置 package.json 字段 \`${key}\`。`;
  }
  return "定义 package.json 的结构内容。";
}

function escapeTableCode(value) {
  if (!value) return " ";
  return value
    .replaceAll("\\", "\\\\")
    .replaceAll("`", "\\`")
    .replaceAll("|", "\\|");
}

function escapeTableText(value) {
  return String(value || "")
    .replaceAll("|", "\\|")
    .replace(/\s+/g, " ")
    .trim();
}
