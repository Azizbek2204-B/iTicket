import { Injectable } from "@nestjs/common";
import { CreateCustomerCardDto } from "./dto/create-customer-card.dto";
import { UpdateCustomerCardDto } from "./dto/update-customer-card.dto";
import { InjectModel } from "@nestjs/mongoose";
import { CustomerCard } from "./schemas/customer-card.schema";
import { Model } from "mongoose";

@Injectable()
export class CustomerCardService {
  constructor(
    @InjectModel(CustomerCard.name)
    private readonly customerCardModel: Model<CustomerCard>
  ) {}
  create(createCustomerCardDto: CreateCustomerCardDto) {
    return this.customerCardModel.create(createCustomerCardDto);
  }

  findAll() {
    return this.customerCardModel.find().populate("customer_id")
  }

  findOne(id: number) {
    return this.customerCardModel.findById(id);
  }

  update(id: number, updateCustomerCardDto: UpdateCustomerCardDto) {
    return this.customerCardModel.updateOne({ _id: id }, updateCustomerCardDto);
  }

  remove(id: number) {
    return this.customerCardModel.deleteOne({ _id: id });
  }
}
