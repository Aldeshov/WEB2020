import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../product';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})

export class ProductItemComponent implements OnInit {

  product: Product;

  constructor(private route: ActivatedRoute, private categoryService: CategoryService) { }

  ngOnInit(): void{
    this.getProduct();
  }

  getProduct(): void {
    let id = this.route.snapshot.paramMap.get('productId');
    this.categoryService.getProduct(id).subscribe(product => this.product = product);
  }

  showImage(image): void{
    (document.querySelector("#" + this.product.id) as HTMLImageElement).src = image;
  }

  share(): void{
    (document.querySelector("#" + this.product.id + "l") as HTMLLinkElement).href = "https://telegram.me/share/url?url="  + this.product.link + "&text=Hey+there!+Look+at+this+from+AliExpress:";
  }
}