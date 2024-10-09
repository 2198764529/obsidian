---
title: git操作
id: ddbf9fb705
datetimeCreate: 2023-10-10 16:14:27
datetimeUpdate: 2024-10-09 16:59:03
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

```bash
git show <commit_id> <option>
```


- `--stat`: 仅显示更改统计信息，而不显示实际的文件差异。
- `--name-only`: 仅显示已更改的文件名，而不显示实际的文件差异。
- `--name-status`: 显示已更改的文件名及其更改状态（例如，新建、修改或删除）。
- `--pretty=<format>`: 自定义输出格式，例如 `%h` 表示提交哈希值，`%an` 表示作者名字等。
- `--abbrev-commit`: 使用缩写形式的提交哈希值。
- `--no-patch`: 不显示文件差异，只显示提交信息。
- `--cc`: 在输出中包含相关提交者的电子邮件地址。
- `--encoding=<encoding>`: 指定输出编码。
- `--notes[=<ref>]`: 显示与提交相关的注释。
- `--raw`: 以原始格式显示提交信息。
- `--binary`: 将二进制文件视为已更改，即使它们没有实际更改。
- `--textconv`: 使用指定的文本转换器处理差异。
- `--ignore-space-at-eol`: 忽略行尾空格的差异。
- `--ignore-space-change`: 忽略空白字符更改的差异。
- `--ignore-all-space`: 忽略所有空白字符的差异。
- `--ignore-cr-at-eol`: 忽略行尾回车符的差异。
- `--ignore-blank-lines`: 忽略空行的差异。
- `--patience`: 使用 patience diff 算法进行比较。
- `--histogram`: 显示每个文件的更改次数直方图。
- `--unified=<n>`: 设置合并差异的上下文行数，默认为3。
- `--indent-heuristic`: 启用启发式缩进检测。
- `--no-indent-heuristic`: 禁用启发式缩进检测。
- `--pickaxe-all`: 当执行 `git log -S<string>` 时，查找包含该字符串的所有提交。
- `--pickaxe-regex`: 当执行 `git log -S<regex>` 时，查找包含匹配正则表达式的提交。
- `--pickaxe-index`: 当执行 `git log -S<string>` 时，仅查找索引中包含该字符串的提交。
- `--pickaxe-refs`: 当执行 `git log -S<string>` 时，仅查找引用中包含该字符串的提交。
- `--pickaxe-ignore-refs`: 当执行 `git log -S<string>` 时，忽略包含该字符串的引用。
- `--pickaxe-break`: 当执行 `git log -S<string>` 时，在找到第一个匹配项后停止搜索。
- `--pickaxe-continue`: 当执行 `git log -S<string>` 时，继续搜索其他匹配项。
- `--pickaxe-trust-flags`: 当执行 `git log -S<string>` 时，根据文件的标志（如已删除或已移动）跳过某些文件。

##### git help: 显示 Git 命令的帮助信息

```bash
git help <command> <option>
```

- `--all` 或 `-a`: 显示所有可用的 Git 命令的帮助信息。
- `--guide` 或 `-g`: 显示 Git 指南，这是一份详细的教程，介绍如何使用 Git 进行版本控制。
- `--info` 或 `-i`: 显示有关 Git 配置和操作的信息。
- `--worktree` 或 `-w`: 显示有关工作树（working tree）的信息。
- `--html-path`: 指定生成 HTML 帮助文档的路径。
- `--web`: 在默认浏览器中打开在线 Git 文档。
- `--include-deps`: 包括依赖项的帮助信息。
- `--verbose` 或 `-v`: 显示更详细的帮助信息。
- `--no-browser`: 不尝试使用默认浏览器打开在线文档。
- `--usage` 或 `-u`: 仅显示命令的基本用法。
- `--help` 或 `-h`: 显示简短的帮助信息。

##### git status: 显示工作目录和暂存区的相关信息
```bash
git status <option>
```

