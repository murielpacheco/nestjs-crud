import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { User } from './User';

@Injectable()
export class UserService {
  private users: User[] = [];

  findAll() {
    return this.users;
  }

  createUser({ name, email }: User) {
    const userAlreadyExists = this.users.find((user) => user.email === email);

    if (userAlreadyExists) {
      throw new Error('User already exists');
    }

    const user = {
      id: randomUUID(),
      name,
      email,
    };

    this.users.push(user);

    return user;
  }

  findById(id: string) {
    return this.users.find((user) => user.id === id);
  }
}
