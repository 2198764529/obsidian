---
title: python 方法参考
id: fd07219a87
datetimeCreate: 2023-11-27 16:45:25
datetimeUpdate: 2023-11-27 17:59:19
---
# Number(数字)

#### **ceil(x)：** 返回不小于 x 的最小整数

```python
import math

result = math.ceil(4.2)
# 返回 5
```

#### **floor(x)：** 返回不大于 x 的最大整数

```python
import math

result = math.floor(4.8)
# 返回 4
```

#### **sqrt(x)：** 返回 x 的平方根

```python
import math

result = math.sqrt(25)
# 返回 5.0
```

#### **pow(x, y)：** 返回 x 的 y 次方

```python
import math

result = math.pow(2, 3)
# 返回 8.0
```

#### **exp(x)：** 返回 e 的 x 次方

```python
import math

result = math.exp(2)
# 返回 7.389...
```

#### **log(x)：** 返回 x 的自然对数

```python
import math

result = math.log(10)
# 返回 2.302...
```

#### **log10(x)：** 返回 x 的以 10 为底的对数

```python
import math

result = math.log10(100)
# 返回 2.0
```

#### **sin(x)：** 返回 x 弧度的正弦值

```python
import math

result = math.sin(math.pi/2)
# 返回 1.0
```

#### **cos(x)：** 返回 x 弧度的余弦值

```python
import math

result = math.cos(0)
# 返回 1.0
```

#### **tan(x)：** 返回 x 弧度的正切值

```python
import math

result = math.tan(math.pi/4)
# 返回 1.0
```

#### **random.random()：** 返回 [0.0, 1.0) 范围内的随机浮点数

```python
import random

result = random.random()
# 返回 0.523...
```

#### **random.randint(a, b)：** 返回 [a, b] 范围内的随机整数

```python
import random

result = random.randint(1, 10)
# 返回 5
```

#### **random.choice(seq)：** 从序列中随机选择一个元素

```python
import random

result = random.choice(['apple', 'banana', 'orange'])
# 返回 'banana'
```

#### **random.shuffle(seq)：** 随机打乱序列中的元素

```python
import random

mylist = [1, 2, 3, 4, 5]
random.shuffle(mylist)
# mylist 现在被随机打乱
```

#### **random.sample(population, k)：** 从总体中选择 k 个不重复的元素

```python
import random

result = random.sample([1, 2, 3, 4, 5], 3)
# 返回 [2, 5, 1]
```

#### **sin(x)：** 返回 x 弧度的正弦值

```python
import math

result = math.sin(math.pi/2)
# 返回 1.0
```

#### **cos(x)：** 返回 x 弧度的余弦值

```python
import math

result = math.cos(0)
# 返回 1.0
```

#### **tan(x)：** 返回 x 弧度的正切值

```python
import math

result = math.tan(math.pi/4)
# 返回 1.0
```

#### **asin(x)：** 返回 x 的反正弦值

```python
import math

result = math.asin(1)
# 返回 pi/2
```

#### **acos(x)：** 返回 x 的反余弦值

```python
import math

result = math.acos(0)
# 返回 pi/2
```

#### **atan(x)：** 返回 x 的反正切值

```python
import math

result = math.atan(1)
# 返回 pi/4
```

#### **pi：** 圆周率

```python
import math

result = math.pi
# 返回 3.141592653589793
```

#### **e：** 自然对数的底

