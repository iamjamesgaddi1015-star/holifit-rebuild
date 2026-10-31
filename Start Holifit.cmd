@echo off
setlocal
cd /d "%~dp0"
echo Starting Holifit. Use the local address printed below.
echo If a new preview starts, leave this window open. Press Ctrl+C to stop it.
node scripts/server.mjs
pause
