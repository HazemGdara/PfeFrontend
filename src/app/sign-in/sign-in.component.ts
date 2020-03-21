import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  un = '';
  pass = '';
  submitted = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.submitted = true;

    this.un = form.value.username;
    this.pass = form.value.password;

    if (this.un === 'admin') {
      this.router.navigate(['admin/users']);
    }
  }

}
