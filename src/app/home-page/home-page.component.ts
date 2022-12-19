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
  public roomId = '';

  constructor(
    private socket: Socket,
    private router: Router,
    private http: HttpClient
  ) {}
  public ngOnInit(): void {
    console.log(window.location.hostname);
  }

  public createRoom(): void {
    this.http
      .put('https://monkfish-app-nhagx.ondigitalocean.app/room', {})
      .subscribe((data: any) => {
        this.roomId = data.roomId;
        this.socket.emit('create-room', this.roomId);
        this.socket.emit('join-room', { roomId: this.roomId, name: this.name });
        this.router.navigateByUrl(`/room/${this.roomId}`);
      });
  }
}
