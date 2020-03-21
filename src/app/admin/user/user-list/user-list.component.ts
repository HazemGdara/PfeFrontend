import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users = [];
  i: number;
  constructor(private usersService: UsersService, private router: Router) { }
  ngOnInit() {
    this.users = this.usersService.getUsers();
    console.log(this.users);
  }

  removeUser(index: number) {
    // console.log(this.users);
    console.log('index= ' + index);
    this.usersService.deleteUser(index);
  }
  goToUpdatePage(index: number) {
    this.router.navigate(['admin', 'user', this.users[index].id]);
  }
  goToAddPage() {
    this.router.navigate(['admin', 'users', 'create']);
  }
  // update(index: number) {
  //
  // }
}
