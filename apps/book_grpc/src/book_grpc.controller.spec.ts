import { Test, TestingModule } from '@nestjs/testing';
import { BookGrpcController } from './book_grpc.controller';
import { BookGrpcService } from './book_grpc.service';

describe('BookGrpcController', () => {
  let bookGrpcController: BookGrpcController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BookGrpcController],
      providers: [BookGrpcService],
    }).compile();

    bookGrpcController = app.get<BookGrpcController>(BookGrpcController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(bookGrpcController.getHello()).toBe('Hello World!');
    });
  });
});
