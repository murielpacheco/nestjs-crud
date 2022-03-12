import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
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

  @Put(':id')
  update(@Param() params, @Body() body: User) {
    return this.userService.updateUser(params.id, body);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Res() res: Response, @Param() params) {
    this.userService.deleteUser(params.id);

    return res.json({ message: 'User deleted successfully' });
  }
}
