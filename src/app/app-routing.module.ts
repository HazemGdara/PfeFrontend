import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { ErrorComponent } from './error/error.component';
import { UserComponent } from './admin/user/user.component';
import {UpdateUserComponent} from './admin/user/update-user/update-user.component';
import {AddUserComponent} from './admin/user/add-user/add-user.component';


const approutes: Routes = [

  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'admin/users', component: UserComponent },
  { path: 'admin/users/create', component: AddUserComponent },
  { path: 'admin/user/:id', component: UpdateUserComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(approutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
