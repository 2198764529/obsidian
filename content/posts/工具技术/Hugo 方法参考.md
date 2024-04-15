---
title: Hugo 方法参考
id: a01b727778
datetimeCreate: 2023-11-27 11:04:45
datetimeUpdate: 2024-04-15 11:26:44
---


# String:用于字符串处理

##### `trim`从字符串中删除前导和尾随空格。

```go
{{ trim "   你好，世界！   " }}
``` 
##### `upper`将字符串转换为小写或大写。

```go
{{ lower "你好" }}
{{ upper "world" }}
``` 
##### `title`将字符串中每个单词的首字母转换为大写。

```go
{{ title "hello world" }}
``` 
##### `replace`用另一个子字符串替换子字符串的出现。

```go
{{ replace "你好，世界！" "你好" "嗨" }}
``` 
##### `substr`返回给定字符串的子字符串，从指定位置开始，可选长度。

```go
{{ substr "你好，世界！" 7 5 }}
``` 
##### `len`返回字符串的长度。

```go
{{ len "你好，世界！" }}
``` 
##### `printf`使用`fmt.Printf`语法格式化字符串。

```go
{{ printf "你好，%s！" "世界" }}
``` 
##### `urlize`将字符串转换为适合URL的格式。

```go
{{ urlize "这是一个示例字符串" }}
``` 
##### `humanize`将字符串转换为人类可读的格式。

```go
{{ humanize "some_string" }}
``` 
##### `pluralize`基于计数返回词的复数形式。
```go
{{ with index .Site.Data.translations (printf "%s.toml" .Site.Language.Lang) }}
    {{ .home | default "Home" | pluralize .Site.RegularPages | title }}
{{ end }}
```

# Collections:用于集合处理
您好，这是Bing。我可以用md格式回答您的问题，给出一些常用的hugo函数的代码示例。请看以下内容：

##### After(seq: Seq, item: Any) -> Seq: 返回一个序列，包含给定序列中指定元素之后的所有元素。如果给定序列中没有指定元素，返回空序列。例如：

```hugo
{{ $seq := slice 1 2 3 4 5 }}
{{ $item := 3 }}
{{ $result := after $seq $item }} {{/* result = [4 5] */}}
```

##### `Append`:(seq: Seq, item: Any) -> Seq: 返回一个新的序列，包含给定序列和指定元素的连接。例如：

```hugo
{{ $seq := slice 1 2 3 }}
{{ $item := 4 }}
{{ $result := append $seq $item }} {{/* result = [1 2 3 4] */}}
```

##### `Apply`:(seq: Seq, key: String, fn: Func) -> Seq: 返回一个新的序列，包含给定序列中每个元素的key字段经过fn函数处理后的值。例如：

```hugo
{{ $seq := slice (dict "name" "Alice" "age" 20) (dict "name" "Bob" "age" 25) }}
{{ $key := "name" }}
{{ $fn := upper }}
{{ $result := apply $seq $key $fn }} {{/* result = ["ALICE" "BOB"] */}}
```

##### `Complement`:(seq1: Seq, seq2: Seq) -> Seq: 返回一个新的序列，包含给定序列中不在另一个序列中的元素。例如：

```hugo
{{ $seq1 := slice 1 2 3 4 }}
{{ $seq2 := slice 3 4 5 6 }}
{{ $result := complement $seq1 $seq2 }} {{/* result = [1 2] */}}
```

##### `Delimit`:(seq: Seq, delimiter: String) -> String: 返回一个字符串，包含给定序列中的元素用指定的分隔符连接起来。例如：

```hugo
{{ $seq := slice "a" "b" "c" }}
{{ $delimiter := "," }}
{{ $result := delimit $seq $delimiter }} {{/* result = "a,b,c" */}}
```

##### `Dictionary`:(args: Any…) -> Map: 返回一个新的映射，包含给定的键值对。参数必须是偶数个，且奇数位的参数为键，偶数位的参数为值。例如：

```hugo
{{ $result := dictionary "name" "Alice" "age" 20 }} {{/* result = {"name": "Alice", "age": 20} */}}
```

