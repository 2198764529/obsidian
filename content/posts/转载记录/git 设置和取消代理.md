---
title: git 设置和取消代理
id: 571e8cbce4
datetimeCreate: 2023-10-09 17:09:21
datetimeUpdate: 2023-10-09 17:10:21
---
```
git config --global https.proxy http://127.0.0.1:1080

git config --global https.proxy https://127.0.0.1:1080

git config --global --unset http.proxy

git config --global --unset https.proxy

npm config delete proxy
```

转载 https://gist.github.com/laispace/666dd7b27e9116faece6