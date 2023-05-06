import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { UserService } from "./user.service"
import { of, throwError } from "rxjs";
import { IUser } from "../interfaces/user.interface";

describe('UserService', ()=>{
    let userService: UserService;
    let httpClientSpy: any;

    beforeEach(()=>{
        httpClientSpy={
            get: jest.fn()
        }

        userService = new UserService(httpClientSpy);
    })

    it('should be created', ()=>{
        expect(userService).toBeTruthy();
    })

    it('method getUsers() should return users', (done)=>{
        const api: string = 'https://jsonplaceholder.typicode.com/users';

        const res: Array<IUser> = [ {id: 1, name: "user1", address: {city: "city1"}},
                                    {id: 2, name: "user2", address: {city: "city2"}},
                                    {id: 3, name: "user3", address: {city: "city3"}}];

        jest.spyOn(httpClientSpy, 'get').mockReturnValue(of(res));
        userService.getUsers().subscribe({
            next: data => {
                expect(data).toEqual(res);
                done();
            },
            error: error => console.log(error)
        }
        );
        expect(httpClientSpy.get).toBeCalledTimes(1);
        expect(httpClientSpy.get).toHaveBeenCalledWith(api);
    })

    it('method getUsers() should throw error', (done)=>{
        const api: string = 'https://jsonplaceholder.typicode.com/users';

        const errorRespone = new HttpErrorResponse({
            error: "test 404 error",
            status: 404,
            statusText: "Not found"
        })
        
        jest.spyOn(httpClientSpy, 'get').mockReturnValue(throwError(()=>errorRespone));
        userService.getUsers().subscribe({
            next: data => console.log(data),
            error: error => {
                expect(error.message).toContain("test 404 error");
                done();
            }
        }
        );
        expect(httpClientSpy.get).toBeCalledTimes(1);
        expect(httpClientSpy.get).toHaveBeenCalledWith(api);
    })

    it('method getUser(1) should return user', (done)=>{
        const userId: number = 1;
        const api: string = `https://jsonplaceholder.typicode.com/users/${userId}`;
        const res: IUser = {id: userId, name: `user${userId}`, address: {city: `city${userId}`}};

        jest.spyOn(httpClientSpy, 'get').mockReturnValue(of(res));
        userService.getUser(userId).subscribe({
            next: data => {
                expect(data).toEqual(res);
                done();
            },
            error: error => console.log(error)
        }
        );
        expect(httpClientSpy.get).toBeCalledTimes(1);
        expect(httpClientSpy.get).toHaveBeenCalledWith(api);
    })

    it('method getUser(1) should throw error', (done)=>{
        const userId: number = 1;
        const api: string = `https://jsonplaceholder.typicode.com/users/${userId}`;

        const errorRespone = new HttpErrorResponse({
            error: "test 404 error",
            status: 404,
            statusText: "Not found"
        })

        jest.spyOn(httpClientSpy, 'get').mockReturnValue(throwError(()=>errorRespone));
        userService.getUser(userId).subscribe({
            next: data => console.log(data),
            error: error => {
                expect(error.message).toContain("test 404 error");
                done();
            }
        }
        );
        expect(httpClientSpy.get).toBeCalledTimes(1);
        expect(httpClientSpy.get).toHaveBeenCalledWith(api);
    })


})