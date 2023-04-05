import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { CartService } from '../cart.service'
import LemonadeStand from '../models/LemonadeStand'

interface Lemonade {
  id: number
  lemonJuice: number
  sugar: number
  iceCubes: number
  price: number
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(private cartData: CartService, private router: Router) { }
  lemonadeStands: LemonadeStand[] = [];

  customerForm: FormGroup = new FormGroup({
    selectedStand: new FormControl<LemonadeStand | undefined>(undefined, [
      Validators.required,
    ]),
  });

  onSubmit() {
    console.log(
      `Selected Lemonade Stand: ${JSON.stringify(
        this.customerForm.controls['selectedStand'].value
      )}`
    )

    this.cartData.updateSelectedStand(
      this.customerForm.controls['selectedStand'].value
    )

    console.log(this.cartData.selectedStand)

    console.log(this.cartData.currentTotalPrice)

    this.router.navigateByUrl('/checkout')
  }

  @Input() lemonades: Lemonade[] = [];

  @Output() secondPassLemonadeIdEvent = new EventEmitter<number>();

  totalPrice: number = 0;

  receiveLemonadeId(removedLemonadeId: number) {
    this.secondPassLemonadeIdEvent.emit(removedLemonadeId)
  }

  ngOnInit(): void {
    this.cartData.currentStandOptions.subscribe(
      (currentStandOption) => (this.lemonadeStands = currentStandOption)
    )
    this.cartData.selectedStand.subscribe((selectedStand) =>
      this.customerForm.setValue({ selectedStand: selectedStand })
    )
    this.lemonades.forEach((lemonade) => {
      this.totalPrice = this.totalPrice + lemonade.price
      this.cartData.updateTotalPrice(this.totalPrice)
    })
  }

  updateSelectedStand() {
    this.cartData.updateSelectedStand(
      this.customerForm.controls['selectedStand'].value
    )
  }
}