```python
import math

result = math.e
# 返回 2.718281828459045

# String(字符串)
#### **capitalize()：** 将字符串的第一个字符大写

```python
result = 'hello world'.capitalize()
# 返回 'Hello world'
```

#### **casefold()：** 将字符串中所有字符转换为小写，并处理特殊字符

```python
result = 'Hello World'.casefold()
# 返回 'hello world'
```

#### **center(width[, fillchar])：** 返回一个指定宽度的居中字符串，可指定填充字符

```python
result = 'hello'.center(10)
# 返回 '  hello   '
```

#### **count(sub[, start[, end]])：** 返回字符串中子字符串出现的次数

```python
result = 'hello hello'.count('hello')
# 返回 2
```

#### **encode([encoding[, errors]])：** 返回字符串的编码版本

```python
result = 'hello'.encode('utf-8')
# 返回 b'hello'
```

#### **endswith(suffix[, start[, end]])：** 检查字符串是否以指定后缀结束

```python
result = 'hello world'.endswith('world')
# 返回 True
```

#### **expandtabs([tabsize])：** 将字符串中的制表符扩展为空格

```python
result = 'hello\tworld'.expandtabs(4)
# 返回 'hello   world'
```

#### **find(sub[, start[, end]])：** 查找子字符串第一次出现的位置，未找到返回 -1

```python
result = 'hello world'.find('world')
# 返回 6
```

#### **format(*args, **kwargs)：** 格式化字符串

```python
result = 'My name is {} and I\'m {} years old'.format('Alice', 30)
# 返回 'My name is Alice and I'm 30 years old'
```

#### **format_map(mapping)：** 使用字典或其他映射来格式化字符串

```python
result = 'My name is {name} and I\'m {age} years old'.format_map({'name': 'Alice', 'age': 30})
# 返回 'My name is Alice and I'm 30 years old'
```

#### **index(sub[, start[, end]])：** 查找子字符串第一次出现的位置，未找到引发 ValueError

```python
result = 'hello world'.index('world')
# 返回 6
```

#### **isalnum()：** 检查字符串是否由字母和数字组成

```python
result = 'hello123'.isalnum()
# 返回 True
```

#### **isalpha()：** 检查字符串是否由字母组成

```python
result = 'hello'.isalpha()
# 返回 True
```

#### **isascii()：** 检查字符串是否仅包含 ASCII 字符

```python
result = 'hello'.isascii()
# 返回 True
```

#### **isdecimal()：** 检查字符串是否只包含十进制字符

```python
result = '12345'.isdecimal()
# 返回 True
```

#### **isdigit()：** 检查字符串是否只包含数字

```python
result = '12345'.isdigit()
# 返回 True
```

#### **isidentifier()：** 检查字符串是否是有效的标识符

```python
result = 'hello123'.isidentifier()
# 返回 False
```

#### **islower()：** 检查字符串是否都是小写字母

```python
result = 'hello'.islower()
# 返回 True
```

#### **isnumeric()：** 检查字符串是否只包含数字字符

```python
result = '12345'.isnumeric()
# 返回 True
```

#### **isprintable()：** 检查字符串是否是可打印的

```python
result = 'hello\nworld'.isprintable()
# 返回 False
```

#### **isspace()：** 检查字符串是否只包含空格字符

```python
result = '   '.isspace()
# 返回 True
```

#### **istitle()：** 检查字符串是否是标题化的（每个单词的首字母大写）

```python
result = 'Hello World'.istitle()
# 返回 True
```

#### **isupper()：** 检查字符串是否都是大写字母

```python
result = 'HELLO'.isupper()
# 返回 True
```

#### **join(iterable)：** 将可迭代对象的元素连接成字符串

```python


