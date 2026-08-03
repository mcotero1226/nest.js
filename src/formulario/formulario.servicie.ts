import { Injectable } from "@nestjs/common";
import { DtoFomulario } from "./dto";
import { FormualrioInterface } from "./interface/formulario.interface";
@Injectable({})

export class FormularioServicie {
    private Formularioarray:FormualrioInterface[] = []
    PostFormulari(Formulario: DtoFomulario) {
        this.Formularioarray.push({
            ...Formulario,
            id:this.Formularioarray.length + 1
        });
        return Formulario;
    }

    GetFormulario() {
        console.log(this.Formularioarray)
        return this.Formularioarray
    }

}