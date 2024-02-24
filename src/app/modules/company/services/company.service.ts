import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ICompany } from '../models/company.interface';
import { environment } from 'src/environment/environment';
import { IRequest } from 'src/app/core/services/interfaces/request.interface';

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

  removeCompany(id: number): Observable<ICompany> {
    return this.http.delete<ICompany>(`${environment.api}company/${id}`);
  }

  createCompany(
    company: Omit<ICompany, 'id'>
  ): Observable<IRequest<{ id: number }>> {
    return this.http.post<IRequest<{ id: number }>>(
      `${environment.api}company/`,
      company
    );
  }

  editCompany(
    company: Omit<ICompany, 'id'>,
    id: number
  ): Observable<IRequest<{ id: number }>> {
    return this.http.put<IRequest<{ id: number }>>(
      `${environment.api}company/${id}`,
      company
    );
  }
}
