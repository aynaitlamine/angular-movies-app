import { Component, OnInit } from '@angular/core';
import { TvService } from 'src/app/services/tv/tv.service';

@Component({
  selector: 'app-popular-tv-shows',
  templateUrl: './popular-tv-shows.component.html',
  styleUrls: ['./popular-tv-shows.component.css'],
})
export class PopularTvShowsComponent implements OnInit {
  tvShows: any = [];
  constructor(private tvService: TvService) {}

  ngOnInit(): void {
    this.getPopularTvShow();
  }
  getPopularTvShow() {
    this.tvService
      .getPopular()
      .subscribe((tvs) => (this.tvShows = tvs.results));
  }
}
