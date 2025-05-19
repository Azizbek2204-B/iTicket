import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type HumanCategoryDocument = HydratedDocument<HumanCategory>

export class HumanCategory {
    @Prop()
    name: string

    @Prop()
    start_age: number

    @Prop()
    finish_age: number

    @Prop()
    gender:'male' | 'female'
}

export const HumanCategorySchema = SchemaFactory.createForClass(HumanCategory);