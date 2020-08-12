import { Component, OnInit, Input } from '@angular/core';
import { appStateService } from 'src/app/services/state/appState.service';
import { AuctionModalComponent } from 'src/app/components/modals/auction/auction.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AuctionService } from 'src/app/services/http/auction.service';
import { Auction } from 'src/app/services/models/Auction';
import { Router } from '@angular/router';
import { SocketioService } from 'src/app/services/socket/socketio.service';

/**
 * Componente utilizzato per la visualizzazione di tutte le inserzioni
 * a cui un utente ha accesso, a seconda del ruolo.
 * Permette, se lecito, di aprire le aste in modalità scrittura
 */
@Component({
  selector: 'app-auctions',
  templateUrl: './auctions.component.html',
  styleUrls: ['./auctions.component.css']
})
export class AuctionsComponent implements OnInit {

  auctionDialogRef: MatDialogRef<AuctionModalComponent>
  auctions: Auction[]
  isModerator: boolean

  @Input() private: boolean

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private appState: appStateService,
    private auctionService: AuctionService,
    private socketService: SocketioService
  ) { }

  ngOnInit(): void {
    this.getAuctions()
    this.isModerator = this.appState.state.user.moderator
    this.socketService.onNewAuction(() => {
      this.getAuctions()
    })
  }

  private getAuctions () {
    this.auctionService
    .getAll(
      ((this.private) ? this.appState.state.user._id : null),
      ((this.private) ? this.appState.state.token : null))
    .subscribe((auctions: any) => {
      if (this.private) {
        this.auctions = auctions.payload
      } else {
        this.auctions = []
        for (let utente of auctions.payload) {
          for (let auction of utente.auctions) {
            this.auctions.push({
              ...auction,
              user: utente._id,
            })
          }
        }
      }
    }, (error) => {})
  }

  editAuction(auction: string, user?: string) {
    this.router.navigate(['auction'], {
      queryParams: {
        user: user || this.appState.state.user._id,
        edit: true,
        auction
      }
    })
  }

  openAuction(auction: string, user?: string) {
    this.router.navigate(['auction'], {
      queryParams: {
        user: user || this.appState.state.user._id,
        auction
      }
    })
  }


  openDialog (): void {
    this.auctionDialogRef = this.dialog.open(AuctionModalComponent)
  }
}
