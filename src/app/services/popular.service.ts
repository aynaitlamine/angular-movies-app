import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiData } from 'src/app/model/ApiData';

@Injectable({
  providedIn: 'root',
})
export class PopularService {
  constructor() {}
}
