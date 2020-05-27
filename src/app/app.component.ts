import { Component, OnInit } from '@angular/core';
import { SocketioService } from './services/http/socketio.service';
import { UserStateService } from './services/state/userState.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  
  constructor(
    private socketService: SocketioService,
    private userService: UserStateService
    ) {}
  
  ngOnInit () {
    this.socketService.setupSocketConnection()
  }

}
