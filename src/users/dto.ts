import { IsString, Min, IsInt,IsEmail,IsNumber, IsOptional } from "class-validator"
export class DtoUsers {
    @IsString()
    name!: string

    @IsEmail()
    correo!: string;


    @IsNumber()
    edad!: number;

    @IsNumber()
    @IsOptional()
    id?:number
}