- `--short`: 以简短的形式显示状态，只显示文件名而不显示详细信息。
- `--long`: 以详细的形式显示状态，包括文件名、更改类型和更改数量。
- `--branch`: 显示当前分支的名称。
- `--show-stash`: 显示有关 stash 的信息（如果有的话）。
- `--porcelain`: 以易于解析的格式输出状态信息，主要用于脚本和程序中。
- `--untracked-files=<mode>`: 控制未跟踪文件的显示方式。可用的模式有 `all`、`normal` 和 `no`。
- `--ignored`: 显示被忽略的文件。
- `--ignored=matching`: 仅显示与指定模式匹配的被忽略文件。
- `--ignored=excludes`: 仅显示被排除在 `.gitignore` 文件中的文件。
- `--ignored=only`: 仅显示被忽略的文件，不包括被排除的文件。
- `--ignored=others`: 显示除被忽略和被排除之外的其他文件。
- `--renames`: 显示已重命名的文件。
- `--find-renames=<n>`: 设置查找重命名的最大距离（默认为100%）。
- `--abbrev=<n>`: 设置缩写哈希的长度，默认为7。
- `--column`: 以列的形式显示输出，适用于宽度有限的终端。
- `--ahead-behind`: 显示本地分支相对于远程分支的领先或落后情况。
- `--branches`: 显示所有分支及其关联的工作树状态。
- `--tags`: 显示所有标签及其关联的工作树状态。
- `--verbose`: 显示更详细的输出，包括每个文件的更改行数。

##### git diff: 显示工作区和暂存区的差异
以下是 `git diff` 命令的一些常用参数：
```bash
git diff <option>
```
- `--name-only`: 仅显示差异文件的名称，而不显示具体的差异内容。
- `--name-status`: 显示每个更改的文件的状态（例如，新建、修改或删除）。
- `--stat`: 显示每个更改的文件的简短统计信息，包括插入和删除的行数。
- `--summary`: 显示所有更改的总览，包括插入、删除和重命名的文件数量。
- `--patch`: 显示完整的差异补丁，类似于 `git show` 命令的输出。
- `--no-prefix`: 不显示文件名前的 `a/` 和 `b/` 前缀，这在比较分支时很有用。
- `--ignore-space-at-eol`: 忽略行尾空格的差异。
- `--ignore-space-change`: 忽略空白字符更改的差异。
- `--ignore-all-space`: 忽略所有空白字符的差异。
- `--ignore-cr-at-eol`: 忽略行尾回车符的差异。
- `--ignore-blank-lines`: 忽略空行的差异。
- `--textconv`: 使用指定的文本转换器处理差异。
- `--word-diff`: 按单词而不是按行进行比较。
- `--word-diff-regex=<regex>`: 指定用于单词比较的正则表达式。
- `--color[=<when>]`: 控制是否以及何时使用颜色来显示差异。
- `--no-color`: 不使用颜色显示差异。
- `--no-ext-diff`: 禁用外部差异工具的使用。
- `--no-index`: 不检查索引中的文件是否存在。
- `--cached`: 仅显示暂存区与最后一次提交之间的差异。
- `--quiet`: 减少输出的信息量。
- `--binary`: 将二进制文件视为已更改，即使它们没有实际更改。
- `--abbrev=<n>`: 设置缩写哈希的长度，默认为7。
- `--full-index`: 显示完整的索引条目，包括文件路径和模式。
- `--full-tree`: 显示完整的树对象，包括文件路径和模式。
- `--unified=<n>`: 设置合并差异的上下文行数，默认为3。
- `--indent-heuristic`: 启用启发式缩进检测。
- `--no-indent-heuristic`: 禁用启发式缩进检测。
- `--patience`: 使用 patience diff 算法进行比较。
- `--histogram`: 显示每个文件的更改次数直方图。
- `--diff-filter=[(A|C|D|M|R|T|U|X|B)...]`: 只显示满足给定过滤器条件的更改。
- `--find-copies-harder`: 更努力地查找复制块。
- `--pickaxe-all`: 当执行 `git log -S<string>` 时，查找包含该字符串的所有提交。
- `--pickaxe-regex`: 当执行 `git log -S<regex>` 时，查找包含匹配正则表达式的提交。
- `--pickaxe-index`: 当执行 `git log -S<string>` 时，仅查找索引中包含该字符串的提交。
- `--pickaxe-refs`: 当执行 `git log -S<string>` 时，仅查找引用中包含该字符串的提交。
- `--pickaxe-ignore-refs`: 当执行 `git log -S<string>` 时，忽略包含该字符串的引用。
- `--pickaxe-break`: 当执行 `git log -S<string>` 时，在找到第一个匹配项后停止搜索。
- `--pickaxe-continue`: 当执行 `git log -S<string>` 时，继续搜索其他匹配项。
- `--pickaxe-trust-flags`: 当执行 `git log -S<string>` 时，根据文件的标志（如已删除或已移动）跳过某些文件。

##### git log: 列出所有提交日志信息

