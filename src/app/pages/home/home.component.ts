import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search/search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  multiSearchData: any;
  searchQuery: string = '';
  currentPage: number = 1;

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {}

  onValueChange(value: string) {
    this.searchQuery = value;
    this.multiSearch(this.searchQuery, this.currentPage);
    console.log(value);
  }

  multiSearch(query: string, page: number) {
    if (query != '') {
      this.searchService
        .multiSearch(query, page)
        .subscribe((data) => (this.multiSearchData = data));
    } else {
      this.multiSearchData = null;
    }
  }
}
