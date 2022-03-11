import { Controller, Get } from '@nestjs/common';
import { UserService } from './app.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  listAll() {
    return this.userService.findAll();
  }
}
