import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent {
  UsersList: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getData().subscribe((response: any[]) => {
      this.UsersList = response;
    });
  }
}
