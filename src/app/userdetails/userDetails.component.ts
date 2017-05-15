import { Component } from '@angular/core';
import {Router,NavigationEnd} from '@angular/router';
import { blogComponent } from '../blog/blog.component';
import { User } from '../common/types/User';
import {LoginService} from '../login/login.service';
import {BlogService} from '../blog/blog.service';

@Component({
  selector: 'app-userDetails',
  templateUrl: './userDetails.component.html',
  styleUrls: ['./userDetails.component.scss']
})
export class userDetailsComponent {


constructor(private router : Router, private loginService : LoginService, private blogService : BlogService) {
 
  };

userdata = this.loginService.getUserDetails();
blogDetails = this.blogService.getBlogDetails();


  writeBlog() {
       this.router.navigate(['/blog']);

};



  
}