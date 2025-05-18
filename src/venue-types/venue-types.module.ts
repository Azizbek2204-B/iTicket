import { Module } from '@nestjs/common';
import { VenueTypesService } from './venue-types.service';
import { VenueTypesController } from './venue-types.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { VenueTypeSchema } from './schemas/venue-type.schema';

@Module({
  imports:[
    MongooseModule.forFeature([
      {name:"VenueType",schema:VenueTypeSchema}
    ])
  ],
  controllers: [VenueTypesController],
  providers: [VenueTypesService],
})
export class VenueTypesModule {}
