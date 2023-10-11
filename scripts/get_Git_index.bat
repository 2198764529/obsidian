cd .git

@echo off
setlocal enabledelayedexpansion

rem 创建一个 JSON 数组的开头
echo [ > index.json

rem 使用 git ls-files -s 获取暂存区文件列表，并逐行处理
for /f "tokens=1-3" %%a in ('git ls-files -s') do (
    set path=%%c
    set path=!path:\=\\!
    echo {^"path^": ^"!path!^", ^"mode^": ^"%%b^", ^"sha1^": ^"%%a^"}, >> index.json
)

rem 去除 JSON 数组的最后一个逗号
powershell -Command "(Get-Content -Raw index.json) -replace '},\s*]$', '}]' | Set-Content index.json"

rem 添加 JSON 数组的结尾
echo ] >> index.json

endlocal
