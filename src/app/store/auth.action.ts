import { createAction, props } from '@ngrx/store';
import { LoginResponse } from '../models/Login-Respose';

export const setUser = createAction(
  '[auth] SET_USER',
  props<{ user: LoginResponse }>()
);
export const removeUser = createAction('[auth] REMOVE_USER');
