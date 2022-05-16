import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-similar',
  templateUrl: './details-similar.component.html',
  styleUrls: ['./details-similar.component.css'],
})
export class DetailsSimilarComponent implements OnInit {
  @Input() similarMovies: any;
  @Input() mediaType: any;

  constructor() {}

  ngOnInit(): void {}
}
