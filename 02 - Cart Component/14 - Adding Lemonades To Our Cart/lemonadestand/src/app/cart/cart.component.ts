import { Component, Input, OnInit } from '@angular/core';

interface Lemonade {
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

  constructor() {}

  ngOnInit(): void {
    this.lemonades.forEach(
      (lemonade) => (this.totalPrice = this.totalPrice + lemonade.price)
    );
  }
}
