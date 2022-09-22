import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsModule } from './events/events.module';
import {MongooseModule} from "@nestjs/mongoose";
import config_mongoose from "./config_mongoose";

@Module({
  imports: [
      EventsModule,
      MongooseModule.forRoot(config_mongoose.mongoUri, {useNewUrlParser: true}),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
