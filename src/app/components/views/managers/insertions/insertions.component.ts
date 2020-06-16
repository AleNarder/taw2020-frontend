import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/http/user.service';
import { appStateService } from 'src/app/services/state/appState.service';
import { Response } from 'src/app/services/models/Response'
import { User } from 'src/app/services/models/User';

@Component({
  selector: 'app-insertions',
  templateUrl: './insertions.component.html',
  styleUrls: ['./insertions.component.css']
})
export class InsertionsComponent implements OnInit {

  users: User[]

  constructor(
    private userService: UserService,
    private appState: appStateService
  ) { }

  ngOnInit(): void {
    
  }

}
