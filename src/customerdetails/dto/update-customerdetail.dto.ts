import { PartialType } from '@nestjs/mapped-types';
import { CreateCustomerdetailDto } from './create-customerdetail.dto';

export class UpdateCustomerdetailDto extends PartialType(
  CreateCustomerdetailDto,
) {
  readonly vergino: string;
  readonly intusername: string;
  readonly vergidairesi: string;
  readonly intpassword: string;
  readonly sskusername: string;
  readonly sskpassword: string;
  readonly nestusername: string;
  readonly nestpassword: string;
  readonly efatura: string;
  readonly efaturatarih: string;
  readonly edefter: string;
  readonly edeftertarih: string;
  readonly sm: string;
  readonly muhtasar: string;
  readonly companytype: string;
  readonly babs: string;
  readonly id: string;
  readonly not: string;
}
