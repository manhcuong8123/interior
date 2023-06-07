import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { IUser } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  signUp(name: string, email: string, password: string, confirmPassword: string): Observable<any> {
    return this.http.post<IUser>(`http://localhost:8080/api/signup`, { name, email, password, confirmPassword });
  }
  signIn(email: string, password: string): Observable<any> {
    return this.http.post<IUser>(`http://localhost:8080/api/signin`, { email, password });
  }
}
