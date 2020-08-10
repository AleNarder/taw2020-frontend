import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuctionService } from 'src/app/services/http/auction.service';
import { AuctionResponse, Auctions } from 'src/app/services/models/Auction';
import { SocketioService } from 'src/app/services/socket/socketio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  utentiInserzioni: Auctions[]
  auctions = []
  ready = false
  filter = ''

  categoryOptions = [
    {
      title: 'attive',
      selected: true
    },
    {
      title: 'concluse',
      selected: true
    }
  ]

  priceOptions = {
    min: null,
    max: null
  }

  filterOptions = [
    {
      title: 'titolo',
      option: 'title',
      selected: true
    },
    {
      title: 'corso',
      option: 'course',
      selected: false
    },
    {
      title: 'autore',
      option: 'author',
      selected: false
    },
    {
      title: 'università',
      option: 'university',
      selected: false
    },
  ]

  constructor(
    private router: Router,
    private auctionService: AuctionService,
    private socketService: SocketioService
    ) {
  }

  ngOnInit(): void {
    this.getAuctions()
    this.socketService.onNewAuction(this.getAuctions)
  }

  getAuctions () {
    this.auctionService.getAll().subscribe((userAuctions: AuctionResponse) => {
      this.utentiInserzioni = userAuctions.payload
      this.ready = true
      for (let utente of this.utentiInserzioni) {
        for (let auction of utente.auctions) {
          this.auctions.push({
            ...auction,
            user: utente._id,
          })
        }
      }
      console.log(this.auctions)
      this.updateClock()
      setInterval(() => {
        this.updateClock()
      }, 1000)
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

  updateClock () {
    this.auctions.forEach((auction) => {
      const auctionEnd = auction.created + 7 * 24 * 60 * 60 * 1000
      auction.clock = auctionEnd - Date.now()
    })
  }

  searchCriteria (): any {
    return {
      query: this.filter,
      params: this.filterOptions.filter(filter => filter.selected).map(filter => filter.option),
      min: this.priceOptions.min,
      max: this.priceOptions.max,
      status: this.categoryOptions.filter(cat => cat.selected).map(cat => cat.title)
    }
  }

  noFilter (): boolean {
    return !this.filterOptions
      .map((a) => a.selected)
      .reduce((a, c) => a || c)
  }

}
