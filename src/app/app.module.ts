import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {appRoutingModule} from './app.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { userDetailsComponent } from './userDetails/userDetails.component';
import { loginComponent } from './login/login.component';
import { blogComponent } from './blog/blog.component';
import {LoginService} from './login/login.service';
import {BlogService} from './blog/blog.service';
import {routingComponents} from './app.routing';




@NgModule({
  declarations: [
    AppComponent,
    userDetailsComponent,
    loginComponent,
    blogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    appRoutingModule
  
  ],
  providers: [LoginService,BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
