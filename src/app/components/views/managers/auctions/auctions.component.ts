import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/http/user.service';
import { appStateService } from 'src/app/services/state/appState.service';
import { AuctionModalComponent } from 'src/app/components/modals/auction/auction.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/services/models/User';


@Component({
  selector: 'app-auctions',
  templateUrl: './auctions.component.html',
  styleUrls: ['./auctions.component.css']
})
export class AuctionsComponent implements OnInit {

  users: User[]
  auctionDialogRef: MatDialogRef<AuctionModalComponent>

  constructor(
    private dialog: MatDialog,
    private userService: UserService,
    private appState: appStateService
  ) { }

  ngOnInit(): void {

  }

  addAuction () {

  }

  openDialog (): void {
    console.log('Hello')
    this.auctionDialogRef = this.dialog.open(AuctionModalComponent)
  }

}
