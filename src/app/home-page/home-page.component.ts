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
  constructor(
    private http: HttpClient,
    private socket: Socket,
    private router: Router
  ) {}
  public ngOnInit(): void {
    this.socket.on('room-created', (roomId: any) => {
      console.log(roomId + ' created');

      this.router.navigateByUrl(`/room/${roomId}`);
    });
  }

  public createRoom(): void {
    console.log('create-room');
    this.socket.emit('create-room');
  }
}
