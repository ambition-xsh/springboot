@echo off
REM 优先已有 JAVA_HOME，再 Microsoft / Adoptium 的 jdk-21*，再 jdk-17*。
set "JDK="
if defined JAVA_HOME if exist "%JAVA_HOME%\bin\java.exe" set "JDK=%JAVA_HOME%"
if not defined JDK for /d %%J in ("%ProgramFiles%\Microsoft\jdk-21*") do if exist "%%~J\bin\java.exe" set "JDK=%%~J"
if not defined JDK for /d %%J in ("%ProgramFiles%\Eclipse Adoptium\jdk-21*") do if exist "%%~J\bin\java.exe" set "JDK=%%~J"
if not defined JDK for /d %%J in ("%ProgramFiles%\Microsoft\jdk-17*") do if exist "%%~J\bin\java.exe" set "JDK=%%~J"
if not defined JDK for /d %%J in ("%ProgramFiles%\Eclipse Adoptium\jdk-17*") do if exist "%%~J\bin\java.exe" set "JDK=%%~J"
if not defined JDK (
  echo [sb] 未找到 JDK。请设置 JAVA_HOME 或安装 OpenJDK 21/17。
  exit /b 1
)
set "JAVA_HOME=%JDK%"
set "PATH=%JAVA_HOME%\bin;%PATH%"
echo [sb] JAVA_HOME=%JAVA_HOME%