result = ','.join(['apple', 'banana', 'orange'])
# 返回 'apple,banana,orange'
```

#### **ljust(width[, fillchar])：** 返回一个指定宽度的左对齐字符串，可指定填充字符

```python
result = 'hello'.ljust(10)
# 返回 'hello     '
```

#### **lower()：** 将字符串转换为小写

```python
result = 'Hello World'.lower()
# 返回 'hello world'
```

#### **lstrip([chars])：** 去除字符串左边的指定字符，默认为空格

```python
result = '   hello'.lstrip()
# 返回 'hello'
```

#### **maketrans(x[, y[, z]])：** 创建字符映射转换表

```python
trans = str.maketrans('aeiou', '12345')
```

#### **partition(sep)：** 根据第一次出现的分隔符将字符串分成三部分

```python
result = 'hello world'.partition('o')
# 返回 ('hell', 'o', ' world')
```

#### **replace(old, new[, count])：** 将字符串中的指定子字符串替换为新字符串

```python
result = 'hello world'.replace('world', 'universe')
# 返回 'hello universe'
```

#### **rfind(sub[, start[, end]])：** 查找子字符串最后一次出现的位置，未找到返回 -1

```python
result = 'hello world'.rfind('o')
# 返回 7
```

#### **rindex(sub[, start[, end]])：** 查找子字符串最后一次出现的位置，未找到引发 ValueError

```python
result = 'hello world'.rindex('o')
# 返回 7
```

#### **rjust(width[, fillchar])：** 返回一个指定宽度的右对齐字符串，可指定填充字符

```python
result = 'hello'.rjust(10)
# 返回 '     hello'
```

#### **rpartition(sep)：** 根据最后一次出现的分隔符将字符串分成三部分

```python
result = 'hello world'.rpartition('o')
# 返回 ('hello w', 'o', 'rld')
```

#### **rsplit([sep[, maxsplit]])：** 从右边开始拆分字符串

```python
result = 'hello world'.rsplit(' ')
# 返回 ['hello', 'world']
```

#### **rstrip([chars])：** 去除字符串右边的指定字符，默认为空格

```python
result = 'hello   '.rstrip()
# 返回 'hello'
```

#### **split([sep[, maxsplit]])：** 拆分字符串

```python
result = 'hello world'.split(' ')
# 返回 ['hello', 'world']
```

#### **splitlines([keepends])：** 按行拆分字符串

```python
result = 'hello\nworld'.splitlines()
# 返回 ['hello', 'world']
```

#### **startswith(prefix[, start[, end]])：** 检查字符串是否以指定前缀开头

```python
result = 'hello world'.startswith('hello')
# 返回 True
```

#### **strip([chars])：** 去除字符串两边的指定字符，默认为空格

```python
result = '   hello   '.strip()
# 返回 'hello'
```

#### **swapcase()：** 将字符串中的大小写翻转

```python
result = 'Hello World'.swapcase()
# 返回 'hELLO wORLD'
```

#### **title()：** 将字符串转换为标题化的形式

```python
result = 'hello world'.title()
# 返回 'Hello World'
```

#### **upper()：** 将字符串转换为大写

```python
result = 'hello world'.upper()
# 返回 'HELLO WORLD'
```

#### **zfill(width)：** 返回一个指定宽度的右对齐字符串，前面填充0

```python
result = '42'.zfill(5)
# 返回 '00042'
```

# List(列表)

#### **len(list)：** 返回列表元素的个数

```python
result = len([1, 2, 3])
# 返回 3
```

#### **max(iterable, *[, key, default])：** 返回可迭代对象中最大的元素

```python
result = max([1, 3, 2])
# 返回 3
```

#### **min(iterable, *[, key, default])：** 返回可迭代对象中最小的元素

```python
result = min([1, 3, 2])
# 返回 1
```

#### **sum(iterable, /, start=0)：** 返回可迭代对象中所有元素的和

```python
result = sum([1, 2, 3])
# 返回 6
```

#### **sorted(iterable, *[, key, reverse])：** 返回一个排序后的列表

```python
result = sorted([3, 1, 2])
# 返回 [1, 2, 3]
```

#### **list(iterable)：** 将可迭代对象转换为列表

```python
result = list((1, 2, 3))
# 返回 [1, 2, 3]
```

#### **any(iterable)：** 如果可迭代对象中至少有一个元素为 True，则返回 True

```python
result = any([False, True, False])
# 返回 True
```

#### **all(iterable)：** 如果可迭代对象中所有元素都为 True，则返回 True

```python
result = all([True, True, True])
# 返回 True
```

#### **enumerate(iterable, start=0)：** 返回可迭代对象中元素的索引和值

```python
result = list(enumerate(['a', 'b', 'c']))
# 返回 [(0, 'a'), (1, 'b'), (2, 'c')]
```

#### **filter(function, iterable)：** 使用函数过滤可迭代对象中的元素

```python
result = list(filter(lambda x: x % 2 == 0, [1, 2, 3, 4]))
# 返回 [2, 4]
```

#### **map(function, iterable, ...)：** 将函数应用于可迭代对象中的每个元素

```python
result = list(map(lambda x: x * 2, [1, 2, 3]))
# 返回 [2, 4, 6]
```

#### **reversed(seq)：** 返回反转的可迭代对象

```python
result = list(reversed([1, 2, 3]))
# 返回 [3, 2, 1]
```

#### **zip(iter1, iter2, ...)：** 返回元组的迭代器，其中的元素来自各个可迭代对象

```python
result = list(zip([1, 2, 3], ['a', 'b', 'c']))
# 返回 [(1, 'a'), (2, 'b'), (3, 'c')]
```

#### **append(x)：** 在列表末尾添加元素

```python
mylist = [1, 2, 3]
mylist.append(4)
```

#### **extend(iterable)：** 将可迭代对象的元素追加到列表末尾

```python
mylist = [1, 2, 3]
mylist.extend([4, 5])
```

#### **insert(i, x)：** 在指定位置插入元素

```python
mylist = [1, 2, 3]
mylist.insert(1, 4)
```

#### **remove(x)：** 移除列表中第一个值为 x 的元素

```python
mylist = [1, 2, 3]
mylist.remove(2)
```

#### **pop([i])：** 移除并返回指定位置的元素，默认移除最后一个元素

```python
mylist = [1, 2, 3]
element = mylist.pop(1)
```

#### **clear()：** 移除列表中的所有元素

```python
mylist = [1, 2, 3]
mylist.clear()
```

#### **index(x[, start[, end]])：** 返回第一个值为 x 的元素的索引

```python
mylist = [1, 2, 3]
index = mylist.index(2)
```

#### **count(x)：** 返回值为 x 的元素在列表中出现的次数

```python
mylist = [1, 2, 2, 3]
count = mylist.count(2)
```

#### **sort(*[, key, reverse])：** 对列表进行排序

```python
mylist = [3, 1, 2]
mylist.sort()
```

#### **reverse()：** 反转列表中的元素

```python
mylist = [1, 2, 3]
mylist.reverse()
```

#### **copy()：** 返回列表的浅复制

```python
mylist = [1, 2, 3]
newlist = mylist.copy()
```
# Dict(字典)
#### **clear：** 移除字典中的所有元素

```python
mydict = {'a': 1, 'b': 2}
mydict.clear()
```

#### **copy：** 返回字典的浅复制

```python
mydict = {'a': 1, 'b': 2}
newdict = mydict.copy()
```

#### **fromkeys(seq[, value])：** 创建一个新字典，以序列中的元素作为键，值为 value（默认为 None）

```python
result = dict.fromkeys(['a', 'b'], 0)
# 返回 {'a': 0, 'b': 0}
```

#### **get(key[, default])：** 返回指定键的值，如果键不存在则返回默认值

```python
mydict = {'a': 1, 'b': 2}
result = mydict.get('a', 0)
# 返回 1
```

#### **items：** 返回字典中包含的所有键值对的视图

```python
mydict = {'a': 1, 'b': 2}
result = mydict.items()
# 返回 dict_items([('a', 1), ('b', 2)])
```

#### **keys：** 返回字典中所有键的视图

```python
mydict = {'a': 1, 'b': 2}
result = mydict.keys()
# 返回 dict_keys(['a', 'b'])
```

#### **values：** 返回字典中所有值的视图

```python
mydict = {'a': 1, 'b': 2}
result = mydict.values()
# 返回 dict_values([1, 2])
```

#### **pop(key[, default])：** 移除并返回指定键的值，如果键不存在则返回默认值

```python
mydict = {'a': 1, 'b': 2}
result = mydict.pop('a')
# 返回 1
```

#### **popitem：** 随机移除并返回字典中的一对键值对

```python
mydict = {'a': 1, 'b': 2}
result = mydict.popitem()
# 返回 ('a', 1)
```

#### **setdefault(key[, default])：** 返回指定键的值，如果键不存在则设置默认值

```python
mydict = {'a': 1, 'b': 2}
result = mydict.setdefault('c', 0)
# 返回 0
```

#### **update([other])：** 更新字典，将其他字典或键值对添加到该字典

```python
mydict = {'a': 1, 'b': 2}
mydict.update({'c': 3})
```
# Set(集合)
#### **add：** 向集合添加元素

```python
myset = {1, 2, 3}
myset.add(4)
```

#### **clear：** 移除集合中的所有元素

```python
myset = {1, 2, 3}
myset.clear()
```

#### **copy：** 返回集合的浅复制

```python
myset = {1, 2, 3}
newset = myset.copy()
```

#### **difference：** 返回与其他集合的差集

```python
myset = {1, 2, 3}
other_set = {2, 3, 4}
result = myset.difference(other_set)
```

#### **difference_update：** 移除与其他集合的相同元素

```python
myset = {1, 2, 3}
other_set = {2, 3, 4}
myset.difference_update(other_set)
```

#### **discard：** 移除集合中的指定元素，如果不存在则不报错

```python
myset = {1, 2, 3}
myset.discard(2)
```

#### **intersection：** 返回与其他集合的交集

```python
myset = {1, 2, 3}
other_set = {2, 3, 4}
result = myset.intersection(other_set)
```

#### **intersection_update：** 保留与其他集合的交集，移除其他元素

```python
myset = {1, 2, 3}
other_set = {2, 3, 4}
myset.intersection_update(other_set)
```

#### **isdisjoint：** 如果两个集合没有相同的元素，返回 True

```python
myset = {1, 2, 3}
other_set = {4, 5, 6}
result = myset.isdisjoint(other_set)
```

#### **issubset：** 如果集合是其他集合的子集，返回 True

```python
myset = {1, 2}
other_set = {1, 2, 3}
result = myset.issubset(other_set)
```

#### **issuperset：** 如果集合是其他集合的超集，返回 True

```python
myset = {1, 2, 3}
other_set = {1, 2}
result = myset.issuperset(other_set)
```

#### **pop：** 移除并返回集合中的一个任意元素，如果集合为空则报错

```python
myset = {1, 2, 3}
element = myset.pop()
```

#### **remove：** 移除集合中的指定元素，如果不存在则报错

```python
myset = {1, 2, 3}
myset.remove(2)
```

#### **symmetric_difference：** 返回与其他集合的对称差集

```python
myset = {1, 2, 3}
other_set = {2, 3, 4}
result = myset.symmetric_difference(other_set)
```

#### **symmetric_difference_update：** 更新集合为与其他集合的对称差集

```python
myset = {1, 2, 3}
other_set = {2, 3, 4}
myset.symmetric_difference_update(other_set)
```

#### **union：** 返回与其他集合的并集

```python
myset = {1, 2, 3}
other_set = {3, 4, 5}
result = myset.union(other_set)
```

#### **update：** 更新集合为与其他集合的并集

```python
myset = {1, 2, 3}
other_set = {3, 4, 5}
myset.update(other_set)
```

# File(文件)
以下是 Python 中与文件 (File) 相关的方法：

#### **open(file, mode='r', buffering=-1, encoding=None, errors=None, newline=None, closefd=True, opener=None)：** 打开文件并返回文件对象

```python
file = open('example.txt', 'r')
# 打开名为 'example.txt' 的文件以供读取
```

#### **file.read(size=-1)：** 读取文件中的指定字节数或全部内容

```python
content = file.read()
# 读取整个文件内容
```

#### **file.readline(size=-1)：** 读取文件中的一行内容

```python
line = file.readline()
# 读取文件的一行
```

#### **file.readlines(hint=-1)：** 读取文件中的所有行并返回列表

```python
lines = file.readlines()
# 读取文件的所有行并返回列表
```

#### **file.write(string)：** 将字符串写入文件

```python
file.write('Hello, World!')
# 将字符串写入文件
```

#### **file.writelines(lines)：** 将字符串列表写入文件

```python
lines = ['Line 1\n', 'Line 2\n', 'Line 3\n']
file.writelines(lines)
# 将字符串列表写入文件
```

#### **file.flush()：** 刷新文件缓冲区

```python
file.flush()
# 刷新文件缓冲区
```

#### **file.close()：** 关闭文件

```python
file.close()
# 关闭文件
```

#### **file.seek(offset, whence=0)：** 移动文件指针到指定位置

```python
file.seek(0)
# 移动文件指针到文件开头
```

#### **file.tell()：** 返回文件指针当前位置

```python
position = file.tell()
# 返回文件指针当前位置
```

#### **file.truncate(size=None)：** 截断文件到指定大小

```python
file.truncate(10)
# 将文件截断到 10 个字节
```

#### **os.path.exists(path)：** 检查文件或目录是否存在

```python
import os

