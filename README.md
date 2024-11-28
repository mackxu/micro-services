<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# nestjs微服务部署

## 关键字
- docker
- Dockerfile
- docker compose
- compose.yaml
- monorepo
- 桥接网络
- TCP
- GRPC
- 微服务
- protobuf

## 服务介绍
- user tcp服务
- book grpc服务
- getway 主服务，与user和book服务进行通信

## 启动

```bash
$ docker compose up --build
```

## 测试

- localhost:4000/sum
- localhost:4000/book/1