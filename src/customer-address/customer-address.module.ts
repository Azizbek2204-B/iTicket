import { Module } from "@nestjs/common";
import { CustomerAddressService } from "./customer-address.service";
import { CustomerAddressController } from "./customer-address.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { CustomerAddressSchema } from "./schemas/customer-address.schema";
import { CustomerSchema } from "../customer/schemas/customer.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: "CustomerAddress",
        schema: CustomerAddressSchema,
      },
      {
        name: "Customer",
        schema: CustomerSchema,
      },
    ]),
  ],
  controllers: [CustomerAddressController],
  providers: [CustomerAddressService],
})
export class CustomerAddressModule {}
