import { Module } from '@nestjs/common';
import DatabaseModule from './configrations/database/database.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './configrations/configuration';
import { CustomerModule } from './customer/customer.module';
import { CustomerdetailsModule } from './customerdetails/customerdetails.module';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({
      load: [configuration],
    }),
    CustomerModule,
    CustomerdetailsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
