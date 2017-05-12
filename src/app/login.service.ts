import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

userDetails:string;

  constructor() { }

  public setUserDetails(loginDetails){
  console.log(loginDetails);
   this.userDetails=loginDetails;
  }
public getUserDetails(){
console.log(this.userDetails);
	return this.userDetails;
}
}
