import { Injectable } from '@angular/core';
import { ApiData } from 'src/app/model/ApiData';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DetailsService {
  constructor(private http: HttpClient) {}

  getDetails(mediaType: string, Id: number): Observable<ApiData> {
    return this.http.get<ApiData>(
      `${environment.ApiURL}/${mediaType}/${Id}?api_key=${environment.ApiKey}`
    );
  }

  getCastAndCrew(mediaType: string, Id: number): Observable<ApiData> {
    return this.http.get<ApiData>(
      `${environment.ApiURL}/${mediaType}/${Id}/credits?api_key=${environment.ApiKey}`
    );
  }

  getSimilar(mediaType: string, Id: number): Observable<ApiData> {
    return this.http.get<ApiData>(
      `${environment.ApiURL}/${mediaType}/${Id}/similar?api_key=${environment.ApiKey}`
    );
  }
}
