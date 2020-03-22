import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ErrorComponent } from './error/error.component';
import { UserComponent } from './admin/user/user.component';
import { UserListComponent } from './admin/user/user-list/user-list.component';
import { UsersService } from './shared/users.service';
import { UpdateUserComponent } from './admin/user/update-user/update-user.component';
import { AddUserComponent } from './admin/user/add-user/add-user.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignInComponent,
    ErrorComponent,
    UserComponent,
    UserListComponent,
    UpdateUserComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
