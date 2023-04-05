import { Component, OnInit } from '@angular/core'
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
export class CustomerFormComponent implements OnInit {

  lemonadeStands: LemonadeStand[] = [];

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

  constructor(private cartData: CartService, private router: Router) { }

  ngOnInit(): void {
    this.cartData.loadLemonadeStands().subscribe((response) => {
      this.cartData.updateStandOptions(response)
    })
    this.cartData.currentStandOptions.subscribe(currentStandOptions => this.lemonadeStands = currentStandOptions)
  }

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
