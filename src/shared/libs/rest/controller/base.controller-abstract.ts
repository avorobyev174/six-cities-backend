import { IController } from './controller.interface.js';
import { Router, Response } from 'express';
import { ILogger } from '../../logger/index.js';
import { injectable } from 'inversify';
import { IRoute } from '../route.interface.js';
import { StatusCodes } from 'http-status-codes';
import asyncHandler from 'express-async-handler';

const DEFAULT_CONTENT_TYPE = 'application/json';

@injectable()
export class BaseController implements IController {
  readonly router: Router;

  constructor(protected readonly logger:ILogger) {
    this.router = Router();
  }

  addRoute(route: IRoute) {
    const wrapperAsyncHandler = asyncHandler(route.handler.bind(this));
    this.router[ route.method ](route.path, wrapperAsyncHandler);
    this.logger.info(`Route registered: ${ route.method.toUpperCase() } ${ route.path }`);
  }

  send<T>(res: Response, statusCode: number, data: T) {
    res
      .type(DEFAULT_CONTENT_TYPE)
      .status(statusCode)
      .json(data);
  }

  created<T>(res: Response, data: T) {
    this.send(res, StatusCodes.CREATED, data);
  }


  noContent<T>(res: Response, data: T) {
    this.send(res, StatusCodes.NO_CONTENT, data);
  }

  ok<T>(res: Response, data: T) {
    this.send(res, StatusCodes.OK, data);
  }
}