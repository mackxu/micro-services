import { Injectable } from '@nestjs/common';

@Injectable()
export class BookGrpcService {
  getHello(): string {
    return 'Hello World!';
  }
}
