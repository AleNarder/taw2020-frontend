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
import { tap, finalize, delay, catchError } from 'rxjs/operators';

@Injectable()
export class WaitingInterceptor implements HttpInterceptor {

  constructor(
    private appState: appStateService
  ) {
  }

  handleError (error) {
    this.appState.waiting = false
    return throwError(error)
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Eseguito non appena il thread UI è disponibile
    setTimeout(() => { this.appState.waiting = true})
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