##### `First`:(limit: Int, seq: Seq) -> Seq: 返回一个新的序列，包含给定序列中的前limit个元素。如果limit大于给定序列的长度，返回整个序列。例如：

```hugo
{{ $limit := 2 }}
{{ $seq := slice 1 2 3 4 5 }}
{{ $result := first $limit $seq }} {{/* result = [1 2] */}}
```

##### `Group`:(seq: Seq, key: String) -> Seq: 返回一个新的序列，包含给定序列中的元素按照key字段的值分组后的结果。每个分组是一个映射，包含两个键：key和values。例如：

```hugo
{{ $seq := slice (dict "name" "Alice" "age" 20) (dict "name" "Bob" "age" 25) (dict "name" "Charlie" "age" 20) }}
{{ $key := "age" }}
{{ $result := group $seq $key }} {{/* result = [{"age": 20, "values": [(dict "name" "Alice" "age" 20) (dict "name" "Charlie" "age" 20)]}, {"age": 25, "values": [(dict "name" "Bob" "age" 25)]}] */}}
```

##### `In`:(seq: Seq, item: Any) -> Bool: 返回一个布尔值，表示给定的元素是否在给定的序列中。例如：

```hugo
{{ $seq := slice 1 2 3 4 5 }}
{{ $item := 3 }}
{{ $result := in $seq $item }} {{/* result = true */}}
```

##### `Index`:(seq: Seq, index: Int) -> Any: 返回给定序列中指定索引的元素。如果索引超出范围，返回nil。例如：

```hugo
{{ $seq := slice 1 2 3 4 5 }}
{{ $index := 2 }}
{{ $result := index $seq $index }} {{/* result = 3 */}}
```

##### `Intersect`:(seq1: Seq, seq2: Seq) -> Seq: 返回一个新的序列，包含给定序列中的公共元素。例如：

```hugo
{{ $seq1 := slice 1 2 3 4 }}
{{ $seq2 := slice 3 4 5 6 }}
{{ $result := intersect $seq1 $seq2 }} {{/* result = [3 4] */}}
```

##### `IsSet`:(seq: Seq, key: String) -> Bool: 返回一个布尔值，表示给定的序列是否包含指定的键。例如：

```hugo
{{ $seq := dict "name" "Alice" "age" 20 }}
{{ $key := "name" }}
{{ $result := isset $seq $key }} {{/* result = true */}}
```

##### `KeyVals`:(seq: Seq) -> Seq: 返回一个新的序列，包含给定序列中的键值对。每个键值对是一个包含两个元素的切片。例如：

```hugo
{{ $seq := dict "name" "Alice" "age" 20 }}
{{ $result := keyVals $seq }} {{/* result = [["name" "Alice"] ["age" 20]] */}}
```

##### `Last`:(limit: Int, seq: Seq) -> Seq: 返回一个新的序列，包含给定序列中的后limit个元素。如果limit大于给定序列的长度，返回整个序列。例如：

```hugo
{{ $limit := 2 }}
{{ $seq := slice 1 2 3 4 5 }}
{{ $result := last $limit $seq }} {{/* result = [4 5] */}}
```

##### `Merge`:(seq1: Seq, seq2: Seq) -> Seq: 返回一个新的序列，包含给定序列中的元素合并后的结果。如果两个序列都是切片，返回一个新的切片。如果两个序列都是映射，返回一个新的映射，其中seq2中的键值对会覆盖seq1中的键值对。例如：

```hugo
{{ $seq1 := slice 1 2 3 }}
{{ $seq2 := slice 4 5 6 }}
{{ $result := merge $seq1 $seq2 }} {{/* result = [1 2 3 4 5 6] */}}

{{ $seq1 := dict "name" "Alice" "age" 20 }}
{{ $seq2 := dict "age" 25 "gender" "female" }}
{{ $result := merge $seq1 $seq2 }} {{/* result = {"name": "Alice", "age": 25, "gender": "female"} */}}
```

