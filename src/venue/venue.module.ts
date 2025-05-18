import { Module } from "@nestjs/common";
import { VenueService } from "./venue.service";
import { VenueController } from "./venue.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { VenueSchema } from "./schemas/venue.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "Venue", schema: VenueSchema }]),
  ],
  controllers: [VenueController],
  providers: [VenueService],
})
export class VenueModule {}
