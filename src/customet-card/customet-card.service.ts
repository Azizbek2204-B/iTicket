import { Injectable } from '@nestjs/common';
import { CreateCustometCardDto } from './dto/create-customet-card.dto';
import { UpdateCustometCardDto } from './dto/update-customet-card.dto';
import { InjectModel } from '@nestjs/mongoose';
import { CustomerCard } from './schemas/customet-card.schema';
import { Model } from 'mongoose';

@Injectable()
export class CustometCardService {
  constructor(
    @InjectModel(CustomerCard.name) private readonly custometCardModel: Model<CustomerCard>,
  ) {}
  create(createCustometCardDto: CreateCustometCardDto) {
    return this.custometCardModel.create(createCustometCardDto);
  }

  findAll() {
    return this.custometCardModel.find();
  }

  findOne(id: number) {
    return this.custometCardModel.findById(id);
  }

  update(id: number, updateCustometCardDto: UpdateCustometCardDto) {
    return this.custometCardModel.updateOne({ _id: id }, updateCustometCardDto);
  }

  remove(id: number) {
    return this.custometCardModel.deleteOne({ _id: id });
  }
}
