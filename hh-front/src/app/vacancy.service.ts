import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { Vacancy } from './Vacancy'
import { Company } from './Company'
import { LoginResponse } from './login';

@Injectable({
  providedIn: 'root'
})

export class VacancyService {
  private baseurl = 'http://127.0.0.1:8000/api/';
  private companyUrl = 'companies';

  constructor(private http: HttpClient) {  }

  getCompaines():Observable<Company[]> {
    return this.http.get<Company[]>(this.baseurl + this.companyUrl).pipe(catchError(this.handleError<Company[]>('companyUrl')));
  }
  
  companyVacancy(id: string):Observable<Vacancy[]> {
    const url = `${this.baseurl + this.companyUrl}/${id}/vacancies`;
    return this.http.get<Vacancy[]>(url).pipe(catchError(this.handleError<Vacancy[]>('companyUrl')));
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  login(username, password): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.baseurl}login/`, {
      username,
      password
    })
  }
}