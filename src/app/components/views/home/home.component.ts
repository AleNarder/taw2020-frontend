import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuctionService } from 'src/app/services/http/auction.service';
import { AuctionResponse, Auctions } from 'src/app/services/models/Auction';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  utentiInserzioni: Auctions[]

  constructor(
    private router: Router,
    private auctions: AuctionService
    ) {
  }

  ngOnInit(): void {
    this.auctions.getAll().subscribe((userAuctions: AuctionResponse) => {
      this.utentiInserzioni = userAuctions.payload
    }, (err) => {
      console.log(err)
    })
  }

  viewAuction(auctionId: string) {

  }

}
