import { Component } from '@angular/core';
import {Router,NavigationEnd} from '@angular/router';
import { userDetailsComponent } from '../userDetails/userDetails.component';
import { User } from '../common/types/User';
import {LoginService} from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class loginComponent {
  title = 'Please fill the below Form to Get In!';
   user = new User();
 
  constructor(private router : Router,private loginService: LoginService) {
 
  };
  getIn(oUser) {
  console.log(oUser);
  this.loginService.setUserDetails(oUser);
       this.router.navigate(['/userDetails']);

};

}
