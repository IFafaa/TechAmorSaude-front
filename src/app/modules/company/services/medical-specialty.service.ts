import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMedicalSpecialty } from '../models/medical-specialty.interface';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class MedicalSpecialtyService {
  constructor(private readonly http: HttpClient) {}

  getMedicalSpecialties(): Observable<IMedicalSpecialty[]> {
    return this.http.get<IMedicalSpecialty[]>(`${environment.api}medical-specialty/`)
  }
}
