import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument, Types } from "mongoose";

export type VenuPhotoDocument = HydratedDocument<VenuPhoto>;

@Schema()
export class VenuPhoto {
    @Prop({
        type:mongoose.Schema.Types.ObjectId,
        ref:"Venue"
    })
    venue_id:Types.ObjectId

    @Prop()
    url:string
}

export const VenuPhotoSchema = SchemaFactory.createForClass(VenuPhoto);