```bash
git log <option>
```
- `--oneline`: 以一行的形式显示每个提交的简短信息。
- `--graph`: 以图形化的方式显示分支和合并历史。
- `--all`: 显示所有分支的历史记录，包括已经被删除的分支。
- `--author=<pattern>`: 仅显示指定作者的提交。
- `--since=<date>`: 仅显示从指定日期之后的提交。
- `--until=<date>`: 仅显示直到指定日期之前的提交。
- `--grep=<pattern>`: 仅显示包含指定模式的提交消息。
- `--decorate`: 在输出中添加分支名和标签名。
- `--pretty=<format>`: 自定义输出格式，例如 `%h` 表示提交哈希值，`%an` 表示作者名字等。
- `-n`: 限制显示的提交数量。
- `--follow`: 跟踪文件的变化，即使它们被重命名或移动。
- `-- <path>`: 仅显示与指定路径相关的提交。
##### git shortlog：汇总所有贡献者的提交记录

`git shortlog` 是一个用于显示提交者及其提交数量的命令。以下是一些常用的 `git shortlog` 选项：

- `-s`: 按提交数量排序，降序排列。
- `-n`: 限制输出的行数。
- `--numbered`: 为每个提交者添加编号。
- `--summary`: 仅显示提交者及其提交数量的总和。
- `--email`: 显示提交者的电子邮件地址而不是名字。
- `--eol`: 在每个提交者之间插入空行。
- `--pretty=<format>`: 自定义输出格式，例如 `%h` 表示提交哈希值，`%an` 表示作者名字等。
- `--since=<date>`: 仅显示从指定日期之后的提交。
- `--until=<date>`: 仅显示直到指定日期之前的提交。
- `--author=<pattern>`: 仅显示指定作者的提交。
- `--committer=<pattern>`: 仅显示指定提交者的提交。
- `--grep=<pattern>`: 仅显示包含指定模式的提交消息。
- `--perl-regexp`: 使用 Perl 正则表达式进行匹配。
- `--all`: 显示所有分支的历史记录，包括已经被删除的分支。
- `--branches[=<pattern>]`: 仅显示指定分支或符合模式的分支的提交。
- `--tags[=<pattern>]`: 仅显示指定标签或符合模式的标签的提交。
- `--merges`: 仅显示合并提交。
- `--no-merges`: 不显示合并提交。
- `--patch`: 显示完整的差异补丁。
- `-- <path>`: 仅显示与指定路径相关的提交。

这些选项可以组合使用以满足特定的需求。例如，要查看最近10个提交者的详细信息，可以使用以下命令：

```bash
git shortlog -s -n 10 --pretty=fuller
```


##### git describe： 给出一个可读的名称来表示最近的提交

`git describe` 是一个用于获取当前提交的标签、分支名和相对位置的命令。以下是 `git describe` 的一些常用选项：

- `--tags`: 仅显示标签信息，忽略分支名和相对位置。
- `--all`: 显示所有提交的信息，包括标签、分支名和相对位置。
- `--long`: 显示完整的提交哈希值。
- `--abbrev=<n>`: 设置提交哈希值的缩写长度，默认为7。
- `--dirty`: 如果工作区有未提交的更改，则在输出中添加 `-dirty` 标记。
- `--always`: 总是显示完整的提交哈希值，即使它与最近的标签匹配。
- `--match <pattern>`: 仅显示符合指定模式的提交信息。
- `--exclude <pattern>`: 排除符合指定模式的提交信息。
- `--first-parent`: 只显示第一个父提交的信息，忽略合并提交。
- `--contains <commit>`: 显示包含指定提交的所有提交信息。
- `--debug`: 显示调试信息。

这些选项可以组合使用以满足特定的需求。例如，要查看当前提交的完整描述，可以使用以下命令：

```bash
git describe --long --all
```
#### 推送和更新信息

##### git add: 将文件添加到暂存区

`git add` 命令用于将文件更改添加到暂存区，以便进行提交。以下是一些常用的 `git add` 选项：

- `--all` 或 `-A`: 将所有已跟踪的文件和未跟踪的文件都添加到暂存区。
- `--update` 或 `-u`: 仅将已跟踪的文件中发生更改的文件添加到暂存区。
- `--patch` 或 `-p`: 进入交互模式，允许你选择要添加到暂存区的更改块。
- `--interactive` 或 `-i`: 进入交互模式，允许你选择要添加到暂存区的文件和更改块。
- `--dry-run`: 模拟运行 `git add`，显示将要添加的文件列表而不实际执行添加操作。
- `--ignore-removal`: 忽略被删除的文件，即使它们之前已被添加到暂存区。
- `--intent-to-add`: 将文件标记为“意图添加”，表示这些文件将被添加到暂存区，但尚未提交。
- `--refresh`: 更新工作树以匹配暂存区中的更改，但不修改暂存区。
- `--no-all`: 与 `--all` 相反，不添加所有文件到暂存区。
- `--no-ignore-removal`: 与 `--ignore-removal` 相反，不忽略被删除的文件。
- `--chmod=(+|-)x`: 改变文件的可执行权限。例如，`--chmod=+x` 会添加可执行权限，而 `--chmod=-x` 会移除可执行权限。
- `--pathspec-from-file=<file>`: 从指定的文件中读取路径规范，并将其作为参数传递给 `git add`。

