import { Module } from '@nestjs/common';
import { ProduseModule } from './produse/produse.module';
import { ComenziModule } from './comenzi/comenzi.module';

@Module({
  imports: [ProduseModule, ComenziModule],
})
export class AppModule {}
