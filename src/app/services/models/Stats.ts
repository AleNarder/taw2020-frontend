import { Book } from './Book';

export interface ModeratorStats {
  succesful: number
  unSuccesful: number
  active: number
}

interface AuctionData {
  book: Book,
  created: number,
  user ?: string,
  _id: string
}

export interface StudentStats {
  userAuctions: AuctionData[],
  auctionsWithUser: AuctionData[],
  auctionsWithUserWinner: string[]
}
