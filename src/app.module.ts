import { Module } from '@nestjs/common';
import { Formulario } from './formulario/formulario.module';
import { TaskModule } from './task/task.module';
import { Users } from './users/users.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { EventosModule } from './eventos/eventos.module';


@Module({
  imports: [Formulario,TaskModule, Users, PedidosModule, EventosModule],
  controllers: [],
  
})
export class AppModule {}
