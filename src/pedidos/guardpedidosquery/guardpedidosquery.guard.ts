import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class GuardpedidosqueryGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const requet=context.switchToHttp().getRequest()
    if(requet.url==='/pedido') return false
    return true
  }
}
