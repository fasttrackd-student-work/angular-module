import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  lemonades = [
    { lemonJuice: 10, sugar: 8, iceCubes: 7, price: 2.99 },
    { lemonJuice: 7, sugar: 5, iceCubes: 3, price: 8.54 },
    { lemonJuice: 3, sugar: 2, iceCubes: 12, price: 13.3333333 },
    { lemonJuice: 7, sugar: 4, iceCubes: 10, price: 8.54 },
  ];

  constructor() {}

  ngOnInit(): void {}
}
