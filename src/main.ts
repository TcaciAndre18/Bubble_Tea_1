import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  await app.listen(3000);
}
bootstrap();

@Get('details/:id')
getOne(@Param('id', ParseIntPipe) id: number) {
  // id va fi automat transformat în number și validat
  return this.produseService.getProdusDupaId(id);
}
