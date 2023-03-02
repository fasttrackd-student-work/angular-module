import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input() name: string = ""
  @Input() amount: number = 0
  @Input() max: number = 10
  @Input() unit: string = ""

  @Output() incrementProductByName = new EventEmitter<string>()

  handleIncrement() {
    this.incrementProductByName.emit()
  }

  @Output() decrementProductByName = new EventEmitter<string>()

  handleDecrement() {
    this.decrementProductByName.emit()
  }

  increment() {
    this.amount += 1
  }

  decrement() {
    this.amount -= 1
  }

}
