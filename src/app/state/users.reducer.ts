import { createReducer, on } from '@ngrx/store';

import { UsersApiActions } from './users.actions';
import { IUser } from '../interfaces/user.interface';
//import { User } from '../models/user.model';

export const initialState: ReadonlyArray<IUser> = [];

export const usersReducer = createReducer(
  initialState,
  on(UsersApiActions.retrievedUserList, (_state, { users }) => users)
);