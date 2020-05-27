import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { UserStateService } from 'src/app/services/state/userState.service';
import { AuthService } from 'src/app/services/http/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private user = null

  constructor(
    private router: Router,
    private userState: UserStateService,
    private authService: AuthService
    ) { 
    }

  ngOnInit(): void {
  }

  onLogin () {
    this.router.navigate(['/login'])
  }

  onLogout () {
    this.authService.logout()
    this.router.navigate(['/'])
  }

  isLogged () {
    return this.userState.logged
  }

}
