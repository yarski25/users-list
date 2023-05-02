import { createReducer, on } from '@ngrx/store';

import { UsersApiActions } from './users.actions';
import { User } from '../models/user.model';

export const initialState: ReadonlyArray<User> = [];

export const usersReducer = createReducer(
  initialState,
  on(UsersApiActions.retrievedUserList, (_state, { users }) => users)
);