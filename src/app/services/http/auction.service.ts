import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { appStateService } from '../state/appState.service';

/**
 * Incapsula le richieste api relative alle aste
 */
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


  public addOne (body, id: string, token: string) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    }
    return this.http.post([this.auction, 'user', id].join('/'), body, options)
  }

  public getAll (user ?: string, token ?: string) {
    if (user && token) {
      const options = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        })
      }
      return this.http.get([this.auction, 'user', user].join('/'), options)
    } else {
      return this.http.get(this.auctions)
    }
  }

  public getOne (user, auction, token) {
    return this.http.get([this.auction, user, auction ].join('/'))
  }

  public delete (user, auction, token) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    }
    return this.http.delete([this.auction, user, auction ].join('/'), options)
  }

  public update (user, auction, body, token) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    }
    return this.http.put([this.auction, user, auction ].join('/'), body, options)
  }
}
