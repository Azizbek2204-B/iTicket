import { Injectable } from '@nestjs/common';
import { CreateCustometAddressDto } from './dto/create-customet-address.dto';
import { UpdateCustometAddressDto } from './dto/update-customet-address.dto';

@Injectable()
export class CustometAddressService {
  create(createCustometAddressDto: CreateCustometAddressDto) {
    return 'This action adds a new custometAddress';
  }

  findAll() {
    return `This action returns all custometAddress`;
  }

  findOne(id: number) {
    return `This action returns a #${id} custometAddress`;
  }

  update(id: number, updateCustometAddressDto: UpdateCustometAddressDto) {
    return `This action updates a #${id} custometAddress`;
  }

  remove(id: number) {
    return `This action removes a #${id} custometAddress`;
  }
}
