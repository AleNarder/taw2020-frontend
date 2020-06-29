interface Auction {
  created: Date,
  threshold: number,
  currentPrice: number,
}


export interface Auctions {
  _id: string,
  auctions: Auction[]
}

export interface AuctionResponse {
  payload: Auctions[]
}