import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { environment } from '../../../environments/environment'
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users = [environment.BACKEND_ACTION_API_BASE_URL, 'users' ].join('/')
  private user = [environment.BACKEND_ACTION_API_BASE_URL, 'user' ].join('/')

  constructor(
    private http: HttpClient
  ) { }


  public new (body, moderator: boolean = false) {
    body.username = body.firstname + body.lastname[0].toLocaleUpperCase() + body.lastname.slice(1, body.lastname.length)
    console.log(body)
    return this.http.post(this.user, body)
  }


  public modify (body, id, token) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    }
    return this.http.put([this.users, id].join('/'), body, options)
  }

  public get (token: string, id ?: string) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    }
    return this.http.get([this.users, id].join('/'), options)
  }

  public delete (token: string, id ?: string) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    }
    return this.http.delete([this.users, id].join('/'), options)
  }
}
