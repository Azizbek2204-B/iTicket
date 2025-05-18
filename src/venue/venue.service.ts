import { Injectable } from '@nestjs/common';
import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Venue } from './schemas/venue.schema';

@Injectable()
export class VenueService {
  constructor(
    @InjectModel('Venue') private readonly venueModel: Model<Venue>,
  ) {}
  create(createVenueDto: CreateVenueDto) {
    return this.venueModel.create(createVenueDto);
  }

  findAll() {
    return this.venueModel.find();
  }

  findOne(id: number) {
    return this.venueModel.findById(id);
  }

  update(id: number, updateVenueDto: UpdateVenueDto) {
    return this.venueModel.updateOne({ _id: id }, updateVenueDto);
  }

  remove(id: number) {
    return this.venueModel.deleteOne({ _id: id });
  }
}
