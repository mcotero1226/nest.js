import { ArgumentMetadata, Injectable, PipeTransform,BadRequestException} from '@nestjs/common';

@Injectable()
export class PipequeryPedidosPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {

    const number=parseInt(value.id,10)

    if(isNaN(number)){
      throw new BadRequestException('La id debe ser un número');
    }
    
    return {...value,id:number};
  }
}
