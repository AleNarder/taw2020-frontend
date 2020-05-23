import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {

  isUser: boolean

  constructor() { 
    this.isUser = true
  }

  ngOnInit(): void {
  }

  switch (): void {
    this.isUser = !this.isUser
  }
}
