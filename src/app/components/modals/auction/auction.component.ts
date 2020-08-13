import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog'
import { AuctionService } from 'src/app/services/http/auction.service';
import { appStateService } from 'src/app/services/state/appState.service';
import { Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import fieldHelpers from '../../../helpers/form'
import { SocketioService } from 'src/app/services/socket/socketio.service';

/**
 * Modal utilizzato per la creazione di una nuova asta
 */
@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.css']
})
export class AuctionModalComponent implements OnInit {

  waiting = false
  selectedIdx = 0
  expires: string


  auction =  {
    threshold: fieldHelpers.generic.check(),
    currentPrice: fieldHelpers.generic.check()
  }

  book = {
    title : fieldHelpers.generic.check(),
    author : fieldHelpers.generic.check(),
    university : fieldHelpers.generic.check(),
    course : fieldHelpers.generic.check(),
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AuctionModalComponent>,
    private auctionService: AuctionService,
    private appState: appStateService,
    private socketService: SocketioService
  ) {
  }

  ngOnInit(): void {
  }


  complete (): void {
    if (this.selectedIdx === 0) {
      this.selectedIdx = 1
    } else {
      const form = {...this.book, ...this.auction}
      const errors = Object.keys(form).map((field) => form[field].hasError('required')).reduce((acc, curr) => acc && curr)
      if (!errors) {
        const id = this.appState.state.user._id
        const payload = {
          auction: {
            book: {
              title: this.book.title.value,
              author: this.book.author.value,
              university: this.book.university.value,
              course: this.book.course.value,
            },
            currentPrice: this.auction.currentPrice.value,
            threshold: this.auction.threshold.value,
            expires: new Date(this.expires).getTime()
          }
        }
        this.waiting = true
        this.auctionService.addOne(payload, id, this.appState.state.token).subscribe(() => {
          this.waiting = false
          this.dialogRef.close()
          this.socketService.newAuction()
        }, (errorMessage) => {})
      }
    }
  }

  checkError (field) {
    return fieldHelpers.generic.validate(field)
  }

}
