import { Component, OnInit } from '@angular/core';
import { ApiData } from 'src/app/model/ApiData';
import { TrendingService } from 'src/app/services/trending.service';

@Component({
  selector: 'app-trendings',
  templateUrl: './trendings.component.html',
  styleUrls: ['./trendings.component.css'],
})
export class TrendingsComponent implements OnInit {
  trendings: any = [];

  constructor(private trendingService: TrendingService) {}

  ngOnInit(): void {
    this.getTrendingMoviesToday();
  }

  getTrendingMoviesToday() {
    this.trendingService
      .getTrendings('movie', 'day')
      .subscribe((trendings) => (this.trendings = trendings.results));
  }

  getTrendingMoviesThisWeek() {
    this.trendingService
      .getTrendings('movie', 'week')
      .subscribe((trendings) => (this.trendings = trendings.results));
  }
}
