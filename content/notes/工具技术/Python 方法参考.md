---
title: python 方法参考
id: fd07219a87
datetimeCreate: 2023-11-27 16:45:25
datetimeUpdate: 2024-05-31 15:34:52
---
以下内容由 ChatGPT 生成, 仅供学习参考
### 目录
- 文件处理（`os`、`io`）
- 网络编程（`socket`、`urllib`）
- 日期和时间处理（`datetime`、`time`）
- 数学运算（`math`、`random`）
- 字符串处理（`re`、`string`）
- 数据结构（`list`、`tuple`、`dict`、`set`）
- 对象编程（`class`、`object`）
- 错误处理（`try`、`except`）

### 文件处理（`os`、`io`）
```python
import os
import io

#️⃣ os 模块

# 获取和更改当前工作目录
current_directory = os.getcwd()  # 返回当前工作目录
os.chdir('/path/to/directory')  # 改变当前工作目录

# 列出目录内容
contents = os.listdir('.')  # 列出当前目录中的所有文件和目录

# 创建和删除目录
os.mkdir('new_directory')  # 创建新目录
os.makedirs('parent/child_directory')  # 递归创建目录
os.rmdir('new_directory')  # 删除目录（仅当目录为空时）
os.removedirs('parent/child_directory')  # 递归删除目录

# 删除文件
os.remove('file.txt')  # 删除文件
os.unlink('file.txt')  # 删除文件，与 os.remove 功能相同

# 重命名文件或目录
os.rename('old_name.txt', 'new_name.txt')  # 重命名文件或目录
os.renames('old_directory', 'new_directory')  # 递归重命名文件或目录

# 文件和目录属性
exists = os.path.exists('path/to/file_or_directory')  # 检查文件或目录是否存在
is_directory = os.path.isdir('path/to/directory')  # 检查路径是否为目录
is_file = os.path.isfile('path/to/file')  # 检查路径是否为文件
size = os.path.getsize('path/to/file')  # 返回文件大小（字节数）
mod_time = os.path.getmtime('path/to/file')  # 返回文件的最后修改时间
abs_path = os.path.abspath('path/to/file')  # 返回绝对路径

# 获取文件路径信息
base_name = os.path.basename('/path/to/file')  # 返回文件名
dir_name = os.path.dirname('/path/to/file')  # 返回目录名
split_path = os.path.split('/path/to/file')  # 分割路径为 (目录, 文件名)
split_ext = os.path.splitext('/path/to/file.txt')  # 分割路径为 (文件名, 扩展名)

# 访问和修改文件权限
mode = os.stat('path/to/file').st_mode  # 返回文件权限
os.chmod('path/to/file', 0o777)  # 修改文件权限
os.chown('path/to/file', uid, gid)  # 修改文件拥有者

# 目录树遍历
for dirpath, dirnames, filenames in os.walk('.'):
    print(f'Found directory: {dirpath}')
    for file_name in filenames:
        print(file_name)  # 递归打印当前目录及其子目录中的所有文件

# 获取系统信息
user = os.getlogin()  # 返回当前登录用户名
os.environ  # 获取系统环境变量
cpu_count = os.cpu_count()  # 返回 CPU 核心数量
uname = os.uname()  # 返回操作系统信息
linesep = os.linesep  # 返回当前平台使用的行终止符
sep = os.sep  # 返回当前平台使用的路径分隔符
pathsep = os.pathsep  # 返回用于分割文件路径的字符
defpath = os.defpath  # 返回默认搜索路径
curdir = os.curdir  # 返回当前目录（'.'）
pardir = os.pardir  # 返回父目录（'..'）

# 运行系统命令
os.system('echo Hello, world!')  # 运行系统命令
output = os.popen('echo Hello, world!').read()  # 运行系统命令并获取输出

# 创建和管理进程
pid = os.fork()  # 创建子进程（Unix）
os.execvp('python', ['python', 'script.py'])  # 用新的程序替换当前进程
os._exit(0)  # 退出进程

# 信号处理
import signal
signal.signal(signal.SIGINT, signal.SIG_DFL)  # 捕捉和处理信号

# 文件描述符操作
fd = os.open('file.txt', os.O_RDONLY)  # 打开文件并返回文件描述符
os.read(fd, 100)  # 从文件描述符读取数据
os.write(fd, b'Hello, world!')  # 向文件描述符写入数据
os.close(fd)  # 关闭文件描述符

# 获取和设置文件偏移量
fd = os.open('file.txt', os.O_RDWR)
os.lseek(fd, 0, os.SEEK_SET)  # 设置文件偏移量
position = os.lseek(fd, 0, os.SEEK_CUR)  # 获取文件当前偏移量

# 创建和删除符号链接
os.symlink('source_file', 'link_name')  # 创建符号链接
os.readlink('link_name')  # 读取符号链接
os.unlink('link_name')  # 删除符号链接

# 创建和删除硬链接
os.link('source_file', 'link_name')  # 创建硬链接
os.unlink('link_name')  # 删除硬链接

# 获取文件状态
stat_info = os.stat('file.txt')  # 获取文件状态
stat_info.st_size  # 文件大小
stat_info.st_mtime  # 文件最后修改时间

# 获取文件系统编码
file_system_encoding = os.getfilesystemencoding()  # 返回文件系统编码

# 获取和设置当前进程的优先级
priority = os.getpriority(os.PRIO_PROCESS, os.getpid())  # 获取当前进程的优先级
os.setpriority(os.PRIO_PROCESS, os.getpid(), 10)  # 设置当前进程的优先级

# 获取当前进程和父进程 ID
pid = os.getpid()  # 返回当前进程 ID
ppid = os.getppid()  # 返回父进程 ID

# 获取当前用户 ID 和组 ID
uid = os.getuid()  # 返回当前用户 ID
gid = os.getgid()  # 返回当前组 ID

# 切换用户 ID 和组 ID
os.setuid(uid)  # 设置用户 ID
os.setgid(gid)  # 设置组 ID

# 获取当前工作目录的绝对路径
abs_path = os.path.abspath('.')  # 返回当前工作目录的绝对路径

# 创建命名管道
os.mkfifo('fifo_name')  # 创建命名管道

# 获取终端尺寸
rows, cols = os.get_terminal_size()  # 返回终端行数和列数

# 获取负载平均值
load1, load5, load15 = os.getloadavg()  # 返回系统负载平均值

# 判断文件是否为绝对路径
is_abs = os.path.isabs('/path/to/file')  # 判断是否为绝对路径

# 获取路径的真实路径
real_path = os.path.realpath('file.txt')  # 返回路径的真实路径

# 更改当前工作目录到用户的主目录
os.chdir(os.path.expanduser('~'))  # 更改当前工作目录到用户的主目录

# 获取文件或目录的绝对路径
abs_path = os.path.abspath('file.txt')  # 获取文件或目录的绝对路径

# 返回路径的规范化绝对路径
norm_path = os.path.normpath('/path/to//file')  # 返回路径的规范化绝对路径

# 返回路径的规范化绝对路径，并解析符号链接
real_path = os.path.realpath('/path/to/link')  # 返回路径的规范化绝对路径，并解析符号链接

# 获取文件创建时间
ctime = os.path.getctime('file.txt')  # 获取文件创建时间

# 获取文件最后访问时间
atime = os.path.getatime('file.txt')  # 获取文件最后访问时间

# 获取文件最后修改时间
mtime = os.path.getmtime('file.txt')  # 获取文件最后修改时间

# 获取文件大小
size = os.path.getsize('file.txt')  # 获取文件大小

# 判断路径是否存在
exists = os.path.exists('file.txt')  # 判断路径是否存在

# 判断路径是否为文件
is_file = os.path.isfile('file.txt')  # 判断路径是否为文件

# 判断路径是否为目录
is_dir = os.path.isdir('directory')  # 判断路径是否为目录

# 判断路径是否为符号链接
is_link = os.path.islink('link')  # 判断路径是否为符号链接

# 扩展用户路径
user_path = os.path.expanduser('~')  # 扩展用户路径

# 扩展变量路径
var_path = os.path.expandvars('$HOME')  # 扩展变量路径

# 规范化路径
norm_path = os.path.normpath('/path/to//file')  # 规范化路径

# 返回路径的绝对路径
abs_path = os.path.abspath('file.txt')  # 返回路径的绝对路径

# 判断路径是否为绝对路径
is_abs = os.path.isabs('/path/to/file')  # 判断路径是否为绝对路径

# 分割路径
split_path = os.path.split('/path/to/file')  # 分割路径为 (目录, 文件名)

# 分割路径扩展名
split_ext = os.path.splitext('file.txt')  # 分割路径为 (文件名, 扩展名)

# 拼接路径
join_path = os.path.join('/path/to', 'file.txt')  # 拼接路径

# 获取路径的基本名
base_name = os.path.basename('/path/to/file.txt')  # 获取路径的基本名

# 获取路径的目录名
dir_name = os.path.dirname('/path/to/file.txt')  # 获取路径的目录名

# 判断路径是否为挂载点
is_mount = os.path.ismount('/mnt')  # 判断路径是否为挂载点

# 获取文件的模式
mode = os.stat('file.txt').st_mode  # 获取文件的模式

# 获取文件的 inode 编号
inode = os.stat('file.txt').st_ino  # 获取文件的 inode 编号

# 获取文件的设备
device = os.stat('file.txt').st_dev  # 获取文件的设备

# 获取文件的硬链接数
nlink = os.stat('file.txt').st_nlink  # 获取文件的硬链接数

# 获取文件的拥有者 ID
uid = os.stat('file.txt').st_uid  # 获取文件的拥有者 ID

# 获取文件的组 ID
gid = os.stat('file.txt').st_gid  # 获取文件的组 ID

# 获取文件的大小
size = os.stat('file.txt').st_size  # 获取文件的大小

# 获取文件的访问时间
atime = os.stat('file.txt').st_atime  # 获取文件的访问时间

# 获取文件的修改时间
mtime = os.stat('file.txt').st_mtime  # 获取文件的修改时间

# 获取文件的创建时间
ctime = os.stat('file.txt').st_ctime  # 获取文件的创建时间


#️⃣ io 模块

# 打开文件
with io.open('file.txt', 'r', encoding='utf-8') as file:
    content = file.read()  # 读取文件内容

# 创建内存中的文件对象
string_io = io.StringIO()  # 创建内存中的字符串文件对象
bytes_io = io.BytesIO()  # 创建内存中的字节文件对象

# io.StringIO 方法
string_io.write('Hello, StringIO!')  # 写入字符串
string_io.seek(0)  # 将指针移动到开始位置
content = string_io.read()  # 读取字符串

# io.BytesIO 方法
bytes_io.write(b'Hello, BytesIO!')  # 写入字节
bytes_io.seek(0)  # 将指针移动到开始位置
byte_content = bytes_io.read()  # 读取字节

# 文件读写模式
with io.open('file.txt', 'r', encoding='utf-8') as file:
    content = file.read()  # 读取文件内容
with io.open('file.txt', 'w', encoding='utf-8') as file:
    file.write('Hello, world!')  # 写入文件内容

# 文件缓冲
buffered_reader = io.BufferedReader(io.BytesIO(b'Hello, BufferedReader!'))
buffered_writer = io.BufferedWriter(io.BytesIO())
buffered_reader.read()  # 读取缓冲内容
buffered_writer.write(b'Hello, BufferedWriter!')  # 写入缓冲内容
buffered_writer.flush()  # 刷新缓冲区

# 使用 TextIOWrapper 将字节流包装成文本流
bytes_io = io.BytesIO(b'Hello, world!')
text_io = io.TextIOWrapper(bytes_io, encoding='utf-8')
content = text_io.read()  # 读取文本内容

# BufferedIOBase 类方法
buffered_io = io.BufferedIOBase()
buffered_io.readable()  # 检查是否可读
buffered_io.writable()  # 检查是否可写
buffered_io.seekable()  # 检查是否可定位

# TextIOBase 类方法
text_io_base = io.TextIOBase()
text_io_base.readable()  # 检查是否可读
text_io_base.writable()  # 检查是否可写
text_io_base.seekable()  # 检查是否可定位

# RawIOBase 类方法
raw_io_base = io.RawIOBase()
raw_io_base.readable()  # 检查是否可读
raw_io_base.writable()  # 检查是否可写
raw_io_base.seekable()  # 检查是否可定位

# IncrementalNewlineDecoder 类方法
decoder = io.IncrementalNewlineDecoder()
decoder.decode(b'line1\nline2\n')  # 解码字节

# TextIOWrapper 类方法
text_io = io.TextIOWrapper(io.BytesIO(b'Hello, TextIOWrapper!'), encoding='utf-8')
text_io.read()  # 读取文本内容
text_io.write('New content')  # 写入文本内容

# StringIO 类方法
string_io = io.StringIO('Hello, StringIO!')
string_io.read()  # 读取字符串
string_io.write('New content')  # 写入字符串

# BytesIO 类方法
bytes_io = io.BytesIO(b'Hello, BytesIO!')
bytes_io.read()  # 读取字节
bytes_io.write(b'New content')  # 写入字节

# IOBase 类方法
io_base = io.IOBase()
io_base.readable()  # 检查是否可读
io_base.writable()  # 检查是否可写
io_base.seekable()  # 检查是否可定位

# StringIO 方法
string_io = io.StringIO()
string_io.write('Hello, StringIO!')
string_io.seek(0)  # 将指针移动到开始位置
content = string_io.read()  # 读取字符串

# BytesIO 方法
bytes_io = io.BytesIO()
bytes_io.write(b'Hello, BytesIO!')
bytes_io.seek(0)  # 将指针移动到开始位置
byte_content = bytes_io.read()  # 读取字节

# FileIO 方法
with io.FileIO('file.txt', 'r') as file:
    content = file.read()  # 读取文件内容

# BufferedReader 方法
with io.BufferedReader(io.BytesIO(b'Hello, BufferedReader!')) as buffered_reader:
    content = buffered_reader.read()  # 读取缓冲内容

# BufferedWriter 方法
with io.BufferedWriter(io.BytesIO()) as buffered_writer:
    buffered_writer.write(b'Hello, BufferedWriter!')  # 写入缓冲内容
    buffered_writer.flush()  # 刷新缓冲区

# BufferedRandom 方法
with io.BufferedRandom(io.BytesIO()) as buffered_random:
    buffered_random.write(b'Hello, BufferedRandom!')  # 写入缓冲内容
    buffered_random.seek(0)  # 将指针移动到开始位置
    content = buffered_random.read()  # 读取缓冲内容

# BufferedRWPair 方法
with io.BufferedRWPair(io.BytesIO(), io.BytesIO()) as buffered_rw_pair:
    buffered_rw_pair.write(b'Hello, BufferedRWPair!')  # 写入缓冲内容
    buffered_rw_pair.seek(0)  # 将指针移动到开始位置
    content = buffered_rw_pair.read()  # 读取缓冲内容

# TextIOWrapper 方法
with io.TextIOWrapper(io.BytesIO(b'Hello, TextIOWrapper!'), encoding='utf-8') as text_io_wrapper:
    content = text_io_wrapper.read()  # 读取文本内容

# IncrementalNewlineDecoder 方法
decoder = io.IncrementalNewlineDecoder()
decoder.decode(b'line1\nline2\n')  # 解码字节

# TextIOBase 方法
text_io_base = io.TextIOBase()
text_io_base.readable()  # 检查是否可读
text_io_base.writable()  # 检查是否可写
text_io_base.seekable()  # 检查是否可定位

# RawIOBase 方法
raw_io_base = io.RawIOBase()
raw_io_base.readable()  # 检查是否可读
raw_io_base.writable()  # 检查是否可写
raw_io_base.seekable()  # 检查是否可定位

# IOBase 方法
io_base = io.IOBase()
io_base.readable()  # 检查是否可读
io_base.writable()  # 检查是否可写
io_base.seekable()  # 检查是否可定位

```

