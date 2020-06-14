import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { App } from '../models/App'
import { User } from '../models/User'

@Injectable({
  providedIn: 'root'
})
export class appStateService {

  private readonly _state = new BehaviorSubject<App>({} as App)

  readonly state$ = this._state.asObservable()

  get state (): App {
    return this._state.getValue()
  }

  set state (val: App) {
    this._state.next(val)
  }

  setStateProp (key: string, value: User | boolean) {
    if (this.state[key] !== undefined) {
      const newState = {}
      newState[key] = value
      const oldstate = this.state
      const nextState = {...oldstate, ...newState}
      this.state = nextState
    }
  }
}
