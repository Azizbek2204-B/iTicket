import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument, Types } from "mongoose";

export type VenueDocument = HydratedDocument<Venue>;

@Schema()
export class Venue {
    @Prop()
    name: string

    @Prop()
    address: string

    @Prop()
    location: string

    @Prop()
    site: string

    @Prop()
    phone: string

    @Prop()
    schema:string

    @Prop({
        type:mongoose.Schema.Types.ObjectId,
        ref:"Region"
    })
    region_id:Types.ObjectId

    @Prop({
        type:mongoose.Schema.Types.ObjectId,
        ref:"District"
    })
    district_id:Types.ObjectId
}


export const VenueSchema = SchemaFactory.createForClass(Venue);