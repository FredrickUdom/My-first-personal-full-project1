import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerModule } from './customer/customer.module';
import { userEntity } from './typeorm/userEntity';
import { UsersModule } from './users/users.module';




@Module({
  imports: [
    
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'fragrancetest',
      entities: [userEntity],
      synchronize: true,
    }),CustomerModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
