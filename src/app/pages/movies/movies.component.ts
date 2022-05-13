import { Component, OnInit } from '@angular/core';
import { KeywordService } from 'src/app/services/keyword/keyword.service';
import { MovieService } from 'src/app/services/movie/movie.service';
import { SearchService } from 'src/app/services/search/search.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  genres: any;
  genreFilters: number[] = [];
  moviesKeywordsSearchQuery: string = '';
  searchQuery: string = '';
  moviesKeywords: any = [];
  selectedKeywords: any = [];
  keywordIDs: any = [];
  movies: any;
  backgroundImage: string = '';
  constructor(
    private movieService: MovieService,
    private searchService: SearchService,
    private keywordService: KeywordService
  ) {}

  ngOnInit(): void {
    this.getGenre();
    this.getMovies();
  }

  discover(mediaType = 'movie', page = 1) {
    this.searchService
      .discover(mediaType, page, this.genreFilters, this.keywordIDs)
      .subscribe((data) => (this.movies = data.results));
  }

  search(query: string) {
    this.searchQuery = query;
    this.searchMovies(query, 1);
  }

  searchMovies(query: string, page: number) {
    if (query != '') {
      this.searchService
        .searchMovies(query, page)
        .subscribe((data) => (this.movies = data.results));
    } else {
      this.discover('movie', 1);
      this.searchQuery != '';
    }
  }

  getGenre() {
    this.movieService
      .getGenre()
      .subscribe((data) => (this.genres = data.genres));
  }

  setFilterGenre(filterId: number) {
    if (this.genreFilters.indexOf(filterId) > -1) {
      this.genreFilters.splice(this.genreFilters.indexOf(filterId), 1);
    } else {
      this.genreFilters.push(filterId);
    }

    this.discover('movie', 1);
  }

  getMovies() {
    this.movieService
      .getPopular()
      .subscribe((data) => (this.movies = data.results));
  }

  getMoviesKeywords(query: string) {
    if (query != '') {
      this.moviesKeywordsSearchQuery = query;
      this.keywordService
        .getKeywords(query)
        .subscribe((data) => (this.moviesKeywords = data.results));
    } else {
    }
  }

  onSelectedKeywords(keyword: any) {
    if (this.selectedKeywords.indexOf(keyword) > -1) {
      this.selectedKeywords.splice(this.selectedKeywords.indexOf(keyword), 1);
    } else {
      this.selectedKeywords.push(keyword);
    }

    this.keywordIDs = [];
    this.selectedKeywords.forEach((element: any) => {
      this.keywordIDs.push(element.id);
    });

    this.discover('movie', 1);
  }

  onMouseOver(movie: any) {
    this.backgroundImage = movie.backdrop_path;
    console.log('test');
  }
}
