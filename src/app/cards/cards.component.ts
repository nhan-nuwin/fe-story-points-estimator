import { Component, Input, OnInit } from '@angular/core';
import { PokerService } from 'src/services/poker-service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.less'],
})
export class CardsComponent implements OnInit {
  @Input() roomId = '';

  public fib = [
    '0',
    '1',
    '2',
    '3',
    '5',
    '8',
    '13',
    '21',
    '34',
    '55',
    '89',
    '?',
  ];

  constructor(private poker: PokerService) {}

  ngOnInit(): void {}

  vote(card: string): void {
    this.poker.vote(this.roomId, card);
  }
}
