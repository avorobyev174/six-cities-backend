import { Container } from 'inversify';
import { IUserService } from './user-service.interface.js';
import { Component } from '../../types/index.js';
import { DefaultUserService } from './default-user.service.js';
import { types } from '@typegoose/typegoose';
import { UserEntity, UserModel } from './user.entity.js';

export function createUserContainer() {
  const userContainer = new Container();
  userContainer.bind<IUserService>(Component.UserService).to(DefaultUserService).inSingletonScope();
  userContainer.bind<types.ModelType<UserEntity>>(Component.UserModel).toConstantValue(UserModel);

  return userContainer;
}
