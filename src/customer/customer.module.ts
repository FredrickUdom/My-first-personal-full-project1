import { Module } from '@nestjs/common';
import { CustomerService } from './customer/customer.service';
import { CustomerController } from './customer/customer.controller';

@Module({
  providers: [CustomerService],
  controllers: [CustomerController]
})
export class CustomerModule {}
