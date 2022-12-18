import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root',
})
export class PokerService {
  constructor(private socket: Socket) {}

  createRoom(roomId: string) {
    this.socket.emit('create-room', roomId);
  }

  joinRoom(roomId: string, name: string) {
    localStorage.setItem('name', name);
    this.socket.emit('join-room', { roomId, name });
  }

  resetRoom(roomId: string) {
    this.hideCards(roomId);
    this.socket.emit('reset-room', roomId);
  }

  vote(roomId: string, card: string) {
    this.socket.emit('vote', { roomId, card });
  }

  hideCards(roomId: string) {
    this.socket.emit('hide-cards', roomId);
  }

  showCards(roomId: string) {
    this.socket.emit('show-cards', roomId);
  }
}
