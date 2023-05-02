import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable, map } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private api: string = 'https://jsonplaceholder.typicode.com/users';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<Array<User>> {
    return this.httpClient.get<User[]>(this.api);
  } 

  // getUsers(): Observable<Array<User>> {
  //   return this.httpClient.get<{items: User[]}>(this.api).pipe(map((users)=> users.items || []));
  // }
}
