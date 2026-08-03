import { Injectable } from "@nestjs/common";
import { EventosDto } from "./dto";
import { Evento } from "./interface/evetos.interface";

@Injectable()
export class EventosServicie {


    private evetos: Evento[] = []

    PostEventos(dataEvetos: EventosDto) {
        
        const inicio = new Date('2024-01-01').getTime();
        const fin = new Date('2026-12-31').getTime();

        const fechaAleatoria = new Date(Math.floor(Math.random() * (fin - inicio + 1)) + inicio);
        return this.evetos.push({
            ...dataEvetos,
            id: this.evetos.length + 1,
            fecha: fechaAleatoria.toISOString(),

        })
    }
    getEvetos(){
        return this.evetos
    }

}