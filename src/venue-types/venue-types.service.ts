import { Injectable } from '@nestjs/common';
import { CreateVenueTypeDto } from './dto/create-venue-type.dto';
import { UpdateVenueTypeDto } from './dto/update-venue-type.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { VenueType } from './schemas/venue-type.schema';

@Injectable()
export class VenueTypesService {
  constructor(
    @InjectModel('VenueType') private readonly venueTypeModel: Model<VenueType>,
  ) {}
  create(createVenueTypeDto: CreateVenueTypeDto) {
    return this.venueTypeModel.create(createVenueTypeDto);
  }

  findAll() {
    return this.venueTypeModel.find();
  }

  findOne(id: number) {
    return this.venueTypeModel.findById(id);
  }

  update(id: number, updateVenueTypeDto: UpdateVenueTypeDto) {
    return this.venueTypeModel.updateOne({ _id: id }, updateVenueTypeDto);
  }

  remove(id: number) {
    return this.venueTypeModel.deleteOne({ _id: id });
  }
}
