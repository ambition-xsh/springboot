# 为本仓库终端设置 JAVA_HOME：优先已有 JAVA_HOME，否则找 JDK 21，再找 JDK 17。
$ErrorActionPreference = 'SilentlyContinue'

function Test-JdkRoot([string] $root) {
	if ([string]::IsNullOrWhiteSpace($root)) { return $false }
	$j = Join-Path $root.TrimEnd('\') 'bin\java.exe'
	return (Test-Path -LiteralPath $j)
}

function Get-JdkDirs([string] $pattern) {
	$dirs = @()
	$dirs += Get-ChildItem -Path (Join-Path $env:ProgramFiles "Microsoft\$pattern") -Directory -ErrorAction SilentlyContinue
	$pf86 = ${env:ProgramFiles(x86)}
	if ($pf86) {
		$dirs += Get-ChildItem -Path (Join-Path $pf86 "Microsoft\$pattern") -Directory -ErrorAction SilentlyContinue
	}
	$dirs += Get-ChildItem -Path (Join-Path $env:ProgramFiles "Eclipse Adoptium\$pattern") -Directory -ErrorAction SilentlyContinue
	return $dirs | Where-Object { Test-JdkRoot $_.FullName }
}

$jdk = $null
if (Test-JdkRoot $env:JAVA_HOME) {
	$jdk = $env:JAVA_HOME.TrimEnd('\')
}

if (-not $jdk) {
	$c21 = Get-JdkDirs 'jdk-21*' | Sort-Object { $_.Name } -Descending | Select-Object -First 1
	if ($c21) { $jdk = $c21.FullName }
}
if (-not $jdk) {
	$c17 = Get-JdkDirs 'jdk-17*' | Sort-Object { $_.Name } -Descending | Select-Object -First 1
	if ($c17) { $jdk = $c17.FullName }
}

if (-not $jdk) {
	Write-Host '[sb] 未找到 JDK。请设置 JAVA_HOME，或安装 Microsoft / Eclipse Adoptium 的 JDK 21 或 17。' -ForegroundColor Yellow
	return
}

$env:JAVA_HOME = $jdk
$bin = Join-Path $jdk 'bin'
if ($env:PATH -notlike "*$bin*") {
	$env:PATH = "$bin;$env:PATH"
}
Write-Host "[sb] JAVA_HOME=$jdk" -ForegroundColor DarkGray
