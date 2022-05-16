import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-details-info',
  templateUrl: './details-info.component.html',
  styleUrls: ['./details-info.component.css'],
})
export class DetailsInfoComponent implements OnInit {
  @Input() detail: any = {};
  @Input() keywords: any = {};

  constructor() {}

  ngOnInit(): void {}
}
