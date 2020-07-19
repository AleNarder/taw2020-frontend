import { User } from './User'

export interface Offer {
  user: string,
  username: string,
  timestamp: number,
  delta: number,
  amount: number
}
