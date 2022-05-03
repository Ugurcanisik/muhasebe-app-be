import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { CustomerRepository } from './customer.repository';

@Injectable()
export class CustomerService {
  constructor(private CustomerRepository: CustomerRepository) {}

  create(createCustomerDto: CreateCustomerDto) {
    return this.CustomerRepository.save(createCustomerDto);
  }

  findAll() {
    return this.CustomerRepository.find({ where: { deletedAt: null } });
  }

  findOne(id: string) {
    return this.CustomerRepository.findOne(id);
  }

  update(id: string, updateCustomerDto: UpdateCustomerDto) {
    return this.CustomerRepository.update(id, updateCustomerDto);
  }

  remove(id: string) {
    return this.CustomerRepository.update(id, { deletedAt: new Date() });
  }
}