这些选项可以组合使用以满足特定的需求。例如，要将一个名为 `myfile.txt` 的文件添加到暂存区并忽略被删除的文件，可以使用以下命令：

```bash
git add --ignore-removal myfile.txt
```
##### git commit: 将文件提交到暂存区

`git commit` 命令有一些选项可以用来定制提交的行为。以下是一些常用的 `git commit` 选项：

- `-a` 或 `--all`: 自动将所有已跟踪的文件暂存并提交。
- `-m <message>` 或 `--message=<message>`: 使用指定的提交信息进行提交。
- `-e` 或 `--edit`: 在编辑器中编辑提交信息，而不是直接在命令行中输入。
- `-n` 或 `--no-verify`: 跳过预提交钩子（pre-commit hooks）的执行。
- `--amend`: 修改最近的一次提交，将暂存区中的更改添加到该提交中。
- `--allow-empty`: 允许创建空提交，即使没有更改被暂存。
- `--dry-run`: 显示将要进行的提交操作，但不实际执行提交。
- `--no-post-rewrite`: 在使用 `--amend` 或 `--reset` 时，不更新引用日志。
- `--no-gpg-sign`: 不使用 GPG 签名提交。
- `--signoff`: 在提交信息末尾添加一行 "Signed-off-by: Your Name <your@email.com>"。
- `--template=<file>`: 使用指定的模板文件作为提交信息的格式。
- `--cleanup-mode=<mode>`: 设置清理模式，用于处理提交过程中产生的临时文件。

这些选项可以组合使用以满足特定的需求。例如，要创建一个带有特定提交信息的提交，可以使用以下命令：

```bash
git commit -m "This is my commit message"
```
##### git fetch: 获取最新的文件, 但不会合并

`git fetch` 命令用于从远程仓库获取最新的提交，但不会自动合并到本地分支。以下是 `git fetch` 的一些常用选项：

- `--all` 或 `-a`: 获取所有远程仓库的更新。
- `--prune`: 删除远程仓库中已经不存在的分支对应的本地引用。
- `--dry-run`: 显示将要执行的操作，但并不实际执行。
- `--force`: 强制覆盖本地分支的历史记录，慎用此选项。
- `--tags`: 获取所有标签的更新。
- `<repository>`: 指定要获取更新的远程仓库名称。
- `<refspec>`: 指定要获取的分支或标签的名称。

例如，要获取名为 `origin` 的远程仓库的所有更新，并删除不存在的分支，可以使用以下命令：

```bash
git fetch --all --prune origin
```
##### git pull: fetch和merge的组合命令, 即获取最新版本接着合并

`git pull` 命令用于从远程仓库拉取代码并合并到本地分支。以下是一些常用的 `git pull` 选项：

- `--rebase`: 使用变基（rebase）而不是合并（merge）来更新当前分支。这可以使得提交历史更加整洁，但可能会改变提交的哈希值。
- `--squash`: 将多个提交压缩成一个提交。这对于整理提交历史很有用，特别是当你需要将多个小的提交合并为一个大的提交时。
- `--commit`: 在压缩提交时，保留每个提交的消息和作者信息。
- `--edit`: 在压缩提交时，允许编辑最终的提交消息。
- `--ff`: 仅当目标分支与当前分支具有直接关系时才执行快速前进（fast-forward）。如果无法进行快速前进，则不会执行拉取操作。
- `--no-ff`: 总是创建一个新的合并提交，即使可以进行快速前进。
- `--strategy-option=<option>`: 指定合并策略选项。例如，`--strategy-option=theirs` 会使用 "theirs" 策略，即总是选择远程仓库的版本。
- `--allow-unrelated-histories`: 允许合并两个没有共同祖先的历史记录。默认情况下，Git 不允许这样做，因为这可能导致混乱的提交历史。
- `--recurse-submodules`: 递归地更新所有子模块。
- `--depth=<number>`: 限制克隆深度，只获取最近的一定数量的提交。这可以减少克隆的时间和空间需求。
- `--single-branch`: 只克隆单个分支，而不是所有分支。
- `--tags`: 除了代码之外，还拉取标签。
- `--force`: 强制拉取，即使本地修改未提交或冲突未解决。

这些选项可以根据具体的需求组合使用。例如，要使用变基并压缩提交，可以运行以下命令：

