import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.less'],
})
export class RoomComponent implements OnInit {
  public roomId = '';
  public name = '';

  constructor(private route: ActivatedRoute, private socket: Socket) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((map) => {
      const roomId = map.get('roomId');

      this.roomId = roomId || '';
    });

    this.socket.on('get-name-server', (name: string) => (this.name = name));
  }

  getName(): void {
    this.socket.emit('get-name-client');
  }
}
