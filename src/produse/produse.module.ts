import { Module } from '@nestjs/common';
import { ProduseService } from './produse.service';
import { ProduseController } from './produse.controller';
import { CategoriiService } from '../categorii/categorii.service';


@Module({
  providers: [ProduseService, CategoriiService],
  controllers: [ProduseController],
})
export class ProduseModule {}
