import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './Home/app.home-component';
import { LoginComponent } from './Login/login.component';
import { OrderComponent } from './Orders/app.order-component';
import { ReviewComponent } from './Reviews/app.review-component';

const routes: Routes = [
  {
    path:'', component: HomeComponent
  },
  {
    path:'login', component: LoginComponent
  }];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
