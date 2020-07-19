import { Component, OnInit, Input } from '@angular/core';
import { Message } from 'src/app/services/models/Message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() message: Message
  @Input() mine: boolean


  constructor() {
  }

  ngOnInit(): void {
  }

}
