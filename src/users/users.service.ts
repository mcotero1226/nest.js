import { Injectable } from '@nestjs/common';
import { DtoUsers } from './dto';

@Injectable()
export class UsersService {
    private ArrayUsers:DtoUsers[]=[]

    postUsers(users:DtoUsers){
        return  this.ArrayUsers.push({
            ...users,
            id:this.ArrayUsers.length + 1
        })
       
      
    }
    

}