```bash
git pull --rebase --squash
```
##### git push: 将 commit 信息提交

`git push` 命令用于将本地分支的提交推送到远程仓库。以下是一些常用的 `git push` 选项：

- `--all` 或 `-a`: 将所有分支的更改推送到远程仓库，包括那些没有被跟踪的分支。
- `--force` 或 `-f`: 强制推送，即使远程分支上有新的提交，也会覆盖它们。请注意，这可能会导致其他人的工作丢失，因此谨慎使用。
- `--dry-run`: 模拟推送操作，显示将要执行的操作而不实际执行。这对于检查推送是否会成功很有用。
- `--tags`: 推送所有标签到远程仓库。
- `--set-upstream` 或 `-u`: 设置当前分支与远程分支之间的关联关系，以便将来可以简化推送和拉取操作。
- `--delete <branch>`: 删除远程仓库上的指定分支。
- `--mirror`: 镜像推送，将所有本地分支和标签都推送到远程仓库，但不包括工作区中的未跟踪文件。
- `--no-verify`: 跳过预推送钩子（pre-push hooks）的执行。
- `--follow-tags`: 在推送时自动推送标签。
- `--atomic`: 确保所有引用都被一起推送，如果其中一个失败，则撤销所有推送。
- `--progress`: 显示推送进度。
- `--verbose` 或 `-v`: 显示详细的操作信息。
- `--recurse-submodules=<pathspec>`: 递归推送子模块的更改。
- `--thin`: 使用 "thin" 协议进行推送，减少数据传输量。
- `--receive-pack=<receive-pack>`: 指定接收包的大小限制。
- `--upload-pack=<upload-pack>`: 指定上传包的大小限制。

这些选项可以根据具体需求组合使用。例如，要将本地分支 `my-feature` 推送到远程仓库并设置为上游分支，可以使用以下命令：

```bash
git push -u origin my-feature
```

##### git tag: 给 commit 打上 标签


以下是 `git tag` 命令的参数和选项：

- `-l` 或 `--list`：列出所有标签。
- `-a` 或 `--annotate`：创建带注解的标签。
- `-m <message>`：指定注解标签的消息（与 `-a` 一起使用）。
- `-s` 或 `--sign`：创建签名标签（需要 GPG 签名）。
- `-f` 或 `--force`：强制创建或更新已有标签。
- `-d` 或 `--delete`：删除标签。
- `-n<num>`：显示标签关联的提交的前几行信息。
- `-v` 或 `--verify`：校验 GPG 签名的标签。
- `--contains <commit>`：显示包含特定提交的所有标签。
- `-o <file>`：输出标签到指定文件。

```bash
git tag [选项] [<tagname>] [<commit>]
```
#### 分支管理
##### git branch: 列出,新建或删除分支

以下是 `git branch` 命令的选项：

- `-a` 或 `--all`：列出本地和远程追踪的所有分支。
- `-d <branch>`：删除分支（如果该分支未被完全合并，Git 会阻止删除）。
- `-D <branch>`：强制删除分支（即使该分支未被完全合并）。
- `-m <old> <new>`：重命名分支。
- `-M <old> <new>`：强制重命名分支，即使新名称已存在。
- `-r` 或 `--remotes`：仅列出远程分支。
- `-v` 或 `--verbose`：显示每个分支的最后一次提交信息。
- `--contains <commit>`：列出包含指定提交的所有分支。
- `--no-merged <commit>`：列出未合并指定提交的分支。
- `--merged <commit>`：列出已合并指定提交的分支。
- `--sort=<key>`：根据特定键值对分支进行排序（如 `-sort=committerdate`）。
- `--list`：列出分支（可以与模式匹配符一起使用，如 `git branch --list 'feature/*'`）。

##### git checkout: 切换分支或恢复工作区文件

以下是 `git checkout` 命令的所有参数：

- `-b <branch>`：创建并切换到一个新分支。
- `-B <branch>`：创建新分支或强制重置现有分支到新的起点并切换到该分支。
- `<branch>`：切换到指定的分支。
- `<commit>`：切换到指定的提交（以“分离头指针”模式）。
- `--orphan <new-branch>`：创建一个没有历史记录的新分支（孤立分支）。
- `-m` 或 `--merge`：尝试保留当前的本地更改，并在切换分支时将它们应用到新分支上。
- `-f` 或 `--force`：强制切换分支，即使有未提交的更改。
- `--track <remote>/<branch>`：创建本地分支，并设置为跟踪指定的远程分支。
- `--no-track`：创建分支时不自动设置跟踪。
- `--detach`：切换到指定的提交（以“分离头指针”模式），不指向任何分支。
- `--recurse-submodules[=<checkout>]`：更新子模块，默认为 `checkout`，可指定 `on-demand`。
- `--pathspec-from-file <file>`：从指定文件中读取路径模式。
- `--ignore-skip-worktree-bits`：在切换分支时忽略 `skip-worktree` 位的设置。

