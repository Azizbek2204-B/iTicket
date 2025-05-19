import { Module } from '@nestjs/common';
import { TypesService } from './types.service';
import { TypesController } from './types.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { VenueTypeSchema } from '../venue-types/schemas/venue-type.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Type',
        schema: VenueTypeSchema
      }
    ])
  ],
  controllers: [TypesController],
  providers: [TypesService],
})
export class TypesModule {}
