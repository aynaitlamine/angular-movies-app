import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-item',
  templateUrl: './scroll-item.component.html',
  styleUrls: ['./scroll-item.component.css'],
})
export class ScrollItemComponent implements OnInit {
  @Input() item: any;
  constructor() {}

  ngOnInit(): void {}
}
