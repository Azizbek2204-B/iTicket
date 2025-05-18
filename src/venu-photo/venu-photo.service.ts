import { Injectable } from '@nestjs/common';
import { CreateVenuPhotoDto } from './dto/create-venu-photo.dto';
import { UpdateVenuPhotoDto } from './dto/update-venu-photo.dto';

@Injectable()
export class VenuPhotoService {
  create(createVenuPhotoDto: CreateVenuPhotoDto) {
    return 'This action adds a new venuPhoto';
  }

  findAll() {
    return `This action returns all venuPhoto`;
  }

  findOne(id: number) {
    return `This action returns a #${id} venuPhoto`;
  }

  update(id: number, updateVenuPhotoDto: UpdateVenuPhotoDto) {
    return `This action updates a #${id} venuPhoto`;
  }

  remove(id: number) {
    return `This action removes a #${id} venuPhoto`;
  }
}
