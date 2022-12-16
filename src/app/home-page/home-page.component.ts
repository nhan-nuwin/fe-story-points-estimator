import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less'],
})
export class HomePageComponent implements OnInit {
  public name = '';

  constructor(private socket: Socket, private router: Router) {}
  public ngOnInit(): void {
    this.socket.on('create-room-emit', (roomId: any) => {
      this.socket.emit('join-room', { roomId, name: this.name });

      this.router.navigateByUrl(`/room/${roomId}`);
    });
  }

  public createRoom(): void {
    this.socket.emit('create-room');
  }
}
