import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRegion } from '../models/region.interface';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class RegionService {
  constructor(private readonly http: HttpClient) {}

  getRegions(): Observable<IRegion[]> {
    return this.http.get<IRegion[]>(`${environment.api}region/`);
  }
}
