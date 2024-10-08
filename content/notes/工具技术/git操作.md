---
title: git操作
id: ddbf9fb705
datetimeCreate: 2023-10-10 16:14:27
datetimeUpdate: 2024-10-08 17:48:17
---
### 示意图

```uml
cloud Remote
cloud Repository
cloud Index
cloud Workspace

Remote -> Repository : fetch/clone
Remote <- Repository : push
Repository <- Index : commit
Index <-- Workspace : add
Repository -> Workspace : checkout
Remote --> Workspace : pull
```
- Workspace：工作区
- Index / Stage：暂存区
- Repository：本地仓库区
- Remote：远程仓库区
### git 常用命令

#### 查看信息
##### git show: 查看 commit 详细信息

```git
git show <commit_id>
```

- --name-only: 只显示名称
- --name-status: 仅显示名称和状态。
- --oneline：只显示一行, 包括提交的哈希值和提交信息的第一行
- --stat：显示统计信息(修改行数、新增行数和删除行数)
- --relative-date：显示相对日期(默认绝对日期)
- 
- --format=`format`：`format` 可以是 oneline、short、full、fuller、email、raw 或 format:`format`
- --pretty=format：同上--format=`format`
- --patch 或 -p：显示每个提交的差异
- --color 或 --no-color：是否使用颜色
- --date=`format`：`format` 可以是 relative（相对日期）、iso（ISO 8601 格式）、rfc（RFC 2822 格式）或自定义的日期格式字符串

##### git help: 显示 Git 相关的帮助信息

```git
git help <command>
```

- -a: 显示所有 Git 命令列表(--all)
- -g: 显示手册页面(--guide)
- -c: 显示所有配置变量的名称和简短描述(--config)
##### git status: 显示工作目录和暂存区的相关信息
##### git diff: 显示工作区和暂存区的差异
##### git log: 列出所有提交日志信息
##### git shortlog：汇总所有贡献者的提交记录
##### git describe： 给出一个可读的名称来表示最近的提交
#### 推送和更新信息

##### git add: 将文件添加到暂存区
##### git commit: 将文件提交到暂存区

##### git fetch: 获取最新的文件, 但不会合并
##### git pull: fetch和merge的组合命令, 即获取最新版本接着合并
##### git push: 将 commit 信息提交
##### git tag: 给 commit 打上 标签

#### 分支管理
##### git branch: 列出,新建或删除分支
##### git checkout: 切换分支或恢复工作区文件
##### git merge: 合并分支
##### git mergetool: 解决合并冲突

##### git rebase：将一个 commit 重新合并到当前分支
##### git reset: 将当前 HEAD 复位到指定状态
##### git remote: 管理远程仓库的列表和配置
#### 文件管理

##### git clone: 将一个 Git 仓库克隆到指定路径
##### git init: 创建一个空的 Git 仓库或者重新初始化一个仓库
##### git config: 配置 Git 外观和操作
##### git mv: 移动工作区和暂存区的文件

##### git rm: 删除工作区和暂存区中文件

##### git stash: 临时保存所有更改文件

##### git submodule: 将另一个 Git 仓库作为子模块


#### 覆盖本地

```git
git fetch origin 
git reset --hard origin/<branch_name>
```
