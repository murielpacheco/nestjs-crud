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
      throw new Error('Email already in use');
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

  updateUser(id: string, { name, email }: User) {
    const user = this.users.find((user) => user.id === id);

    if (!user) {
      throw new Error('User not found');
    }

    user.name = name;
    user.email = email;

    return user;
  }

  deleteUser(id: string) {
    const userIndex = this.users.findIndex((user) => user.id === id);

    if (userIndex === -1) {
      throw new Error('User not found');
    }

    this.users.splice(userIndex, 1);
  }
}
