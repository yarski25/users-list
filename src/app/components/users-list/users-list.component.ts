import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent {

  //$users = this.store.select(selectUsers);

  //UsersList: Observable<User>[] = [];

  usersList: User[]=[];

  constructor(private userService: UserService, private store: Store) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((response: User[]) => {
      this.usersList = response;

      console.log(this.usersList);
    });

    // this.userService
    // .getUsers
    // .subscribe((users) =>
    //   this.store.dispatch(UsersApiActions.retrievedUserList({ users }))
    // );
  }
}
