import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuctionService } from 'src/app/services/http/auction.service';
import { appStateService } from 'src/app/services/state/appState.service';
import { Response } from 'src/app/services/models/Response'
import { Auction } from 'src/app/services/models/Auction'
import { ChatConfiguration } from 'src/app/models/chat';
import { SocketioService } from 'src/app/services/socket/socketio.service';
import { Message } from 'src/app/services/models/Message';
import { AuctionOfferPayload } from 'src/app/models/auctionOffer';
import fieldHelpers from '../../../helpers/form'

/**
 * Componente utilizzato per la visualizzazione
 * in lettura o scrittura dei dettagli di un'asta
 */
@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.css']
})
export class AuctionComponent implements OnInit {

  auction: Auction
  auctionId
  userId
  logged
  isTheLastWhoOffer: boolean
  edit = false
  ready = false
  watcher
  expireDate
  isModerator: boolean
  chats: ChatConfiguration[] = []
  fields = {
    offer: fieldHelpers.offer.check()
  }

  private owner: boolean

  constructor(
    private route: ActivatedRoute,
    private auctionService: AuctionService,
    private appState: appStateService,
    private socketService: SocketioService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.edit = params.edit
      this.auctionId = params.auction
      this.userId = params.user
      this.owner = this.appState.state.user ? (this.appState.state.user._id === this.userId) : false
      this.logged = this.appState.state.user
      this.isModerator = (this.appState.state.user) ? this.appState.state.user.moderator : false
      this.getAuctionInfo()
    })
  }

  getAuctionInfo () {
    this.auctionService.getOne(this.userId, this.auctionId, this.appState.state.token).subscribe((auction: Response<Auction>) => {
      this.auction = auction.payload
      if (this.edit) {
        this.expireDate = new Date(this.auction.expires).toISOString().slice(0, 16)
        this.auction.offers.forEach(offer => {
          offer.timestamp = new Date(offer.timestamp).toISOString().slice(0, 16)
        })
      }
      this.updateClock()
      this.watcher = setInterval(() => this.updateClock(), 1000)
      this.ready = true

      this.getChatConfig()
      if (this.appState.state.user) {
        this.socketService.onNewPrivateMessage(this.updateChats.bind(this))
        this.socketService.onNewOffer(this.updateOffers.bind(this))
      }
      this.isTheLastWhoOffer = (this.appState.state.user) ? this.appState.state.user.username === this.auction.offers[0].username : false
    }, (error) => {
    })
  }

  save () {
    if (this.edit) {
      let expiration = new Date(this.expireDate)
      expiration.setMonth(new Date(this.expireDate).getMonth() - 1)
      this.auction.expires = expiration.getTime()
      this.auction.offers.forEach(offer => {
        offer.timestamp = new Date(offer.timestamp).getTime()
      })
    }
    this.auctionService.update(this.userId, this.auctionId, this.auction, this.appState.state.token)
    .subscribe(res => null)
  }

  private updateOffers (msg: AuctionOfferPayload) {
    this.auction.currentPrice = msg.amount
    this.auction.offers.unshift({
      amount: msg.amount,
      delta: msg.delta,
      user: msg.offerentId,
      username: msg.offerentUs,
      timestamp: msg.timestamp
    })
    this.isTheLastWhoOffer = (this.appState.state.user) ? this.appState.state.user.username === this.auction.offers[0].username : false
  }

  private updateChats (message: Message) {
    const chat = this.chats.filter((chat) => chat.scope === 'private').find((chat) => chat.receiverId == message.senderId)
    if (!chat && this.owner && message.senderId !== this.appState.state.user._id) {
      this.chats.push({
        scope: 'private',
        messages: [message],
        auctionId: this.auctionId,
        senderId: this.appState.state.user._id,
        senderUs: this.appState.state.user.username,
        receiverId: message.senderId,
        receiverUs: message.senderUs
      })
    }
  }

  makeOffer () {
    if (this.fields.offer.value > this.auction.currentPrice) {
      this.socketService.makeOffer({
        offerentId: this.appState.state.user._id,
        offerentUs: this.appState.state.user.username,
        receiverId: this.userId,
        auctionId: this.auctionId,
        amount: this.fields.offer.value,
        delta: this.fields.offer.value - this.auction.currentPrice
      })
    }
  }

  getChatConfig () {
    if (this.appState.state.user) {
      if (!this.owner) {
        this.auction.chats = this.auction.chats.filter((chat) => chat.scope === 'public' || (chat.scope === 'private' && chat.partnerId === this.appState.state.user._id))
      }
      for (let chat of this.auction.chats) {
        this.chats.push({
          scope: chat.scope,
          messages: chat.messages,
          auctionId: this.auctionId,
          senderId: this.appState.state.user._id,
          senderUs: this.appState.state.user.username,
          receiverId: (chat.scope === 'private' ) ? (this.owner ? chat.partnerId : this.userId) : this.userId,
          receiverUs: (chat.scope === 'private' ) ? (this.owner ? chat.partnerUs : 'Inserzionista') : null
        })
      }
      if (this.chats.filter(chat => chat.scope === 'private').length === 0 && !this.owner) {
        this.chats.push({
          scope: 'private',
          messages: [],
          auctionId: this.auctionId,
          senderId: this.appState.state.user._id,
          senderUs: this.appState.state.user.username,
          receiverId: this.userId,
          receiverUs: 'Inserzionista'
        })
      }
    }
  }

  checkError (field) {
    return fieldHelpers[field].validate(this.fields[field])
  }

  updateClock () {
    this.auction.clock = this.auction.expires - Date.now()
  }

  go2Login () {
    this.router.navigate(['/login'])
  }

  stop () {
    clearInterval(this.watcher)
  }

  start () {
    this.watcher = setInterval(() => this.updateClock(), 1000)
  }
}
