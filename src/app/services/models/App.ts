import { User } from './User'

export interface App {
  user: User,
  logged: boolean,
  sidenav: boolean,
  token: string
}
