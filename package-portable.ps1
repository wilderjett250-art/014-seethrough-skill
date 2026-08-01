$ErrorActionPreference = "Stop"

$ProjectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$DistDir = Join-Path $ProjectRoot "dist"
$Stamp = Get-Date -Format "yyyyMMdd-HHmmss"
$PackageName = "seethrough-skill-source-$Stamp"
$StageDir = Join-Path ([System.IO.Path]::GetTempPath()) $PackageName
$ZipPath = Join-Path $DistDir "$PackageName.zip"

if (Test-Path -LiteralPath $StageDir) {
    Remove-Item -LiteralPath $StageDir -Recurse -Force
}

New-Item -ItemType Directory -Path $StageDir | Out-Null
New-Item -ItemType Directory -Path $DistDir -Force | Out-Null

$files = @(
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

foreach ($file in $files) {
    $source = Join-Path $ProjectRoot $file
    if (Test-Path -LiteralPath $source) {
        Copy-Item -LiteralPath $source -Destination (Join-Path $StageDir $file)
    }
}

foreach ($dir in @("scripts", "docs", "electron")) {
    $source = Join-Path $ProjectRoot $dir
    if (Test-Path -LiteralPath $source) {
        Copy-Item -LiteralPath $source -Destination (Join-Path $StageDir $dir) -Recurse
    }
}

$workflowDir = Join-Path $ProjectRoot ".github"
if (Test-Path -LiteralPath $workflowDir) {
    Copy-Item -LiteralPath $workflowDir -Destination (Join-Path $StageDir ".github") -Recurse
}

$stageItemPaths = @(Get-ChildItem -LiteralPath $StageDir -Force | ForEach-Object { $_.FullName })
if ($stageItemPaths.Count -eq 0) {
    throw "No files were staged for packaging."
}

Compress-Archive -Path $stageItemPaths -DestinationPath $ZipPath -Force
Remove-Item -LiteralPath $StageDir -Recurse -Force

Write-Host "Source package created:"
Write-Host $ZipPath
