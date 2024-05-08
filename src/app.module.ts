import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import { CatModule } from './cat/cat.module';
import { BreedsModule } from './breeds/breeds.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    TypeOrmModule.forRoot( {
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "root",
      database: "crud",
      entities: [
            "dist/**/**.entity{.ts,.js}"
      ],
      synchronize
      : true
                     } ),
    CatModule,
    BreedsModule,
    UsersModule,
    AuthModule,
     


  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
