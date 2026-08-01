# SeeThrough Skill 逐行代码讲解

这份文档由 `npm run explain` 生成。它把运行源码保持干净，同时给每一行源码配一条中文说明，方便新读者逐行理解项目。

## index.html

| 行 | 代码 | 说明 |
| ---: | --- | --- |
| 1 | `<!doctype html>` | 声明这是 HTML5 文档。 |
| 2 | `<html lang="zh-CN">` | 打开 HTML 根节点，并设置页面语言。 |
| 3 | `<head>` | 打开页面元信息区域。 |
| 4 | `  <meta charset="utf-8" />` | 设置文档字符编码为 UTF-8。 |
| 5 | `  <meta name="viewport" content="width=device-width, initial-scale=1" />` | 设置移动端视口，保证响应式布局按设备宽度渲染。 |
| 6 | `  <title>SeeThrough Skill</title>` | 设置浏览器标签页标题。 |
| 7 | `  <link rel="stylesheet" href="./styles.css" />` | 加载外部样式表。 |
| 8 | `</head>` | 关闭页面元信息区域。 |
| 9 | `<body>` | 打开页面主体内容。 |
| 10 | `  <div class="app-shell">` | 打开一个布局容器。 |
| 11 | `    <header class="topbar">` | 打开页面元信息区域。 |
| 12 | `      <div class="brand-block">` | 打开一个布局容器。 |
| 13 | `        <p class="eyebrow">Skill / MCP Inspector</p>` | 定义一段说明文字。 |
| 14 | `        <h1>SeeThrough Skill</h1>` | 定义页面一级标题。 |
| 15 | `        <p class="subtitle">把 Codex、Claude 的 Skill 原文和 MCP 配置摊开看清楚。</p>` | 定义一段说明文字。 |
| 16 | `      </div>` | 关闭布局容器。 |
| 17 | `      <div class="top-actions">` | 打开一个布局容器。 |
| 18 | `        <select id="languageSelect" aria-label="Interface language">` | 定义下拉选择控件。 |
| 19 | `          <option value="zh-CN">简体中文</option>` | 定义下拉选择中的一个选项。 |
| 20 | `          <option value="en">English</option>` | 定义下拉选择中的一个选项。 |
| 21 | `          <option value="ja">日本語</option>` | 定义下拉选择中的一个选项。 |
| 22 | `          <option value="ko">한국어</option>` | 定义下拉选择中的一个选项。 |
| 23 | `          <option value="fr">Français</option>` | 定义下拉选择中的一个选项。 |
| 24 | `          <option value="de">Deutsch</option>` | 定义下拉选择中的一个选项。 |
| 25 | `          <option value="es">Español</option>` | 定义下拉选择中的一个选项。 |
| 26 | `          <option value="pt">Português</option>` | 定义下拉选择中的一个选项。 |
| 27 | `          <option value="ru">Русский</option>` | 定义下拉选择中的一个选项。 |
| 28 | `          <option value="ar">العربية</option>` | 定义下拉选择中的一个选项。 |
| 29 | `        </select>` | 关闭前面打开的 HTML 标签。 |
| 30 | `        <button class="secondary" id="chooseDirectoryBtn" type="button">选择 Skill 目录</button>` | 定义一个可点击按钮。 |
| 31 | `        <button class="secondary" id="loadConfigBtn" type="button">选择 MCP 配置</button>` | 定义一个可点击按钮。 |
| 32 | `        <button class="secondary" id="loadSnapshotBtn" type="button">导入快照</button>` | 定义一个可点击按钮。 |
| 33 | `        <button class="secondary" id="exportBtn" type="button">导出 JSON</button>` | 定义一个可点击按钮。 |
| 34 | `      </div>` | 关闭布局容器。 |
| 35 | `      <input id="snapshotInput" type="file" accept=".json,.js,application/json,text/javascript" hidden />` | 定义文件选择或搜索输入控件。 |
| 36 | `      <input id="configInput" type="file" accept=".json,.toml,.mcp,.txt,application/json,text/plain" hidden />` | 定义文件选择或搜索输入控件。 |
| 37 | `    </header>` | 关闭页面元信息区域。 |
| 38 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 39 | `    <section class="source-panel" aria-label="数据来源">` | 打开一个语义化页面区域。 |
| 40 | `      <div>` | 打开一个布局容器。 |
| 41 | `        <p class="eyebrow">Local Snapshot</p>` | 定义一段说明文字。 |
| 42 | `        <h2 id="snapshotTitle">正在读取本机快照</h2>` | 定义区域标题。 |
| 43 | `        <p id="snapshotMeta">浏览器不能自动穿透读取任意本机目录；推荐运行扫描器生成快照，或手动选择目录/配置文件。</p>` | 定义一段说明文字。 |
| 44 | `      </div>` | 关闭布局容器。 |
| 45 | `      <div class="path-presets" id="presetPaths"></div>` | 打开一个布局容器。 |
| 46 | `    </section>` | 关闭当前页面区域。 |
| 47 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 48 | `    <section class="summary" aria-label="统计">` | 打开一个语义化页面区域。 |
| 49 | `      <div class="metric">` | 打开一个布局容器。 |
| 50 | `        <span>Skill</span>` | 定义页面结构或可见文本。 |
| 51 | `        <strong id="skillCount">0</strong>` | 定义页面结构或可见文本。 |
| 52 | `      </div>` | 关闭布局容器。 |
| 53 | `      <div class="metric">` | 打开一个布局容器。 |
| 54 | `        <span>MCP</span>` | 定义页面结构或可见文本。 |
| 55 | `        <strong id="mcpCount">0</strong>` | 定义页面结构或可见文本。 |
| 56 | `      </div>` | 关闭布局容器。 |
| 57 | `      <div class="metric">` | 打开一个布局容器。 |
| 58 | `        <span>包含原文</span>` | 定义页面结构或可见文本。 |
| 59 | `        <strong id="rawCount">0</strong>` | 定义页面结构或可见文本。 |
| 60 | `      </div>` | 关闭布局容器。 |
| 61 | `      <div class="metric">` | 打开一个布局容器。 |
| 62 | `        <span>启用 MCP</span>` | 定义页面结构或可见文本。 |
| 63 | `        <strong id="enabledMcpCount">0</strong>` | 定义页面结构或可见文本。 |
| 64 | `      </div>` | 关闭布局容器。 |
| 65 | `    </section>` | 关闭当前页面区域。 |
| 66 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 67 | `    <main class="workspace">` | 打开页面主工作区。 |
| 68 | `      <aside class="filters" aria-label="筛选">` | 打开侧边栏或详情栏。 |
| 69 | `        <nav class="view-tabs" aria-label="视图切换">` | 打开导航控件区域。 |
| 70 | `          <button class="active" id="skillsTab" data-view="skills" type="button">Skill</button>` | 定义一个可点击按钮。 |
| 71 | `          <button id="mcpTab" data-view="mcp" type="button">MCP</button>` | 定义一个可点击按钮。 |
| 72 | `        </nav>` | 关闭导航控件区域。 |
| 73 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 74 | `        <label class="search-label" for="searchInput">搜索</label>` | 定义页面结构或可见文本。 |
| 75 | `        <input id="searchInput" type="search" placeholder="名称、路径、描述、原文关键词" />` | 定义文件选择或搜索输入控件。 |
| 76 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 77 | `        <div class="filter-block">` | 打开一个布局容器。 |
| 78 | `          <h2>分类</h2>` | 定义区域标题。 |
| 79 | `          <div id="categoryFilters" class="filter-list"></div>` | 打开一个布局容器。 |
| 80 | `        </div>` | 关闭布局容器。 |
| 81 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 82 | `        <div class="filter-block">` | 打开一个布局容器。 |
| 83 | `          <h2>来源</h2>` | 定义区域标题。 |
| 84 | `          <div id="sourceFilters" class="filter-list"></div>` | 打开一个布局容器。 |
| 85 | `        </div>` | 关闭布局容器。 |
| 86 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 87 | `        <div class="filter-block">` | 打开一个布局容器。 |
| 88 | `          <h2>排序</h2>` | 定义区域标题。 |
| 89 | `          <select id="sortSelect" aria-label="排序">` | 定义下拉选择控件。 |
| 90 | `            <option value="name">按名称</option>` | 定义下拉选择中的一个选项。 |
| 91 | `            <option value="category">按分类</option>` | 定义下拉选择中的一个选项。 |
| 92 | `            <option value="source">按来源</option>` | 定义下拉选择中的一个选项。 |
| 93 | `            <option value="size">按原文大小</option>` | 定义下拉选择中的一个选项。 |
| 94 | `          </select>` | 关闭前面打开的 HTML 标签。 |
| 95 | `        </div>` | 关闭布局容器。 |
| 96 | `      </aside>` | 关闭侧边栏或详情栏。 |
| 97 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 98 | `      <section class="item-list" aria-label="条目列表">` | 打开一个语义化页面区域。 |
| 99 | `        <div class="list-head">` | 打开一个布局容器。 |
| 100 | `          <div>` | 打开一个布局容器。 |
| 101 | `            <h2 id="listTitle">Skill 清单</h2>` | 定义区域标题。 |
| 102 | `            <p id="resultText">正在载入</p>` | 定义一段说明文字。 |
| 103 | `          </div>` | 关闭布局容器。 |
| 104 | `        </div>` | 关闭布局容器。 |
| 105 | `        <div id="itemRows" class="rows"></div>` | 打开一个布局容器。 |
| 106 | `      </section>` | 关闭当前页面区域。 |
| 107 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 108 | `      <aside class="inspector" aria-label="详情">` | 打开侧边栏或详情栏。 |
| 109 | `        <div class="detail-head">` | 打开一个布局容器。 |
| 110 | `          <p class="eyebrow" id="detailEyebrow">Selected Skill</p>` | 定义一段说明文字。 |
| 111 | `          <h2 id="detailName">选择一个条目</h2>` | 定义区域标题。 |
| 112 | `          <p id="detailDescription" class="detail-description">点击左侧条目查看它的原始内容。</p>` | 定义一段说明文字。 |
| 113 | `        </div>` | 关闭布局容器。 |
| 114 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 115 | `        <dl class="detail-grid">` | 打开键值型详情列表。 |
| 116 | `          <dt>本质</dt>` | 定义详情项名称。 |
| 117 | `          <dd id="detailEssence">-</dd>` | 定义详情项内容。 |
| 118 | `          <dt>分类</dt>` | 定义详情项名称。 |
| 119 | `          <dd id="detailCategory">-</dd>` | 定义详情项内容。 |
| 120 | `          <dt>来源</dt>` | 定义详情项名称。 |
| 121 | `          <dd id="detailSource">-</dd>` | 定义详情项内容。 |
| 122 | `          <dt>路径</dt>` | 定义详情项名称。 |
| 123 | `          <dd><code id="detailPath">-</code></dd>` | 定义详情项内容。 |
| 124 | `        </dl>` | 关闭键值型详情列表。 |
| 125 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 126 | `        <section class="detail-section" id="frontmatterSection">` | 打开一个语义化页面区域。 |
| 127 | `          <h3>frontmatter / 元信息</h3>` | 定义详情区小标题。 |
| 128 | `          <pre class="compact-code" id="frontmatterViewer">-</pre>` | 定义一段说明文字。 |
| 129 | `        </section>` | 关闭当前页面区域。 |
| 130 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 131 | `        <section class="detail-section raw-section">` | 打开一个语义化页面区域。 |
| 132 | `          <div class="raw-head">` | 打开一个布局容器。 |
| 133 | `            <h3 id="rawTitle">SKILL.md 原文</h3>` | 定义详情区小标题。 |
| 134 | `            <div class="raw-actions">` | 打开一个布局容器。 |
| 135 | `              <button class="secondary small-button active" id="rawOriginalBtn" type="button">原文</button>` | 定义一个可点击按钮。 |
| 136 | `              <button class="secondary small-button" id="rawTranslatedBtn" type="button">译文</button>` | 定义一个可点击按钮。 |
| 137 | `              <button class="secondary small-button" id="copyRawBtn" type="button">复制原文</button>` | 定义一个可点击按钮。 |
| 138 | `            </div>` | 关闭布局容器。 |
| 139 | `          </div>` | 关闭布局容器。 |
| 140 | `          <p class="translation-status" id="translationStatus">译文会保留 Markdown 结构，并优先翻译常见 Skill 指令词。</p>` | 定义一段说明文字。 |
| 141 | `          <pre class="raw-viewer" id="rawViewer">选择一个 Skill 后，这里会直接显示 SKILL.md 内容。</pre>` | 定义一段说明文字。 |
| 142 | `        </section>` | 关闭当前页面区域。 |
| 143 | `      </aside>` | 关闭侧边栏或详情栏。 |
| 144 | `    </main>` | 关闭页面主工作区。 |
| 145 | `  </div>` | 关闭布局容器。 |
| 146 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 147 | `  <script src="./app.js"></script>` | 加载页面运行所需的 JavaScript 文件。 |
| 148 | `</body>` | 关闭页面主体内容。 |
| 149 | `</html>` | 关闭 HTML 根节点。 |
| 150 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |

## styles.css

| 行 | 代码 | 说明 |
| ---: | --- | --- |
| 1 | `:root {` | 打开一个 CSS 选择器规则块。 |
| 2 | `  color-scheme: light;` | 设置 CSS 属性 `color-scheme`。 |
| 3 | `  --bg: #f4f5f1;` | 定义 CSS 自定义变量，供后续样式复用。 |
| 4 | `  --panel: #ffffff;` | 定义 CSS 自定义变量，供后续样式复用。 |
| 5 | `  --panel-soft: #f9faf7;` | 定义 CSS 自定义变量，供后续样式复用。 |
| 6 | `  --ink: #20231f;` | 定义 CSS 自定义变量，供后续样式复用。 |
| 7 | `  --muted: #687064;` | 定义 CSS 自定义变量，供后续样式复用。 |
| 8 | `  --line: #d8ddd1;` | 定义 CSS 自定义变量，供后续样式复用。 |
| 9 | `  --strong-line: #aeb8a7;` | 定义 CSS 自定义变量，供后续样式复用。 |
| 10 | `  --accent: #285f47;` | 定义 CSS 自定义变量，供后续样式复用。 |
| 11 | `  --accent-weak: #e2eee7;` | 定义 CSS 自定义变量，供后续样式复用。 |
| 12 | `  --blue: #2d5f83;` | 定义 CSS 自定义变量，供后续样式复用。 |
| 13 | `  --blue-weak: #e0ecf3;` | 定义 CSS 自定义变量，供后续样式复用。 |
| 14 | `  --amber: #7d5a18;` | 定义 CSS 自定义变量，供后续样式复用。 |
| 15 | `  --amber-weak: #f3ead9;` | 定义 CSS 自定义变量，供后续样式复用。 |
| 16 | `  --red: #963738;` | 定义 CSS 自定义变量，供后续样式复用。 |
| 17 | `  --red-weak: #f2dddd;` | 定义 CSS 自定义变量，供后续样式复用。 |
| 18 | `  --code: #101411;` | 定义 CSS 自定义变量，供后续样式复用。 |
| 19 | `  --shadow: 0 18px 38px rgba(32, 35, 31, 0.07);` | 定义 CSS 自定义变量，供后续样式复用。 |
| 20 | `}` | 结束当前 CSS 规则块。 |
| 21 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 22 | `* {` | 打开一个 CSS 选择器规则块。 |
| 23 | `  box-sizing: border-box;` | 设置 CSS 属性 `box-sizing`。 |
| 24 | `}` | 结束当前 CSS 规则块。 |
| 25 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 26 | `body {` | 打开一个 CSS 选择器规则块。 |
| 27 | `  margin: 0;` | 设置元素外边距。 |
| 28 | `  background: var(--bg);` | 设置背景。 |
| 29 | `  color: var(--ink);` | 设置文字颜色。 |
| 30 | `  font-family: "Segoe UI", "Microsoft YaHei", Arial, sans-serif;` | 设置字体栈。 |
| 31 | `  line-height: 1.45;` | 设置行高。 |
| 32 | `}` | 结束当前 CSS 规则块。 |
| 33 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 34 | `button,` | 声明 CSS 选择器或样式片段。 |
| 35 | `input,` | 声明 CSS 选择器或样式片段。 |
| 36 | `select {` | 打开一个 CSS 选择器规则块。 |
| 37 | `  font: inherit;` | 设置 CSS 属性 `font`。 |
| 38 | `}` | 结束当前 CSS 规则块。 |
| 39 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 40 | `button {` | 打开一个 CSS 选择器规则块。 |
| 41 | `  cursor: pointer;` | 设置鼠标悬停指针样式。 |
| 42 | `}` | 结束当前 CSS 规则块。 |
| 43 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 44 | `button:focus-visible,` | 设置 CSS 属性 `button`。 |
| 45 | `input:focus-visible,` | 设置 CSS 属性 `input`。 |
| 46 | `select:focus-visible {` | 打开一个 CSS 选择器规则块。 |
| 47 | `  outline: 2px solid var(--accent);` | 设置键盘聚焦轮廓。 |
| 48 | `  outline-offset: 2px;` | 设置 CSS 属性 `outline-offset`。 |
| 49 | `}` | 结束当前 CSS 规则块。 |
| 50 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 51 | `.app-shell {` | 打开一个 CSS 选择器规则块。 |
| 52 | `  min-height: 100vh;` | 设置最小高度。 |
| 53 | `  padding: 18px;` | 设置元素内边距。 |
| 54 | `}` | 结束当前 CSS 规则块。 |
| 55 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 56 | `.topbar,` | 声明 CSS 选择器或样式片段。 |
| 57 | `.source-panel,` | 声明 CSS 选择器或样式片段。 |
| 58 | `.summary,` | 声明 CSS 选择器或样式片段。 |
| 59 | `.workspace {` | 打开一个 CSS 选择器规则块。 |
| 60 | `  max-width: 1760px;` | 设置 CSS 属性 `max-width`。 |
| 61 | `  margin: 0 auto;` | 设置元素外边距。 |
| 62 | `}` | 结束当前 CSS 规则块。 |
| 63 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 64 | `.topbar {` | 打开一个 CSS 选择器规则块。 |
| 65 | `  display: grid;` | 设置元素的布局显示方式。 |
| 66 | `  grid-template-columns: minmax(260px, 1fr) auto;` | 定义 CSS 网格的列结构。 |
| 67 | `  gap: 16px;` | 设置网格或弹性布局子项间距。 |
| 68 | `  align-items: end;` | 设置 CSS 属性 `align-items`。 |
| 69 | `  padding-bottom: 14px;` | 设置 CSS 属性 `padding-bottom`。 |
| 70 | `}` | 结束当前 CSS 规则块。 |
| 71 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 72 | `.brand-block {` | 打开一个 CSS 选择器规则块。 |
| 73 | `  min-width: 0;` | 设置 CSS 属性 `min-width`。 |
| 74 | `}` | 结束当前 CSS 规则块。 |
| 75 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 76 | `.eyebrow {` | 打开一个 CSS 选择器规则块。 |
| 77 | `  margin: 0 0 5px;` | 设置元素外边距。 |
| 78 | `  color: var(--accent);` | 设置文字颜色。 |
| 79 | `  font-size: 12px;` | 设置字号。 |
| 80 | `  font-weight: 800;` | 设置字重。 |
| 81 | `  letter-spacing: 0;` | 设置 CSS 属性 `letter-spacing`。 |
| 82 | `  text-transform: uppercase;` | 设置 CSS 属性 `text-transform`。 |
| 83 | `}` | 结束当前 CSS 规则块。 |
| 84 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 85 | `h1,` | 声明 CSS 选择器或样式片段。 |
| 86 | `h2,` | 声明 CSS 选择器或样式片段。 |
| 87 | `h3,` | 声明 CSS 选择器或样式片段。 |
| 88 | `p {` | 打开一个 CSS 选择器规则块。 |
| 89 | `  margin-top: 0;` | 设置 CSS 属性 `margin-top`。 |
| 90 | `}` | 结束当前 CSS 规则块。 |
| 91 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 92 | `h1 {` | 打开一个 CSS 选择器规则块。 |
| 93 | `  margin-bottom: 4px;` | 设置 CSS 属性 `margin-bottom`。 |
| 94 | `  font-size: clamp(28px, 4vw, 46px);` | 设置字号。 |
| 95 | `  line-height: 1.05;` | 设置行高。 |
| 96 | `  letter-spacing: 0;` | 设置 CSS 属性 `letter-spacing`。 |
| 97 | `}` | 结束当前 CSS 规则块。 |
| 98 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 99 | `h2 {` | 打开一个 CSS 选择器规则块。 |
| 100 | `  margin-bottom: 8px;` | 设置 CSS 属性 `margin-bottom`。 |
| 101 | `  font-size: 17px;` | 设置字号。 |
| 102 | `}` | 结束当前 CSS 规则块。 |
| 103 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 104 | `h3 {` | 打开一个 CSS 选择器规则块。 |
| 105 | `  margin-bottom: 8px;` | 设置 CSS 属性 `margin-bottom`。 |
| 106 | `  font-size: 14px;` | 设置字号。 |
| 107 | `}` | 结束当前 CSS 规则块。 |
| 108 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 109 | `.subtitle,` | 声明 CSS 选择器或样式片段。 |
| 110 | `.detail-description,` | 声明 CSS 选择器或样式片段。 |
| 111 | `#snapshotMeta,` | 声明 CSS 选择器或样式片段。 |
| 112 | `#resultText {` | 打开一个 CSS 选择器规则块。 |
| 113 | `  margin-bottom: 0;` | 设置 CSS 属性 `margin-bottom`。 |
| 114 | `  color: var(--muted);` | 设置文字颜色。 |
| 115 | `}` | 结束当前 CSS 规则块。 |
| 116 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 117 | `.top-actions {` | 打开一个 CSS 选择器规则块。 |
| 118 | `  display: flex;` | 设置元素的布局显示方式。 |
| 119 | `  justify-content: flex-end;` | 设置 CSS 属性 `justify-content`。 |
| 120 | `  flex-wrap: wrap;` | 设置 CSS 属性 `flex-wrap`。 |
| 121 | `  gap: 8px;` | 设置网格或弹性布局子项间距。 |
| 122 | `}` | 结束当前 CSS 规则块。 |
| 123 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 124 | `.top-actions select {` | 打开一个 CSS 选择器规则块。 |
| 125 | `  width: auto;` | 设置宽度。 |
| 126 | `  min-width: 150px;` | 设置 CSS 属性 `min-width`。 |
| 127 | `}` | 结束当前 CSS 规则块。 |
| 128 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 129 | `.secondary {` | 打开一个 CSS 选择器规则块。 |
| 130 | `  min-height: 38px;` | 设置最小高度。 |
| 131 | `  border: 1px solid var(--line);` | 设置边框。 |
| 132 | `  border-radius: 6px;` | 设置圆角半径。 |
| 133 | `  background: var(--panel);` | 设置背景。 |
| 134 | `  color: var(--ink);` | 设置文字颜色。 |
| 135 | `  padding: 8px 12px;` | 设置元素内边距。 |
| 136 | `}` | 结束当前 CSS 规则块。 |
| 137 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 138 | `.secondary:hover {` | 打开一个 CSS 选择器规则块。 |
| 139 | `  border-color: var(--accent);` | 设置 CSS 属性 `border-color`。 |
| 140 | `}` | 结束当前 CSS 规则块。 |
| 141 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 142 | `.small-button {` | 打开一个 CSS 选择器规则块。 |
| 143 | `  min-height: 32px;` | 设置最小高度。 |
| 144 | `  padding: 5px 9px;` | 设置元素内边距。 |
| 145 | `  font-size: 12px;` | 设置字号。 |
| 146 | `}` | 结束当前 CSS 规则块。 |
| 147 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 148 | `.source-panel {` | 打开一个 CSS 选择器规则块。 |
| 149 | `  display: grid;` | 设置元素的布局显示方式。 |
| 150 | `  grid-template-columns: minmax(280px, 0.9fr) minmax(380px, 1.5fr);` | 定义 CSS 网格的列结构。 |
| 151 | `  gap: 14px;` | 设置网格或弹性布局子项间距。 |
| 152 | `  margin-bottom: 12px;` | 设置 CSS 属性 `margin-bottom`。 |
| 153 | `  padding: 14px;` | 设置元素内边距。 |
| 154 | `  border: 1px solid var(--line);` | 设置边框。 |
| 155 | `  border-radius: 8px;` | 设置圆角半径。 |
| 156 | `  background: var(--panel);` | 设置背景。 |
| 157 | `  box-shadow: var(--shadow);` | 设置阴影。 |
| 158 | `}` | 结束当前 CSS 规则块。 |
| 159 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 160 | `.source-panel h2 {` | 打开一个 CSS 选择器规则块。 |
| 161 | `  margin-bottom: 4px;` | 设置 CSS 属性 `margin-bottom`。 |
| 162 | `}` | 结束当前 CSS 规则块。 |
| 163 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 164 | `.path-presets {` | 打开一个 CSS 选择器规则块。 |
| 165 | `  display: flex;` | 设置元素的布局显示方式。 |
| 166 | `  flex-wrap: wrap;` | 设置 CSS 属性 `flex-wrap`。 |
| 167 | `  gap: 8px;` | 设置网格或弹性布局子项间距。 |
| 168 | `  align-content: start;` | 设置 CSS 属性 `align-content`。 |
| 169 | `}` | 结束当前 CSS 规则块。 |
| 170 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 171 | `.path-chip {` | 打开一个 CSS 选择器规则块。 |
| 172 | `  max-width: 100%;` | 设置 CSS 属性 `max-width`。 |
| 173 | `  border: 1px solid var(--line);` | 设置边框。 |
| 174 | `  border-radius: 999px;` | 设置圆角半径。 |
| 175 | `  background: var(--panel-soft);` | 设置背景。 |
| 176 | `  color: var(--muted);` | 设置文字颜色。 |
| 177 | `  padding: 5px 9px;` | 设置元素内边距。 |
| 178 | `  font-family: Consolas, "Cascadia Mono", monospace;` | 设置字体栈。 |
| 179 | `  font-size: 12px;` | 设置字号。 |
| 180 | `  overflow-wrap: anywhere;` | 设置长文本换行策略。 |
| 181 | `}` | 结束当前 CSS 规则块。 |
| 182 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 183 | `.summary {` | 打开一个 CSS 选择器规则块。 |
| 184 | `  display: grid;` | 设置元素的布局显示方式。 |
| 185 | `  grid-template-columns: repeat(4, minmax(130px, 1fr));` | 定义 CSS 网格的列结构。 |
| 186 | `  gap: 10px;` | 设置网格或弹性布局子项间距。 |
| 187 | `  margin-bottom: 12px;` | 设置 CSS 属性 `margin-bottom`。 |
| 188 | `}` | 结束当前 CSS 规则块。 |
| 189 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 190 | `.metric {` | 打开一个 CSS 选择器规则块。 |
| 191 | `  min-height: 76px;` | 设置最小高度。 |
| 192 | `  border: 1px solid var(--line);` | 设置边框。 |
| 193 | `  border-radius: 8px;` | 设置圆角半径。 |
| 194 | `  background: var(--panel);` | 设置背景。 |
| 195 | `  padding: 13px 14px;` | 设置元素内边距。 |
| 196 | `  box-shadow: var(--shadow);` | 设置阴影。 |
| 197 | `}` | 结束当前 CSS 规则块。 |
| 198 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 199 | `.metric span {` | 打开一个 CSS 选择器规则块。 |
| 200 | `  display: block;` | 设置元素的布局显示方式。 |
| 201 | `  margin-bottom: 5px;` | 设置 CSS 属性 `margin-bottom`。 |
| 202 | `  color: var(--muted);` | 设置文字颜色。 |
| 203 | `  font-size: 13px;` | 设置字号。 |
| 204 | `}` | 结束当前 CSS 规则块。 |
| 205 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 206 | `.metric strong {` | 打开一个 CSS 选择器规则块。 |
| 207 | `  display: block;` | 设置元素的布局显示方式。 |
| 208 | `  font-size: 28px;` | 设置字号。 |
| 209 | `  line-height: 1;` | 设置行高。 |
| 210 | `}` | 结束当前 CSS 规则块。 |
| 211 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 212 | `.workspace {` | 打开一个 CSS 选择器规则块。 |
| 213 | `  display: grid;` | 设置元素的布局显示方式。 |
| 214 | `  grid-template-columns: 250px minmax(420px, 0.92fr) minmax(560px, 1.25fr);` | 定义 CSS 网格的列结构。 |
| 215 | `  gap: 12px;` | 设置网格或弹性布局子项间距。 |
| 216 | `  align-items: start;` | 设置 CSS 属性 `align-items`。 |
| 217 | `}` | 结束当前 CSS 规则块。 |
| 218 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 219 | `.filters,` | 声明 CSS 选择器或样式片段。 |
| 220 | `.item-list,` | 声明 CSS 选择器或样式片段。 |
| 221 | `.inspector {` | 打开一个 CSS 选择器规则块。 |
| 222 | `  border: 1px solid var(--line);` | 设置边框。 |
| 223 | `  border-radius: 8px;` | 设置圆角半径。 |
| 224 | `  background: var(--panel);` | 设置背景。 |
| 225 | `  box-shadow: var(--shadow);` | 设置阴影。 |
| 226 | `}` | 结束当前 CSS 规则块。 |
| 227 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 228 | `.filters,` | 声明 CSS 选择器或样式片段。 |
| 229 | `.inspector {` | 打开一个 CSS 选择器规则块。 |
| 230 | `  position: sticky;` | 设置定位方式。 |
| 231 | `  top: 12px;` | 设置定位元素距离顶部的位置。 |
| 232 | `  max-height: calc(100vh - 24px);` | 设置最大高度。 |
| 233 | `  overflow: auto;` | 设置内容溢出时的处理方式。 |
| 234 | `  scrollbar-gutter: stable;` | 设置 CSS 属性 `scrollbar-gutter`。 |
| 235 | `  overscroll-behavior: contain;` | 设置 CSS 属性 `overscroll-behavior`。 |
| 236 | `}` | 结束当前 CSS 规则块。 |
| 237 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 238 | `.filters {` | 打开一个 CSS 选择器规则块。 |
| 239 | `  padding: 14px;` | 设置元素内边距。 |
| 240 | `}` | 结束当前 CSS 规则块。 |
| 241 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 242 | `.view-tabs {` | 打开一个 CSS 选择器规则块。 |
| 243 | `  display: grid;` | 设置元素的布局显示方式。 |
| 244 | `  grid-template-columns: repeat(2, 1fr);` | 定义 CSS 网格的列结构。 |
| 245 | `  gap: 8px;` | 设置网格或弹性布局子项间距。 |
| 246 | `  margin-bottom: 14px;` | 设置 CSS 属性 `margin-bottom`。 |
| 247 | `}` | 结束当前 CSS 规则块。 |
| 248 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 249 | `.view-tabs button {` | 打开一个 CSS 选择器规则块。 |
| 250 | `  min-height: 38px;` | 设置最小高度。 |
| 251 | `  border: 1px solid var(--line);` | 设置边框。 |
| 252 | `  border-radius: 6px;` | 设置圆角半径。 |
| 253 | `  background: var(--panel-soft);` | 设置背景。 |
| 254 | `  color: var(--muted);` | 设置文字颜色。 |
| 255 | `  font-weight: 800;` | 设置字重。 |
| 256 | `}` | 结束当前 CSS 规则块。 |
| 257 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 258 | `.view-tabs button.active {` | 打开一个 CSS 选择器规则块。 |
| 259 | `  border-color: var(--accent);` | 设置 CSS 属性 `border-color`。 |
| 260 | `  background: var(--accent);` | 设置背景。 |
| 261 | `  color: #ffffff;` | 设置文字颜色。 |
| 262 | `}` | 结束当前 CSS 规则块。 |
| 263 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 264 | `.search-label {` | 打开一个 CSS 选择器规则块。 |
| 265 | `  display: block;` | 设置元素的布局显示方式。 |
| 266 | `  margin-bottom: 6px;` | 设置 CSS 属性 `margin-bottom`。 |
| 267 | `  color: var(--muted);` | 设置文字颜色。 |
| 268 | `  font-size: 13px;` | 设置字号。 |
| 269 | `}` | 结束当前 CSS 规则块。 |
| 270 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 271 | `input,` | 声明 CSS 选择器或样式片段。 |
| 272 | `select {` | 打开一个 CSS 选择器规则块。 |
| 273 | `  width: 100%;` | 设置宽度。 |
| 274 | `  min-height: 40px;` | 设置最小高度。 |
| 275 | `  border: 1px solid var(--line);` | 设置边框。 |
| 276 | `  border-radius: 6px;` | 设置圆角半径。 |
| 277 | `  background: #ffffff;` | 设置背景。 |
| 278 | `  color: var(--ink);` | 设置文字颜色。 |
| 279 | `  padding: 8px 10px;` | 设置元素内边距。 |
| 280 | `}` | 结束当前 CSS 规则块。 |
| 281 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 282 | `.filter-block {` | 打开一个 CSS 选择器规则块。 |
| 283 | `  margin-top: 15px;` | 设置 CSS 属性 `margin-top`。 |
| 284 | `  padding-top: 13px;` | 设置 CSS 属性 `padding-top`。 |
| 285 | `  border-top: 1px solid var(--line);` | 设置 CSS 属性 `border-top`。 |
| 286 | `}` | 结束当前 CSS 规则块。 |
| 287 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 288 | `.filter-list {` | 打开一个 CSS 选择器规则块。 |
| 289 | `  display: grid;` | 设置元素的布局显示方式。 |
| 290 | `  gap: 7px;` | 设置网格或弹性布局子项间距。 |
| 291 | `}` | 结束当前 CSS 规则块。 |
| 292 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 293 | `.check-row {` | 打开一个 CSS 选择器规则块。 |
| 294 | `  display: flex;` | 设置元素的布局显示方式。 |
| 295 | `  gap: 8px;` | 设置网格或弹性布局子项间距。 |
| 296 | `  align-items: center;` | 设置 CSS 属性 `align-items`。 |
| 297 | `  color: var(--muted);` | 设置文字颜色。 |
| 298 | `  font-size: 13px;` | 设置字号。 |
| 299 | `}` | 结束当前 CSS 规则块。 |
| 300 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 301 | `.check-row input {` | 打开一个 CSS 选择器规则块。 |
| 302 | `  width: 16px;` | 设置宽度。 |
| 303 | `  min-height: 16px;` | 设置最小高度。 |
| 304 | `  flex: 0 0 auto;` | 设置 CSS 属性 `flex`。 |
| 305 | `}` | 结束当前 CSS 规则块。 |
| 306 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 307 | `.item-list {` | 打开一个 CSS 选择器规则块。 |
| 308 | `  min-width: 0;` | 设置 CSS 属性 `min-width`。 |
| 309 | `  overflow: hidden;` | 设置内容溢出时的处理方式。 |
| 310 | `}` | 结束当前 CSS 规则块。 |
| 311 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 312 | `.list-head {` | 打开一个 CSS 选择器规则块。 |
| 313 | `  padding: 14px 16px;` | 设置元素内边距。 |
| 314 | `  border-bottom: 1px solid var(--line);` | 设置 CSS 属性 `border-bottom`。 |
| 315 | `}` | 结束当前 CSS 规则块。 |
| 316 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 317 | `.rows {` | 打开一个 CSS 选择器规则块。 |
| 318 | `  display: grid;` | 设置元素的布局显示方式。 |
| 319 | `}` | 结束当前 CSS 规则块。 |
| 320 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 321 | `.item-row {` | 打开一个 CSS 选择器规则块。 |
| 322 | `  display: grid;` | 设置元素的布局显示方式。 |
| 323 | `  grid-template-columns: minmax(0, 1fr);` | 定义 CSS 网格的列结构。 |
| 324 | `  gap: 12px;` | 设置网格或弹性布局子项间距。 |
| 325 | `  align-items: center;` | 设置 CSS 属性 `align-items`。 |
| 326 | `  padding: 13px 16px;` | 设置元素内边距。 |
| 327 | `  border-bottom: 1px solid var(--line);` | 设置 CSS 属性 `border-bottom`。 |
| 328 | `}` | 结束当前 CSS 规则块。 |
| 329 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 330 | `.item-row:last-child {` | 打开一个 CSS 选择器规则块。 |
| 331 | `  border-bottom: 0;` | 设置 CSS 属性 `border-bottom`。 |
| 332 | `}` | 结束当前 CSS 规则块。 |
| 333 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 334 | `.item-row:hover,` | 设置 CSS 属性 `.item-row`。 |
| 335 | `.item-row.selected {` | 打开一个 CSS 选择器规则块。 |
| 336 | `  background: #fbfcf8;` | 设置背景。 |
| 337 | `}` | 结束当前 CSS 规则块。 |
| 338 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 339 | `.item-main {` | 打开一个 CSS 选择器规则块。 |
| 340 | `  min-width: 0;` | 设置 CSS 属性 `min-width`。 |
| 341 | `}` | 结束当前 CSS 规则块。 |
| 342 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 343 | `.item-main strong {` | 打开一个 CSS 选择器规则块。 |
| 344 | `  display: block;` | 设置元素的布局显示方式。 |
| 345 | `  margin-bottom: 4px;` | 设置 CSS 属性 `margin-bottom`。 |
| 346 | `  overflow-wrap: anywhere;` | 设置长文本换行策略。 |
| 347 | `}` | 结束当前 CSS 规则块。 |
| 348 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 349 | `.item-main p {` | 打开一个 CSS 选择器规则块。 |
| 350 | `  margin-bottom: 7px;` | 设置 CSS 属性 `margin-bottom`。 |
| 351 | `  color: var(--muted);` | 设置文字颜色。 |
| 352 | `  font-size: 13px;` | 设置字号。 |
| 353 | `  overflow-wrap: anywhere;` | 设置长文本换行策略。 |
| 354 | `}` | 结束当前 CSS 规则块。 |
| 355 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 356 | `.item-meta,` | 声明 CSS 选择器或样式片段。 |
| 357 | `.badge-stack {` | 打开一个 CSS 选择器规则块。 |
| 358 | `  display: flex;` | 设置元素的布局显示方式。 |
| 359 | `  flex-wrap: wrap;` | 设置 CSS 属性 `flex-wrap`。 |
| 360 | `  gap: 6px;` | 设置网格或弹性布局子项间距。 |
| 361 | `  align-items: center;` | 设置 CSS 属性 `align-items`。 |
| 362 | `}` | 结束当前 CSS 规则块。 |
| 363 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 364 | `.badge {` | 打开一个 CSS 选择器规则块。 |
| 365 | `  display: inline-flex;` | 设置元素的布局显示方式。 |
| 366 | `  align-items: center;` | 设置 CSS 属性 `align-items`。 |
| 367 | `  width: fit-content;` | 设置宽度。 |
| 368 | `  border: 1px solid transparent;` | 设置边框。 |
| 369 | `  border-radius: 999px;` | 设置圆角半径。 |
| 370 | `  padding: 3px 8px;` | 设置元素内边距。 |
| 371 | `  font-size: 12px;` | 设置字号。 |
| 372 | `  font-weight: 800;` | 设置字重。 |
| 373 | `}` | 结束当前 CSS 规则块。 |
| 374 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 375 | `.badge.neutral {` | 打开一个 CSS 选择器规则块。 |
| 376 | `  color: var(--muted);` | 设置文字颜色。 |
| 377 | `  background: #eef0eb;` | 设置背景。 |
| 378 | `  border-color: var(--line);` | 设置 CSS 属性 `border-color`。 |
| 379 | `}` | 结束当前 CSS 规则块。 |
| 380 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 381 | `.badge.raw {` | 打开一个 CSS 选择器规则块。 |
| 382 | `  color: var(--accent);` | 设置文字颜色。 |
| 383 | `  background: var(--accent-weak);` | 设置背景。 |
| 384 | `  border-color: #c7dfd2;` | 设置 CSS 属性 `border-color`。 |
| 385 | `}` | 结束当前 CSS 规则块。 |
| 386 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 387 | `.badge.mcp,` | 声明 CSS 选择器或样式片段。 |
| 388 | `.badge.config {` | 打开一个 CSS 选择器规则块。 |
| 389 | `  color: var(--blue);` | 设置文字颜色。 |
| 390 | `  background: var(--blue-weak);` | 设置背景。 |
| 391 | `  border-color: #c9dcea;` | 设置 CSS 属性 `border-color`。 |
| 392 | `}` | 结束当前 CSS 规则块。 |
| 393 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 394 | `.badge.warn {` | 打开一个 CSS 选择器规则块。 |
| 395 | `  color: var(--amber);` | 设置文字颜色。 |
| 396 | `  background: var(--amber-weak);` | 设置背景。 |
| 397 | `  border-color: #e8d8b8;` | 设置 CSS 属性 `border-color`。 |
| 398 | `}` | 结束当前 CSS 规则块。 |
| 399 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 400 | `.inspector {` | 打开一个 CSS 选择器规则块。 |
| 401 | `  padding: 16px;` | 设置元素内边距。 |
| 402 | `}` | 结束当前 CSS 规则块。 |
| 403 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 404 | `.detail-head {` | 打开一个 CSS 选择器规则块。 |
| 405 | `  padding-bottom: 12px;` | 设置 CSS 属性 `padding-bottom`。 |
| 406 | `  border-bottom: 1px solid var(--line);` | 设置 CSS 属性 `border-bottom`。 |
| 407 | `}` | 结束当前 CSS 规则块。 |
| 408 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 409 | `.detail-head h2 {` | 打开一个 CSS 选择器规则块。 |
| 410 | `  margin-bottom: 6px;` | 设置 CSS 属性 `margin-bottom`。 |
| 411 | `  font-size: 24px;` | 设置字号。 |
| 412 | `  overflow-wrap: anywhere;` | 设置长文本换行策略。 |
| 413 | `}` | 结束当前 CSS 规则块。 |
| 414 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 415 | `.detail-grid {` | 打开一个 CSS 选择器规则块。 |
| 416 | `  display: grid;` | 设置元素的布局显示方式。 |
| 417 | `  grid-template-columns: 64px minmax(0, 1fr);` | 定义 CSS 网格的列结构。 |
| 418 | `  gap: 9px 10px;` | 设置网格或弹性布局子项间距。 |
| 419 | `  margin: 14px 0;` | 设置元素外边距。 |
| 420 | `}` | 结束当前 CSS 规则块。 |
| 421 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 422 | `.detail-grid dt {` | 打开一个 CSS 选择器规则块。 |
| 423 | `  color: var(--muted);` | 设置文字颜色。 |
| 424 | `  font-size: 13px;` | 设置字号。 |
| 425 | `}` | 结束当前 CSS 规则块。 |
| 426 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 427 | `.detail-grid dd {` | 打开一个 CSS 选择器规则块。 |
| 428 | `  margin: 0;` | 设置元素外边距。 |
| 429 | `  overflow-wrap: anywhere;` | 设置长文本换行策略。 |
| 430 | `}` | 结束当前 CSS 规则块。 |
| 431 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 432 | `code,` | 声明 CSS 选择器或样式片段。 |
| 433 | `.compact-code,` | 声明 CSS 选择器或样式片段。 |
| 434 | `.raw-viewer {` | 打开一个 CSS 选择器规则块。 |
| 435 | `  font-family: Consolas, "Cascadia Mono", "SFMono-Regular", monospace;` | 设置字体栈。 |
| 436 | `}` | 结束当前 CSS 规则块。 |
| 437 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 438 | `code {` | 打开一个 CSS 选择器规则块。 |
| 439 | `  display: block;` | 设置元素的布局显示方式。 |
| 440 | `  padding: 8px;` | 设置元素内边距。 |
| 441 | `  border: 1px solid var(--line);` | 设置边框。 |
| 442 | `  border-radius: 6px;` | 设置圆角半径。 |
| 443 | `  background: var(--panel-soft);` | 设置背景。 |
| 444 | `  white-space: pre-wrap;` | 设置空白和换行保留方式。 |
| 445 | `  overflow-wrap: anywhere;` | 设置长文本换行策略。 |
| 446 | `  font-size: 12px;` | 设置字号。 |
| 447 | `}` | 结束当前 CSS 规则块。 |
| 448 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 449 | `.detail-section {` | 打开一个 CSS 选择器规则块。 |
| 450 | `  margin-top: 14px;` | 设置 CSS 属性 `margin-top`。 |
| 451 | `  padding-top: 14px;` | 设置 CSS 属性 `padding-top`。 |
| 452 | `  border-top: 1px solid var(--line);` | 设置 CSS 属性 `border-top`。 |
| 453 | `}` | 结束当前 CSS 规则块。 |
| 454 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 455 | `.compact-code {` | 打开一个 CSS 选择器规则块。 |
| 456 | `  max-height: 160px;` | 设置最大高度。 |
| 457 | `  margin: 0;` | 设置元素外边距。 |
| 458 | `  overflow: auto;` | 设置内容溢出时的处理方式。 |
| 459 | `  border: 1px solid var(--line);` | 设置边框。 |
| 460 | `  border-radius: 6px;` | 设置圆角半径。 |
| 461 | `  background: var(--panel-soft);` | 设置背景。 |
| 462 | `  color: var(--code);` | 设置文字颜色。 |
| 463 | `  padding: 10px;` | 设置元素内边距。 |
| 464 | `  white-space: pre-wrap;` | 设置空白和换行保留方式。 |
| 465 | `  overflow-wrap: anywhere;` | 设置长文本换行策略。 |
| 466 | `  font-size: 12px;` | 设置字号。 |
| 467 | `}` | 结束当前 CSS 规则块。 |
| 468 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 469 | `.raw-section {` | 打开一个 CSS 选择器规则块。 |
| 470 | `  padding-top: 12px;` | 设置 CSS 属性 `padding-top`。 |
| 471 | `}` | 结束当前 CSS 规则块。 |
| 472 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 473 | `.raw-head {` | 打开一个 CSS 选择器规则块。 |
| 474 | `  display: flex;` | 设置元素的布局显示方式。 |
| 475 | `  align-items: center;` | 设置 CSS 属性 `align-items`。 |
| 476 | `  justify-content: space-between;` | 设置 CSS 属性 `justify-content`。 |
| 477 | `  gap: 10px;` | 设置网格或弹性布局子项间距。 |
| 478 | `  margin-bottom: 8px;` | 设置 CSS 属性 `margin-bottom`。 |
| 479 | `}` | 结束当前 CSS 规则块。 |
| 480 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 481 | `.raw-head h3 {` | 打开一个 CSS 选择器规则块。 |
| 482 | `  margin-bottom: 0;` | 设置 CSS 属性 `margin-bottom`。 |
| 483 | `}` | 结束当前 CSS 规则块。 |
| 484 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 485 | `.raw-actions {` | 打开一个 CSS 选择器规则块。 |
| 486 | `  display: flex;` | 设置元素的布局显示方式。 |
| 487 | `  flex-wrap: wrap;` | 设置 CSS 属性 `flex-wrap`。 |
| 488 | `  justify-content: flex-end;` | 设置 CSS 属性 `justify-content`。 |
| 489 | `  gap: 6px;` | 设置网格或弹性布局子项间距。 |
| 490 | `}` | 结束当前 CSS 规则块。 |
| 491 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 492 | `.raw-actions .active {` | 打开一个 CSS 选择器规则块。 |
| 493 | `  border-color: var(--accent);` | 设置 CSS 属性 `border-color`。 |
| 494 | `  background: var(--accent-weak);` | 设置背景。 |
| 495 | `  color: var(--accent);` | 设置文字颜色。 |
| 496 | `  font-weight: 800;` | 设置字重。 |
| 497 | `}` | 结束当前 CSS 规则块。 |
| 498 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 499 | `.translation-status {` | 打开一个 CSS 选择器规则块。 |
| 500 | `  margin: 0 0 8px;` | 设置元素外边距。 |
| 501 | `  color: var(--muted);` | 设置文字颜色。 |
| 502 | `  font-size: 12px;` | 设置字号。 |
| 503 | `}` | 结束当前 CSS 规则块。 |
| 504 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 505 | `.raw-viewer {` | 打开一个 CSS 选择器规则块。 |
| 506 | `  min-height: 58vh;` | 设置最小高度。 |
| 507 | `  max-height: calc(100vh - 360px);` | 设置最大高度。 |
| 508 | `  margin: 0;` | 设置元素外边距。 |
| 509 | `  overflow: auto;` | 设置内容溢出时的处理方式。 |
| 510 | `  border: 1px solid var(--strong-line);` | 设置边框。 |
| 511 | `  border-radius: 6px;` | 设置圆角半径。 |
| 512 | `  background: #fbfcf8;` | 设置背景。 |
| 513 | `  color: var(--code);` | 设置文字颜色。 |
| 514 | `  padding: 14px;` | 设置元素内边距。 |
| 515 | `  white-space: pre-wrap;` | 设置空白和换行保留方式。 |
| 516 | `  overflow-wrap: anywhere;` | 设置长文本换行策略。 |
| 517 | `  tab-size: 2;` | 设置 CSS 属性 `tab-size`。 |
| 518 | `  font-size: 13px;` | 设置字号。 |
| 519 | `  line-height: 1.55;` | 设置行高。 |
| 520 | `}` | 结束当前 CSS 规则块。 |
| 521 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 522 | `@media (max-width: 1280px) {` | 打开一个 CSS 选择器规则块。 |
| 523 | `  .workspace {` | 打开一个 CSS 选择器规则块。 |
| 524 | `    grid-template-columns: 240px minmax(380px, 1fr);` | 定义 CSS 网格的列结构。 |
| 525 | `  }` | 结束当前 CSS 规则块。 |
| 526 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 527 | `  .inspector {` | 打开一个 CSS 选择器规则块。 |
| 528 | `    position: static;` | 设置定位方式。 |
| 529 | `    grid-column: 1 / -1;` | 设置 CSS 属性 `grid-column`。 |
| 530 | `    max-height: none;` | 设置最大高度。 |
| 531 | `  }` | 结束当前 CSS 规则块。 |
| 532 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 533 | `  .raw-viewer {` | 打开一个 CSS 选择器规则块。 |
| 534 | `    max-height: none;` | 设置最大高度。 |
| 535 | `  }` | 结束当前 CSS 规则块。 |
| 536 | `}` | 结束当前 CSS 规则块。 |
| 537 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 538 | `@media (max-width: 860px) {` | 打开一个 CSS 选择器规则块。 |
| 539 | `  .app-shell {` | 打开一个 CSS 选择器规则块。 |
| 540 | `    padding: 12px;` | 设置元素内边距。 |
| 541 | `  }` | 结束当前 CSS 规则块。 |
| 542 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 543 | `  .topbar,` | 声明 CSS 选择器或样式片段。 |
| 544 | `  .source-panel,` | 声明 CSS 选择器或样式片段。 |
| 545 | `  .workspace {` | 打开一个 CSS 选择器规则块。 |
| 546 | `    grid-template-columns: 1fr;` | 定义 CSS 网格的列结构。 |
| 547 | `  }` | 结束当前 CSS 规则块。 |
| 548 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 549 | `  .top-actions {` | 打开一个 CSS 选择器规则块。 |
| 550 | `    justify-content: stretch;` | 设置 CSS 属性 `justify-content`。 |
| 551 | `  }` | 结束当前 CSS 规则块。 |
| 552 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 553 | `  .top-actions button {` | 打开一个 CSS 选择器规则块。 |
| 554 | `    flex: 1 1 150px;` | 设置 CSS 属性 `flex`。 |
| 555 | `  }` | 结束当前 CSS 规则块。 |
| 556 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 557 | `  .summary {` | 打开一个 CSS 选择器规则块。 |
| 558 | `    grid-template-columns: repeat(2, minmax(0, 1fr));` | 定义 CSS 网格的列结构。 |
| 559 | `  }` | 结束当前 CSS 规则块。 |
| 560 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 561 | `  .filters {` | 打开一个 CSS 选择器规则块。 |
| 562 | `    position: static;` | 设置定位方式。 |
| 563 | `    max-height: none;` | 设置最大高度。 |
| 564 | `  }` | 结束当前 CSS 规则块。 |
| 565 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 566 | `  .item-row {` | 打开一个 CSS 选择器规则块。 |
| 567 | `    grid-template-columns: 1fr;` | 定义 CSS 网格的列结构。 |
| 568 | `  }` | 结束当前 CSS 规则块。 |
| 569 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 570 | `}` | 结束当前 CSS 规则块。 |
| 571 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 572 | `@media (max-width: 480px) {` | 打开一个 CSS 选择器规则块。 |
| 573 | `  .summary {` | 打开一个 CSS 选择器规则块。 |
| 574 | `    grid-template-columns: 1fr;` | 定义 CSS 网格的列结构。 |
| 575 | `  }` | 结束当前 CSS 规则块。 |
| 576 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 577 | `  .detail-grid {` | 打开一个 CSS 选择器规则块。 |
| 578 | `    grid-template-columns: 1fr;` | 定义 CSS 网格的列结构。 |
| 579 | `  }` | 结束当前 CSS 规则块。 |
| 580 | `}` | 结束当前 CSS 规则块。 |
| 581 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |

