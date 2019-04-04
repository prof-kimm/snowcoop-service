import { Controller, Post, Body, Get } from '@nestjs/common';
import { JwtPayload, UserPayload } from 'common/interfaces';

@Controller('address')
export class AddressController {
  constructor() { }

  @Get('')
  async login(): Promise<any> {
    return [
      {
        id: 1,
        street: '1385 Woodroffe Ave',
        city: 'Nepean',
        province: 'ON',
        postalCode: 'K2G 1V8',
        lat: 45.3483143,
        lng: -75.7584403,
      },
      {
        id: 2,
        street: '10 Cordova St',
        city: 'Nepean',
        province: 'ON',
        postalCode: 'K2G 1M7',
        lat: 45.3558026,
        lng: -75.7491805,
      },
      {
        id: 3,
        street: '92 Starwood Rd',
        city: 'Nepean',
        province: 'ON',
        postalCode: 'K2G 1Z5',
        lat: 45.3552559,
        lng: -75.7487076,
      },
      {
        id: 4,
        street: '84 Starwood Rd',
        city: 'Nepean',
        province: 'ON',
        postalCode: 'K2G 1Z5',
        lat: 45.3557138,
        lng: -75.7477536,
      },
      {
        id: 5,
        street: '76 B Starwood Rd',
        city: 'Nepean',
        province: 'ON',
        postalCode: 'K2G 1Z5',
        lat: 45.355987,
        lng: -75.747058,
      }
    ];
  }
}