import { Module } from "@nestjs/common";
import { CustometCardService } from "./customet-card.service";
import { CustometCardController } from "./customet-card.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { CustomerCardSchema } from "./schemas/customet-card.schema";
import { CustomerSchema } from "../customer/schemas/customer.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: "CustomerCard", schema: CustomerCardSchema },
      { name: "Customer", schema: CustomerSchema },
    ]),
  ],
  controllers: [CustometCardController],
  providers: [CustometCardService],
})
export class CustometCardModule {}
