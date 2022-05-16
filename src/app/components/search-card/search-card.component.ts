import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.css'],
})
export class SearchCardComponent implements OnInit {
  @Input() item: any;

  constructor() {}

  ngOnInit(): void {}
}
