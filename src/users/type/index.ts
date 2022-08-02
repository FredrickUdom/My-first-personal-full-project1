import { Exclude } from "class-transformer";

export interface Usertypes{
    username: string;
    password: string;
}

/* serialization is added here so as to hide password from the public*/

export class SerializedUser{
    username: string;

    @Exclude()
    password: string;

    constructor(partial: Partial<SerializedUser>) {
        Object.assign(this, partial);
      }
}