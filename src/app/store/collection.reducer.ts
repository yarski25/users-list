import { createReducer, on } from '@ngrx/store';
import { UserActions } from './user.actions';

export const initialState: ReadonlyArray<string> = [];

export const collectionReducer = createReducer(
  initialState,
  on(UserActions.removeUser, (state, { userId }) =>
    state.filter((id) => id !== userId)
  ),
  on(UserActions.addUser, (state, { userId }) => {
    if (state.indexOf(userId) > -1) return state;

    return [...state, userId];
  })
);