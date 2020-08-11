import { Location } from './Location';


export interface User {
  firstname: string,
  lastname: string,
  username: string,
  email: string,
  address: string,
  auctions: [],
  confirmed: boolean,
  location: Location,
  moderator: boolean,
  state: string,
  _id: string
}

export interface UserPayload {
  token: string,
  user: User
}
