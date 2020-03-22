import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../../shared/users.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UserModel} from '../../../shared/user-model';
import {NgForm} from '@angular/forms';
import {RoleService} from '../../../shared/role.service';
import {RoleModel} from '../../../shared/role-model';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  user: UserModel;
  roles: RoleModel[];
  defaultValue: number;
  id: number;
  index: number;
  constructor(private userService: UsersService, private route: ActivatedRoute, private router: Router, private roleService: RoleService) {
    this.id = +route.snapshot.params.id;
    this.userService.getUserById(this.id).subscribe(data => {
      this.user = data;
      this.defaultValue = +this.user.role.id;
    });
  }

  ngOnInit() {
    this.roleService.getRoles().subscribe((data) =>{
      this.roles = data;
    });
  }
  update(form: NgForm) {
    this.user.id = form.value.id;
    this.user.nom = form.value.nom;
    this.user.prenom = form.value.prenom;
    this.user.login = form.value.login;
    this.user.mdp = form.value.mdp;
    this.user.role = form.value.role;
    // this.router.navigate(['admin/users']);
  }

}
