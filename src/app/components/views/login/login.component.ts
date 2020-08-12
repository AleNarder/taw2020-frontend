import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog'
import { ForgotPasswordComponent } from '../../modals/forgot-password/forgot-password.component';
import { Router, ActivatedRoute } from '@angular/router'
import { AuthService } from 'src/app/services/http/auth.service'
import { UserService } from 'src/app/services/http/user.service';
import { Response } from 'src/app/services/models/Response';
import { UserPayload, User } from 'src/app/services/models/User';
import { appStateService } from 'src/app/services/state/appState.service';
import { SocketioService } from 'src/app/services/socket/socketio.service';
import fieldHelpers from '../../../helpers/form'
import { LocationsService } from 'src/app/services/geo/locations.service';
import { MatSelectChange } from '@angular/material/select';
import { Location } from 'src/app/services/models/Location';

/**
 * Componente di login o registrazione di un utente
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  fields: any = {}
  regioni: string[]
  location: Location
  province: string[]
  comuni: string[]
  email: string
  token: string
  id: string
  isModerator: boolean
  isUser: boolean
  hide: boolean

  @Output() statusInfo = new EventEmitter<any>()

  forgotPasswordRef: MatDialogRef<ForgotPasswordComponent>

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private user: UserService,
    private auth: AuthService,
    private appState: appStateService,
    private route: ActivatedRoute,
    private socketService: SocketioService,
    private locationsService: LocationsService
  ) {
    this.route.queryParams.subscribe(params => {
      this.isModerator = params['moderator']
      this.email = params['email']
      this.id = params['id']
      this.token = params['tkn']
    })
    this.hide = true
    this.isUser = (this.isModerator) ? false : true
    for (const field in fieldHelpers.registration) {
      this.fields[field] = fieldHelpers.registration[field].check()
    }
    if (this.token && this.id) {
      this.user.modify({confirmed: true}, this.id, this.token).subscribe(() => {
      }, (errorMessage) => {
      })
    }
  }

  ngOnInit(): void {
    this.location = {} as Location
    this.regioni = this.locationsService.regioni()
    this.province = new Array(0)
    this.comuni = new Array(0)
  }

  updateLocation (prop: 'provincia' | 'regione', event: MatSelectChange) {
    if (prop === 'provincia') {
      this.comuni = this.locationsService.comuni(event.value)
    } else {
      this.province = this.locationsService.province(event.value)
      this.comuni = []
    }
  }

  switch (): void {
    this.isUser = !this.isUser
  }

  openDialog (): void {
    this.forgotPasswordRef = this.dialog.open(ForgotPasswordComponent)
    this.forgotPasswordRef.afterClosed().subscribe(() => this.router.navigate(['/']))
  }


  login () {
    const locationKO = Object.keys(this.location).find(data => location[data] === '')
    if ((this.fields.email.status === 'VALID' && this.fields.password.status === this.fields.email.status) && !locationKO) {
      this.auth.login({username: this.fields.email.value, password: this.fields.password.value}).subscribe((res: Response<UserPayload>) => {
        this.router.navigate(['/reserved'])
        this.appState.state = {
          user: res.payload.user,
          logged: true,
          sidenav: false,
          token: res.payload.token
        }
        this.auth.setToken(res.payload.token)
        this.socketService.setupSocketConnection()
      }, (errorMessage) => {
      })
    }
  }

  register () {
    let newUser = {} as User
    this.location.CAP = this.locationsService.cap(this.location.Comune).toString()
    this.location.Indirizzo = this.fields.address.value
    newUser.location = this.location
    for (let field in this.fields) {
      if (field !== 'address') {
        newUser[field] = this.fields[field].value
      }
    }
    if (this.isModerator) {
      newUser.email = this.email
      newUser.moderator = newUser.confirmed = true
    } else {
      newUser.moderator = newUser.confirmed = false
    }
    this.user.new(newUser).subscribe(data => {
      this.router.navigate(['/'])
    }, (errorMessage) => {
    })
  }

  checkError (field) {
    return fieldHelpers.registration[field].validate(this.fields[field])
  }

}
