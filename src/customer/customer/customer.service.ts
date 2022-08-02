import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from '../dto/createcustomer.dto';
import { CustomerArray } from '../type/cutomer';

@Injectable()
export class CustomerService {
    private customers: CustomerArray []= [{
        id:1,
        name: "freddy",
        email: "freddy@gmail.com",
        
    },

    {
        id:2,
        name: "dickson",
        email: "dickson@gmail.com",


    },

    {
        id:3,
        name: "udom",
        email: "udom@gmail.com",
    },

    {
        id:7,
        name: "frek",
        email: "frek@gmail.com",
    }];

    // getData(){
    //     return this.customers;
    // }

    getDataByIds(id: number){
        return this.customers.find((user) => user.id === id);
    }

    createCustomer(customerDTO: CreateCustomerDto){
        return this.customers.push(customerDTO);
    }

    getAllCustomers(){
        return this.customers;
    }
}
