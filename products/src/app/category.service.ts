import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { Observable, of } from 'rxjs';

import { Product } from './product';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {
  
  private baseurl = 'http://127.0.0.1:8000/api/';
  // private httpOptions = {
  //   headers: new HttpHeaders({
  //     'content-type': 'application/json'
  //   })
  // }

  private productsUrl = 'products';
  private categoriesUrl = 'categories';

  constructor(private http: HttpClient) {  }

  allProducts():Observable<Product[]> {
    return this.http.get<Product[]>(this.baseurl + this.productsUrl).pipe(
      catchError(this.handleError<Product[]>('productsUrl', []))
    );
  }

  categoryProduct(id: string):Observable<Product[]> {
    const url = `${this.baseurl + this.categoriesUrl}/${id}/products`;
    return this.http.get<Product[]>(url).pipe(catchError(this.handleError<Product[]>('categoriesUrl')));
  }

  getCategory(id: string):Observable<Category> {
    const url = `${this.baseurl + this.categoriesUrl}/${id}`;
    return this.http.get<Category>(url).pipe(catchError(this.handleError<Category>('categoriesUrl')));
  }

  getProduct(id: string):Observable<Product> {
    const url = `${this.baseurl + this.productsUrl}/${id}`;
    return this.http.get<Product>(url).pipe(catchError(this.handleError<Product>('productsUrl')));
  }

  getCategories():Observable<Category[]> {
    return this.http.get<Category[]>(this.baseurl + this.categoriesUrl).pipe(catchError(this.handleError<Category[]>('categoriesUrl')));
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}