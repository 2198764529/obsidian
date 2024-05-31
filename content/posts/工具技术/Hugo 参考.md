---
title: Hugo 参考
id: a01b727778
datetimeCreate: 2023-11-27 11:04:45
datetimeUpdate: 2024-05-31 17:42:56
---

## 变量
### .Site
```
#️⃣ .AllPages: 所有页面的数组。

#️⃣ .BaseURL: 站点的基本 URL。

#️⃣ .BuildDrafts: 一个布尔值（默认为 false），指示是否构建草稿。

#️⃣ .Config: 站点的配置。

#️⃣ .Copyright: 网站的版权信息。

#️⃣ .Data: 网站的自定义数据。

#️⃣ .DisqusShortname: Disqus 短代码的 shortname。

#️⃣ .GetPage: 获取指定路径的页面。

#️⃣ .GoogleAnalytics: Google Analytics 的跟踪代码。

#️⃣ .Home: 网站的首页信息。

#️⃣ .IsDevelopment: 当前是否处于开发模式。

#️⃣ .IsMultiLingual: 网站是否支持多语言。

#️⃣ .IsServer: 当前是否处于服务器模式。

#️⃣ .Language: 当前网站的语言。

#️⃣ .LanguagePrefix: 语言前缀。

#️⃣ .Languages: 网站支持的语言列表。

#️⃣ .LastChange: 最近一次修改的日期。

#️⃣ .Lastmod: 最后修改的日期。

#️⃣ .MainSections: 主要部分列表。

#️⃣ .Menus: 网站的菜单列表。

#️⃣ .Pages: 网站的所有页面集合。

#️⃣ .Param: 获取指定参数的值。

#️⃣ .Params: 网站的所有参数。

#️⃣ .RegularPages: 常规页面的集合。

#️⃣ .Sections: 网站的所有部分。

#️⃣ .Sites: Hugo 多站点配置。

#️⃣ .Taxonomies: 网站的所有分类和标签信息。

#️⃣ .Title: 网站的标题。

```

### .Page
```
#️⃣ .Aliases: 页面的别名。

#️⃣ .AllTranslations: 页面的所有翻译版本。

#️⃣ .AlternativeOutputFormats: 页面的所有替代输出格式。

#️⃣ .Ancestors: 页面的祖先页面。

#️⃣ .BundleType: 页面的捆绑类型。

#️⃣ .CodeOwners: 页面的代码所有者。

#️⃣ .CurrentSection: 页面所在的当前部分。

#️⃣ .Data: 页面的数据。

#️⃣ .Date: 页面的日期。

#️⃣ .Description: 页面的描述。

#️⃣ .Draft: 页面是否为草稿。

#️⃣ .Eq: 页面是否等于指定的条件。

#️⃣ .ExpiryDate: 页面的到期日期。

#️⃣ .File: 页面的文件。

#️⃣ .FirstSection: 页面的第一个部分。

#️⃣ .Fragments: 页面的片段。

#️⃣ .FuzzyWordCount: 页面的模糊字数统计。

#️⃣ .GetPage: 获取指定路径的页面。

#️⃣ .GetTerms: 获取页面上指定参数的术语。

#️⃣ .GitInfo: 页面的 Git 信息。

#️⃣ .HasMenuCurrent: 页面是否具有当前菜单。

#️⃣ .HasShortcode: 页面是否包含指定的短代码。

#️⃣ .HeadingsFiltered: 过滤后的页面标题。

#️⃣ .InSection: 页面是否在指定的部分中。

#️⃣ .IsAncestor: 页面是否为指定页面的祖先。

#️⃣ .IsDescendant: 页面是否为指定页面的后代。

#️⃣ .IsHome: 页面是否为首页。

#️⃣ .IsMenuCurrent: 页面是否为当前菜单。

#️⃣ .IsNode: 页面是否为节点。

#️⃣ .IsPage: 页面是否为页面。

#️⃣ .IsSection: 页面是否为部分。

#️⃣ .IsTranslated: 页面是否已翻译。

#️⃣ .Keywords: 页面的关键词。

#️⃣ .Kind: 页面的类型。

#️⃣ .Language: 页面的语言。

#️⃣ .Lastmod: 页面的最后修改日期。

#️⃣ .Layout: 页面的布局。

#️⃣ .Len: 页面的长度。

#️⃣ .LinkTitle: 页面的链接标题。

#️⃣ .Next: 页面的下一个页面。

#️⃣ .NextInSection: 页面的下一个部分内的页面。

#️⃣ .OutputFormats: 页面的所有输出格式。

#️⃣ .Page: 页面自身。

#️⃣ .Pages: 页面的集合。

#️⃣ .Paginate: 分页。

#️⃣ .Paginator: 分页器。

#️⃣ .Param: 页面的参数。

#️⃣ .Params: 页面的所有参数。

#️⃣ .Parent: 页面的父级页面。

#️⃣ .Path: 页面的路径。

#️⃣ .Permalink: 页面的永久链接。

#️⃣ .Plain: 页面的纯文本内容。

#️⃣ .PlainWords: 页面的纯文本内容（按单词切割）。

#️⃣ .Prev: 页面的上一个页面。

#️⃣ .PrevInSection: 页面的前一个部分内的页面。

#️⃣ .PublishDate: 页面的发布日期。

#️⃣ .RawContent: 页面的原始内容。

#️⃣ .ReadingTime: 页面的阅读时间。

#️⃣ .Ref: 页面的引用。

#️⃣ .RegularPages: 页面的常规页面集合。

#️⃣ .RegularPagesRecursive: 页面的递归常规页面集合。

#️⃣ .RelPermalink: 页面的相对永久链接。

#️⃣ .RelRef: 页面的相对引用链接。

#️⃣ .Render: 页面的渲染。

#️⃣ .RenderShortcodes: 渲染短代码。

#️⃣ .RenderString: 渲染字符串。

#️⃣ .Resources: 页面的资源。

#️⃣ .Scratch: 页面的 Scratch。

#️⃣ .Section: 页面所属的部分。

#️⃣ .Sections: 页面的所有部分。

```

