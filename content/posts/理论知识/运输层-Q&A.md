---
title: 运输层-Q&A
id: b69cfc1dad
datetimeCreate: 2023-09-21 14:56:31
datetimeUpdate: 2023-10-25 15:11:47
---

### 运输层是干啥的？为啥会有运输层

运输层是为进程与进程之间通信服务用的，规定了进程与进程之间应该以何种协议进行传输数据。

如果没有运输层，通信数据的传输将不可靠稳定，从而影响整个网络的通信速度质量。

### 运输层包括哪些协议内容？这些协议内容有哪些异同点？

运输层主要包括TCP【传输控制协议】协议和UDP【用户数据报协议】协议。

不同点：

- UDP 不需要建立连接直接发送数据包，TCP需要进行三次握手再发送数据
- UDP支持一对一、一对多、多对一、多对多的相互通信，TCP支持一对一的点对点通信
- UDP不保证数据传输能顺利抵达目的，TCP通过一些内部协议来保证数据传输的一定抵达目的

### TCP 协议的三次握手四次挥手过程是怎么样的？

三次握手是指客户端和服务端之间建立连接的过程，而四次挥手则是两者释放连接的过程。



第一次握手：客户向服务端主动发送信号【SYN】，具体内容为我已经准备好同步了，如果你要开始与同步，发送一个确认码ack给我（Acknowledge number，值我发送的随机码+1），代表你真的收到我发的东西了。