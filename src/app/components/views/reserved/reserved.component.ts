import { Component, OnInit } from '@angular/core';
import { UserStateService } from 'src/app/services/state/userState.service';

@Component({
  selector: 'app-reserved',
  templateUrl: './reserved.component.html',
  styleUrls: ['./reserved.component.css']
})
export class ReservedComponent implements OnInit {

  constructor(
    private userState: UserStateService
  ) {
    console.log(this.userState.user)
  }

  ngOnInit(): void {
  }
  getUser () {
    // console.log(this.store.getProperty('user'))
  }
}
