import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ICompany } from '../models/company.interface';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  constructor(private readonly http: HttpClient) {}

  getCompanies(): Observable<ICompany[]> {
    return this.http.get<ICompany[]>(`${environment.api}company`);
  }

  getCompany(id: number): Observable<ICompany> {
    return this.http.get<ICompany>(`${environment.api}company/${id}`);
  }
}