这些选项可以帮助你在 Git 中切换分支、提交或其他引用，并处理各种切换场景。
##### git merge: 合并分支

以下是 `git merge` 命令的所有参数：

- `--no-ff`：禁用“快进”合并，即使可以快进，也会创建一个新的合并提交。
- `--ff`：允许“快进”合并（默认行为）。
- `--ff-only`：仅执行“快进”合并，如果不能快进，合并将会终止。
- `--squash`：将所有提交“压缩”成一个提交，而不是逐个合并，保留更改但不自动提交。
- `--commit`：在合并完成后自动创建合并提交（默认行为）。
- `--no-commit`：完成合并但不创建提交，让用户手动提交。
- `--edit` 或 `-e`：允许编辑默认的合并提交消息。
- `--no-edit`：使用默认的合并提交消息而不进入编辑器。
- `--log[=<n>]`：包括提交日志信息，并显示合并的提交记录，`n` 是显示的提交数量。
- `--no-log`：不显示合并提交的日志信息。
- `-m <message>`：使用指定的提交消息替代默认的合并提交消息。
- `--strategy=<strategy>`：选择合并策略，如 `recursive`、`resolve`、`ours`、`theirs`。
- `-X<option>`：为合并策略指定额外选项，如 `-Xignore-all-space` 忽略所有空格差异。
- `--abort`：取消当前的合并过程，恢复到合并前的状态。
- `--continue`：继续处理冲突后暂停的合并过程。
- `--progress`：显示合并的进度信息（默认行为，适用于大规模合并）。
- `--no-progress`：不显示合并进度信息。
- `--verify-signatures`：验证合并提交的 GPG 签名。
- `--no-verify-signatures`：跳过 GPG 签名验证。

这些参数可以帮助控制合并行为，包括处理冲突、编辑提交消息和选择合并策略等。

##### git mergetool: 解决合并冲突
以下是 `git mergetool` 命令的所有参数：

- `--tool=<tool>`：指定使用的合并工具，例如 `vimdiff`、`meld` 等。如果不指定，会使用默认工具。
- `--tool-help`：列出可用的合并工具以及它们的使用帮助。
- `-y` 或 `--prompt`：显示每个文件的提示，询问是否要使用 mergetool 处理该文件（默认行为）。
- `-t` 或 `--trust-exit-code`：信任合并工具的退出代码，不强制用户在退出时确认。
- `--no-prompt`：不提示，直接运行合并工具处理所有冲突的文件。
- `-O <orderfile>`：按照指定文件的顺序处理冲突文件。
- `--guitool=<guitool>`：指定使用图形界面的合并工具。
- `--no-gui`：禁用 GUI，强制使用命令行工具。
- `--[no-]symlinks`：在工具中启用或禁用符号链接处理。
- `--no-index`：允许在不涉及文件索引的情况下运行合并工具。

这些选项帮助你在使用图形或命令行工具时解决 Git 合并冲突。

你以后处理合并冲突时喜欢用哪个工具？想让我帮你记下这些偏好吗？
##### git rebase：将一个 commit 重新合并到当前分支
以下是 `git rebase` 命令的所有参数：

- `-i` 或 `--interactive`：以交互模式进行 rebase，让你可以修改、合并、删除或重新排列提交。
- `-p` 或 `--preserve-merges`：保留合并提交，尝试重放分支的合并历史。
- `--continue`：继续处理冲突后暂停的 rebase 过程。
- `--abort`：终止 rebase 过程，并恢复到 rebase 开始前的状态。
- `--skip`：跳过当前冲突的提交，并继续 rebase 过程。
- `--onto <newbase>`：将当前分支重新定位到指定的 `newbase`，而不是当前的上游分支。
- `--apply`：使用补丁而不是直接应用提交的方式来执行 rebase。
- `--merge`：使用合并策略进行 rebase，而不是默认的基于应用提交的方法。
- `--no-ff`：禁用“快进”模式，即使可以快进也会创建新的提交。
- `--autosquash`：自动将标记为 `fixup!` 或 `squash!` 的提交与目标提交合并。
- `--autostash`：在执行 rebase 之前自动暂存未提交的更改，并在 rebase 完成后恢复。
- `--keep-empty`：在 rebase 过程中保留空提交。
- `--committer-date-is-author-date`：将提交者的日期设置为与作者的日期相同。
- `--rebase-merges`：重演历史记录中的合并提交，类似于 `--preserve-merges`，但更智能。
- `--strategy=<strategy>`：使用指定的合并策略（与 `merge` 命令类似）。
- `-X<option>`：为指定的合并策略提供额外选项。
- `--root`：从项目的根提交开始进行 rebase。
- `--fork-point`：尝试找到更合适的起始点进行 rebase，以避免不必要的冲突。
- `--no-fork-point`：忽略 `fork-point`，从指定的基础进行 rebase。

