import { Body, Controller, Get, Post, Query, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { PedidosServicie } from "./pedido.servicie";
import { PipequeryPedidosPipe } from "./pipe/pipequery-pedidos/pipequery-pedidos.pipe";
import { DtoPedido } from "./dto";
import { GuardpedidosGuard } from "./guardpedidos/guardpedidos.guard";
import { GuardpedidosqueryGuard } from "./guardpedidosquery/guardpedidosquery.guard";

@Controller('pedido')
export class PedidosController {
    constructor(private PrivateControllerServicie: PedidosServicie) { }

    @Get()
    @UseGuards(GuardpedidosqueryGuard)
    getPedido(@Query(PipequeryPedidosPipe) query: { id: number, descripcion: string }) {
        return `tu pedido es ${query.descripcion}-${query.id}`
    }

    @Post()
    @UsePipes(new ValidationPipe())
    CrearPedido(@Body() pedido: DtoPedido) {
        return this.PrivateControllerServicie.PostPedido(pedido)

    }

    @Get('/otros')
    @UseGuards(GuardpedidosGuard)
    @UsePipes(new ValidationPipe())
    traerPedidos() {
        return this.PrivateControllerServicie.getPedidos()

    }

}