import { Injectable } from '@nestjs/common';
import {Model} from "mongoose";
import {InjectModel} from "@nestjs/mongoose";
import {CreateEventDto} from "./dto/create-event.dto";

@Injectable()
export class EventsService {

    constructor(@InjectModel('Event') private readonly eventModel: Model<Event>) {}

    // Create a new event
    async create(createEventDto: CreateEventDto): Promise<Event>{
        const createdEvent = new this.eventModel(createEventDto);
        return createdEvent.save();
    }

    async findAll(): Promise<Event[]> {
        return (this.eventModel
            .find()
            .sort({ date: -1 })
            .exec());
    }

    async delete(eventId: string): Promise<Event> {
        return this.eventModel.findByIdAndRemove(eventId);
    }
}