### 网络编程（`socket`、`urllib`）
```python
import socket
import urllib.request
import urllib.parse

#️⃣ socket 模块

# 创建 socket 对象
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)  # 创建 TCP socket
s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)  # 创建 UDP socket

# 连接到服务器
s.connect(('www.example.com', 80))  # 连接到指定地址和端口

# 绑定到地址和端口
s.bind(('localhost', 12345))  # 绑定到本地地址和端口

# 监听连接
s.listen(5)  # 监听连接（最多 5 个连接）

# 接受连接
conn, addr = s.accept()  # 接受连接并返回 (连接对象, 地址)

# 发送数据
s.send(b'Hello, world!')  # 发送数据（TCP）
s.sendto(b'Hello, world!', ('localhost', 12345))  # 发送数据（UDP）

# 接收数据
data = s.recv(1024)  # 接收数据（TCP）
data, addr = s.recvfrom(1024)  # 接收数据（UDP）

# 关闭 socket
s.close()  # 关闭 socket

# 获取主机名和 IP 地址
hostname = socket.gethostname()  # 获取主机名
ip_address = socket.gethostbyname(hostname)  # 获取 IP 地址
host_info = socket.gethostbyaddr('8.8.8.8')  # 获取主机信息

# 将主机名和端口转换为二进制格式
binary_addr = socket.gethostbyname_ex('www.example.com')  # 获取主机信息扩展
binary_addr_info = socket.getaddrinfo('www.example.com', 80)  # 获取地址信息

# 设置和获取 socket 选项
s.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)  # 设置 socket 选项
option_value = s.getsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR)  # 获取 socket 选项

# 设置超时时间
s.settimeout(10.0)  # 设置超时时间（秒）
timeout = s.gettimeout()  # 获取超时时间

# 获取 socket 地址信息
sock_name = s.getsockname()  # 获取本地 socket 地址
peer_name = s.getpeername()  # 获取远程 socket 地址

# 关闭 socket 的读和写
s.shutdown(socket.SHUT_RDWR)  # 关闭 socket 的读和写

# 创建和处理非阻塞 socket
s.setblocking(0)  # 设置非阻塞模式
s.setblocking(1)  # 设置阻塞模式

# 创建和处理文件描述符
fd = s.fileno()  # 获取文件描述符
s = socket.socket(fileno=fd)  # 从文件描述符创建 socket

# 使用上下文管理器管理 socket
with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
    s.connect(('www.example.com', 80))
    s.sendall(b'GET / HTTP/1.1\r\nHost: www.example.com\r\n\r\n')
    response = s.recv(4096)
    print(response)

# 创建和处理 Unix 域 socket
s = socket.socket(socket.AF_UNIX, socket.SOCK_STREAM)  # 创建 Unix 域 socket
s.bind('/tmp/socket_file')  # 绑定到文件路径
s.connect('/tmp/socket_file')  # 连接到文件路径

# 使用 SSL 包装 socket
import ssl
wrapped_socket = ssl.wrap_socket(s, ssl_version=ssl.PROTOCOL_TLS)  # 使用 SSL 包装 socket

# 使用 select 模块多路复用
import select
readable, writable, exceptional = select.select([s], [s], [s], timeout)  # 多路复用

# 获取网络接口名称和地址
interface_name = socket.if_nameindex()  # 获取网络接口名称
interface_addr = socket.if_nametoindex('eth0')  # 获取网络接口地址

# 使用 getaddrinfo 获取更多详细信息
addr_info = socket.getaddrinfo('www.example.com', None)  # 获取地址信息

# 设置 TCP_NODELAY 选项以禁用 Nagle 算法
s.setsockopt(socket.IPPROTO_TCP, socket.TCP_NODELAY, 1)  # 设置 TCP_NODELAY 选项

# 使用 socketpair 创建一对连接的套接字
parent_sock, child_sock = socket.socketpair()  # 创建一对连接的套接字


#️⃣ urllib 模块

# 使用 urlopen 打开 URL
response = urllib.request.urlopen('http://www.example.com')  # 打开 URL
html = response.read()  # 读取响应内容

# 使用 Request 自定义请求
req = urllib.request.Request('http://www.example.com')
req.add_header('User-Agent', 'Mozilla/5.0')
response = urllib.request.urlopen(req)
html = response.read()

# 使用 urlretrieve 下载文件
filename, headers = urllib.request.urlretrieve('http://www.example.com/file.zip', 'file.zip')  # 下载文件

# 使用 urlcleanup 清理临时文件
urllib.request.urlcleanup()  # 清理临时文件

# 编码和解码 URL 参数
params = {'param1': 'value1', 'param2': 'value2'}
query_string = urllib.parse.urlencode(params)  # 编码 URL 参数
parsed_params = urllib.parse.parse_qs(query_string)  # 解码 URL 参数

# 解析 URL
parsed_url = urllib.parse.urlparse('http://www.example.com/path?query=arg')  # 解析 URL
scheme = parsed_url.scheme  # 获取 URL 的 scheme
netloc = parsed_url.netloc  # 获取 URL 的 netloc
path = parsed_url.path  # 获取 URL 的 path
query = parsed_url.query  # 获取 URL 的 query

# 构建 URL
url = urllib.parse.urlunparse(('http', 'www.example.com', '/path', '', 'query=arg', ''))  # 构建 URL

# 使用 urlencode 编码查询参数
params = {'key1': 'value1', 'key2': 'value2'}
encoded_params = urllib.parse.urlencode(params)  # 编码查询参数

# 将查询参数添加到 URL
url = 'http://www.example.com'
full_url = url + '?' + encoded_params  # 将查询参数添加到 URL

# 解析查询参数
query_params = urllib.parse.parse_qs('key1=value1&key2=value2')  # 解析查询参数

# 解析 URL 并返回命名元组
parsed_url = urllib.parse.urlsplit('http://www.example.com/path?query=arg')  # 解析 URL 并返回命名元组

# 解析和构建 URL 编码的数据
parsed_data = urllib.parse.parse_qsl('key1=value1&key2=value2')  # 解析 URL 编码的数据

# 编码和解码 URL 组件
quoted_url = urllib.parse.quote('http://www.example.com/dir/file name')  # 编码 URL 组件
unquoted_url = urllib.parse.unquote('http%3A%2F%2Fwww.example.com%2Fdir%2Ffile%20name')  # 解码 URL 组件

# 编码和解码字节数据
quoted_bytes = urllib.parse.quote_plus(b'key1=value1&key2=value2')  # 编码字节数据
unquoted_bytes = urllib.parse.unquote_plus('key1%3Dvalue1%26key2%3Dvalue2')  # 解码字节数据

# URL 编码数据
data = {'param1': 'value1', 'param2': 'value2'}
encoded_data = urllib.parse.urlencode(data).encode('utf-8')  # URL 编码数据

# 使用 opener 自定义请求处理
opener = urllib.request.build_opener()
opener.addheaders = [('User-Agent', 'Mozilla/5.0')]
response = opener.open('http://www.example.com')
html = response.read()

# 安装 opener 作为默认打开器
urllib.request.install_opener(opener)  # 安装 opener

# 处理 HTTP 基本认证
auth_handler = urllib.request.HTTPBasicAuthHandler()
auth_handler.add_password(realm='realm', uri='http://www.example.com', user='username', passwd='password')
opener = urllib.request.build_opener(auth_handler)
response = opener.open('http://www.example.com')
html = response.read()

# 处理 HTTP 代理
proxy_handler = urllib.request.ProxyHandler({'http': 'http://proxy.example.com:8080'})
opener = urllib.request.build_opener(proxy_handler)
response = opener.open('http://www.example.com')
html = response.read()

# 处理 HTTP cookies
import http.cookiejar
cookie_jar = http.cookiejar.CookieJar()
cookie_handler = urllib.request.HTTPCookieProcessor(cookie_jar)
opener = urllib.request.build_opener(cookie_handler)
response = opener.open('http://www.example.com')
html = response.read()

# 自定义 HTTP 方法
class CustomMethod(urllib.request.Request):
    def get_method(self):
        return 'PUT'

req = CustomMethod('http://www.example.com', data=b'Updated data')
response = urllib.request.urlopen(req)
html = response.read()

# 使用 context 管理 SSL 设置
import ssl
context = ssl.create_default_context()
context.check_hostname = False
context.verify_mode = ssl.CERT_NONE
response = urllib.request.urlopen('https://www.example.com', context=context)
html = response.read()
```

