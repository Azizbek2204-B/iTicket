import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Customer, CustomerDocument } from './schemas/customer.schema';
import { Model } from 'mongoose';

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel(Customer.name) private readonly customerModel: Model<CustomerDocument>,
  ) {}
  create(createCustomerDto: CreateCustomerDto) {
    return this.customerModel.create(createCustomerDto);
  }

  findAll() {
    return this.customerModel.find();
  }

  findOne(id: number) {
    return this.customerModel.findById(id);
  }

  findByEmail(email: string) {
    return this.customerModel.findOne({ email });
  }
  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return this.customerModel.updateOne({ _id: id }, updateCustomerDto);
  }

  remove(id: number) {
    return this.customerModel.deleteOne({ _id: id });
  }
}
