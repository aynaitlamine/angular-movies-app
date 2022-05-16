import { Component, OnInit, Input } from '@angular/core';
import { DetailsService } from 'src/app/services/details/details.service';

@Component({
  selector: 'app-details-casts',
  templateUrl: './details-casts.component.html',
  styleUrls: ['./details-casts.component.css'],
})
export class DetailsCastsComponent implements OnInit {
  @Input() mediaType: any;
  @Input() Id: any;
  casts: any;

  constructor(private detailsService: DetailsService) {}

  ngOnInit(): void {
    this.getCasts(this.mediaType, this.Id);
  }

  getCasts(mediaType: any, Id: any) {
    this.detailsService
      .getCastAndCrew(mediaType, Id)
      .subscribe((data) => (this.casts = data));
  }
}
