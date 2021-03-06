import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiData } from 'src/app/model/ApiData';

@Injectable({
  providedIn: 'root',
})
export class TvService {
  constructor(private http: HttpClient) {}

  getPopular(): Observable<ApiData> {
    return this.http.get<ApiData>(
      `${environment.ApiURL}/tv/popular?api_key=${environment.ApiKey}&language=en-US&page=1`
    );
  }

  getGenre(): Observable<ApiData> {
    return this.http.get<ApiData>(
      `${environment.ApiURL}/genre/tv/list?api_key=${environment.ApiKey}`
    );
  }
}
