import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog'
import { AuctionService } from 'src/app/services/http/auction.service';
import { appStateService } from 'src/app/services/state/appState.service';

@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.css']
})
export class AuctionModalComponent implements OnInit {

  waiting = false

  constructor(
    public dialogRef: MatDialogRef<AuctionModalComponent>,
    private auctionService: AuctionService,
    private appState: appStateService,
  ) {
  }

  ngOnInit(): void {
  }

  close (): void {
    this.waiting = true
  }

}