exists = os.path.exists('example.txt')
# 检查文件是否存在
```

#### **os.path.isfile(path)：** 检查路径是否为文件

```python
import os

is_file = os.path.isfile('example.txt')
# 检查路径是否为文件
```

#### **os.path.isdir(path)：** 检查路径是否为目录

```python
import os

is_directory = os.path.isdir('my_folder')
# 检查路径是否为目录
```

#### **os.path.getsize(path)：** 获取文件大小

```python
import os

size = os.path.getsize('example.txt')
# 获取文件大小
```

这些方法用于处理文件的打开、读取、写入、关闭等操作，同时也包括了一些通过 `os` 模块检查文件状态的方法。

# OS(系统)
以下是 Python 3 中与文件和目录操作相关的一些常用的 `os` 模块方法：

#### **os.getcwd()：** 获取当前工作目录

```python
import os

current_directory = os.getcwd()
# 获取当前工作目录
```

#### **os.chdir(path)：** 修改当前工作目录

```python
import os

os.chdir('/path/to/directory')
# 将当前工作目录切换到指定路径
```

#### **os.listdir(path='.')：** 返回指定目录下的所有文件和目录列表

```python
import os

contents = os.listdir('/path/to/directory')
# 获取指定目录下的所有文件和目录列表
```

#### **os.mkdir(path, mode=0o777, *, dir_fd=None)：** 创建新目录

```python
import os

