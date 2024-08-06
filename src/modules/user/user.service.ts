import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  public async findOne(id: number) {}

  public async updateLastLogin(id: number) {}
}
