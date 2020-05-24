import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  
  user: string
  password: string
  confirmpassword: string
  hide: boolean

  constructor( private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.user = params['uid']
    })
    this.hide = true
  }

  ngOnInit(): void {
  }

  resetPassword () {
    console.log('resetpassword')
  }

}
