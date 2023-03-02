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

  ngOnInit() {
    this.cartData.currentTotalPrice.subscribe(
      (currentTotalPrice) => (this.totalPrice = currentTotalPrice)
    );
  }
}
