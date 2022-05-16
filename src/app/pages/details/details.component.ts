import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { DetailsService } from 'src/app/services/details/details.service';
import { KeywordService } from 'src/app/services/keyword/keyword.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  detail: any = {};
  keywords: any = {};
  casts: any = {};
  similarMovies: any;
  currentPage = 1;
  mediaType: any;
  Id: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private detailsService: DetailsService,
    private keywordService: KeywordService
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.getDetails();
      }
    });
  }

  ngOnInit(): void {}

  getDetails() {
    this.mediaType = this.route.snapshot.params['type'];
    this.Id = this.route.snapshot.params['id'];
    this.detailsService
      .getDetails(this.mediaType, this.Id)
      .subscribe((data) => (this.detail = data));

    this.keywordService
      .getKeywordsByMediaType(this.mediaType, this.Id)
      .subscribe((data) => (this.keywords = data));

    this.detailsService
      .getSimilar(this.mediaType, this.Id)
      .subscribe((data) => (this.similarMovies = data));
  }
}
