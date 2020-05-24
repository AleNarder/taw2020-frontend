import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private static auth = [environment.BACKEND_ACTION_API_BASE_URL, 'auth' ].join('/')

  constructor(
    private http: HttpClient,
    private auth: 
  ) {}

  public register (body) {
  }

  public sigin (body) {

  }

}
