import { IMiddleware } from './middleware.interface.js';
import { NextFunction, Request, Response } from 'express';
import { HttpError } from '../errors/index.js';
import { StatusCodes } from 'http-status-codes';
import { isNumeric } from '../../../../utils.js';
import { FAVORITE_STATUS, NOT_FAVORITE_STATUS } from '../../../modules/favorite/index.js';

export class ValidateStatusMiddleware implements IMiddleware {
  constructor(private param: string) {}

  execute({ params }: Request, _res: Response, next: NextFunction) {
    const status = params[ this.param ];
    if (isNumeric(status) &&
        [ NOT_FAVORITE_STATUS, FAVORITE_STATUS ].includes(parseInt(status, 10))) {
      return next();
    }

    throw new HttpError(
      StatusCodes.BAD_REQUEST,
      `Favorite status value '${ status }' must be 0 or 1`,
      'ValidateCityMiddleware'
    );
  }
}