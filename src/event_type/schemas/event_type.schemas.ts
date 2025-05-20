import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class EventType extends Document {
  @Prop()
  name: string;

  @Prop({ type: Types.ObjectId, ref: 'EventType', default: null })
  parent_event_type_id: Types.ObjectId | null;
}

export const EventTypeSchema = SchemaFactory.createForClass(EventType);
