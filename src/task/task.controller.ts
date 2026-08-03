import { Injectable, UsePipes } from "@nestjs/common";
import { Controller,Post,Body,ValidationPipe} from "@nestjs/common";
import { TaskServicie } from "./task.servicie";
import { DtoTask } from "./dto";
 
@Controller()
export class TaskCondroller{

    constructor(private priveteTask:TaskServicie){}

    @Post('/task')
    @UsePipes(new ValidationPipe())
    crearTare(@Body() task:DtoTask){
        return this.priveteTask.postTaks(task)
    }

}