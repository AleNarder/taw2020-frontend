import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { appStateService } from '../state/appState.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class AuctionService {

  private auctions = [environment.BACKEND_ACTION_API_BASE_URL, 'auctions'].join('/')
  private auction = [environment.BACKEND_ACTION_API_BASE_URL, 'auction'].join('/')

  constructor(
    private http: HttpClient,
    private appState: appStateService
  ) { }

  handleError (error) {
    return throwError(error.error.payload)
  }

  public addOne (body, id: string, token: string) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    }
    return this.http.post([this.auction, 'user', id].join('/'), body, options).pipe(catchError(this.handleError))
  }

  public getAll (user ?: string, token ?: string) {
    if (user && token) {
      const options = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        })
      }
      return this.http.get([this.auction, 'user', user].join('/'), options).pipe(catchError(this.handleError))
    } else {
      return this.http.get(this.auctions).pipe(catchError(this.handleError))
    }
  }

  public getOne (user, auction, token) {
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
