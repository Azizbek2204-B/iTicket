import { Injectable } from '@nestjs/common';
import { CreateSeatDto } from './dto/create-seat.dto';
import { UpdateSeatDto } from './dto/update-seat.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Seat } from './schemas/seat.schema';

@Injectable()
export class SeatService {
  constructor(
    @InjectModel('Seat') private readonly seatModel: Model<Seat>,
  ) {}

  create(createSeatDto: CreateSeatDto) {
    return this.seatModel.create(createSeatDto);
  }

  findAll() {
    return this.seatModel.find();
  }

  findOne(id: number) {
    return this.seatModel.findById(id);
  }

  update(id: number, updateSeatDto: UpdateSeatDto) {
    return this.seatModel.findByIdAndUpdate(id, updateSeatDto);
  }

  remove(id: number) {
    return this.seatModel.deleteOne({ _id: id });
  }
}
