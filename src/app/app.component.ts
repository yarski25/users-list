import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { Store } from '@ngrx/store';
import { UsersApiActions } from './actions/users-api.actions';
import { selectUsers } from './state/users.selectors';
import { UsersActions } from './actions/users.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'users-list';

  users$ = this.store.select(selectUsers);

  constructor(private userService: UserService, private store: Store) {}
 
  ngOnInit() {
    this.store.dispatch(UsersActions.usersOpened());

    // this.userService
    //   .getUsers()
    //   .subscribe((users) =>
    //     this.store.dispatch(UsersApiActions.usersLoadedSuccess({ users }))
    //   );
  }
}
