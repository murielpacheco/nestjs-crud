import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from './User';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Post()
  createUser(@Body() body: User) {
    return this.userService.createUser(body);
  }

  @Get(':id')
  findOne(@Param() params) {
    return this.userService.findById(params.id);
  }
}
