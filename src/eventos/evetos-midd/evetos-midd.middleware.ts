import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()

export class EvetosMiddMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    console.log(req.url)
    console.log(req.header)
    next();
  }
}