## app.js

| 行 | 代码 | 说明 |
| ---: | --- | --- |
| 1 | `const emptySnapshot = {` | 声明一个不会被重新赋值的常量。 |
| 2 | `  generatedAt: "",` | 执行 app.js 中的这一行逻辑。 |
| 3 | `  skills: [],` | 执行 app.js 中的这一行逻辑。 |
| 4 | `  mcpServers: [],` | 执行 app.js 中的这一行逻辑。 |
| 5 | `  presetPaths: [],` | 执行 app.js 中的这一行逻辑。 |
| 6 | `  globalSettings: {},` | 执行 app.js 中的这一行逻辑。 |
| 7 | `};` | 结束当前代码块或数据结构。 |
| 8 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 9 | `let snapshot = normalizeSnapshot(window.SKILL_DATA \|\| emptySnapshot);` | 声明一个后续可能变化的变量。 |
| 10 | `let currentView = "skills";` | 声明一个后续可能变化的变量。 |
| 11 | `let activeCategory = "全部";` | 声明一个后续可能变化的变量。 |
| 12 | `let activeSource = "全部";` | 声明一个后续可能变化的变量。 |
| 13 | `let selected = { skills: "", mcp: "" };` | 声明一个后续可能变化的变量。 |
| 14 | `let uiLanguage = "zh-CN";` | 声明一个后续可能变化的变量。 |
| 15 | `let rawMode = "original";` | 声明一个后续可能变化的变量。 |
| 16 | `let currentDetailItem = null;` | 声明一个后续可能变化的变量。 |
| 17 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 18 | `const languageNames = {` | 声明一个不会被重新赋值的常量。 |
| 19 | `  "zh-CN": "简体中文",` | 执行 app.js 中的这一行逻辑。 |
| 20 | `  en: "English",` | 执行 app.js 中的这一行逻辑。 |
| 21 | `  ja: "日本語",` | 执行 app.js 中的这一行逻辑。 |
| 22 | `  ko: "한국어",` | 执行 app.js 中的这一行逻辑。 |
| 23 | `  fr: "Français",` | 执行 app.js 中的这一行逻辑。 |
| 24 | `  de: "Deutsch",` | 执行 app.js 中的这一行逻辑。 |
| 25 | `  es: "Español",` | 执行 app.js 中的这一行逻辑。 |
| 26 | `  pt: "Português",` | 执行 app.js 中的这一行逻辑。 |
| 27 | `  ru: "Русский",` | 执行 app.js 中的这一行逻辑。 |
| 28 | `  ar: "العربية",` | 执行 app.js 中的这一行逻辑。 |
| 29 | `};` | 结束当前代码块或数据结构。 |
| 30 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 31 | `uiLanguage = getInitialLanguage();` | 执行 app.js 中的这一行逻辑。 |
| 32 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 33 | `const uiText = {` | 声明一个不会被重新赋值的常量。 |
| 34 | `  "zh-CN": {` | 执行 app.js 中的这一行逻辑。 |
| 35 | `    subtitle: "把 Codex、Claude 的 Skill 原文和 MCP 配置摊开看清楚。",` | 执行 app.js 中的这一行逻辑。 |
| 36 | `    chooseSkillDir: "选择 Skill 目录",` | 执行 app.js 中的这一行逻辑。 |
| 37 | `    chooseMcpConfig: "选择 MCP 配置",` | 执行 app.js 中的这一行逻辑。 |
| 38 | `    importSnapshot: "导入快照",` | 执行 app.js 中的这一行逻辑。 |
| 39 | `    exportJson: "导出 JSON",` | 执行 app.js 中的这一行逻辑。 |
| 40 | `    snapshotLoading: "正在读取本机快照",` | 执行 app.js 中的这一行逻辑。 |
| 41 | `    snapshotHelp: "浏览器不能自动穿透读取任意本机目录；推荐运行扫描器生成快照，或手动选择目录/配置文件。",` | 执行 app.js 中的这一行逻辑。 |
| 42 | `    skillMetric: "Skill",` | 执行 app.js 中的这一行逻辑。 |
| 43 | `    mcpMetric: "MCP",` | 执行 app.js 中的这一行逻辑。 |
| 44 | `    rawMetric: "包含原文",` | 执行 app.js 中的这一行逻辑。 |
| 45 | `    enabledMcpMetric: "启用 MCP",` | 执行 app.js 中的这一行逻辑。 |
| 46 | `    skillTab: "Skill",` | 执行 app.js 中的这一行逻辑。 |
| 47 | `    mcpTab: "MCP",` | 执行 app.js 中的这一行逻辑。 |
| 48 | `    search: "搜索",` | 执行 app.js 中的这一行逻辑。 |
| 49 | `    category: "分类",` | 执行 app.js 中的这一行逻辑。 |
| 50 | `    source: "来源",` | 执行 app.js 中的这一行逻辑。 |
| 51 | `    sort: "排序",` | 执行 app.js 中的这一行逻辑。 |
| 52 | `    skillList: "Skill 清单",` | 执行 app.js 中的这一行逻辑。 |
| 53 | `    mcpList: "MCP 配置清单",` | 执行 app.js 中的这一行逻辑。 |
| 54 | `    selectedSkill: "Selected Skill",` | 执行 app.js 中的这一行逻辑。 |
| 55 | `    selectedMcp: "Selected MCP",` | 执行 app.js 中的这一行逻辑。 |
| 56 | `    essence: "本质",` | 执行 app.js 中的这一行逻辑。 |
| 57 | `    path: "路径",` | 执行 app.js 中的这一行逻辑。 |
| 58 | `    frontmatter: "frontmatter / 元信息",` | 执行 app.js 中的这一行逻辑。 |
| 59 | `    rawSkill: "SKILL.md 原文",` | 执行 app.js 中的这一行逻辑。 |
| 60 | `    rawMcp: "MCP 原始配置",` | 执行 app.js 中的这一行逻辑。 |
| 61 | `    original: "原文",` | 执行 app.js 中的这一行逻辑。 |
| 62 | `    translated: "译文",` | 执行 app.js 中的这一行逻辑。 |
| 63 | `    copyRaw: "复制原文",` | 执行 app.js 中的这一行逻辑。 |
| 64 | `    copied: "已复制",` | 执行 app.js 中的这一行逻辑。 |
| 65 | `    translationStatus: "译文由本地内置词典生成，保留 Markdown 结构，不调用模型或网络。",` | 执行 app.js 中的这一行逻辑。 |
| 66 | `    translating: "正在生成译文...",` | 执行 app.js 中的这一行逻辑。 |
| 67 | `    translatedByDictionary: "已使用本地内置 Skill 术语词典生成阅读辅助译文，未调用模型或网络。",` | 执行 app.js 中的这一行逻辑。 |
| 68 | `    noSelection: "选择一个条目",` | 执行 app.js 中的这一行逻辑。 |
| 69 | `    noSelectionHelp: "点击左侧条目查看它的原始内容。",` | 执行 app.js 中的这一行逻辑。 |
| 70 | `  },` | 执行 app.js 中的这一行逻辑。 |
| 71 | `  en: {` | 执行 app.js 中的这一行逻辑。 |
| 72 | `    subtitle: "Inspect Codex and Claude Skill source plus MCP configuration on this computer.",` | 执行 app.js 中的这一行逻辑。 |
| 73 | `    chooseSkillDir: "Choose Skill folder",` | 执行 app.js 中的这一行逻辑。 |
| 74 | `    chooseMcpConfig: "Choose MCP config",` | 执行 app.js 中的这一行逻辑。 |
| 75 | `    importSnapshot: "Import snapshot",` | 执行 app.js 中的这一行逻辑。 |
| 76 | `    exportJson: "Export JSON",` | 执行 app.js 中的这一行逻辑。 |
| 77 | `    snapshotLoading: "Reading local snapshot",` | 执行 app.js 中的这一行逻辑。 |
| 78 | `    snapshotHelp: "The browser cannot read arbitrary local folders by itself. Run the scanner or choose folders/config files manually.",` | 执行 app.js 中的这一行逻辑。 |
| 79 | `    skillMetric: "Skills",` | 执行 app.js 中的这一行逻辑。 |
| 80 | `    mcpMetric: "MCP",` | 执行 app.js 中的这一行逻辑。 |
| 81 | `    rawMetric: "Raw files",` | 执行 app.js 中的这一行逻辑。 |
| 82 | `    enabledMcpMetric: "Enabled MCP",` | 执行 app.js 中的这一行逻辑。 |
| 83 | `    skillTab: "Skill",` | 执行 app.js 中的这一行逻辑。 |
| 84 | `    mcpTab: "MCP",` | 执行 app.js 中的这一行逻辑。 |
| 85 | `    search: "Search",` | 执行 app.js 中的这一行逻辑。 |
| 86 | `    category: "Category",` | 执行 app.js 中的这一行逻辑。 |
| 87 | `    source: "Source",` | 执行 app.js 中的这一行逻辑。 |
| 88 | `    sort: "Sort",` | 执行 app.js 中的这一行逻辑。 |
| 89 | `    skillList: "Skill list",` | 执行 app.js 中的这一行逻辑。 |
| 90 | `    mcpList: "MCP config list",` | 执行 app.js 中的这一行逻辑。 |
| 91 | `    selectedSkill: "Selected Skill",` | 执行 app.js 中的这一行逻辑。 |
| 92 | `    selectedMcp: "Selected MCP",` | 执行 app.js 中的这一行逻辑。 |
| 93 | `    essence: "Essence",` | 执行 app.js 中的这一行逻辑。 |
| 94 | `    path: "Path",` | 执行 app.js 中的这一行逻辑。 |
| 95 | `    frontmatter: "frontmatter / metadata",` | 执行 app.js 中的这一行逻辑。 |
| 96 | `    rawSkill: "SKILL.md source",` | 执行 app.js 中的这一行逻辑。 |
| 97 | `    rawMcp: "MCP raw config",` | 执行 app.js 中的这一行逻辑。 |
| 98 | `    original: "Source",` | 执行 app.js 中的这一行逻辑。 |
| 99 | `    translated: "Translation",` | 执行 app.js 中的这一行逻辑。 |
| 100 | `    copyRaw: "Copy text",` | 执行 app.js 中的这一行逻辑。 |
| 101 | `    copied: "Copied",` | 执行 app.js 中的这一行逻辑。 |
| 102 | `    translationStatus: "Translation is generated by the local built-in glossary, keeps Markdown structure, and does not call models or the network.",` | 执行 app.js 中的这一行逻辑。 |
| 103 | `    translating: "Translating...",` | 执行 app.js 中的这一行逻辑。 |
| 104 | `    translatedByDictionary: "Generated with the local built-in Skill glossary. No model or network call was made.",` | 执行 app.js 中的这一行逻辑。 |
| 105 | `    noSelection: "Select an item",` | 执行 app.js 中的这一行逻辑。 |
| 106 | `    noSelectionHelp: "Click an item on the left to inspect its raw content.",` | 执行 app.js 中的这一行逻辑。 |
| 107 | `  },` | 执行 app.js 中的这一行逻辑。 |
| 108 | `};` | 结束当前代码块或数据结构。 |
| 109 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 110 | `const languageFallbacks = {` | 声明一个不会被重新赋值的常量。 |
| 111 | `  ja: "en",` | 执行 app.js 中的这一行逻辑。 |
| 112 | `  ko: "en",` | 执行 app.js 中的这一行逻辑。 |
| 113 | `  fr: "en",` | 执行 app.js 中的这一行逻辑。 |
| 114 | `  de: "en",` | 执行 app.js 中的这一行逻辑。 |
| 115 | `  es: "en",` | 执行 app.js 中的这一行逻辑。 |
| 116 | `  pt: "en",` | 执行 app.js 中的这一行逻辑。 |
| 117 | `  ru: "en",` | 执行 app.js 中的这一行逻辑。 |
| 118 | `  ar: "en",` | 执行 app.js 中的这一行逻辑。 |
| 119 | `};` | 结束当前代码块或数据结构。 |
| 120 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 121 | `Object.assign(uiText, {` | 执行 app.js 中的这一行逻辑。 |
| 122 | `  ja: {` | 执行 app.js 中的这一行逻辑。 |
| 123 | `    subtitle: "このコンピューター上の Codex / Claude Skill 原文と MCP 設定を確認します。",` | 执行 app.js 中的这一行逻辑。 |
| 124 | `    chooseSkillDir: "Skill フォルダー",` | 执行 app.js 中的这一行逻辑。 |
| 125 | `    chooseMcpConfig: "MCP 設定",` | 执行 app.js 中的这一行逻辑。 |
| 126 | `    importSnapshot: "スナップショット",` | 执行 app.js 中的这一行逻辑。 |
| 127 | `    exportJson: "JSON 出力",` | 执行 app.js 中的这一行逻辑。 |
| 128 | `    snapshotLoading: "ローカル情報を読み込み中",` | 执行 app.js 中的这一行逻辑。 |
| 129 | `    snapshotHelp: "スキャナーを実行するか、フォルダー/設定ファイルを選択してください。",` | 执行 app.js 中的这一行逻辑。 |
| 130 | `    skillMetric: "Skill",` | 执行 app.js 中的这一行逻辑。 |
| 131 | `    mcpMetric: "MCP",` | 执行 app.js 中的这一行逻辑。 |
| 132 | `    rawMetric: "原文あり",` | 执行 app.js 中的这一行逻辑。 |
| 133 | `    enabledMcpMetric: "有効 MCP",` | 执行 app.js 中的这一行逻辑。 |
| 134 | `    skillTab: "Skill",` | 执行 app.js 中的这一行逻辑。 |
| 135 | `    mcpTab: "MCP",` | 执行 app.js 中的这一行逻辑。 |
| 136 | `    search: "検索",` | 执行 app.js 中的这一行逻辑。 |
| 137 | `    category: "分類",` | 执行 app.js 中的这一行逻辑。 |
| 138 | `    source: "出所",` | 执行 app.js 中的这一行逻辑。 |
| 139 | `    sort: "並び替え",` | 执行 app.js 中的这一行逻辑。 |
| 140 | `    skillList: "Skill 一覧",` | 执行 app.js 中的这一行逻辑。 |
| 141 | `    mcpList: "MCP 設定一覧",` | 执行 app.js 中的这一行逻辑。 |
| 142 | `    selectedSkill: "選択中の Skill",` | 执行 app.js 中的这一行逻辑。 |
| 143 | `    selectedMcp: "選択中の MCP",` | 执行 app.js 中的这一行逻辑。 |
| 144 | `    essence: "本質",` | 执行 app.js 中的这一行逻辑。 |
| 145 | `    path: "パス",` | 执行 app.js 中的这一行逻辑。 |
| 146 | `    frontmatter: "frontmatter / メタ情報",` | 执行 app.js 中的这一行逻辑。 |
| 147 | `    rawSkill: "SKILL.md 原文",` | 执行 app.js 中的这一行逻辑。 |
| 148 | `    rawMcp: "MCP 原設定",` | 执行 app.js 中的这一行逻辑。 |
| 149 | `    original: "原文",` | 执行 app.js 中的这一行逻辑。 |
| 150 | `    translated: "翻訳",` | 执行 app.js 中的这一行逻辑。 |
| 151 | `    copyRaw: "コピー",` | 执行 app.js 中的这一行逻辑。 |
| 152 | `    copied: "コピー済み",` | 执行 app.js 中的这一行逻辑。 |
| 153 | `    translationStatus: "翻訳はローカル内蔵用語集で生成され、Markdown 構造を保ち、モデルやネットワークを呼びません。",` | 执行 app.js 中的这一行逻辑。 |
| 154 | `    translating: "翻訳中...",` | 执行 app.js 中的这一行逻辑。 |
| 155 | `    translatedByDictionary: "ローカル内蔵 Skill 用語集で補助翻訳しました。モデルやネットワークは呼びません。",` | 执行 app.js 中的这一行逻辑。 |
| 156 | `    noSelection: "項目を選択",` | 执行 app.js 中的这一行逻辑。 |
| 157 | `    noSelectionHelp: "左の項目をクリックして原文を確認します。",` | 执行 app.js 中的这一行逻辑。 |
| 158 | `  },` | 执行 app.js 中的这一行逻辑。 |
| 159 | `  ko: {` | 执行 app.js 中的这一行逻辑。 |
| 160 | `    subtitle: "이 컴퓨터의 Codex / Claude Skill 원문과 MCP 설정을 확인합니다.",` | 执行 app.js 中的这一行逻辑。 |
| 161 | `    chooseSkillDir: "Skill 폴더 선택",` | 执行 app.js 中的这一行逻辑。 |
| 162 | `    chooseMcpConfig: "MCP 설정 선택",` | 执行 app.js 中的这一行逻辑。 |
| 163 | `    importSnapshot: "스냅샷 가져오기",` | 执行 app.js 中的这一行逻辑。 |
| 164 | `    exportJson: "JSON 내보내기",` | 执行 app.js 中的这一行逻辑。 |
| 165 | `    snapshotLoading: "로컬 스냅샷 읽는 중",` | 执行 app.js 中的这一行逻辑。 |
| 166 | `    snapshotHelp: "스캐너를 실행하거나 폴더/설정 파일을 직접 선택하세요.",` | 执行 app.js 中的这一行逻辑。 |
| 167 | `    skillMetric: "Skill",` | 执行 app.js 中的这一行逻辑。 |
| 168 | `    mcpMetric: "MCP",` | 执行 app.js 中的这一行逻辑。 |
| 169 | `    rawMetric: "원문 포함",` | 执行 app.js 中的这一行逻辑。 |
| 170 | `    enabledMcpMetric: "활성 MCP",` | 执行 app.js 中的这一行逻辑。 |
| 171 | `    skillTab: "Skill",` | 执行 app.js 中的这一行逻辑。 |
| 172 | `    mcpTab: "MCP",` | 执行 app.js 中的这一行逻辑。 |
| 173 | `    search: "검색",` | 执行 app.js 中的这一行逻辑。 |
| 174 | `    category: "분류",` | 执行 app.js 中的这一行逻辑。 |
| 175 | `    source: "출처",` | 执行 app.js 中的这一行逻辑。 |
| 176 | `    sort: "정렬",` | 执行 app.js 中的这一行逻辑。 |
| 177 | `    skillList: "Skill 목록",` | 执行 app.js 中的这一行逻辑。 |
| 178 | `    mcpList: "MCP 설정 목록",` | 执行 app.js 中的这一行逻辑。 |
| 179 | `    selectedSkill: "선택한 Skill",` | 执行 app.js 中的这一行逻辑。 |
| 180 | `    selectedMcp: "선택한 MCP",` | 执行 app.js 中的这一行逻辑。 |
| 181 | `    essence: "본질",` | 执行 app.js 中的这一行逻辑。 |
| 182 | `    path: "경로",` | 执行 app.js 中的这一行逻辑。 |
| 183 | `    frontmatter: "frontmatter / 메타데이터",` | 执行 app.js 中的这一行逻辑。 |
| 184 | `    rawSkill: "SKILL.md 원문",` | 执行 app.js 中的这一行逻辑。 |
| 185 | `    rawMcp: "MCP 원본 설정",` | 执行 app.js 中的这一行逻辑。 |
| 186 | `    original: "원문",` | 执行 app.js 中的这一行逻辑。 |
| 187 | `    translated: "번역",` | 执行 app.js 中的这一行逻辑。 |
| 188 | `    copyRaw: "복사",` | 执行 app.js 中的这一行逻辑。 |
| 189 | `    copied: "복사됨",` | 执行 app.js 中的这一行逻辑。 |
| 190 | `    translationStatus: "번역은 로컬 내장 용어집으로 생성되며 Markdown 구조를 유지하고 모델이나 네트워크를 호출하지 않습니다.",` | 执行 app.js 中的这一行逻辑。 |
| 191 | `    translating: "번역 중...",` | 执行 app.js 中的这一行逻辑。 |
| 192 | `    translatedByDictionary: "로컬 내장 Skill 용어집으로 보조 번역했습니다. 모델이나 네트워크를 호출하지 않습니다.",` | 执行 app.js 中的这一行逻辑。 |
| 193 | `    noSelection: "항목 선택",` | 执行 app.js 中的这一行逻辑。 |
| 194 | `    noSelectionHelp: "왼쪽 항목을 클릭해 원본 내용을 확인하세요.",` | 执行 app.js 中的这一行逻辑。 |
| 195 | `  },` | 执行 app.js 中的这一行逻辑。 |
| 196 | `  fr: {` | 执行 app.js 中的这一行逻辑。 |
| 197 | `    subtitle: "Inspecte les Skills Codex / Claude et la configuration MCP de cet ordinateur.",` | 执行 app.js 中的这一行逻辑。 |
| 198 | `    chooseSkillDir: "Dossier Skill",` | 执行 app.js 中的这一行逻辑。 |
| 199 | `    chooseMcpConfig: "Config MCP",` | 执行 app.js 中的这一行逻辑。 |
| 200 | `    importSnapshot: "Importer",` | 执行 app.js 中的这一行逻辑。 |
| 201 | `    exportJson: "Exporter JSON",` | 执行 app.js 中的这一行逻辑。 |
| 202 | `    snapshotLoading: "Lecture locale",` | 执行 app.js 中的这一行逻辑。 |
| 203 | `    snapshotHelp: "Lancez le scanner ou choisissez un dossier/fichier de configuration.",` | 执行 app.js 中的这一行逻辑。 |
| 204 | `    skillMetric: "Skills",` | 执行 app.js 中的这一行逻辑。 |
| 205 | `    mcpMetric: "MCP",` | 执行 app.js 中的这一行逻辑。 |
| 206 | `    rawMetric: "Sources",` | 执行 app.js 中的这一行逻辑。 |
| 207 | `    enabledMcpMetric: "MCP actifs",` | 执行 app.js 中的这一行逻辑。 |
| 208 | `    skillTab: "Skill",` | 执行 app.js 中的这一行逻辑。 |
| 209 | `    mcpTab: "MCP",` | 执行 app.js 中的这一行逻辑。 |
| 210 | `    search: "Recherche",` | 执行 app.js 中的这一行逻辑。 |
| 211 | `    category: "Catégorie",` | 执行 app.js 中的这一行逻辑。 |
| 212 | `    source: "Source",` | 执行 app.js 中的这一行逻辑。 |
| 213 | `    sort: "Tri",` | 执行 app.js 中的这一行逻辑。 |
| 214 | `    skillList: "Liste des Skills",` | 执行 app.js 中的这一行逻辑。 |
| 215 | `    mcpList: "Configurations MCP",` | 执行 app.js 中的这一行逻辑。 |
| 216 | `    selectedSkill: "Skill sélectionné",` | 执行 app.js 中的这一行逻辑。 |
| 217 | `    selectedMcp: "MCP sélectionné",` | 执行 app.js 中的这一行逻辑。 |
| 218 | `    essence: "Essence",` | 执行 app.js 中的这一行逻辑。 |
| 219 | `    path: "Chemin",` | 执行 app.js 中的这一行逻辑。 |
| 220 | `    frontmatter: "frontmatter / métadonnées",` | 执行 app.js 中的这一行逻辑。 |
| 221 | `    rawSkill: "Source SKILL.md",` | 执行 app.js 中的这一行逻辑。 |
| 222 | `    rawMcp: "Configuration MCP brute",` | 执行 app.js 中的这一行逻辑。 |
| 223 | `    original: "Original",` | 执行 app.js 中的这一行逻辑。 |
| 224 | `    translated: "Traduction",` | 执行 app.js 中的这一行逻辑。 |
| 225 | `    copyRaw: "Copier",` | 执行 app.js 中的这一行逻辑。 |
| 226 | `    copied: "Copié",` | 执行 app.js 中的这一行逻辑。 |
| 227 | `    translationStatus: "La traduction utilise le glossaire local intégré, garde Markdown et n'appelle aucun modèle ni réseau.",` | 执行 app.js 中的这一行逻辑。 |
| 228 | `    translating: "Traduction...",` | 执行 app.js 中的这一行逻辑。 |
| 229 | `    translatedByDictionary: "Généré avec le glossaire Skill local intégré. Aucun modèle ni appel réseau.",` | 执行 app.js 中的这一行逻辑。 |
| 230 | `    noSelection: "Choisir un élément",` | 执行 app.js 中的这一行逻辑。 |
| 231 | `    noSelectionHelp: "Cliquez un élément à gauche pour lire son contenu brut.",` | 执行 app.js 中的这一行逻辑。 |
| 232 | `  },` | 执行 app.js 中的这一行逻辑。 |
| 233 | `  de: {` | 执行 app.js 中的这一行逻辑。 |
| 234 | `    subtitle: "Prüft Codex-/Claude-Skills und MCP-Konfiguration auf diesem Computer.",` | 执行 app.js 中的这一行逻辑。 |
| 235 | `    chooseSkillDir: "Skill-Ordner",` | 执行 app.js 中的这一行逻辑。 |
| 236 | `    chooseMcpConfig: "MCP-Konfig",` | 执行 app.js 中的这一行逻辑。 |
| 237 | `    importSnapshot: "Snapshot importieren",` | 执行 app.js 中的这一行逻辑。 |
| 238 | `    exportJson: "JSON exportieren",` | 执行 app.js 中的这一行逻辑。 |
| 239 | `    snapshotLoading: "Lokalen Snapshot lesen",` | 执行 app.js 中的这一行逻辑。 |
| 240 | `    snapshotHelp: "Scanner ausführen oder Ordner/Konfiguration manuell wählen.",` | 执行 app.js 中的这一行逻辑。 |
| 241 | `    skillMetric: "Skills",` | 执行 app.js 中的这一行逻辑。 |
| 242 | `    mcpMetric: "MCP",` | 执行 app.js 中的这一行逻辑。 |
| 243 | `    rawMetric: "Quellen",` | 执行 app.js 中的这一行逻辑。 |
| 244 | `    enabledMcpMetric: "Aktive MCP",` | 执行 app.js 中的这一行逻辑。 |
| 245 | `    skillTab: "Skill",` | 执行 app.js 中的这一行逻辑。 |
| 246 | `    mcpTab: "MCP",` | 执行 app.js 中的这一行逻辑。 |
| 247 | `    search: "Suche",` | 执行 app.js 中的这一行逻辑。 |
| 248 | `    category: "Kategorie",` | 执行 app.js 中的这一行逻辑。 |
| 249 | `    source: "Quelle",` | 执行 app.js 中的这一行逻辑。 |
| 250 | `    sort: "Sortierung",` | 执行 app.js 中的这一行逻辑。 |
| 251 | `    skillList: "Skill-Liste",` | 执行 app.js 中的这一行逻辑。 |
| 252 | `    mcpList: "MCP-Konfigurationen",` | 执行 app.js 中的这一行逻辑。 |
| 253 | `    selectedSkill: "Ausgewählter Skill",` | 执行 app.js 中的这一行逻辑。 |
| 254 | `    selectedMcp: "Ausgewähltes MCP",` | 执行 app.js 中的这一行逻辑。 |
| 255 | `    essence: "Kern",` | 执行 app.js 中的这一行逻辑。 |
| 256 | `    path: "Pfad",` | 执行 app.js 中的这一行逻辑。 |
| 257 | `    frontmatter: "frontmatter / Metadaten",` | 执行 app.js 中的这一行逻辑。 |
| 258 | `    rawSkill: "SKILL.md-Quelle",` | 执行 app.js 中的这一行逻辑。 |
| 259 | `    rawMcp: "MCP-Rohkonfig",` | 执行 app.js 中的这一行逻辑。 |
| 260 | `    original: "Original",` | 执行 app.js 中的这一行逻辑。 |
| 261 | `    translated: "Übersetzung",` | 执行 app.js 中的这一行逻辑。 |
| 262 | `    copyRaw: "Kopieren",` | 执行 app.js 中的这一行逻辑。 |
| 263 | `    copied: "Kopiert",` | 执行 app.js 中的这一行逻辑。 |
| 264 | `    translationStatus: "Die Übersetzung nutzt das lokale integrierte Glossar, behält Markdown bei und ruft kein Modell oder Netzwerk auf.",` | 执行 app.js 中的这一行逻辑。 |
| 265 | `    translating: "Übersetzen...",` | 执行 app.js 中的这一行逻辑。 |
| 266 | `    translatedByDictionary: "Mit lokalem integriertem Skill-Glossar erzeugt. Kein Modell- oder Netzwerkaufruf.",` | 执行 app.js 中的这一行逻辑。 |
| 267 | `    noSelection: "Eintrag wählen",` | 执行 app.js 中的这一行逻辑。 |
| 268 | `    noSelectionHelp: "Links einen Eintrag anklicken, um den Rohinhalt zu sehen.",` | 执行 app.js 中的这一行逻辑。 |
| 269 | `  },` | 执行 app.js 中的这一行逻辑。 |
| 270 | `  es: {` | 执行 app.js 中的这一行逻辑。 |
| 271 | `    subtitle: "Inspecciona Skills de Codex / Claude y configuración MCP en este equipo.",` | 执行 app.js 中的这一行逻辑。 |
| 272 | `    chooseSkillDir: "Carpeta Skill",` | 执行 app.js 中的这一行逻辑。 |
| 273 | `    chooseMcpConfig: "Config MCP",` | 执行 app.js 中的这一行逻辑。 |
| 274 | `    importSnapshot: "Importar",` | 执行 app.js 中的这一行逻辑。 |
| 275 | `    exportJson: "Exportar JSON",` | 执行 app.js 中的这一行逻辑。 |
| 276 | `    snapshotLoading: "Leyendo equipo local",` | 执行 app.js 中的这一行逻辑。 |
| 277 | `    snapshotHelp: "Ejecuta el escáner o elige una carpeta/archivo de configuración.",` | 执行 app.js 中的这一行逻辑。 |
| 278 | `    skillMetric: "Skills",` | 执行 app.js 中的这一行逻辑。 |
| 279 | `    mcpMetric: "MCP",` | 执行 app.js 中的这一行逻辑。 |
| 280 | `    rawMetric: "Fuentes",` | 执行 app.js 中的这一行逻辑。 |
| 281 | `    enabledMcpMetric: "MCP activos",` | 执行 app.js 中的这一行逻辑。 |
| 282 | `    skillTab: "Skill",` | 执行 app.js 中的这一行逻辑。 |
| 283 | `    mcpTab: "MCP",` | 执行 app.js 中的这一行逻辑。 |
| 284 | `    search: "Buscar",` | 执行 app.js 中的这一行逻辑。 |
| 285 | `    category: "Categoría",` | 执行 app.js 中的这一行逻辑。 |
| 286 | `    source: "Fuente",` | 执行 app.js 中的这一行逻辑。 |
| 287 | `    sort: "Ordenar",` | 执行 app.js 中的这一行逻辑。 |
| 288 | `    skillList: "Lista de Skills",` | 执行 app.js 中的这一行逻辑。 |
| 289 | `    mcpList: "Configuraciones MCP",` | 执行 app.js 中的这一行逻辑。 |
| 290 | `    selectedSkill: "Skill seleccionado",` | 执行 app.js 中的这一行逻辑。 |
| 291 | `    selectedMcp: "MCP seleccionado",` | 执行 app.js 中的这一行逻辑。 |
| 292 | `    essence: "Esencia",` | 执行 app.js 中的这一行逻辑。 |
| 293 | `    path: "Ruta",` | 执行 app.js 中的这一行逻辑。 |
| 294 | `    frontmatter: "frontmatter / metadatos",` | 执行 app.js 中的这一行逻辑。 |
| 295 | `    rawSkill: "Fuente SKILL.md",` | 执行 app.js 中的这一行逻辑。 |
| 296 | `    rawMcp: "Config MCP original",` | 执行 app.js 中的这一行逻辑。 |
| 297 | `    original: "Original",` | 执行 app.js 中的这一行逻辑。 |
| 298 | `    translated: "Traducción",` | 执行 app.js 中的这一行逻辑。 |
| 299 | `    copyRaw: "Copiar",` | 执行 app.js 中的这一行逻辑。 |
| 300 | `    copied: "Copiado",` | 执行 app.js 中的这一行逻辑。 |
| 301 | `    translationStatus: "La traducción usa el glosario local integrado, conserva Markdown y no llama a modelos ni a la red.",` | 执行 app.js 中的这一行逻辑。 |
| 302 | `    translating: "Traduciendo...",` | 执行 app.js 中的这一行逻辑。 |
| 303 | `    translatedByDictionary: "Generado con el glosario local de Skill. Sin llamadas a modelos ni a la red.",` | 执行 app.js 中的这一行逻辑。 |
| 304 | `    noSelection: "Selecciona un elemento",` | 执行 app.js 中的这一行逻辑。 |
| 305 | `    noSelectionHelp: "Haz clic en un elemento de la izquierda para ver el contenido original.",` | 执行 app.js 中的这一行逻辑。 |
| 306 | `  },` | 执行 app.js 中的这一行逻辑。 |
| 307 | `  pt: {` | 执行 app.js 中的这一行逻辑。 |
| 308 | `    subtitle: "Inspeciona Skills do Codex / Claude e configuração MCP neste computador.",` | 执行 app.js 中的这一行逻辑。 |
| 309 | `    chooseSkillDir: "Pasta Skill",` | 执行 app.js 中的这一行逻辑。 |
| 310 | `    chooseMcpConfig: "Config MCP",` | 执行 app.js 中的这一行逻辑。 |
| 311 | `    importSnapshot: "Importar",` | 执行 app.js 中的这一行逻辑。 |
| 312 | `    exportJson: "Exportar JSON",` | 执行 app.js 中的这一行逻辑。 |
| 313 | `    snapshotLoading: "Lendo dados locais",` | 执行 app.js 中的这一行逻辑。 |
| 314 | `    snapshotHelp: "Execute o scanner ou escolha uma pasta/arquivo de configuração.",` | 执行 app.js 中的这一行逻辑。 |
| 315 | `    skillMetric: "Skills",` | 执行 app.js 中的这一行逻辑。 |
| 316 | `    mcpMetric: "MCP",` | 执行 app.js 中的这一行逻辑。 |
| 317 | `    rawMetric: "Fontes",` | 执行 app.js 中的这一行逻辑。 |
| 318 | `    enabledMcpMetric: "MCP ativos",` | 执行 app.js 中的这一行逻辑。 |
| 319 | `    skillTab: "Skill",` | 执行 app.js 中的这一行逻辑。 |
| 320 | `    mcpTab: "MCP",` | 执行 app.js 中的这一行逻辑。 |
| 321 | `    search: "Buscar",` | 执行 app.js 中的这一行逻辑。 |
| 322 | `    category: "Categoria",` | 执行 app.js 中的这一行逻辑。 |
| 323 | `    source: "Origem",` | 执行 app.js 中的这一行逻辑。 |
| 324 | `    sort: "Ordenar",` | 执行 app.js 中的这一行逻辑。 |
| 325 | `    skillList: "Lista de Skills",` | 执行 app.js 中的这一行逻辑。 |
| 326 | `    mcpList: "Configurações MCP",` | 执行 app.js 中的这一行逻辑。 |
| 327 | `    selectedSkill: "Skill selecionado",` | 执行 app.js 中的这一行逻辑。 |
| 328 | `    selectedMcp: "MCP selecionado",` | 执行 app.js 中的这一行逻辑。 |
| 329 | `    essence: "Essência",` | 执行 app.js 中的这一行逻辑。 |
| 330 | `    path: "Caminho",` | 执行 app.js 中的这一行逻辑。 |
| 331 | `    frontmatter: "frontmatter / metadados",` | 执行 app.js 中的这一行逻辑。 |
| 332 | `    rawSkill: "Fonte SKILL.md",` | 执行 app.js 中的这一行逻辑。 |
| 333 | `    rawMcp: "Config MCP bruta",` | 执行 app.js 中的这一行逻辑。 |
| 334 | `    original: "Original",` | 执行 app.js 中的这一行逻辑。 |
| 335 | `    translated: "Tradução",` | 执行 app.js 中的这一行逻辑。 |
| 336 | `    copyRaw: "Copiar",` | 执行 app.js 中的这一行逻辑。 |
| 337 | `    copied: "Copiado",` | 执行 app.js 中的这一行逻辑。 |
| 338 | `    translationStatus: "A tradução usa o glossário local integrado, mantém Markdown e não chama modelos nem a rede.",` | 执行 app.js 中的这一行逻辑。 |
| 339 | `    translating: "Traduzindo...",` | 执行 app.js 中的这一行逻辑。 |
| 340 | `    translatedByDictionary: "Gerado com o glossário local de Skill. Sem chamadas a modelos ou rede.",` | 执行 app.js 中的这一行逻辑。 |
| 341 | `    noSelection: "Selecione um item",` | 执行 app.js 中的这一行逻辑。 |
| 342 | `    noSelectionHelp: "Clique em um item à esquerda para ver o conteúdo bruto.",` | 执行 app.js 中的这一行逻辑。 |
| 343 | `  },` | 执行 app.js 中的这一行逻辑。 |
| 344 | `  ru: {` | 执行 app.js 中的这一行逻辑。 |
| 345 | `    subtitle: "Просмотр исходных Skill Codex / Claude и MCP-конфигурации на этом компьютере.",` | 执行 app.js 中的这一行逻辑。 |
| 346 | `    chooseSkillDir: "Папка Skill",` | 执行 app.js 中的这一行逻辑。 |
| 347 | `    chooseMcpConfig: "MCP config",` | 执行 app.js 中的这一行逻辑。 |
| 348 | `    importSnapshot: "Импорт",` | 执行 app.js 中的这一行逻辑。 |
| 349 | `    exportJson: "Экспорт JSON",` | 执行 app.js 中的这一行逻辑。 |
| 350 | `    snapshotLoading: "Чтение локальных данных",` | 执行 app.js 中的这一行逻辑。 |
| 351 | `    snapshotHelp: "Запустите сканер или выберите папку/файл конфигурации.",` | 执行 app.js 中的这一行逻辑。 |
| 352 | `    skillMetric: "Skills",` | 执行 app.js 中的这一行逻辑。 |
| 353 | `    mcpMetric: "MCP",` | 执行 app.js 中的这一行逻辑。 |
| 354 | `    rawMetric: "Исходники",` | 执行 app.js 中的这一行逻辑。 |
| 355 | `    enabledMcpMetric: "Активные MCP",` | 执行 app.js 中的这一行逻辑。 |
| 356 | `    skillTab: "Skill",` | 执行 app.js 中的这一行逻辑。 |
| 357 | `    mcpTab: "MCP",` | 执行 app.js 中的这一行逻辑。 |
| 358 | `    search: "Поиск",` | 执行 app.js 中的这一行逻辑。 |
| 359 | `    category: "Категория",` | 执行 app.js 中的这一行逻辑。 |
| 360 | `    source: "Источник",` | 执行 app.js 中的这一行逻辑。 |
| 361 | `    sort: "Сортировка",` | 执行 app.js 中的这一行逻辑。 |
| 362 | `    skillList: "Список Skills",` | 执行 app.js 中的这一行逻辑。 |
| 363 | `    mcpList: "MCP конфигурации",` | 执行 app.js 中的这一行逻辑。 |
| 364 | `    selectedSkill: "Выбранный Skill",` | 执行 app.js 中的这一行逻辑。 |
| 365 | `    selectedMcp: "Выбранный MCP",` | 执行 app.js 中的这一行逻辑。 |
| 366 | `    essence: "Суть",` | 执行 app.js 中的这一行逻辑。 |
| 367 | `    path: "Путь",` | 执行 app.js 中的这一行逻辑。 |
| 368 | `    frontmatter: "frontmatter / метаданные",` | 执行 app.js 中的这一行逻辑。 |
| 369 | `    rawSkill: "Исходный SKILL.md",` | 执行 app.js 中的这一行逻辑。 |
| 370 | `    rawMcp: "Сырая MCP config",` | 执行 app.js 中的这一行逻辑。 |
| 371 | `    original: "Оригинал",` | 执行 app.js 中的这一行逻辑。 |
| 372 | `    translated: "Перевод",` | 执行 app.js 中的这一行逻辑。 |
| 373 | `    copyRaw: "Копировать",` | 执行 app.js 中的这一行逻辑。 |
| 374 | `    copied: "Скопировано",` | 执行 app.js 中的这一行逻辑。 |
| 375 | `    translationStatus: "Перевод создается локальным встроенным глоссарием, сохраняет Markdown и не вызывает модели или сеть.",` | 执行 app.js 中的这一行逻辑。 |
| 376 | `    translating: "Перевод...",` | 执行 app.js 中的这一行逻辑。 |
| 377 | `    translatedByDictionary: "Создано локальным встроенным глоссарием Skill. Без вызова модели или сети.",` | 执行 app.js 中的这一行逻辑。 |
| 378 | `    noSelection: "Выберите элемент",` | 执行 app.js 中的这一行逻辑。 |
| 379 | `    noSelectionHelp: "Нажмите элемент слева, чтобы увидеть исходный текст.",` | 执行 app.js 中的这一行逻辑。 |
| 380 | `  },` | 执行 app.js 中的这一行逻辑。 |
| 381 | `  ar: {` | 执行 app.js 中的这一行逻辑。 |
| 382 | `    subtitle: "افحص نصوص Codex / Claude Skill وإعدادات MCP على هذا الجهاز.",` | 执行 app.js 中的这一行逻辑。 |
| 383 | `    chooseSkillDir: "مجلد Skill",` | 执行 app.js 中的这一行逻辑。 |
| 384 | `    chooseMcpConfig: "إعداد MCP",` | 执行 app.js 中的这一行逻辑。 |
| 385 | `    importSnapshot: "استيراد",` | 执行 app.js 中的这一行逻辑。 |
| 386 | `    exportJson: "تصدير JSON",` | 执行 app.js 中的这一行逻辑。 |
| 387 | `    snapshotLoading: "قراءة البيانات المحلية",` | 执行 app.js 中的这一行逻辑。 |
| 388 | `    snapshotHelp: "شغّل الماسح أو اختر مجلدا/ملف إعدادات.",` | 执行 app.js 中的这一行逻辑。 |
| 389 | `    skillMetric: "Skill",` | 执行 app.js 中的这一行逻辑。 |
| 390 | `    mcpMetric: "MCP",` | 执行 app.js 中的这一行逻辑。 |
| 391 | `    rawMetric: "النصوص الأصلية",` | 执行 app.js 中的这一行逻辑。 |
| 392 | `    enabledMcpMetric: "MCP مفعّل",` | 执行 app.js 中的这一行逻辑。 |
| 393 | `    skillTab: "Skill",` | 执行 app.js 中的这一行逻辑。 |
| 394 | `    mcpTab: "MCP",` | 执行 app.js 中的这一行逻辑。 |
| 395 | `    search: "بحث",` | 执行 app.js 中的这一行逻辑。 |
| 396 | `    category: "الفئة",` | 执行 app.js 中的这一行逻辑。 |
| 397 | `    source: "المصدر",` | 执行 app.js 中的这一行逻辑。 |
| 398 | `    sort: "ترتيب",` | 执行 app.js 中的这一行逻辑。 |
| 399 | `    skillList: "قائمة Skill",` | 执行 app.js 中的这一行逻辑。 |
| 400 | `    mcpList: "إعدادات MCP",` | 执行 app.js 中的这一行逻辑。 |
| 401 | `    selectedSkill: "Skill المحدد",` | 执行 app.js 中的这一行逻辑。 |
| 402 | `    selectedMcp: "MCP المحدد",` | 执行 app.js 中的这一行逻辑。 |
| 403 | `    essence: "الجوهر",` | 执行 app.js 中的这一行逻辑。 |
| 404 | `    path: "المسار",` | 执行 app.js 中的这一行逻辑。 |
| 405 | `    frontmatter: "frontmatter / بيانات وصفية",` | 执行 app.js 中的这一行逻辑。 |
| 406 | `    rawSkill: "نص SKILL.md",` | 执行 app.js 中的这一行逻辑。 |
| 407 | `    rawMcp: "إعداد MCP الأصلي",` | 执行 app.js 中的这一行逻辑。 |
| 408 | `    original: "الأصل",` | 执行 app.js 中的这一行逻辑。 |
| 409 | `    translated: "ترجمة",` | 执行 app.js 中的这一行逻辑。 |
| 410 | `    copyRaw: "نسخ",` | 执行 app.js 中的这一行逻辑。 |
| 411 | `    copied: "تم النسخ",` | 执行 app.js 中的这一行逻辑。 |
| 412 | `    translationStatus: "تستخدم الترجمة القاموس المحلي المدمج وتحافظ على Markdown ولا تستدعي نموذجا أو شبكة.",` | 执行 app.js 中的这一行逻辑。 |
| 413 | `    translating: "جار الترجمة...",` | 执行 app.js 中的这一行逻辑。 |
| 414 | `    translatedByDictionary: "تم الإنشاء بقاموس Skill المحلي المدمج، دون استدعاء نموذج أو شبكة.",` | 执行 app.js 中的这一行逻辑。 |
| 415 | `    noSelection: "اختر عنصرا",` | 执行 app.js 中的这一行逻辑。 |
| 416 | `    noSelectionHelp: "انقر عنصرا من اليسار لعرض النص الأصلي.",` | 执行 app.js 中的这一行逻辑。 |
| 417 | `  },` | 执行 app.js 中的这一行逻辑。 |
| 418 | `});` | 结束当前代码块或数据结构。 |
| 419 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 420 | `const defaultPresetPaths = [` | 声明一个不会被重新赋值的常量。 |
| 421 | `  "%USERPROFILE%\\\\.codex\\\\skills",` | 执行 app.js 中的这一行逻辑。 |
| 422 | `  "%USERPROFILE%\\\\.codex\\\\plugins\\\\cache",` | 执行 app.js 中的这一行逻辑。 |
| 423 | `  "%USERPROFILE%\\\\.codex\\\\config.toml",` | 执行 app.js 中的这一行逻辑。 |
| 424 | `  "%USERPROFILE%\\\\.claude\\\\skills",` | 执行 app.js 中的这一行逻辑。 |
| 425 | `  "%APPDATA%\\\\Claude\\\\claude_desktop_config.json",` | 执行 app.js 中的这一行逻辑。 |
| 426 | `  "~/.claude/settings.json",` | 执行 app.js 中的这一行逻辑。 |
| 427 | `  ".mcp.json",` | 执行 app.js 中的这一行逻辑。 |
| 428 | `];` | 结束当前代码块或数据结构。 |
| 429 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 430 | `function getInitialLanguage() {` | 定义一个可复用函数。 |
| 431 | `  const saved = localStorage.getItem("seethrough-skill:language");` | 声明一个不会被重新赋值的常量。 |
| 432 | `  if (saved && languageNames[saved]) return saved;` | 根据条件决定是否执行后续代码。 |
| 433 | `  const browserLanguage = navigator.language \|\| "zh-CN";` | 声明一个不会被重新赋值的常量。 |
| 434 | `  if (languageNames[browserLanguage]) return browserLanguage;` | 根据条件决定是否执行后续代码。 |
| 435 | `  const shortLanguage = browserLanguage.split("-")[0];` | 声明一个不会被重新赋值的常量。 |
| 436 | `  return languageNames[shortLanguage] ? shortLanguage : "zh-CN";` | 返回当前函数的结果。 |
| 437 | `}` | 结束当前代码块或数据结构。 |
| 438 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 439 | `function t(key) {` | 定义一个可复用函数。 |
| 440 | `  const table = uiText[uiLanguage] \|\| uiText[languageFallbacks[uiLanguage]] \|\| uiText.en;` | 声明一个不会被重新赋值的常量。 |
| 441 | `  return table[key] \|\| uiText.en[key] \|\| uiText["zh-CN"][key] \|\| key;` | 返回当前函数的结果。 |
| 442 | `}` | 结束当前代码块或数据结构。 |
| 443 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 444 | `function applyI18n() {` | 定义一个可复用函数。 |
| 445 | `  document.documentElement.lang = uiLanguage;` | 执行 app.js 中的这一行逻辑。 |
| 446 | `  document.documentElement.dir = uiLanguage === "ar" ? "rtl" : "ltr";` | 执行 app.js 中的这一行逻辑。 |
| 447 | `  document.querySelector(".subtitle").textContent = t("subtitle");` | 用 CSS 选择器查找页面元素。 |
| 448 | `  document.getElementById("chooseDirectoryBtn").textContent = t("chooseSkillDir");` | 按 id 获取页面元素并操作它。 |
| 449 | `  document.getElementById("loadConfigBtn").textContent = t("chooseMcpConfig");` | 按 id 获取页面元素并操作它。 |
| 450 | `  document.getElementById("loadSnapshotBtn").textContent = t("importSnapshot");` | 按 id 获取页面元素并操作它。 |
| 451 | `  document.getElementById("exportBtn").textContent = t("exportJson");` | 按 id 获取页面元素并操作它。 |
| 452 | `  document.getElementById("languageSelect").value = uiLanguage;` | 按 id 获取页面元素并操作它。 |
| 453 | `  document.querySelectorAll(".metric span")[0].textContent = t("skillMetric");` | 用 CSS 选择器查找页面元素。 |
| 454 | `  document.querySelectorAll(".metric span")[1].textContent = t("mcpMetric");` | 用 CSS 选择器查找页面元素。 |
| 455 | `  document.querySelectorAll(".metric span")[2].textContent = t("rawMetric");` | 用 CSS 选择器查找页面元素。 |
| 456 | `  document.querySelectorAll(".metric span")[3].textContent = t("enabledMcpMetric");` | 用 CSS 选择器查找页面元素。 |
| 457 | `  document.getElementById("skillsTab").textContent = t("skillTab");` | 按 id 获取页面元素并操作它。 |
| 458 | `  document.getElementById("mcpTab").textContent = t("mcpTab");` | 按 id 获取页面元素并操作它。 |
| 459 | `  document.querySelector("label[for=searchInput]").textContent = t("search");` | 用 CSS 选择器查找页面元素。 |
| 460 | `  document.querySelectorAll(".filter-block h2")[0].textContent = t("category");` | 用 CSS 选择器查找页面元素。 |
| 461 | `  document.querySelectorAll(".filter-block h2")[1].textContent = t("source");` | 用 CSS 选择器查找页面元素。 |
| 462 | `  document.querySelectorAll(".filter-block h2")[2].textContent = t("sort");` | 用 CSS 选择器查找页面元素。 |
| 463 | `  document.getElementById("detailExtraLabel")?.remove();` | 按 id 获取页面元素并操作它。 |
| 464 | `  document.querySelectorAll(".detail-grid dt")[0].textContent = t("essence");` | 用 CSS 选择器查找页面元素。 |
| 465 | `  document.querySelectorAll(".detail-grid dt")[1].textContent = t("category");` | 用 CSS 选择器查找页面元素。 |
| 466 | `  document.querySelectorAll(".detail-grid dt")[2].textContent = t("source");` | 用 CSS 选择器查找页面元素。 |
| 467 | `  document.querySelectorAll(".detail-grid dt")[3].textContent = t("path");` | 用 CSS 选择器查找页面元素。 |
| 468 | `  document.querySelector("#frontmatterSection h3").textContent = t("frontmatter");` | 用 CSS 选择器查找页面元素。 |
| 469 | `  document.getElementById("rawOriginalBtn").textContent = t("original");` | 按 id 获取页面元素并操作它。 |
| 470 | `  document.getElementById("rawTranslatedBtn").textContent = t("translated");` | 按 id 获取页面元素并操作它。 |
| 471 | `  document.getElementById("copyRawBtn").textContent = t("copyRaw");` | 按 id 获取页面元素并操作它。 |
| 472 | `  document.getElementById("translationStatus").textContent = t("translationStatus");` | 按 id 获取页面元素并操作它。 |
| 473 | `}` | 结束当前代码块或数据结构。 |
| 474 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 475 | `const skillCategoryRules = [` | 声明一个不会被重新赋值的常量。 |
| 476 | `  ["前端/浏览器", /frontend\|browser\|chrome\|playwright\|screenshot\|figma\|ui\|ux\|design\|canvas/i],` | 执行 app.js 中的这一行逻辑。 |
| 477 | `  ["文档/办公", /doc\|document\|office\|word\|pdf\|ppt\|slide\|presentation\|excel\|sheet\|xlsx\|pandoc/i],` | 执行 app.js 中的这一行逻辑。 |
| 478 | `  ["代码工程", /code\|coding\|testing\|tdd\|review\|patterns\|api\|backend\|frontend\|python\|java\|react\|node\|docker\|database\|deploy/i],` | 执行 app.js 中的这一行逻辑。 |
| 479 | `  ["研究/知识", /research\|literature\|academic\|pubmed\|retrieval\|knowledge\|market\|article\|writing/i],` | 执行 app.js 中的这一行逻辑。 |
| 480 | `  ["安全/审计", /security\|audit\|risk\|threat\|codeql\|insecure\|compliance\|hipaa\|constant-time/i],` | 执行 app.js 中的这一行逻辑。 |
| 481 | `  ["媒体/设计", /image\|photo\|photoshop\|video\|motion\|logo\|figma\|design\|retouch\|blender\|manim/i],` | 执行 app.js 中的这一行逻辑。 |
| 482 | `  ["自动化/工具", /mcp\|tool\|automation\|agent\|cli\|workflow\|ops\|browser\|desktop/i],` | 执行 app.js 中的这一行逻辑。 |
| 483 | `  ["业务/行业", /billing\|finance\|inventory\|logistics\|healthcare\|procurement\|customer\|trade\|energy/i],` | 执行 app.js 中的这一行逻辑。 |
| 484 | `];` | 结束当前代码块或数据结构。 |
| 485 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 486 | `const mcpCategoryRules = [` | 声明一个不会被重新赋值的常量。 |
| 487 | `  ["开发工具", /context7\|github\|serena\|codegraph\|node\|repl\|openai\|docs/i],` | 执行 app.js 中的这一行逻辑。 |
| 488 | `  ["浏览器/桌面", /browser\|chrome\|playwright\|desktop\|computer/i],` | 执行 app.js 中的这一行逻辑。 |
| 489 | `  ["文件/数据", /filesystem\|drive\|pdf\|sheets\|docs\|database\|memory/i],` | 执行 app.js 中的这一行逻辑。 |
| 490 | `  ["账号/云服务", /gmail\|google\|notion\|slack\|linear\|figma\|canva\|netdisk\|github/i],` | 执行 app.js 中的这一行逻辑。 |
| 491 | `  ["专业软件", /photoshop\|autocad\|biorender\|davinci\|drawio\|figma/i],` | 执行 app.js 中的这一行逻辑。 |
| 492 | `  ["研究检索", /search\|firecrawl\|exa\|arxiv\|pubmed\|zotero\|crossref/i],` | 执行 app.js 中的这一行逻辑。 |
| 493 | `];` | 结束当前代码块或数据结构。 |
| 494 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 495 | `function normalizeSnapshot(input) {` | 定义一个可复用函数。 |
| 496 | `  const data = input && typeof input === "object" ? input : {};` | 声明一个不会被重新赋值的常量。 |
| 497 | `  return {` | 返回当前函数的结果。 |
| 498 | `    ...emptySnapshot,` | 执行 app.js 中的这一行逻辑。 |
| 499 | `    ...data,` | 执行 app.js 中的这一行逻辑。 |
| 500 | `    skills: Array.isArray(data.skills) ? data.skills : [],` | 执行 app.js 中的这一行逻辑。 |
| 501 | `    mcpServers: Array.isArray(data.mcpServers) ? data.mcpServers : [],` | 执行 app.js 中的这一行逻辑。 |
| 502 | `    presetPaths: Array.isArray(data.presetPaths) ? data.presetPaths : [],` | 执行 app.js 中的这一行逻辑。 |
| 503 | `    globalSettings: data.globalSettings \|\| {},` | 执行 app.js 中的这一行逻辑。 |
| 504 | `  };` | 结束当前代码块或数据结构。 |
| 505 | `}` | 结束当前代码块或数据结构。 |
| 506 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 507 | `function skillItems() {` | 定义一个可复用函数。 |
| 508 | `  const groups = countBy(snapshot.skills.map((item) => skillName(item)));` | 声明一个不会被重新赋值的常量。 |
| 509 | `  return snapshot.skills.map((skill, index) => {` | 返回当前函数的结果。 |
| 510 | `    const name = skillName(skill);` | 声明一个不会被重新赋值的常量。 |
| 511 | `    const raw = skill.rawMarkdown \|\| skill.rawContent \|\| "";` | 声明一个不会被重新赋值的常量。 |
| 512 | `    const description = skill.description \|\| skill.frontmatter?.description \|\| firstMarkdownHeading(raw) \|\| "";` | 声明一个不会被重新赋值的常量。 |
| 513 | `    const source = skill.source \|\| skill.ecosystem \|\| "local";` | 声明一个不会被重新赋值的常量。 |
| 514 | `    return {` | 返回当前函数的结果。 |
| 515 | `      ...skill,` | 执行 app.js 中的这一行逻辑。 |
| 516 | `      id: skill.id \|\| stableId(["skill", name, skill.primaryPath \|\| skill.path \|\| index]),` | 执行 app.js 中的这一行逻辑。 |
| 517 | `      viewType: "skills",` | 执行 app.js 中的这一行逻辑。 |
| 518 | `      name,` | 执行 app.js 中的这一行逻辑。 |
| 519 | `      displayName: skill.displayName \|\| skill.frontmatter?.name \|\| name,` | 执行 app.js 中的这一行逻辑。 |
| 520 | `      description,` | 执行 app.js 中的这一行逻辑。 |
| 521 | `      source,` | 执行 app.js 中的这一行逻辑。 |
| 522 | `      category: skill.category \|\| inferCategory(name, \`${description}\\n${raw}\`, skillCategoryRules),` | 执行 app.js 中的这一行逻辑。 |
| 523 | `      rawMarkdown: raw,` | 执行 app.js 中的这一行逻辑。 |
| 524 | `      primaryPath: skill.primaryPath \|\| skill.path \|\| "",` | 执行 app.js 中的这一行逻辑。 |
| 525 | `      directory: skill.directory \|\| "",` | 执行 app.js 中的这一行逻辑。 |
| 526 | `      duplicateCount: skill.duplicateCount \|\| groups.get(name) \|\| 1,` | 执行 app.js 中的这一行逻辑。 |
| 527 | `      duplicatePaths: Array.isArray(skill.duplicatePaths) ? skill.duplicatePaths : [],` | 执行 app.js 中的这一行逻辑。 |
| 528 | `      frontmatter: skill.frontmatter \|\| parseFrontmatter(raw).data,` | 执行 app.js 中的这一行逻辑。 |
| 529 | `      lineCount: skill.lineCount \|\| countLines(raw),` | 执行 app.js 中的这一行逻辑。 |
| 530 | `      sizeBytes: skill.sizeBytes \|\| byteLength(raw),` | 执行 app.js 中的这一行逻辑。 |
| 531 | `      essence: skillEssence(skill, raw, description),` | 执行 app.js 中的这一行逻辑。 |
| 532 | `    };` | 结束当前代码块或数据结构。 |
| 533 | `  });` | 结束当前代码块或数据结构。 |
| 534 | `}` | 结束当前代码块或数据结构。 |
| 535 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 536 | `function mcpItems() {` | 定义一个可复用函数。 |
| 537 | `  return snapshot.mcpServers.map((server, index) => {` | 返回当前函数的结果。 |
| 538 | `    const name = server.name \|\| server.id \|\| \`mcp-${index + 1}\`;` | 声明一个不会被重新赋值的常量。 |
| 539 | `    const raw = server.rawConfig \|\| server.raw \|\| buildMcpRaw(server);` | 声明一个不会被重新赋值的常量。 |
| 540 | `    const endpoint = server.url \|\| server.command \|\| server.transport \|\| "未记录启动方式";` | 声明一个不会被重新赋值的常量。 |
| 541 | `    return {` | 返回当前函数的结果。 |
| 542 | `      ...server,` | 执行 app.js 中的这一行逻辑。 |
| 543 | `      id: server.id \|\| stableId(["mcp", name, server.configPath \|\| index]),` | 执行 app.js 中的这一行逻辑。 |
| 544 | `      viewType: "mcp",` | 执行 app.js 中的这一行逻辑。 |
| 545 | `      name,` | 执行 app.js 中的这一行逻辑。 |
| 546 | `      displayName: name,` | 执行 app.js 中的这一行逻辑。 |
| 547 | `      description: endpoint,` | 执行 app.js 中的这一行逻辑。 |
| 548 | `      source: server.configType \|\| server.ecosystem \|\| server.transport \|\| "config",` | 执行 app.js 中的这一行逻辑。 |
| 549 | `      category: server.category \|\| inferCategory(name, raw, mcpCategoryRules),` | 执行 app.js 中的这一行逻辑。 |
| 550 | `      rawConfig: raw,` | 执行 app.js 中的这一行逻辑。 |
| 551 | `      primaryPath: server.configPath \|\| "",` | 执行 app.js 中的这一行逻辑。 |
| 552 | `      enabledBool: server.enabledBool !== false && server.enabled !== false && server.enabled !== "false",` | 执行 app.js 中的这一行逻辑。 |
| 553 | `      essence: mcpEssence(server),` | 执行 app.js 中的这一行逻辑。 |
| 554 | `      sizeBytes: byteLength(raw),` | 执行 app.js 中的这一行逻辑。 |
| 555 | `    };` | 结束当前代码块或数据结构。 |
| 556 | `  });` | 结束当前代码块或数据结构。 |
| 557 | `}` | 结束当前代码块或数据结构。 |
| 558 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 559 | `function getItems() {` | 定义一个可复用函数。 |
| 560 | `  return currentView === "mcp" ? mcpItems() : skillItems();` | 返回当前函数的结果。 |
| 561 | `}` | 结束当前代码块或数据结构。 |
| 562 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 563 | `function skillName(skill) {` | 定义一个可复用函数。 |
| 564 | `  return skill.name \|\| skill.displayName \|\| skill.folderName \|\| skill.frontmatter?.name \|\| "unknown-skill";` | 返回当前函数的结果。 |
| 565 | `}` | 结束当前代码块或数据结构。 |
| 566 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 567 | `function stableId(parts) {` | 定义一个可复用函数。 |
| 568 | `  return parts` | 返回当前函数的结果。 |
| 569 | `    .filter((part) => part !== undefined && part !== null)` | 从数组中过滤出符合条件的项目。 |
| 570 | `    .join("\|")` | 执行 app.js 中的这一行逻辑。 |
| 571 | `    .toLowerCase()` | 执行 app.js 中的这一行逻辑。 |
| 572 | `    .replace(/[^a-z0-9\\u4e00-\\u9fa5_-]+/g, "-")` | 对字符串内容做替换处理。 |
| 573 | `    .replace(/^-+\|-+$/g, "")` | 对字符串内容做替换处理。 |
| 574 | `    .slice(0, 160) \|\| \`item-${Math.random().toString(36).slice(2)}\`;` | 执行 app.js 中的这一行逻辑。 |
| 575 | `}` | 结束当前代码块或数据结构。 |
| 576 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 577 | `function countBy(values) {` | 定义一个可复用函数。 |
| 578 | `  const map = new Map();` | 声明一个不会被重新赋值的常量。 |
| 579 | `  values.forEach((value) => map.set(value, (map.get(value) \|\| 0) + 1));` | 执行 app.js 中的这一行逻辑。 |
| 580 | `  return map;` | 返回当前函数的结果。 |
| 581 | `}` | 结束当前代码块或数据结构。 |
| 582 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 583 | `function inferCategory(name, text, rules) {` | 定义一个可复用函数。 |
| 584 | `  const corpus = \`${name}\\n${text \|\| ""}\`;` | 声明一个不会被重新赋值的常量。 |
| 585 | `  for (const [label, pattern] of rules) {` | 开始循环处理一组数据。 |
| 586 | `    if (pattern.test(corpus)) return label;` | 根据条件决定是否执行后续代码。 |
| 587 | `  }` | 结束当前代码块或数据结构。 |
| 588 | `  return "其他";` | 返回当前函数的结果。 |
| 589 | `}` | 结束当前代码块或数据结构。 |
| 590 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 591 | `function skillEssence(skill, raw, description) {` | 定义一个可复用函数。 |
| 592 | `  const signals = [];` | 声明一个不会被重新赋值的常量。 |
| 593 | `  const text = \`${description}\\n${raw}\`.toLowerCase();` | 声明一个不会被重新赋值的常量。 |
| 594 | `  if (/use this skill\|use when\|trigger\|applies\|scope\|description:/.test(text)) signals.push("触发边界");` | 根据条件决定是否执行后续代码。 |
| 595 | `  if (/read\|inspect\|official\|docs?\|reference\|source\|brief\|screenshot\|context/.test(text)) signals.push("知识来源");` | 根据条件决定是否执行后续代码。 |
| 596 | `  if (/run\|execute\|call\|script\|cli\|api\|tool\|mcp\|browser\|github\|figma\|python\|node/.test(text)) signals.push("工具路线");` | 根据条件决定是否执行后续代码。 |
| 597 | `  if (/must\|never\|avoid\|do not\|always\|prefer\|only\|required\|unless\|ask/.test(text)) signals.push("边界约束");` | 根据条件决定是否执行后续代码。 |
| 598 | `  if (/validate\|verify\|test\|lint\|typecheck\|build\|screenshot\|render\|compare\|evidence\|proof\|check/.test(text)) signals.push("验证义务");` | 根据条件决定是否执行后续代码。 |
| 599 | `  if (/output\|deliverable\|final\|report\|json\|markdown\|document\|slides\|export/.test(text)) signals.push("输出标准");` | 根据条件决定是否执行后续代码。 |
| 600 | `  const found = signals.length ? signals.join("、") : "未在快照中抽到明显控制点";` | 声明一个不会被重新赋值的常量。 |
| 601 | `  return \`局部指令包；它不是工具本身，而是在触发回合里改变模型的判断顺序。当前原文影响点：${found}。\`;` | 返回当前函数的结果。 |
| 602 | `}` | 结束当前代码块或数据结构。 |
| 603 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 604 | `function mcpEssence(server) {` | 定义一个可复用函数。 |
| 605 | `  const endpoint = server.url ? "远程服务" : server.command ? "本地进程" : "配置入口";` | 声明一个不会被重新赋值的常量。 |
| 606 | `  return \`工具入口；它不是提示词，而是把 ${endpoint} 暴露给模型，让模型在任务需要时能调用真实能力。\`;` | 返回当前函数的结果。 |
| 607 | `}` | 结束当前代码块或数据结构。 |
| 608 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 609 | `function filteredItems() {` | 定义一个可复用函数。 |
| 610 | `  const query = document.getElementById("searchInput").value.trim().toLowerCase();` | 声明一个不会被重新赋值的常量。 |
| 611 | `  return getItems().filter((item) => {` | 返回当前函数的结果。 |
| 612 | `    const raw = item.rawMarkdown \|\| item.rawConfig \|\| "";` | 声明一个不会被重新赋值的常量。 |
| 613 | `    const haystack = [` | 声明一个不会被重新赋值的常量。 |
| 614 | `      item.name,` | 执行 app.js 中的这一行逻辑。 |
| 615 | `      item.displayName,` | 执行 app.js 中的这一行逻辑。 |
| 616 | `      item.description,` | 执行 app.js 中的这一行逻辑。 |
| 617 | `      item.category,` | 执行 app.js 中的这一行逻辑。 |
| 618 | `      item.source,` | 执行 app.js 中的这一行逻辑。 |
| 619 | `      item.primaryPath,` | 执行 app.js 中的这一行逻辑。 |
| 620 | `      item.directory,` | 执行 app.js 中的这一行逻辑。 |
| 621 | `      raw,` | 执行 app.js 中的这一行逻辑。 |
| 622 | `    ].join("\\n").toLowerCase();` | 执行 app.js 中的这一行逻辑。 |
| 623 | `    return (!query \|\| haystack.includes(query))` | 返回当前函数的结果。 |
| 624 | `      && (activeCategory === "全部" \|\| item.category === activeCategory)` | 执行 app.js 中的这一行逻辑。 |
| 625 | `      && (activeSource === "全部" \|\| item.source === activeSource);` | 执行 app.js 中的这一行逻辑。 |
| 626 | `  });` | 结束当前代码块或数据结构。 |
| 627 | `}` | 结束当前代码块或数据结构。 |
| 628 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 629 | `function sortedItems(items) {` | 定义一个可复用函数。 |
| 630 | `  const mode = document.getElementById("sortSelect").value;` | 声明一个不会被重新赋值的常量。 |
| 631 | `  return [...items].sort((a, b) => {` | 返回当前函数的结果。 |
| 632 | `    if (mode === "category") return a.category.localeCompare(b.category, "zh-CN") \|\| a.name.localeCompare(b.name, "zh-CN");` | 根据条件决定是否执行后续代码。 |
| 633 | `    if (mode === "source") return String(a.source).localeCompare(String(b.source), "zh-CN") \|\| a.name.localeCompare(b.name, "zh-CN");` | 根据条件决定是否执行后续代码。 |
| 634 | `    if (mode === "size") return Number(b.sizeBytes \|\| 0) - Number(a.sizeBytes \|\| 0);` | 根据条件决定是否执行后续代码。 |
| 635 | `    return a.name.localeCompare(b.name, "zh-CN");` | 返回当前函数的结果。 |
| 636 | `  });` | 结束当前代码块或数据结构。 |
| 637 | `}` | 结束当前代码块或数据结构。 |
| 638 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 639 | `function setupFilters(items) {` | 定义一个可复用函数。 |
| 640 | `  const categories = ["全部", ...Array.from(new Set(items.map((item) => item.category))).sort((a, b) => a.localeCompare(b, "zh-CN"))];` | 声明一个不会被重新赋值的常量。 |
| 641 | `  const sources = ["全部", ...Array.from(new Set(items.map((item) => item.source))).sort((a, b) => a.localeCompare(b, "zh-CN"))];` | 声明一个不会被重新赋值的常量。 |
| 642 | `  document.getElementById("categoryFilters").innerHTML = categories.map((value) => filterRadio("category", value, value === activeCategory)).join("");` | 按 id 获取页面元素并操作它。 |
| 643 | `  document.getElementById("sourceFilters").innerHTML = sources.map((value) => filterRadio("source", value, value === activeSource)).join("");` | 按 id 获取页面元素并操作它。 |
| 644 | `  document.querySelectorAll("input[name=category]").forEach((input) => {` | 用 CSS 选择器查找页面元素。 |
| 645 | `    input.addEventListener("change", () => {` | 绑定浏览器事件处理逻辑。 |
| 646 | `      activeCategory = input.value;` | 执行 app.js 中的这一行逻辑。 |
| 647 | `      render();` | 执行 app.js 中的这一行逻辑。 |
| 648 | `    });` | 结束当前代码块或数据结构。 |
| 649 | `  });` | 结束当前代码块或数据结构。 |
| 650 | `  document.querySelectorAll("input[name=source]").forEach((input) => {` | 用 CSS 选择器查找页面元素。 |
| 651 | `    input.addEventListener("change", () => {` | 绑定浏览器事件处理逻辑。 |
| 652 | `      activeSource = input.value;` | 执行 app.js 中的这一行逻辑。 |
| 653 | `      render();` | 执行 app.js 中的这一行逻辑。 |
| 654 | `    });` | 结束当前代码块或数据结构。 |
| 655 | `  });` | 结束当前代码块或数据结构。 |
| 656 | `}` | 结束当前代码块或数据结构。 |
| 657 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 658 | `function filterRadio(name, value, checked) {` | 定义一个可复用函数。 |
| 659 | `  return \`<label class="check-row"><input type="radio" name="${name}" value="${escapeHtml(value)}" ${checked ? "checked" : ""}>${escapeHtml(value)}</label>\`;` | 返回当前函数的结果。 |
| 660 | `}` | 结束当前代码块或数据结构。 |
| 661 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 662 | `function render() {` | 定义一个可复用函数。 |
| 663 | `  const skills = skillItems();` | 声明一个不会被重新赋值的常量。 |
| 664 | `  const mcps = mcpItems();` | 声明一个不会被重新赋值的常量。 |
| 665 | `  const items = getItems();` | 声明一个不会被重新赋值的常量。 |
| 666 | `  applyI18n();` | 执行 app.js 中的这一行逻辑。 |
| 667 | `  setupChrome();` | 执行 app.js 中的这一行逻辑。 |
| 668 | `  setupSnapshotMeta(skills, mcps);` | 执行 app.js 中的这一行逻辑。 |
| 669 | `  setupFilters(items);` | 执行 app.js 中的这一行逻辑。 |
| 670 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 671 | `  const visible = sortedItems(filteredItems());` | 声明一个不会被重新赋值的常量。 |
| 672 | `  document.getElementById("skillCount").textContent = skills.length;` | 按 id 获取页面元素并操作它。 |
| 673 | `  document.getElementById("mcpCount").textContent = mcps.length;` | 按 id 获取页面元素并操作它。 |
| 674 | `  document.getElementById("rawCount").textContent = skills.filter((item) => item.rawMarkdown).length;` | 按 id 获取页面元素并操作它。 |
| 675 | `  document.getElementById("enabledMcpCount").textContent = mcps.filter((item) => item.enabledBool).length;` | 按 id 获取页面元素并操作它。 |
| 676 | `  document.getElementById("resultText").textContent = \`${visible.length} results \| ${snapshot.generatedAt \|\| "no snapshot time"}\`;` | 按 id 获取页面元素并操作它。 |
| 677 | `  document.getElementById("itemRows").innerHTML = visible.map(renderRow).join("") \|\| emptyRow();` | 按 id 获取页面元素并操作它。 |
| 678 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 679 | `  document.querySelectorAll(".item-row[data-id]").forEach((row) => {` | 用 CSS 选择器查找页面元素。 |
| 680 | `    row.addEventListener("click", (event) => {` | 绑定浏览器事件处理逻辑。 |
| 681 | `      if (event.target.closest("button")) return;` | 根据条件决定是否执行后续代码。 |
| 682 | `      selected[currentView] = row.dataset.id;` | 执行 app.js 中的这一行逻辑。 |
| 683 | `      renderDetail(items.find((item) => item.id === selected[currentView]));` | 执行 app.js 中的这一行逻辑。 |
| 684 | `      highlightSelected();` | 执行 app.js 中的这一行逻辑。 |
| 685 | `    });` | 结束当前代码块或数据结构。 |
| 686 | `  });` | 结束当前代码块或数据结构。 |
| 687 | `  const selectedItem = visible.find((item) => item.id === selected[currentView])` | 声明一个不会被重新赋值的常量。 |
| 688 | `    \|\| items.find((item) => item.id === selected[currentView])` | 执行 app.js 中的这一行逻辑。 |
| 689 | `    \|\| visible[0];` | 执行 app.js 中的这一行逻辑。 |
| 690 | `  if (selectedItem) {` | 根据条件决定是否执行后续代码。 |
| 691 | `    selected[currentView] = selectedItem.id;` | 执行 app.js 中的这一行逻辑。 |
| 692 | `    renderDetail(selectedItem);` | 执行 app.js 中的这一行逻辑。 |
| 693 | `  } else {` | 处理前面条件都不成立的情况。 |
| 694 | `    renderEmptyDetail();` | 执行 app.js 中的这一行逻辑。 |
| 695 | `  }` | 结束当前代码块或数据结构。 |
| 696 | `  highlightSelected();` | 执行 app.js 中的这一行逻辑。 |
| 697 | `}` | 结束当前代码块或数据结构。 |
| 698 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 699 | `function setupChrome() {` | 定义一个可复用函数。 |
| 700 | `  const isMcp = currentView === "mcp";` | 声明一个不会被重新赋值的常量。 |
| 701 | `  document.getElementById("skillsTab").classList.toggle("active", !isMcp);` | 按 id 获取页面元素并操作它。 |
| 702 | `  document.getElementById("mcpTab").classList.toggle("active", isMcp);` | 按 id 获取页面元素并操作它。 |
| 703 | `  document.getElementById("listTitle").textContent = isMcp ? t("mcpList") : t("skillList");` | 按 id 获取页面元素并操作它。 |
| 704 | `  document.getElementById("detailEyebrow").textContent = isMcp ? t("selectedMcp") : t("selectedSkill");` | 按 id 获取页面元素并操作它。 |
| 705 | `  document.getElementById("rawTitle").textContent = isMcp ? t("rawMcp") : t("rawSkill");` | 按 id 获取页面元素并操作它。 |
| 706 | `  document.getElementById("searchInput").placeholder = isMcp` | 按 id 获取页面元素并操作它。 |
| 707 | `    ? "MCP name, command, URL, config keyword"` | 执行 app.js 中的这一行逻辑。 |
| 708 | `    : "Skill name, path, description, raw text keyword";` | 执行 app.js 中的这一行逻辑。 |
| 709 | `}` | 结束当前代码块或数据结构。 |
| 710 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 711 | `function setupSnapshotMeta(skills, mcps) {` | 定义一个可复用函数。 |
| 712 | `  const parts = [];` | 声明一个不会被重新赋值的常量。 |
| 713 | `  if (snapshot.codexHome) parts.push(\`Codex: ${snapshot.codexHome}\`);` | 根据条件决定是否执行后续代码。 |
| 714 | `  if (snapshot.claudeHome) parts.push(\`Claude: ${snapshot.claudeHome}\`);` | 根据条件决定是否执行后续代码。 |
| 715 | `  if (snapshot.configPath) parts.push(\`Config: ${snapshot.configPath}\`);` | 根据条件决定是否执行后续代码。 |
| 716 | `  const title = \`${skills.length} Skill / ${mcps.length} MCP\`;` | 声明一个不会被重新赋值的常量。 |
| 717 | `  document.getElementById("snapshotTitle").textContent = title;` | 按 id 获取页面元素并操作它。 |
| 718 | `  document.getElementById("snapshotMeta").textContent = parts.length` | 按 id 获取页面元素并操作它。 |
| 719 | `    ? parts.join(" \| ")` | 执行 app.js 中的这一行逻辑。 |
| 720 | `    : t("snapshotHelp");` | 执行 app.js 中的这一行逻辑。 |
| 721 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 722 | `  const paths = snapshot.presetPaths && snapshot.presetPaths.length ? snapshot.presetPaths : defaultPresetPaths;` | 声明一个不会被重新赋值的常量。 |
| 723 | `  document.getElementById("presetPaths").innerHTML = paths.slice(0, 14).map((item) => {` | 按 id 获取页面元素并操作它。 |
| 724 | `    const text = typeof item === "string" ? item : \`${item.label \|\| item.kind \|\| "path"}: ${item.path \|\| ""}\`;` | 声明一个不会被重新赋值的常量。 |
| 725 | `    return \`<span class="path-chip">${escapeHtml(text)}</span>\`;` | 返回当前函数的结果。 |
| 726 | `  }).join("");` | 执行 app.js 中的这一行逻辑。 |
| 727 | `}` | 结束当前代码块或数据结构。 |
| 728 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 729 | `function renderRow(item) {` | 定义一个可复用函数。 |
| 730 | `  const raw = item.rawMarkdown \|\| item.rawConfig \|\| "";` | 声明一个不会被重新赋值的常量。 |
| 731 | `  const rawBadge = raw` | 声明一个不会被重新赋值的常量。 |
| 732 | `    ? \`<span class="badge raw">${currentView === "mcp" ? "config" : "raw"}</span>\`` | 执行 app.js 中的这一行逻辑。 |
| 733 | `    : \`<span class="badge warn">${currentView === "mcp" ? "no config" : "no raw"}</span>\`;` | 执行 app.js 中的这一行逻辑。 |
| 734 | `  const enabledBadge = currentView === "mcp"` | 声明一个不会被重新赋值的常量。 |
| 735 | `    ? \`<span class="badge ${item.enabledBool ? "mcp" : "neutral"}">${item.enabledBool ? "enabled" : "disabled"}</span>\`` | 执行 app.js 中的这一行逻辑。 |
| 736 | `    : "";` | 执行 app.js 中的这一行逻辑。 |
| 737 | `  return \`` | 返回当前函数的结果。 |
| 738 | `    <article class="item-row ${item.id === selected[currentView] ? "selected" : ""}" data-id="${escapeHtml(item.id)}">` | 执行 app.js 中的这一行逻辑。 |
| 739 | `      <div class="item-main">` | 执行 app.js 中的这一行逻辑。 |
| 740 | `        <strong>${escapeHtml(item.displayName \|\| item.name)}</strong>` | 执行 app.js 中的这一行逻辑。 |
| 741 | `        <p>${escapeHtml(trimText(item.description \|\| item.primaryPath \|\| "no description", 160))}</p>` | 执行 app.js 中的这一行逻辑。 |
| 742 | `        <div class="item-meta">` | 执行 app.js 中的这一行逻辑。 |
| 743 | `          <span class="badge neutral">${escapeHtml(item.category)}</span>` | 执行 app.js 中的这一行逻辑。 |
| 744 | `          <span class="badge neutral">${escapeHtml(item.source)}</span>` | 执行 app.js 中的这一行逻辑。 |
| 745 | `          ${enabledBadge}` | 执行 app.js 中的这一行逻辑。 |
| 746 | `          ${rawBadge}` | 执行 app.js 中的这一行逻辑。 |
| 747 | `          ${Number(item.duplicateCount \|\| 1) > 1 ? \`<span class="badge warn">duplicate ${item.duplicateCount}</span>\` : ""}` | 执行 app.js 中的这一行逻辑。 |
| 748 | `        </div>` | 执行 app.js 中的这一行逻辑。 |
| 749 | `      </div>` | 执行 app.js 中的这一行逻辑。 |
| 750 | `    </article>` | 执行 app.js 中的这一行逻辑。 |
| 751 | `  \`;` | 执行 app.js 中的这一行逻辑。 |
| 752 | `}` | 结束当前代码块或数据结构。 |
| 753 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 754 | `function emptyRow() {` | 定义一个可复用函数。 |
| 755 | `  return \`<div class="item-row"><div class="item-main"><strong>No matches</strong><p>Adjust search, category, or source filters.</p></div></div>\`;` | 返回当前函数的结果。 |
| 756 | `}` | 结束当前代码块或数据结构。 |
| 757 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 758 | `function renderDetail(item) {` | 定义一个可复用函数。 |
| 759 | `  if (!item) {` | 根据条件决定是否执行后续代码。 |
| 760 | `    renderEmptyDetail();` | 执行 app.js 中的这一行逻辑。 |
| 761 | `    return;` | 执行 app.js 中的这一行逻辑。 |
| 762 | `  }` | 结束当前代码块或数据结构。 |
| 763 | `  const isMcp = item.viewType === "mcp";` | 声明一个不会被重新赋值的常量。 |
| 764 | `  currentDetailItem = item;` | 执行 app.js 中的这一行逻辑。 |
| 765 | `  document.getElementById("detailName").textContent = item.displayName \|\| item.name;` | 按 id 获取页面元素并操作它。 |
| 766 | `  document.getElementById("detailDescription").textContent = item.description \|\| "no description";` | 按 id 获取页面元素并操作它。 |
| 767 | `  document.getElementById("detailEssence").textContent = item.essence \|\| "-";` | 按 id 获取页面元素并操作它。 |
| 768 | `  document.getElementById("detailCategory").textContent = item.category \|\| "-";` | 按 id 获取页面元素并操作它。 |
| 769 | `  document.getElementById("detailSource").textContent = item.source \|\| "-";` | 按 id 获取页面元素并操作它。 |
| 770 | `  document.getElementById("detailPath").textContent = item.primaryPath \|\| item.directory \|\| "-";` | 按 id 获取页面元素并操作它。 |
| 771 | `  document.getElementById("frontmatterSection").style.display = isMcp ? "none" : "";` | 按 id 获取页面元素并操作它。 |
| 772 | `  document.getElementById("frontmatterViewer").textContent = isMcp ? "-" : formatFrontmatter(item);` | 按 id 获取页面元素并操作它。 |
| 773 | `  updateRawViewer(item);` | 执行 app.js 中的这一行逻辑。 |
| 774 | `}` | 结束当前代码块或数据结构。 |
| 775 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 776 | `function renderEmptyDetail() {` | 定义一个可复用函数。 |
| 777 | `  currentDetailItem = null;` | 执行 app.js 中的这一行逻辑。 |
| 778 | `  document.getElementById("detailName").textContent = t("noSelection");` | 按 id 获取页面元素并操作它。 |
| 779 | `  document.getElementById("detailDescription").textContent = t("noSelectionHelp");` | 按 id 获取页面元素并操作它。 |
| 780 | `  document.getElementById("detailEssence").textContent = "-";` | 按 id 获取页面元素并操作它。 |
| 781 | `  document.getElementById("detailCategory").textContent = "-";` | 按 id 获取页面元素并操作它。 |
| 782 | `  document.getElementById("detailSource").textContent = "-";` | 按 id 获取页面元素并操作它。 |
| 783 | `  document.getElementById("detailPath").textContent = "-";` | 按 id 获取页面元素并操作它。 |
| 784 | `  document.getElementById("frontmatterSection").style.display = "";` | 按 id 获取页面元素并操作它。 |
| 785 | `  document.getElementById("frontmatterViewer").textContent = "-";` | 按 id 获取页面元素并操作它。 |
| 786 | `  updateRawViewer(null);` | 执行 app.js 中的这一行逻辑。 |
| 787 | `}` | 结束当前代码块或数据结构。 |
| 788 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 789 | `function formatFrontmatter(item) {` | 定义一个可复用函数。 |
| 790 | `  const frontmatter = item.frontmatter \|\| {};` | 声明一个不会被重新赋值的常量。 |
| 791 | `  const lines = Object.entries(frontmatter).map(([key, value]) => \`${key}: ${Array.isArray(value) ? value.join(", ") : value}\`);` | 声明一个不会被重新赋值的常量。 |
| 792 | `  const extras = [` | 声明一个不会被重新赋值的常量。 |
| 793 | `    item.lineCount ? \`lineCount: ${item.lineCount}\` : "",` | 执行 app.js 中的这一行逻辑。 |
| 794 | `    item.sizeBytes ? \`sizeBytes: ${item.sizeBytes}\` : "",` | 执行 app.js 中的这一行逻辑。 |
| 795 | `    Number(item.duplicateCount \|\| 1) > 1 ? \`duplicateCount: ${item.duplicateCount}\` : "",` | 执行 app.js 中的这一行逻辑。 |
| 796 | `  ].filter(Boolean);` | 从数组中过滤出符合条件的项目。 |
| 797 | `  const duplicatePaths = item.duplicatePaths && item.duplicatePaths.length > 1` | 声明一个不会被重新赋值的常量。 |
| 798 | `    ? ["", "duplicatePaths:", ...item.duplicatePaths.map((path) => \`- ${path}\`)]` | 把数组中的每一项转换成新结果。 |
| 799 | `    : [];` | 执行 app.js 中的这一行逻辑。 |
| 800 | `  return [...lines, ...extras, ...duplicatePaths].join("\\n") \|\| "没有 frontmatter。";` | 返回当前函数的结果。 |
| 801 | `}` | 结束当前代码块或数据结构。 |
| 802 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 803 | `function missingRawMessage(isMcp) {` | 定义一个可复用函数。 |
| 804 | `  if (isMcp) return "当前快照没有包含原始 MCP 配置块。可以点击“选择 MCP 配置”导入 config.toml / claude_desktop_config.json / .mcp.json。";` | 根据条件决定是否执行后续代码。 |
| 805 | `  return "当前快照没有包含原始 SKILL.md。请运行 \`node scan-local.mjs\` 重新生成，或点击“选择 Skill 目录”让浏览器读取一个目录。";` | 返回当前函数的结果。 |
| 806 | `}` | 结束当前代码块或数据结构。 |
| 807 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 808 | `async function updateRawViewer(item = currentDetailItem) {` | 定义一个可使用 await 的异步函数。 |
| 809 | `  const viewer = document.getElementById("rawViewer");` | 声明一个不会被重新赋值的常量。 |
| 810 | `  const isMcp = item?.viewType === "mcp";` | 声明一个不会被重新赋值的常量。 |
| 811 | `  const raw = isMcp ? item?.rawConfig : item?.rawMarkdown;` | 声明一个不会被重新赋值的常量。 |
| 812 | `  document.getElementById("rawOriginalBtn").classList.toggle("active", rawMode === "original");` | 按 id 获取页面元素并操作它。 |
| 813 | `  document.getElementById("rawTranslatedBtn").classList.toggle("active", rawMode === "translated");` | 按 id 获取页面元素并操作它。 |
| 814 | `  document.getElementById("rawTitle").textContent = isMcp ? t("rawMcp") : t("rawSkill");` | 按 id 获取页面元素并操作它。 |
| 815 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 816 | `  if (!item) {` | 根据条件决定是否执行后续代码。 |
| 817 | `    viewer.textContent = t("noSelectionHelp");` | 执行 app.js 中的这一行逻辑。 |
| 818 | `    return;` | 执行 app.js 中的这一行逻辑。 |
| 819 | `  }` | 结束当前代码块或数据结构。 |
| 820 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 821 | `  if (!raw) {` | 根据条件决定是否执行后续代码。 |
| 822 | `    viewer.textContent = missingRawMessage(isMcp);` | 执行 app.js 中的这一行逻辑。 |
| 823 | `    return;` | 执行 app.js 中的这一行逻辑。 |
| 824 | `  }` | 结束当前代码块或数据结构。 |
| 825 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 826 | `  if (rawMode === "original") {` | 根据条件决定是否执行后续代码。 |
| 827 | `    viewer.textContent = raw;` | 执行 app.js 中的这一行逻辑。 |
| 828 | `    document.getElementById("translationStatus").textContent = t("translationStatus");` | 按 id 获取页面元素并操作它。 |
| 829 | `    return;` | 执行 app.js 中的这一行逻辑。 |
| 830 | `  }` | 结束当前代码块或数据结构。 |
| 831 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 832 | `  document.getElementById("translationStatus").textContent = t("translating");` | 按 id 获取页面元素并操作它。 |
| 833 | `  const requestId = \`${item.id}:${uiLanguage}:${raw.length}\`;` | 声明一个不会被重新赋值的常量。 |
| 834 | `  viewer.dataset.translationRequest = requestId;` | 执行 app.js 中的这一行逻辑。 |
| 835 | `  const translated = await translateMarkdown(raw, uiLanguage);` | 声明一个不会被重新赋值的常量。 |
| 836 | `  if (viewer.dataset.translationRequest === requestId) {` | 根据条件决定是否执行后续代码。 |
| 837 | `    viewer.textContent = translated.text;` | 执行 app.js 中的这一行逻辑。 |
| 838 | `    document.getElementById("translationStatus").textContent = t("translatedByDictionary");` | 按 id 获取页面元素并操作它。 |
| 839 | `  }` | 结束当前代码块或数据结构。 |
| 840 | `}` | 结束当前代码块或数据结构。 |
| 841 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 842 | `async function translateMarkdown(text, targetLanguage) {` | 定义一个可使用 await 的异步函数。 |
| 843 | `  if (targetLanguage === "zh-CN" && hasMostlyChinese(text)) {` | 根据条件决定是否执行后续代码。 |
| 844 | `    return { source: "dictionary", text };` | 返回当前函数的结果。 |
| 845 | `  }` | 结束当前代码块或数据结构。 |
| 846 | `  return { source: "dictionary", text: translateWithBuiltInGlossary(text, targetLanguage) };` | 返回当前函数的结果。 |
| 847 | `}` | 结束当前代码块或数据结构。 |
| 848 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 849 | `function translateWithBuiltInGlossary(text, targetLanguage) {` | 定义一个可复用函数。 |
| 850 | `  const replacements = glossaryFor(targetLanguage);` | 声明一个不会被重新赋值的常量。 |
| 851 | `  return String(text \|\| "")` | 返回当前函数的结果。 |
| 852 | `    .split(/\\r?\\n/)` | 执行 app.js 中的这一行逻辑。 |
| 853 | `    .map((line) => translateLineWithGlossary(line, replacements))` | 把数组中的每一项转换成新结果。 |
| 854 | `    .join("\\n");` | 执行 app.js 中的这一行逻辑。 |
| 855 | `}` | 结束当前代码块或数据结构。 |
| 856 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 857 | `function translateLineWithGlossary(line, replacements) {` | 定义一个可复用函数。 |
| 858 | `  let output = line;` | 声明一个后续可能变化的变量。 |
| 859 | `  for (const [from, to] of replacements) {` | 开始循环处理一组数据。 |
| 860 | `    output = output.replace(new RegExp(escapeRegExp(from), "gi"), to);` | 对字符串内容做替换处理。 |
| 861 | `  }` | 结束当前代码块或数据结构。 |
| 862 | `  return output;` | 返回当前函数的结果。 |
| 863 | `}` | 结束当前代码块或数据结构。 |
| 864 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 865 | `function glossaryFor(targetLanguage) {` | 定义一个可复用函数。 |
| 866 | `  const base = {` | 声明一个不会被重新赋值的常量。 |
| 867 | `    "Use this skill": {` | 执行 app.js 中的这一行逻辑。 |
| 868 | `      "zh-CN": "使用这个 Skill",` | 执行 app.js 中的这一行逻辑。 |
| 869 | `      en: "Use this Skill",` | 执行 app.js 中的这一行逻辑。 |
| 870 | `      ja: "この Skill を使用",` | 执行 app.js 中的这一行逻辑。 |
| 871 | `      ko: "이 Skill 사용",` | 执行 app.js 中的这一行逻辑。 |
| 872 | `      fr: "Utiliser ce Skill",` | 执行 app.js 中的这一行逻辑。 |
| 873 | `      de: "Diesen Skill verwenden",` | 执行 app.js 中的这一行逻辑。 |
| 874 | `      es: "Usar este Skill",` | 执行 app.js 中的这一行逻辑。 |
| 875 | `      pt: "Usar este Skill",` | 执行 app.js 中的这一行逻辑。 |
| 876 | `      ru: "Использовать этот Skill",` | 执行 app.js 中的这一行逻辑。 |
| 877 | `      ar: "استخدم هذا Skill",` | 执行 app.js 中的这一行逻辑。 |
| 878 | `    },` | 执行 app.js 中的这一行逻辑。 |
| 879 | `    "Read": {` | 执行 app.js 中的这一行逻辑。 |
| 880 | `      "zh-CN": "读取",` | 执行 app.js 中的这一行逻辑。 |
| 881 | `      en: "Read",` | 执行 app.js 中的这一行逻辑。 |
| 882 | `      ja: "読む",` | 执行 app.js 中的这一行逻辑。 |
| 883 | `      ko: "읽기",` | 执行 app.js 中的这一行逻辑。 |
| 884 | `      fr: "Lire",` | 执行 app.js 中的这一行逻辑。 |
| 885 | `      de: "Lesen",` | 执行 app.js 中的这一行逻辑。 |
| 886 | `      es: "Leer",` | 执行 app.js 中的这一行逻辑。 |
| 887 | `      pt: "Ler",` | 执行 app.js 中的这一行逻辑。 |
| 888 | `      ru: "Читать",` | 执行 app.js 中的这一行逻辑。 |
| 889 | `      ar: "اقرأ",` | 执行 app.js 中的这一行逻辑。 |
| 890 | `    },` | 执行 app.js 中的这一行逻辑。 |
| 891 | `    "Verify": {` | 执行 app.js 中的这一行逻辑。 |
| 892 | `      "zh-CN": "验证",` | 执行 app.js 中的这一行逻辑。 |
| 893 | `      en: "Verify",` | 执行 app.js 中的这一行逻辑。 |
| 894 | `      ja: "検証",` | 执行 app.js 中的这一行逻辑。 |
| 895 | `      ko: "검증",` | 执行 app.js 中的这一行逻辑。 |
| 896 | `      fr: "Vérifier",` | 执行 app.js 中的这一行逻辑。 |
| 897 | `      de: "Prüfen",` | 执行 app.js 中的这一行逻辑。 |
| 898 | `      es: "Verificar",` | 执行 app.js 中的这一行逻辑。 |
| 899 | `      pt: "Verificar",` | 执行 app.js 中的这一行逻辑。 |
| 900 | `      ru: "Проверить",` | 执行 app.js 中的这一行逻辑。 |
| 901 | `      ar: "تحقق",` | 执行 app.js 中的这一行逻辑。 |
| 902 | `    },` | 执行 app.js 中的这一行逻辑。 |
| 903 | `    "Validate": {` | 执行 app.js 中的这一行逻辑。 |
| 904 | `      "zh-CN": "验证",` | 执行 app.js 中的这一行逻辑。 |
| 905 | `      en: "Validate",` | 执行 app.js 中的这一行逻辑。 |
| 906 | `      ja: "妥当性確認",` | 执行 app.js 中的这一行逻辑。 |
| 907 | `      ko: "검증",` | 执行 app.js 中的这一行逻辑。 |
| 908 | `      fr: "Valider",` | 执行 app.js 中的这一行逻辑。 |
| 909 | `      de: "Validieren",` | 执行 app.js 中的这一行逻辑。 |
| 910 | `      es: "Validar",` | 执行 app.js 中的这一行逻辑。 |
| 911 | `      pt: "Validar",` | 执行 app.js 中的这一行逻辑。 |
| 912 | `      ru: "Валидировать",` | 执行 app.js 中的这一行逻辑。 |
| 913 | `      ar: "تحقق",` | 执行 app.js 中的这一行逻辑。 |
| 914 | `    },` | 执行 app.js 中的这一行逻辑。 |
| 915 | `    "Do not": {` | 执行 app.js 中的这一行逻辑。 |
| 916 | `      "zh-CN": "不要",` | 执行 app.js 中的这一行逻辑。 |
| 917 | `      en: "Do not",` | 执行 app.js 中的这一行逻辑。 |
| 918 | `      ja: "しない",` | 执行 app.js 中的这一行逻辑。 |
| 919 | `      ko: "하지 마세요",` | 执行 app.js 中的这一行逻辑。 |
| 920 | `      fr: "Ne pas",` | 执行 app.js 中的这一行逻辑。 |
| 921 | `      de: "Nicht",` | 执行 app.js 中的这一行逻辑。 |
| 922 | `      es: "No",` | 执行 app.js 中的这一行逻辑。 |
| 923 | `      pt: "Não",` | 执行 app.js 中的这一行逻辑。 |
| 924 | `      ru: "Не",` | 执行 app.js 中的这一行逻辑。 |
| 925 | `      ar: "لا",` | 执行 app.js 中的这一行逻辑。 |
| 926 | `    },` | 执行 app.js 中的这一行逻辑。 |
| 927 | `    "Always": {` | 执行 app.js 中的这一行逻辑。 |
| 928 | `      "zh-CN": "始终",` | 执行 app.js 中的这一行逻辑。 |
| 929 | `      en: "Always",` | 执行 app.js 中的这一行逻辑。 |
| 930 | `      ja: "常に",` | 执行 app.js 中的这一行逻辑。 |
| 931 | `      ko: "항상",` | 执行 app.js 中的这一行逻辑。 |
| 932 | `      fr: "Toujours",` | 执行 app.js 中的这一行逻辑。 |
| 933 | `      de: "Immer",` | 执行 app.js 中的这一行逻辑。 |
| 934 | `      es: "Siempre",` | 执行 app.js 中的这一行逻辑。 |
| 935 | `      pt: "Sempre",` | 执行 app.js 中的这一行逻辑。 |
| 936 | `      ru: "Всегда",` | 执行 app.js 中的这一行逻辑。 |
| 937 | `      ar: "دائما",` | 执行 app.js 中的这一行逻辑。 |
| 938 | `    },` | 执行 app.js 中的这一行逻辑。 |
| 939 | `    "Prefer": {` | 执行 app.js 中的这一行逻辑。 |
| 940 | `      "zh-CN": "优先",` | 执行 app.js 中的这一行逻辑。 |
| 941 | `      en: "Prefer",` | 执行 app.js 中的这一行逻辑。 |
| 942 | `      ja: "優先",` | 执行 app.js 中的这一行逻辑。 |
| 943 | `      ko: "우선",` | 执行 app.js 中的这一行逻辑。 |
| 944 | `      fr: "Préférer",` | 执行 app.js 中的这一行逻辑。 |
| 945 | `      de: "Bevorzugen",` | 执行 app.js 中的这一行逻辑。 |
| 946 | `      es: "Preferir",` | 执行 app.js 中的这一行逻辑。 |
| 947 | `      pt: "Preferir",` | 执行 app.js 中的这一行逻辑。 |
| 948 | `      ru: "Предпочитать",` | 执行 app.js 中的这一行逻辑。 |
| 949 | `      ar: "فضّل",` | 执行 app.js 中的这一行逻辑。 |
| 950 | `    },` | 执行 app.js 中的这一行逻辑。 |
| 951 | `    "Run": {` | 执行 app.js 中的这一行逻辑。 |
| 952 | `      "zh-CN": "运行",` | 执行 app.js 中的这一行逻辑。 |
| 953 | `      en: "Run",` | 执行 app.js 中的这一行逻辑。 |
| 954 | `      ja: "実行",` | 执行 app.js 中的这一行逻辑。 |
| 955 | `      ko: "실행",` | 执行 app.js 中的这一行逻辑。 |
| 956 | `      fr: "Exécuter",` | 执行 app.js 中的这一行逻辑。 |
| 957 | `      de: "Ausführen",` | 执行 app.js 中的这一行逻辑。 |
| 958 | `      es: "Ejecutar",` | 执行 app.js 中的这一行逻辑。 |
| 959 | `      pt: "Executar",` | 执行 app.js 中的这一行逻辑。 |
| 960 | `      ru: "Запустить",` | 执行 app.js 中的这一行逻辑。 |
| 961 | `      ar: "شغّل",` | 执行 app.js 中的这一行逻辑。 |
| 962 | `    },` | 执行 app.js 中的这一行逻辑。 |
| 963 | `    "Test": {` | 执行 app.js 中的这一行逻辑。 |
| 964 | `      "zh-CN": "测试",` | 执行 app.js 中的这一行逻辑。 |
| 965 | `      en: "Test",` | 执行 app.js 中的这一行逻辑。 |
| 966 | `      ja: "テスト",` | 执行 app.js 中的这一行逻辑。 |
| 967 | `      ko: "테스트",` | 执行 app.js 中的这一行逻辑。 |
| 968 | `      fr: "Tester",` | 执行 app.js 中的这一行逻辑。 |
| 969 | `      de: "Testen",` | 执行 app.js 中的这一行逻辑。 |
| 970 | `      es: "Probar",` | 执行 app.js 中的这一行逻辑。 |
| 971 | `      pt: "Testar",` | 执行 app.js 中的这一行逻辑。 |
| 972 | `      ru: "Тестировать",` | 执行 app.js 中的这一行逻辑。 |
| 973 | `      ar: "اختبر",` | 执行 app.js 中的这一行逻辑。 |
| 974 | `    },` | 执行 app.js 中的这一行逻辑。 |
| 975 | `    "Output": {` | 执行 app.js 中的这一行逻辑。 |
| 976 | `      "zh-CN": "输出",` | 执行 app.js 中的这一行逻辑。 |
| 977 | `      en: "Output",` | 执行 app.js 中的这一行逻辑。 |
| 978 | `      ja: "出力",` | 执行 app.js 中的这一行逻辑。 |
| 979 | `      ko: "출력",` | 执行 app.js 中的这一行逻辑。 |
| 980 | `      fr: "Sortie",` | 执行 app.js 中的这一行逻辑。 |
| 981 | `      de: "Ausgabe",` | 执行 app.js 中的这一行逻辑。 |
| 982 | `      es: "Salida",` | 执行 app.js 中的这一行逻辑。 |
| 983 | `      pt: "Saída",` | 执行 app.js 中的这一行逻辑。 |
| 984 | `      ru: "Вывод",` | 执行 app.js 中的这一行逻辑。 |
| 985 | `      ar: "مخرجات",` | 执行 app.js 中的这一行逻辑。 |
| 986 | `    },` | 执行 app.js 中的这一行逻辑。 |
| 987 | `    "触发边界": {` | 执行 app.js 中的这一行逻辑。 |
| 988 | `      "zh-CN": "触发边界",` | 执行 app.js 中的这一行逻辑。 |
| 989 | `      en: "trigger boundary",` | 执行 app.js 中的这一行逻辑。 |
| 990 | `      ja: "トリガー境界",` | 执行 app.js 中的这一行逻辑。 |
| 991 | `      ko: "트리거 경계",` | 执行 app.js 中的这一行逻辑。 |
| 992 | `      fr: "limite de déclenchement",` | 执行 app.js 中的这一行逻辑。 |
| 993 | `      de: "Auslösegrenze",` | 执行 app.js 中的这一行逻辑。 |
| 994 | `      es: "límite de activación",` | 执行 app.js 中的这一行逻辑。 |
| 995 | `      pt: "limite de acionamento",` | 执行 app.js 中的这一行逻辑。 |
| 996 | `      ru: "граница срабатывания",` | 执行 app.js 中的这一行逻辑。 |
| 997 | `      ar: "حد التشغيل",` | 执行 app.js 中的这一行逻辑。 |
| 998 | `    },` | 执行 app.js 中的这一行逻辑。 |
| 999 | `    "知识来源": {` | 执行 app.js 中的这一行逻辑。 |
| 1000 | `      "zh-CN": "知识来源",` | 执行 app.js 中的这一行逻辑。 |
| 1001 | `      en: "knowledge source",` | 执行 app.js 中的这一行逻辑。 |
| 1002 | `      ja: "知識ソース",` | 执行 app.js 中的这一行逻辑。 |
| 1003 | `      ko: "지식 출처",` | 执行 app.js 中的这一行逻辑。 |
| 1004 | `      fr: "source de connaissance",` | 执行 app.js 中的这一行逻辑。 |
| 1005 | `      de: "Wissensquelle",` | 执行 app.js 中的这一行逻辑。 |
| 1006 | `      es: "fuente de conocimiento",` | 执行 app.js 中的这一行逻辑。 |
| 1007 | `      pt: "fonte de conhecimento",` | 执行 app.js 中的这一行逻辑。 |
| 1008 | `      ru: "источник знаний",` | 执行 app.js 中的这一行逻辑。 |
| 1009 | `      ar: "مصدر المعرفة",` | 执行 app.js 中的这一行逻辑。 |
| 1010 | `    },` | 执行 app.js 中的这一行逻辑。 |
| 1011 | `    "验证义务": {` | 执行 app.js 中的这一行逻辑。 |
| 1012 | `      "zh-CN": "验证义务",` | 执行 app.js 中的这一行逻辑。 |
| 1013 | `      en: "validation obligation",` | 执行 app.js 中的这一行逻辑。 |
| 1014 | `      ja: "検証義務",` | 执行 app.js 中的这一行逻辑。 |
| 1015 | `      ko: "검증 의무",` | 执行 app.js 中的这一行逻辑。 |
| 1016 | `      fr: "obligation de validation",` | 执行 app.js 中的这一行逻辑。 |
| 1017 | `      de: "Validierungspflicht",` | 执行 app.js 中的这一行逻辑。 |
| 1018 | `      es: "obligación de validación",` | 执行 app.js 中的这一行逻辑。 |
| 1019 | `      pt: "obrigação de validação",` | 执行 app.js 中的这一行逻辑。 |
| 1020 | `      ru: "обязанность проверки",` | 执行 app.js 中的这一行逻辑。 |
| 1021 | `      ar: "واجب التحقق",` | 执行 app.js 中的这一行逻辑。 |
| 1022 | `    },` | 执行 app.js 中的这一行逻辑。 |
| 1023 | `  };` | 结束当前代码块或数据结构。 |
| 1024 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 1025 | `  return Object.entries(base).map(([from, translations]) => [from, translations[targetLanguage] \|\| translations.en]);` | 返回当前函数的结果。 |
| 1026 | `}` | 结束当前代码块或数据结构。 |
| 1027 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 1028 | `function hasMostlyChinese(text) {` | 定义一个可复用函数。 |
| 1029 | `  const value = String(text \|\| "");` | 声明一个不会被重新赋值的常量。 |
| 1030 | `  const chinese = (value.match(/[\\u4e00-\\u9fa5]/g) \|\| []).length;` | 声明一个不会被重新赋值的常量。 |
| 1031 | `  return chinese > Math.max(8, value.length * 0.08);` | 返回当前函数的结果。 |
| 1032 | `}` | 结束当前代码块或数据结构。 |
| 1033 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 1034 | `function escapeRegExp(value) {` | 定义一个可复用函数。 |
| 1035 | `  return String(value).replace(/[.*+?^${}()\|[\\]\\\\]/g, "\\\\$&");` | 返回当前函数的结果。 |
| 1036 | `}` | 结束当前代码块或数据结构。 |
| 1037 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 1038 | `function highlightSelected() {` | 定义一个可复用函数。 |
| 1039 | `  document.querySelectorAll(".item-row[data-id]").forEach((row) => {` | 用 CSS 选择器查找页面元素。 |
| 1040 | `    row.classList.toggle("selected", row.dataset.id === selected[currentView]);` | 执行 app.js 中的这一行逻辑。 |
| 1041 | `  });` | 结束当前代码块或数据结构。 |
| 1042 | `}` | 结束当前代码块或数据结构。 |
| 1043 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 1044 | `function parseFrontmatter(raw) {` | 定义一个可复用函数。 |
| 1045 | `  const result = { data: {}, body: raw \|\| "" };` | 声明一个不会被重新赋值的常量。 |
| 1046 | `  if (!raw \|\| !raw.startsWith("---")) return result;` | 根据条件决定是否执行后续代码。 |
| 1047 | `  const end = raw.indexOf("\\n---", 3);` | 声明一个不会被重新赋值的常量。 |
| 1048 | `  if (end < 0) return result;` | 根据条件决定是否执行后续代码。 |
| 1049 | `  const block = raw.slice(3, end).trim();` | 声明一个不会被重新赋值的常量。 |
| 1050 | `  result.body = raw.slice(end + 4).replace(/^\\r?\\n/, "");` | 对字符串内容做替换处理。 |
| 1051 | `  block.split(/\\r?\\n/).forEach((line) => {` | 执行 app.js 中的这一行逻辑。 |
| 1052 | `    const match = line.match(/^([A-Za-z0-9_-]+):\\s*(.*)$/);` | 声明一个不会被重新赋值的常量。 |
| 1053 | `    if (!match) return;` | 根据条件决定是否执行后续代码。 |
| 1054 | `    result.data[match[1]] = match[2].replace(/^["']\|["']$/g, "");` | 对字符串内容做替换处理。 |
| 1055 | `  });` | 结束当前代码块或数据结构。 |
| 1056 | `  return result;` | 返回当前函数的结果。 |
| 1057 | `}` | 结束当前代码块或数据结构。 |
| 1058 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 1059 | `function firstMarkdownHeading(raw) {` | 定义一个可复用函数。 |
| 1060 | `  const match = String(raw \|\| "").match(/^\\s{0,3}#\\s+(.+)$/m);` | 声明一个不会被重新赋值的常量。 |
| 1061 | `  return match ? match[1].trim() : "";` | 返回当前函数的结果。 |
| 1062 | `}` | 结束当前代码块或数据结构。 |
| 1063 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 1064 | `function countLines(text) {` | 定义一个可复用函数。 |
| 1065 | `  if (!text) return 0;` | 根据条件决定是否执行后续代码。 |
| 1066 | `  return String(text).split(/\\r?\\n/).length;` | 返回当前函数的结果。 |
| 1067 | `}` | 结束当前代码块或数据结构。 |
| 1068 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 1069 | `function byteLength(text) {` | 定义一个可复用函数。 |
| 1070 | `  return new TextEncoder().encode(String(text \|\| "")).length;` | 返回当前函数的结果。 |
| 1071 | `}` | 结束当前代码块或数据结构。 |
| 1072 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 1073 | `function trimText(text, length) {` | 定义一个可复用函数。 |
| 1074 | `  const value = String(text \|\| "");` | 声明一个不会被重新赋值的常量。 |
| 1075 | `  return value.length > length ? \`${value.slice(0, length - 1)}...\` : value;` | 返回当前函数的结果。 |
| 1076 | `}` | 结束当前代码块或数据结构。 |
| 1077 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 1078 | `function escapeHtml(value) {` | 定义一个可复用函数。 |
| 1079 | `  return String(value \|\| "")` | 返回当前函数的结果。 |
| 1080 | `    .replaceAll("&", "&amp;")` | 对字符串内容做替换处理。 |
| 1081 | `    .replaceAll("<", "&lt;")` | 对字符串内容做替换处理。 |
| 1082 | `    .replaceAll(">", "&gt;")` | 对字符串内容做替换处理。 |
| 1083 | `    .replaceAll('"', "&quot;")` | 对字符串内容做替换处理。 |
| 1084 | `    .replaceAll("'", "&#039;");` | 对字符串内容做替换处理。 |
| 1085 | `}` | 结束当前代码块或数据结构。 |
| 1086 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 1087 | `function buildMcpRaw(server) {` | 定义一个可复用函数。 |
| 1088 | `  const lines = [];` | 声明一个不会被重新赋值的常量。 |
| 1089 | `  if (server.configPath) lines.push(\`# ${server.configPath}\`);` | 根据条件决定是否执行后续代码。 |
| 1090 | `  lines.push(\`[mcp_servers.${server.name \|\| server.id \|\| "unknown"}]\`);` | 向数组追加一项内容。 |
| 1091 | `  ["enabled", "command", "args", "url", "transport", "auth", "startupTimeout", "toolTimeout"].forEach((key) => {` | 执行 app.js 中的这一行逻辑。 |
| 1092 | `    if (server[key] !== undefined && server[key] !== "") lines.push(\`${key} = ${JSON.stringify(server[key])}\`);` | 根据条件决定是否执行后续代码。 |
| 1093 | `  });` | 结束当前代码块或数据结构。 |
| 1094 | `  return lines.join("\\n");` | 返回当前函数的结果。 |
| 1095 | `}` | 结束当前代码块或数据结构。 |
| 1096 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 1097 | `async function loadSnapshotFile(file) {` | 定义一个可使用 await 的异步函数。 |
| 1098 | `  const text = await file.text();` | 声明一个不会被重新赋值的常量。 |
| 1099 | `  const parsed = parseSnapshotText(text);` | 声明一个不会被重新赋值的常量。 |
| 1100 | `  snapshot = normalizeSnapshot(parsed);` | 执行 app.js 中的这一行逻辑。 |
| 1101 | `  selected = { skills: "", mcp: "" };` | 执行 app.js 中的这一行逻辑。 |
| 1102 | `  activeCategory = "全部";` | 执行 app.js 中的这一行逻辑。 |
| 1103 | `  activeSource = "全部";` | 执行 app.js 中的这一行逻辑。 |
| 1104 | `  document.getElementById("searchInput").value = "";` | 按 id 获取页面元素并操作它。 |
| 1105 | `  render();` | 执行 app.js 中的这一行逻辑。 |
| 1106 | `}` | 结束当前代码块或数据结构。 |
| 1107 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 1108 | `function parseSnapshotText(text) {` | 定义一个可复用函数。 |
| 1109 | `  const clean = String(text \|\| "").replace(/^\\uFEFF/, "").trim();` | 声明一个不会被重新赋值的常量。 |
| 1110 | `  if (clean.startsWith("window.SKILL_DATA")) {` | 根据条件决定是否执行后续代码。 |
| 1111 | `    const json = clean` | 声明一个不会被重新赋值的常量。 |
| 1112 | `      .replace(/^window\\.SKILL_DATA\\s*=\\s*/, "")` | 对字符串内容做替换处理。 |
| 1113 | `      .replace(/;\\s*$/, "");` | 对字符串内容做替换处理。 |
| 1114 | `    return JSON.parse(json);` | 返回当前函数的结果。 |
| 1115 | `  }` | 结束当前代码块或数据结构。 |
| 1116 | `  return JSON.parse(clean);` | 返回当前函数的结果。 |
| 1117 | `}` | 结束当前代码块或数据结构。 |
| 1118 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 1119 | `async function loadConfigFile(file) {` | 定义一个可使用 await 的异步函数。 |
| 1120 | `  const text = await file.text();` | 声明一个不会被重新赋值的常量。 |
| 1121 | `  const parsed = parseMcpConfig(text, file.name);` | 声明一个不会被重新赋值的常量。 |
| 1122 | `  snapshot = normalizeSnapshot({` | 执行 app.js 中的这一行逻辑。 |
| 1123 | `    ...snapshot,` | 执行 app.js 中的这一行逻辑。 |
| 1124 | `    generatedAt: new Date().toISOString(),` | 执行 app.js 中的这一行逻辑。 |
| 1125 | `    configPath: file.name,` | 执行 app.js 中的这一行逻辑。 |
| 1126 | `    mcpServers: parsed,` | 执行 app.js 中的这一行逻辑。 |
| 1127 | `  });` | 结束当前代码块或数据结构。 |
| 1128 | `  currentView = "mcp";` | 执行 app.js 中的这一行逻辑。 |
| 1129 | `  selected.mcp = "";` | 执行 app.js 中的这一行逻辑。 |
| 1130 | `  activeCategory = "全部";` | 执行 app.js 中的这一行逻辑。 |
| 1131 | `  activeSource = "全部";` | 执行 app.js 中的这一行逻辑。 |
| 1132 | `  render();` | 执行 app.js 中的这一行逻辑。 |
| 1133 | `}` | 结束当前代码块或数据结构。 |
| 1134 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 1135 | `function parseMcpConfig(text, fileName) {` | 定义一个可复用函数。 |
| 1136 | `  const trimmed = String(text \|\| "").trim();` | 声明一个不会被重新赋值的常量。 |
| 1137 | `  if (!trimmed) return [];` | 根据条件决定是否执行后续代码。 |
| 1138 | `  if (fileName.toLowerCase().endsWith(".json") \|\| trimmed.startsWith("{")) {` | 根据条件决定是否执行后续代码。 |
| 1139 | `    try {` | 开始捕获可能失败的代码块。 |
| 1140 | `      const data = JSON.parse(trimmed);` | 声明一个不会被重新赋值的常量。 |
| 1141 | `      return extractJsonMcpServers(data, fileName);` | 返回当前函数的结果。 |
| 1142 | `    } catch {` | 执行 app.js 中的这一行逻辑。 |
| 1143 | `      return [];` | 返回当前函数的结果。 |
| 1144 | `    }` | 结束当前代码块或数据结构。 |
| 1145 | `  }` | 结束当前代码块或数据结构。 |
| 1146 | `  return parseTomlMcpServers(trimmed, fileName);` | 返回当前函数的结果。 |
| 1147 | `}` | 结束当前代码块或数据结构。 |
| 1148 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 1149 | `function extractJsonMcpServers(data, fileName) {` | 定义一个可复用函数。 |
| 1150 | `  const found = [];` | 声明一个不会被重新赋值的常量。 |
| 1151 | `  walkObject(data, (value, path) => {` | 执行 app.js 中的这一行逻辑。 |
| 1152 | `    if (!value \|\| typeof value !== "object" \|\| Array.isArray(value)) return;` | 根据条件决定是否执行后续代码。 |
| 1153 | `    if (path[path.length - 1] !== "mcpServers") return;` | 根据条件决定是否执行后续代码。 |
| 1154 | `    Object.entries(value).forEach(([name, config]) => {` | 执行 app.js 中的这一行逻辑。 |
| 1155 | `      if (!config \|\| typeof config !== "object") return;` | 根据条件决定是否执行后续代码。 |
| 1156 | `      found.push({` | 向数组追加一项内容。 |
| 1157 | `        id: stableId(["mcp", fileName, name]),` | 执行 app.js 中的这一行逻辑。 |
| 1158 | `        name,` | 执行 app.js 中的这一行逻辑。 |
| 1159 | `        enabled: config.enabled === false ? "false" : "true",` | 执行 app.js 中的这一行逻辑。 |
| 1160 | `        enabledBool: config.enabled !== false,` | 执行 app.js 中的这一行逻辑。 |
| 1161 | `        command: config.command \|\| "",` | 执行 app.js 中的这一行逻辑。 |
| 1162 | `        args: Array.isArray(config.args) ? config.args.join(" ") : config.args \|\| "",` | 执行 app.js 中的这一行逻辑。 |
| 1163 | `        url: config.url \|\| "",` | 执行 app.js 中的这一行逻辑。 |
| 1164 | `        transport: config.url ? "remote" : config.command ? "local" : config.transport \|\| "unknown",` | 执行 app.js 中的这一行逻辑。 |
| 1165 | `        configPath: fileName,` | 执行 app.js 中的这一行逻辑。 |
| 1166 | `        configType: "json",` | 执行 app.js 中的这一行逻辑。 |
| 1167 | `        rawConfig: redactText(JSON.stringify({ [name]: config }, null, 2)),` | 把 JavaScript 对象转换成 JSON 字符串。 |
| 1168 | `      });` | 结束当前代码块或数据结构。 |
| 1169 | `    });` | 结束当前代码块或数据结构。 |
| 1170 | `  });` | 结束当前代码块或数据结构。 |
| 1171 | `  return found;` | 返回当前函数的结果。 |
| 1172 | `}` | 结束当前代码块或数据结构。 |
| 1173 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 1174 | `function walkObject(value, visitor, path = []) {` | 定义一个可复用函数。 |
| 1175 | `  visitor(value, path);` | 执行 app.js 中的这一行逻辑。 |
| 1176 | `  if (!value \|\| typeof value !== "object") return;` | 根据条件决定是否执行后续代码。 |
| 1177 | `  Object.entries(value).forEach(([key, child]) => walkObject(child, visitor, [...path, key]));` | 执行 app.js 中的这一行逻辑。 |
| 1178 | `}` | 结束当前代码块或数据结构。 |
| 1179 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 1180 | `function parseTomlMcpServers(text, fileName) {` | 定义一个可复用函数。 |
| 1181 | `  const lines = text.split(/\\r?\\n/);` | 声明一个不会被重新赋值的常量。 |
| 1182 | `  const servers = [];` | 声明一个不会被重新赋值的常量。 |
| 1183 | `  let current = null;` | 声明一个后续可能变化的变量。 |
| 1184 | `  let rawLines = [];` | 声明一个后续可能变化的变量。 |
| 1185 | `  const finish = () => {` | 声明一个不会被重新赋值的常量。 |
| 1186 | `    if (!current) return;` | 根据条件决定是否执行后续代码。 |
| 1187 | `    current.rawConfig = redactText(rawLines.join("\\n"));` | 执行 app.js 中的这一行逻辑。 |
| 1188 | `    if (!current.transport) current.transport = current.url ? "remote" : current.command ? "local" : "unknown";` | 根据条件决定是否执行后续代码。 |
| 1189 | `    servers.push(current);` | 向数组追加一项内容。 |
| 1190 | `  };` | 结束当前代码块或数据结构。 |
| 1191 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 1192 | `  lines.forEach((line) => {` | 执行 app.js 中的这一行逻辑。 |
| 1193 | `    const section = line.match(/^\\s*\\[(?:mcp_servers\|mcpServers)\\.("?)([^\\]"]+)\\1\\]\\s*$/);` | 声明一个不会被重新赋值的常量。 |
| 1194 | `    if (section) {` | 根据条件决定是否执行后续代码。 |
| 1195 | `      finish();` | 执行 app.js 中的这一行逻辑。 |
| 1196 | `      const name = section[2];` | 声明一个不会被重新赋值的常量。 |
| 1197 | `      current = {` | 执行 app.js 中的这一行逻辑。 |
| 1198 | `        id: stableId(["mcp", fileName, name]),` | 执行 app.js 中的这一行逻辑。 |
| 1199 | `        name,` | 执行 app.js 中的这一行逻辑。 |
| 1200 | `        enabled: "true",` | 执行 app.js 中的这一行逻辑。 |
| 1201 | `        enabledBool: true,` | 执行 app.js 中的这一行逻辑。 |
| 1202 | `        command: "",` | 执行 app.js 中的这一行逻辑。 |
| 1203 | `        args: "",` | 执行 app.js 中的这一行逻辑。 |
| 1204 | `        url: "",` | 执行 app.js 中的这一行逻辑。 |
| 1205 | `        transport: "",` | 执行 app.js 中的这一行逻辑。 |
| 1206 | `        configPath: fileName,` | 执行 app.js 中的这一行逻辑。 |
| 1207 | `        configType: "toml",` | 执行 app.js 中的这一行逻辑。 |
| 1208 | `      };` | 结束当前代码块或数据结构。 |
| 1209 | `      rawLines = [line];` | 执行 app.js 中的这一行逻辑。 |
| 1210 | `      return;` | 执行 app.js 中的这一行逻辑。 |
| 1211 | `    }` | 结束当前代码块或数据结构。 |
| 1212 | `    if (line.match(/^\\s*\\[/)) {` | 根据条件决定是否执行后续代码。 |
| 1213 | `      finish();` | 执行 app.js 中的这一行逻辑。 |
| 1214 | `      current = null;` | 执行 app.js 中的这一行逻辑。 |
| 1215 | `      rawLines = [];` | 执行 app.js 中的这一行逻辑。 |
| 1216 | `      return;` | 执行 app.js 中的这一行逻辑。 |
| 1217 | `    }` | 结束当前代码块或数据结构。 |
| 1218 | `    if (!current) return;` | 根据条件决定是否执行后续代码。 |
| 1219 | `    rawLines.push(line);` | 向数组追加一项内容。 |
| 1220 | `    const kv = line.match(/^\\s*([A-Za-z0-9_-]+)\\s*=\\s*(.+?)\\s*$/);` | 声明一个不会被重新赋值的常量。 |
| 1221 | `    if (!kv) return;` | 根据条件决定是否执行后续代码。 |
| 1222 | `    const key = kv[1];` | 声明一个不会被重新赋值的常量。 |
| 1223 | `    const value = cleanScalar(kv[2]);` | 声明一个不会被重新赋值的常量。 |
| 1224 | `    if (key === "enabled") {` | 根据条件决定是否执行后续代码。 |
| 1225 | `      current.enabled = value;` | 执行 app.js 中的这一行逻辑。 |
| 1226 | `      current.enabledBool = value !== "false";` | 执行 app.js 中的这一行逻辑。 |
| 1227 | `    } else if (key === "command" \|\| key === "url" \|\| key === "transport") {` | 在前一个条件不成立时检查另一个条件。 |
| 1228 | `      current[key] = value;` | 执行 app.js 中的这一行逻辑。 |
| 1229 | `    } else if (key === "args") {` | 在前一个条件不成立时检查另一个条件。 |
| 1230 | `      current.args = value;` | 执行 app.js 中的这一行逻辑。 |
| 1231 | `    } else if (key === "bearer_token_env_var") {` | 在前一个条件不成立时检查另一个条件。 |
| 1232 | `      current.auth = \`env:${value}\`;` | 执行 app.js 中的这一行逻辑。 |
| 1233 | `    }` | 结束当前代码块或数据结构。 |
| 1234 | `  });` | 结束当前代码块或数据结构。 |
| 1235 | `  finish();` | 执行 app.js 中的这一行逻辑。 |
| 1236 | `  return servers;` | 返回当前函数的结果。 |
| 1237 | `}` | 结束当前代码块或数据结构。 |
| 1238 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 1239 | `function cleanScalar(value) {` | 定义一个可复用函数。 |
| 1240 | `  return String(value \|\| "")` | 返回当前函数的结果。 |
| 1241 | `    .trim()` | 执行 app.js 中的这一行逻辑。 |
| 1242 | `    .replace(/^["']\|["']$/g, "");` | 对字符串内容做替换处理。 |
| 1243 | `}` | 结束当前代码块或数据结构。 |
| 1244 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 1245 | `function redactText(text) {` | 定义一个可复用函数。 |
| 1246 | `  return String(text \|\| "")` | 返回当前函数的结果。 |
| 1247 | `    .replace(/(access[_-]?token\\s*[:=]\\s*["']?)[^"'\\s,}]+/gi, "$1***")` | 对字符串内容做替换处理。 |
| 1248 | `    .replace(/(api[_-]?key\\s*[:=]\\s*["']?)[^"'\\s,}]+/gi, "$1***")` | 对字符串内容做替换处理。 |
| 1249 | `    .replace(/(secret\\s*[:=]\\s*["']?)[^"'\\s,}]+/gi, "$1***")` | 对字符串内容做替换处理。 |
| 1250 | `    .replace(/(bearer\\s+)[A-Za-z0-9._~+/=-]{12,}/gi, "$1***");` | 对字符串内容做替换处理。 |
| 1251 | `}` | 结束当前代码块或数据结构。 |
| 1252 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 1253 | `async function chooseSkillDirectory() {` | 定义一个可使用 await 的异步函数。 |
| 1254 | `  if (window.seeThroughDesktop?.pickSkillDirectory) {` | 根据条件决定是否执行后续代码。 |
| 1255 | `    const data = await window.seeThroughDesktop.pickSkillDirectory();` | 声明一个不会被重新赋值的常量。 |
| 1256 | `    if (!data) return;` | 根据条件决定是否执行后续代码。 |
| 1257 | `    snapshot = normalizeSnapshot(data);` | 执行 app.js 中的这一行逻辑。 |
| 1258 | `    currentView = "skills";` | 执行 app.js 中的这一行逻辑。 |
| 1259 | `    selected.skills = "";` | 执行 app.js 中的这一行逻辑。 |
| 1260 | `    activeCategory = "全部";` | 执行 app.js 中的这一行逻辑。 |
| 1261 | `    activeSource = "全部";` | 执行 app.js 中的这一行逻辑。 |
| 1262 | `    render();` | 执行 app.js 中的这一行逻辑。 |
| 1263 | `    return;` | 执行 app.js 中的这一行逻辑。 |
| 1264 | `  }` | 结束当前代码块或数据结构。 |
| 1265 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 1266 | `  if (!window.showDirectoryPicker) {` | 根据条件决定是否执行后续代码。 |
| 1267 | `    alert("当前浏览器不支持直接选择目录。请运行 \`node scan-local.mjs\` 生成快照，或导入已有 JSON/JS 快照。");` | 执行 app.js 中的这一行逻辑。 |
| 1268 | `    return;` | 执行 app.js 中的这一行逻辑。 |
| 1269 | `  }` | 结束当前代码块或数据结构。 |
| 1270 | `  const root = await window.showDirectoryPicker({ mode: "read" });` | 声明一个不会被重新赋值的常量。 |
| 1271 | `  const skills = await readSkillsFromDirectory(root);` | 声明一个不会被重新赋值的常量。 |
| 1272 | `  snapshot = normalizeSnapshot({` | 执行 app.js 中的这一行逻辑。 |
| 1273 | `    ...snapshot,` | 执行 app.js 中的这一行逻辑。 |
| 1274 | `    generatedAt: new Date().toISOString(),` | 执行 app.js 中的这一行逻辑。 |
| 1275 | `    skills,` | 执行 app.js 中的这一行逻辑。 |
| 1276 | `    presetPaths: [\`浏览器选择目录: ${root.name}\`, ...defaultPresetPaths],` | 执行 app.js 中的这一行逻辑。 |
| 1277 | `  });` | 结束当前代码块或数据结构。 |
| 1278 | `  currentView = "skills";` | 执行 app.js 中的这一行逻辑。 |
| 1279 | `  selected.skills = "";` | 执行 app.js 中的这一行逻辑。 |
| 1280 | `  activeCategory = "全部";` | 执行 app.js 中的这一行逻辑。 |
| 1281 | `  activeSource = "全部";` | 执行 app.js 中的这一行逻辑。 |
| 1282 | `  render();` | 执行 app.js 中的这一行逻辑。 |
| 1283 | `}` | 结束当前代码块或数据结构。 |
| 1284 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 1285 | `async function readSkillsFromDirectory(rootHandle) {` | 定义一个可使用 await 的异步函数。 |
| 1286 | `  const records = [];` | 声明一个不会被重新赋值的常量。 |
| 1287 | `  async function walk(handle, parts) {` | 定义一个可使用 await 的异步函数。 |
| 1288 | `    for await (const [name, child] of handle.entries()) {` | 开始循环处理一组数据。 |
| 1289 | `      if (child.kind === "directory") {` | 根据条件决定是否执行后续代码。 |
| 1290 | `        if (shouldSkipDirectory(name)) continue;` | 根据条件决定是否执行后续代码。 |
| 1291 | `        await walk(child, [...parts, name]);` | 等待异步操作完成后再继续。 |
| 1292 | `        continue;` | 执行 app.js 中的这一行逻辑。 |
| 1293 | `      }` | 结束当前代码块或数据结构。 |
| 1294 | `      if (child.kind !== "file" \|\| name.toLowerCase() !== "skill.md") continue;` | 根据条件决定是否执行后续代码。 |
| 1295 | `      const file = await child.getFile();` | 声明一个不会被重新赋值的常量。 |
| 1296 | `      const raw = await file.text();` | 声明一个不会被重新赋值的常量。 |
| 1297 | `      const directory = parts.join("/");` | 声明一个不会被重新赋值的常量。 |
| 1298 | `      const frontmatter = parseFrontmatter(raw).data;` | 声明一个不会被重新赋值的常量。 |
| 1299 | `      const skillNameFromPath = parts[parts.length - 1] \|\| frontmatter.name \|\| "skill";` | 声明一个不会被重新赋值的常量。 |
| 1300 | `      records.push({` | 向数组追加一项内容。 |
| 1301 | `        id: stableId(["browser", rootHandle.name, directory]),` | 执行 app.js 中的这一行逻辑。 |
| 1302 | `        name: frontmatter.name \|\| skillNameFromPath,` | 执行 app.js 中的这一行逻辑。 |
| 1303 | `        displayName: frontmatter.name \|\| skillNameFromPath,` | 执行 app.js 中的这一行逻辑。 |
| 1304 | `        folderName: skillNameFromPath,` | 执行 app.js 中的这一行逻辑。 |
| 1305 | `        source: "browser-directory",` | 执行 app.js 中的这一行逻辑。 |
| 1306 | `        ecosystem: "Local",` | 执行 app.js 中的这一行逻辑。 |
| 1307 | `        description: frontmatter.description \|\| firstMarkdownHeading(raw),` | 执行 app.js 中的这一行逻辑。 |
| 1308 | `        frontmatter,` | 执行 app.js 中的这一行逻辑。 |
| 1309 | `        rawMarkdown: raw,` | 执行 app.js 中的这一行逻辑。 |
| 1310 | `        primaryPath: \`${rootHandle.name}/${directory}/SKILL.md\`,` | 执行 app.js 中的这一行逻辑。 |
| 1311 | `        directory: \`${rootHandle.name}/${directory}\`,` | 执行 app.js 中的这一行逻辑。 |
| 1312 | `        lineCount: countLines(raw),` | 执行 app.js 中的这一行逻辑。 |
| 1313 | `        sizeBytes: file.size,` | 执行 app.js 中的这一行逻辑。 |
| 1314 | `        lastWriteTime: new Date(file.lastModified).toISOString(),` | 执行 app.js 中的这一行逻辑。 |
| 1315 | `      });` | 结束当前代码块或数据结构。 |
| 1316 | `    }` | 结束当前代码块或数据结构。 |
| 1317 | `  }` | 结束当前代码块或数据结构。 |
| 1318 | `  await walk(rootHandle, []);` | 等待异步操作完成后再继续。 |
| 1319 | `  return records;` | 返回当前函数的结果。 |
| 1320 | `}` | 结束当前代码块或数据结构。 |
| 1321 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 1322 | `function shouldSkipDirectory(name) {` | 定义一个可复用函数。 |
| 1323 | `  return /^(node_modules\|\\.git\|dist\|build\|coverage\|output)$/i.test(name)` | 返回当前函数的结果。 |
| 1324 | `    \|\| /^skill-quarantine/i.test(name);` | 执行 app.js 中的这一行逻辑。 |
| 1325 | `}` | 结束当前代码块或数据结构。 |
| 1326 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 1327 | `function exportJson() {` | 定义一个可复用函数。 |
| 1328 | `  const payload = {` | 声明一个不会被重新赋值的常量。 |
| 1329 | `    ...snapshot,` | 执行 app.js 中的这一行逻辑。 |
| 1330 | `    exportedAt: new Date().toISOString(),` | 执行 app.js 中的这一行逻辑。 |
| 1331 | `  };` | 结束当前代码块或数据结构。 |
| 1332 | `  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });` | 声明一个不会被重新赋值的常量。 |
| 1333 | `  const url = URL.createObjectURL(blob);` | 声明一个不会被重新赋值的常量。 |
| 1334 | `  const anchor = document.createElement("a");` | 声明一个不会被重新赋值的常量。 |
| 1335 | `  anchor.href = url;` | 执行 app.js 中的这一行逻辑。 |
| 1336 | `  anchor.download = "seethrough-skill-snapshot.json";` | 执行 app.js 中的这一行逻辑。 |
| 1337 | `  anchor.click();` | 执行 app.js 中的这一行逻辑。 |
| 1338 | `  URL.revokeObjectURL(url);` | 执行 app.js 中的这一行逻辑。 |
| 1339 | `}` | 结束当前代码块或数据结构。 |
| 1340 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 1341 | `async function copyRaw() {` | 定义一个可使用 await 的异步函数。 |
| 1342 | `  await copyText(document.getElementById("rawViewer").textContent \|\| "");` | 等待异步操作完成后再继续。 |
| 1343 | `  flashButton("copyRawBtn", "已复制", "复制原文");` | 执行 app.js 中的这一行逻辑。 |
| 1344 | `}` | 结束当前代码块或数据结构。 |
| 1345 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 1346 | `async function copyText(text) {` | 定义一个可使用 await 的异步函数。 |
| 1347 | `  if (navigator.clipboard && window.isSecureContext) {` | 根据条件决定是否执行后续代码。 |
| 1348 | `    try {` | 开始捕获可能失败的代码块。 |
| 1349 | `      await navigator.clipboard.writeText(text);` | 等待异步操作完成后再继续。 |
| 1350 | `      return;` | 执行 app.js 中的这一行逻辑。 |
| 1351 | `    } catch {` | 执行 app.js 中的这一行逻辑。 |
| 1352 | `      // Fall back to the textarea route below.` | 普通源码注释。 |
| 1353 | `    }` | 结束当前代码块或数据结构。 |
| 1354 | `  }` | 结束当前代码块或数据结构。 |
| 1355 | `  const textarea = document.createElement("textarea");` | 声明一个不会被重新赋值的常量。 |
| 1356 | `  textarea.value = text;` | 执行 app.js 中的这一行逻辑。 |
| 1357 | `  textarea.setAttribute("readonly", "");` | 执行 app.js 中的这一行逻辑。 |
| 1358 | `  textarea.style.position = "fixed";` | 执行 app.js 中的这一行逻辑。 |
| 1359 | `  textarea.style.left = "-9999px";` | 执行 app.js 中的这一行逻辑。 |
| 1360 | `  document.body.appendChild(textarea);` | 执行 app.js 中的这一行逻辑。 |
| 1361 | `  textarea.select();` | 执行 app.js 中的这一行逻辑。 |
| 1362 | `  document.execCommand("copy");` | 执行 app.js 中的这一行逻辑。 |
| 1363 | `  textarea.remove();` | 执行 app.js 中的这一行逻辑。 |
| 1364 | `}` | 结束当前代码块或数据结构。 |
| 1365 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 1366 | `function flashButton(id, text, original) {` | 定义一个可复用函数。 |
| 1367 | `  const button = document.getElementById(id);` | 声明一个不会被重新赋值的常量。 |
| 1368 | `  button.textContent = text;` | 执行 app.js 中的这一行逻辑。 |
| 1369 | `  window.setTimeout(() => {` | 执行 app.js 中的这一行逻辑。 |
| 1370 | `    button.textContent = original;` | 执行 app.js 中的这一行逻辑。 |
| 1371 | `  }, 1200);` | 执行 app.js 中的这一行逻辑。 |
| 1372 | `}` | 结束当前代码块或数据结构。 |
| 1373 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 1374 | `function switchView(view) {` | 定义一个可复用函数。 |
| 1375 | `  currentView = view;` | 执行 app.js 中的这一行逻辑。 |
| 1376 | `  activeCategory = "全部";` | 执行 app.js 中的这一行逻辑。 |
| 1377 | `  activeSource = "全部";` | 执行 app.js 中的这一行逻辑。 |
| 1378 | `  document.getElementById("searchInput").value = "";` | 按 id 获取页面元素并操作它。 |
| 1379 | `  render();` | 执行 app.js 中的这一行逻辑。 |
| 1380 | `}` | 结束当前代码块或数据结构。 |
| 1381 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 1382 | `async function bootstrap() {` | 定义一个可使用 await 的异步函数。 |
| 1383 | `  applyI18n();` | 执行 app.js 中的这一行逻辑。 |
| 1384 | `  if (window.seeThroughDesktop?.scanLocal) {` | 根据条件决定是否执行后续代码。 |
| 1385 | `    try {` | 开始捕获可能失败的代码块。 |
| 1386 | `      snapshot = normalizeSnapshot(await window.seeThroughDesktop.scanLocal({}));` | 执行 app.js 中的这一行逻辑。 |
| 1387 | `    } catch (error) {` | 执行 app.js 中的这一行逻辑。 |
| 1388 | `      console.error(error);` | 向命令行输出错误信息。 |
| 1389 | `    }` | 结束当前代码块或数据结构。 |
| 1390 | `  } else if (!window.SKILL_DATA) {` | 在前一个条件不成立时检查另一个条件。 |
| 1391 | `    await tryLoadSnapshotScript();` | 等待异步操作完成后再继续。 |
| 1392 | `  }` | 结束当前代码块或数据结构。 |
| 1393 | `  if (window.SKILL_DATA) snapshot = normalizeSnapshot(window.SKILL_DATA);` | 根据条件决定是否执行后续代码。 |
| 1394 | `  render();` | 执行 app.js 中的这一行逻辑。 |
| 1395 | `}` | 结束当前代码块或数据结构。 |
| 1396 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 1397 | `function tryLoadSnapshotScript() {` | 定义一个可复用函数。 |
| 1398 | `  return new Promise((resolve) => {` | 返回当前函数的结果。 |
| 1399 | `    const script = document.createElement("script");` | 声明一个不会被重新赋值的常量。 |
| 1400 | `    script.src = "./skills-data.js";` | 执行 app.js 中的这一行逻辑。 |
| 1401 | `    script.onload = () => resolve(true);` | 执行 app.js 中的这一行逻辑。 |
| 1402 | `    script.onerror = () => resolve(false);` | 执行 app.js 中的这一行逻辑。 |
| 1403 | `    document.head.appendChild(script);` | 执行 app.js 中的这一行逻辑。 |
| 1404 | `  });` | 结束当前代码块或数据结构。 |
| 1405 | `}` | 结束当前代码块或数据结构。 |
| 1406 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 1407 | `document.getElementById("searchInput").addEventListener("input", render);` | 绑定浏览器事件处理逻辑。 |
| 1408 | `document.getElementById("sortSelect").addEventListener("change", render);` | 绑定浏览器事件处理逻辑。 |
| 1409 | `document.getElementById("exportBtn").addEventListener("click", exportJson);` | 绑定浏览器事件处理逻辑。 |
| 1410 | `document.getElementById("copyRawBtn").addEventListener("click", copyRaw);` | 绑定浏览器事件处理逻辑。 |
| 1411 | `document.getElementById("languageSelect").addEventListener("change", (event) => {` | 绑定浏览器事件处理逻辑。 |
| 1412 | `  uiLanguage = event.target.value;` | 执行 app.js 中的这一行逻辑。 |
| 1413 | `  localStorage.setItem("seethrough-skill:language", uiLanguage);` | 执行 app.js 中的这一行逻辑。 |
| 1414 | `  applyI18n();` | 执行 app.js 中的这一行逻辑。 |
| 1415 | `  render();` | 执行 app.js 中的这一行逻辑。 |
| 1416 | `});` | 结束当前代码块或数据结构。 |
| 1417 | `document.getElementById("rawOriginalBtn").addEventListener("click", () => {` | 绑定浏览器事件处理逻辑。 |
| 1418 | `  rawMode = "original";` | 执行 app.js 中的这一行逻辑。 |
| 1419 | `  updateRawViewer();` | 执行 app.js 中的这一行逻辑。 |
| 1420 | `});` | 结束当前代码块或数据结构。 |
| 1421 | `document.getElementById("rawTranslatedBtn").addEventListener("click", () => {` | 绑定浏览器事件处理逻辑。 |
| 1422 | `  rawMode = "translated";` | 执行 app.js 中的这一行逻辑。 |
| 1423 | `  updateRawViewer();` | 执行 app.js 中的这一行逻辑。 |
| 1424 | `});` | 结束当前代码块或数据结构。 |
| 1425 | `document.getElementById("loadSnapshotBtn").addEventListener("click", () => document.getElementById("snapshotInput").click());` | 绑定浏览器事件处理逻辑。 |
| 1426 | `document.getElementById("loadConfigBtn").addEventListener("click", async () => {` | 绑定浏览器事件处理逻辑。 |
| 1427 | `  if (window.seeThroughDesktop?.pickMcpConfig) {` | 根据条件决定是否执行后续代码。 |
| 1428 | `    const data = await window.seeThroughDesktop.pickMcpConfig();` | 声明一个不会被重新赋值的常量。 |
| 1429 | `    if (data) {` | 根据条件决定是否执行后续代码。 |
| 1430 | `      snapshot = normalizeSnapshot(data);` | 执行 app.js 中的这一行逻辑。 |
| 1431 | `      currentView = "mcp";` | 执行 app.js 中的这一行逻辑。 |
| 1432 | `      selected.mcp = "";` | 执行 app.js 中的这一行逻辑。 |
| 1433 | `      render();` | 执行 app.js 中的这一行逻辑。 |
| 1434 | `    }` | 结束当前代码块或数据结构。 |
| 1435 | `    return;` | 执行 app.js 中的这一行逻辑。 |
| 1436 | `  }` | 结束当前代码块或数据结构。 |
| 1437 | `  document.getElementById("configInput").click();` | 按 id 获取页面元素并操作它。 |
| 1438 | `});` | 结束当前代码块或数据结构。 |
| 1439 | `document.getElementById("chooseDirectoryBtn").addEventListener("click", () => chooseSkillDirectory().catch((error) => {` | 绑定浏览器事件处理逻辑。 |
| 1440 | `  console.error(error);` | 向命令行输出错误信息。 |
| 1441 | `  alert(\`读取目录失败：${error.message \|\| error}\`);` | 执行 app.js 中的这一行逻辑。 |
| 1442 | `}));` | 执行 app.js 中的这一行逻辑。 |
| 1443 | `document.getElementById("snapshotInput").addEventListener("change", (event) => {` | 绑定浏览器事件处理逻辑。 |
| 1444 | `  const file = event.target.files && event.target.files[0];` | 声明一个不会被重新赋值的常量。 |
| 1445 | `  if (file) loadSnapshotFile(file).catch((error) => alert(\`导入快照失败：${error.message \|\| error}\`));` | 根据条件决定是否执行后续代码。 |
| 1446 | `  event.target.value = "";` | 执行 app.js 中的这一行逻辑。 |
| 1447 | `});` | 结束当前代码块或数据结构。 |
| 1448 | `document.getElementById("configInput").addEventListener("change", (event) => {` | 绑定浏览器事件处理逻辑。 |
| 1449 | `  const file = event.target.files && event.target.files[0];` | 声明一个不会被重新赋值的常量。 |
| 1450 | `  if (file) loadConfigFile(file).catch((error) => alert(\`导入配置失败：${error.message \|\| error}\`));` | 根据条件决定是否执行后续代码。 |
| 1451 | `  event.target.value = "";` | 执行 app.js 中的这一行逻辑。 |
| 1452 | `});` | 结束当前代码块或数据结构。 |
| 1453 | `document.querySelectorAll(".view-tabs button").forEach((button) => {` | 用 CSS 选择器查找页面元素。 |
| 1454 | `  button.addEventListener("click", () => switchView(button.dataset.view));` | 绑定浏览器事件处理逻辑。 |
| 1455 | `});` | 结束当前代码块或数据结构。 |
| 1456 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 1457 | `bootstrap();` | 执行 app.js 中的这一行逻辑。 |
| 1458 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |

