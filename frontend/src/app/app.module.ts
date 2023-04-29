import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/app.home-component';
import { OrderComponent } from './Orders/app.order-component';
import { ReviewComponent } from './Reviews/app.review-component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrderComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
