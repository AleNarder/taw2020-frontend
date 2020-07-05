import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { App } from '../models/App'
import { User } from '../models/User'

@Injectable({
  providedIn: 'root'
})
export class appStateService {

  private readonly _state = new BehaviorSubject<App>({} as App)
  private readonly _waiting = new BehaviorSubject<Boolean>(false)

  readonly state$ = this._state.asObservable()
  readonly waiting$ = this._waiting.asObservable()

  set waiting (val: Boolean) {
    this._waiting.next(val)
  }

  set state (val: App) {
    this._state.next(val)
  }

  get state (): App {
    return this._state.getValue()
  }

  get waiting (): Boolean {
    return this._waiting.getValue()
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
