import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ApiData } from 'src/app/model/ApiData';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

  multiSearch(query: string, page: number): Observable<ApiData> {
    return this.http.get<ApiData>(
      `${environment.ApiURL}/search/multi?api_key=${environment.ApiKey}&language=en-US&query=${query}&page=${page}&include_adult=false`
    );
  }
}
