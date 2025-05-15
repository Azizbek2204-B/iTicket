import { Module } from '@nestjs/common';
import { CustometAddressService } from './customet-address.service';
import { CustometAddressController } from './customet-address.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerAddressSchema } from './schemas/customet-address.schema';
import { CustomerSchema } from '../customer/schemas/customer.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'CustomerAddress',
        schema: CustomerAddressSchema,
      },
      {
        name: 'Customer',
        schema: CustomerSchema,
      }
    ])
  ],
  controllers: [CustometAddressController],
  providers: [CustometAddressService],
})
export class CustometAddressModule {}
