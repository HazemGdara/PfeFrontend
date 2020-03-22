import {Injectable, OnInit} from '@angular/core';
import { UserModel } from './user-model';
import {RoleModel} from './role-model';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService{
  private role: RoleModel = new RoleModel(1, 'testeur', null, null);
  private users: UserModel[];

  // private users: UserModel[] = [
  //   new UserModel(1, 'hazem', 'gdara', 'hazemgdara', '12456', this.role),
  //   new UserModel(2, 'bayoud', 'emna', 'bayoudemna', '12456', this.role)
  // ];
  private i: number;

  constructor(private http: HttpClient) {
    // this.users = this.getUsers();
    // console.log(this.getUsers());
  }

  getUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>('http://localhost:8090/users');
  }
  getUser(index: number) {
    return this.users[index];
  }
  deleteUser(id: number): Observable<void> {
   return this.http.delete<void>('http://localhost:8090/users/' + id);
  }


  getUserById(id: number): Observable<UserModel> {
    return this.http.get<UserModel>('http://localhost:8090/users/' + id);
  }

  addUser(user: UserModel) {
    this.http.post(
      'http://localhost:8090/users', user
    ).subscribe(data => {
      console.log(data);
    });
  }

  updateUser(id: number, user: UserModel): Observable<void> {
    return this.http.put<void>('http://localhost:8090/users/' + id, user);
  }
  }
  // updateUser(index: number) {
  //
  // }

