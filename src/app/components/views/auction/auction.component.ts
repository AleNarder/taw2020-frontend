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
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
  logged = true
  isTheLastWhoOffer: boolean
  edit = false
  ready = false
  watcher
  expireDate
  isModerator: boolean
  chats: ChatConfiguration[] = []
  fields: any = {}
  updateAuctionForm: FormGroup
  updateAuctionFields = ['Titolo', 'Università', 'Autore', 'Corso', 'Offerta Utente', 'Data Offerta', 'Prezzo attuale', 'Prezzo di riserva', 'Scadenza']
  formValidators = null

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
      this.fields['offer'] = fieldHelpers.generic.check()
      if (this.edit) {
        this.formValidators = {}
        this.updateAuctionFields.forEach(field => {
          this.fields[field] = fieldHelpers.generic.check()
        })
        this.updateAuctionForm = new FormGroup(this.fields)
      }
      this.auctionId = params.auction
      this.userId = params.user
      this.owner = this.appState.state.user ? (this.appState.state.user._id === this.userId) : false
      this.isModerator = (this.appState.state.user) ? this.appState.state.user.moderator : false
      this.getAuctionInfo()
      this.appState.state$.subscribe((state) => {
        this.logged = state.logged
      })
    })
  }

  getAuctionInfo () {
    this.auctionService.getOne(this.userId, this.auctionId, this.appState.state.token).subscribe((auction: Response<Auction>) => {
      this.auction = auction.payload
      console.log(this.auction)
      if (this.edit) {
        const offset = (new Date()).getTimezoneOffset() * 60 * 1000
        this.expireDate = new Date(this.auction.expires - offset).toISOString().slice(0, 16)
        console.log(this.auction.offers)
        this.auction.offers.forEach(offer => {
          offer.timestamp = new Date(new Date(offer.timestamp.toString()).getTime() - offset).toISOString().slice(0, 16)
        })
      }
      this.updateClock()
      this.watcher = setInterval(() => this.updateClock(), 1000)

      this.getChatConfig()
      if (this.appState.state.user) {
        this.socketService.onNewPrivateMessage(this.updateChats.bind(this))
        this.socketService.onNewOffer(this.updateOffers.bind(this))
      }
      this.isTheLastWhoOffer = (this.appState.state.user && this.auction.offers.length > 0) ? this.appState.state.user.username === this.auction.offers[0].username : false
      this.ready = true
    }, (error) => {
    })
  }

  save () {
    if (this.edit) {
      let payload = JSON.parse(JSON.stringify(this.auction))
      payload.expires = new Date(this.expireDate).getTime()
      payload.offers.forEach(offer => {
        offer.timestamp = new Date(offer.timestamp).getTime()
      })
      this.auctionService.update(this.userId, this.auctionId, payload, this.appState.state.token)
      .subscribe(res => {})
    }
  }

  delete () {
    this.auctionService.deleteOne(this.userId, this.auctionId, this.appState.state.token)
    .subscribe(res => {
      this.router.navigate(['/reserved'])
    })
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

  checkError (fieldname) {
    return fieldHelpers.generic.validate(this.fields[fieldname], fieldname)
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
