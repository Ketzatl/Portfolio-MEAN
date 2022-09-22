import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {EventSchema} from "./models/event.schema";
import { EventsService } from './events.service';
import { EventsController } from './controllers/events.controller';

@Module({
    imports: [
        MongooseModule.forFeature([{name: 'Event', schema: EventSchema}]),
    ],
    providers: [EventsService],
    controllers: [EventsController]
})

@Module({})
export class EventsModule {}