### 日期和时间处理（`datetime`、`time`）
```python
import datetime
import time

#️⃣ datetime 模块

# 获取当前日期和时间
now = datetime.datetime.now()  # 获取当前日期和时间
today = datetime.date.today()  # 获取当前日期

# 创建日期对象
date = datetime.date(2023, 5, 31)  # 创建日期对象
time = datetime.time(12, 34, 56)  # 创建时间对象
datetime_obj = datetime.datetime(2023, 5, 31, 12, 34, 56)  # 创建日期时间对象

# 格式化日期和时间
formatted_date = date.strftime('%Y-%m-%d')  # 格式化日期
formatted_time = time.strftime('%H:%M:%S')  # 格式化时间
formatted_datetime = datetime_obj.strftime('%Y-%m-%d %H:%M:%S')  # 格式化日期时间

# 解析日期和时间
parsed_date = datetime.datetime.strptime('2023-05-31', '%Y-%m-%d').date()  # 解析日期
parsed_time = datetime.datetime.strptime('12:34:56', '%H:%M:%S').time()  # 解析时间
parsed_datetime = datetime.datetime.strptime('2023-05-31 12:34:56', '%Y-%m-%d %H:%M:%S')  # 解析日期时间

# 获取日期和时间的组件
year = date.year  # 获取年
month = date.month  # 获取月
day = date.day  # 获取日
hour = time.hour  # 获取小时
minute = time.minute  # 获取分钟
second = time.second  # 获取秒

# 计算时间差
delta = datetime.timedelta(days=5)  # 创建时间差对象
new_date = date + delta  # 日期加时间差
new_datetime = datetime_obj - delta  # 日期时间减时间差

# 比较日期和时间
is_equal = date == datetime.date(2023, 5, 31)  # 比较日期是否相等
is_before = datetime_obj < datetime.datetime(2024, 1, 1)  # 比较日期时间是否在之前
is_after = time > datetime.time(12, 0, 0)  # 比较时间是否在之后

# 获取日期和时间的最大值和最小值
min_date = datetime.date.min  # 获取日期的最小值
max_date = datetime.date.max  # 获取日期的最大值
min_time = datetime.time.min  # 获取时间的最小值
max_time = datetime.time.max  # 获取时间的最大值
min_datetime = datetime.datetime.min  # 获取日期时间的最小值
max_datetime = datetime.datetime.max  # 获取日期时间的最大值

# 获取当前时间的 UTC 时间和本地时间
utc_now = datetime.datetime.utcnow()  # 获取当前 UTC 时间
local_now = datetime.datetime.now()  # 获取当前本地时间

# 将本地时间转换为 UTC 时间
local_datetime = datetime.datetime(2023, 5, 31, 12, 34, 56)
utc_datetime = local_datetime.astimezone(datetime.timezone.utc)  # 将本地时间转换为 UTC 时间

# 将 UTC 时间转换为本地时间
utc_datetime = datetime.datetime(2023, 5, 31, 12, 34, 56, tzinfo=datetime.timezone.utc)
local_datetime = utc_datetime.astimezone()  # 将 UTC 时间转换为本地时间

# 获取时区信息
timezone = datetime.timezone(datetime.timedelta(hours=8))  # 创建时区对象
utc_offset = timezone.utcoffset(datetime_obj)  # 获取时区偏移

# 使用自定义时区信息
class CustomTZ(datetime.tzinfo):
    def utcoffset(self, dt):
        return datetime.timedelta(hours=8)
    def dst(self, dt):
        return datetime.timedelta(0)

custom_tz = CustomTZ()
datetime_with_tz = datetime.datetime(2023, 5, 31, 12, 34, 56, tzinfo=custom_tz)  # 创建带时区的日期时间对象

# 使用相对时间
relativedelta = datetime.timedelta(days=1, months=1)  # 创建相对时间对象
new_datetime = datetime_obj + relativedelta  # 日期时间加相对时间

# 使用 ISO 8601 格式
iso_format = datetime_obj.isoformat()  # 获取 ISO 8601 格式的日期时间字符串
parsed_iso_datetime = datetime.datetime.fromisoformat('2023-05-31T12:34:56')  # 解析 ISO 8601 格式的日期时间字符串

# 获取一周的开始日期和结束日期
start_of_week = date - datetime.timedelta(days=date.weekday())  # 获取一周的开始日期
end_of_week = start_of_week + datetime.timedelta(days=6)  # 获取一周的结束日期


#️⃣ time 模块

# 获取当前时间戳
timestamp = time.time()  # 获取当前时间戳

# 将时间戳转换为本地时间
local_time = time.localtime(timestamp)  # 将时间戳转换为本地时间
formatted_local_time = time.strftime('%Y-%m-%d %H:%M:%S', local_time)  # 格式化本地时间

# 将时间戳转换为 UTC 时间
utc_time = time.gmtime(timestamp)  # 将时间戳转换为 UTC 时间
formatted_utc_time = time.strftime('%Y-%m-%d %H:%M:%S', utc_time)  # 格式化 UTC 时间

# 解析时间字符串
parsed_time = time.strptime('2023-05-31 12:34:56', '%Y-%m-%d %H:%M:%S')  # 解析时间字符串

# 获取当前时间的时间戳
current_timestamp = time.mktime(local_time)  # 获取当前时间的时间戳

# 暂停执行
time.sleep(1)  # 暂停执行 1 秒

# 获取处理器时间
processor_time = time.process_time()  # 获取处理器时间

# 获取时间戳的小数部分
timestamp_fraction = time.time() % 1  # 获取时间戳的小数部分

# 获取当前时间
current_time = time.ctime()  # 获取当前时间的字符串表示
current_localtime = time.localtime()  # 获取当前时间的本地时间
current_gmtime = time.gmtime()  # 获取当前时间的 UTC 时间

# 格式化时间
formatted_time = time.strftime('%Y-%m-%d %H:%M:%S', current_localtime)  # 格式化本地时间
formatted_utc_time = time.strftime('%Y-%m-%d %H:%M:%S', current_gmtime)  # 格式化 UTC 时间

# 获取时间组件
year = local_time.tm_year  # 获取年
month = local_time.tm_mon  # 获取月
day = local_time.tm_mday  # 获取日
hour = local_time.tm_hour  # 获取小时
minute = local_time.tm_min  # 获取分钟
second = local_time.tm_sec  # 获取秒

# 使用 perf_counter 进行精确计时
start = time.perf_counter()  # 获取开始时间
# 执行一些操作
end = time.perf_counter()  # 获取结束时间
elapsed = end - start  # 计算经过的时间

# 使用 monotonic 进行单调计时
start = time.monotonic()  # 获取开始时间
# 执行一些操作
end = time.monotonic()  # 获取结束时间
elapsed = end - start  # 计算经过的时间

# 使用 thread_time 进行线程计时
start = time.thread_time()  # 获取开始时间
# 执行一些操作
end = time.thread_time()  # 获取结束时间
elapsed = end - start  # 计算经过的时间

# 使用 time_ns 获取纳秒级时间戳
nanoseconds = time.time_ns()  # 获取纳秒级时间戳

```
### 数学运算（`math`、`random`）
```python
import math
import random

#️⃣ math 模块

# 数学常数
pi = math.pi  # 圆周率
e = math.e  # 自然常数
tau = math.tau  # 圆周率的两倍
inf = math.inf  # 正无穷大
nan = math.nan  # 不是一个数字

# 四舍五入
result = math.ceil(4.2)  # 返回不小于 x 的最小整数
result = math.floor(4.8)  # 返回不大于 x 的最大整数
result = math.trunc(4.8)  # 返回 x 的整数部分（截断）
result = round(4.6)  # 返回四舍五入后的值

# 幂和对数
result = math.exp(1)  # 返回 e 的 x 次幂
result = math.log(2.718)  # 返回 x 的自然对数
result = math.log(100, 10)  # 返回 x 以 base 为底的对数
result = math.log2(8)  # 返回 x 以 2 为底的对数
result = math.log10(100)  # 返回 x 以 10 为底的对数
result = math.pow(2, 3)  # 返回 x 的 y 次幂
result = math.sqrt(25)  # 返回 x 的平方根

# 三角函数
result = math.sin(math.pi / 2)  # 返回 x 的正弦
result = math.cos(math.pi)  # 返回 x 的余弦
result = math.tan(math.pi / 4)  # 返回 x 的正切
result = math.asin(1)  # 返回 x 的反正弦
result = math.acos(1)  # 返回 x 的反余弦
result = math.atan(1)  # 返回 x 的反正切
result = math.atan2(1, 1)  # 返回 y/x 的反正切

# 双曲函数
result = math.sinh(1)  # 返回 x 的双曲正弦
result = math.cosh(1)  # 返回 x 的双曲余弦
result = math.tanh(1)  # 返回 x 的双曲正切
result = math.asinh(1)  # 返回 x 的反双曲正弦
result = math.acosh(1)  # 返回 x 的反双曲余弦
result = math.atanh(0.5)  # 返回 x 的反双曲正切

# 角度转换
result = math.degrees(math.pi)  # 将弧度转换为角度
result = math.radians(180)  # 将角度转换为弧度

# 特殊函数
result = math.factorial(5)  # 返回 x 的阶乘
result = math.gamma(5)  # 返回 x 的伽玛函数值
result = math.lgamma(5)  # 返回 x 的伽玛函数的自然对数值

# 浮点数运算
result = math.fabs(-5)  # 返回 x 的绝对值
result = math.fmod(7, 3)  # 返回 x % y 的浮点数余数
result = math.frexp(8)  # 返回 (m, e) 使得 x = m * 2**e
result = math.ldexp(0.5, 3)  # 返回 x * (2**i)
result = math.modf(4.5)  # 返回 x 的整数部分和小数部分
result = math.copysign(1, -2)  # 返回 y 的符号加上 x 的绝对值
result = math.isfinite(4.5)  # 判断 x 是否是有限数
result = math.isinf(math.inf)  # 判断 x 是否是无穷大
result = math.isnan(math.nan)  # 判断 x 是否是 NaN
result = math.isclose(1.0001, 1.0002, rel_tol=1e-5)  # 判断两个数是否接近

# 其他函数
result = math.gcd(48, 180)  # 返回 x 和 y 的最大公约数
result = math.lcm(48, 180)  # 返回 x 和 y 的最小公倍数
result = math.prod([1, 2, 3, 4])  # 返回可迭代对象中所有元素的乘积
result = math.dist([1, 2], [4, 6])  # 返回两个点之间的欧几里得距离
result = math.hypot(3, 4)  # 返回欧几里得范数 sqrt(x*x + y*y)

#️⃣ random 模块

# 初始化随机数生成器
random.seed(42)  # 设置随机数生成器的种子
random.seed()  # 使用当前系统时间初始化随机数生成器

# 生成随机数
result = random.random()  # 生成一个 0 到 1 之间的随机浮点数
result = random.uniform(1, 10)  # 生成一个 a 到 b 之间的随机浮点数
result = random.randint(1, 10)  # 生成一个 a 到 b 之间的随机整数，包括 a 和 b
result = random.randrange(1, 10)  # 生成一个 a 到 b 之间的随机整数，不包括 b
result = random.choice([1, 2, 3, 4, 5])  # 从序列中随机选择一个元素
result = random.choices([1, 2, 3, 4, 5], k=3)  # 从序列中随机选择 k 个元素，允许重复
result = random.sample([1, 2, 3, 4, 5], k=3)  # 从序列中随机选择 k 个元素，不允许重复
result = random.betavariate(2, 5)  # Beta 分布
result = random.expovariate(1 / 5)  # 指数分布
result = random.gammavariate(1, 2)  # Gamma 分布
result = random.gauss(0, 1)  # 正态（高斯）分布
result = random.lognormvariate(0, 1)  # 对数正态分布
result = random.normalvariate(0, 1)  # 正态分布
result = random.vonmisesvariate(0, 1)  # 冯·米塞斯分布
result = random.paretovariate(1)  # 帕累托分布
result = random.weibullvariate(1, 1)  # 韦布尔分布

# 随机打乱序列
my_list = [1, 2, 3, 4, 5]
random.shuffle(my_list)  # 随机打乱序列
```

