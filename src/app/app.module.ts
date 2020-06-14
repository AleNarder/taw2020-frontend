import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/views/login/login.component';
import { HomeComponent } from './components/views/home/home.component';
import { ReservedComponent } from './components/views/reserved/reserved.component';
import { AuctionComponent } from './components/views/auction/auction.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { FooterComponent } from './components/layout/footer/footer.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card'
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';

import { SocketioService } from './services/http/socketio.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './components/shared/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/views/reset-password/reset-password.component';
import { PageNotFoundComponent } from './components/views/page-not-found/page-not-found.component';
import { UsersComponent } from './components/views/managers/users/users.component';
import { StatsComponent } from './components/views/managers/stats/stats.component';
import { InsertionsComponent } from './components/views/managers/insertions/insertions.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ReservedComponent,
    AuctionComponent,
    NavbarComponent,
    FooterComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    PageNotFoundComponent,
    UsersComponent,
    StatsComponent,
    InsertionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatListModule
  ],
  providers: [SocketioService],
  bootstrap: [AppComponent],
  entryComponents: [ForgotPasswordComponent]
})
export class AppModule { }
