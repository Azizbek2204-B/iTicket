import { IsBoolean, IsMongoId, IsNotEmpty, IsOptional, IsPhoneNumber, IsString, Length, Matches } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateCustomerCardDto {
  @IsMongoId()
  @IsNotEmpty()
  customer_id: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsPhoneNumber('UZ')
  @IsNotEmpty()
  phone_number: string;

  @IsString()
  @Length(16, 16)
  @Matches(/^\d{16}$/, { message: 'Karta raqami faqat 16 ta raqamdan iborat bo‘lishi kerak' })
  number: string;

  @IsString()
  @Length(4, 4)
  @Matches(/^\d{4}$/, { message: 'Yil 4 ta raqam bo‘lishi kerak' })
  year: string;

  @IsString()
  @Length(2, 2)
  @Matches(/^(0[1-9]|1[0-2])$/, { message: 'Oy 01 dan 12 gacha bo‘lishi kerak' })
  month: string;

  @IsBoolean()
  @Type(() => Boolean)
  is_active: boolean;

  @IsBoolean()
  @Type(() => Boolean)
  is_main: boolean;
}
