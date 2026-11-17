@echo off
call "%~dp0..\scripts\jdk-env.cmd"
if errorlevel 1 exit /b 1
cd /d "%~dp0"
call mvnw.cmd spring-boot:run %*
