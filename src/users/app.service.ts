import { Injectable } from '@nestjs/common';

type UsersProps = {
  id: string;
  name: string;
  email: string;
};

@Injectable()
export class UserService {
  private users: UsersProps[] = [
    {
      id: '1',
      name: 'John Doe',
      email: 'adsda',
    },
  ];

  findAll() {
    return this.users;
  }
}