### Duration
```
#️⃣ .Abs(): 返回持续时间的绝对值。

#️⃣ .Hours(): 返回持续时间的小时部分。

#️⃣ .Microseconds(): 返回持续时间的微秒部分。

#️⃣ .Milliseconds(): 返回持续时间的毫秒部分。

#️⃣ .Minutes(): 返回持续时间的分钟部分。

#️⃣ .Nanoseconds(): 返回持续时间的纳秒部分。

#️⃣ .Round(): 返回最接近的持续时间，以指定的单位进行四舍五入。

#️⃣ .Seconds(): 返回持续时间的秒部分。

#️⃣ .Truncate(): 返回指定单位的持续时间的整数部分。

```

### .Pages
```
#️⃣ .ByDate(): 根据日期对页面进行排序。

#️⃣ .ByExpiryDate(): 根据到期日期对页面进行排序。

#️⃣ .ByLanguage(): 根据语言对页面进行排序。

#️⃣ .ByLastmod(): 根据最后修改日期对页面进行排序。

#️⃣ .ByLength(): 根据页面内容长度对页面进行排序。

#️⃣ .ByLinkTitle(): 根据链接标题对页面进行排序。

#️⃣ .ByParam(): 根据指定参数对页面进行排序。

#️⃣ .ByPublishDate(): 根据发布日期对页面进行排序。

#️⃣ .ByTitle(): 根据标题对页面进行排序。

#️⃣ .ByWeight(): 根据权重对页面进行排序。

#️⃣ .GroupBy(): 根据指定的关键字对页面进行分组。

#️⃣ .GroupByDate(): 根据日期对页面进行分组。

#️⃣ .GroupByExpiryDate(): 根据到期日期对页面进行分组。

#️⃣ .GroupByLastmod(): 根据最后修改日期对页面进行分组。

#️⃣ .GroupByParam(): 根据指定参数对页面进行分组。

#️⃣ .GroupByParamDate(): 根据指定参数的日期对页面进行分组。

#️⃣ .GroupByPublishDate(): 根据发布日期对页面进行分组。

#️⃣ .Len(): 返回页面集合的长度。

#️⃣ .Limit(): 限制页面集合的长度。

#️⃣ .Next(): 返回页面集合中指定页面的下一个页面。

#️⃣ .Prev(): 返回页面集合中指定页面的上一个页面。

#️⃣ .Related(): 返回页面集合中指定页面的相关页面。

#️⃣ .Reverse(): 对页面集合进行逆序排序。

```

