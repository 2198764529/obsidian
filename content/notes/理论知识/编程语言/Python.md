---
title: Python
id: ef61365456
datetimeCreate: 2024-08-30 15:21:56
datetimeUpdate: 2024-08-30 18:43:55
---
## 概念类
### 什么是 闭包/装饰器?
|  | 闭包 | 装饰器 |
| --- | --- | --- |
| 本质 | 嵌套返回函数的函数 | 用于扩展修改类或方法的闭包 |
| 特征 | 嵌套的函数,内部函数使用外部函数的参数,返回内部函数 | 闭包特征 + 参数传入为被装饰函数 |
| 目的 | 使得内部函数可以访问外部函数的变量 | 不修改函数本身，修改或扩展函数功能 |
| 缺点 | 可能会造成额外的内存占用 | 闭包的缺点 |
| 应用场景 | 数据封装;工厂函数;函调函数;延迟计算;装饰器;缓存结果 | 记录日志;统计时间;访问控制;参数验证;重试机制 |
#### 理解闭包的应用场景
```python
# 闭包示例代码合集

# 1. 数据封装
def counter():
    # count 变量被封装在闭包内，外部无法直接访问
    count = 0
    def increment():
        # 使用 nonlocal 关键字，闭包可以修改外部函数的变量
        nonlocal count
        count += 1
        return count
    return increment

# 创建一个闭包实例，并多次调用它
counter_func = counter()
print(counter_func())  # 输出: 1
print(counter_func())  # 输出: 2


# 2. 工厂函数
def make_multiplier(factor):
    # multiplier 函数捕获了外部的 factor 变量
    def multiplier(x):
        return x * factor
    return multiplier

# 创建不同的乘数函数
double = make_multiplier(2)
triple = make_multiplier(3)

print(double(5))  # 输出: 10
print(triple(5))  # 输出: 15


# 3. 回调函数和事件处理
def make_callback(message):
    # callback 函数捕获了外部的 message 变量
    def callback():
        print(f"Callback message: {message}")
    return callback

# 创建不同的回调函数
callback1 = make_callback("Hello")
callback2 = make_callback("World")

# 执行回调函数
callback1()  # 输出: "Callback message: Hello"
callback2()  # 输出: "Callback message: World"


# 4. 延迟计算
def delayed_execution(x):
    # calculate 函数捕获了外部的 x 变量
    def calculate():
        return x * x
    return calculate

# 创建一个延迟计算的闭包
square_func = delayed_execution(4)
print(square_func())  # 输出: 16


# 5. 装饰器
def my_decorator(func):
    # wrapper 函数作为装饰器的闭包，修改了被装饰函数的行为
    def wrapper(*args, **kwargs):
        print("Something is happening before the function is called.")
        result = func(*args, **kwargs)
        print("Something is happening after the function is called.")
        return result
    return wrapper

# 使用 @ 符号将装饰器应用于函数
@my_decorator
def say_hello():
    print("Hello!")

# 调用被装饰的函数
say_hello()


# 6. 缓存结果
def memoize(func):
    # cache 变量存储计算结果，避免重复计算
    cache = {}
    def wrapper(n):
        if n not in cache:
            cache[n] = func(n)
        return cache[n]
    return wrapper

# 使用 memoize 装饰器缓存斐波那契数列的结果
@memoize
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

# 计算并输出斐波那契数列的第10项
print(fibonacci(10))  # 输出: 55

```
####  理解装饰器的应用场景
```python
# 装饰器示例代码合集

# 1. 记录函数的调用日志
def log_decorator(func):
    # wrapper 函数在执行目标函数前后记录日志
    def wrapper(*args, **kwargs):
        print(f"Function {func.__name__} is called with arguments {args} and {kwargs}")
        result = func(*args, **kwargs)
        print(f"Function {func.__name__} returned {result}")
        return result
    return wrapper

@log_decorator
def add(a, b):
    return a + b

# 调用被装饰的函数并记录日志
print(add(3, 4))
# 输出:
# Function add is called with arguments (3, 4) and {}
# Function add returned 7
# 7


# 2. 执行时间统计
import time

def timer_decorator(func):
    # wrapper 函数统计目标函数的执行时间
    def wrapper(*args, **kwargs):
        start_time = time.time()
        result = func(*args, **kwargs)
        end_time = time.time()
        print(f"Function {func.__name__} took {end_time - start_time:.4f} seconds to execute")
        return result
    return wrapper

@timer_decorator
def slow_function(seconds):
    time.sleep(seconds)
    return f"Slept for {seconds} seconds"

# 调用被装饰的函数并统计执行时间
print(slow_function(2))
# 输出:
# Function slow_function took 2.0023 seconds to execute
# Slept for 2 seconds


# 3. 访问控制
def require_authentication(func):
    # wrapper 函数在调用目标函数前进行访问控制
    def wrapper(user, *args, **kwargs):
        if not user.get('authenticated', False):
            raise PermissionError("User is not authenticated")
        return func(user, *args, **kwargs)
    return wrapper

@require_authentication
def get_sensitive_data(user):
    return "Sensitive data"

# 模拟已认证和未认证的用户调用
user_authenticated = {'authenticated': True}
user_unauthenticated = {'authenticated': False}

print(get_sensitive_data(user_authenticated))  # 输出: "Sensitive data"
# print(get_sensitive_data(user_unauthenticated))  # 抛出 PermissionError


# 4. 缓存结果（记忆化）
def memoize(func):
    cache = {}
    def wrapper(*args):
        if args not in cache:
            cache[args] = func(*args)
        return cache[args]
    return wrapper

@memoize
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

# 调用被装饰的函数并缓存结果
print(fibonacci(10))  # 输出: 55


# 5. 输入验证
def validate_input(expected_type):
    # wrapper 函数在调用目标函数前验证输入类型
    def decorator(func):
        def wrapper(*args, **kwargs):
            if not all(isinstance(arg, expected_type) for arg in args):
                raise ValueError(f"All arguments must be of type {expected_type}")
            return func(*args, **kwargs)
        return wrapper
    return decorator

@validate_input(int)
def sum_integers(*args):
    return sum(args)

# 调用被装饰的函数并验证输入
print(sum_integers(1, 2, 3))  # 输出: 6
# print(sum_integers(1, "2", 3))  # 抛出 ValueError


# 6. 重试机制
def retry(retries=3):
    # wrapper 函数在失败后重试目标函数
    def decorator(func):
        def wrapper(*args, **kwargs):
            last_exception = None
            for _ in range(retries):
                try:
                    return func(*args, **kwargs)
                except Exception as e:
                    last_exception = e
            raise last_exception
        return wrapper
    return decorator

@retry(retries=5)
def unstable_operation():
    # 模拟可能失败的操作
    import random
    if random.choice([True, False]):
        raise ValueError("Operation failed")
    return "Operation succeeded"

# 调用被装饰的函数并在失败后重试
print(unstable_operation())

```
参考: 
- [Python 闭包 装饰器-PySuper (zhengxingtao.com)](https://zhengxingtao.com/archives/python-bi-bao-zhuang-shi-qi)
### 什么是 可迭代对象/生成器/迭代器?
|  | 可迭代对象 | 迭代器 | 生成器 |
| --- | --- | --- | --- |
| 本质 | 容器对象 | 可迭代对象的地址引用 | 迭代器, 但是通过计算迭代下一个对象来节省内存 |
| 特征 | __iter__ 方法 | 可迭代对象特征+ __next__ | 迭代器特征+yield |
| 目的 | 提供可迭代的对象 | 实现不依赖索引的迭代方法 | 计算生成来节省内存的迭代器 |
| 缺点 | / | 只能往前取值;不知道多长;用完失效 | 时间换空间, 多消耗了CPU |
| 应用场景 | / | 需要迭代的时候 | 数据大,内存占用大;列表推导式无法描述的规律数组;协程 |
| 判断方法 | 是否有 __iter__ 方法 | isinstance(iterator,Iterator) | inspect.isgenerator(iterator) |
| 创建方法 | 容器类型的类 | iter 方法 | yield;(iterator) |
#### 理解 yield
yield i 执行 return i 之后,  再次运行会从 yield i 之后开始执行语句
```python
from collections import Iterator,Iterable
def fun():
    a = 1
    yield a    
    b = 100
    yield b
    
gen_fun = fun() # 创建生成器


print(next(gen_fun)) #输出 `a` 的值
print(next(gen_fun)) #输出 `b` 的值
print(next(gen_fun)) # 抛出 StopIteration 错误, 后面没有执行的语句了
```

参考: 
- [一篇文章讲清楚迭代器和生成器 - 金色旭光 - 博客园 (cnblogs.com)](https://www.cnblogs.com/goldsunshine/p/15590671.html)

### 什么是单例模式?
单例模式: 一个类只能创建一个对象的模式
实现方法: 
- 装饰器
- 指定单例元类, 通过 metaclass传入元类来实现
```python
from functools import wraps

# 装饰器
def singleton(cls):
    """单例类装饰器"""
    instances = {}

    @wraps(cls)
    def wrapper(*args, **kwargs):
        if cls not in instances:
            instances[cls] = cls(*args, **kwargs)
        return instances[cls]

    return wrapper

@singleton
class President:
    pass

# 指定元类
class SingletonMeta(type):
    """自定义单例元类"""

    def __init__(cls, *args, **kwargs):
        cls.__instance = None
        super().__init__(*args, **kwargs)

    def __call__(cls, *args, **kwargs):
        if cls.__instance is None:
            cls.__instance = super().__call__(*args, **kwargs)
        return cls.__instance

class President(metaclass=SingletonMeta):
    pass
```
### 什么是浅拷贝和深拷贝?

|  | 浅拷贝 | 深拷贝 |
| --- | --- | --- |
| 复制对象 | 对象本身,不会递归复制 | 对象和其他所有关联对象, 递归复制 |
| 实现方法 | copy | deepcopy |

深拷贝带来的两个问题:
- 若对象引用了自身, 可能会导致无休止的递归拷贝
- 原本的共享数据进行拷贝, 造成内存的多占用
解决方法:
	思路:  根据`deepcopy`函数的本质其实就是对象的一次序列化和一次返回序列化, 
	第一个问题用 memo 字典来跟踪已经复制的值, 避免无限递归
	第二个则是使用 `pickle` 模块的`dumps`和`loads`来做到自定义深拷贝
```python
import pickle

my_deep_copy = lambda obj: pickle.loads(pickle.dumps(obj))
```
### 什么是猴子补丁?
猴子补丁是动态派生类型的编程语言(如Python, ruby)
猴子补丁允许在运行时修改现有代码，而无需直接修改源代码，非常灵活
```python
# 原始的Python内置方法
print("hello".upper())  # 输出: "HELLO"

# 猴子补丁：修改 str.upper 方法，使其总是返回 "MONKEY PATCHED"
def new_upper(self):
    return "MONKEY PATCHED"

# 这里对 str.upper 应用猴子补丁
str.upper = new_upper

# 测试修改后的方法
print("hello".upper())  # 输出: "MONKEY PATCHED"

```

### 什么是方法重载和方法重写?
方法重写: 方法名和方法参数保持一致
方法重载: 方法名保持, 方法参数修改
注: Python 没有方法重载, 因为Python 可以通过可变默认参数来解决



## 参考:
- [Python-Interview-Bible/Python面试宝典-基础篇-2020.md at master · jackfrued/Python-Interview-Bible (github.com)](https://github.com/jackfrued/Python-Interview-Bible/blob/master/Python%E9%9D%A2%E8%AF%95%E5%AE%9D%E5%85%B8-%E5%9F%BA%E7%A1%80%E7%AF%87-2020.md)
- [面试鸭 - 程序员求职面试刷题神器，高频编程题目免费刷 (mianshiya.com)](https://www.mianshiya.com/)