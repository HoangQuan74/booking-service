import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { AllExceptionsFilter } from './common/filters';
import { TransformInterceptor } from './common/interceptors';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';
import * as dotenv from 'dotenv';
dotenv.config();

const { NODE_ENV = 'development', PORT = 3000 } = process.env;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  app.enableCors();

  app.use(cookieParser());

  // catch exception
  app.useGlobalFilters(new AllExceptionsFilter());

  // transform data
  app.useGlobalInterceptors(new TransformInterceptor());

  app.setGlobalPrefix('/api/v1');

  const config = new DocumentBuilder()
    .setTitle('API Documentation')
    .setDescription('API description')
    .setVersion('1.0')
    .addBearerAuth()
    .addSecurityRequirements('bearer')
    .build();

  // show swagger only development
  if (NODE_ENV === 'development') {
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api/document', app, document);
  }
  await app.listen(PORT);
}
bootstrap();

