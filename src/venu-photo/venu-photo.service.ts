import { Injectable } from '@nestjs/common';
import { CreateVenuPhotoDto } from './dto/create-venu-photo.dto';
import { UpdateVenuPhotoDto } from './dto/update-venu-photo.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Venue } from '../venue/schemas/venue.schema';
import { Model } from 'mongoose';

@Injectable()
export class VenuPhotoService {
  constructor(
    @InjectModel(Venue.name) private readonly venueModel: Model<Venue>,
  ) {}

  create(createVenuPhotoDto: CreateVenuPhotoDto) {
    return this.venueModel.create(createVenuPhotoDto);
  }

  findAll() {
    return this.venueModel.find()
  }

  findOne(id: number) {
    return this.venueModel.findById(id);
  }

  update(id: number, updateVenuPhotoDto: UpdateVenuPhotoDto) {
    return this.venueModel.updateOne({ _id: id }, updateVenuPhotoDto);
  }

  remove(id: number) {
    return this.venueModel.deleteOne({ _id: id });
  }
}
