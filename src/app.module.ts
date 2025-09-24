import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProduseModule } from './produse/produse.module';
import { ComenziModule } from './comenzi/comenzi.module';

@Module({
  imports: [ProduseModule, ComenziModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
