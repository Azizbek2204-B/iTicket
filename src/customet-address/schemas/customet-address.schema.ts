import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";
import { Customer } from "../../customer/schemas/customer.schema";

export type CustomerAddressDocument = HydratedDocument<CustomerAddress>;

@Schema()
export class CustomerAddress {
  @Prop({type:Types.ObjectId, ref:()=>Customer})
  customer_id:Types.ObjectId

  @Prop()
  name: string

  @Prop()
  country_id: number

  @Prop()
  region_id: number

  @Prop()
  district_id: number

  @Prop()
  street: string

  @Prop()
  house: string

  @Prop()
  flat: number

  @Prop()
  location: string

  @Prop()
  post_index: string

  @Prop()
  info: string
}

export const CustomerAddressSchema = SchemaFactory.createForClass(CustomerAddress);