os.mkdir('/path/to/new_directory')
# 在指定路径下创建新目录
```

#### **os.makedirs(name, mode=0o777, exist_ok=False)：** 递归地创建新目录

```python
import os

os.makedirs('/path/to/new/directory', exist_ok=True)
# 递归地在指定路径下创建新目录，如果目录已存在且 exist_ok 为 True，则不会引发异常
```

#### **os.rmdir(path, *, dir_fd=None)：** 删除目录

```python
import os

os.rmdir('/path/to/directory_to_remove')
# 删除指定目录
```

#### **os.removedirs(path)：** 递归地删除目录

```python
import os

os.removedirs('/path/to/directory_to_remove')
# 递归地删除指定目录及其上级目录（如果为空）
```

#### **os.remove(path, *, dir_fd=None)：** 删除文件

```python
import os

os.remove('/path/to/file_to_remove')
# 删除指定文件
```

#### **os.rename(src, dst, *, src_dir_fd=None, dst_dir_fd=None)：** 重命名文件或目录

```python
import os

os.rename('/path/to/old_name', '/path/to/new_name')
# 重命名文件或目录
```

#### **os.path.exists(path)：** 检查文件或目录是否存在

```python
import os

exists = os.path.exists('/path/to/file_or_directory')
# 检查文件或目录是否存在
```

#### **os.path.isfile(path)：** 检查路径是否为文件

```python
import os

