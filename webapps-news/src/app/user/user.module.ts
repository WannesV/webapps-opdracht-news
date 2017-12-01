import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { RouterModule } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { AuthGuardService } from './auth-guard.service';

const routes = [
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'register', component: RegisterComponent }
]
@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    LoginComponent, 
    RegisterComponent, 
    LogoutComponent
  ],
  providers: [
    AuthenticationService,
    AuthGuardService
  ],
  exports: [
    
  ]
})
export class UserModule { }
