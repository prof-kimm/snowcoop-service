import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository, EntityManager } from 'typeorm';
import { CreateUserDto } from '../../common/dtos/create-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private readonly usersRepository: Repository<User>) { }

  async findOne(conditions: Partial<User>): Promise<User> {
    const user = await this.usersRepository.findOne(conditions);
    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }

  async create(
    userDto: CreateUserDto,
    entityManager?: EntityManager,
  ): Promise<User> {
    const user = new User(userDto);
    return await (entityManager
      ? entityManager.save(user)
      : this.usersRepository.save(user));
  }
}
