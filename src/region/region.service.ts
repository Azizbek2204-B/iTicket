import { Injectable } from '@nestjs/common';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Region } from './schemas/region.schema';
import { Model } from 'mongoose';

@Injectable()
export class RegionService {
  constructor(
    @InjectModel(Region.name) private readonly regionSchema: Model<Region>,
  ){}
  create(createRegionDto: CreateRegionDto) {
    return this.regionSchema.create(createRegionDto);
  }

  findAll() {
    return this.regionSchema.find();
  }

  findOne(id: number) {
    return this.regionSchema.findById(id);
  }

  update(id: number, updateRegionDto: UpdateRegionDto) {
    return this.regionSchema.updateOne({ _id: id }, updateRegionDto);
  }

  remove(id: number) {
    return this.regionSchema.deleteOne({ _id: id });
  }
}
