import { Module } from "@nestjs/common";
import { EventTypeService } from "./event_type.service";
import { EventTypeController } from "./event_type.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { EventTypeSchema } from "./schemas/event_type.schemas";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "EventType", schema: EventTypeSchema }]),
  ],
  controllers: [EventTypeController],
  providers: [EventTypeService],
})
export class EventTypeModule {}
