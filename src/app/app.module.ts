import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { LandingComponent } from './Components/landing/landing.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { HomeComponent } from './Components/home/home.component';
import { UpdateComponent } from './Components/update/update.component';
import { DeleteComponent } from './Components/delete/delete.component';
import { RouterModule, Routes } from '@angular/router';
import { LogoutComponent } from './Components/logout/logout.component';
import { FormsModule } from '@angular/forms';

const appRoute:Routes = [
  {path:"",component:LandingComponent},
  {path:"Login",component:LoginComponent},
  {path:"Register",component:RegisterComponent},
  {path:"Home",component:HomeComponent},
  {path:"Update/:id",component:UpdateComponent},
  {path:"Delete/:id",component:DeleteComponent},
  {path:"Logout",component:LogoutComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    UpdateComponent,
    DeleteComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
