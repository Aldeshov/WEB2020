import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../product';
import { Category } from '../category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit { 

  products: Product[] = [];
  category: Category = null;
  constructor(private categoryService: CategoryService, private route: ActivatedRoute) { }

  ngOnInit(){
    this.getProducts();
    this.getCategory();
  }

  getProducts(){
    let id = this.route.snapshot.paramMap.get('categoryId');
    this.categoryService.categoryProduct(id).subscribe(products => this.products = products);
  }
  
  getCategory(){
    let id = this.route.snapshot.paramMap.get('categoryId');
    this.categoryService.getCategory(id).subscribe(category => this.category = category);
  }
}