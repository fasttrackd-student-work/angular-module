import { Component, OnInit } from '@angular/core';

interface Product {
  name: string;
  amount: number;
  max: number;
  price: number;
  unit: string;
}

@Component({
  selector: 'app-lemonade',
  templateUrl: './lemonade.component.html',
  styleUrls: ['./lemonade.component.css'],
})
export class LemonadeComponent implements OnInit {
  products: Product[] = [
    {
      name: 'Lemon Juice',
      price: 0.5,
      amount: 0,
      max: 10,
      unit: 'oz',
    },
    {
      name: 'Sugar',
      price: 0.25,
      amount: 0,
      max: 8,
      unit: 'tsp',
    },
    {
      name: 'Ice',
      price: 0.05,
      amount: 0,
      max: 12,
      unit: 'cubes',
    },
  ];

  cartShown: boolean = false;

  increment(productName: string) {
    LemonadeComponent.bind(this);
    if (this.products.find((product) => product.name === productName)) {
      this.products.map((product) => {
        if (product.name === productName) {
          product.amount < product.max
            ? (product.amount += 1)
            : (product.amount = product.amount);
        }
      });
    }
  }

  decrement(productName: string) {
    LemonadeComponent.bind(this);
    if (this.products.find((product) => product.name === productName)) {
      this.products.map((product) => {
        if (product.name === productName) {
          product.amount > 0 ? (product.amount -= 1) : product.amount;
        }
      });
    }
  }

  toggleCart() {
    this.cartShown = !this.cartShown;
  }

  constructor() {}

  ngOnInit(): void {}
}
