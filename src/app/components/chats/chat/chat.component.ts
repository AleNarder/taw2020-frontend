import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { SocketioService } from 'src/app/services/socket/socketio.service';
import { ChatConfiguration } from 'src/app/models/chat'

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, AfterViewInit{

  @Input() configuration: ChatConfiguration
  blocked = false
  message = ''


  public messages = []
  private observer


  constructor(
    private socketService: SocketioService,
  ) { }

  ngOnInit(): void {
    if (!this.configuration) {
      this.blocked = true
    } else {
      this.socketService.onNewMessage(this.configuration, this.onNewMessage.bind(this))
      this.messages = this.configuration.messages
    }
  }

  ngAfterViewInit(): void {
    this.scroll()
    setTimeout(() => {
      const node = document.querySelector('#message-list')
      this.observer = new MutationObserver((mutations) => {
        this.scroll()
      })
      this.observer.observe(node, {
        attributes: true,
        childList: true,
        characterData: true
      })
    }, 100)
  }

  private scroll () {
    const el = document.querySelector('#endstop')
    if (el) {
      el.scrollIntoView()
    }
  }

  private onNewMessage (message) {
    this.messages.push(message)
  }

  public sendMessage () {
    if (!this.blocked) {
      const {auctionId, receiverId, scope, senderId, senderUs} = this.configuration
      const payload = {auctionId, receiverId, scope, senderId, senderUs, message: this.message }
      this.socketService.sendMessage(this.configuration.scope, payload )
      this.message = ''
    }
  }

}
