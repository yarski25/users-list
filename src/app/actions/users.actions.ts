import {createActionGroup, emptyProps } from '@ngrx/store';

export const UsersActions = createActionGroup({
  source: 'App',
  events: {'Users Opened' : emptyProps()},
})




