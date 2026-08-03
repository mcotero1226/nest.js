import { IsString, IsNumber, IsOptional, IsDateString } from "class-validator"

export class EventosDto {
    @IsString()
    name!: string;

    @IsString()
    descripcion!: string;


}