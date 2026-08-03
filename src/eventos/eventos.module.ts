import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { EventosController } from './eventos.controller';
import { EventosServicie } from './eventos.servicie';
import { EvetosMiddMiddleware } from '../eventos/evetos-midd/evetos-midd.middleware'

@Module({
    controllers: [EventosController],
    providers: [EventosServicie]
})
export class EventosModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(EvetosMiddMiddleware)
            .forRoutes({ path: 'evetos/post', method: RequestMethod.POST })
    }
}
