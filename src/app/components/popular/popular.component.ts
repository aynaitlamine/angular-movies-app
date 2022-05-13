import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie/movie.service';
import { TvService } from 'src/app/services/tv/tv.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css'],
})
export class PopularComponent implements OnInit {
  popularMovies: any;
  popularTvShows: any;

  constructor(
    private movieService: MovieService,
    private tvService: TvService
  ) {}

  ngOnInit(): void {
    this.getPopularMovies();
    this.getPopularTvShow();
  }

  getPopularTvShow() {
    this.tvService
      .getPopular()
      .subscribe((tvs) => (this.popularTvShows = tvs.results));
  }

  getPopularMovies() {
    this.movieService
      .getPopular()
      .subscribe((movies) => (this.popularMovies = movies.results));
  }
}
