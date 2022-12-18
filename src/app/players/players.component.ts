import { Component, Input, OnInit } from '@angular/core';
import { User } from '../types';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.less'],
})
export class PlayersComponent implements OnInit {
  @Input() users: User[] = [];
  @Input() state = 'hideCards';
  constructor() {}

  ngOnInit(): void {}
}
