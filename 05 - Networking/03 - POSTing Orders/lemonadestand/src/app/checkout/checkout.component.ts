import { Component } from '@angular/core'
import { CartService } from '../cart.service'
import { Router } from '@angular/router'
import LemonadeStand from '../models/LemonadeStand'

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  totalPrice: number = 0;
  customerName: string = ''
  customerPhoneNumber: string = ''
  selectedStand: LemonadeStand | undefined = undefined

  constructor(private cartData: CartService, private router: Router) { }

  ngOnInit() {
    this.cartData.currentTotalPrice.subscribe(
      (currentTotalPrice) => (this.totalPrice = currentTotalPrice)
    )

    this.cartData.customerName.subscribe(customerName => this.customerName = customerName)
    this.cartData.customerPhoneNumber.subscribe(customerPhoneNumber => this.customerPhoneNumber = customerPhoneNumber)
    this.cartData.selectedStand.subscribe(selectedStand => this.selectedStand = selectedStand)

    if (!this.customerName || !this.customerPhoneNumber || !this.selectedStand) {
      this.router.navigateByUrl('/')
    }
  }
}
