import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { environment } from '../../../environments/environment'
import { Response } from '../models/Response'
import { UserPayload } from '../models/User'
import { appStateService } from '../state/appState.service'
import * as cryptojs from 'crypto-js'
import * as jwtDecoder from 'jwt-decode'

/**
 * Incapsula le richieste api relative all'autenticazione di un utente
 */
@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private auth = [environment.BACKEND_ACTION_API_BASE_URL, 'auth' ].join('/')

  constructor(
    private http: HttpClient,
    private appState: appStateService
  ) {}

  public logout () {
    this.appState.setStateProp("logged", false)
    localStorage.clear()
    console.log(this.appState.state.logged)
  }

  public setToken (token) {
    const encryptedToken = cryptojs.AES.encrypt(token, environment.SECRET).toString()
    localStorage.setItem('tkn', encryptedToken)
  }

  public checkToken () {
    const encryptedToken = localStorage.getItem('tkn')
    if (encryptedToken) {
      const encodedToken = cryptojs.AES.decrypt(encryptedToken, environment.SECRET).toString(cryptojs.enc.Utf8)
      const decodedToken = jwtDecoder(encodedToken)
      if (decodedToken.exp > Math.floor(Date.now() / 1000)) {
        return {
          decodedToken,
          encodedToken
        }
      }
    }
    return null
  }


  public moderator (token, email) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    }
    return this.http.post([this.auth, 'moderator'].join('/'), { email }, options)

  }

  public reset (email) {
    return this.http.post([this.auth, 'reset'].join('/'), { email })

  }

  public login (body) {
    return this.http.post<Response<UserPayload>>([this.auth, 'login'].join('/'), body)

  }

}
