import { Module } from '@nestjs/common';
import { CatService } from './cat.service';
import { CatController } from './cat.controller';
import { Cat } from './entities/cat.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BreedsModule } from 'src/breeds/breeds.module';
import { BreedsService } from 'src/breeds/breeds.service';

@Module({
  imports: [TypeOrmModule.forFeature([Cat]), BreedsModule],
  controllers: [CatController],
  providers: [CatService, BreedsService],
})
export class CatModule {}
