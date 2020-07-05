import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/views/login/login.component';
import { HomeComponent } from './components/views/home/home.component';
import { ReservedComponent } from './components/views/reserved/reserved.component';
import { ResetPasswordComponent } from './components/views/reset-password/reset-password.component'
import { PageNotFoundComponent } from './components/views/page-not-found/page-not-found.component'
import { AuctionComponent } from './components/views/auction/auction.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'reserved',
    component: ReservedComponent
  },
  {
    path: 'resetpassword',
    component: ResetPasswordComponent
  },
  {
    path: 'auction',
    component: AuctionComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
