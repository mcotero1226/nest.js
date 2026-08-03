import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { FormularioController } from './formulario.controller';
import { FormularioServicie } from './formulario.servicie';
import { FormmiddlewareMiddleware } from './formmiddleware/formmiddleware.middleware';

@Module({
  controllers:[FormularioController],
  providers:[FormularioServicie]
})

export class Formulario implements NestModule{
  configure(consumer: MiddlewareConsumer) {
      consumer
      .apply(FormmiddlewareMiddleware)
      .forRoutes({path:'formulario/post' , method:RequestMethod.POST})
  }
    
}