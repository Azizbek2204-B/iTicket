import { Injectable } from '@nestjs/common';
import { CreateTypeDto } from './dto/create-type.dto';
import { UpdateTypeDto } from './dto/update-type.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Type } from './schemas/type.schema';

@Injectable()
export class TypesService {
  constructor(
    @InjectModel(Type.name) private readonly typeModel: Model<Type>,
  ) {}

  create(createTypeDto: CreateTypeDto) {
    return this.typeModel.create(createTypeDto);
  }

  findAll() {
    return this.typeModel.find();
  }

  findOne(id: number) {
    return this.typeModel.findById(id);
  }

  update(id: number, updateTypeDto: UpdateTypeDto) {
    return this.typeModel.updateOne({ _id: id }, updateTypeDto);
  }

  remove(id: number) {
    return this.typeModel.deleteOne({ _id: id });
  }
}
