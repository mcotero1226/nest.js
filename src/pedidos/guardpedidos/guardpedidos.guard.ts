import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class GuardpedidosGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    const requet = context.switchToHttp().getRequest();
    if (requet.url === '/pedidos') return false
    return true;
  }
}