### 字符串处理（`re`、`string`）
```python
import re
import string

#️⃣ re 模块

# 匹配和搜索
pattern = r'\d+'  # 匹配一个或多个数字
text = 'My number is 12345'

match = re.match(pattern, text)  # 从字符串开始处匹配
if match:
    print(match.group())  # 输出匹配的字符串

search = re.search(pattern, text)  # 搜索整个字符串
if search:
    print(search.group())  # 输出匹配的字符串

findall = re.findall(pattern, text)  # 查找所有匹配
print(findall)  # 输出所有匹配的列表

finditer = re.finditer(pattern, text)  # 返回一个迭代器，产生所有匹配
for match in finditer:
    print(match.group())  # 输出匹配的字符串

# 替换和分割
sub = re.sub(r'\d+', '#', text)  # 替换所有匹配的子串
print(sub)  # 输出替换后的字符串

subn = re.subn(r'\d+', '#', text)  # 替换所有匹配的子串并返回替换次数
print(subn)  # 输出替换后的字符串和替换次数

split = re.split(r'\s+', text)  # 根据匹配分割字符串
print(split)  # 输出分割后的列表

# 编译正则表达式
compiled_pattern = re.compile(pattern)  # 编译正则表达式

match = compiled_pattern.match(text)  # 使用编译的正则表达式匹配
search = compiled_pattern.search(text)  # 使用编译的正则表达式搜索
findall = compiled_pattern.findall(text)  # 使用编译的正则表达式查找所有匹配
finditer = compiled_pattern.finditer(text)  # 使用编译的正则表达式返回一个迭代器

# 分组
pattern = r'(\d+)-(\d+)-(\d+)'
text = 'My number is 123-456-7890'

match = re.search(pattern, text)  # 搜索整个字符串
if match:
    print(match.group(0))  # 输出整个匹配
    print(match.group(1))  # 输出第一个分组
    print(match.group(2))  # 输出第二个分组
    print(match.group(3))  # 输出第三个分组

# 使用命名分组
pattern = r'(?P<area>\d+)-(?P<exchange>\d+)-(?P<number>\d+)'
match = re.search(pattern, text)
if match:
    print(match.group('area'))  # 输出命名分组 'area'
    print(match.group('exchange'))  # 输出命名分组 'exchange'
    print(match.group('number'))  # 输出命名分组 'number'

# 正则表达式标志
pattern = r'hello world'
text = 'Hello World'
match = re.search(pattern, text, re.IGNORECASE)  # 忽略大小写匹配
if match:
    print(match.group())

# 分割和替换中使用捕获组
pattern = r'(\d+)'
text = '123abc456'
split = re.split(pattern, text)  # 使用捕获组进行分割
print(split)  # 输出分割后的列表

sub = re.sub(pattern, r'(\1)', text)  # 使用捕获组进行替换
print(sub)  # 输出替换后的字符串


#️⃣ string 模块

# 常量
print(string.ascii_letters)  # 所有 ASCII 字母（大写和小写）
print(string.ascii_lowercase)  # 所有小写 ASCII 字母
print(string.ascii_uppercase)  # 所有大写 ASCII 字母
print(string.digits)  # 所有数字字符
print(string.hexdigits)  # 所有十六进制字符
print(string.octdigits)  # 所有八进制字符
print(string.punctuation)  # 所有标点符号
print(string.printable)  # 所有可打印字符
print(string.whitespace)  # 所有空白字符

# 字符串模板
template = string.Template('Hello, $name!')
result = template.substitute(name='World')  # 使用字典或关键字参数替换模板中的变量
print(result)  # 输出 'Hello, World!'

safe_result = template.safe_substitute(name='World')  # 与 substitute 类似，但未定义的变量不会引发 KeyError
print(safe_result)  # 输出 'Hello, World!'

# 自定义字符串格式化
custom_formatter = string.Formatter()
formatted_string = custom_formatter.format('Hello, {}!', 'World')  # 使用自定义格式化器格式化字符串
print(formatted_string)  # 输出 'Hello, World!'

# 使用 string 模块的一些方法
result = string.capwords('hello world')  # 将字符串中的每个单词首字母大写
print(result)  # 输出 'Hello World'
```

