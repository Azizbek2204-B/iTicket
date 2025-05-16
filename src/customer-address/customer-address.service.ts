import { Injectable } from "@nestjs/common";
import { CreateCustomerAddressDto } from "./dto/create-customer-address.dto";
import { UpdateCustomerAddressDto } from "./dto/update-customer-address.dto";
import { InjectModel } from "@nestjs/mongoose";
import { CustomerAddress } from "./schemas/customer-address.schema";
import { Model } from "mongoose";

@Injectable()
export class CustomerAddressService {
  constructor(
    @InjectModel(CustomerAddress.name) private readonly customerAddressModel: Model<CustomerAddress>,
  ) {}
  create(createCustomerAddressDto: CreateCustomerAddressDto) {
    return this.customerAddressModel.create(createCustomerAddressDto);
  }

  findAll() {
    return this.customerAddressModel.find().populate("customer_id");
  }

  findOne(id: number) {
    return this.customerAddressModel.findById(id);
  }

  update(id: number, updateCustomerAddressDto: UpdateCustomerAddressDto) {
    return this.customerAddressModel.updateOne({ _id: id }, updateCustomerAddressDto);
  }

  remove(id: number) {
    return this.customerAddressModel.deleteOne({ _id: id });
  }
}
