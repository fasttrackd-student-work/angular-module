import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import LemonadeStand from './models/LemonadeStand'

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private selectedStandSource = new BehaviorSubject<LemonadeStand | undefined>(undefined);
  selectedStand = this.selectedStandSource.asObservable();

  private standOptionsSource = new BehaviorSubject<LemonadeStand[]>([]);
  currentStandOptions = this.standOptionsSource.asObservable();

  private customerNameSource = new BehaviorSubject<string>('');
  customerName = this.customerNameSource.asObservable();

  private customerPhoneNumberSource = new BehaviorSubject<string>('');
  customerPhoneNumber = this.customerPhoneNumberSource.asObservable()

  private totalPriceSource = new BehaviorSubject<number>(0);
  currentTotalPrice = this.totalPriceSource.asObservable();

  updateSelectedStand(stand: LemonadeStand) {
    this.selectedStandSource.next(stand)
  }

  updateStandOptions(stands: LemonadeStand[]) {
    this.standOptionsSource.next(stands)
  }

  updateCustomerName(newName: string) {
    this.customerNameSource.next(newName)
  }

  updateCustomerPhoneNumber(newPhoneNumber: string) {
    this.customerPhoneNumberSource.next(newPhoneNumber)
  }

  updateTotalPrice(totalPrice: number) {
    this.totalPriceSource.next(totalPrice)
  }
}
