import { Container } from 'inversify';
import { RestApplication } from './rest.application.js';
import { Component } from '../shared/types/index.js';
import { ILogger, PinoLogger } from '../shared/libs/logger/index.js';
import { IConfig, RestConfig, TRestSchema } from '../shared/libs/config/index.js';
import { IDatabaseClient, MongoDatabaseClient } from '../shared/libs/database-client/index.js';
import { HttpExceptionFilter, IExceptionFilter, AppExceptionFilter, ValidationExceptionFilter } from '../shared/libs/rest/index.js';

export function createRestApplicationContainer() {
  const restApplicationContainer = new Container();

  restApplicationContainer.bind<RestApplication>(Component.RestApplication).to(RestApplication).inSingletonScope();
  restApplicationContainer.bind<ILogger>(Component.Logger).to(PinoLogger).inSingletonScope();
  restApplicationContainer.bind<IConfig<TRestSchema>>(Component.Config).to(RestConfig).inSingletonScope();
  restApplicationContainer.bind<IDatabaseClient>(Component.DatabaseClient).to(MongoDatabaseClient).inSingletonScope();
  restApplicationContainer.bind<IExceptionFilter>(Component.ExceptionFilter).to(AppExceptionFilter).inSingletonScope();
  restApplicationContainer.bind<IExceptionFilter>(Component.HttpExceptionFilter).to(HttpExceptionFilter).inSingletonScope();
  restApplicationContainer.bind<IExceptionFilter>(Component.ValidationExceptionFilter).to(ValidationExceptionFilter).inSingletonScope();

  return restApplicationContainer;
}
