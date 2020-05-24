import { Component, OnInit } from '@angular/core';
import { SocketioService } from './services/socketio.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(
    private socketService: SocketioService,
    private snackBarInfo: MatSnackBar
    ) {}
  
  ngOnInit () {
    this.socketService.setupSocketConnection()
  }

}
