import { Module } from '@nestjs/common';
import { AddressController } from './address.controller';

@Module({
  imports: [],
  providers: [],
  controllers: [AddressController],
  exports: [],
})
export class AddressModule { }
