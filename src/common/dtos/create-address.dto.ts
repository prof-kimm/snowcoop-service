import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateAddressDto {
  @IsNotEmpty()
  @IsString()
  readonly street: string;

  @IsNotEmpty()
  @IsString()
  readonly city: string;

  @IsNotEmpty()
  @IsString()
  readonly province: string;

  @IsNotEmpty()
  @IsString()
  readonly postalCode: string;

  @IsNotEmpty()
  @IsNumber()
  readonly lat: number;

  @IsNotEmpty()
  @IsNumber()
  readonly lng: number;
}