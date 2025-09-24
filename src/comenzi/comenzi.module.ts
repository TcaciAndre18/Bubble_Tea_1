import { Module } from '@nestjs/common';
import { ComenziService } from './comenzi.service';
import { ComenziController } from './comenzi.controller';

@Module({
  providers: [ComenziService],
  controllers: [ComenziController],
})
export class ComenziModule {}
