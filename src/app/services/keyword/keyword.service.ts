import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiData } from 'src/app/model/ApiData';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class KeywordService {
  constructor(private http: HttpClient) {}

  getKeywords(query: string): Observable<ApiData> {
    return this.http.get<ApiData>(
      `${environment.ApiURL}/search/keyword?api_key=${environment.ApiKey}&query=${query}`
    );
  }

  getKeywordsByMediaType(mediaType: string, Id: number): Observable<ApiData> {
    return this.http.get<ApiData>(
      `${environment.ApiURL}/${mediaType}/${Id}/keywords?api_key=${environment.ApiKey}`
    );
  }
}
