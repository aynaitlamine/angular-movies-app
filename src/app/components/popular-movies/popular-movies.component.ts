import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie/movie.service';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css'],
})
export class PopularMoviesComponent implements OnInit {
  movies: any = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.getPopularMovies();
  }

  getPopularMovies() {
    this.movieService
      .getPopular()
      .subscribe((movies) => (this.movies = movies.results));
  }
}
