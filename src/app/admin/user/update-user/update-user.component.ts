import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../../shared/users.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UserModel} from '../../../shared/user-model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  user: UserModel;
  id: number;
  index: number;
  constructor(private userService: UsersService, private route: ActivatedRoute, private router: Router) {
    this.id = +route.snapshot.params.id;
    this.user = this.userService.getUserById(this.id);
  }

  update(form: NgForm) {
    this.user.nom = form.value.nom;
    this.user.prenom = form.value.prenom;
    this.user.login = form.value.login;
    this.user.mdp = form.value.mdp;
    this.user.role = form.value.role;
    this.router.navigate(['admin/users']);
  }
  ngOnInit() {
  }

}
