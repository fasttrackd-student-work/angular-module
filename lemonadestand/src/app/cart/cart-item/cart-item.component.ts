import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  @Input() lemonade: any;

  @Output() newItemEvent = new EventEmitter<number>();

  passLemonadeId(removedLemonadeId: number) {
    this.newItemEvent.emit(removedLemonadeId);
  }

  constructor() {}

  ngOnInit(): void {}
}
