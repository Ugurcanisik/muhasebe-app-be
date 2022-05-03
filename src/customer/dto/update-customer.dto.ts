import { PartialType } from '@nestjs/mapped-types';
import { CreateCustomerDto } from './create-customer.dto';

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {
  readonly namelastname: string;
  readonly tc: number;
  readonly phone: string;
  readonly email: string;
  readonly secondemail: string;
  readonly startdate: Date;
  readonly enddate: Date;
}
