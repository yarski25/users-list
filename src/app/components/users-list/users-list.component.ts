import { IUser } from '@App/app/interfaces/user.interface';
import { UsersApiActions } from '@App/app/actions/users-api.actions';
import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent {

  @Input() users: ReadonlyArray<IUser> = [];

  //$users = this.store.select(selectUsers);

  //UsersList: Observable<User>[] = [];

  //user: IUser = {id: 0, name: "default", address:{city: "default"}};
  //usersList: IUser[]=[];

  // constructor(private userService: UserService, private store: Store) {}

  // ngOnInit() {

  //   this.userService
  //   .getUsers()
  //   .subscribe((users) =>
  //     this.store.dispatch(UsersApiActions.retrievedUserList({ users }))
  //   );
  //   // this.userService.getUsers().subscribe((response: IUser[]) => {
  //   //   this.usersList = response;

  //   // this.userService.getUser(1).subscribe((response: IUser)=>{
  //   //   this.user = response;

  //   // })

  //   // this.userService
  //   // .getUsers
  //   // .subscribe((users) =>
  //   //   this.store.dispatch(UsersApiActions.retrievedUserList({ users }))
  //   // );
  // }
}
