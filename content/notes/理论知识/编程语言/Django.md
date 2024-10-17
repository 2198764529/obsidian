---
title: Django
id: 469ee4c4d7
datetimeCreate: 2024-09-12 16:23:49
datetimeUpdate: 2024-10-17 20:23:36
---

# 架构图

```uml
card "Brown（浏览器）" as Brown
card "Urls（路由）" as Urls
card "View（视图）" as View
card "Model（模型）" as Model
card "Template（模板）" as Template
database "database（数据库）" as database

Brown --> Urls: 发送请求
Urls --> View: 路由分发
View <--> Model: 操作数据/返回结果
View <--> Template:调用模板
Model <--> database: ORM

Template --> Brown: 返回响应
```

备注:
- ORM: object relation mapping

# MVT架构层
## Model 模型层
```python
from django.db import models

class Person(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
```
### 模型

#### 模型操作
以下模型操作创建、删除、更改、保存， 读取操作属于 QuerySet 那部分
```python
# 创建模型
class Book(models.Model):
    title = models.CharField(max_length=100)

    @classmethod
    def create(cls, title):
        book = cls(title=title)
        # do something with the book
        return book
book = Book.create("Pride and Prejudice")

# 删除模型
Model.delete(using=DEFAULT_DB_ALIAS, keep_parents=False)

# 更改模型
Model.update(field1='new_value')

# 保存模型:模型更改会保存到数据库
Model.save(*, force_insert=False, force_update=False, using=DEFAULT_DB_ALIAS, update_fields=None)


```

#### 模型读取（QuerySet）
以下是 Django QuerySet 中相关方法和操作符的详细分类及说明，按照你提供的结构整理：

##### 返回新 QuerySet 的方法

```python
# 1. filter()
# 说明：返回符合条件的 QuerySet。
filtered_queryset = MyModel.objects.filter(field='value')

# 2. exclude()
# 说明：返回不符合条件的 QuerySet。
excluded_queryset = MyModel.objects.exclude(field='value')

# 3. annotate()
# 说明：为每个对象添加聚合值。
annotated_queryset = MyModel.objects.annotate(total=Count('related_model'))

# 4. alias()
# 说明：为特定字段或表达式创建别名。
aliased_queryset = MyModel.objects.annotate(new_field=F('old_field'))

# 5. order_by()
# 说明：对 QuerySet 进行排序。
ordered_queryset = MyModel.objects.order_by('field')

# 6. reverse()
# 说明：反转 QuerySet 的顺序。
reversed_queryset = MyModel.objects.order_by('field').reverse()

# 7. distinct()
# 说明：返回唯一的结果。
distinct_queryset = MyModel.objects.distinct()

# 8. values()
# 说明：返回字典形式的结果集。
values_queryset = MyModel.objects.values('field1', 'field2')

# 9. values_list()
# 说明：返回元组形式的结果集。
values_list_queryset = MyModel.objects.values_list('field1', flat=True)

# 10. dates()
# 说明：返回特定字段的日期列表。
dates_queryset = MyModel.objects.dates('date_field', 'year')

# 11. datetimes()
# 说明：返回特定字段的日期时间列表。
datetimes_queryset = MyModel.objects.datetimes('datetime_field', 'month')

# 12. none()
# 说明：返回一个空的 QuerySet。
none_queryset = MyModel.objects.none()

# 13. all()
# 说明：返回所有的实例。
all_queryset = MyModel.objects.all()

# 14. union()
# 说明：返回两个 QuerySet 的并集。
union_queryset = MyModel.objects.filter(field='value1').union(MyModel.objects.filter(field='value2'))

# 15. intersection()
# 说明：返回两个 QuerySet 的交集。
intersection_queryset = MyModel.objects.filter(field='value1').intersection(MyModel.objects.filter(field='value2'))

# 16. difference()
# 说明：返回两个 QuerySet 的差集。
difference_queryset = MyModel.objects.filter(field='value1').difference(MyModel.objects.filter(field='value2'))

# 17. select_related()
# 说明：使用 SQL JOIN 加载相关对象。
related_queryset = MyModel.objects.select_related('related_model')

# 18. prefetch_related()
# 说明：使用独立查询加载相关对象。
prefetched_queryset = MyModel.objects.prefetch_related('related_model_set')

# 19. extra()
# 说明：允许添加额外的 SQL 片段。
extra_queryset = MyModel.objects.extra(select={'new_field': 'old_field * 2'})

# 20. defer()
# 说明：延迟加载特定字段。
deferred_queryset = MyModel.objects.defer('field_to_defer')

# 21. only()
# 说明：只加载特定字段。
only_queryset = MyModel.objects.only('field1', 'field2')

# 22. using()
# 说明：指定使用的数据库。
using_queryset = MyModel.objects.using('my_database')

# 23. select_for_update()
# 说明：在事务中锁定行以防止并发更新。
locked_queryset = MyModel.objects.select_for_update()

# 24. raw()
# 说明：执行原始 SQL 查询并返回模型实例。
raw_queryset = MyModel.objects.raw('SELECT * FROM myapp_mymodel WHERE field=%s', [value])
```

