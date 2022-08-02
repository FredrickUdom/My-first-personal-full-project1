import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { Request, Response } from 'express';
import { STATUS_CODES } from 'http';
import { CreateCustomerDto } from '../dto/createcustomer.dto';
import { CustomerService } from './customer.service';

@Controller('customer')
export class CustomerController {
    
    constructor(private readonly customerService: CustomerService){}

    @Get()
    getAllCustomers(){
        return this.customerService.getAllCustomers();
    }

    // @Get('/search/:id')
    // getDataById(@Param('id', ParseIntPipe) id: number){
    //     const customer = this.customerService.getDataByIds(id);
    //     if(customer) return customer;
    //     else throw new HttpException('customer not found here', HttpStatus.BAD_REQUEST);
    // }

    // @Get(':id')
    // getDataById(@Param('id', ParseIntPipe) id:number, @Req() req:Request, @Res() res:Response){
    //     const customer = this.customerService.getDataByIds(id);
    //     if(customer){
    //         res.send(customer);
    //     }else{
    //         res.status(400).send({msg: 'No customers is found!'});
    //     }
    // }

    @Get(':id')
    getDataById(@Param('id', ParseIntPipe) id:number, ){
        const customer = this.customerService.getDataByIds(id);

     if(!customer){
        throw new HttpException('No Customer Found At The Moment', 400);
     }else{
        return customer;
     }
    }

    @Post('create')
    @UsePipes(ValidationPipe)
    createCustomer(@Body() createCustomerDto: CreateCustomerDto){
        // console.log(createCustomerDto);
       return this.customerService.createCustomer(createCustomerDto);
    }



}
