export interface AuctionOfferPayload {
  offerentId: string,
  offerentUs: string,
  receiverId: string,
  auctionId: string,
  amount: number,
  delta: number,
  timestamp ?: number
}
