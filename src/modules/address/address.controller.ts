import { Controller, Post, Body, Get } from '@nestjs/common';
import { JwtPayload, UserPayload } from 'common/interfaces';
import { CreateAddressDto } from 'common/dtos/create-address.dto';
import { AddressService } from './address.service';
import { Address } from './address.entity';


@Controller('address')
export class AddressController {
  constructor(
    private readonly addressService: AddressService,
  ) { }

  @Get('')
  async login(): Promise<Address[]> {
    return await this.addressService.findAll();
  }

  @Post('')
  async register(
    @Body() createAddressDto: CreateAddressDto,
  ): Promise<any> {
    return await this.addressService.create(createAddressDto);
  }
}