export class SourceDto {
    id: number;
    name: string;

    constructor(fields: SourceDto) {
        this.id = fields.id;
        this.name = fields.name;
    }
}