import { createActionGroup, props } from '@ngrx/store';
import { IUser } from '../interfaces/user.interface';
//import { User } from '../models/user.model';
 
// export const UsersActions = createActionGroup({
//   source: 'Users',
//   events: {
//     'Add User': props<{ userId: number }>(),
//     'Remove User': props<{ userId: number }>(),
//   },
// });
 
export const UsersApiActions = createActionGroup({
  source: 'Users API',
  events: {
    'Retrieved User List': props<{ users: ReadonlyArray<IUser> }>(),
  },
});