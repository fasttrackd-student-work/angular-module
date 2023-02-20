import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  @Input() lemonade: any;

  @Output() passLemonadeEvent = new EventEmitter<number>();

  passLemonadeId(removedLemonadeId: number) {
    this.passLemonadeEvent.emit(removedLemonadeId);
  }

  constructor() {}

  ngOnInit(): void {}
}