这些选项让你可以灵活地在 Git 中重新整理提交历史、解决冲突以及管理合并操作。
##### git reset: 将当前 HEAD 复位到指定状态

以下是 `git reset` 命令的所有参数：

- `--soft <commit>`：将 HEAD 移动到指定的提交，保留暂存区和工作目录的更改（相当于只改变提交历史）。
- `--mixed <commit>`（默认选项）：将 HEAD 移动到指定的提交，保留工作目录的更改，但重置暂存区（即取消暂存）。
- `--hard <commit>`：将 HEAD 移动到指定的提交，并丢弃工作目录和暂存区的所有更改（注意：此操作不可恢复）。
- `--merge`：在合并过程中使用 reset，重置暂存区以匹配指定的提交，但保留工作目录的更改。
- `--keep`：将 HEAD 移动到指定的提交，仅在没有未提交的更改时进行重置，保留工作目录的更改。
- `-p` 或 `--patch`：逐个选择更改以重置，允许你在交互模式下选择要重置的文件。
- `--mixed`：将 HEAD 移动到指定的提交，并重置暂存区（等同于不指定选项）。
- `<commit>`：指定要重置到的提交（可以是提交哈希、分支名称等）。

这些选项可以帮助你在 Git 中管理提交历史、暂存区和工作目录的状态。
##### git remote: 管理远程仓库的列表和配置

以下是 `git remote` 命令的所有参数：

- `-v` 或 `--verbose`：显示远程仓库的详细信息，包括其 URL。
- `add <name> <url>`：添加一个新的远程仓库，`<name>` 是远程仓库的名称，`<url>` 是其地址。
- `remove <name>`：删除指定的远程仓库。
- `rename <old-name> <new-name>`：重命名指定的远程仓库。
- `set-url <name> <newurl>`：更改指定远程仓库的 URL。
- `get-url <name>`：显示指定远程仓库的 URL。
- `show <name>`：显示远程仓库的详细信息，包括其 URL 和引用信息。
- `update`：更新远程仓库的信息。
- `prune`：删除本地跟踪的远程分支，如果远程仓库中已经删除。
- `-h` 或 `--help`：显示帮助信息。

这些参数可以帮助你管理和配置 Git 中的远程仓库。


#### 文件管理

##### git clone: 将一个 Git 仓库克隆到指定路径

以下是 `git clone` 命令的所有选项：

- `-v` 或 `--verbose`：显示详细的操作信息。
- `--progress`：在克隆过程中显示进度信息。
- `--quiet`：不显示输出信息。
- `-b <branch>` 或 `--branch <branch>`：克隆指定的分支，而不是默认的主分支。
- `--single-branch`：仅克隆指定分支，而不下载其他分支的信息。
- `--depth <depth>`：进行浅克隆，限制历史提交的深度。
- `--shallow-submodules`：对子模块执行浅克隆。
- `--recursive`：克隆仓库及其子模块。
- `--recurse-submodules`：同 `--recursive`，克隆仓库时还克隆子模块。
- `--reference <repository>`：指定参考仓库，以提高克隆速度和节省带宽。
- `--no-checkout`：不自动签出工作目录的文件。
- `--no-replace-objects`：克隆时不替换对象。
- `--template <template_directory>`：使用指定的模板目录创建新的 Git 仓库。
- `--config <key>=<value>`：在克隆时设置指定的配置项。
- `-h` 或 `--help`：显示帮助信息。

这些选项可以帮助你在克隆 Git 仓库时自定义行为，如选择特定分支、控制克隆深度、处理子模块等。


##### git init: 创建一个空的 Git 仓库或者重新初始化一个仓库

以下是 `git init` 命令的所有选项：

- `-q` 或 `--quiet`：在初始化时不显示任何输出信息。
- `--bare`：创建一个裸仓库（没有工作目录），用于共享和协作。
- `--template=<template_directory>`：使用指定的模板目录来初始化新的 Git 仓库。
- `--separate-git-dir=<git-dir>`：将 Git 数据存储在指定的目录中，而不是默认的 `.git` 目录。
- `-h` 或 `--help`：显示帮助信息。

