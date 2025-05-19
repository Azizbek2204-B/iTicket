import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type SeatTypeDocument = HydratedDocument<SeatType>;

export class SeatType {
    @Prop()
    name:string
}

export const SeatTypeSchema = SchemaFactory.createForClass(SeatType);