import { IMiddleware } from './middleware.interface.js';
import { NextFunction, Request, Response } from 'express';
import { Types } from 'mongoose';
import { StatusCodes } from 'http-status-codes';
import { HttpError } from '../errors/index.js';

export class ValidateObjectIdMiddleware implements IMiddleware {
  constructor(private param: string) {}

  execute({ params }: Request, _res: Response, next: NextFunction) {
    const objectId = params[ this.param ];

    if (Types.ObjectId.isValid(objectId)) {
      return next();
    }

    throw new HttpError(
      StatusCodes.BAD_REQUEST,
      `Object with id '${ objectId }' is invalid`,
      'ValidateObjectIdMiddleware'
    );
  }
}
