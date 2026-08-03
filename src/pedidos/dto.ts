import { IsString } from "class-validator"

export class DtoPedido{
    
    @IsString()
    descripcion!:string

    id?:number
}