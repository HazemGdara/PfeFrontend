import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {UserModel} from '../../../shared/user-model';
import {UsersService} from '../../../shared/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user: UserModel;
  constructor(private router: Router, private userService: UsersService) { }

  ngOnInit() {
  }
  add(form: NgForm) {
    this.user = new UserModel(form.value.id, form.value.nom, form.value.prenom, form.value.login, form.value.mdp, form.value.role);
    this.userService.addUser(this.user);
    this.router.navigate(['admin/users']);
  }
}
