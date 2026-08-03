import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class EventosGuardGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    const requet = context.switchToHttp().getRequest() as Request
   
    if (requet.url === '/evetos/post') return true
    return false
  }
}
