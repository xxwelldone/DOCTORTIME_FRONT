import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './auth.state';

// export const selectUserState = (state: UserState) => state.user;
export const selectUserState = createFeatureSelector<UserState>('user');

export const selectUserEmail = createSelector(
  selectUserState,
  (state) => state.user?.email
);

export const selectUserToken = createSelector(
  selectUserState,
  (state) => state.user?.token
);
