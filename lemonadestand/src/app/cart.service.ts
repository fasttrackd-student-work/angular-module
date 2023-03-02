import { Injectable } from '@angular/core';
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
  currentStandOptions = this.standOptionsSource.asObservable();

  private totalPriceSource = new BehaviorSubject<number>(0);
  currentTotalPrice = this.totalPriceSource.asObservable();

  updateSelectedStand(stand: LemonadeStand) {
    this.standSource.next(stand);
  }

  updateStandOptions(stands: LemonadeStand[]) {
    this.standOptionsSource.next(stands);
  }

  updateTotalPrice(totalPrice: number) {
    this.totalPriceSource.next(totalPrice);
  }
}
