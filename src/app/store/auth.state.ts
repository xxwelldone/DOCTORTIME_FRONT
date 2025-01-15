import { LoginResponse } from '../models/Login-Respose';

export interface UserState {
  user: LoginResponse | null; //fiz assim para não modificar a model LoginResponse
}
export const inicialState: UserState = { user: null };