## scan-local.mjs

| 行 | 代码 | 说明 |
| ---: | --- | --- |
| 1 | `#!/usr/bin/env node` | 声明脚本可以被命令行直接执行。 |
| 2 | `import fs from "node:fs/promises";` | 从 Node.js 内置模块或其他模块导入功能。 |
| 3 | `import os from "node:os";` | 从 Node.js 内置模块或其他模块导入功能。 |
| 4 | `import path from "node:path";` | 从 Node.js 内置模块或其他模块导入功能。 |
| 5 | `import { fileURLToPath } from "node:url";` | 从 Node.js 内置模块或其他模块导入功能。 |
| 6 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 7 | `export async function collectSnapshot(options = {}) {` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 8 | `  const cwd = path.resolve(options.cwd \|\| process.cwd());` | 声明一个不会被重新赋值的常量。 |
| 9 | `  const home = options.home \|\| os.homedir();` | 声明一个不会被重新赋值的常量。 |
| 10 | `  const codexHome = path.resolve(options.codexHome \|\| process.env.CODEX_HOME \|\| path.join(home, ".codex"));` | 声明一个不会被重新赋值的常量。 |
| 11 | `  const claudeHome = path.resolve(options.claudeHome \|\| process.env.CLAUDE_HOME \|\| path.join(home, ".claude"));` | 声明一个不会被重新赋值的常量。 |
| 12 | `  const codexConfigPath = options.codexConfig` | 声明一个不会被重新赋值的常量。 |
| 13 | `    ? path.resolve(options.codexConfig)` | 处理跨平台文件路径。 |
| 14 | `    : path.join(codexHome, "config.toml");` | 处理跨平台文件路径。 |
| 15 | `  const enabledCodexPlugins = await readEnabledCodexPlugins(codexConfigPath);` | 声明一个不会被重新赋值的常量。 |
| 16 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 17 | `  const skillRoots = defaultSkillRoots({` | 声明一个不会被重新赋值的常量。 |
| 18 | `    codexHome,` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 19 | `    claudeHome,` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 20 | `    cwd,` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 21 | `    enabledCodexPlugins,` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 22 | `    includePluginCacheAll: options.includePluginCacheAll,` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 23 | `  })` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 24 | `    .concat((options.skillRoot \|\| []).map((root) => ({` | 把数组中的每一项转换成新结果。 |
| 25 | `      label: "自定义 Skill 根目录",` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 26 | `      path: path.resolve(root),` | 处理跨平台文件路径。 |
| 27 | `      ecosystem: "Custom",` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 28 | `      source: "custom",` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 29 | `    })));` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 30 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 31 | `  const configPaths = defaultConfigPaths({ codexHome, claudeHome, cwd, home, codexConfigPath })` | 声明一个不会被重新赋值的常量。 |
| 32 | `    .concat((options.config \|\| []).map((filePath) => ({` | 把数组中的每一项转换成新结果。 |
| 33 | `      label: "自定义 MCP 配置",` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 34 | `      path: path.resolve(filePath),` | 处理跨平台文件路径。 |
| 35 | `      ecosystem: "Custom",` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 36 | `      type: inferConfigType(filePath),` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 37 | `    })));` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 38 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 39 | `  const presetPaths = [];` | 声明一个不会被重新赋值的常量。 |
| 40 | `  for (const entry of skillRoots) {` | 开始循环处理一组数据。 |
| 41 | `    presetPaths.push({` | 向数组追加一项内容。 |
| 42 | `      kind: "skill-root",` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 43 | `      label: entry.label,` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 44 | `      path: entry.path,` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 45 | `      exists: await exists(entry.path),` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 46 | `    });` | 结束当前代码块或数据结构。 |
| 47 | `  }` | 结束当前代码块或数据结构。 |
| 48 | `  for (const entry of configPaths) {` | 开始循环处理一组数据。 |
| 49 | `    presetPaths.push({` | 向数组追加一项内容。 |
| 50 | `      kind: "mcp-config",` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 51 | `      label: entry.label,` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 52 | `      path: entry.path,` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 53 | `      exists: await exists(entry.path),` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 54 | `    });` | 结束当前代码块或数据结构。 |
| 55 | `  }` | 结束当前代码块或数据结构。 |
| 56 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 57 | `  const skills = await scanSkills(skillRoots);` | 声明一个不会被重新赋值的常量。 |
| 58 | `  const mcpServers = await scanMcpServers(configPaths);` | 声明一个不会被重新赋值的常量。 |
| 59 | `  const globalSettings = await readCodexGlobalSettings(codexConfigPath, mcpServers);` | 声明一个不会被重新赋值的常量。 |
| 60 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 61 | `  return {` | 返回当前函数的结果。 |
| 62 | `    projectName: "SeeThrough Skill",` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 63 | `    generatedAt: new Date().toISOString(),` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 64 | `    platform: process.platform,` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 65 | `    home,` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 66 | `    codexHome,` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 67 | `    claudeHome,` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 68 | `    configPath: codexConfigPath,` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 69 | `    enabledCodexPlugins,` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 70 | `    presetPaths,` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 71 | `    globalSettings,` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 72 | `    total: skills.length,` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 73 | `    skills,` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 74 | `    mcpServers,` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 75 | `  };` | 结束当前代码块或数据结构。 |
| 76 | `}` | 结束当前代码块或数据结构。 |
| 77 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 78 | `export async function writeSnapshot(payload, options = {}) {` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 79 | `  const cwd = path.resolve(options.cwd \|\| process.cwd());` | 声明一个不会被重新赋值的常量。 |
| 80 | `  const outPath = path.resolve(options.out \|\| path.join(cwd, "skills-data.js"));` | 声明一个不会被重新赋值的常量。 |
| 81 | `  const jsonPath = options.json === true` | 声明一个不会被重新赋值的常量。 |
| 82 | `    ? path.resolve(cwd, "skill-snapshot.json")` | 处理跨平台文件路径。 |
| 83 | `    : options.json` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 84 | `      ? path.resolve(options.json)` | 处理跨平台文件路径。 |
| 85 | `      : "";` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 86 | `  const json = JSON.stringify(payload, null, 2);` | 声明一个不会被重新赋值的常量。 |
| 87 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 88 | `  await fs.writeFile(outPath, \`window.SKILL_DATA = ${json};\\n\`, "utf8");` | 等待异步操作完成后再继续。 |
| 89 | `  if (jsonPath) await fs.writeFile(jsonPath, \`${json}\\n\`, "utf8");` | 根据条件决定是否执行后续代码。 |
| 90 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 91 | `  return { outPath, jsonPath };` | 返回当前函数的结果。 |
| 92 | `}` | 结束当前代码块或数据结构。 |
| 93 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 94 | `export async function main(argv = process.argv.slice(2)) {` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 95 | `  const args = parseArgs(argv);` | 声明一个不会被重新赋值的常量。 |
| 96 | `  if (args.help) {` | 根据条件决定是否执行后续代码。 |
| 97 | `    printHelp();` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 98 | `    return;` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 99 | `  }` | 结束当前代码块或数据结构。 |
| 100 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 101 | `  const payload = await collectSnapshot(args);` | 声明一个不会被重新赋值的常量。 |
| 102 | `  const written = await writeSnapshot(payload, args);` | 声明一个不会被重新赋值的常量。 |
| 103 | `  console.log(\`Generated ${written.outPath}\`);` | 向命令行输出普通运行信息。 |
| 104 | `  if (written.jsonPath) console.log(\`Generated ${written.jsonPath}\`);` | 根据条件决定是否执行后续代码。 |
| 105 | `  console.log(\`Skills: ${payload.skills.length}\`);` | 向命令行输出普通运行信息。 |
| 106 | `  console.log(\`MCP servers: ${payload.mcpServers.length}\`);` | 向命令行输出普通运行信息。 |
| 107 | `}` | 结束当前代码块或数据结构。 |
| 108 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 109 | `function parseArgs(argv) {` | 定义一个可复用函数。 |
| 110 | `  const result = {` | 声明一个不会被重新赋值的常量。 |
| 111 | `    skillRoot: [],` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 112 | `    config: [],` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 113 | `  };` | 结束当前代码块或数据结构。 |
| 114 | `  for (let index = 0; index < argv.length; index += 1) {` | 开始循环处理一组数据。 |
| 115 | `    const arg = argv[index];` | 声明一个不会被重新赋值的常量。 |
| 116 | `    const next = argv[index + 1];` | 声明一个不会被重新赋值的常量。 |
| 117 | `    if (arg === "--help" \|\| arg === "-h") {` | 根据条件决定是否执行后续代码。 |
| 118 | `      result.help = true;` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 119 | `    } else if (arg === "--out") {` | 在前一个条件不成立时检查另一个条件。 |
| 120 | `      result.out = next;` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 121 | `      index += 1;` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 122 | `    } else if (arg === "--json") {` | 在前一个条件不成立时检查另一个条件。 |
| 123 | `      if (next && !next.startsWith("--")) {` | 根据条件决定是否执行后续代码。 |
| 124 | `        result.json = next;` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 125 | `        index += 1;` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 126 | `      } else {` | 处理前面条件都不成立的情况。 |
| 127 | `        result.json = true;` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 128 | `      }` | 结束当前代码块或数据结构。 |
| 129 | `    } else if (arg === "--codex-home") {` | 在前一个条件不成立时检查另一个条件。 |
| 130 | `      result.codexHome = next;` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 131 | `      index += 1;` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 132 | `    } else if (arg === "--codex-config") {` | 在前一个条件不成立时检查另一个条件。 |
| 133 | `      result.codexConfig = next;` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 134 | `      index += 1;` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 135 | `    } else if (arg === "--claude-home") {` | 在前一个条件不成立时检查另一个条件。 |
| 136 | `      result.claudeHome = next;` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 137 | `      index += 1;` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 138 | `    } else if (arg === "--skill-root") {` | 在前一个条件不成立时检查另一个条件。 |
| 139 | `      result.skillRoot.push(next);` | 向数组追加一项内容。 |
| 140 | `      index += 1;` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 141 | `    } else if (arg === "--config") {` | 在前一个条件不成立时检查另一个条件。 |
| 142 | `      result.config.push(next);` | 向数组追加一项内容。 |
| 143 | `      index += 1;` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 144 | `    } else if (arg === "--include-plugin-cache-all") {` | 在前一个条件不成立时检查另一个条件。 |
| 145 | `      result.includePluginCacheAll = true;` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 146 | `    } else {` | 处理前面条件都不成立的情况。 |
| 147 | `      throw new Error(\`Unknown argument: ${arg}\`);` | 主动抛出错误，中断当前流程。 |
| 148 | `    }` | 结束当前代码块或数据结构。 |
| 149 | `  }` | 结束当前代码块或数据结构。 |
| 150 | `  return result;` | 返回当前函数的结果。 |
| 151 | `}` | 结束当前代码块或数据结构。 |
| 152 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 153 | `function printHelp() {` | 定义一个可复用函数。 |
| 154 | `  console.log(\`SeeThrough Skill scanner` | 向命令行输出普通运行信息。 |
| 155 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 156 | `Usage:` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 157 | `  node scan-local.mjs` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 158 | `  node scan-local.mjs --json` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 159 | `  node scan-local.mjs --skill-root "D:\\\\skills" --config "D:\\\\config.toml"` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 160 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 161 | `Options:` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 162 | `  --out <path>          Write browser snapshot JS. Default: ./skills-data.js` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 163 | `  --json [path]         Also write plain JSON. Default path: ./skill-snapshot.json` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 164 | `  --codex-home <path>   Override Codex home. Default: CODEX_HOME or ~/.codex` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 165 | `  --codex-config <path> Override Codex config. Default: <codex-home>/config.toml` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 166 | `  --claude-home <path>  Override Claude home. Default: CLAUDE_HOME or ~/.claude` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 167 | `  --skill-root <path>   Add a Skill root. Can be repeated.` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 168 | `  --config <path>       Add an MCP config file. Can be repeated.` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 169 | `  --include-plugin-cache-all` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 170 | `                        Include every cached Codex plugin Skill, not only enabled plugins.` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 171 | `\`);` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 172 | `}` | 结束当前代码块或数据结构。 |
| 173 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 174 | `function defaultSkillRoots({ codexHome, claudeHome, cwd, enabledCodexPlugins, includePluginCacheAll }) {` | 定义一个可复用函数。 |
| 175 | `  const roots = [` | 声明一个不会被重新赋值的常量。 |
| 176 | `    {` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 177 | `      label: "Codex system skills",` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 178 | `      path: path.join(codexHome, "skills", ".system"),` | 处理跨平台文件路径。 |
| 179 | `      ecosystem: "Codex",` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 180 | `      source: "codex-system",` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 181 | `      recursive: false,` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 182 | `    },` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 183 | `    {` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 184 | `      label: "Codex local skills",` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 185 | `      path: path.join(codexHome, "skills"),` | 处理跨平台文件路径。 |
| 186 | `      ecosystem: "Codex",` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 187 | `      source: "codex-local",` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 188 | `      recursive: false,` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 189 | `    },` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 190 | `    {` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 191 | `      label: "Codex plugin cache",` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 192 | `      path: path.join(codexHome, "plugins", "cache"),` | 处理跨平台文件路径。 |
| 193 | `      ecosystem: "Codex",` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 194 | `      source: "codex-plugin-cache",` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 195 | `      recursive: true,` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 196 | `      enabledPlugins: includePluginCacheAll ? null : enabledCodexPlugins,` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 197 | `    },` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 198 | `    {` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 199 | `      label: "Claude user skills",` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 200 | `      path: path.join(claudeHome, "skills"),` | 处理跨平台文件路径。 |
| 201 | `      ecosystem: "Claude",` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 202 | `      source: "claude-user",` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 203 | `      recursive: false,` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 204 | `    },` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 205 | `    {` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 206 | `      label: "Claude plugin skills",` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 207 | `      path: path.join(claudeHome, "plugins"),` | 处理跨平台文件路径。 |
| 208 | `      ecosystem: "Claude",` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 209 | `      source: "claude-plugin",` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 210 | `      recursive: true,` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 211 | `    },` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 212 | `    {` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 213 | `      label: "Project Claude skills",` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 214 | `      path: path.join(cwd, ".claude", "skills"),` | 处理跨平台文件路径。 |
| 215 | `      ecosystem: "Project",` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 216 | `      source: "project-claude",` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 217 | `      recursive: false,` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 218 | `    },` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 219 | `    {` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 220 | `      label: "Project Codex skills",` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 221 | `      path: path.join(cwd, ".codex", "skills"),` | 处理跨平台文件路径。 |
| 222 | `      ecosystem: "Project",` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 223 | `      source: "project-codex",` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 224 | `      recursive: false,` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 225 | `    },` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 226 | `  ];` | 结束当前代码块或数据结构。 |
| 227 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 228 | `  if (process.platform === "win32") {` | 根据条件决定是否执行后续代码。 |
| 229 | `    roots.push({` | 向数组追加一项内容。 |
| 230 | `      label: "Windows Codex home skills",` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 231 | `      path: "E:\\\\codex-home\\\\skills",` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 232 | `      ecosystem: "Codex",` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 233 | `      source: "codex-home",` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 234 | `      recursive: false,` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 235 | `    });` | 结束当前代码块或数据结构。 |
| 236 | `  }` | 结束当前代码块或数据结构。 |
| 237 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 238 | `  return dedupePaths(roots);` | 返回当前函数的结果。 |
| 239 | `}` | 结束当前代码块或数据结构。 |
| 240 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 241 | `function defaultConfigPaths({ codexHome, claudeHome, cwd, home, codexConfigPath }) {` | 定义一个可复用函数。 |
| 242 | `  const paths = [` | 声明一个不会被重新赋值的常量。 |
| 243 | `    {` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 244 | `      label: "Codex config.toml",` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 245 | `      path: codexConfigPath,` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 246 | `      ecosystem: "Codex",` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 247 | `      type: "toml",` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 248 | `    },` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 249 | `    {` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 250 | `      label: "Claude settings.json",` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 251 | `      path: path.join(claudeHome, "settings.json"),` | 处理跨平台文件路径。 |
| 252 | `      ecosystem: "Claude",` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 253 | `      type: "json",` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 254 | `    },` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 255 | `    {` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 256 | `      label: "Claude global state",` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 257 | `      path: path.join(home, ".claude.json"),` | 处理跨平台文件路径。 |
| 258 | `      ecosystem: "Claude",` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 259 | `      type: "json",` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 260 | `    },` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 261 | `    {` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 262 | `      label: "Project .mcp.json",` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 263 | `      path: path.join(cwd, ".mcp.json"),` | 处理跨平台文件路径。 |
| 264 | `      ecosystem: "Project",` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 265 | `      type: "json",` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 266 | `    },` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 267 | `  ];` | 结束当前代码块或数据结构。 |
| 268 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 269 | `  if (process.platform === "win32" && process.env.APPDATA) {` | 根据条件决定是否执行后续代码。 |
| 270 | `    paths.push({` | 向数组追加一项内容。 |
| 271 | `      label: "Claude Desktop config",` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 272 | `      path: path.join(process.env.APPDATA, "Claude", "claude_desktop_config.json"),` | 处理跨平台文件路径。 |
| 273 | `      ecosystem: "Claude Desktop",` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 274 | `      type: "json",` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 275 | `    });` | 结束当前代码块或数据结构。 |
| 276 | `  } else if (process.platform === "darwin") {` | 在前一个条件不成立时检查另一个条件。 |
| 277 | `    paths.push({` | 向数组追加一项内容。 |
| 278 | `      label: "Claude Desktop config",` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 279 | `      path: path.join(home, "Library", "Application Support", "Claude", "claude_desktop_config.json"),` | 处理跨平台文件路径。 |
| 280 | `      ecosystem: "Claude Desktop",` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 281 | `      type: "json",` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 282 | `    });` | 结束当前代码块或数据结构。 |
| 283 | `  } else {` | 处理前面条件都不成立的情况。 |
| 284 | `    paths.push({` | 向数组追加一项内容。 |
| 285 | `      label: "Claude Desktop config",` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 286 | `      path: path.join(home, ".config", "Claude", "claude_desktop_config.json"),` | 处理跨平台文件路径。 |
| 287 | `      ecosystem: "Claude Desktop",` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 288 | `      type: "json",` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 289 | `    });` | 结束当前代码块或数据结构。 |
| 290 | `  }` | 结束当前代码块或数据结构。 |
| 291 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 292 | `  return dedupePaths(paths);` | 返回当前函数的结果。 |
| 293 | `}` | 结束当前代码块或数据结构。 |
| 294 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 295 | `function dedupePaths(entries) {` | 定义一个可复用函数。 |
| 296 | `  const seen = new Set();` | 声明一个不会被重新赋值的常量。 |
| 297 | `  return entries.filter((entry) => {` | 返回当前函数的结果。 |
| 298 | `    const key = path.resolve(entry.path).toLowerCase();` | 声明一个不会被重新赋值的常量。 |
| 299 | `    if (seen.has(key)) return false;` | 根据条件决定是否执行后续代码。 |
| 300 | `    seen.add(key);` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 301 | `    return true;` | 返回当前函数的结果。 |
| 302 | `  });` | 结束当前代码块或数据结构。 |
| 303 | `}` | 结束当前代码块或数据结构。 |
| 304 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 305 | `async function scanSkills(roots) {` | 定义一个可使用 await 的异步函数。 |
| 306 | `  const records = [];` | 声明一个不会被重新赋值的常量。 |
| 307 | `  const seenFiles = new Set();` | 声明一个不会被重新赋值的常量。 |
| 308 | `  for (const root of roots) {` | 开始循环处理一组数据。 |
| 309 | `    if (!(await exists(root.path))) continue;` | 根据条件决定是否执行后续代码。 |
| 310 | `    const files = await findSkillFiles(root.path, root.recursive !== false);` | 声明一个不会被重新赋值的常量。 |
| 311 | `    for (const filePath of files) {` | 开始循环处理一组数据。 |
| 312 | `      if (root.source === "codex-plugin-cache" && Array.isArray(root.enabledPlugins) && !isEnabledCodexPluginSkill(filePath, root)) {` | 根据条件决定是否执行后续代码。 |
| 313 | `        continue;` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 314 | `      }` | 结束当前代码块或数据结构。 |
| 315 | `      const key = path.resolve(filePath).toLowerCase();` | 声明一个不会被重新赋值的常量。 |
| 316 | `      if (seenFiles.has(key)) continue;` | 根据条件决定是否执行后续代码。 |
| 317 | `      seenFiles.add(key);` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 318 | `      const record = await readSkill(filePath, root);` | 声明一个不会被重新赋值的常量。 |
| 319 | `      if (record) records.push(record);` | 根据条件决定是否执行后续代码。 |
| 320 | `    }` | 结束当前代码块或数据结构。 |
| 321 | `  }` | 结束当前代码块或数据结构。 |
| 322 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 323 | `  const byName = new Map();` | 声明一个不会被重新赋值的常量。 |
| 324 | `  for (const record of records) {` | 开始循环处理一组数据。 |
| 325 | `    const nameKey = record.name.toLowerCase();` | 声明一个不会被重新赋值的常量。 |
| 326 | `    if (!byName.has(nameKey)) byName.set(nameKey, []);` | 根据条件决定是否执行后续代码。 |
| 327 | `    byName.get(nameKey).push(record);` | 向数组追加一项内容。 |
| 328 | `  }` | 结束当前代码块或数据结构。 |
| 329 | `  for (const record of records) {` | 开始循环处理一组数据。 |
| 330 | `    const duplicates = byName.get(record.name.toLowerCase()) \|\| [];` | 声明一个不会被重新赋值的常量。 |
| 331 | `    record.duplicateCount = duplicates.length;` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 332 | `    record.duplicatePaths = duplicates.map((item) => item.primaryPath);` | 把数组中的每一项转换成新结果。 |
| 333 | `  }` | 结束当前代码块或数据结构。 |
| 334 | `  return records.sort((a, b) => a.name.localeCompare(b.name));` | 返回当前函数的结果。 |
| 335 | `}` | 结束当前代码块或数据结构。 |
| 336 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 337 | `async function readEnabledCodexPlugins(configPath) {` | 定义一个可使用 await 的异步函数。 |
| 338 | `  if (!(await exists(configPath))) return [];` | 根据条件决定是否执行后续代码。 |
| 339 | `  const text = await fs.readFile(configPath, "utf8");` | 声明一个不会被重新赋值的常量。 |
| 340 | `  const lines = text.split(/\\r?\\n/);` | 声明一个不会被重新赋值的常量。 |
| 341 | `  const enabled = [];` | 声明一个不会被重新赋值的常量。 |
| 342 | `  let currentPlugin = "";` | 声明一个后续可能变化的变量。 |
| 343 | `  for (const line of lines) {` | 开始循环处理一组数据。 |
| 344 | `    const section = line.match(/^\\s*\\[plugins\\."([^"]+)"\\]\\s*$/);` | 声明一个不会被重新赋值的常量。 |
| 345 | `    if (section) {` | 根据条件决定是否执行后续代码。 |
| 346 | `      currentPlugin = section[1];` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 347 | `      continue;` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 348 | `    }` | 结束当前代码块或数据结构。 |
| 349 | `    if (currentPlugin && /^\\s*enabled\\s*=\\s*true\\s*$/.test(line)) {` | 根据条件决定是否执行后续代码。 |
| 350 | `      enabled.push(currentPlugin);` | 向数组追加一项内容。 |
| 351 | `      currentPlugin = "";` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 352 | `      continue;` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 353 | `    }` | 结束当前代码块或数据结构。 |
| 354 | `    if (/^\\s*\\[/.test(line)) currentPlugin = "";` | 根据条件决定是否执行后续代码。 |
| 355 | `  }` | 结束当前代码块或数据结构。 |
| 356 | `  return Array.from(new Set(enabled)).sort();` | 返回当前函数的结果。 |
| 357 | `}` | 结束当前代码块或数据结构。 |
| 358 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 359 | `function isEnabledCodexPluginSkill(filePath, root) {` | 定义一个可复用函数。 |
| 360 | `  if (!root.enabledPlugins.length) return false;` | 根据条件决定是否执行后续代码。 |
| 361 | `  const parts = path.relative(root.path, filePath).split(path.sep).filter(Boolean).map((part) => part.toLowerCase());` | 声明一个不会被重新赋值的常量。 |
| 362 | `  return root.enabledPlugins.some((pluginId) => {` | 返回当前函数的结果。 |
| 363 | `    const [pluginName, provider] = pluginId.toLowerCase().split("@");` | 声明一个不会被重新赋值的常量。 |
| 364 | `    if (provider && !(parts.includes(provider))) return false;` | 根据条件决定是否执行后续代码。 |
| 365 | `    return parts.includes(pluginName);` | 返回当前函数的结果。 |
| 366 | `  });` | 结束当前代码块或数据结构。 |
| 367 | `}` | 结束当前代码块或数据结构。 |
| 368 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 369 | `async function findSkillFiles(rootPath, recursive) {` | 定义一个可使用 await 的异步函数。 |
| 370 | `  const results = [];` | 声明一个不会被重新赋值的常量。 |
| 371 | `  if (!recursive) {` | 根据条件决定是否执行后续代码。 |
| 372 | `    const directSkill = path.join(rootPath, "SKILL.md");` | 声明一个不会被重新赋值的常量。 |
| 373 | `    if (await exists(directSkill)) results.push(directSkill);` | 根据条件决定是否执行后续代码。 |
| 374 | `    let entries = [];` | 声明一个后续可能变化的变量。 |
| 375 | `    try {` | 开始捕获可能失败的代码块。 |
| 376 | `      entries = await fs.readdir(rootPath, { withFileTypes: true });` | 执行文件系统读写或检查操作。 |
| 377 | `    } catch {` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 378 | `      return results;` | 返回当前函数的结果。 |
| 379 | `    }` | 结束当前代码块或数据结构。 |
| 380 | `    for (const entry of entries) {` | 开始循环处理一组数据。 |
| 381 | `      if (!entry.isDirectory()) continue;` | 根据条件决定是否执行后续代码。 |
| 382 | `      if (entry.name === ".system" \|\| shouldSkipDirectory(entry.name)) continue;` | 根据条件决定是否执行后续代码。 |
| 383 | `      const skillPath = path.join(rootPath, entry.name, "SKILL.md");` | 声明一个不会被重新赋值的常量。 |
| 384 | `      if (await exists(skillPath)) results.push(skillPath);` | 根据条件决定是否执行后续代码。 |
| 385 | `    }` | 结束当前代码块或数据结构。 |
| 386 | `    return results;` | 返回当前函数的结果。 |
| 387 | `  }` | 结束当前代码块或数据结构。 |
| 388 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 389 | `  async function walk(directory, depth) {` | 定义一个可使用 await 的异步函数。 |
| 390 | `    if (depth > 8) return;` | 根据条件决定是否执行后续代码。 |
| 391 | `    let entries = [];` | 声明一个后续可能变化的变量。 |
| 392 | `    try {` | 开始捕获可能失败的代码块。 |
| 393 | `      entries = await fs.readdir(directory, { withFileTypes: true });` | 执行文件系统读写或检查操作。 |
| 394 | `    } catch {` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 395 | `      return;` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 396 | `    }` | 结束当前代码块或数据结构。 |
| 397 | `    for (const entry of entries) {` | 开始循环处理一组数据。 |
| 398 | `      const fullPath = path.join(directory, entry.name);` | 声明一个不会被重新赋值的常量。 |
| 399 | `      if (entry.isDirectory()) {` | 根据条件决定是否执行后续代码。 |
| 400 | `        if (shouldSkipDirectory(entry.name)) continue;` | 根据条件决定是否执行后续代码。 |
| 401 | `        await walk(fullPath, depth + 1);` | 等待异步操作完成后再继续。 |
| 402 | `      } else if (entry.isFile() && entry.name.toLowerCase() === "skill.md") {` | 在前一个条件不成立时检查另一个条件。 |
| 403 | `        results.push(fullPath);` | 向数组追加一项内容。 |
| 404 | `      }` | 结束当前代码块或数据结构。 |
| 405 | `    }` | 结束当前代码块或数据结构。 |
| 406 | `  }` | 结束当前代码块或数据结构。 |
| 407 | `  await walk(rootPath, 0);` | 等待异步操作完成后再继续。 |
| 408 | `  return results;` | 返回当前函数的结果。 |
| 409 | `}` | 结束当前代码块或数据结构。 |
| 410 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 411 | `async function readSkill(filePath, root) {` | 定义一个可使用 await 的异步函数。 |
| 412 | `  try {` | 开始捕获可能失败的代码块。 |
| 413 | `    const rawMarkdown = await fs.readFile(filePath, "utf8");` | 声明一个不会被重新赋值的常量。 |
| 414 | `    const frontmatter = parseFrontmatter(rawMarkdown).data;` | 声明一个不会被重新赋值的常量。 |
| 415 | `    const directory = path.dirname(filePath);` | 声明一个不会被重新赋值的常量。 |
| 416 | `    const folderName = path.basename(directory);` | 声明一个不会被重新赋值的常量。 |
| 417 | `    const name = frontmatter.name \|\| folderName;` | 声明一个不会被重新赋值的常量。 |
| 418 | `    const stat = await fs.stat(filePath);` | 声明一个不会被重新赋值的常量。 |
| 419 | `    return {` | 返回当前函数的结果。 |
| 420 | `      id: stableId(["skill", name, filePath]),` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 421 | `      name,` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 422 | `      displayName: frontmatter.name \|\| folderName,` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 423 | `      folderName,` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 424 | `      ecosystem: root.ecosystem,` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 425 | `      source: classifySkillSource(filePath, root),` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 426 | `      plugin: inferPluginName(filePath, root),` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 427 | `      category: "",` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 428 | `      description: frontmatter.description \|\| firstMarkdownHeading(rawMarkdown),` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 429 | `      frontmatter,` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 430 | `      rawMarkdown,` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 431 | `      primaryPath: filePath,` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 432 | `      directory,` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 433 | `      lineCount: countLines(rawMarkdown),` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 434 | `      sizeBytes: Buffer.byteLength(rawMarkdown, "utf8"),` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 435 | `      lastWriteTime: stat.mtime.toISOString(),` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 436 | `    };` | 结束当前代码块或数据结构。 |
| 437 | `  } catch (error) {` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 438 | `    return {` | 返回当前函数的结果。 |
| 439 | `      id: stableId(["skill-error", filePath]),` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 440 | `      name: path.basename(path.dirname(filePath)),` | 处理跨平台文件路径。 |
| 441 | `      displayName: path.basename(path.dirname(filePath)),` | 处理跨平台文件路径。 |
| 442 | `      ecosystem: root.ecosystem,` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 443 | `      source: root.source,` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 444 | `      description: \`读取失败：${error.message}\`,` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 445 | `      rawMarkdown: "",` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 446 | `      primaryPath: filePath,` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 447 | `      directory: path.dirname(filePath),` | 处理跨平台文件路径。 |
| 448 | `      readError: error.message,` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 449 | `    };` | 结束当前代码块或数据结构。 |
| 450 | `  }` | 结束当前代码块或数据结构。 |
| 451 | `}` | 结束当前代码块或数据结构。 |
| 452 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 453 | `function classifySkillSource(filePath, root) {` | 定义一个可复用函数。 |
| 454 | `  const normalized = filePath.toLowerCase();` | 声明一个不会被重新赋值的常量。 |
| 455 | `  if (normalized.includes(\`${path.sep}skills${path.sep}.system${path.sep}\`.toLowerCase())) return "codex-system";` | 根据条件决定是否执行后续代码。 |
| 456 | `  if (root.source === "codex-plugin-cache") return "codex-plugin-cache";` | 根据条件决定是否执行后续代码。 |
| 457 | `  return root.source;` | 返回当前函数的结果。 |
| 458 | `}` | 结束当前代码块或数据结构。 |
| 459 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 460 | `function inferPluginName(filePath, root) {` | 定义一个可复用函数。 |
| 461 | `  if (root.source !== "codex-plugin-cache" && root.source !== "claude-plugin") return "";` | 根据条件决定是否执行后续代码。 |
| 462 | `  const relative = path.relative(root.path, filePath).split(path.sep).filter(Boolean);` | 声明一个不会被重新赋值的常量。 |
| 463 | `  if (!relative.length) return "";` | 根据条件决定是否执行后续代码。 |
| 464 | `  if (relative[0].startsWith("openai-") && relative[1]) return relative[1];` | 根据条件决定是否执行后续代码。 |
| 465 | `  return relative[0];` | 返回当前函数的结果。 |
| 466 | `}` | 结束当前代码块或数据结构。 |
| 467 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 468 | `async function scanMcpServers(configs) {` | 定义一个可使用 await 的异步函数。 |
| 469 | `  const servers = [];` | 声明一个不会被重新赋值的常量。 |
| 470 | `  for (const config of configs) {` | 开始循环处理一组数据。 |
| 471 | `    if (!(await exists(config.path))) continue;` | 根据条件决定是否执行后续代码。 |
| 472 | `    const text = await fs.readFile(config.path, "utf8");` | 声明一个不会被重新赋值的常量。 |
| 473 | `    const parsed = config.type === "json"` | 声明一个不会被重新赋值的常量。 |
| 474 | `      ? parseJsonMcpServers(text, config)` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 475 | `      : parseTomlMcpServers(text, config);` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 476 | `    servers.push(...parsed);` | 向数组追加一项内容。 |
| 477 | `  }` | 结束当前代码块或数据结构。 |
| 478 | `  const seen = new Set();` | 声明一个不会被重新赋值的常量。 |
| 479 | `  return servers.filter((server) => {` | 返回当前函数的结果。 |
| 480 | `    const key = \`${server.configPath}\|${server.name}\`.toLowerCase();` | 声明一个不会被重新赋值的常量。 |
| 481 | `    if (seen.has(key)) return false;` | 根据条件决定是否执行后续代码。 |
| 482 | `    seen.add(key);` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 483 | `    return true;` | 返回当前函数的结果。 |
| 484 | `  }).sort((a, b) => a.name.localeCompare(b.name));` | 对数组项目排序。 |
| 485 | `}` | 结束当前代码块或数据结构。 |
| 486 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 487 | `function parseJsonMcpServers(text, config) {` | 定义一个可复用函数。 |
| 488 | `  let data;` | 声明一个后续可能变化的变量。 |
| 489 | `  try {` | 开始捕获可能失败的代码块。 |
| 490 | `    data = JSON.parse(text);` | 把 JSON 字符串解析成 JavaScript 对象。 |
| 491 | `  } catch {` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 492 | `    return [];` | 返回当前函数的结果。 |
| 493 | `  }` | 结束当前代码块或数据结构。 |
| 494 | `  const servers = [];` | 声明一个不会被重新赋值的常量。 |
| 495 | `  walkObject(data, (value, objectPath) => {` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 496 | `    if (!value \|\| typeof value !== "object" \|\| Array.isArray(value)) return;` | 根据条件决定是否执行后续代码。 |
| 497 | `    if (objectPath[objectPath.length - 1] !== "mcpServers") return;` | 根据条件决定是否执行后续代码。 |
| 498 | `    for (const [name, serverConfig] of Object.entries(value)) {` | 开始循环处理一组数据。 |
| 499 | `      if (!serverConfig \|\| typeof serverConfig !== "object") continue;` | 根据条件决定是否执行后续代码。 |
| 500 | `      servers.push({` | 向数组追加一项内容。 |
| 501 | `        id: stableId(["mcp", config.path, name]),` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 502 | `        name,` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 503 | `        ecosystem: config.ecosystem,` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 504 | `        configPath: config.path,` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 505 | `        configType: "json",` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 506 | `        enabled: serverConfig.enabled === false ? "false" : "true",` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 507 | `        enabledBool: serverConfig.enabled !== false,` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 508 | `        command: serverConfig.command \|\| "",` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 509 | `        args: Array.isArray(serverConfig.args) ? serverConfig.args.join(" ") : serverConfig.args \|\| "",` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 510 | `        url: serverConfig.url \|\| "",` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 511 | `        transport: serverConfig.url ? "remote" : serverConfig.command ? "local" : serverConfig.transport \|\| "unknown",` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 512 | `        rawConfig: redactText(JSON.stringify({ [name]: serverConfig }, null, 2)),` | 把 JavaScript 对象转换成 JSON 字符串。 |
| 513 | `      });` | 结束当前代码块或数据结构。 |
| 514 | `    }` | 结束当前代码块或数据结构。 |
| 515 | `  });` | 结束当前代码块或数据结构。 |
| 516 | `  return servers;` | 返回当前函数的结果。 |
| 517 | `}` | 结束当前代码块或数据结构。 |
| 518 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 519 | `function parseTomlMcpServers(text, config) {` | 定义一个可复用函数。 |
| 520 | `  const lines = text.split(/\\r?\\n/);` | 声明一个不会被重新赋值的常量。 |
| 521 | `  const servers = [];` | 声明一个不会被重新赋值的常量。 |
| 522 | `  let current = null;` | 声明一个后续可能变化的变量。 |
| 523 | `  let rawLines = [];` | 声明一个后续可能变化的变量。 |
| 524 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 525 | `  function finish() {` | 定义一个可复用函数。 |
| 526 | `    if (!current) return;` | 根据条件决定是否执行后续代码。 |
| 527 | `    current.rawConfig = redactText(rawLines.join("\\n"));` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 528 | `    if (!current.transport) current.transport = current.url ? "remote" : current.command ? "local" : "unknown";` | 根据条件决定是否执行后续代码。 |
| 529 | `    servers.push(current);` | 向数组追加一项内容。 |
| 530 | `  }` | 结束当前代码块或数据结构。 |
| 531 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 532 | `  for (const line of lines) {` | 开始循环处理一组数据。 |
| 533 | `    const section = line.match(/^\\s*\\[(?:mcp_servers\|mcpServers)\\.("?)([^\\]"]+)\\1\\]\\s*$/);` | 声明一个不会被重新赋值的常量。 |
| 534 | `    if (section) {` | 根据条件决定是否执行后续代码。 |
| 535 | `      finish();` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 536 | `      const name = section[2];` | 声明一个不会被重新赋值的常量。 |
| 537 | `      current = {` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 538 | `        id: stableId(["mcp", config.path, name]),` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 539 | `        name,` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 540 | `        ecosystem: config.ecosystem,` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 541 | `        configPath: config.path,` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 542 | `        configType: "toml",` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 543 | `        enabled: "true",` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 544 | `        enabledBool: true,` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 545 | `        command: "",` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 546 | `        args: "",` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 547 | `        url: "",` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 548 | `        transport: "",` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 549 | `      };` | 结束当前代码块或数据结构。 |
| 550 | `      rawLines = [line];` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 551 | `      continue;` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 552 | `    }` | 结束当前代码块或数据结构。 |
| 553 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 554 | `    if (/^\\s*\\[/.test(line)) {` | 根据条件决定是否执行后续代码。 |
| 555 | `      finish();` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 556 | `      current = null;` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 557 | `      rawLines = [];` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 558 | `      continue;` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 559 | `    }` | 结束当前代码块或数据结构。 |
| 560 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 561 | `    if (!current) continue;` | 根据条件决定是否执行后续代码。 |
| 562 | `    rawLines.push(line);` | 向数组追加一项内容。 |
| 563 | `    const kv = line.match(/^\\s*([A-Za-z0-9_-]+)\\s*=\\s*(.+?)\\s*$/);` | 声明一个不会被重新赋值的常量。 |
| 564 | `    if (!kv) continue;` | 根据条件决定是否执行后续代码。 |
| 565 | `    const key = kv[1];` | 声明一个不会被重新赋值的常量。 |
| 566 | `    const value = cleanScalar(kv[2]);` | 声明一个不会被重新赋值的常量。 |
| 567 | `    if (key === "enabled") {` | 根据条件决定是否执行后续代码。 |
| 568 | `      current.enabled = value;` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 569 | `      current.enabledBool = value !== "false";` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 570 | `    } else if (key === "command" \|\| key === "url" \|\| key === "transport") {` | 在前一个条件不成立时检查另一个条件。 |
| 571 | `      current[key] = value;` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 572 | `    } else if (key === "args") {` | 在前一个条件不成立时检查另一个条件。 |
| 573 | `      current.args = value;` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 574 | `    } else if (key === "bearer_token_env_var") {` | 在前一个条件不成立时检查另一个条件。 |
| 575 | `      current.auth = \`env:${value}\`;` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 576 | `    } else if (key === "startup_timeout_sec") {` | 在前一个条件不成立时检查另一个条件。 |
| 577 | `      current.startupTimeout = value;` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 578 | `    } else if (key === "tool_timeout_sec") {` | 在前一个条件不成立时检查另一个条件。 |
| 579 | `      current.toolTimeout = value;` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 580 | `    }` | 结束当前代码块或数据结构。 |
| 581 | `  }` | 结束当前代码块或数据结构。 |
| 582 | `  finish();` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 583 | `  return servers;` | 返回当前函数的结果。 |
| 584 | `}` | 结束当前代码块或数据结构。 |
| 585 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 586 | `async function readCodexGlobalSettings(configPath, mcpServers) {` | 定义一个可使用 await 的异步函数。 |
| 587 | `  if (!(await exists(configPath))) {` | 根据条件决定是否执行后续代码。 |
| 588 | `    return { configPath, configFound: false };` | 返回当前函数的结果。 |
| 589 | `  }` | 结束当前代码块或数据结构。 |
| 590 | `  const text = await fs.readFile(configPath, "utf8");` | 声明一个不会被重新赋值的常量。 |
| 591 | `  const enabledMcpCount = mcpServers.filter((server) => server.enabledBool).length;` | 声明一个不会被重新赋值的常量。 |
| 592 | `  const disabledMcpCount = mcpServers.length - enabledMcpCount;` | 声明一个不会被重新赋值的常量。 |
| 593 | `  return {` | 返回当前函数的结果。 |
| 594 | `    configPath,` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 595 | `    configFound: true,` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 596 | `    model: tomlScalar(text, "model"),` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 597 | `    reasoningEffort: tomlScalar(text, "model_reasoning_effort"),` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 598 | `    verbosity: tomlScalar(text, "model_verbosity"),` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 599 | `    approvalPolicy: tomlScalar(text, "approval_policy"),` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 600 | `    sandboxMode: tomlScalar(text, "sandbox_mode"),` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 601 | `    memoryEnabled: tomlScalar(text, "memories"),` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 602 | `    multiAgentEnabled: tomlScalar(text, "multi_agent"),` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 603 | `    trustedProjectCount: (text.match(/^\\[projects\\./gm) \|\| []).length,` | 用正则表达式匹配文本。 |
| 604 | `    enabledMcpCount,` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 605 | `    disabledMcpCount,` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 606 | `  };` | 结束当前代码块或数据结构。 |
| 607 | `}` | 结束当前代码块或数据结构。 |
| 608 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 609 | `function tomlScalar(text, key) {` | 定义一个可复用函数。 |
| 610 | `  const pattern = new RegExp(\`^\\\\s*${escapeRegex(key)}\\\\s*=\\\\s*(.+?)\\\\s*$\`, "m");` | 声明一个不会被重新赋值的常量。 |
| 611 | `  const match = text.match(pattern);` | 声明一个不会被重新赋值的常量。 |
| 612 | `  return match ? cleanScalar(match[1]) : "";` | 返回当前函数的结果。 |
| 613 | `}` | 结束当前代码块或数据结构。 |
| 614 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 615 | `function inferConfigType(filePath) {` | 定义一个可复用函数。 |
| 616 | `  return filePath.toLowerCase().endsWith(".json") ? "json" : "toml";` | 返回当前函数的结果。 |
| 617 | `}` | 结束当前代码块或数据结构。 |
| 618 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 619 | `function shouldSkipDirectory(name) {` | 定义一个可复用函数。 |
| 620 | `  return /^(node_modules\|\\.git\|dist\|build\|coverage\|output\|__pycache__)$/i.test(name)` | 返回当前函数的结果。 |
| 621 | `    \|\| /^skill-quarantine/i.test(name);` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 622 | `}` | 结束当前代码块或数据结构。 |
| 623 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 624 | `function parseFrontmatter(raw) {` | 定义一个可复用函数。 |
| 625 | `  const result = { data: {}, body: raw \|\| "" };` | 声明一个不会被重新赋值的常量。 |
| 626 | `  if (!raw \|\| !raw.startsWith("---")) return result;` | 根据条件决定是否执行后续代码。 |
| 627 | `  const end = raw.indexOf("\\n---", 3);` | 声明一个不会被重新赋值的常量。 |
| 628 | `  if (end < 0) return result;` | 根据条件决定是否执行后续代码。 |
| 629 | `  const block = raw.slice(3, end).trim();` | 声明一个不会被重新赋值的常量。 |
| 630 | `  result.body = raw.slice(end + 4).replace(/^\\r?\\n/, "");` | 对字符串内容做替换处理。 |
| 631 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 632 | `  let currentKey = "";` | 声明一个后续可能变化的变量。 |
| 633 | `  for (const line of block.split(/\\r?\\n/)) {` | 开始循环处理一组数据。 |
| 634 | `    const match = line.match(/^([A-Za-z0-9_-]+):\\s*(.*)$/);` | 声明一个不会被重新赋值的常量。 |
| 635 | `    if (match) {` | 根据条件决定是否执行后续代码。 |
| 636 | `      currentKey = match[1];` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 637 | `      const value = match[2].trim();` | 声明一个不会被重新赋值的常量。 |
| 638 | `      result.data[currentKey] = value === "\|" \|\| value === ">" ? "" : stripQuotes(value);` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 639 | `      continue;` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 640 | `    }` | 结束当前代码块或数据结构。 |
| 641 | `    if (currentKey && /^\\s+/.test(line)) {` | 根据条件决定是否执行后续代码。 |
| 642 | `      result.data[currentKey] = \`${result.data[currentKey]} ${line.trim()}\`.trim();` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 643 | `    }` | 结束当前代码块或数据结构。 |
| 644 | `  }` | 结束当前代码块或数据结构。 |
| 645 | `  return result;` | 返回当前函数的结果。 |
| 646 | `}` | 结束当前代码块或数据结构。 |
| 647 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 648 | `function firstMarkdownHeading(raw) {` | 定义一个可复用函数。 |
| 649 | `  const match = String(raw \|\| "").match(/^\\s{0,3}#\\s+(.+)$/m);` | 声明一个不会被重新赋值的常量。 |
| 650 | `  return match ? match[1].trim() : "";` | 返回当前函数的结果。 |
| 651 | `}` | 结束当前代码块或数据结构。 |
| 652 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 653 | `function countLines(text) {` | 定义一个可复用函数。 |
| 654 | `  if (!text) return 0;` | 根据条件决定是否执行后续代码。 |
| 655 | `  return String(text).split(/\\r?\\n/).length;` | 返回当前函数的结果。 |
| 656 | `}` | 结束当前代码块或数据结构。 |
| 657 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 658 | `function cleanScalar(value) {` | 定义一个可复用函数。 |
| 659 | `  return stripQuotes(String(value \|\| "").trim());` | 返回当前函数的结果。 |
| 660 | `}` | 结束当前代码块或数据结构。 |
| 661 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 662 | `function stripQuotes(value) {` | 定义一个可复用函数。 |
| 663 | `  return String(value \|\| "").replace(/^["']\|["']$/g, "");` | 返回当前函数的结果。 |
| 664 | `}` | 结束当前代码块或数据结构。 |
| 665 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 666 | `function redactText(text) {` | 定义一个可复用函数。 |
| 667 | `  return String(text \|\| "")` | 返回当前函数的结果。 |
| 668 | `    .replace(/(access[_-]?token\\s*[:=]\\s*["']?)[^"'\\s,}]+/gi, "$1***")` | 对字符串内容做替换处理。 |
| 669 | `    .replace(/(api[_-]?key\\s*[:=]\\s*["']?)[^"'\\s,}]+/gi, "$1***")` | 对字符串内容做替换处理。 |
| 670 | `    .replace(/(secret\\s*[:=]\\s*["']?)[^"'\\s,}]+/gi, "$1***")` | 对字符串内容做替换处理。 |
| 671 | `    .replace(/(bearer\\s+)[A-Za-z0-9._~+/=-]{12,}/gi, "$1***");` | 对字符串内容做替换处理。 |
| 672 | `}` | 结束当前代码块或数据结构。 |
| 673 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 674 | `function walkObject(value, visitor, objectPath = []) {` | 定义一个可复用函数。 |
| 675 | `  visitor(value, objectPath);` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 676 | `  if (!value \|\| typeof value !== "object") return;` | 根据条件决定是否执行后续代码。 |
| 677 | `  for (const [key, child] of Object.entries(value)) {` | 开始循环处理一组数据。 |
| 678 | `    walkObject(child, visitor, [...objectPath, key]);` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 679 | `  }` | 结束当前代码块或数据结构。 |
| 680 | `}` | 结束当前代码块或数据结构。 |
| 681 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 682 | `async function exists(filePath) {` | 定义一个可使用 await 的异步函数。 |
| 683 | `  try {` | 开始捕获可能失败的代码块。 |
| 684 | `    await fs.access(filePath);` | 等待异步操作完成后再继续。 |
| 685 | `    return true;` | 返回当前函数的结果。 |
| 686 | `  } catch {` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 687 | `    return false;` | 返回当前函数的结果。 |
| 688 | `  }` | 结束当前代码块或数据结构。 |
| 689 | `}` | 结束当前代码块或数据结构。 |
| 690 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 691 | `function stableId(parts) {` | 定义一个可复用函数。 |
| 692 | `  return parts` | 返回当前函数的结果。 |
| 693 | `    .filter((part) => part !== undefined && part !== null)` | 从数组中过滤出符合条件的项目。 |
| 694 | `    .join("\|")` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 695 | `    .toLowerCase()` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 696 | `    .replace(/[^a-z0-9\\u4e00-\\u9fa5_-]+/g, "-")` | 对字符串内容做替换处理。 |
| 697 | `    .replace(/^-+\|-+$/g, "")` | 对字符串内容做替换处理。 |
| 698 | `    .slice(0, 180) \|\| "item";` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 699 | `}` | 结束当前代码块或数据结构。 |
| 700 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 701 | `function escapeRegex(value) {` | 定义一个可复用函数。 |
| 702 | `  return String(value).replace(/[.*+?^${}()\|[\\]\\\\]/g, "\\\\$&");` | 返回当前函数的结果。 |
| 703 | `}` | 结束当前代码块或数据结构。 |
| 704 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 705 | `if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {` | 根据条件决定是否执行后续代码。 |
| 706 | `  main().catch((error) => {` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 707 | `    console.error(error);` | 向命令行输出错误信息。 |
| 708 | `    process.exit(1);` | 执行 scan-local.mjs 中的这一行逻辑。 |
| 709 | `  });` | 结束当前代码块或数据结构。 |
| 710 | `}` | 结束当前代码块或数据结构。 |
| 711 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |

