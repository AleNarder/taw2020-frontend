import { Book } from './Book'

export interface Auction {
  created: string,
  threshold: number,
  currentPrice: number,
  book: Book,
  clock ?: number
}


export interface Auctions {
  _id: string,
  auctions: Auction[]
}

export interface AuctionResponse {
  payload: Auctions[]
}
