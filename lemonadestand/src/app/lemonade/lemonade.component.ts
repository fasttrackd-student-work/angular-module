import { Component, OnInit } from '@angular/core';

interface Product {
  name: string;
  amount: number;
  max: number;
  price: number;
  unit: string;
}

interface Lemonade {
  id: number;
  lemonJuice: number;
  sugar: number;
  iceCubes: number;
  price: number;
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

  currentLemonade: Lemonade = {
    id: 0,
    lemonJuice: 0,
    sugar: 0,
    iceCubes: 0,
    price: 0,
  };

  cartIdCount = 0;

  cartLemonades: Lemonade[] = [];

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

  addToCart() {
    if (
      this.products[0].amount > 0 ||
      this.products[1].amount > 0 ||
      this.products[2].amount > 0
    ) {
      this.currentLemonade = {
        id: this.cartIdCount,
        lemonJuice: this.products[0].amount,
        sugar: this.products[1].amount,
        iceCubes: this.products[2].amount,
        price: 0,
      };
      this.currentLemonade.price = this.calculatePrice();
      this.cartLemonades.push(this.currentLemonade);
      this.cartIdCount++;
    }
    this.resetProducts();
  }

  calculatePrice(): number {
    return (
      this.currentLemonade.lemonJuice * this.products[0].price +
      this.currentLemonade.sugar * this.products[1].price +
      this.currentLemonade.iceCubes * this.products[2].price
    );
  }

  resetProducts() {
    this.products = [
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
  }

  toggleCart() {
    this.cartShown = !this.cartShown;
  }

  removeLemonade(removedLemonadeId: number) {
    const itemIndex = this.cartLemonades.findIndex(
      (cartItem) => cartItem.id === removedLemonadeId
    );
    if (itemIndex >= 0) {
      this.cartLemonades.splice(itemIndex, 1);
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
