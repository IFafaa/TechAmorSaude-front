import { Injectable } from '@angular/core';
import { IRegister, IRegisterResponse } from '../models/register.interface';
import { IRequest } from 'src/app/core/services/interfaces/request.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';
import { ILogin, ILoginResponse } from '../models/login.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly http: HttpClient) {}

  register(register: IRegister): Observable<IRequest<IRegisterResponse>> {
    return this.http.post<IRequest<IRegisterResponse>>(
      `${environment.api}auth/register`,
      register
    );
  }

  login(login: ILogin): Observable<IRequest<ILoginResponse>> {
    return this.http.post<IRequest<ILoginResponse>>(
      `${environment.api}auth/login`,
      login
    );
  }

  deleteUser(): Observable<void> {
    return this.http.delete<void>(`${environment.api}user/`);
  }
}
