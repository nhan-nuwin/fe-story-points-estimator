import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Socket } from 'ngx-socket-io';
import { PokerService } from 'src/services/poker-service';

@Component({
  selector: 'app-join-room',
  templateUrl: './join-room.component.html',
  styleUrls: ['./join-room.component.less'],
})
export class JoinRoomComponent implements OnInit {
  public name = '';
  public roomId = '';
  constructor(
    private socket: Socket,
    private router: Router,
    private route: ActivatedRoute,
    private poker: PokerService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((map) => {
      const roomId = map.get('roomId');
      this.roomId = roomId || '';
    });

    let name = localStorage.getItem('name');

    if (name) {
      this.name = name;

      if (this.roomId) this.joinRoom();
    }
  }

  joinRoom(): void {
    this.poker.joinRoom(this.roomId, this.name);
    this.router.navigateByUrl(`/room/${this.roomId}`);
  }
}
