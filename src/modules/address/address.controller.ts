import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { JwtPayload, UserPayload } from 'common/interfaces';
import { CreateAddressDto } from 'common/dtos/create-address.dto';
import { AddressService } from './address.service';
import { Address } from './address.entity';
import { AuthGuard } from '@nestjs/passport';
import { AuthUser } from 'common/decorators/user.decorator';
import { User } from '../user/user.entity';

@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Get('')
  @UseGuards(AuthGuard('jwt'))
  async getAddressList(@AuthUser() authUser: User): Promise<Address[]> {
    return await this.addressService.findAll();
  }

  @Post('')
  @UseGuards(AuthGuard('jwt'))
  async createAddress(
    @AuthUser() authUser: User,
    @Body() createAddressDto: CreateAddressDto,
  ): Promise<any> {
    return await this.addressService.create(createAddressDto);
  }
}
