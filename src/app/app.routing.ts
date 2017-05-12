
import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { userDetailsComponent } from './userDetails/userDetails.component';
import { loginComponent } from './login/login.component';
import { blogComponent } from './blog/blog.component';

const routes=[

  

    { path: 'userDetails', component: userDetailsComponent },
    { path: 'login', component: loginComponent },
    { path: 'blog', component: blogComponent },
    { path: '**', redirectTo: 'login' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class appRoutingModule {}
