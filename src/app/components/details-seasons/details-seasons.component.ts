import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-seasons',
  templateUrl: './details-seasons.component.html',
  styleUrls: ['./details-seasons.component.css'],
})
export class DetailsSeasonsComponent implements OnInit {
  @Input() detail: any;

  constructor() {}

  ngOnInit(): void {}
}
