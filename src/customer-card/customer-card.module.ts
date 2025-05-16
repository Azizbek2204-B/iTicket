import { Module } from "@nestjs/common";
import { CustomerCardService } from "./customer-card.service";
import { CustomerCardController } from "./customer-card.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { CustomerCardSchema } from "./schemas/customer-card.schema";
import { CustomerSchema } from "../customer/schemas/customer.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: "CustomerCard", schema: CustomerCardSchema },
      { name: "Customer", schema: CustomerSchema },
    ]),
  ],
  controllers: [CustomerCardController],
  providers: [CustomerCardService],
})
export class CustomerCardModule {}
