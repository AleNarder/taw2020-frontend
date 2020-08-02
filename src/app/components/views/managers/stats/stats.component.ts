import { Component, OnInit } from '@angular/core';
import { StatService } from 'src/app/services/http/stat.service';
import { appStateService } from 'src/app/services/state/appState.service';
import { Response } from 'src/app/services/models/Response';
import { StudentStats, ModeratorStats } from 'src/app/services/models/Stats';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  stats: any = {}
  statsKeys = []
  isModerator: boolean

  statsMap ={
    'unSuccessful': 'Aste concluse senza successo',
    'successful': 'Aste concluse con successo',
    'active': 'Aste attive',
    'userAuctions': 'Aste effettuate',
    'auctionsWithUser': 'Aste a cui hai partecipato',
    'auctionsWithUserWinner': 'Aste in cui hai vinto'
  }

  constructor(
    private statService: StatService,
    private appState: appStateService,
    private router: Router
  ) { }

  viewAuction(auction: string) {
    this.router.navigate(['auction'], {
      queryParams: {
        user: this.appState.state.user._id,
        auction
      }
    })
  }

  ngOnInit(): void {
    this.isModerator = this.appState.state.user.moderator
    const user = this.appState.state.user._id
    const token = this.appState.state.token
    if (this.isModerator) {
      this.statService.moderatorStats(token).subscribe((res: Response<ModeratorStats>) => {
        this.stats = res.payload
        this.statsKeys = Object.keys(this.stats)
      })
    } else {
      this.statService.studentStats(user, token).subscribe((res: Response<StudentStats>) => {
        this.stats = res.payload
        this.stats.auctionsWithUserWinner.forEach(auctionId => {
          auctionId = this.stats.auctionsWithUser.find(auctionWithUser => auctionWithUser._id === auctionId)
        })
        this.statsKeys = Object.keys(this.stats)
        console.log(this.stats)
      })
    }
  }
}
