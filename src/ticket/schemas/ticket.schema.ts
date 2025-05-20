import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument, Types } from "mongoose";

export type TicketDocument = HydratedDocument<Ticket>;

@Schema()
export class Ticket {
    @Prop({
        type:mongoose.Schema.Types.ObjectId,
        ref:"Event"
    })
    event_id: Types.ObjectId

    @Prop({
        type:mongoose.Schema.Types.ObjectId,
        ref:"Seat"
    })
    seat_id:Types.ObjectId

    @Prop()
    price:number

    @Prop()
    service_fee:number

    @Prop({
        type:mongoose.Schema.Types.ObjectId,
        ref:"TicketStatus"
    })
    status_id: Types.ObjectId

    @Prop()
    ticket_type:number
}

export const TicketSchema = SchemaFactory.createForClass(Ticket);