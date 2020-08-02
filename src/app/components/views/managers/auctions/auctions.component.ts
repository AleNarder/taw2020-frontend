import { Component, OnInit } from '@angular/core';
import { appStateService } from 'src/app/services/state/appState.service';
import { AuctionModalComponent } from 'src/app/components/modals/auction/auction.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AuctionService } from 'src/app/services/http/auction.service';
import { Auction } from 'src/app/services/models/Auction';
import { Router } from '@angular/router';
import { Response } from 'src/app/services/models/Response';


@Component({
  selector: 'app-auctions',
  templateUrl: './auctions.component.html',
  styleUrls: ['./auctions.component.css']
})
export class AuctionsComponent implements OnInit {

  auctionDialogRef: MatDialogRef<AuctionModalComponent>
  auctions: Auction[]
  constructor(
    private dialog: MatDialog,
    private router: Router,
    private appState: appStateService,
    private auctionService: AuctionService
  ) { }

  ngOnInit(): void {
    this.auctionService.getAll(this.appState.state.user._id, this.appState.state.token).subscribe((auctions: Response<Auction[]>) => {
      this.auctions = auctions.payload
    }, (error) => {
      console.log(error)
    })
    this.auctionDialogRef.afterClosed().subscribe(()=> {
      this.auctionService.getAll(this.appState.state.user._id, this.appState.state.token).subscribe((auctions: Response<Auction[]>) => {
        this.auctions = auctions.payload
      }, (error) => {
        console.log(error)
      })
    })
  }

  viewAuction(auction: string) {
    this.router.navigate(['auction'], {
      queryParams: {
        user: this.appState.state.user._id,
        auction
      }
    })
  }

  openDialog (): void {
    console.log('Hello')
    this.auctionDialogRef = this.dialog.open(AuctionModalComponent)
  }

}
