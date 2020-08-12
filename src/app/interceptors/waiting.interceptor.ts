import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { appStateService } from '../services/state/appState.service';
import { tap, catchError } from 'rxjs/operators';
import { InfosnackComponent } from '../components/layout/infosnack/infosnack.component';

/**
 * Interceptor delle richieste http.
 * Utilizzato per intercettare le richieste con esito fallimentare
 * e per fornire un feedback sul loro stato
 */
@Injectable()
export class WaitingInterceptor implements HttpInterceptor {

  constructor(
    private appState: appStateService,
    private infoSnack: InfosnackComponent
  ) {
  }

  handleError (error) {
    this.appState.waiting = false
    this.infoSnack.openSnackBar(error.error.payload, 'Chiudi', 'red-snackbar')
    return throwError(error)
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Assicura che il cambio di stato avvenga dopo il double check di angular
    Promise.resolve(null).then(() => this.appState.waiting = true);
    return next.handle(request)
      .pipe(catchError(this.handleError.bind(this)))
      .pipe(
        tap((event) => {
          if (event instanceof HttpResponse) {
            this.appState.waiting = false
          }
        }),
      )
    }
}
