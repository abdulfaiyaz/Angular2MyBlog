import { Component } from '@angular/core';
import { Blogger} from '../common/types/Blogger';
import {Router,NavigationEnd} from '@angular/router';
import {BlogService} from './blog.service';
import { userDetailsComponent } from '../userDetails/userDetails.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class blogComponent {

  constructor(private router : Router,private blogService: BlogService) {
 
  };
blogger = new Blogger();
  blogIt(oBlogger) {debugger;
  	this.blogService.setBlogDetails(oBlogger);
  	 this.router.navigate(['/userDetails']);

  }
}