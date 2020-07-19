import { Message } from '../services/models/Message';

interface Chat {
  senderId: string,
  receiverId ?: string,
  auctionId: string,
  senderUs: string,
}

export interface ChatConfiguration extends Chat {
  scope: 'public' | 'private',
  messages: Message[],
  receiverUs ?: string
}

export interface ChatPayload extends Chat {
  message: string,
}
