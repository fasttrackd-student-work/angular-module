import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

  @Output() secondPassLemonadeIdEvent = new EventEmitter<number>();

  totalPrice: number = 0;

  receiveLemonadeId(removedLemonadeId: number) {
    this.secondPassLemonadeIdEvent.emit(removedLemonadeId);
  }

  constructor() {}

  ngOnInit(): void {
    this.lemonades.forEach(
      (lemonade) => (this.totalPrice = this.totalPrice + lemonade.price)
    );
  }
}