这些选项可以帮助你在初始化 Git 仓库时进行自定义设置。

##### git config: 配置 Git 外观和操作

以下是 `git config` 命令的所有选项：

- `--global`：对当前用户的全局配置进行更改。
- `--local`：对当前 Git 仓库的本地配置进行更改（默认选项）。
- `--system`：对系统范围内的配置进行更改。
- `--edit` 或 `-e`：打开配置文件进行编辑。
- `--list`：列出所有当前有效的配置项。
- `--get <key>`：获取指定配置项的值。
- `--get-all <key>`：获取指定配置项的所有值。
- `--get-regexp <pattern>`：根据模式列出匹配的配置项。
- `--remove-section <section>`：删除指定的配置节。
- `--rename-section <old> <new>`：重命名指定的配置节。
- `--unset <key>`：删除指定的配置项。
- `--unset-all <key>`：删除指定的所有配置项。
- `--add <key> <value>`：向指定的配置项添加一个值。
- `--file <file>`：指定使用的配置文件，而不是默认的配置文件。
- `--help`：显示帮助信息。

这些选项可以帮助你管理和配置 Git 的设置，包括用户信息、别名、行为等。

##### git mv: 移动工作区和暂存区的文件

以下是 `git mv` 命令的所有选项：

- `-f` 或 `--force`：强制移动文件或目录，即使目标位置已存在文件。
- `-n` 或 `--no-clobber`：不覆盖已存在的文件（即不强制移动）。
- `-v` 或 `--verbose`：显示详细的操作信息。
- `-h` 或 `--help`：显示帮助信息。

这些选项可以帮助你在 Git 中移动或重命名文件和目录，同时控制覆盖行为和输出信息。

##### git rm: 删除工作区和暂存区中文件

以下是 `git rm` 命令的所有选项：

- `-f` 或 `--force`：强制删除文件，即使文件已修改且未提交。
- `-r` 或 `--recursive`：递归删除目录及其内容。
- `--cached`：仅从暂存区中删除文件，但保留工作目录中的文件。
- `--dry-run`：模拟删除操作，不实际执行，用于测试。
- `-v` 或 `--verbose`：显示详细的操作信息。
- `-h` 或 `--help`：显示帮助信息。

这些选项可以帮助你在 Git 中删除文件或目录，同时控制删除行为和输出信息。


##### git stash: 临时保存所有更改文件

以下是 `git stash` 命令的所有选项：

- `push`：将当前的工作目录和暂存区的更改保存到栈中（默认操作）。
- `pop`：从栈中弹出最近的 stash，并将更改应用到工作目录。
- `apply`：将最近的 stash 应用到工作目录，但不从栈中删除它。
- `drop`：从栈中删除指定的 stash。
- `list`：列出所有的 stash 项。
- `show`：显示最近的 stash 变更的摘要信息。
- `show <stash>`：显示指定 stash 的变更摘要信息。
- `clear`：删除所有的 stash 项。
- `branch <branch>`：基于指定的 stash 创建一个新分支。
- `-k` 或 `--keep-index`：在 push stash 时保留暂存区的更改。
- `-u` 或 `--include-untracked`：在 push stash 时包括未跟踪的文件。
- `-a` 或 `--all`：在 push stash 时包括未跟踪的和忽略的文件。
- `-h` 或 `--help`：显示帮助信息。

这些选项可以帮助你管理和操作 Git 的 stash 功能，包括保存、应用和删除暂存的更改。


##### git submodule: 将另一个 Git 仓库作为子模块

以下是 `git submodule` 命令的所有选项：

- `add <repository> [<path>]`：添加一个新的子模块，指定子模块的 Git 仓库和可选的路径。
- `status`：显示当前子模块的状态，包括子模块的更新和是否存在未跟踪的更改。
- `init`：初始化本地配置文件，准备使用子模块。
- `update`：更新子模块，将其检出到指定的提交。
- `sync`：同步本地配置与远程仓库的配置。
- `foreach <command>`：在每个子模块中执行指定的命令。
- `deinit [<path>]`：取消初始化指定的子模块，移除其文件和配置。
- `set-branch <branch>`：为子模块设置分支以便跟踪。
- `add -- <path>`：添加指定路径中的子模块。
- `--recursive`：对所有子模块递归地应用命令。
- `-h` 或 `--help`：显示帮助信息。

这些选项可以帮助你管理 Git 仓库中的子模块，包括添加、初始化、更新和配置子模块的行为。

#### 覆盖本地

```git
git fetch origin 
git reset --hard origin/<branch_name>
```
