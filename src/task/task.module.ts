import { Module } from '@nestjs/common';
import { TaskServicie } from './task.servicie';
import { TaskCondroller } from './task.controller';


@Module({
    controllers:[TaskCondroller],
    providers:[TaskServicie]
})
export class TaskModule {

}