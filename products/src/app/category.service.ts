import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

import { Observable, of } from 'rxjs';

import { Product } from './product';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {
  
  private productsUrl = 'api/products';
  private categoriesUrl = 'api/categories';

  constructor(private http: HttpClient) {  }

  allProducts():Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl).pipe(
      catchError(this.handleError<Product[]>('productsUrl', []))
    );
  }

  categoryProduct(id: string):Observable<Product[]> {
    let temp: Product[] = [];
    return this.http.get<Product[]>(this.productsUrl).pipe(map(products => products.filter(product => product.categoryid === id)));
  }

  getCategory(id: string):Observable<Category> {
    const url = `${this.categoriesUrl}/${id}`;
    return this.http.get<Category>(url).pipe(catchError(this.handleError<Category>('categoriesUrl')));
  }

  getProduct(id: string):Observable<Product> {
    const url = `${this.productsUrl}/${id}`;
    return this.http.get<Product>(url).pipe(catchError(this.handleError<Product>('productsUrl')));
  }

  getCategories():Observable<Category[]> {
    return this.http.get<Category[]>(this.categoriesUrl).pipe(catchError(this.handleError<Category[]>('categoriesUrl')));
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