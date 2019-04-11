import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Address } from './address.entity';
import { Repository, EntityManager } from 'typeorm';
import { CreateAddressDto } from '../../common/dtos/create-address.dto';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(Address)
    private readonly usersRepository: Repository<Address>,
  ) {}

  async findAll(): Promise<Address[]> {
    const addresses = await this.usersRepository.find();
    return addresses;
  }

  async create(
    addressDto: CreateAddressDto,
    entityManager?: EntityManager,
  ): Promise<Address> {
    const address = new Address(addressDto);
    return await (entityManager
      ? entityManager.save(address)
      : this.usersRepository.save(address));
  }
}
