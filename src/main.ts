import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { TransformInterceptor, WrapInterceptor } from 'common/interceptors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app
    .enableCors()
    .useGlobalPipes(new ValidationPipe({ transform: true }))
    .useGlobalInterceptors(new TransformInterceptor(), new WrapInterceptor())
    .listen(3000);
}
bootstrap();
