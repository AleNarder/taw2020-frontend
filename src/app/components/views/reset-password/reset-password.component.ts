import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { UserService } from 'src/app/services/http/user.service';

/**
 * Componente utilizzato per effettuare il cambio password
 */
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  id: string
  token: string
  password = new FormControl('', [Validators.required, Validators.pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})'))])
  hide: boolean
  waiting: boolean
  wrong: boolean

  constructor(
    private route: ActivatedRoute,
    private user: UserService,
    private router: Router
    ) {
    this.route.queryParams.subscribe(params => {
      this.id = params['usr']
      this.token = params['tkn']
      console.log(this.token)
    })
    this.hide = true
    this.waiting = this.wrong = false
  }

  ngOnInit(): void {
  }

  resetPassword () {
    if (this.password.value !== '') {
      this.waiting = true
      this.user.modify({password: this.password.value}, this.id, this.token).subscribe((data) => {
        this.waiting = false
        this.router.navigate(['/login'])
      }, (error) => {
        this.wrong = true
        this.waiting = false
        setTimeout(() => this.wrong = false, 4000)
      })
    }
  }

  getPasswordErrorMessage () {
    if (this.password.hasError('required')) {
      return 'Il campo password non può essere vuoto';
    } else if (this.password.hasError('pattern')) {
      return 'La password deve contenere'
    }
  }
}
