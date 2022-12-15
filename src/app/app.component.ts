import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Socket } from 'ngx-socket-io';
@Injectable()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  constructor(private http: HttpClient, private socket: Socket) {}
  public ngOnInit(): void {
    this.socket.on('message', () => {
      console.log('hello');
    });

    this.socket.on('create-room-emit', (roomId: any) => {
      console.log(roomId + ' created');
    });
  }

  public createRoom(): void {
    console.log('create-room');
    this.socket.emit('create-room');
  }
}
