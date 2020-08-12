import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

/**
 * Incapsula le richieste api relative alle statistiche utente
 */
@Injectable({
  providedIn: 'root'
})
export class StatService {

  private stats = [environment.BACKEND_ACTION_API_BASE_URL, 'stats'].join('/')

  constructor(
    private http: HttpClient,

  ) { }


  public studentStats (id: string, token: string) {
    return this.statsHelper([this.stats, 'student', id].join('/'), token)
  }

  public moderatorStats (token: string) {
    return this.statsHelper([this.stats, 'moderator'].join('/'), token)
  }

  private statsHelper ( endpoint: string, token: string,) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    }
    return this.http.get(endpoint, options)
  }
}
