import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request,Response } from 'express';

@Injectable()
export class FormmiddlewareMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    console.log(req.method)
    next();
  }
}
