import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/users.service';
import {Router} from '@angular/router';
import {UserModel} from '../../../shared/user-model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: UserModel[];
  i: number;
  constructor(private usersService: UsersService, private router: Router) { }
  ngOnInit() {
    this.usersService.getUsers().subscribe((data) => {
      this.users = data;
      // console.log(data);
    });

  }

  removeUser(id: number) {
    // console.log(this.users);
    // console.log('id= ' + id);
    this.usersService.deleteUser(id).subscribe(
      () => {console.log('user with id ' + id + 'was deleted');
             this.usersService.getUsers().subscribe((data) => {
          this.users = data;
          // console.log(data);
        });}
    );


  }
  goToUpdatePage(id: number) {
    this.router.navigate(['admin', 'users', id]);
  }
  goToAddPage() {
    this.router.navigate(['admin', 'users', 'create']);
  }
  // update(index: number) {
  //
  // }
}
