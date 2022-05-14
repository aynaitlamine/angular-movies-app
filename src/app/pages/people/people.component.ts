import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/services/people/people.service';
import { SearchService } from 'src/app/services/search/search.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent implements OnInit {
  people: any = [];
  backgroundImage: string = '/rkqL429xj07kybLC2jgpJbhrDNp.jpg';
  searchQuery: string = '';
  person: any;
  constructor(
    private peopleService: PeopleService,
    private searchService: SearchService
  ) {
    this.getPopular();
  }

  ngOnInit(): void {}

  getPopular() {
    this.peopleService
      .getPopular()
      .subscribe((data) => (this.people = data.results));
  }

  search(query: string) {
    this.searchQuery = query;
    this.searchPeople(this.searchQuery, 1);
  }

  searchPeople(query: string, page: number) {
    this.searchService
      .searchPeople(query, page)
      .subscribe((data) => (this.people = data.results));
  }
  onHover(person: any) {
    this.backgroundImage = person.known_for[0].backdrop_path;
    this.person = person;
  }
}
