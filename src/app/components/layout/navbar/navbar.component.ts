import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { appStateService } from 'src/app/services/state/appState.service'
import { AuthService } from 'src/app/services/http/auth.service'

/**
 * Componente di layout, costituisce la navbar dell'applicazione
 */
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

  go2Home () {
    this.router.navigate(['/'])
  }

  go2Dash () {
    this.router.navigate(['/reserved'])
  }

  get username () {
    return this.appState.state.user.username
  }

  isDashboard () {
    return this.router.url === '/reserved'
  }

  get logged () {
    return this.appState.state.logged
  }

  toggle () {
    this.appState.setStateProp("sidenav", !this.appState.state.sidenav)
  }

}
