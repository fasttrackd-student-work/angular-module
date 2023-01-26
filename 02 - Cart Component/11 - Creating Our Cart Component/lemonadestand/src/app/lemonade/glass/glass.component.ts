import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-glass',
  templateUrl: './glass.component.html',
  styleUrls: ['./glass.component.css']
})
export class GlassComponent implements OnInit {

  @Input() percentLemonJuice: number = 0
  @Input() percentSugar: number = 0
  @Input() numberOfIceCubes: number = 0

  constructor() { }

  ngOnInit(): void {
  }

}
