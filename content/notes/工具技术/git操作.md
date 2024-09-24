---
title: git操作
id: 063576171e
datetimeCreate: 2023-09-28 22:06:37
datetimeUpdate: 2024-09-24 17:00:09
---
### git 常用命令

#### 查看信息
##### git show: 查看 commit 详细信息
##### git help: 显示 Git 相关的帮助信息
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
