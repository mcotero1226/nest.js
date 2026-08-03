import { Body, Controller, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { EventosServicie } from "./eventos.servicie";
import { Post,Get} from "@nestjs/common";
import { EventosDto } from "./dto";
import { EventosGuardGuard } from "./eventos-guard/eventos-guard.guard";

@Controller('evetos')
export class EventosController {
    constructor(private privateController: EventosServicie) { }

    @Post('post')
    @UseGuards(EventosGuardGuard)
    @UsePipes(new ValidationPipe())
    crareventos(@Body() evetos:EventosDto){
        return this.privateController.PostEventos(evetos)

    }
    @Get('')
    evetos(){
        return this.privateController.getEvetos()

    }


}