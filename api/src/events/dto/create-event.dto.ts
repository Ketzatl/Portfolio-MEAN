export class CreateEventDto {
    readonly title: string;
    readonly description: string;
    readonly organizers: string;
    readonly date: string;
    readonly pictures?: string;
}
