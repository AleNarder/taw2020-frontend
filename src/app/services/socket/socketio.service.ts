import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { environment } from '../../../environments/environment';
import { ChatPayload, ChatConfiguration } from 'src/app/models/chat';
import { appStateService } from '../state/appState.service';

@Injectable({
  providedIn: 'root'
})
export class SocketioService {

  private socket: SocketIOClient.Socket
  private privateMessageEventTag = 'new-private-message'
  private publicMessageEventTag = 'new-public-message'

  constructor(
    private appState: appStateService
  ) {}

  public setupSocketConnection (): void {
    this.socket = io(environment.BACKEND_STATUS_API_BASE_URL)
    this.socket.on('connect', () => {
      if (this.appState.state.user._id) {
        this.socket.emit('new-entry', this.appState.state.user._id)
      }
    })
  }

  public sendMessage (scope: 'public' | 'private', payload: ChatPayload) {
    switch (scope) {
      case 'private':
        this.sendPrivateMessage(payload)
        break;
      default:
        this.sendPublicMessage(payload)
        break;
    }
  }

  public sendPublicMessage (payload): void {
    this.socket.emit(this.publicMessageEventTag, payload)
  }

  private sendPrivateMessage (payload): void {
    this.socket.emit(this.privateMessageEventTag, payload)
  }

  public onNewMessage (configuration: ChatConfiguration, callback: Function) {
    if (configuration.scope === 'private') {
      this.onNewPrivateMessage(callback)
    } else {
      this.onNewPublicMessage(callback)
    }
  }

  public onNewPublicMessage (callback: Function): void {
    this.socket.on(this.publicMessageEventTag, callback)
  }

  public onNewPrivateMessage (callback: Function): void {
    this.socket.on(this.privateMessageEventTag, callback)
  }
}
