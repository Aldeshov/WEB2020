import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map} from 'rxjs/operators';

import { Observable, of } from 'rxjs';

import { Student } from './oop/Student'

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private studentUrl = 'api/Students';

  constructor(private http: HttpClient) { }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentUrl).pipe(catchError(this.handleError<Student[]>('studentUrl', [])));
  }

  getStudent(uName: String, uPassword: String): Observable<Student> {
    return this.http.get<Student[]>(this.studentUrl).pipe(map(students => students.find(s => s.userName == uName && s.userPassword == uPassword),catchError(this.handleError<Student[]>('studentUrl', []))))
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error("ERROR:" + error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  setCookie(parameter, value, exdays): void {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = parameter + "=" + value + ";" + expires + ";path=/";
  }

  getCookie(parameter) {
    var get = parameter + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(get) == 0) {
        return c.substring(get.length, c.length);
      }
    }
    return "";
  }

  checkCookie(un: String,pw: String): Observable<Student> {
    var value1 = this.getCookie(un);
    var value2 = this.getCookie(pw);
    if (value1 != "" && value2 != "") 
    {
      return this.getStudent(value1,value2);
    }
    return of(null);
  }
}
