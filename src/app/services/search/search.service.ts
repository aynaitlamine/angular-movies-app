import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ApiData } from 'src/app/model/ApiData';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  keywords = '';
  constructor(private http: HttpClient) {}

  multiSearch(query: string, page: number): Observable<ApiData> {
    return this.http.get<ApiData>(
      `${environment.ApiURL}/search/multi?api_key=${environment.ApiKey}&language=en-US&query=${query}&page=${page}&include_adult=false`
    );
  }

  discover(
    mediaType = 'movie',
    page = 1,
    genres: any,
    keywwords: any
  ): Observable<ApiData> {
    return this.http.get<ApiData>(
      `${environment.ApiURL}/discover/${mediaType}?api_key=${
        environment.ApiKey
      }&language=en-US&include_adult=false&page=${page}&with_genres=${genres}&without_keywords=${
        this.keywords
      }&with_keywords=${keywwords.join('|')}`
    );
  }

  searchMovies(query: string, page: number): Observable<ApiData> {
    return this.http.get<ApiData>(
      `${environment.ApiURL}/search/movie?api_key=${environment.ApiKey}&language=en-US&include_adult=false&page=${page}&query=${query}`
    );
  }

  searchTvShows(query: string, page: number): Observable<ApiData> {
    return this.http.get<ApiData>(
      `${environment.ApiURL}/search/tv?api_key=${environment.ApiKey}&language=en-US&include_adult=false&page=${page}&query=${query}`
    );
  }

  searchPeople(query: string, page: number): Observable<ApiData> {
    return this.http.get<ApiData>(
      `${environment.ApiURL}/search/person?api_key=${environment.ApiKey}&language=en-US&include_adult=false&page=${page}&query=${query}`
    );
  }
}
