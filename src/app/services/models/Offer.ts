import { User } from './User'

export interface Offer {
  user: string,
  username: string,
  timestamp: number | string,
  delta: number,
  amount: number
}
