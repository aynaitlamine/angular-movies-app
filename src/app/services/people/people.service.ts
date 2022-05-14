import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ApiData } from 'src/app/model/ApiData';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  constructor(private http: HttpClient) {}

  getPopular(): Observable<ApiData> {
    return this.http.get<ApiData>(
      `${environment.ApiURL}/person/popular?api_key=${environment.ApiKey}`
    );
  }
}