##### 返回新 QuerySet 的操作符

```python
# 1. AND（&）
# 说明：连接多个查询条件。
combined_queryset = MyModel.objects.filter(field1='value1') & MyModel.objects.filter(field2='value2')

# 2. OR（|）
# 说明：连接多个查询条件。
combined_queryset = MyModel.objects.filter(field1='value1') | MyModel.objects.filter(field2='value2')

# 3. XOR (^)
# 说明：连接多个查询条件（不常用）。
combined_queryset = MyModel.objects.filter(field1='value1') ^ MyModel.objects.filter(field2='value2')
```

##### 不返回 QuerySet 的方法

```python
# 1. get()
# 说明：获取单个实例，若不存在则抛出异常。
single_instance = MyModel.objects.get(id=1)

# 2. create()
# 说明：创建并保存新实例。
new_instance = MyModel.objects.create(field='value')

# 3. get_or_create()
# 说明：获取现有实例或创建新实例。
instance, created = MyModel.objects.get_or_create(field='value')

# 4. update_or_create()
# 说明：更新现有实例或创建新实例。
instance, created = MyModel.objects.update_or_create(field='value', defaults={'field2': 'new_value'})

# 5. bulk_create()
# 说明：批量创建多个实例。
MyModel.objects.bulk_create([MyModel(field='value1'), MyModel(field='value2')])

# 6. bulk_update()
# 说明：批量更新多个实例。
MyModel.objects.bulk_update([instance1, instance2], ['field'])

# 7. count()
# 说明：返回 QuerySet 中的实例数量。
count = MyModel.objects.count()

# 8. in_bulk()
# 说明：返回一个字典，键为主键，值为实例。
bulk_dict = MyModel.objects.in_bulk()

# 9. iterator()
# 说明：返回一个迭代器，逐条获取数据。
for instance in MyModel.objects.iterator():
    pass

# 10. 使用服务器端游标
# 说明：通过使用服务器端游标来处理大数据集。

# 11. 没有服务器端游标
# 说明：默认情况下，Django 使用客户端游标。

# 12. latest()
# 说明：返回最新的实例。
latest_instance = MyModel.objects.latest('created_at')

# 13. earliest()
# 说明：返回最早的实例。
earliest_instance = MyModel.objects.earliest('created_at')

# 14. first()
# 说明：返回第一个实例。
first_instance = MyModel.objects.first()

# 15. last()
# 说明：返回最后一个实例。
last_instance = MyModel.objects.last()

# 16. aggregate()
# 说明：对 QuerySet 进行聚合计算。
result = MyModel.objects.aggregate(Avg('field'))

# 17. exists()
# 说明：检查 QuerySet 是否存在任何实例。
exists = MyModel.objects.exists()

# 18. contains()
# 说明：用于查询是否包含特定值。

# 19. update()
# 说明：更新 QuerySet 中的所有实例。

# 20. 有序的查询集
# 说明：QuerySet 默认是有序的。

# 21. delete()
# 说明：删除 QuerySet 中的所有实例。

# 22. as_manager()
# 说明：将 QuerySet 转换为管理器。

# 23. explain()
# 说明：获取 SQL 查询的执行计划。
```

##### Field 查找

