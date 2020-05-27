import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog'
import { ForgotPasswordComponent } from '../../shared/forgot-password/forgot-password.component';
import { Router, ActivatedRoute } from '@angular/router'
import { AuthService } from 'src/app/services/http/auth.service'
import { Config } from 'protractor';
import { UserService } from 'src/app/services/http/user.service';
import { UserStateService } from 'src/app/services/state/userState.service'

import fieldHelpers from '../../../helpers/form'
import { Response } from 'src/app/services/models/Response';
import { User, UserPayload } from 'src/app/services/models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  fields: any = {}

  token: string
  id: string
  isModerator: boolean
  isUser: boolean
  hide: boolean
  waiting: boolean
  wrong: boolean
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
    private userState: UserStateService,
    private route: ActivatedRoute
  ) { 
    this.route.queryParams.subscribe(params => {
      this.isModerator = params['moderator'] || false
      this.id = params['id']
      this.token = params['tkn']
    })
    this.isUser = this.hide = true
    this.waiting = this.wrong = false
    for (const field in fieldHelpers) {
      this.fields[field] = fieldHelpers[field].check()
    }
    if (this.token && this.id) {
      this.user.modify({confirmed: true}, this.id, this.token).subscribe(() => {
        this.waiting = false
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
    console.log('hello')
    this.forgotPasswordRef = this.dialog.open(ForgotPasswordComponent)
    this.forgotPasswordRef.afterClosed().subscribe(email => this.send(email))
  }

  send (email): void {
    console.log('email sent: ', email)
  }

  error (message) {
    this.waiting = false
    this.status.wrong = true
    this.status.message = message
    setTimeout(() => this.status.wrong = false, 2000)
  }

  login () {
    if ((this.fields.email.status === 'VALID' && this.fields.password.status === this.fields.email.status)) {
      this.waiting = true
      this.auth.login({username: this.fields.email.value, password: this.fields.password.value}).subscribe((res: Response<UserPayload>) => {
        this.waiting = false
        this.router.navigate(['/reserved'])
        this.userState.user = res.payload.user
        this.userState.logged = true
        this.auth.setToken(res.payload.token)
      }, (errorMessage) => {
        this.error(errorMessage)
      })
    }
  }

  register () {
    this.waiting = true
    const newUser = {}
    for (const field in this.fields) {
      newUser[field] = this.fields[field].value
    }
    newUser['moderator'] = this.isModerator
    newUser['confirmed'] = false
    this.user.new(newUser).subscribe(data => {
      this.waiting = false
    }, (error) => {
    })
  }

  checkError (field) {
    return fieldHelpers[field].validate(this.fields[field])
  }

}
