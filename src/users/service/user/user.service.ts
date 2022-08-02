import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { SerializedUser, Usertypes } from 'src/users/type/index';

@Injectable()
export class UserService {
    private users: Usertypes [] = [
    {
        username: "fredosky",
        password: "fredosky1",
    },

    {
        username: "fredrick",
        password: "fredrick1",
    },

    {
        username: "sarbio1",
        password: "sarbio1",
    },

    {
        username: "akpan1",
        password: "akpan1",
    }
];

getUsers(){ 
    // this Exclude password while returning all users.
    /* serialization of data is added here*/
    return this.users.map((user) => new SerializedUser(user))/*plainToClass(SerializedUser, user))*/
}

getUserByUsername(username: string){
    return this.users.find((usernames) => usernames.username === username);

}
}