## serve-local.mjs

| 行 | 代码 | 说明 |
| ---: | --- | --- |
| 1 | `#!/usr/bin/env node` | 声明脚本可以被命令行直接执行。 |
| 2 | `import fs from "node:fs";` | 从 Node.js 内置模块或其他模块导入功能。 |
| 3 | `import http from "node:http";` | 从 Node.js 内置模块或其他模块导入功能。 |
| 4 | `import path from "node:path";` | 从 Node.js 内置模块或其他模块导入功能。 |
| 5 | `import { spawn } from "node:child_process";` | 从 Node.js 内置模块或其他模块导入功能。 |
| 6 | `import { fileURLToPath } from "node:url";` | 从 Node.js 内置模块或其他模块导入功能。 |
| 7 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 8 | `const projectDir = path.dirname(fileURLToPath(import.meta.url));` | 声明一个不会被重新赋值的常量。 |
| 9 | `const options = parseArgs(process.argv.slice(2));` | 声明一个不会被重新赋值的常量。 |
| 10 | `const host = options.host \|\| "127.0.0.1";` | 声明一个不会被重新赋值的常量。 |
| 11 | `const requestedPort = Number(options.port \|\| 4173);` | 声明一个不会被重新赋值的常量。 |
| 12 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 13 | `if (!options.noScan) {` | 根据条件决定是否执行后续代码。 |
| 14 | `  await runNodeScript("scan-local.mjs", options.scanArgs);` | 等待异步操作完成后再继续。 |
| 15 | `}` | 结束当前代码块或数据结构。 |
| 16 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 17 | `const server = createStaticServer(projectDir);` | 声明一个不会被重新赋值的常量。 |
| 18 | `const { port } = await listenWithFallback(server, host, requestedPort);` | 声明一个不会被重新赋值的常量。 |
| 19 | `const url = \`http://${host}:${port}/index.html\`;` | 声明一个不会被重新赋值的常量。 |
| 20 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 21 | `console.log(\`SeeThrough Skill started: ${url}\`);` | 向命令行输出普通运行信息。 |
| 22 | `console.log("按 Ctrl+C 关闭本地服务。");` | 向命令行输出普通运行信息。 |
| 23 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 24 | `if (!options.noOpen) {` | 根据条件决定是否执行后续代码。 |
| 25 | `  openBrowser(url);` | 执行 serve-local.mjs 中的这一行逻辑。 |
| 26 | `}` | 结束当前代码块或数据结构。 |
| 27 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 28 | `function parseArgs(argv) {` | 定义一个可复用函数。 |
| 29 | `  const result = {` | 声明一个不会被重新赋值的常量。 |
| 30 | `    scanArgs: [],` | 执行 serve-local.mjs 中的这一行逻辑。 |
| 31 | `    noOpen: false,` | 执行 serve-local.mjs 中的这一行逻辑。 |
| 32 | `    noScan: false,` | 执行 serve-local.mjs 中的这一行逻辑。 |
| 33 | `  };` | 结束当前代码块或数据结构。 |
| 34 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 35 | `  for (let index = 0; index < argv.length; index += 1) {` | 开始循环处理一组数据。 |
| 36 | `    const arg = argv[index];` | 声明一个不会被重新赋值的常量。 |
| 37 | `    const next = argv[index + 1];` | 声明一个不会被重新赋值的常量。 |
| 38 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 39 | `    if (arg === "--host") {` | 根据条件决定是否执行后续代码。 |
| 40 | `      result.host = next;` | 执行 serve-local.mjs 中的这一行逻辑。 |
| 41 | `      index += 1;` | 执行 serve-local.mjs 中的这一行逻辑。 |
| 42 | `    } else if (arg === "--port") {` | 在前一个条件不成立时检查另一个条件。 |
| 43 | `      result.port = next;` | 执行 serve-local.mjs 中的这一行逻辑。 |
| 44 | `      index += 1;` | 执行 serve-local.mjs 中的这一行逻辑。 |
| 45 | `    } else if (arg === "--no-open") {` | 在前一个条件不成立时检查另一个条件。 |
| 46 | `      result.noOpen = true;` | 执行 serve-local.mjs 中的这一行逻辑。 |
| 47 | `    } else if (arg === "--no-scan") {` | 在前一个条件不成立时检查另一个条件。 |
| 48 | `      result.noScan = true;` | 执行 serve-local.mjs 中的这一行逻辑。 |
| 49 | `    } else if (arg === "--") {` | 在前一个条件不成立时检查另一个条件。 |
| 50 | `      result.scanArgs.push(...argv.slice(index + 1));` | 向数组追加一项内容。 |
| 51 | `      break;` | 执行 serve-local.mjs 中的这一行逻辑。 |
| 52 | `    } else {` | 处理前面条件都不成立的情况。 |
| 53 | `      result.scanArgs.push(arg);` | 向数组追加一项内容。 |
| 54 | `    }` | 结束当前代码块或数据结构。 |
| 55 | `  }` | 结束当前代码块或数据结构。 |
| 56 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 57 | `  return result;` | 返回当前函数的结果。 |
| 58 | `}` | 结束当前代码块或数据结构。 |
| 59 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 60 | `function runNodeScript(scriptName, args) {` | 定义一个可复用函数。 |
| 61 | `  return new Promise((resolve, reject) => {` | 返回当前函数的结果。 |
| 62 | `    const child = spawn(process.execPath, [path.join(projectDir, scriptName), ...args], {` | 声明一个不会被重新赋值的常量。 |
| 63 | `      cwd: projectDir,` | 执行 serve-local.mjs 中的这一行逻辑。 |
| 64 | `      stdio: "inherit",` | 执行 serve-local.mjs 中的这一行逻辑。 |
| 65 | `    });` | 结束当前代码块或数据结构。 |
| 66 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 67 | `    child.on("error", reject);` | 执行 serve-local.mjs 中的这一行逻辑。 |
| 68 | `    child.on("exit", (code) => {` | 执行 serve-local.mjs 中的这一行逻辑。 |
| 69 | `      if (code === 0) {` | 根据条件决定是否执行后续代码。 |
| 70 | `        resolve();` | 执行 serve-local.mjs 中的这一行逻辑。 |
| 71 | `      } else {` | 处理前面条件都不成立的情况。 |
| 72 | `        reject(new Error(\`${scriptName} exited with code ${code}\`));` | 执行 serve-local.mjs 中的这一行逻辑。 |
| 73 | `      }` | 结束当前代码块或数据结构。 |
| 74 | `    });` | 结束当前代码块或数据结构。 |
| 75 | `  });` | 结束当前代码块或数据结构。 |
| 76 | `}` | 结束当前代码块或数据结构。 |
| 77 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 78 | `function createStaticServer(rootDir) {` | 定义一个可复用函数。 |
| 79 | `  return http.createServer((request, response) => {` | 返回当前函数的结果。 |
| 80 | `    try {` | 开始捕获可能失败的代码块。 |
| 81 | `      const requestUrl = new URL(request.url \|\| "/", "http://localhost");` | 声明一个不会被重新赋值的常量。 |
| 82 | `      const safePath = decodeURIComponent(requestUrl.pathname === "/" ? "/index.html" : requestUrl.pathname);` | 声明一个不会被重新赋值的常量。 |
| 83 | `      const filePath = path.resolve(rootDir, \`.${safePath}\`);` | 声明一个不会被重新赋值的常量。 |
| 84 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 85 | `      if (!filePath.startsWith(rootDir)) {` | 根据条件决定是否执行后续代码。 |
| 86 | `        response.writeHead(403);` | 执行 serve-local.mjs 中的这一行逻辑。 |
| 87 | `        response.end("Forbidden");` | 执行 serve-local.mjs 中的这一行逻辑。 |
| 88 | `        return;` | 执行 serve-local.mjs 中的这一行逻辑。 |
| 89 | `      }` | 结束当前代码块或数据结构。 |
| 90 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 91 | `      if (!fs.existsSync(filePath) \|\| !fs.statSync(filePath).isFile()) {` | 根据条件决定是否执行后续代码。 |
| 92 | `        response.writeHead(404);` | 执行 serve-local.mjs 中的这一行逻辑。 |
| 93 | `        response.end("Not found");` | 执行 serve-local.mjs 中的这一行逻辑。 |
| 94 | `        return;` | 执行 serve-local.mjs 中的这一行逻辑。 |
| 95 | `      }` | 结束当前代码块或数据结构。 |
| 96 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 97 | `      response.writeHead(200, {` | 执行 serve-local.mjs 中的这一行逻辑。 |
| 98 | `        "Content-Type": contentType(filePath),` | 执行 serve-local.mjs 中的这一行逻辑。 |
| 99 | `        "Cache-Control": "no-store",` | 执行 serve-local.mjs 中的这一行逻辑。 |
| 100 | `      });` | 结束当前代码块或数据结构。 |
| 101 | `      fs.createReadStream(filePath).pipe(response);` | 执行文件系统读写或检查操作。 |
| 102 | `    } catch (error) {` | 执行 serve-local.mjs 中的这一行逻辑。 |
| 103 | `      response.writeHead(500);` | 执行 serve-local.mjs 中的这一行逻辑。 |
| 104 | `      response.end(error.message \|\| "Server error");` | 执行 serve-local.mjs 中的这一行逻辑。 |
| 105 | `    }` | 结束当前代码块或数据结构。 |
| 106 | `  });` | 结束当前代码块或数据结构。 |
| 107 | `}` | 结束当前代码块或数据结构。 |
| 108 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 109 | `function listenWithFallback(server, host, startPort) {` | 定义一个可复用函数。 |
| 110 | `  return new Promise((resolve, reject) => {` | 返回当前函数的结果。 |
| 111 | `    let port = startPort;` | 声明一个后续可能变化的变量。 |
| 112 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 113 | `    const tryListen = () => {` | 声明一个不会被重新赋值的常量。 |
| 114 | `      server.once("error", (error) => {` | 执行 serve-local.mjs 中的这一行逻辑。 |
| 115 | `        if (error.code === "EADDRINUSE" && port < startPort + 20) {` | 根据条件决定是否执行后续代码。 |
| 116 | `          port += 1;` | 执行 serve-local.mjs 中的这一行逻辑。 |
| 117 | `          tryListen();` | 开始捕获可能失败的代码块。 |
| 118 | `          return;` | 执行 serve-local.mjs 中的这一行逻辑。 |
| 119 | `        }` | 结束当前代码块或数据结构。 |
| 120 | `        reject(error);` | 执行 serve-local.mjs 中的这一行逻辑。 |
| 121 | `      });` | 结束当前代码块或数据结构。 |
| 122 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 123 | `      server.listen(port, host, () => resolve({ port }));` | 执行 serve-local.mjs 中的这一行逻辑。 |
| 124 | `    };` | 结束当前代码块或数据结构。 |
| 125 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 126 | `    tryListen();` | 开始捕获可能失败的代码块。 |
| 127 | `  });` | 结束当前代码块或数据结构。 |
| 128 | `}` | 结束当前代码块或数据结构。 |
| 129 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 130 | `function openBrowser(url) {` | 定义一个可复用函数。 |
| 131 | `  if (process.platform === "win32") {` | 根据条件决定是否执行后续代码。 |
| 132 | `    spawn("cmd", ["/c", "start", "", url], { detached: true, stdio: "ignore" }).unref();` | 启动一个子进程执行外部命令。 |
| 133 | `  } else if (process.platform === "darwin") {` | 在前一个条件不成立时检查另一个条件。 |
| 134 | `    spawn("open", [url], { detached: true, stdio: "ignore" }).unref();` | 启动一个子进程执行外部命令。 |
| 135 | `  } else {` | 处理前面条件都不成立的情况。 |
| 136 | `    spawn("xdg-open", [url], { detached: true, stdio: "ignore" }).unref();` | 启动一个子进程执行外部命令。 |
| 137 | `  }` | 结束当前代码块或数据结构。 |
| 138 | `}` | 结束当前代码块或数据结构。 |
| 139 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 140 | `function contentType(filePath) {` | 定义一个可复用函数。 |
| 141 | `  const extension = path.extname(filePath).toLowerCase();` | 声明一个不会被重新赋值的常量。 |
| 142 | `  return {` | 返回当前函数的结果。 |
| 143 | `    ".html": "text/html; charset=utf-8",` | 执行 serve-local.mjs 中的这一行逻辑。 |
| 144 | `    ".css": "text/css; charset=utf-8",` | 执行 serve-local.mjs 中的这一行逻辑。 |
| 145 | `    ".js": "text/javascript; charset=utf-8",` | 执行 serve-local.mjs 中的这一行逻辑。 |
| 146 | `    ".mjs": "text/javascript; charset=utf-8",` | 执行 serve-local.mjs 中的这一行逻辑。 |
| 147 | `    ".json": "application/json; charset=utf-8",` | 执行 serve-local.mjs 中的这一行逻辑。 |
| 148 | `    ".md": "text/markdown; charset=utf-8",` | 执行 serve-local.mjs 中的这一行逻辑。 |
| 149 | `    ".png": "image/png",` | 执行 serve-local.mjs 中的这一行逻辑。 |
| 150 | `    ".svg": "image/svg+xml",` | 执行 serve-local.mjs 中的这一行逻辑。 |
| 151 | `  }[extension] \|\| "application/octet-stream";` | 执行 serve-local.mjs 中的这一行逻辑。 |
| 152 | `}` | 结束当前代码块或数据结构。 |
| 153 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |

