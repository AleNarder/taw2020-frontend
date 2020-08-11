import { Book } from './Book'
import { Offer } from './Offer'
import { Chat } from './Chat'
import { Location } from './Location'
export interface Auction {
  expires: number,
  threshold: number,
  currentPrice: number,
  book: Book,
  clock ?: number,
  offers: Offer[],
  chats: Chat[],
  _id: string,
  isActive: boolean
}


export interface Auctions {
  _id: string,
  location: Location
  auctions: Auction[]
}

export interface AuctionResponse {
  payload: Auctions[]
}
