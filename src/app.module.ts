import { Module } from '@nestjs/common';
import { ProduseModule } from './produse/produse.module';
import { ComenziModule } from './comenzi/comenzi.module';
import { UppercaseModule } from './uppercase/uppercase.module';

@Module({
  imports: [ProduseModule, ComenziModule, UppercaseModule],
})
export class AppModule {}
