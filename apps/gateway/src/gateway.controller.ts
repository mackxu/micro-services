import { Controller, Get, Inject, Param } from '@nestjs/common';
import { GatewayService } from './gateway.service';
import { ClientGrpc, ClientProxy } from '@nestjs/microservices';

interface Book {
  id: number;
  name: string;
  desc: string;
}

interface BookService {
  findBook(param: { id: number }): Book;
}

@Controller()
export class GatewayController {
  constructor(private readonly gatewayService: GatewayService) {}

  @Inject('USER_SERVICE')
  private readonly userClient: ClientProxy;

  @Get('sum')
  sum() {
    return this.userClient.send('sum', [1, 2, 3, 4, 5]);
  }

  @Inject('BOOK_SERVICE')
  private readonly bookClient: ClientGrpc;
  private bookService: BookService;

  onModuleInit() {
    this.bookService = this.bookClient.getService<BookService>('BookService');
  }

  @Get('book/:id')
  findBook(@Param('id') id: number) {
    return this.bookService.findBook({ id });
  }

  @Get()
  getHello(): string {
    return this.gatewayService.getHello();
  }
}