## scan-skills.ps1

| 行 | 代码 | 说明 |
| ---: | --- | --- |
| 1 | `$ErrorActionPreference = "Stop"` | 设置 PowerShell 遇到错误时立即停止执行。 |
| 2 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 3 | `$DashboardDir = Split-Path -Parent $MyInvocation.MyCommand.Path` | 声明或更新 PowerShell 变量。 |
| 4 | `$Scanner = Join-Path $DashboardDir "scan-local.mjs"` | 声明或更新 PowerShell 变量。 |
| 5 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 6 | `if (-not (Test-Path -LiteralPath $Scanner)) {` | 根据条件决定是否执行后续 PowerShell 代码。 |
| 7 | `    throw "scan-local.mjs not found: $Scanner"` | 执行这一行 PowerShell 脚本。 |
| 8 | `}` | 结束当前 PowerShell 代码块。 |
| 9 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 10 | `$Node = Get-Command node -ErrorAction SilentlyContinue` | 声明或更新 PowerShell 变量。 |
| 11 | `if (-not $Node) {` | 根据条件决定是否执行后续 PowerShell 代码。 |
| 12 | `    throw "Node.js is required. Install Node.js or run the scanner with a bundled node runtime."` | 执行这一行 PowerShell 脚本。 |
| 13 | `}` | 结束当前 PowerShell 代码块。 |
| 14 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 15 | `& $Node.Source $Scanner @args` | 调用外部命令或脚本。 |
| 16 | `exit $LASTEXITCODE` | 以指定退出码结束脚本。 |
| 17 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |

