import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";
import { Region } from "../../region/schemas/region.schema";

export type DistrictDocument = HydratedDocument<District>;

@Schema()
export class District {
  @Prop({ required: true })
  name: string;

  @Prop({type:Types.ObjectId, ref: ()=>Region})
  region_id: Types.ObjectId
}

export const DistrictSchema = SchemaFactory.createForClass(District);