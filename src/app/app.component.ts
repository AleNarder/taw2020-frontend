import { Component, OnInit } from '@angular/core';
import { SocketioService } from './services/socket/socketio.service';
import { appStateService } from './services/state/appState.service';
import { AuthService } from './services/http/auth.service';
import { UserService } from './services/http/user.service';
import { User } from './services/models/User';
import { Response } from './services/models/Response'
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  constructor(
    private socketService: SocketioService,
    private appState: appStateService,
    private userService: UserService,
    private authService: AuthService,
    private _snackBar: MatSnackBar
    ) {
    }

  ngOnInit () {
    this.socketService.setupSocketConnection()
    this.checkRedirect()
  }

  checkRedirect () {
    let token = this.authService.checkToken()
    if (token) {
      this.userService.get(token.encodedToken, token.decodedToken.id).subscribe((res: Response<User>)=> {
        this.appState.state = {
          user: res.payload,
          logged: true,
          sidenav: false,
          token: token.encodedToken
        }
      })
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  get waiting () {
    return this.appState.waiting
  }

}
