import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern('sum')
  sum(data: number[]) {
    return data.reduce((a, b) => a + b, 0);
  }
}
