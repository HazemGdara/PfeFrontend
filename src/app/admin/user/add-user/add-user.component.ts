import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {UserModel} from '../../../shared/user-model';
import {UsersService} from '../../../shared/users.service';
import {RoleModel} from '../../../shared/role-model';
import {RoleService} from '../../../shared/role.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  defaultValue = 1;
  user: UserModel;
  roles: RoleModel[];
  constructor(private router: Router,
              private userService: UsersService,
              private roleService: RoleService) { }

  ngOnInit() {
  this.roleService.getRoles().subscribe((data) =>{
    this.roles = data;
  });
  }
  add(form: NgForm) {
    const role: RoleModel = new RoleModel(+form.value.role);
    this.user = new UserModel(form.value.id, form.value.nom, form.value.prenom, form.value.login, form.value.mdp, role);
    console.log(this.user);
    this.userService.addUser(this.user);
    this.router.navigate(['admin/users']);
  }
}
