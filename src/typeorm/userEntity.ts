import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class userEntity{
    @PrimaryGeneratedColumn({
        type: 'bigint',

    })
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column({
        nullable: false,
        default: ''
    })
    emailAddress: string;

    @Column()
    phoneNumber: number;
}