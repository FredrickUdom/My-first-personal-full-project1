import { ClassSerializerInterceptor, Controller, Get, HttpException, HttpStatus, Inject, Param, UseInterceptors } from '@nestjs/common';
import { stringify } from 'querystring';
import { UserService } from 'src/users/service/user/user.service';
import { SerializedUser, Usertypes } from 'src/users/type/index';

@Controller('user')
export class UserController {
    constructor(@Inject('USER_SERVICE')private readonly userService: UserService){}
/* serialization is called here*/
   @UseInterceptors(ClassSerializerInterceptor)
   
    @Get(':username')
    getUsername(@Param('username')username ){
        const usernames = this.userService.getUserByUsername(username);

        if(usernames) return new /* serialization is added here*/SerializedUser(usernames);
        else throw new HttpException("Opps... Sorry no user with such name!", HttpStatus.BAD_REQUEST);
    }

    @Get()
    getall(){
        return this.userService.getUsers();
    }
}
