import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { IUser } from '../interfaces/user.interface';

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

  getUsers(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(this.api).pipe(
      tap((data: any) => console.log('fetched users: ', data)),
      catchError(this.handleError<IUser[]>('getUsers')));
  } 

  getUser(id: number): Observable<IUser>{
    return this.httpClient.get<IUser>(`${this.api}/${id}`).pipe(
      tap((data: any)=> console.log('fetched user: ', data)),
      catchError(this.handleError<IUser>('getUser')));
  }


  private handleError<T>(operation='operation'){
    return (error: HttpErrorResponse) : Observable<T> =>{
      // log to console
      console.error(error);
      
      // form message with error status code + body
      const message: string = `server returned code ${error.status} with body ${error.error}`;
      throw new Error(`${operation} failed: ${message}`);
    };
  }

  // getUsers(): Observable<Array<User>> {
  //   return this.httpClient.get<{items: User[]}>(this.api).pipe(map((users)=> users.items || []));
  // }
}
