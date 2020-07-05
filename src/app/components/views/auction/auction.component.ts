import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuctionService } from 'src/app/services/http/auction.service';
import { appStateService } from 'src/app/services/state/appState.service';
import { Response } from 'src/app/services/models/Response'
import { Auction } from 'src/app/services/models/Auction'
@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.css']
})
export class AuctionComponent implements OnInit {

  auction
  auctionId
  userId

  constructor(
    private route: ActivatedRoute,
    private auctionService: AuctionService,
    private appState: appStateService
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
    }, (error) => {
      console.log(error)
    })
  }


}
