import { createReducer, on } from '@ngrx/store';
import { inicialState } from './auth.state';
import { removeUser, setUser } from './auth.action';

export const authReducers = createReducer(
  inicialState,
  on(setUser, (state, { user }) => ({
    ...state,
    user,
  })),
  on(removeUser, (state) => ({
    ...state,
    user: null,
  }))
);
