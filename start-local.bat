@echo off
setlocal
cd /d "%~dp0"

where node >nul 2>nul
if errorlevel 1 (
  echo Node.js 18 or newer is required.
  echo Download Node.js from https://nodejs.org/
  pause
  exit /b 1
)

node serve-local.mjs %*
set EXIT_CODE=%ERRORLEVEL%

if not "%EXIT_CODE%"=="0" (
  echo.
  echo Failed with exit code %EXIT_CODE%.
  pause
)

exit /b %EXIT_CODE%
