import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
  constructor(private router: Router) {}

  @Input() lemonades: Lemonade[] = [];

  @Output() secondPassLemonadeIdEvent = new EventEmitter<number>();

  totalPrice: number = 0;

  receiveLemonadeId(removedLemonadeId: number) {
    this.secondPassLemonadeIdEvent.emit(removedLemonadeId);
  }

  ngOnInit(): void {
    this.lemonades.forEach(
      (lemonade) => (this.totalPrice = this.totalPrice + lemonade.price)
    );
    this.customerForm.setValue({ selectedStand: this.lemonadeStands[2] });
  }

  lemonadeStands: LemonadeStand[] = [
    { id: 1, name: 'Cooksys Lemonade Stand 1' },
    { id: 2, name: 'Cooksys Lemonade Stand 2' },
    { id: 3, name: 'Cooksys Lemonade Stand 3' },
    { id: 4, name: 'Cooksys Lemonade Stand 4' },
    { id: 5, name: 'Cooksys Lemonade Stand 5' },
  ];

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
    this.router.navigateByUrl('/checkout');
  }
}
