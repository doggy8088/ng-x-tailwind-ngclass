import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  /** 大小 (color) */
  @Input() size:
    | 'lg'
    | 'normal'
    | 'small' = 'normal';

  constructor() { }

  ngOnInit(): void {
  }

}
