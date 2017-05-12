import { Injectable } from '@angular/core';

@Injectable()
export class BlogService {

BlogDetails = [];

  constructor() { }

  public setBlogDetails(blogDetails){

   this.BlogDetails.push(blogDetails);

  }
public getBlogDetails(){

	return this.BlogDetails;
}
}
