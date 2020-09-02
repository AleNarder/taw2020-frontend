import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuctionService } from 'src/app/services/http/auction.service';
import { AuctionResponse, Auctions } from 'src/app/services/models/Auction';
import { SocketioService } from 'src/app/services/socket/socketio.service';
import { LocationsService } from 'src/app/services/geo/locations.service';
import { MatSelectChange } from '@angular/material/select';
import { Location } from 'src/app/services/models/Location';

/**
 * Componente che visualizza tutte le aste in real time
 * Permette all'utente filtrare quelle presenti
 * sulla base di una serie di parametri e di aprirne
 * una in modalità lettura
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  utentiInserzioni: Auctions[]
  regioni: string[]
  location: Location
  province: string[]
  comuni: string[]
  auctions = []
  panelOpenState = false
  ready = false
  filter = ''

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
    private socketService: SocketioService,
    private locationsService: LocationsService
    ) {
  }

  ngOnInit(): void {
    this.location = {} as Location
    this.regioni = ['']
    this.regioni.push(...this.locationsService.regioni())
    this.province = ['']
    this.comuni = ['']
    this.getAuctions()
    this.socketService.onNewAuction(this.getAuctions.bind(this))
    this.location.Regione = this.regioni[0]
    this.location.Comune = this.comuni[0]
    this.location.Provincia = this.province[0]
  }

  getAuctions () {
    this.auctions = []
    this.auctionService.getAll(true).subscribe((userAuctions: AuctionResponse) => {
      this.utentiInserzioni = userAuctions.payload
      this.ready = true
      for (let utente of this.utentiInserzioni) {
        for (let auction of utente.auctions) {
          this.auctions.push({
            ...auction,
            user: utente._id,
            location: utente.location
          })
        }
      }
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
      auction.clock = auction.expires - Date.now()
    })
  }

  searchCriteria (): any {
    return {
      query: this.filter,
      params: this.filterOptions.filter(filter => filter.selected).map(filter => filter.option),
      min: this.priceOptions.min,
      max: this.priceOptions.max,
      location: this.location
    }
  }

  noFilter (): boolean {
    return !this.filterOptions
      .map((a) => a.selected)
      .reduce((a, c) => a || c)
  }

  updateLocation (prop: 'provincia' | 'regione', event: MatSelectChange) {
      if (prop === 'provincia') {
        if (event.value) {
          this.comuni = this.locationsService.comuni(event.value)
          this.comuni.push('')
        } else {
          this.comuni = ['']
        }
      } else {
        if (event.value) {
          this.province = this.locationsService.province(event.value)
          this.province.push('')
        } else {
          this.province = ['']
          this.comuni = ['']
          Object.keys(this.location).forEach(key => this.location[key] = '')
        }
      }
  }
}
