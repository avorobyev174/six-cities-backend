import { StatusCodes } from 'http-status-codes';
import { BaseUserException } from './base-user.exception.js';

export class UserPasswordIncorrectException extends BaseUserException {
  constructor(email: string) {
    super(StatusCodes.UNAUTHORIZED, `Incorrect password for ${ email }`, 'AuthController');
  }
}
