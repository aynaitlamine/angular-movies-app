import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiData } from 'src/app/model/ApiData';

@Injectable({
  providedIn: 'root',
})
export class TrendingService {
  constructor(private http: HttpClient) {}

  getTrendings(mediaType: string, timeWindow: string): Observable<ApiData> {
    return this.http.get<ApiData>(
      `${environment.ApiURL}/trending/${mediaType}/${timeWindow}?api_key=${environment.ApiKey}`
    );
  }
}
