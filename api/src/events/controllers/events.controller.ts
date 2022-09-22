import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {CreateEventDto} from "../dto/create-event.dto";
import {EventsService} from "../events.service";

@Controller('events')
export class EventsController {
    constructor(private readonly eventsService: EventsService) {}


    @Post()
    async createArticle(@Body() createEventDto: CreateEventDto) {
        console.log('createEventDto', createEventDto);
        return this.eventsService.create(createEventDto);
    };

    @Get()
    async findAll() {
        return this.eventsService.findAll();
    }

    @Delete(':id')
    async deleteEvent(@Param('id') id: string) {
        return this.eventsService.delete(id);
    }
}
