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

  getUsers(): Observable<any> {
    return this.http.get('http://localhost:8090/users');
  }
  getUser(index: number) {
    return this.users[index];
  }
  deleteUser(id: number): Observable<void> {
   return this.http.delete<void>('http://localhost:8090/users/`id`');
  }


  getUserById(id: number) {
    for (this.i = 0; this.i < this.users.length; this.i++) {
      if (this.users[this.i].id === id) {
        return this.users[this.i];
      }
    }
  }
  addUser(user: UserModel) {
    this.users.push(user);
  }
  // updateUser(index: number) {
  //
  // }

  doRegistration(user) {
    this.http.post(
      'http://localhost:8090/users', user
    ).subscribe((data) => {
      console.log(user);
    });
  }
}
