import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { CustomerCard } from "../../customer-card/schemas/customer-card.schema";

export type CustomerDocument = HydratedDocument<Customer>;

@Schema()
export class Customer {
  @Prop({ required: true })
  first_name: string;

  @Prop({ required: true })
  last_name: string;

  @Prop({ required: true, unique: true })
  phone: string;

  @Prop({ required: true })
  hashed_password: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop()
  birth_day: Date;

  @Prop({ enum: ["male", "female"], required: true })
  gender: "male" | "female";

  @Prop({ required: true })
  lang_id: number;

  @Prop()
  hashed_refresh_token: string;

  @Prop({
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "CustomerCard",
      },
    ],
  })
  customer_cards: CustomerCard[];

  @Prop({
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "CustomerAddress",
      },
    ],
  })
  customer_addresses: CustomerCard[];
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
