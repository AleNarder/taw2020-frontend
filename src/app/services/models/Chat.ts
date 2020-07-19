import { Message } from './Message';

export interface Chat {
  scope: 'private' | 'public',
  partnerId ?: string,
  partnerUs ?: string,
  messages: Message[]
}