### 数据结构（`list`、`tuple`、`dict`、`set`）
```python
#️⃣ list 列表

# 创建列表
my_list = [1, 2, 3, 4, 5]

# 添加元素
my_list.append(6)  # 在列表末尾添加元素
my_list.insert(0, 0)  # 在指定位置插入元素

# 删除元素
my_list.pop()  # 删除并返回列表末尾的元素
my_list.remove(3)  # 删除指定值的第一个元素
del my_list[0]  # 删除指定位置的元素

# 访问元素
print(my_list[0])  # 访问指定位置的元素
print(my_list[-1])  # 访问列表末尾的元素

# 修改元素
my_list[0] = 10  # 修改指定位置的元素

# 列表切片
print(my_list[1:3])  # 获取指定范围的子列表

# 查找元素
print(3 in my_list)  # 判断元素是否在列表中

# 获取列表长度
print(len(my_list))  # 获取列表的长度

# 排序
my_list.sort()  # 对列表进行排序（就地排序）
sorted_list = sorted(my_list)  # 返回排序后的新列表

# 反转
my_list.reverse()  # 反转列表

# 清空列表
my_list.clear()  # 清空列表

# 复制列表
new_list = my_list.copy()  # 复制列表（浅拷贝）

# 列表推导式
squared = [x ** 2 for x in range(5)]  # 使用列表推导式生成新列表

#️⃣ tuple 元组

# 创建元组
my_tuple = (1, 2, 3, 4, 5)

# 访问元素
print(my_tuple[0])  # 访问指定位置的元素
print(my_tuple[-1])  # 访问元组末尾的元素

# 元组切片
print(my_tuple[1:3])  # 获取指定范围的子元组

# 查找元素
print(3 in my_tuple)  # 判断元素是否在元组中

# 获取元组长度
print(len(my_tuple))  # 获取元组的长度

# 元组拆包
a, b, c = my_tuple  # 元组拆包

# 不可变性
# my_tuple[0] = 10  # 尝试修改元组中的元素会引发 TypeError

#️⃣ dict 字典

# 创建字典
my_dict = {'a': 1, 'b': 2, 'c': 3}

# 添加或修改元素
my_dict['d'] = 4  # 添加新键值对
my_dict['a'] = 10  # 修改指定键的值

# 删除元素
my_dict.pop('b')  # 删除指定键的键值对
del my_dict['c']  # 删除指定键的键值对

# 访问元素
print(my_dict['a'])  # 访问指定键的值

# 获取所有键或值
keys = my_dict.keys()  # 获取所有键
values = my_dict.values()  # 获取所有值
items = my_dict.items()  # 获取所有键值对

# 查找元素
print('b' in my_dict)  # 判断键是否在字典中

# 获取字典长度
print(len(my_dict))  # 获取字典的长度

# 清空字典
my_dict.clear()  # 清空字典

# 复制字典
new_dict = my_dict.copy()  # 复制字典（浅拷贝）

#️⃣ set 集合

# 创建集合
my_set = {1, 2, 3, 4, 5}

# 添加元素
my_set.add(6)  # 添加元素
my_set.update([7, 8, 9])  # 添加多个元素

# 删除元素
my_set.remove(3)  # 删除指定元素
my_set.discard(10)  # 删除指定元素（如果存在）

# 查找元素
print(3 in my_set)  # 判断元素是否在集合中

# 获取集合长度
print(len(my_set))  # 获取集合的长度

# 清空集合
my_set.clear()  # 清空集合

# 复制集合
new_set = my_set.copy()  # 复制集合（浅拷贝）

# 集合运算
set1 = {1, 2, 3}
set2 = {3, 4, 5}

union_set = set1 | set2  # 并集
intersection_set = set1 & set2  # 交集
difference_set = set1 - set2  # 差集
symmetric_difference_set = set1 ^ set2  # 对称差集
```

