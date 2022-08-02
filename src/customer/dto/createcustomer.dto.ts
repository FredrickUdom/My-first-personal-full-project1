import { Type } from "class-transformer";
import { IsEmail, IsNotEmpty, IsNotEmptyObject, IsNumberString, IsString, ValidateNested } from "class-validator";
import { creatAddressDto } from "./createaddress.dto";

export class CreateCustomerDto{
    @IsNumberString()
    @IsNotEmpty()
    id: number;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    // this is actually validating the nested objects inside the createAddressDTO
    @ValidateNested()
    @IsNotEmptyObject()
    @Type(() => creatAddressDto)
    address: creatAddressDto;
}