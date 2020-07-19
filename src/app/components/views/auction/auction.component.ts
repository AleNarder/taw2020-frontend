import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuctionService } from 'src/app/services/http/auction.service';
import { appStateService } from 'src/app/services/state/appState.service';
import { Response } from 'src/app/services/models/Response'
import { Auction } from 'src/app/services/models/Auction'
import { ChatConfiguration } from 'src/app/models/chat';

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

  constructor(
    private route: ActivatedRoute,
    private auctionService: AuctionService,
    private appState: appStateService,
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.auctionId = params.auction
      this.userId = params.user
    })
    this.getAuctionInfo()
  }

  getAuctionInfo () {
    this.auctionService.getOne(this.userId, this.auctionId, this.appState.state.token).subscribe((auction: Response<Auction>) => {
      this.auction = auction.payload
      this.ready = true
      this.getChatConfig()
      console.log(this.auction)
    }, (error) => {
      console.log(error)
    })
  }


  getChatConfig () {
    if (this.appState.state.user) {
      const owner = this.appState.state.user._id === this.userId
      for (let chat of this.auction.chats) {
        this.chats.push({
          scope: chat.scope,
          messages: chat.messages,
          auctionId: this.auctionId,
          senderId: this.appState.state.user._id,
          senderUs: this.appState.state.user.username,
          receiverId: (chat.scope === 'private' ) ? (owner ? chat.partnerId : this.userId) : this.userId,
          receiverUs: (chat.scope === 'private' ) ? chat.partnerUs : null
        })
      }
      if (this.chats.filter(chat => chat.scope === 'private').length === 0 && !owner) {
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
