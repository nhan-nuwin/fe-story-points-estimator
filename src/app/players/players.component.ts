import { Component, Input, OnInit } from '@angular/core';
import { User } from '../types';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.less'],
})
export class PlayersComponent {
  @Input() users: User[] = [];
  @Input() state = 'hideCards';

  public players: User[] = [];
  constructor() {}

  trackById(index: number, el: any): number {
    return el.id;
  }
}
