import { Module } from '@nestjs/common';
import { VenuPhotoService } from './venu-photo.service';
import { VenuPhotoController } from './venu-photo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { VenuPhotoSchema } from './schemas/venu-photo.schema';

@Module({
  imports:[
    MongooseModule.forFeature([
      {
        name:"VenuPhoto",
        schema:VenuPhotoSchema
      },
      {
        name:"Venue",
        schema:VenuPhotoSchema
      }
    ])
  ],
  controllers: [VenuPhotoController],
  providers: [VenuPhotoService],
})
export class VenuPhotoModule {}
