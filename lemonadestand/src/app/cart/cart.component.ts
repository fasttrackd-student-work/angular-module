import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

interface Lemonade {
  id: number;
  lemonJuice: number;
  sugar: number;
  iceCubes: number;
  price: number;
}

interface LemonadeStand {
  id: number;
  name: string;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(private router: Router, private cartData: CartService) {}

  stand: LemonadeStand = { id: -1, name: '' };

  @Input() lemonades: Lemonade[] = [];

  @Output() secondPassLemonadeIdEvent = new EventEmitter<number>();

  totalPrice: number = 0;

  lemonadePrices: number = 0;

  receiveLemonadeId(removedLemonadeId: number) {
    this.secondPassLemonadeIdEvent.emit(removedLemonadeId);
  }

  ngOnInit(): void {
    this.cartData.currentStand.subscribe((stand) => (this.stand = stand));
    this.cartData.standOptions.subscribe(
      (standOptions) => (this.lemonadeStands = standOptions)
    );
    this.cartData.totalPrice.subscribe(
      (totalPrice) => (this.totalPrice = totalPrice)
    );
    this.lemonades.forEach(
      (lemonade) => (this.lemonadePrices = this.lemonadePrices + lemonade.price)
    );
    this.cartData.updateTotalPrice(this.lemonadePrices);
    this.customerForm.setValue({
      selectedStand: this.stand,
    });
  }

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
    );

    this.cartData.changeSelectedStand(
      this.customerForm.controls['selectedStand'].value
    );

    this.router.navigateByUrl('/checkout');
  }
}
