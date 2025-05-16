import {
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length,
} from "class-validator";

export class CreateCustomerAddressDto {
  @IsMongoId()
  @IsNotEmpty()
  customer_id: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsMongoId()
  @IsNotEmpty()
  district_id: string;

  @IsString()
  @IsNotEmpty()
  street: string;

  @IsString()
  @IsNotEmpty()
  house: string;

  @IsNumber()
  @IsOptional()
  flat?: number;

  @IsString()
  @IsOptional()
  location?: string;

  @IsString()
  @IsOptional()
  @Length(5, 10)
  post_index?: string;

  @IsString()
  @IsOptional()
  info?: string;
}
