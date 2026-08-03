import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { FormularioServicie } from "./formulario.servicie";
import { DtoFomulario } from "./dto";
@Controller('/formulario')
export class FormularioController {

    constructor(private formularioService: FormularioServicie) { }

    @Post('post')
    @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
    CrearFormulario(@Body() Formulario: DtoFomulario) {
        return this.formularioService.PostFormulari(Formulario)
    }

    @Get()
    UseGetFormulario() {
        return this.formularioService.GetFormulario()

    }

}