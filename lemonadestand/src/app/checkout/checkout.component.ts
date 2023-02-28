import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  constructor(private cartData: CartService) {}
  totalPrice: number = 0;

  ngOnInit(): void {
    this.cartData.totalPrice.subscribe(
      (totalPrice) => (this.totalPrice = totalPrice)
    );
  }
}