```python
# 1. exact
# 说明：精确匹配。
MyModel.objects.filter(field__exact='value')

# 2. iexact
# 说明：不区分大小写的精确匹配。
MyModel.objects.filter(field__iexact='value')

# 3. contains
# 说明：包含匹配。
MyModel.objects.filter(field__contains='value')

# 4. icontains
# 说明：不区分大小写的包含匹配。
MyModel.objects.filter(field__icontains='value')

# 5. in
# 说明：匹配字段值在给定列表中。
MyModel.objects.filter(field__in=['value1', 'value2'])

# 6. gt
# 说明：大于匹配。
MyModel.objects.filter(field__gt=10)

# 7. gte
# 说明：大于等于匹配。
MyModel.objects.filter(field__gte=10)

# 8. lt
# 说明：小于匹配。
MyModel.objects.filter(field__lt=10)

# 9. lte
# 说明：小于等于匹配。
MyModel.objects.filter(field__lte=10)

# 10. startswith
# 说明：以指定值开头匹配。
MyModel.objects.filter(field__startswith='value')

# 11. istartswith
# 说明：不区分大小写的开头匹配。
MyModel.objects.filter(field__istartswith='value')

# 12. endswith
# 说明：以指定值结尾匹配。
MyModel.objects.filter(field__endswith='value')

# 13. iendswith
# 说明：不区分大小写的结尾匹配。
MyModel.objects.filter(field__endswith='value')
```
### 模型字段
在 Django 中，模型字段用于定义数据库表的结构和数据类型。以下是 Django 常用模型字段的参考列表及其简要说明：
#### 字段选项
```python
# 1. null：指定数据库中是否允许该字段存储空值（NULL）。
field = models.CharField(max_length=100, null=True)

# 2. blank：指定在表单中是否允许该字段为空。
field = models.CharField(max_length=100, blank=True)

# 3. choices：提供一个可选值的列表，限制字段的可选值。
STATUS_CHOICES = [
    ('draft', 'Draft'),
    ('published', 'Published'),
]
field = models.CharField(max_length=10, choices=STATUS_CHOICES)

# 4. db_column：指定数据库中该字段对应的列名。
field = models.CharField(max_length=100, db_column='custom_column_name')

# 5. db_comment：在数据库中为该字段添加注释（仅支持某些数据库）。
field = models.CharField(max_length=100, db_comment='This is a custom comment')

# 6. db_default：在数据库中为该字段设置默认值（仅在某些数据库中支持）。
field = models.CharField(max_length=100, db_default='default_value')

# 7. db_index：为该字段创建数据库索引。
field = models.CharField(max_length=100, db_index=True)

# 8. db_tablespace：指定数据库表空间（仅支持某些数据库）。
field = models.CharField(max_length=100, db_tablespace='my_tablespace')

# 9. default：设置字段的默认值。
field = models.CharField(max_length=100, default='default_value')

# 10. editable：指定该字段是否在 Django Admin 或表单中可编辑。
field = models.CharField(max_length=100, editable=False)

# 11. error_messages：自定义该字段的错误消息。
field = models.CharField(
    max_length=100,
    error_messages={
        'blank': 'This field cannot be empty.',
    }
)

# 12. help_text：提供字段的帮助文本，通常在表单中显示。
field = models.CharField(max_length=100, help_text='Enter your name here.')

# 13. primary_key：指定该字段作为主键。
field = models.AutoField(primary_key=True)

# 14. unique：确保该字段的值在数据库中是唯一的。
field = models.CharField(max_length=100, unique=True)

# 15. unique_for_date：确保该字段的值在给定日期内是唯一的。
field = models.CharField(max_length=100, unique_for_date='date_field')

# 16. unique_for_month：确保该字段的值在给定月份内是唯一的。
field = models.CharField(max_length=100, unique_for_month='date_field')

# 17. unique_for_year：确保该字段的值在给定年份内是唯一的。
field = models.CharField(max_length=100, unique_for_year='date_field')

# 18. verbose_name：为字段提供一个易于阅读的名称。
field = models.CharField(max_length=100, verbose_name='Full Name')

# 19. validators：提供一个验证器列表，用于验证字段值的有效性。
from django.core.validators import MinValueValidator

field = models.IntegerField(validators=[MinValueValidator(0)])

```

