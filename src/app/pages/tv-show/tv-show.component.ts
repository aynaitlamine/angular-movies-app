import { KeywordService } from 'src/app/services/keyword/keyword.service';
import { TvService } from 'src/app/services/tv/tv.service';
import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search/search.service';

@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.css'],
})
export class TvShowComponent implements OnInit {
  genres: any;
  genreFilters: number[] = [];
  tvShowsKeywordsSearchQuery: string = '';
  searchQuery: string = '';
  tvShowsKeywords: any = [];
  selectedKeywords: any = [];
  keywordIDs: any = [];
  tvShows: any;
  backgroundImage: string = '';
  constructor(
    private tvService: TvService,
    private searchService: SearchService,
    private keywordService: KeywordService
  ) {}

  ngOnInit(): void {
    this.getGenre();
    this.getTvShows();
  }

  discover(mediaType = 'tv', page = 1) {
    this.searchService
      .discover(mediaType, page, this.genreFilters, this.keywordIDs)
      .subscribe((data) => (this.tvShows = data.results));
  }

  search(query: string) {
    this.searchQuery = query;
    this.searchTvShows(query, 1);
  }

  searchTvShows(query: string, page: number) {
    if (query != '') {
      this.searchService
        .searchTvShows(query, page)
        .subscribe((data) => (this.tvShows = data.results));
    } else {
      this.discover('tv', 1);
      this.searchQuery != '';
    }
  }

  getGenre() {
    this.tvService.getGenre().subscribe((data) => (this.genres = data.genres));
  }

  setFilterGenre(filterId: number) {
    if (this.genreFilters.indexOf(filterId) > -1) {
      this.genreFilters.splice(this.genreFilters.indexOf(filterId), 1);
    } else {
      this.genreFilters.push(filterId);
    }

    this.discover('tv', 1);
  }

  getTvShows() {
    this.tvService
      .getPopular()
      .subscribe((data) => (this.tvShows = data.results));
  }

  getTvShowsKeywords(query: string) {
    if (query != '') {
      this.tvShowsKeywordsSearchQuery = query;
      this.keywordService
        .getKeywords(query)
        .subscribe((data) => (this.tvShowsKeywords = data.results));
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

    this.discover('tv', 1);
  }

  onMouseOver(tvShow: any) {
    this.backgroundImage = tvShow.backdrop_path;
  }
}
