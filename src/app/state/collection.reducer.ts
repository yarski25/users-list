import { createReducer, on } from '@ngrx/store';
import { UsersActions } from './users.actions';

export const initialState: ReadonlyArray<string> = [];

export const collectionReducer = createReducer(
  initialState,
  on(UsersActions.removeUser, (state, { userId }) =>
    state.filter((id) => id !== userId)
  ),
  on(UsersActions.addUser, (state, { userId }) => {
    if (state.indexOf(userId) > -1) return state;

    return [...state, userId];
  })
);