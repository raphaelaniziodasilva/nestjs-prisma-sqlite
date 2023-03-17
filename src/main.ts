import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // vamos utilizar os pipes de validação
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  // vai aceitar requisições de qualquer dominio
  app.enableCors();

  await app.listen(3000);
}
bootstrap();
