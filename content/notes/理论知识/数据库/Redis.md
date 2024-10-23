---
render: true
title: Redis
id: 281b389140
datetimeCreate: 2024-10-23 14:56:36
datetimeUpdate: 2024-10-23 17:40:37
---
---
# Redis 简介
Redis 是目前最受欢迎的 NoSQL 数据库, 其具备以下特性
- 基于内存运行, 能低延迟高并发
- 分布式架构, 可以无限扩展
- 由开源 ANSI C编写, 提供多语言的 API
- 支持多种数据结构, Key-value 存储系统
# Redis 应用场景

- 缓存系统, (热点数据, 高频读, 低频写)
- 计数器、限流器
- 发布订阅、排行榜
- 分布式锁、共享 SESSION、 队列
## Redis 数据结构
```mindmap
RedisObject
	字符串-STRING
		整数-INT
		字符串-RAW
	列表-LIST
		双端链表-LINKDIST
		压缩列表-ZIPLIST
	哈希表-HASH
		压缩列表-ZIPLIST
		字典-HT
	集合-SET
		整数集合-INTSET
		字典-HT
	有序集合-ZSET
		压缩列表-ZIPLIST
		跳跃表-SKIPLIST
```
备注：后面的是前面的底层实现
### 字符串-STRING
字符串-STRING是二进制安全的字符串, 意味着不仅可以存储字符串, 还能存储图片、视频等多种类型， 最大长度支持 512M
```mindmap
字符串-STRING
	相关命令
		GET/MGET
		SET/SETEX/MSET/MSETNX
		INCR/DECR
		GETSET
		DEL
```

### 列表-LIST
该类型是一个插入顺序排序的字符串集合, 基于双链表实现。
```mindmap
列表-LIST
	相关命令
		LPUSH/LPUSHX/LPOP/RPUSH/RPUSHX/RPOP/LINSERT/LSET
		LINDEX/LRANGE
		LLEN/LTRIM
```
### 哈希表-HASH
该类型是由k-v组成的map。其中，k-v都是字符串类型的。
```mindmap
哈希表-HASH
	相关命令
		HGET/HMGET/HGETALL
		HSET/HMSET/HSETNX
		HEXISTS/HLEN
		HKEYS/HDEL
		HVALS
```
### 集合-SET
集合-SET 是无序且元素唯一的列表

```mindmap
集合-SET
	相关命令
		SADD/SPOP/SMOVE/SCARD
		SINTER/SDIFF/SDIFFSTORE/SUNION
```
### 有序集合-ZSET
有序集合-ZSET 是通过每个元素关联一个double类型的分数权值，用这个权值来进行从小到大的排序。
```mindmap
集合-SET
	相关命令
		ZADD/ZPOP/ZMOVE/ZCARD/ZCOUNT
		ZINTER/ZDIFF/ZDIFFSTORE/ZUNION
```

## Redis 特性
```mindmap
Redis 特性
	简单动态字符串SDS (Simple Dynamic String)
	三大基本特性
		事务
		发布订阅
		Stream
```

### 简单动态字符串SDS (Simple Dynamic String)
因为C语言中传统字符串的缺陷，Redis自己构建了一种名为简单动态字符串的抽象类型，简称SDS，其结构如下：
|  | C 字符串 | SDS（REDIS 字符串） |
| --- | --- | --- |
| 获取字符串长度复杂度 | O(N) | O(1) |
| API安全 | 不安全 | 安全 |
| 缓冲区溢出 | 存在 | 不存在 |
| 修改字符串内存分配次数 | N次 | 最多N次 |
| 支持的内容 | 文本数据 | 文本、二进制数据 |

### 三大基本特性
#### 特性一，事务
- 命令序列化，按序执行
- 原子性
- 三阶段：开始事务-命令入队-执行事务
- 命令：MULTI、EXEC、DISCARD
#### 特性二，发布订阅（频道发布订阅）
- Redis 可以有任意个频道，每个频道负责不同的消息通讯
- Pub发送消息给频道，Sub接收频道的消息
- 发送就忘，“fire and forgot”
- 命令：publish、Subscribe、Psubcribe、Unsub
#### 特性三，Steam流
- Redis 5.0 新增
- 等待消费
- 消费组（组内竞争）
- 消费历史数据
- FIFO
## 参考
- https://www.cnblogs.com/powertoolsteam/p/redis.html