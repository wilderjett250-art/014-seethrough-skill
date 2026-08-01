$ErrorActionPreference = "Stop"

Set-Location -LiteralPath $PSScriptRoot

$node = Get-Command node -ErrorAction SilentlyContinue
if (-not $node) {
    Write-Host "Node.js 18 or newer is required."
    Write-Host "Download Node.js from https://nodejs.org/"
    exit 1
}

& $node.Source (Join-Path $PSScriptRoot "serve-local.mjs") @args
exit $LASTEXITCODE
