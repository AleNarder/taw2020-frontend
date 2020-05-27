interface Location {
  coordinates: number[]
}

export interface User {
  firstname: string, 
  lastname: string,
  username: string,
  email: string,
  address: string,
  coordinate: string,
  auctions: [],
  confirmed: boolean,
  location: Location,
  zipcode: number,
  country: string,
  moderator: boolean,
  state: string
}

export interface UserPayload {
  token: string,
  user: User
}