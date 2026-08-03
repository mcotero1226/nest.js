import { IsString, isNumber } from "class-validator";

export class DtoTask {
    @IsString()
    text!: string

    @IsString()
    tipo!: string

    problema!: string

}