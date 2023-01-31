import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-icon',
  templateUrl: './cart-icon.component.html',
  styleUrls: ['./cart-icon.component.css'],
})
export class CartIconComponent implements OnInit {
  cartCount: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
