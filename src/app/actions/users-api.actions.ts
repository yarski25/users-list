import { createActionGroup, props } from '@ngrx/store';
import { IUser } from '../interfaces/user.interface';

export const UsersApiActions = createActionGroup({
    source: 'App API',
    events: {
      'Users Loaded Success': props<{users: ReadonlyArray<IUser>}>()
    },
  });