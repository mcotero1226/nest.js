import { IsString } from "class-validator"

export class DtoFomulario {
    @IsString()
    nombre!: string

    @IsString()
    apellido!: string

}