###  对象编程（`class`、`object`）
```python
#️⃣ 定义类和创建对象

class MyClass:
    """一个简单的类示例"""
    
    # 类属性
    class_attr = 'class_attribute'
    
    def __init__(self, arg1, arg2):
        """构造方法"""
        self.instance_attr1 = arg1  # 实例属性1
        self.instance_attr2 = arg2  # 实例属性2
    
    def instance_method(self):
        """实例方法"""
        return self.instance_attr1 + self.instance_attr2
    
    @classmethod
    def class_method(cls):
        """类方法"""
        return cls.class_attr
    
    @staticmethod
    def static_method():
        """静态方法"""
        return 'static_method'

# 创建对象
obj1 = MyClass(10, 20)
obj2 = MyClass(30, 40)

# 访问属性和调用方法
print(obj1.instance_attr1)  # 访问实例属性
print(obj2.instance_method())  # 调用实例方法

# 访问类属性和调用类方法
print(MyClass.class_attr)  # 访问类属性
print(MyClass.class_method())  # 调用类方法

# 调用静态方法
print(MyClass.static_method())  # 调用静态方法

#️⃣ 继承和多态

class Parent:
    """父类"""
    
    def speak(self):
        """父类的方法"""
        return "Parent speaks"

class Child(Parent):
    """子类"""
    
    def speak(self):
        """子类重写了父类的方法"""
        return "Child speaks"

# 创建对象
parent_obj = Parent()
child_obj = Child()

# 调用方法
print(parent_obj.speak())  # 调用父类的方法
print(child_obj.speak())  # 调用子类的方法

# 多重继承
class A:
    """类A"""
    def speak(self):
        return "A speaks"

class B:
    """类B"""
    def speak(self):
        return "B speaks"

class C(A, B):
    """类C"""
    pass

# 创建对象
c_obj = C()

# 调用方法
print(c_obj.speak())  # 输出 "A speaks"，按照继承顺序调用方法

#️⃣ 魔术方法（特殊方法）

class MagicClass:
    """魔术方法示例类"""
    
    def __init__(self, value):
        """初始化方法"""
        self.value = value
    
    def __repr__(self):
        """repr 方法"""
        return f'MagicClass({self.value})'
    
    def __str__(self):
        """str 方法"""
        return f'A MagicClass instance with value {self.value}'

# 创建对象
magic_obj = MagicClass(42)

# 调用特殊方法
print(repr(magic_obj))  # 调用 __repr__ 方法
print(str(magic_obj))  # 调用 __str__ 方法

```