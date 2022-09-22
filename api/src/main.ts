import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 3200;
  app.enableCors();
  await app.listen(port);


  console.log("\x1b[33m%s\x1b[0m", "\n\t >>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<"); // yellow text
  console.log(`\t >> Server listening on port ${port} <<`);
  console.log(`\t >> Visit App here : http://localhost:3200/events <<`);
  console.log("\x1b[33m%s\x1b[0m", "\t >>>>>>>>>>>>>>>><<<<<<<<<<<<<<<< \n"); // yellow text
}
bootstrap();
