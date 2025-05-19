import { Prop, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument, Types } from "mongoose";

export type SeatDocument = HydratedDocument<Seat>;

export class Seat {
    @Prop()
    sector:number

    @Prop()
    row_number:number

    @Prop()
    number:number

    @Prop({
        type:mongoose.Schema.Types.ObjectId,
        ref:"Value"
    })
    value_id:Types.ObjectId

    @Prop({
        type:mongoose.Schema.Types.ObjectId,
        ref:"SeatType"
    })
    seat_type_id:Types.ObjectId

    @Prop()
    location_in_schema:number
}

export const SeatSchema = SchemaFactory.createForClass(Seat);