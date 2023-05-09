import { createReducer, on } from '@ngrx/store';
import { UsersApiActions } from '../actions/users-api.actions';
import { IUser } from '../interfaces/user.interface';
import { UsersActions } from '../actions/users.actions';

export const initialState: ReadonlyArray<IUser> = [];

export const usersReducer = createReducer(
  initialState,
  on(UsersApiActions.usersLoadedSuccess, (_state, { users }) => users)
);