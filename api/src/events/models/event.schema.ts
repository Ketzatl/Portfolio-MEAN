import * as mongoose from 'mongoose';

export const EventSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    organizers: {type: String, required: true},
    date: {type: String, required: true},
    pictures: {type: String, required: false}
});
