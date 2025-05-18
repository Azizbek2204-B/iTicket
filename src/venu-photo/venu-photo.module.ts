import { Module } from '@nestjs/common';
import { VenuPhotoService } from './venu-photo.service';
import { VenuPhotoController } from './venu-photo.controller';

@Module({
  controllers: [VenuPhotoController],
  providers: [VenuPhotoService],
})
export class VenuPhotoModule {}
