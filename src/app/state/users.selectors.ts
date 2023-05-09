import { createFeatureSelector } from '@ngrx/store';
import { IUser } from '../interfaces/user.interface';

export const selectUsers = createFeatureSelector<ReadonlyArray<IUser>>('users');