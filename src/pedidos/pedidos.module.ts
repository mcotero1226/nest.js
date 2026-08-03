import { Module } from '@nestjs/common';
import { PedidosController } from './pedidos.controller';
import { PedidosServicie } from './pedido.servicie';

@Module({
    controllers: [PedidosController],
    providers: [PedidosServicie]

})
export class PedidosModule { }
