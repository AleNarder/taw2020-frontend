import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { appStateService } from 'src/app/services/state/appState.service'
import { AuthService } from 'src/app/services/http/auth.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router,
    private appState: appStateService,
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

  get logged () {
    return this.appState.state.logged
  }

  toggle () {
    this.appState.setStateProp("sidenav", !this.appState.state.sidenav)
  }

}
