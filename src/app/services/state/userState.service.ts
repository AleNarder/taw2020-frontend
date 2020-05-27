import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/User'

@Injectable({
  providedIn: 'root'
})
export class UserStateService {

  private readonly _user = new BehaviorSubject<User>({} as User)
  private readonly _logged = new BehaviorSubject<Boolean>(false)

  readonly logged$ = this._logged.asObservable()
  readonly user$ = this._user.asObservable()

  get logged (): Boolean {
    return this._logged.getValue()
  }

  get user (): User {
    return this._user.getValue()
  }

  set logged (logged: Boolean) {
    this._logged.next(logged)
  }

  set user (val: User) {
    this._user.next(val)
  }
}
