import { createSelector, createFeatureSelector } from '@ngrx/store';
import { IUser } from '../interfaces/user.interface';
//import { User } from '../models/user.model';

export const selectUsers = createFeatureSelector<ReadonlyArray<IUser>>('users');

// export const selectCollectionState = createFeatureSelector<ReadonlyArray<number>>('collection');

// export const selectUserCollection = createSelector(
//   selectUsers,
//   selectCollectionState,
//   (users, collection) => {
//     return collection.map((id) => users.find((user) => user.id === id)!);
//   }
// );