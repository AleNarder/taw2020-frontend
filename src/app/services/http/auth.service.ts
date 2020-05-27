import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { environment } from '../../../environments/environment'
import { Response } from '../models/Response'
import { UserPayload } from '../models/User';
import * as cryptojs from 'crypto-js'
import { catchError } from 'rxjs/operators'
import { throwError } from 'rxjs';
import { UserStateService } from '../state/userState.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private auth = [environment.BACKEND_ACTION_API_BASE_URL, 'auth' ].join('/')

  constructor(
    private http: HttpClient,
    private userState: UserStateService
  ) {}

  public logout () {
    this.userState.logged = false
    localStorage.clear()
  }

  public setToken (token) {
    const encryptedToken = cryptojs.AES.encrypt(token, environment.SECRET).toString()
    localStorage.setItem('tkn', encryptedToken)
  }

  public checkToken () {
    const encryptedToken = localStorage.getItem('tkn')
    const decryptedToken = cryptojs.AES.decrypt(encryptedToken, environment.SECRET)
  }

  handleError(error) {
    return throwError(error.error.payload)
  }

  public login (body) {
    return this.http.post<Response<UserPayload>>([this.auth, 'login'].join('/'), body)
      .pipe(catchError(this.handleError))
  }

}
