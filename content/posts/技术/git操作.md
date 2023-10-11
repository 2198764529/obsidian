---
title: git操作
id: 063576171e
datetimeCreate: 2023-09-28 22:06:37
datetimeUpdate: 2023-10-11 17:44:11
---
#### Git 所有操作及命令
Git 是一个分布式版本控制系统，常用于管理代码的版本和协作开发。以下是 Git 的一些常用操作和命令：

```
usage: git [-v | --version] [-h | --help] [-C <path>] [-c <name>=<value>]
           [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]
           [-p | --paginate | -P | --no-pager] [--no-replace-objects] [--bare]
           [--git-dir=<path>] [--work-tree=<path>] [--namespace=<name>]
           [--config-env=<name>=<envvar>] <command> [<args>]

These are common Git commands used in various situations:

start a working area (see also: git help tutorial)
   clone     Clone a repository into a new directory
   init      Create an empty Git repository or reinitialize an existing one

work on the current change (see also: git help everyday)
   add       Add file contents to the index
   mv        Move or rename a file, a directory, or a symlink
   restore   Restore working tree files
   rm        Remove files from the working tree and from the index

examine the history and state (see also: git help revisions)
   bisect    Use binary search to find the commit that introduced a bug
   diff      Show changes between commits, commit and working tree, etc
   grep      Print lines matching a pattern
   log       Show commit logs
   show      Show various types of objects
   status    Show the working tree status

grow, mark and tweak your common history
   branch    List, create, or delete branches
   commit    Record changes to the repository
   merge     Join two or more development histories together
   rebase    Reapply commits on top of another base tip
   reset     Reset current HEAD to the specified state
   switch    Switch branches
   tag       Create, list, delete or verify a tag object signed with GPG

collaborate (see also: git help workflows)
   fetch     Download objects and refs from another repository
   pull      Fetch from and integrate with another repository or a local branch
   push      Update remote refs along with associated objects
```

### Git diff
在默认的 Git diff 输出中，您通常会看到以下内容：

- `-` 行：表示被删除的行。
- `+` 行：表示被添加的行。
- `@@ -1,14 +1,22 @@`：表示文件的上下文（context），以及行号的范围。

具体来说：

- `@@` 标志表示一个差异块的开始。
- `-1,14` 表示在原文件中，从第 1 行开始的 14 行代码。
- `+1,22` 表示在修改后的文件中，从第 1 行开始的 22 行代码。

这个输出告诉您在两个版本之间的文件中，原始文件的第 1 行到第 14 行与修改后的文件的第 1 行到第 22 行之间有差异。

通常，`-` 行下面的内容表示原文件的内容，`+` 行下面的内容表示修改后的文件的内容。这使您可以轻松比较文件的变化。如果要了解更多关于 Git diff 的信息，您可以使用 `git help diff` 命令来查看 Git 的官方文档。