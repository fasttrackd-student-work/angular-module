import { Injectable, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface LemonadeStand {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private standSource = new BehaviorSubject<LemonadeStand>({
    id: -1,
    name: '',
  });
  currentStand = this.standSource.asObservable();

  private standOptionsSource = new BehaviorSubject<LemonadeStand[]>([]);
  standOptions = this.standOptionsSource.asObservable();

  private totalPriceSource = new BehaviorSubject<number>(0);
  totalPrice = this.totalPriceSource.asObservable();

  constructor() {}

  changeSelectedStand(lemonadeStand: LemonadeStand) {
    this.standSource.next(lemonadeStand);
  }

  updateStandOptions(lemonadeStands: LemonadeStand[]) {
    this.standOptionsSource.next(Object.assign([], lemonadeStands));
  }

  updateTotalPrice(totalPrice: number) {
    this.totalPriceSource.next(totalPrice);
  }
}
