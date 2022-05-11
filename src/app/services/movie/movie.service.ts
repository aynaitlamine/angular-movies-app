import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiData } from 'src/app/model/ApiData';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}
  getPopular(): Observable<ApiData> {
    return this.http.get<ApiData>(
      `${environment.ApiURL}/movie/popular?api_key=${environment.ApiKey}`
    );
  }
}
