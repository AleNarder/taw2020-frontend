import { Component, OnInit, ViewChild } from '@angular/core';
import { appStateService } from 'src/app/services/state/appState.service';
import { AuthService } from 'src/app/services/http/auth.service';
import { Router } from '@angular/router';

/**
 * Permette la navigazione delle sezioni dell'area riservata di un utente
 */
@Component({
  selector: 'app-reserved',
  templateUrl: './reserved.component.html',
  styleUrls: ['./reserved.component.css']
})
export class ReservedComponent implements OnInit {

  private baseOptions = [{
    title:'Le mie inserzioni',
    icon: 'dollar-sign'
  },
  {
    title: 'Statistiche',
    icon: 'chart-bar'
  }]

  private adminOptions = [
    {
      title: 'Gestione utenti',
      icon: 'star'
    }, {
      title: 'Gestione inserzioni',
      icon: 'star'
    }]
  selected = 'Le mie inserzioni'
  @ViewChild('drawer') sidenav
  @ViewChild('list') list


  constructor(
    private appState: appStateService,
    private router: Router,
    private authService: AuthService
    ) {}

  ngOnInit(): void {
    this.appState.state$.subscribe((state) => {
      if (this.sidenav !== undefined) {
        if (state.sidenav) {
          this.sidenav.toggle()
        } else {
          this.sidenav.close()
        }
      }
    })
  }

  get options () {
    return this.appState.state.user.moderator ? [...this.baseOptions, ...this.adminOptions] : this.baseOptions
  }

  get user () {
    return this.appState.state.user
  }

  get ready () {
    return this.appState.state.user !== undefined
  }

  onLogout () {
    this.authService.logout()
    this.router.navigate(['/'])
  }

  closesidenav () {
    this.appState.setStateProp("sidenav", false)
  }

  selectedItem (option) {
    this.selected = option
  }
}
