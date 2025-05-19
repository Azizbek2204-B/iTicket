import { Module } from '@nestjs/common';
import { VenueTypesService } from './venue-types.service';
import { VenueTypesController } from './venue-types.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { VenueTypeSchema } from './schemas/venue-type.schema';
import { TypeSchema } from '../types/schemas/type.schema';
import { VenueSchema } from '../venue/schemas/venue.schema';

@Module({
  imports:[
    MongooseModule.forFeature([
      {name:"VenueType",schema:VenueTypeSchema},
      {name:"Type",schema:TypeSchema},
      {name:"Venue",schema:VenueSchema},
    ])
  ],
  controllers: [VenueTypesController],
  providers: [VenueTypesService],
})
export class VenueTypesModule {}
