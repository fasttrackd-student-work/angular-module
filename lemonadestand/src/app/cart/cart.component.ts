import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

interface Lemonade {
  id: number;
  lemonJuice: number;
  sugar: number;
  iceCubes: number;
  price: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  @Input() lemonades: Lemonade[] = [];

  totalPrice: number = 0;

  passLemonadeId(removedLemonadeId: number) {
    this.removeLemonade(removedLemonadeId);
  }

  @Output() secondItemEvent = new EventEmitter<number>();

  removeLemonade(removedLemonadeId: number) {
    this.secondItemEvent.emit(removedLemonadeId);
  }

  constructor() {}

  ngOnInit(): void {
    this.lemonades.forEach(
      (lemonade) => (this.totalPrice = this.totalPrice + lemonade.price)
    );
  }
}
