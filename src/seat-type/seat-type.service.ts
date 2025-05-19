import { Injectable } from '@nestjs/common';
import { CreateSeatTypeDto } from './dto/create-seat-type.dto';
import { UpdateSeatTypeDto } from './dto/update-seat-type.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SeatType } from './schemas/seat-type.schema';

@Injectable()
export class SeatTypeService {
  constructor(
    @InjectModel('SeatType') private readonly seatTypeModel: Model<SeatType>,
  ) {}

  create(createSeatTypeDto: CreateSeatTypeDto) {
    return this.seatTypeModel.create(createSeatTypeDto);
  }

  findAll() {
    return this.seatTypeModel.find();
  }

  findOne(id: number) {
    return this.seatTypeModel.findById(id);
  }

  update(id: number, updateSeatTypeDto: UpdateSeatTypeDto) {
    return this.seatTypeModel.findByIdAndUpdate(id, updateSeatTypeDto);
  }

  remove(id: number) {
    return this.seatTypeModel.deleteOne({ _id: id });
  }
}