##### `NewScratch`:() -> Scratch: 返回一个新的Scratch对象，用于在模板中存储临时数据。例如：

```hugo
{{ $scratch := newScratch }}
{{ $scratch.Set "foo" "bar" }}
{{ $result := $scratch.Get "foo" }} {{/* result = "bar" */}}
```

##### `Querify`:(args: Any…) -> String: 返回一个字符串，包含给定的键值对转换为URL查询参数的结果。参数必须是偶数个，且奇数位的参数为键，偶数位的参数为值。例如：

```hugo
{{ $result := querify "name" "Alice" "age" 20 }} {{/* result = "name=Alice&age=20" */}}
```

##### `Reverse`:(seq: Seq) -> Seq: 返回一个新的序列，包含给定序列中的元素反转后的结果。例如：

```hugo
{{ $seq := slice 1 2 3 4 5 }}
{{ $result := reverse $seq }} {{/* result = [5 4 3 2 1] */}}
```

好的，我继续回答您的问题，给出一些常用的hugo函数的代码示例。请看以下内容：

##### `Seq`:(args: Any…) -> Seq: 返回一个新的序列，包含给定的参数。例如：

```hugo
{{ $result := seq 1 2 3 4 5 }} {{/* result = [1 2 3 4 5] */}}
```

##### Shuffle(seq: Seq) -> Seq: 返回一个新的序列，包含给定序列中的元素随机打乱后的结果。例如：

```hugo
{{ $seq := slice 1 2 3 4 5 }}
{{ $result := shuffle $seq }} {{/* result = [3 5 1 4 2] */}}
```

##### `Slice`:(args: Any…) -> Slice: 返回一个新的切片，包含给定的参数。例如：

```hugo
{{ $result := slice 1 2 3 4 5 }} {{/* result = [1 2 3 4 5] */}}
```

##### `Sort`:(seq: Seq, key: String) -> Seq: 返回一个新的序列，包含给定序列中的元素按照key字段的值排序后的结果。如果key为空，按照元素本身的值排序。例如：

```hugo
{{ $seq := slice 5 4 3 2 1 }}
{{ $key := "" }}
{{ $result := sort $seq $key }} {{/* result = [1 2 3 4 5] */}}

{{ $seq := slice (dict "name" "Alice" "age" 20) (dict "name" "Bob" "age" 25) (dict "name" "Charlie" "age" 20) }}
{{ $key := "name" }}
{{ $result := sort $seq $key }} {{/* result = [(dict "name" "Alice" "age" 20) (dict "name" "Bob" "age" 25) (dict "name" "Charlie" "age" 20)] */}}
```

##### `SymDiff`:(seq1: Seq, seq2: Seq) -> Seq: 返回一个新的序列，包含给定序列中的对称差集，即两个序列中不同时出现的元素。例如：

```hugo
{{ $seq1 := slice 1 2 3 4 }}
{{ $seq2 := slice 3 4 5 6 }}
{{ $result := symDiff $seq1 $seq2 }} {{/* result = [1 2 5 6] */}}
```

##### `Union`:(seq1: Seq, seq2: Seq) -> Seq: 返回一个新的序列，包含给定序列中的并集，即两个序列中的所有元素。例如：

```hugo
{{ $seq1 := slice 1 2 3 4 }}
{{ $seq2 := slice 3 4 5 6 }}
{{ $result := union $seq1 $seq2 }} {{/* result = [1 2 3 4 5 6] */}}
```

##### `Uniq`:(seq: Seq) -> Seq: 返回一个新的序列，包含给定序列中的唯一元素，即去除重复的元素。例如：

```hugo
{{ $seq := slice 1 2 3 3 4 4 5 }}
{{ $result := uniq $seq }} {{/* result = [1 2 3 4 5] */}}
```

##### `Where`:(seq: Seq, key: String, op: String, value: Any) -> Seq: 返回一个新的序列，包含给定序列中满足指定条件的元素。key是要比较的字段，op是要使用的比较运算符，value是要比较的值。op可以是以下之一：`=`，`!=`，`<`，`<=`，`>`，`>=`，`in`，`not in`。例如：

