import { createActionGroup, props } from '@ngrx/store';
import { User } from '../models/user.model';
 
export const UserActions = createActionGroup({
  source: 'Users',
  events: {
    'Add User': props<{ userId: string }>(),
    'Remove User': props<{ userId: string }>(),
  },
});
 
export const UsersApiActions = createActionGroup({
  source: 'Users API',
  events: {
    'Retrieved User List': props<{ books: ReadonlyArray<User> }>(),
  },
});