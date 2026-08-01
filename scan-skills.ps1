$ErrorActionPreference = "Stop"

$DashboardDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$Scanner = Join-Path $DashboardDir "scan-local.mjs"

if (-not (Test-Path -LiteralPath $Scanner)) {
    throw "scan-local.mjs not found: $Scanner"
}

$Node = Get-Command node -ErrorAction SilentlyContinue
if (-not $Node) {
    throw "Node.js is required. Install Node.js or run the scanner with a bundled node runtime."
}

& $Node.Source $Scanner @args
exit $LASTEXITCODE
