import { Component } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { PhoneFormControl } from './phone-form-control'
import { CartService } from '../cart.service'
import { Router } from '@angular/router'
import LemonadeStand from '../models/LemonadeStand'

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css'],
})
export class CustomerFormComponent {

  constructor(private cartData: CartService, private router: Router) { }

  lemonadeStands: LemonadeStand[] = [
    { id: 1, name: 'Cooksys Lemonade Stand 1' },
    { id: 2, name: 'Cooksys Lemonade Stand 2' },
    { id: 3, name: 'Cooksys Lemonade Stand 3' },
    { id: 4, name: 'Cooksys Lemonade Stand 4' },
    { id: 5, name: 'Cooksys Lemonade Stand 5' },
  ];

  customerForm: FormGroup = new FormGroup({
    name: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    phoneNumber: new PhoneFormControl('', [
      Validators.required,
      Validators.minLength(13),
      Validators.maxLength(13),
    ]),
    selectedStand: new FormControl<LemonadeStand | undefined>(undefined, [
      Validators.required,
    ]),
  });

  onSubmit() {
    this.cartData.updateSelectedStand(
      this.customerForm.controls['selectedStand'].value
    )
    this.cartData.updateCustomerName(
      this.customerForm.controls['name'].value
    )
    this.cartData.updateCustomerPhoneNumber(
      this.customerForm.controls['phoneNumber'].value
    )

    this.cartData.updateStandOptions(this.lemonadeStands)

    this.router.navigateByUrl('/lemonade')
  }
}
