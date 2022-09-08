import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-apply-button',
  templateUrl: './apply-button.component.html',
  styleUrls: ['./apply-button.component.css'],
})
export class ApplyButtonComponent implements OnInit {

  /** 大小 (color) */
  @Input() size: 'lg' | 'normal' | 'small' = 'normal';

  constructor() {}

  ngOnInit(): void {}
}
