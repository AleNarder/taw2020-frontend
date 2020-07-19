import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuctionService } from 'src/app/services/http/auction.service';
import { appStateService } from 'src/app/services/state/appState.service';
import { Response } from 'src/app/services/models/Response'
import { Auction } from 'src/app/services/models/Auction'
import { ChatConfiguration } from 'src/app/models/chat';
import { SocketioService } from 'src/app/services/socket/socketio.service';
import { Message } from 'src/app/services/models/Message';


@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.css']
})
export class AuctionComponent implements OnInit {

  auction: Auction
  auctionId
  userId
  ready = false
  chats: ChatConfiguration[] = []
  private owner: boolean

  constructor(
    private route: ActivatedRoute,
    private auctionService: AuctionService,
    private appState: appStateService,
    private socketService: SocketioService
  ) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.auctionId = params.auction
      this.userId = params.user
      this.owner = this.appState.state.user._id === this.userId
      this.getAuctionInfo()
    })
  }

  getAuctionInfo () {
    this.auctionService.getOne(this.userId, this.auctionId, this.appState.state.token).subscribe((auction: Response<Auction>) => {
      this.auction = auction.payload
      this.ready = true
      this.getChatConfig()
      this.socketService.onNewPrivateMessage(this.updateChats.bind(this))
      console.log(this.auction)
    }, (error) => {
      console.log(error)
    })
  }

  private updateChats (message: Message) {
    const chat = this.chats.filter((chat) => chat.scope === 'private').find((chat) => chat.receiverId == message.senderId)
    if (!chat && this.owner) {
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


  getChatConfig () {
    if (this.appState.state.user) {
      if (this.owner) this.auction.chats.filter((chat) => chat.scope === 'public' || (chat.scope === 'private' && chat.partnerId === this.appState.state.user._id))
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
}
