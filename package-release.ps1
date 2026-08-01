$ErrorActionPreference = "Stop"

$ProjectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$PackageJsonPath = Join-Path $ProjectRoot "package.json"
$PackageConfig = Get-Content -LiteralPath $PackageJsonPath -Raw -Encoding utf8 | ConvertFrom-Json
$Version = [string]$PackageConfig.version
$ExePath = Join-Path $ProjectRoot "release\seethrough-skill-$Version-x64.exe"

if (-not (Test-Path -LiteralPath $ExePath)) {
    throw "Final Windows EXE not found: $ExePath. Run npm run build:win first."
}

$DistDir = Join-Path $ProjectRoot "dist"
$PackageName = "seethrough-skill-windows-x64-v$Version"
$StageDir = Join-Path ([System.IO.Path]::GetTempPath()) $PackageName
$ZipPath = Join-Path $DistDir "$PackageName.zip"

if (Test-Path -LiteralPath $StageDir) {
    Remove-Item -LiteralPath $StageDir -Recurse -Force
}

New-Item -ItemType Directory -Path $StageDir | Out-Null
New-Item -ItemType Directory -Path (Join-Path $StageDir "source") | Out-Null
New-Item -ItemType Directory -Path $DistDir -Force | Out-Null

Copy-Item -LiteralPath $ExePath -Destination (Join-Path $StageDir "SeeThrough Skill.exe")
Copy-Item -LiteralPath (Join-Path $ProjectRoot "README.md") -Destination (Join-Path $StageDir "README.md")

$sourceFiles = @(
    ".gitignore",
    "README.md",
    "package.json",
    "package-lock.json",
    "index.html",
    "styles.css",
    "app.js",
    "scan-local.mjs",
    "serve-local.mjs",
    "scan-skills.ps1",
    "start-local.ps1",
    "start-local.bat",
    "package-portable.ps1",
    "package-release.ps1",
    "install-desktop-shortcut.ps1"
)

foreach ($file in $sourceFiles) {
    $source = Join-Path $ProjectRoot $file
    if (Test-Path -LiteralPath $source) {
        Copy-Item -LiteralPath $source -Destination (Join-Path $StageDir "source\$file")
    }
}

foreach ($dir in @("scripts", "docs", "electron", ".github")) {
    $source = Join-Path $ProjectRoot $dir
    if (Test-Path -LiteralPath $source) {
        Copy-Item -LiteralPath $source -Destination (Join-Path $StageDir "source\$dir") -Recurse
    }
}

$stageItemPaths = @(Get-ChildItem -LiteralPath $StageDir -Force | ForEach-Object { $_.FullName })
if ($stageItemPaths.Count -eq 0) {
    throw "No files were staged for packaging."
}

Compress-Archive -Path $stageItemPaths -DestinationPath $ZipPath -Force
Remove-Item -LiteralPath $StageDir -Recurse -Force

Write-Host "Ready-to-run release package created:"
Write-Host $ZipPath
