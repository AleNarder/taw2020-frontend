import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog'
import { ForgotPasswordComponent } from '../../helpers/forgot-password/forgot-password.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  isUser: boolean
  firstname: string
  lastname: string
  password: string
  confirmpassword: string
  email: string
  hide: boolean

  forgotPasswordRef: MatDialogRef<ForgotPasswordComponent>

  constructor(private dialog: MatDialog) { 
    this.isUser = this.hide = true
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

}
