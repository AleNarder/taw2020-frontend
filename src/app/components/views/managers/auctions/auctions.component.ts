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
  isModerator: boolean

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private appState: appStateService,
    private auctionService: AuctionService
  ) { }

  ngOnInit(): void {
    this.auctionService.getAll(this.appState.state.user._id, this.appState.state.token).subscribe((auctions: Response<Auction[]>) => {
      this.auctions = auctions.payload
      this.isModerator = this.appState.state.user.moderator
    }, (error) => {
      console.log(error)
    })
  }

  editAuction(auction: string) {
    this.router.navigate(['auction'], {
      queryParams: {
        user: this.appState.state.user._id,
        edit: true,
        auction
      }
    })
  }

  openAuction(auction: string) {
    this.router.navigate(['auction'], {
      queryParams: {
        user: this.appState.state.user._id,
        auction
      }
    })
  }


  openDialog (): void {
    this.auctionDialogRef = this.dialog.open(AuctionModalComponent)
  }
}