## start-local.ps1

| 行 | 代码 | 说明 |
| ---: | --- | --- |
| 1 | `$ErrorActionPreference = "Stop"` | 设置 PowerShell 遇到错误时立即停止执行。 |
| 2 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 3 | `Set-Location -LiteralPath $PSScriptRoot` | 把当前工作目录切换到脚本所在目录。 |
| 4 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 5 | `$node = Get-Command node -ErrorAction SilentlyContinue` | 声明或更新 PowerShell 变量。 |
| 6 | `if (-not $node) {` | 根据条件决定是否执行后续 PowerShell 代码。 |
| 7 | `    Write-Host "Node.js 18 or newer is required."` | 向终端输出提示文本。 |
| 8 | `    Write-Host "Download Node.js from https://nodejs.org/"` | 向终端输出提示文本。 |
| 9 | `    exit 1` | 以指定退出码结束脚本。 |
| 10 | `}` | 结束当前 PowerShell 代码块。 |
| 11 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 12 | `& $node.Source (Join-Path $PSScriptRoot "serve-local.mjs") @args` | 调用外部命令或脚本。 |
| 13 | `exit $LASTEXITCODE` | 以指定退出码结束脚本。 |
| 14 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |

## start-local.bat

| 行 | 代码 | 说明 |
| ---: | --- | --- |
| 1 | `@echo off` | 关闭批处理命令回显，让输出更干净。 |
| 2 | `setlocal` | 启用局部环境变量作用域。 |
| 3 | `cd /d "%~dp0"` | 切换到批处理文件所在目录。 |
| 4 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 5 | `where node >nul 2>nul` | 检查系统 PATH 中是否能找到 Node.js。 |
| 6 | `if errorlevel 1 (` | 在上一条命令失败时执行错误处理。 |
| 7 | `  echo Node.js 18 or newer is required.` | 向命令行输出提示文本。 |
| 8 | `  echo Download Node.js from https://nodejs.org/` | 向命令行输出提示文本。 |
| 9 | `  pause` | 暂停窗口，方便用户阅读错误信息。 |
| 10 | `  exit /b 1` | 以指定退出码结束批处理。 |
| 11 | `)` | 结束批处理条件代码块。 |
| 12 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 13 | `node serve-local.mjs %*` | 使用 Node.js 启动本地服务脚本。 |
| 14 | `set EXIT_CODE=%ERRORLEVEL%` | 设置批处理变量。 |
| 15 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 16 | `if not "%EXIT_CODE%"=="0" (` | 执行这一行 Windows 批处理命令。 |
| 17 | `  echo.` | 向命令行输出提示文本。 |
| 18 | `  echo Failed with exit code %EXIT_CODE%.` | 向命令行输出提示文本。 |
| 19 | `  pause` | 暂停窗口，方便用户阅读错误信息。 |
| 20 | `)` | 结束批处理条件代码块。 |
| 21 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |
| 22 | `exit /b %EXIT_CODE%` | 以指定退出码结束批处理。 |
| 23 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |

