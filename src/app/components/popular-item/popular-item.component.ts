import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular-item',
  templateUrl: './popular-item.component.html',
  styleUrls: ['./popular-item.component.css'],
})
export class PopularItemComponent implements OnInit {
  @Input() popular: any;
  @Input() mediaType: string = 'movie';

  constructor() {}

  ngOnInit(): void {}
}
