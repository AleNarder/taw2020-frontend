import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuctionService {

  private auctions = [environment.BACKEND_ACTION_API_BASE_URL, 'auctions'].join('/')
  private auction = [environment.BACKEND_ACTION_API_BASE_URL, 'auction'].join('/')

  constructor(
    private http: HttpClient
  ) { }

  handleError (error) {
    return throwError(error.error.payload)
  }

  public new (body, usr: string, token: string) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    }
    return this.http.post(this.auctions, body, options).pipe(catchError(this.handleError))
  }

  public getAll () {
    return this.http.get(this.auctions).pipe(catchError(this.handleError))
  }

  public getOne (user, auction, token) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    }
    return this.http.get([this.auction, user, auction ].join('/')).pipe(catchError(this.handleError))
  }

  public delete (user, auction, token) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    }
    return this.http.delete([this.auction, user, auction ].join('/'), options).pipe(catchError(this.handleError))
  }

  public modify (user, auction, body, token) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    }
    return this.http.post([this.auction, user, auction ].join('/'), body, options).pipe(catchError(this.handleError))
  }
}