```hugo
{{ $seq := slice (dict "name" "Alice" "age" 20) (dict "name" "Bob" "age" 25) (dict "name" "Charlie" "age" 20) }}
{{ $key := "age" }}
{{ $op := "=" }}
{{ $value := 20 }}
{{ $result := where $seq $key $op $value }} {{/* result = [(dict "name" "Alice" "age" 20) (dict "name" "Charlie" "age" 20)] */}}
```

# Compare: 两个或者多个值比较


##### ``eq`：** 相等

```go
{{ if eq 2 2 }}
    <!-- 这个块将会执行，因为 2 等于 2 -->
{{ else }}
    <!-- 这个块不会执行 -->
{{ end }}
```

##### ``ne`：** 不等

```go
{{ if ne 3 5 }}
    <!-- 这个块将会执行，因为 3 不等于 5 -->
{{ else }}
    <!-- 这个块不会执行 -->
{{ end }}
```

##### ``gt`：** 大于

```go
{{ if gt 10 5 }}
    <!-- 这个块将会执行，因为 10 大于 5 -->
{{ else }}
    <!-- 这个块不会执行 -->
{{ end }}
```

##### ``ge`：** 大于等于

```go
{{ if ge 7 7 }}
    <!-- 这个块将会执行，因为 7 大于等于 7 -->
{{ else }}
    <!-- 这个块不会执行 -->
{{ end }}
```

##### ``lt`：** 小于

```go
{{ if lt 4 8 }}
    <!-- 这个块将会执行，因为 4 小于 8 -->
{{ else }}
    <!-- 这个块不会执行 -->
{{ end }}
```

##### ``le`：** 小于等于

```go
{{ if le 6 6 }}
    <!-- 这个块将会执行，因为 6 小于等于 6 -->
{{ else }}
    <!-- 这个块不会执行 -->
{{ end }}
```

##### ``and`：** 逻辑与

```go
{{ if and (eq 2 2) (gt 5 3) }}
    <!-- 这个块将会执行，因为两个条件都为真 -->
{{ else }}
    <!-- 这个块不会执行 -->
{{ end }}
```

##### ``or`：** 逻辑或

```go
{{ if or (eq 2 3) (lt 5 3) }}
    <!-- 这个块将会执行，因为至少一个条件为真 -->
{{ else }}
    <!-- 这个块不会执行 -->
{{ end }}
```

##### ``cond`：** 条件

```go
{{ cond 
    (eq 2 2) "条件1为真"
    (ne 3 5) "条件2为真"
    (gt 10 5) "条件3为真"
    "默认条件" 
}}
```

##### ``default`：** 默认

```go
{{ $value := default "default_value" .someVariable }}
<!-- 如果 .someVariable 为空，则 $value 将设置为 "default_value" -->
```

# Data & Debug:数据和模板处理
##### ``readFile`：** 读取本地文件
```go

{{ $localFileContent := readFile "path/to/local/file.txt" }}
<!-- $localFileContent 将包含文件的内容 -->
```

##### ``getJSON`：** 读取远程 JSON 文件

```go
{{ $remoteJsonData := getJSON "https://example.com/data.json" }}
<!-- $remoteJsonData 将包含 JSON 文件的数据 -->
```

##### ``getCSV`：** 读取远程 CSV 文件

```go
{{ $remoteCsvData := getCSV "https://example.com/data.csv" }}
<!-- $remoteCsvData 将包含 CSV 文件的数据 -->
```

##### ``dump`：** 打印变量详细信息

```go
{{ dump $remoteJsonData }}
<!-- 使用 dump 打印 $remoteJsonData 变量的详细信息 -->
```

##### ``timer`：** 计算模板执行时间

```go
{{ $timer := timer }}
<!-- 执行一些模板操作 -->
{{ $elapsedTime := $timer }}
{{/* $elapsedTime 包含从 timer 开始到当前位置的时间间隔 */}}
```
#### encoding 数据的编码和解码

