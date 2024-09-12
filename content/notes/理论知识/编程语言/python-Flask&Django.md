---
title: python-Flask&Django
id: 469ee4c4d7
datetimeCreate: 2024-09-12 16:23:49
datetimeUpdate: 2024-09-12 17:35:29
---


## Django

### Django 基于什么架构?
MVC(Model View Controler, 模型视图控制器)
MTV(Model Template Controler, 模型模版控制器)
### Django 操作流程
![](https://www.runoob.com/wp-content/uploads/2020/05/1589777036-2760-fs1oSv4dOWAwC5yW.png)

### Django 中间件的方法
- .process_request : 请求进来时,权限认证
- .process_view : 路由匹配之后,能够得到视图函数
- .process_exception : 异常时执行
- .process_template_responseprocess : 模板渲染时执行
- .process_response : 请求有响应时执行
### WSGI 是什么?
WSGI是Python在处理HTTP请求时，规定的一种处理方法.
### 什么是 FBV 和 CBV
**FBV（function base views）** 基于函数的视图，就是在视图里使用函数处理请求。
**CBV（class base views）** 基于类的视图，就是在视图里使用类处理请求。
参考链接:
- [2023最新高级难度Django面试题,包含答案。刷题必备！记录一下。 - 小满独家 - 博客园 (cnblogs.com)](https://www.cnblogs.com/xiaomandujia/p/17931146.html)
- [2023最新中级难度Flask框架面试题,包含答案。刷题必备！记录一下。 - 小满独家 - 博客园 (cnblogs.com)](https://www.cnblogs.com/xiaomandujia/p/17934616.html)
- [一杯茶的时间，搞懂 RESTful API (apifox.com)](https://apifox.com/blog/a-cup-of-tea-time-to-understand-restful-api/)
- [Django 简介 | 菜鸟教程 (runoob.com)](https://www.runoob.com/django/django-intro.html)
- 
