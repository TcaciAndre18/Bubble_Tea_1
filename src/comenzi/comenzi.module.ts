import { Module } from '@nestjs/common';
import { ComenziController } from './comenzi.controller';
import { ComenziService } from './comenzi.service';

@Module({
  controllers: [ComenziController],
  providers: [ComenziService]
})
export class ComenziModule {}
