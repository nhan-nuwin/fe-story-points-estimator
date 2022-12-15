import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

Injectable();
export class PokerService {
  constructor(private socket: Socket) {}

  createRoom() {
    this.socket.emit('create-room');
  }

  joinRoom(roomId: string) {
    this.socket.emit('join-room', roomId);
  }

  createName(name: string) {
    this.socket.emit('create-name', name);
  }
}
