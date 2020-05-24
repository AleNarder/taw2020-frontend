import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private auth = [environment.BACKEND_ACTION_API_BASE_URL, 'auth' ].join('/')

  constructor(
    private http: HttpClient,
  ) {}

  public register (body) {
  }

  private handleError (error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      return throwError({
        message: 'Qualcosa è andato storto, riprova più tardi...'
      })
    } else {
      return throwError({
        message: error.error.payload
      })
    }
  }

  public login (body) {
    return this.http.post([this.auth, 'login'].join('/'), body)
  }

}
