import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

  increment() {
    this.amount +=1
  }

  decrement() {
    this.amount -=1
  }

}
