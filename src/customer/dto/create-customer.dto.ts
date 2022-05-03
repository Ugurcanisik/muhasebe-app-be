export class CreateCustomerDto {
  readonly namelastname: string;
  readonly tc: number;
  readonly phone: string;
  readonly email: string;
  readonly secondemail: string;
  readonly startdate: Date;
  readonly enddate: Date;
}
