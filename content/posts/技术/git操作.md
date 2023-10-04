---
id: 063576171e
datetimeCreate: 2023-09-28 22:06:37
datetimeUpdate: 2023-09-29 16:59:57
title: git操作
---
#### Git 所有操作及命令
Git 是一个分布式版本控制系统，常用于管理代码的版本和协作开发。以下是 Git 的一些常用操作和命令：

1. 初始化仓库：
   -  init` - 在当前目录初始化一个新的 Git 仓库

2. 添加文件：
   - git add <file>` - 将文件添加到暂存区
   - `git add .` - 将所有修改过的文件添加到暂存区

3. 提交更改：
   - `git commit -m "<message>"` - 将暂存区的更改提交到本地仓库，并附带一条描述信息

4. 查看状态：
   - `git status` - 显示工作区和暂存区的状态

5. 查看历史记录：
   - `git log` - 显示提交历史记录
   - `git log --oneline` - 以简洁方式显示提交历史记录

6. 回退版本：
   - `git checkout <commit>` - 切换到指定的提交版本
   - `git revert <commit>`- 撤销指定的提交，并创建一个新的提交

7. 分支操作：
   - `git branch`- 列出所有分支
   - `git branch <branchname>`- 创建新分支
   - `git checkout <branchname>`- 切换到指定分支
   - `git merge <branchname>`- 合并指定分支到当前分支
   - `git branch –d <branchname>`- 删除指定分支

8. 远程操作：
   - `git clone <url>`- 克隆远程仓库到本地
   - `git push origin <branchname>`- 推送本地分支到远程仓库
   - `git pull origin <branchname>`- 拉取远程分支到本地
   - `git remote add origin <url>`- 添加远程仓库的 URL

9. 撤销操作：
   - `git reset <commit>`- 将 HEAD 指针移动到指定的提交
   - `git checkout -- <file>`- 撤销对文件的修改，恢复到最近一次提交的状态

这些只是 Git 的一些基本操作和常用命令，还有很多其他的功能和参数可以进一步探索和使用。