is_file = os.path.isfile('/path/to/file')
# 检查路径是否为文件
```

#### **os.path.isdir(path)：** 检查路径是否为目录

```python
import os

is_directory = os.path.isdir('/path/to/directory')
# 检查路径是否为目录
```

#### **os.path.join(path1, path2, ...)：** 拼接路径

```python
import os

full_path = os.path.join('/path/to', 'file_or_directory')
# 拼接路径，得到 '/path/to/file_or_directory'
```

#### **os.path.abspath(path)：** 获取绝对路径

```python
import os

absolute_path = os.path.abspath('relative_path')
# 获取相对路径对应的绝对路径
```

# Datetime(日期和时间)
#### **now()：** 获取当前日期和时间

```python
from datetime import datetime

now = datetime.now()
```

#### **strptime(date_string, format)：** 将字符串转换为日期时间对象

```python
from datetime import datetime

date_str = '2023-01-01'
date_format = '%Y-%m-%d'
date_obj = datetime.strptime(date_str, date_format)
```

#### **strftime(format)：** 将日期时间对象格式化为字符串

```python
formatted_date = date_obj.strftime('%Y-%m-%d %H:%M:%S')
```

#### **date()：** 获取日期部分

```python
date_part = date_obj.date()
```

#### **time()：** 获取时间部分

```python
time_part = date_obj.time()
```

#### **year：** 获取年份

```python
year = date_obj.year
```

#### **month：** 获取月份

```python
month = date_obj.month
```

#### **day：** 获取日期

```python
day = date_obj.day
```

#### **hour：** 获取小时

```python
hour = date_obj.hour
```

#### **minute：** 获取分钟

```python
minute = date_obj.minute
```

#### **second：** 获取秒数

```python
second = date_obj.second
```

#### **timestamp()：** 将日期时间对象转换为 POSIX 时间戳

```python
timestamp = date_obj.timestamp()
```

#### **fromtimestamp(timestamp)：** 将 POSIX 时间戳转换为日期时间对象

```python
from_timestamp = datetime.fromtimestamp(timestamp)
```

#### **timedelta(days, seconds, microseconds)：** 表示两个日期时间对象之间的差异

```python
difference = date_obj1 - date_obj2
```

# JSON

#### **dumps(obj, indent=None, separators=None, default=None, sort_keys=False)：** 将 Python 对象转换为 JSON 字符串

```python
import json

