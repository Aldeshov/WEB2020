import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Product } from './product';
import { Category } from './category';
import { PRODUCTS } from './products';
import { Categories } from './categories';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {
  
  constructor() {  }

  allProducts():Observable<Product[]> {
    return of(PRODUCTS);
  }

  categoryProduct(id: string):Observable<Product[]> {
    let temp: Product[] = [];
    for(let i = 0; i < PRODUCTS.length; i++) {
      if(PRODUCTS[i].categoryid.includes(id, 0)) {
        temp.push(PRODUCTS[i]);
      }
    }
    return of(temp);
  }

  getCategory(id: string):Observable<Category> {
    for(let i = 0; i < Categories.length; i++) {
      if(Categories[i].id.includes(id, 0)) {
        return of(Categories[i]);
      }
    }
    return of(null);
  }

  getProduct(id: string):Observable<Product> {
    return of(PRODUCTS.find(product => product.id === id));
  }

  getCategories():Observable<Category[]> {
    return of(Categories);
  }
}
