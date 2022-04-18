import { NextFunction, Request, Response } from 'express';
import User from '../database/models/user';

export interface ILoginInfo {
  email: string;
  password: string;
}

export type IUserModel = typeof User; // TODO better dependency inversion

export interface ILoginService {
  getLogin(info: ILoginInfo): Promise<ILoggedUser | null>;
}

export interface ILoginController {
  readonly _loginService: ILoginService;
  getLogin(req: Request, res: Response, next: NextFunction):
  Promise<Response<ILoggedUser, Record<string, ILoggedUser>> | void>;
}

export interface ILoggedUser {
  user: {
    id: number;
    username: string;
    role: string;
    email: string;
    password: string;
  }
  token?: string;
}
