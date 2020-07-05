import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog'
import { ForgotPasswordComponent } from '../../modals/forgot-password/forgot-password.component';
import { Router, ActivatedRoute } from '@angular/router'
import { AuthService } from 'src/app/services/http/auth.service'
import { UserService } from 'src/app/services/http/user.service';

import fieldHelpers from '../../../helpers/form'
import { Response } from 'src/app/services/models/Response';
import { UserPayload, User } from 'src/app/services/models/User';
import { appStateService } from 'src/app/services/state/appState.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  fields: any = {}
  email: string
  token: string
  id: string
  isModerator: boolean
  isUser: boolean
  hide: boolean
  status = {
    wrong: false,
    message: null
  }

  @Output() statusInfo = new EventEmitter<any>()

  forgotPasswordRef: MatDialogRef<ForgotPasswordComponent>

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private user: UserService,
    private auth: AuthService,
    private appState: appStateService,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(params => {
      this.isModerator = params['moderator']
      this.email = params['email']
      this.id = params['id']
      this.token = params['tkn']
    })
    this.hide = true
    this.isUser = (this.isModerator) ? false : true
    for (const field in fieldHelpers) {
      this.fields[field] = fieldHelpers[field].check()
    }
    if (this.token && this.id) {
      this.user.modify({confirmed: true}, this.id, this.token).subscribe(() => {
      }, (errorMessage) => {
        this.error(errorMessage)
      })
    }
  }

  ngOnInit(): void {
  }

  switch (): void {
    this.isUser = !this.isUser
  }

  openDialog (): void {
    this.forgotPasswordRef = this.dialog.open(ForgotPasswordComponent)
    this.forgotPasswordRef.afterClosed().subscribe(() => this.router.navigate(['/']))
  }


  error (message) {
    console.log(message)
    this.status.wrong = true
    this.status.message = message
    setTimeout(() => this.status.wrong = false, 2000)
  }

  login () {
    if ((this.fields.email.status === 'VALID' && this.fields.password.status === this.fields.email.status)) {
      this.auth.login({username: this.fields.email.value, password: this.fields.password.value}).subscribe((res: Response<UserPayload>) => {
        this.router.navigate(['/reserved'])
        this.appState.state = {
          user: res.payload.user,
          logged: true,
          sidenav: false,
          token: res.payload.token
        }
        this.auth.setToken(res.payload.token)
      }, (errorMessage) => {
        this.error(errorMessage)
      })
    }
  }

  register () {
    let newUser = {} as User
    for (let field in this.fields) {
      newUser[field] = this.fields[field].value
    }
    if (this.isModerator) {
      newUser.email = this.email
      newUser.moderator = newUser.confirmed = true
    } else {
      newUser.moderator = newUser.confirmed = false
    }
    this.user.new(newUser).subscribe(data => {
      this.router.navigate['/']
    }, (errorMessage) => {
      this.error(errorMessage)
    })
  }

  checkError (field) {
    return fieldHelpers[field].validate(this.fields[field])
  }

}
