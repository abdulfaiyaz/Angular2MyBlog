import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { userDetailsComponent } from './userDetails/userDetails.component';
import { loginComponent } from './login/login.component';
import { blogComponent } from './blog/blog.component';
import {LoginService} from './login/login.service';
import {BlogService} from './blog/blog.service';

const routes = [
  { path: 'login', component: loginComponent },
  { path: 'userDetails', component: userDetailsComponent },
   { path: 'blog', component: blogComponent },
  { path: '**', redirectTo: 'login' }
];


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
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [LoginService,BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
