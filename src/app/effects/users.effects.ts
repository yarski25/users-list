import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map } from 'rxjs';
import { UserService } from '../services/user.service';
import { UsersActions } from '../actions/users.actions';
import { UsersApiActions } from '../actions/users-api.actions';

@Injectable()
export class UsersEffects {
  
  constructor(private actions$: Actions, 
              private userService: UserService){}

  loadUsers$ = createEffect(()=> 
    this.actions$.pipe(
      ofType(UsersActions.usersOpened),
      exhaustMap(()=> 
        this.userService.getUsers()
        .pipe(map((users) => UsersApiActions.usersLoadedSuccess({users})))
    )
  )
  );
}
