import { Controller, Get } from '@nestjs/common';
import { BookGrpcService } from './book_grpc.service';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class BookGrpcController {
  constructor(private readonly bookGrpcService: BookGrpcService) {}

  @Get()
  getHello(): string {
    return this.bookGrpcService.getHello();
  }

  @GrpcMethod('BookService', 'findBook')
  findBook(data: { id: number }) {
    const items = [
      { id: 1, name: '前端调试通关秘籍', desc: '网页和 node 调试' },
      { id: 2, name: 'Nest 通关秘籍', desc: 'Nest 和各种后端中间件' },
    ];
    return items.find(({ id }) => id === data.id);
  }
}
