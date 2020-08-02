import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog'
import { AuctionService } from 'src/app/services/http/auction.service';
import { appStateService } from 'src/app/services/state/appState.service';
import fieldHelpers from '../../../helpers/form'

@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.css']
})
export class AuctionModalComponent implements OnInit {

  waiting = false
  selectedIdx = 0

  status = {
    wrong: false,
    message: ''
  }

  auction =  {
    threshold: fieldHelpers.generic.check(),
    currentPrice: fieldHelpers.generic.check(),
  }

  book = {
    title : fieldHelpers.generic.check(),
    author : fieldHelpers.generic.check(),
    university : fieldHelpers.generic.check(),
    course : fieldHelpers.generic.check(),
  }

  constructor(
    public dialogRef: MatDialogRef<AuctionModalComponent>,
    private auctionService: AuctionService,
    private appState: appStateService,
  ) {
  }

  ngOnInit(): void {
  }


  error (message) {
    console.log(message)
    this.status.wrong = true
    this.status.message = message
    setTimeout(() => this.status.wrong = false, 2000)
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
            threshold: this.auction.threshold.value
          }
        }
        this.waiting = true
        this.auctionService.addOne(payload, id, this.appState.state.token).subscribe(() => {
          this.waiting = false
          this.dialogRef.close()
        }, (errorMessage) => {
          this.error(errorMessage)
        })
      }
    }
  }

  checkError (field) {
    return fieldHelpers.generic.validate(field)
  }

}
