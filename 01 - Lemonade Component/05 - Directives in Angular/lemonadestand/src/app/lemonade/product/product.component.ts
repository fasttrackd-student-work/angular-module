import { Component, Input, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
