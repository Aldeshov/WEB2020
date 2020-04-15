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
  private vacancyUrl = 'vacancies';
  private companyUrl = 'companies';

  // private httpOptions = {
  //   headers: new HttpHeaders({
  //     'content-type': 'application/json'
  //   })
  // }

  constructor(private http: HttpClient) {  }

  // getVacancies():Observable<Vacancy[]> {
  //   return this.http.get<Vacancy[]>(this.baseurl + this.vacancyUrl).pipe(
  //     catchError(this.handleError<Vacancy[]>('vacancyUrl', []))
  //   );
  // }

  getCompaines():Observable<Company[]> {
    return this.http.get<Company[]>(this.baseurl + this.companyUrl).pipe(catchError(this.handleError<Company[]>('companyUrl')));
  }

  // getCompany(id: string):Observable<Company> {
  //   const url = `${this.baseurl + this.companyUrl}/${id}`;
  //   return this.http.get<Company>(url).pipe(catchError(this.handleError<Company>('companyUrl')));
  // }

  // getVacancy(id: string):Observable<Vacancy> {
  //   const url = `${this.baseurl + this.vacancyUrl}/${id}`;
  //   return this.http.get<Vacancy>(url).pipe(catchError(this.handleError<Vacancy>('vacancyUrl')));
  // }
  
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