import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PhoneFormControl } from './phone-form-control';

interface LemonadeStand {
  id: number;
  name: string;
}

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css'],
})
export class CustomerFormComponent {
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
    console.log(`Name: ${this.customerForm.controls['name'].value}`);
    console.log(
      `Phone Number: ${this.customerForm.controls['phoneNumber'].value}`
    );
    console.log(
      `Selected Lemonade Stand: ${JSON.stringify(
        this.customerForm.controls['selectedStand'].value
      )}`
    );
  }
}
