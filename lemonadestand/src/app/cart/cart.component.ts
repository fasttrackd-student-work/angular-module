import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { CartService } from '../cart.service'
import LemonadeStand from '../models/LemonadeStand'
import Lemonade from '../models/Lemonade'
import Order from '../models/Order'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {

  lemonadeStands: LemonadeStand[] = [];

  customerForm: FormGroup = new FormGroup({
    selectedStand: new FormControl<LemonadeStand | undefined>(undefined, [
      Validators.required,
    ]),
  });

  @Input() lemonades: Lemonade[] = [];

  @Output() secondPassLemonadeIdEvent = new EventEmitter<number>();

  totalPrice: number = 0;

  customerName: string = ''
  customerNumber: string = ''

  constructor(private cartData: CartService, private router: Router) { }

  ngOnInit(): void {
    this.cartData.currentStandOptions.subscribe(
      (currentStandOption) => (this.lemonadeStands = currentStandOption)
    )
    this.cartData.selectedStand.subscribe((selectedStand) =>
      this.customerForm.setValue({ selectedStand: selectedStand })
    )
    this.cartData.customerName.subscribe(customerName => this.customerName = customerName)
    this.cartData.customerPhoneNumber.subscribe(customerPhoneNumber => this.customerNumber = customerPhoneNumber)
    this.lemonades.forEach((lemonade) => {
      this.totalPrice = this.totalPrice + lemonade.price
      this.cartData.updateTotalPrice(this.totalPrice)
    })
  }

  receiveLemonadeId(removedLemonadeId: number) {
    this.secondPassLemonadeIdEvent.emit(removedLemonadeId)
  }

  updateSelectedStand() {
    this.cartData.updateSelectedStand(
      this.customerForm.controls['selectedStand'].value
    )
  }

  onSubmit() {
    let lemonades = this.lemonades.map(({ lemonJuice, sugar, iceCubes, price }) => ({
      lemonJuice,
      sugar,
      iceCubes,
      water: lemonJuice / 2,
      price
    }))

    let order: Order = {
      lemonades,
      customer: {
        name: this.customerName,
        phoneNumber: this.customerNumber
      },
      lemonadeStand: this.customerForm.controls['selectedStand'].value
    }

    this.cartData.placeOrder(order).subscribe(response => {
      console.log(response)
      if (response.total) {
        this.cartData.updateTotalPrice(response.total)
      }
    })

    this.router.navigateByUrl('/checkout')
  }
}
