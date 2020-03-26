import { Component, OnInit } from '@angular/core';

import { CategoryService } from '../category.service';
import { Product } from '../product';

@Component({
  selector: 'app-all-product-list',
  templateUrl: './all-product-list.component.html',
  styleUrls: ['./all-product-list.component.css']
})

export class AllProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.categoryService.allProducts().subscribe(products => this.products = products);
  }
}
