import { Module } from '@nestjs/common';
import { CustomerdetailsService } from './customerdetails.service';
import { CustomerdetailsController } from './customerdetails.controller';

@Module({
  controllers: [CustomerdetailsController],
  providers: [CustomerdetailsService]
})
export class CustomerdetailsModule {}