##### ``base64Encode` 和 `base64Decode`：** Base64 编码和解码

```go
{{ $originalData := "Hello, World!" }}
{{ $encodedData := $originalData | base64Encode }}
{{ $decodedData := $encodedData | base64Decode }}

<!-- $encodedData 包含 "SGVsbG8sIFdvcmxkIQ==" -->
<!-- $decodedData 包含 "Hello, World!" -->
```

##### ``urlize` 和 `unurlize`：** URL 编码和解码

```go
{{ $originalData := "Hello, World!" }}
{{ $urlEncodedData := $originalData | urlize }}
{{ $urlDecodedData := $urlEncodedData | unurlize }}

<!-- $urlEncodedData 包含 "Hello%2C%20World%21" -->
<!-- $urlDecodedData 包含 "Hello, World!" -->
```

##### ``jsonify`：** 将数据转换为 JSON 格式

```go
{{ $data := map "key" "value" }}
{{ $jsonData := $data | jsonify }}

<!-- $jsonData 包含 '{"key":"value"}' -->
```
# Hugo 库
##### ``hugo.BuildDate`：** 提供 Hugo 构建的日期和时间。

##### ``hugo.CommitHash`：** 提供 Hugo 代码库的 Git 提交哈希。

##### ``hugo.Deps`：** 提供 Hugo 使用的 Go 语言依赖项的信息。

##### ``hugo.Environment`：** 提供 Hugo 当前运行的环境，例如 "production" 或 "development"。

##### ``hugo.Generator`：** 提供 Hugo 站点生成器的信息。

##### ``hugo.GoVersion`：** 提供 Hugo 使用的 Go 语言版本。

##### ``hugo.IsDevelopment`：** 如果 Hugo 当前在开发环境中运行，则为 `true`。

##### ``hugo.IsExtended`：** 如果 Hugo 当前是扩展版本，则为 `true`。

##### ``hugo.IsProduction`：** 如果 Hugo 当前在生产环境中运行，则为 `true`。

##### ``hugo.IsServer`：** 如果 Hugo 当前作为服务器运行，则为 `true`。

##### ``hugo.Version`：** 提供 Hugo 的版本号。

##### ``hugo.WorkingDir`：** 提供 Hugo 当前的工作目录。

# Image:图像处理库


以下是一些使用 `images` 包中的函数的代码示例：

##### ``Brightness`：** 调整图像的亮度。

```go
{{ $brightImage := $image | images.Brightness 20 }}
```

##### ``ColorBalance`：** 调整图像的色彩平衡。

```go
{{ $balancedImage := $image | images.ColorBalance 10 -5 15 }}
```

##### ``Colorize`：** 对图像进行着色。

```go
{{ $colorizedImage := $image | images.Colorize "#FF0000" }}
```

##### ``Config`：** 获取图像的配置信息。

```go
{{ $imageConfig := $image.Config }}
```

##### ``Contrast`：** 调整图像的对比度。

```go
{{ $contrastedImage := $image | images.Contrast 10 }}
```

##### ``Filter`：** 应用滤镜效果。

```go
{{ $filteredImage := $image | images.Filter "blur" }}
```

##### ``Gamma`：** 调整图像的伽马值。

```go
{{ $gammaImage := $image | images.Gamma 1.5 }}
```

##### ``GaussianBlur`：** 对图像应用高斯模糊。

```go
{{ $blurredImage := $image | images.GaussianBlur 5 }}
```

##### ``Grayscale`：** 将图像转换为灰度。

```go
{{ $grayImage := $image | images.Grayscale }}
```

##### ``Hue`：** 调整图像的色调。

```go
{{ $huedImage := $image | images.Hue 30 }}
```

####  inflect:单词处理
##### ``Humanize`：** 使单词更具人性化

```go
{{ $humanizedWord := i18n "word" 1 (slice "en" "humanize") }}
```

##### ``Pluralize`：** 将单词转为复数形式

```go
{{ $pluralWord := i18n "word" 2 (slice "en" "pluralize") }}
```

##### ``Singularize`：** 将单词转为单数形式

