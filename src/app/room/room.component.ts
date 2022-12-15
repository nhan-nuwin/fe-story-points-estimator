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

  constructor(private route: ActivatedRoute, private socket: Socket) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((map) => {
      this.socket.emit('get-room-data', map.get('roomId'));
      this.socket.on('get-room-data-server', (data: any) => console.log(data));
    });
  }
}