data = {'name': 'John', 'age': 30, 'city': 'New York'}
json_str = json.dumps(data, indent=2, sort_keys=True)
```

#### **loads(s, object_hook=None, parse_float=None, parse_int=None, parse_constant=None, object_pairs_hook=None)：** 将 JSON 字符串转换为 Python 对象

```python
import json

json_str = '{"name": "John", "age": 30, "city": "New York"}'
python_obj = json.loads(json_str)
```

#### **dump(obj, fp, *, skipkeys=False, ensure_ascii=True, check_circular=True, allow_nan=True, cls=None, indent=None, separators=None, default=None, sort_keys=False, **kw)：** 将 Python 对象写入 JSON 文件

```python
import json

data = {'name': 'John', 'age': 30, 'city': 'New York'}
with open('data.json', 'w') as json_file:
    json.dump(data, json_file, indent=2, sort_keys=True)
```

#### **load(fp, *, cls=None, object_hook=None, parse_float=None, parse_int=None, parse_constant=None, object_pairs_hook=None, **kw)：** 从 JSON 文件中读取数据并返回 Python 对象

```python
import json

with open('data.json', 'r') as json_file:
    python_obj = json.load(json_file)
```

#### **JSONEncoder.default(o)：** JSON 编码器的默认方法，用于处理不可序列化的对象

```python
class MyEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, MyCustomClass):
            return o.__dict__
        return super().default(o)

data = {'name': 'John', 'age': 30, 'custom_obj': MyCustomClass()}
json_str = json.dumps(data, cls=MyEncoder)
```

#### **JSONDecoder.object_hook(d)：** JSON 解码器的默认方法，用于处理对象字典

```python
class MyDecoder(json.JSONDecoder):
    def object_hook(self, d):
        if 'custom_obj' in d:
            return MyCustomClass(**d['custom_obj'])
        return d

json_str = '{"name": "John", "age": 30, "custom_obj": {"property1": "value1", "property2": "value2"}}'
python_obj = json.loads(json_str, cls=MyDecoder)
```

# Time

#### **time()：** 返回当前时间的时间戳（1970纪元后经过的浮点秒数）

```python
import time

timestamp = time.time()
```

#### **sleep(secs)：** 推迟调用线程的运行，secs指秒数

```python
import time

print("Start")
time.sleep(2)  # 暂停2秒
print("End")
```

#### **localtime([secs])：** 将秒数转换为表示当地时间的 struct_time，secs为可选参数，默认为当前时间戳

```python
import time

local_time = time.localtime()
```

#### **strftime(format, t)：** 格式化表示时间的字符串，format为格式化字符串，t为可选参数，默认为当前时间

```python
import time

formatted_time = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())
```

#### **strptime(string, format)：** 将格式化字符串转换为 struct_time

```python
import time

time_string = "2023-01-01 12:00:00"
structured_time = time.strptime(time_string, "%Y-%m-%d %H:%M:%S")
```

#### **mktime(t)：** 将 struct_time 转换为秒数

```python
import time

structured_time = time.localtime()
timestamp = time.mktime(structured_time)
```

#### **clock()：** 返回自程序开始以来的CPU时间，包含了睡眠时间

```python
import time

start_time = time.clock()
# 执行一些任务
end_time = time.clock()
elapsed_time = end_time - start_time
```

#### **process_time()：** 返回当前进程的系统和用户CPU时间的总和

```python
import time

start_time = time.process_time()
# 执行一些任务
end_time = time.process_time()
elapsed_time = end_time - start_time
```