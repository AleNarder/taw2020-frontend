import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog'
import { ForgotPasswordComponent } from '../../shared/forgot-password/forgot-password.component';
import { Router } from '@angular/router'
import { AuthService } from '../../../services/auth.service'
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  isUser: boolean
  firstname: FormControl
  lastname: FormControl
  password: FormControl
  confirmpassword: FormControl
  email = new FormControl('', [Validators.required, Validators.email])
  hide: boolean
  waiting: boolean

  @Output() statusInfo = new EventEmitter<any>()

  forgotPasswordRef: MatDialogRef<ForgotPasswordComponent>

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private auth: AuthService,
  ) { 
    this.isUser = 
    this.hide = true
    this.waiting = false

    this.firstname = new FormControl('',[Validators.required])
    this.lastname = new FormControl('', [Validators.required])
    this.password = new FormControl('', [Validators.required, Validators.pattern(new RegExp('^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$'))])
    this.confirmpassword = new FormControl('', [Validators.required])
    
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

  login () {
    this.waiting = true
    this.auth.login({username: this.email, password: this.password}).subscribe((data) => {
      this.waiting = false
      this.router.navigate(['/reserved'])
    }, (error) => {
      this.statusInfo.emit({
        type: 'error',
        message: error
      })
      this.waiting = false
    })
  }

  register () {
    console.log('register') 
  }

  getErrorMessage() {
    if (this.email.hasError('required')
    || this.firstname.hasError('required')
    || this.lastname.hasError('required')
    || this.password.hasError('required')
    || this.confirmpassword.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

}
