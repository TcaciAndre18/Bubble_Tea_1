import { Module } from '@nestjs/common';
import { ProduseService } from './produse.service';
import { ProduseController } from './produse.controller';

@Module({
  providers: [ProduseService],
  controllers: [ProduseController],
})
export class ProduseModule {}
