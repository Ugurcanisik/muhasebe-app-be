import { Injectable } from '@nestjs/common';
import { CreateCustomerdetailDto } from './dto/create-customerdetail.dto';
import { UpdateCustomerdetailDto } from './dto/update-customerdetail.dto';

@Injectable()
export class CustomerdetailsService {
  create(createCustomerdetailDto: CreateCustomerdetailDto) {
    return 'This action adds a new customerdetail';
  }

  findAll() {
    return `This action returns all customerdetails`;
  }

  findOne(id: number) {
    return `This action returns a #${id} customerdetail`;
  }

  update(id: number, updateCustomerdetailDto: UpdateCustomerdetailDto) {
    return `This action updates a #${id} customerdetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} customerdetail`;
  }
}