```go
{{ $singularWord := i18n "words" 1 (slice "en" "singularize") }}
```
# Math:数字运算

#### **`add`：** 加法

```go
{{ $sum := add 5 3 }}
<!-- $sum 包含 8 -->
```

#### **`sub`：** 减法

```go
{{ $difference := sub 10 3 }}
<!-- $difference 包含 7 -->
```

#### **`mul`：** 乘法

```go
{{ $product := mul 4 6 }}
<!-- $product 包含 24 -->
```

#### **`div`：** 除法

```go
{{ $quotient := div 12 4 }}
<!-- $quotient 包含 3 -->
```

#### **`mod`：** 取余

```go
{{ $remainder := mod 10 3 }}
<!-- $remainder 包含 1 -->
```

#### **`math.Abs`：** 绝对值

```go
{{ $absoluteValue := math.Abs -5 }}
<!-- $absoluteValue 包含 5 -->
```

#### **`math.Ceil` 和 `math.Floor`：** 向上取整和向下取整

```go
{{ $ceiledValue := math.Ceil 4.3 }}
<!-- $ceiledValue 包含 5 -->

{{ $flooredValue := math.Floor 4.8 }}
<!-- $flooredValue 包含 4 -->
```

#### **`math.Max` 和 `math.Min`：** 最大值和最小值

```go
{{ $maxValue := math.Max 10 7 }}
<!-- $maxValue 包含 10 -->

{{ $minValue := math.Min 5 3 }}
<!-- $minValue 包含 3 -->
```

#### **`math.Mod`：** 取余

```go
{{ $remainder := math.Mod 10 3 }}
<!-- $remainder 包含 1 -->
```

#### **`math.ModBool`：** 取余的布尔值

```go
{{ $isEven := math.ModBool 6 2 }}
<!-- $isEven 包含 true -->
```

#### **`math.Mul`：** 乘法

```go
{{ $product := math.Mul 4 6 }}
<!-- $product 包含 24 -->
```

#### **`math.Pow`：** 指数运算

```go
{{ $power := math.Pow 2 3 }}
<!-- $power 包含 8 -->
```

#### **`math.Product`：** 计算多个数字的乘积

```go
{{ $result := math.Product 2 3 4 }}
<!-- $result 包含 24 -->
```

#### **`math.Round`：** 四舍五入

```go
{{ $roundedValue := math.Round 4.5 }}
<!-- $roundedValue 包含 5 -->
```

#### **`math.Sqrt`：** 平方根

```go
{{ $squareRoot := math.Sqrt 16 }}
<!-- $squareRoot 包含 4 -->
```

#### **`math.Sub`：** 减法

```go
{{ $difference := math.Sub 10 3 }}
<!-- $difference 包含 7 -->
```

#### **`math.Sum`：** 计算多个数字的和

```go
{{ $total := math.Sum 2 3 4 }}
<!-- $total 包含 9 -->
```

# OS:系统

##### ``os.FileExists`：** 检查文件是否存在

```go
{{ $filePath := "path/to/file.txt" }}
{{ with resources.Get $filePath }}
  {{ $fileExists := ne .MediaType.Type "unknown" }}
  {{ if $fileExists }}
    <!-- 文件存在的处理 -->
  {{ else }}
    <!-- 文件不存在的处理 -->
  {{ end }}
{{ end }}
```

##### ``os.Getenv`：** 获取环境变量

在 Hugo 模板中无法直接获取环境变量。建议在生成网站前使用其他工具或脚本设置环境变量。

##### ``os.ReadDir`：** 读取目录内容

```go
{{ $dirPath := "path/to/directory" }}
{{ $files := resources.Match $dirPath "**/*" }}
{{ range $files }}
  {{ /* 处理每个文件 */ }}
{{ end }}
```

##### ``os.ReadFile`：** 读取文件内容

```go
{{ $filePath := "path/to/file.txt" }}
{{ with resources.Get $filePath }}
  {{ $fileContent := .Content }}
  <!-- 使用 $fileContent 进行进一步处理 -->
{{ end }}
```

