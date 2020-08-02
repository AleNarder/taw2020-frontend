import { Book } from './Book'
import { Offer } from './Offer'
import { Chat } from './Chat'
export interface Auction {
  created: string,
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
  auctions: Auction[]
}

export interface AuctionResponse {
  payload: Auctions[]
}
