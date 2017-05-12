import { Component } from '@angular/core';
import {Router,NavigationEnd} from '@angular/router';
import { loginComponent } from './login/login.component';
import { userDetailsComponent } from './userDetails/userDetails.component';
import { blogComponent } from './blog/blog.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
}