##### ``os.Stat`：** 获取文件状态
```go
{{ $filePath := "path/to/file.txt" }}
{{ with resources.Get $filePath }}
  {{ $fileContent := .Content }}
  <!-- 使用 $fileContent 进行进一步处理 -->
{{ end }}
```
##### ``partial`：** 调用局部模板

```go
{{ partial "myPartial.html" . }}
<!-- 调用名为 "myPartial.html" 的局部模板，并传递当前上下文数据（.） -->
```
##### ``partialCached`：** 调用缓存的局部模板

```go
{{ partialCached "myCachedPartial.html" . "myCacheKey" }}
<!-- 使用缓存键 "myCacheKey" 调用名为 "myCachedPartial.html" 的缓存局部模板，并传递当前上下文数据（.） -->
请注意，`partialCached` 函数允许您使用缓存键来缓存调用的结果，以提高性能。
```

# Time:时间处理



##### `AsTime`: 这个函数可以将一个字符串表示的日期/时间值转换为一个time.Time类型的值。您可以指定一个时区，如果不指定，就使用本地时区。例如：

```hugo
{{ $input := "2023-11-27 16:06:22" }}
{{ $timezone := "Asia/Singapore" }}
{{ $result := time.AsTime $input $timezone }} {{/* result = 2023-11-27 16:06:22 +0800 +08 */}}
```

##### `Duration`: 这个函数可以根据给定的时间单位和数字，返回一个time.Duration类型的值。时间单位可以是以下之一：`ns`，`us`，`ms`，`s`，`m`，`h`。例如：

```hugo
{{ $time_unit := "s" }}
{{ $number := 60 }}
{{ $result := time.Duration $time_unit $number }} {{/* result = 1m0s */}}
```

##### `Format`: 这个函数可以将一个日期/时间值格式化为一个字符串，您可以指定一个布局来控制输出的格式。您也可以使用一些预定义的布局，如`ANSIC`，`UnixDate`，`RFC3339`等。例如：

```hugo
{{ $layout := "2006-01-02 15:04:05" }}
{{ $input := time.Now }}
{{ $result := time.Format $layout $input }} {{/* result = "2023-11-27 16:06:22" */}}
```

##### `Now`: 这个函数可以返回当前的本地时间，是一个time.Time类型的值。例如：

```hugo
{{ $result := time.Now }} {{/* result = 2023-11-27 16:06:22 +0800 +08 */}}
```

##### `ParseDuration`: 这个函数可以将一个字符串表示的持续时间值转换为一个time.Duration类型的值。字符串必须符合以下格式：`[number][unit]`，其中`number`是一个十进制数，`unit`是一个时间单位，可以是以下之一：`ns`，`us`，`ms`，`s`，`m`，`h`。例如：

```hugo
{{ $duration := "1h30m" }}
{{ $result := time.ParseDuration $duration }} {{/* result = 1h30m0s */}}
```
##### `Layout string`:格式化字符参照

| 时间 | 内容 |
| --- | --- |
| 年 | "2006" "06" |
| 月 | "Jan" "January" "01" "1" |
| 星期几 | "Mon" "Monday" |
| 月的第几天 | "2" "_2" "02" |
| 年的第几天 | "__2" "002" |
| 几点 | "15" "3" "03" |
| 几分 | "4" "04" |
| 几秒 | "5" "05" |
| 上午还是下午 | "PM" |
| 时区 | "-0700" "-07:00" "-07" "-070000" "-07:00:00" |

# Page:页面

##### `Aliases:**
当前页面的别名。

```go
{{ .Aliases }}
```

##### `AllTranslations:**
当前页面的所有翻译版本。

```go
{{ .AllTranslations }}
```

##### `AlternativeOutputFormats:**
当前页面的替代输出格式。

```go
{{ .AlternativeOutputFormats }}
```

##### `Ancestors:**
当前页面的祖先页面。

```go
{{ .Ancestors }}
```

##### `BundleType:**
内容包的类型。

```go
{{ .BundleType }}
```

