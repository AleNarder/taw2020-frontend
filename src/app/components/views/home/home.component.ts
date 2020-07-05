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
  auctions = []
  ready = false

  constructor(
    private router: Router,
    private auctionService: AuctionService
    ) {
  }

  ngOnInit(): void {
    this.auctionService.getAll().subscribe((userAuctions: AuctionResponse) => {
      this.utentiInserzioni = userAuctions.payload
      this.ready = true
      for (let utente of this.utentiInserzioni) {
        for (let auction of utente.auctions) {
          this.auctions.push({
            ...auction,
            user: utente._id
          })
        }
      }
    }, (err) => {
      console.log(err)
    })
  }

  viewAuction(auction: string, user: string) {
    this.router.navigate(['auction'], {
      queryParams: {
        user,
        auction
      }
    })
  }

}
