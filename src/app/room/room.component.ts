import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Socket } from 'ngx-socket-io';
import { PokerService } from 'src/services/poker-service';
import { User } from '../types';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.less'],
})
export class RoomComponent implements OnInit {
  public state = 'hideCards';
  public roomId = '';
  public name = '';
  public users: User[] = [];
  public linkUrl = '';

  constructor(
    private route: ActivatedRoute,
    private socket: Socket,
    private poker: PokerService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((map) => {
      const roomId = map.get('roomId');

      if (roomId) {
        this.roomId = roomId || '';
        this.linkUrl = `http://${window.location.hostname}:4200/joinroom/${this.roomId}`;
      }
    });

    this.socket.on('update-client', (rooms: any) => {
      let room = rooms.filter((each: any) => each.id === this.roomId)[0];
      this.users = room.users;
      this.state = room.state;
    });
  }

  reset(): void {
    this.poker.resetRoom(this.roomId);
  }

  displayCards(): void {
    this.poker.showCards(this.roomId);
  }

  copyMessage() {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = this.linkUrl;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }
}
