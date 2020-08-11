import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/http/user.service';
import { appStateService } from 'src/app/services/state/appState.service';
import { User } from 'src/app/services/models/User';
import { Response } from 'src/app/services/models/Response';
import { AuthService } from 'src/app/services/http/auth.service';
import { ModeratorComponent } from 'src/app/components/modals/moderator/moderator.component'
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SocketioService } from 'src/app/services/socket/socketio.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[]
  waiting: boolean
  status = {
    wrong: false,
    message: null
  }

  moderatorDialogRef: MatDialogRef<ModeratorComponent>


  constructor(
    private dialog: MatDialog,
    private userService: UserService,
    private appState: appStateService,
    private authService: AuthService,

  ) { }

  ngOnInit(): void {
    this.userService.get(this.appState.state.token).subscribe((res: Response<User[]>) => {
      this.users = res.payload.filter(user => user._id != this.appState.state.user._id)
    })
  }

  error (message) {
    this.waiting = false
    this.status.wrong = true
    this.status.message = message
    setTimeout(() => this.status.wrong = false, 2000)
  }

  deleteUser (id) {
    this.userService.delete(this.appState.state.token, id).subscribe(( value ) => {
      this.users = this.users.filter((user) => user._id != id)
    }, (errorMessage) => {
      this.error(errorMessage)
    })
  }

  addAdmin (email) {
    this.authService.moderator(this.appState.state.token, email).subscribe((value) => {})
  }

  openDialog (): void {
    this.moderatorDialogRef = this.dialog.open(ModeratorComponent)
  }

}
