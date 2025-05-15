import { Injectable } from '@nestjs/common';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
import { District } from './schemas/district.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class DistrictService {
  constructor(
    @InjectModel(District.name) private readonly districtModel: Model<District>,
  ) {}

  create(createDistrictDto: CreateDistrictDto) {
    return this.districtModel.create(createDistrictDto);
  }

  findAll() {
    return this.districtModel.find();
  }

  findOne(id: number) {
    return this.districtModel.findById(id);
  }

  update(id: number, updateDistrictDto: UpdateDistrictDto) {
    return this.districtModel.updateOne({ _id: id }, updateDistrictDto);
  }

  remove(id: number) {
    return this.districtModel.deleteOne({ _id: id });
  }
}
