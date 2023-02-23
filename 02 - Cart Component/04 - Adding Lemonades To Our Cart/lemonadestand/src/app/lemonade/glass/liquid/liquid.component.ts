import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-liquid',
  templateUrl: './liquid.component.html',
  styleUrls: ['./liquid.component.css']
})
export class LiquidComponent implements OnInit {

    @Input() percentLemonJuiceLiquid: number = 0
    @Input() percentSugarLiquid: number = 0
    @Input() numberOfIceCubesLiquid: number = 0

  constructor() { }

  ngOnInit(): void {
  }

}
