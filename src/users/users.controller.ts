import { Body, Controller, Post, UsePipes, ValidationPipe,Get, Param, ParseIntPipe, Query, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { DtoUsers } from './dto';
import { PipequeryPipe } from './pipe/pipequery/pipequery.pipe';
import { GuardsUsersGuard } from './guards-users/guards-users.guard';

@Controller()
export class UsersController {
    constructor(private priveteUsers:UsersService){}

    @Post('/users')
    
    @UsePipes(new ValidationPipe())
    crearUsers(@Body() Users:DtoUsers){
        return this.priveteUsers.postUsers(Users)
    }

    @Get('users/:num')
    numGet(@Param('num',ParseIntPipe) num:string){
        return num + 12


    }
     @Get('users')
     @UseGuards(GuardsUsersGuard)
     numGetQuery(@Query(PipequeryPipe) query:{name:string,edad:number}){
       return `hola como estas ${query.name} edad es ${query.edad} `

    }


}