## package.json

| 行 | 代码 | 说明 |
| ---: | --- | --- |
| 1 | `{` | 开始或结束 JSON 对象。 |
| 2 | `  "name": "seethrough-skill",` | 设置 package.json 字段 `name`。 |
| 3 | `  "version": "0.1.0",` | 设置 package.json 字段 `version`。 |
| 4 | `  "productName": "SeeThrough Skill",` | 设置 package.json 字段 `productName`。 |
| 5 | `  "type": "module",` | 设置 package.json 字段 `type`。 |
| 6 | `  "main": "electron/main.mjs",` | 设置 package.json 字段 `main`。 |
| 7 | `  "description": "Inspect local Codex and Claude Skills plus MCP configuration from a read-only browser dashboard.",` | 设置 package.json 字段 `description`。 |
| 8 | `  "scripts": {` | 声明 npm 脚本集合。 |
| 9 | `    "start": "node serve-local.mjs",` | 设置 package.json 字段 `start`。 |
| 10 | `    "serve": "node serve-local.mjs --no-open",` | 设置 package.json 字段 `serve`。 |
| 11 | `    "open": "node serve-local.mjs",` | 设置 package.json 字段 `open`。 |
| 12 | `    "desktop": "electron .",` | 设置 package.json 字段 `desktop`。 |
| 13 | `    "build:win": "electron-builder --win portable",` | 设置 package.json 字段 `build`。 |
| 14 | `    "scan": "node scan-local.mjs",` | 设置 package.json 字段 `scan`。 |
| 15 | `    "scan:json": "node scan-local.mjs --json",` | 设置 package.json 字段 `scan`。 |
| 16 | `    "explain": "node scripts/explain-code.mjs",` | 设置 package.json 字段 `explain`。 |
| 17 | `    "package:portable": "powershell -ExecutionPolicy Bypass -File package-portable.ps1",` | 设置 package.json 字段 `package`。 |
| 18 | `    "shortcut": "powershell -ExecutionPolicy Bypass -File install-desktop-shortcut.ps1"` | 设置 package.json 字段 `shortcut`。 |
| 19 | `  },` | 结束当前 JSON 对象并继续下一个字段。 |
| 20 | `  "engines": {` | 设置 package.json 字段 `engines`。 |
| 21 | `    "node": ">=18"` | 设置 package.json 字段 `node`。 |
| 22 | `  },` | 结束当前 JSON 对象并继续下一个字段。 |
| 23 | `  "devDependencies": {` | 设置 package.json 字段 `devDependencies`。 |
| 24 | `    "electron": "^37.2.6",` | 设置 package.json 字段 `electron`。 |
| 25 | `    "electron-builder": "^26.0.12"` | 设置 package.json 字段 `electron-builder`。 |
| 26 | `  },` | 结束当前 JSON 对象并继续下一个字段。 |
| 27 | `  "build": {` | 设置 package.json 字段 `build`。 |
| 28 | `    "appId": "app.seethrough.skill",` | 设置 package.json 字段 `appId`。 |
| 29 | `    "productName": "SeeThrough Skill",` | 设置 package.json 字段 `productName`。 |
| 30 | `    "asar": true,` | 设置 package.json 字段 `asar`。 |
| 31 | `    "directories": {` | 设置 package.json 字段 `directories`。 |
| 32 | `      "output": "release"` | 设置 package.json 字段 `output`。 |
| 33 | `    },` | 结束当前 JSON 对象并继续下一个字段。 |
| 34 | `    "files": [` | 设置 package.json 字段 `files`。 |
| 35 | `      "index.html",` | 定义 package.json 的结构内容。 |
| 36 | `      "styles.css",` | 定义 package.json 的结构内容。 |
| 37 | `      "app.js",` | 定义 package.json 的结构内容。 |
| 38 | `      "scan-local.mjs",` | 定义 package.json 的结构内容。 |
| 39 | `      "electron/**/*",` | 定义 package.json 的结构内容。 |
| 40 | `      "package.json"` | 定义 package.json 的结构内容。 |
| 41 | `    ],` | 定义 package.json 的结构内容。 |
| 42 | `    "win": {` | 设置 package.json 字段 `win`。 |
| 43 | `      "target": [` | 设置 package.json 字段 `target`。 |
| 44 | `        "portable"` | 定义 package.json 的结构内容。 |
| 45 | `      ],` | 定义 package.json 的结构内容。 |
| 46 | `      "artifactName": "seethrough-skill-${version}-${arch}.${ext}"` | 设置 package.json 字段 `artifactName`。 |
| 47 | `    }` | 开始或结束 JSON 对象。 |
| 48 | `  }` | 开始或结束 JSON 对象。 |
| 49 | `}` | 开始或结束 JSON 对象。 |
| 50 | ` ` | 空行，用来分隔代码块，让结构更清楚。 |