### Time
```
#️⃣ .Add(): 将持续时间添加到时间上。

#️⃣ .AddDate(): 将指定的年、月、日添加到时间上。

#️⃣ .After(): 检查时间是否在另一个时间之后。

#️⃣ .Before(): 检查时间是否在另一个时间之前。

#️⃣ .Day(): 返回时间的日部分。

#️⃣ .Equal(): 检查两个时间是否相等。

#️⃣ .Format(): 格式化时间为指定的字符串格式。

#️⃣ .Hour(): 返回时间的小时部分。

#️⃣ .IsDST(): 检查时间是否处于夏令时。

#️⃣ .IsZero(): 检查时间是否为零值。

#️⃣ .Local(): 将时间转换为本地时区。

#️⃣ .Minute(): 返回时间的分钟部分。

#️⃣ .Month(): 返回时间的月份部分。

#️⃣ .Nanosecond(): 返回时间的纳秒部分。

#️⃣ .Round(): 四舍五入时间到指定的时间单位。

#️⃣ .Second(): 返回时间的秒部分。

#️⃣ .Sub(): 计算两个时间之间的持续时间。

#️⃣ .Truncate(): 将时间截断到指定的时间单位。

#️⃣ .Unix(): 返回时间的 UNIX 时间戳。

#️⃣ .UnixMicro(): 返回时间的微秒精度的 UNIX 时间戳。

#️⃣ .UnixMilli(): 返回时间的毫秒精度的 UNIX 时间戳。

#️⃣ .UnixNano(): 返回时间的纳秒精度的 UNIX 时间戳。

#️⃣ .UTC(): 将时间转换为协调世界时（UTC）。

#️⃣ .Weekday(): 返回时间所在的星期几。

#️⃣ .Year(): 返回时间的年份部分。

#️⃣ .YearDay(): 返回时间在年份中的天数。

```

## 方法
### math
```
#️⃣ math.Abs: 返回数字的绝对值 
 $absResult := math.Abs -10.5 

#️⃣ math.Add: 将两个数字相加 
 $addResult := math.Add 5 3 

#️⃣ math.Ceil: 返回不小于 x 的最小整数 
 $ceilResult := math.Ceil 4.2 

#️⃣ math.Counter: 返回一个计数器函数 
 $counter := math.Counter 

#️⃣ math.Div: 将两个数字相除 
 $divResult := math.Div 10 2 

#️⃣ math.Floor: 返回不大于 x 的最大整数 
 $floorResult := math.Floor 4.8 

#️⃣ math.Log: 返回以 e 为底的对数 
 $logResult := math.Log math.E 

#️⃣ math.Max: 返回一组数字中的最大值 
 $maxResult := math.Max 10 20 30 

#️⃣ math.Min: 返回一组数字中的最小值 
 $minResult := math.Min 10 20 30 

#️⃣ math.Mod: 返回两个数字相除的余数 
 $modResult := math.Mod 10 3 

#️⃣ math.ModBool: 返回两个数字相除的余数是否为零 
 $modBoolResult := math.ModBool 10 5 

#️⃣ math.Mul: 将两个数字相乘 
 $mulResult := math.Mul 5 3 

#️⃣ math.Pow: 返回 x 的 y 次方 
 $powResult := math.Pow 2 3 

#️⃣ math.Product: 返回一组数字的乘积 
 $productResult := math.Product 2 3 4 

#️⃣ math.Rand: 返回一个随机数 
 $randResult := math.Rand 

#️⃣ math.Round: 返回浮点数的四舍五入值 
 $roundResult := math.Round 4.5 

#️⃣ math.Sqrt: 返回数字的平方根 
 $sqrtResult := math.Sqrt 25 

#️⃣ math.Sub: 返回两个数字的差 
 $subResult := math.Sub 10 5 

#️⃣ math.Sum: 返回一组数字的总和 
 $sumResult := math.Sum 1 2 3 4 5 

```

### .Page
```

```