#### 字段类型

```python
# 1. AutoField：自动递增的整数字段，通常用于主键。
id = models.AutoField(primary_key=True)

# 2. BigAutoField：自动递增的大整数字段，适用于需要更大范围的主键。
id = models.BigAutoField(primary_key=True)

# 3. BigIntegerField：存储大整数。
large_number = models.BigIntegerField()

# 4. BinaryField：用于存储二进制数据。
data = models.BinaryField()

# 5. BooleanField：存储布尔值（True 或 False）。
is_active = models.BooleanField(default=True)

# 6. CharField：用于存储字符串，需指定最大长度。
name = models.CharField(max_length=100)

# 7. DateField：用于存储日期。
birth_date = models.DateField()

# 8. DateTimeField：用于存储日期和时间。
created_at = models.DateTimeField(auto_now_add=True)

# 9. DecimalField：存储固定精度的十进制数，需指定最大位数和小数位数。
price = models.DecimalField(max_digits=10, decimal_places=2)

# 10. DurationField：用于存储时间间隔。
duration = models.DurationField()

# 11. EmailField：用于存储电子邮件地址，自动验证格式。
email = models.EmailField()

# 12. FileField：用于存储文件，需指定上传路径。
file = models.FileField(upload_to='uploads/')

# 13. FilePathField：用于存储文件系统路径。
file_path = models.FilePathField(path='/path/to/files')

# 14. FloatField：存储浮点数。
price = models.FloatField()

# 15. GenericIPAddressField：用于存储 IPv4 或 IPv6 地址。
ip_address = models.GenericIPAddressField()

# 16. ImageField：专门用于存储图像文件，需指定上传路径。
image = models.ImageField(upload_to='images/')

# 17. IntegerField：存储整数。
age = models.IntegerField()

# 18. JSONField：用于存储 JSON 数据（仅支持 PostgreSQL 和 SQLite）。
data = models.JSONField()

# 19. PositiveBigIntegerField：存储大正整数。
positive_large_number = models.PositiveBigIntegerField()

# 20. PositiveIntegerField：存储正整数。
positive_number = models.PositiveIntegerField()

# 21. PositiveSmallIntegerField：存储小正整数。
positive_small_number = models.PositiveSmallIntegerField()

# 22. SlugField：用于存储 URL 友好的字符串，通常用于简化 URL。
slug = models.SlugField(max_length=50)

# 23. SmallAutoField：自动递增的小整数字段。
id = models.SmallAutoField(primary_key=True)

# 24. SmallIntegerField：存储小整数。
small_number = models.SmallIntegerField()

# 25. TextField：用于存储长文本。
description = models.TextField()

# 26. TimeField：用于存储时间。
time = models.TimeField()

# 27. URLField：用于存储 URL，自动验证格式。
website = models.URLField()

# 28. UUIDField：用于存储 UUID。
uuid = models.UUIDField(auto_created=True, editable=False)

```
#### 字段约束

```python

#  CheckConstraint：用于定义检查约束。
check_constraint = models.CheckConstraint(
    check=Q(field_name__gte=0),
    name='check_positive_value'
)

# UniqueConstraint：用于定义唯一约束。

# 1. deferrable：指定约束是否可延迟检查。
from django.db.models import Deferrable, UniqueConstraint

UniqueConstraint(
    name="unique_order",
    fields=["order"],
    deferrable=Deferrable.DEFERRED,
)

# 2. include：用于指定在唯一约束中包含的其他字段。
UniqueConstraint(name="unique_booking", fields=["room", "date"], include=["full_name"])

# 3. opclasses：用于定义字段的操作类。
UniqueConstraint(
    name="unique_username", fields=["username"], opclasses=["varchar_pattern_ops"]
)

# 4. nulls_distinct：指定 NULL 值是否被视为不同的值。
UniqueConstraint(name="ordering", fields=["ordering"], nulls_distinct=False)

```


### View 视图层
### Template 模板层

### 命令
### Django 基于什么架构?

Django 基于MTV架构，即Model Template Controler, 模型、模版、控制器
MTV 是由 MVC 改造而来。


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
