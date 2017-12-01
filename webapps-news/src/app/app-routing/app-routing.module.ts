import { RegisterComponent } from '../user/register/register.component';
import { LogoutComponent } from '../user/logout/logout.component';
import { LoginComponent } from '../user/login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SourceListComponent } from '../source/source-list/source-list.component';
import { AddSourceComponent } from '../source/add-source/add-source.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { AuthGuardService } from '../user/auth-guard.service';
import { AuthenticationService } from '../user/authentication.service';

const appRoutes: Routes = [
  {
    path: 'source',
    canActivate: [ AuthGuardService ],
    loadChildren: 'app/source/source.module#SourceModule'
  },
  { path: '', redirectTo: 'source/list', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes,
      {preloadingStrategy: PreloadAllModules})
  ],
  declarations: [
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class AppRoutingModule { }
