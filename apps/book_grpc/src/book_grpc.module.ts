import { Module } from '@nestjs/common';
import { BookGrpcController } from './book_grpc.controller';
import { BookGrpcService } from './book_grpc.service';

@Module({
  imports: [],
  controllers: [BookGrpcController],
  providers: [BookGrpcService],
})
export class BookGrpcModule {}
