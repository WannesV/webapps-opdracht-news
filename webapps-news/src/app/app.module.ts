import { UserModule } from './user/user.module';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { SourceModule } from './source/source.module';
import { AuthenticationService } from './user/authentication.service';
import { AuthGuardService } from './user/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule, 
    UserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