##### `CodeOwners:**
从仓库根目录获取 CODEOWNERS 文件。

```go
{{ .CodeOwners }}
```

##### `Content:**
当前页面的原始内容。

```go
{{ .Content }}
```

##### `CurrentSection:**
当前页面所属的部分。

```go
{{ .CurrentSection }}
```

##### `Data:**
从 `data` 目录获取数据文件。

```go
{{ .Data }}
```

##### `Date:**
当前页面的日期。

```go
{{ .Date }}
```

##### `Description:**
当前页面的描述。

```go
{{ .Description }}
```

##### `Draft:**
检查当前页面是否是草稿。

```go
{{ .Draft }}
```

##### `Eq:**
检查两个值是否相等。

```go
{{ if eq .Variable1 .Variable2 }}

{{ end }}
```

##### `ExpiryDate:**当前页面的过期日期。

```go
{{ .ExpiryDate }}
```

##### `File:**当前内容文件的信息。

```go
{{ .File }}
```

##### `FirstSection:**当前页面所属的第一个部分。

```go
{{ .FirstSection }}
```

##### `Fragments:**当前内容的片段。

```go
{{ .Fragments }}
```

##### `FuzzyWordCount:**当前页面的模糊字数统计。

```go
{{ .FuzzyWordCount }}
```

##### `GetPage:**获取指定页面。

```go
{{ getPage "path/to/page" }}
```

##### `GetTerms:**获取给定分类法的术语。

```go
{{ getTerms "categories" }}
```

##### `GitInfo:**获取有关 Git 仓库的信息。

```go
{{ .GitInfo }}
```

##### `HasMenuCurrent:**检查菜单项是否当前选定。

```go
{{ if .HasMenuCurrent }}
  <!-- do something -->
{{ end }}
```

##### `HasShortcode:**检查当前内容是否包含指定的 shortcode。

```go
{{ if .HasShortcode "shortcodeName" }}
  <!-- do something -->
{{ end }}
```

##### `HeadingsFiltered:**返回过滤后的当前内容标题。

```go
{{ .HeadingsFiltered "h2|h3" }}
```

##### `InSection:**检查当前内容是否在指定部分中。

```go
{{ inSection "sectionName" }}
```

##### `IsAncestor:**检查页面是否为指定页面的祖先。

```go
{{ .IsAncestor "path/to/ancestor" }}
```

##### `IsDescendant:**检查页面是否为指定页面的后代。

```go
{{ .IsDescendant "path/to/descendant" }}
```

##### `IsHome:**检查当前内容是否为首页。

```go
{{ .IsHome }}
```

##### `IsMenuCurrent:**检查菜单项是否是当前页面。

```go
{{ .IsMenuCurrent }}
```

##### `IsNode:**检查变量是否为节点。

```go
{{ .IsNode .Variable }}
```

##### `IsPage:**检查变量是否为页面。

```go
{{ .IsPage .Variable }}
```

##### `IsSection:**检查变量是否为部分。

```go
{{ .IsSection .Variable }}
```

##### `IsTranslated:**检查当前页面是否有翻译。

```go
{{ .IsTranslated }}
```

##### `Keywords:**当前页面的关键字。

```go
{{ .Keywords }}
```

##### `Kind:**当前内容的种类（例如，"page" 或 "section"）。

```go
{{ .Kind }}
```

##### `Language:**当前页面的语言。

```go
{{ .Language }}
```

##### `Lastmod:**当前页面的最后修改时间。

```go
{{ .Lastmod }}
```

##### `Layout:**当前内容的布局。

```go
{{ .Layout }}
```

##### `Len:**返回切片、映射或字符串的长度。

```go
{{ len .Variable }}
```

##### `LinkTitle:**当前页面的链接标题。

```go
{{ .LinkTitle }}
```

##### `Next:**返回下一个同级页面。

```go
{{ .Next }}
```

##### `NextInSection:**返回同一部分中的下一个页面。

```go
{{ .NextInSection }}
```

##### `OutputFormats:**当前页面的输出