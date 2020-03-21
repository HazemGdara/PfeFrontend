import { Injectable } from '@angular/core';
import { UserModel } from './user-model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private users: UserModel[] = [
    new UserModel(1, 'hazem', 'gdara', 'hazemgdara', '12456', 'testeur'),
    new UserModel(2, 'bayoud', 'emna', 'bayoudemna', '12456', 'testeur')
  ];
  private i: number;

  constructor() { }

  getUsers() {
    return this.users;
  }
  getUser(index: number) {
    return this.users[index];
  }
  deleteUser(index: number) {
    this.users.splice(index,1);
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
}
