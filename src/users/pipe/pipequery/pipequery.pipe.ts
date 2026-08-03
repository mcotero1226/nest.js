import { ArgumentMetadata, Injectable, PipeTransform ,BadRequestException} from '@nestjs/common';

@Injectable()
export class PipequeryPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {

    const numberType = parseInt(value.edad,10)
    if (isNaN(numberType)) {
      throw new BadRequestException('La edad debe ser un número');
    }

    return { ...value, edad: numberType }
  }
}
