import { NestFactory } from '@nestjs/core';
import { BookGrpcModule } from './book_grpc.module';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(BookGrpcModule, {
    transport: Transport.GRPC,
    options: {
      url: '0.0.0.0:50052',
      package: 'book',
      protoPath: join(__dirname, 'book/book.proto'),
    },
  });
  await app.listen();
}
bootstrap();
