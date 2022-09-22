import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {EventSchema} from "./models/event.schema";

@Module({
    imports: [
        MongooseModule.forFeature([{name: 'Event', schema: EventSchema}]),
    ],
    providers: [],
    controllers: []
})

@Module({})
export class EventsModule {}
