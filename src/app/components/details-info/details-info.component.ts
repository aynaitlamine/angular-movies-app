import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-info',
  templateUrl: './details-info.component.html',
  styleUrls: ['./details-info.component.css'],
})
export class DetailsInfoComponent implements OnInit {
  movie: any = {};
  keywords: any = {};

  constructor() {}

  ngOnInit(): void {}
}
