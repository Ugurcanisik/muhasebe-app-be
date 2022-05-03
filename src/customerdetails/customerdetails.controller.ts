import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CustomerdetailsService } from './customerdetails.service';
import { CreateCustomerdetailDto } from './dto/create-customerdetail.dto';
import { UpdateCustomerdetailDto } from './dto/update-customerdetail.dto';

@Controller('customerdetails')
export class CustomerdetailsController {
  constructor(private readonly customerdetailsService: CustomerdetailsService) {}

  @Post()
  create(@Body() createCustomerdetailDto: CreateCustomerdetailDto) {
    return this.customerdetailsService.create(createCustomerdetailDto);
  }

  @Get()
  findAll() {
    return this.customerdetailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customerdetailsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCustomerdetailDto: UpdateCustomerdetailDto) {
    return this.customerdetailsService.update(+id, updateCustomerdetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customerdetailsService.remove(+id);
  }
}
